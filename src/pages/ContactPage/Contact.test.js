import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Contact, { CONTACT_DETAILS, MAP_LOCATION, FORM_TABS } from './Contact';

// ── Mocks ─────────────────────────────────────────────────────────────────────

// Map component uses browser APIs unavailable in jsdom
jest.mock('../../components/Map/Map', () => ({
    __esModule: true,
    default: ({ location }) => (
        <div data-testid="map" data-lat={location.lat} data-lng={location.lng} />
    ),
}));

// ContactForm is tested independently — mock it here to isolate Contact.
// Every prop Contact passes is surfaced as an attribute so the wiring is
// assertable without rendering the real form.
jest.mock('../../components/ContactForm', () => ({
    __esModule: true,
    default: ({ formType, initialMessage, initialPosition, initialIntent }) => (
        <div
            data-testid="contact-form"
            data-form-type={formType}
            data-initial-message={initialMessage}
            data-initial-position={initialPosition}
            data-initial-intent={initialIntent}
        />
    ),
}));

// ── Helpers ───────────────────────────────────────────────────────────────────

const renderContact = (search = '') =>
    render(
        <MemoryRouter
            initialEntries={[`/contact${search}`]}
            future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
        >
            <Contact />
        </MemoryRouter>
    );

const form = () => screen.getByTestId('contact-form');
const attr = (name) => form().getAttribute(name);

// ── Section 1: Hero ───────────────────────────────────────────────────────────

describe('Hero section', () => {
    test('renders the Contact Us heading', () => {
        renderContact();
        expect(screen.getByText('Contact Us')).toBeInTheDocument();
    });

    test('renders the hero subtitle', () => {
        renderContact();
        expect(screen.getByText(/Whether you need staff support/i)).toBeInTheDocument();
    });
});

// ── Section 2: Audience toggle ────────────────────────────────────────────────

describe('Audience toggle', () => {
    test('renders both tabs', () => {
        renderContact();
        expect(screen.getAllByRole('tab')).toHaveLength(FORM_TABS.length);
    });

    test('renders the business tab label', () => {
        renderContact();
        expect(screen.getByRole('tab', { name: /i need staff/i })).toBeInTheDocument();
    });

    test('renders the job seeker tab label', () => {
        renderContact();
        expect(screen.getByRole('tab', { name: /looking for work/i })).toBeInTheDocument();
    });

    test('business tab is selected by default', () => {
        renderContact();
        expect(screen.getByRole('tab', { name: /i need staff/i }))
            .toHaveAttribute('aria-selected', 'true');
    });

    test('job seeker tab is not selected by default', () => {
        renderContact();
        expect(screen.getByRole('tab', { name: /looking for work/i }))
            .toHaveAttribute('aria-selected', 'false');
    });

    test('clicking the job seeker tab switches the form', async () => {
        renderContact();
        await userEvent.click(screen.getByRole('tab', { name: /looking for work/i }));
        expect(attr('data-form-type')).toBe('contractor');
    });

    test('clicking back to the business tab switches the form again', async () => {
        renderContact('?form=contractor');
        await userEvent.click(screen.getByRole('tab', { name: /i need staff/i }));
        expect(attr('data-form-type')).toBe('business');
    });
});

// ── Section 2: ContactForm wiring ─────────────────────────────────────────────

describe('ContactForm wiring', () => {
    test('renders the ContactForm component', () => {
        renderContact();
        expect(form()).toBeInTheDocument();
    });

    test('passes formType="business" by default', () => {
        renderContact();
        expect(attr('data-form-type')).toBe('business');
    });

    test('passes empty initialMessage when no quiz params present', () => {
        renderContact();
        expect(attr('data-initial-message')).toBe('');
    });

    test('passes application intent by default', () => {
        renderContact();
        expect(attr('data-initial-intent')).toBe('application');
    });
});

// ── Section 2: URL param handling ─────────────────────────────────────────────

describe('URL param handling', () => {
    test('?form=contractor opens the job seeker tab', () => {
        renderContact('?form=contractor');
        expect(attr('data-form-type')).toBe('contractor');
    });

    test('?form=contractor marks the job seeker tab as selected', () => {
        renderContact('?form=contractor');
        expect(screen.getByRole('tab', { name: /looking for work/i }))
            .toHaveAttribute('aria-selected', 'true');
    });

    test('position param prefills the contractor form', () => {
        renderContact('?form=contractor&position=Healthcare');
        expect(attr('data-initial-position')).toBe('Healthcare');
    });

    test('position param is ignored on the business tab', () => {
        renderContact('?position=Healthcare');
        expect(attr('data-initial-position')).toBe('');
    });

    test('intent=message is passed through', () => {
        renderContact('?form=contractor&intent=message');
        expect(attr('data-initial-intent')).toBe('message');
    });

    test('an unrecognised intent falls back to application', () => {
        renderContact('?form=contractor&intent=nonsense');
        expect(attr('data-initial-intent')).toBe('application');
    });

    test('quiz params keep the business tab even alongside form=contractor', () => {
        renderContact('?form=contractor&industry=Healthcare');
        expect(attr('data-form-type')).toBe('business');
    });
});

// ── Section 2: Staffing quiz prefill ──────────────────────────────────────────

describe('Staffing quiz prefill', () => {
    test('industry param populates the message', () => {
        renderContact('?industry=Healthcare&headcount=1-5&timeline=Immediately');
        const message = attr('data-initial-message');
        expect(message).toContain('Healthcare');
        expect(message).toContain('1-5');
        expect(message).toContain('Immediately');
    });

    test('message contains the staffing needs quiz intro text', () => {
        renderContact('?industry=Finance&headcount=6-15&timeline=Within+2+weeks');
        expect(attr('data-initial-message')).toContain('staffing needs quiz');
    });

    test('missing headcount falls back to Not specified', () => {
        renderContact('?industry=Nursing');
        expect(attr('data-initial-message')).toContain('Not specified');
    });

    test('missing timeline falls back to Not specified', () => {
        renderContact('?industry=Nursing&headcount=1-5');
        expect(attr('data-initial-message')).toContain('Not specified');
    });

    test('industry param alone is sufficient', () => {
        renderContact('?industry=Healthcare');
        const message = attr('data-initial-message');
        expect(message).not.toBe('');
        expect(message).toContain('Healthcare');
    });

    test('all three quiz params decode correctly', () => {
        renderContact('?industry=Events&headcount=30%2B&timeline=Planning+ahead');
        const message = attr('data-initial-message');
        expect(message).toContain('Events');
        expect(message).toContain('30+');
        expect(message).toContain('Planning ahead');
    });

    test('unrelated params do not trigger a quiz message', () => {
        renderContact('?foo=bar&baz=qux');
        expect(attr('data-initial-message')).toBe('');
    });
});

// ── Section 3: Map ────────────────────────────────────────────────────────────

describe('Map section', () => {
    test('renders the Map component', () => {
        renderContact();
        expect(screen.getByTestId('map')).toBeInTheDocument();
    });

    test('passes the correct latitude to Map', () => {
        renderContact();
        expect(screen.getByTestId('map'))
            .toHaveAttribute('data-lat', String(MAP_LOCATION.lat));
    });

    test('passes the correct longitude to Map', () => {
        renderContact();
        expect(screen.getByTestId('map'))
            .toHaveAttribute('data-lng', String(MAP_LOCATION.lng));
    });
});

// ── Section 3: Contact details ────────────────────────────────────────────────

describe('Contact details section', () => {
    test('renders the Find Us heading', () => {
        renderContact();
        expect(screen.getByText('Find Us')).toBeInTheDocument();
    });

    test('renders the street address', () => {
        renderContact();
        expect(screen.getByText(/300 Redland Court, Suite 309/i)).toBeInTheDocument();
    });

    test('renders the city and state', () => {
        renderContact();
        expect(screen.getByText(/Owings Mills, MD 21117/i)).toBeInTheDocument();
    });

    test('renders every contact detail from the source data', () => {
        renderContact();
        CONTACT_DETAILS.forEach(({ content }) => {
            // The address renders as one pre-line node, so match its first line
            const [firstLine] = content.split('\n');
            expect(screen.getByText(new RegExp(firstLine.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i')))
                .toBeInTheDocument();
        });
    });

    test('phone number links to the matching tel href', () => {
        renderContact();
        const phone = CONTACT_DETAILS.find(({ href }) => href?.startsWith('tel:'));
        const link  = screen.getByRole('link', { name: phone.content });
        expect(link).toHaveAttribute('href', phone.href);
    });

    test('email links to the matching mailto href', () => {
        renderContact();
        const email = CONTACT_DETAILS.find(({ href }) => href?.startsWith('mailto:'));
        const link  = screen.getByRole('link', { name: email.content });
        expect(link).toHaveAttribute('href', email.href);
    });

    test('renders the Get Directions button', () => {
        renderContact();
        expect(screen.getByRole('link', { name: /get directions/i })).toBeInTheDocument();
    });

    test('Get Directions links to the correct Google Maps URL', () => {
        renderContact();
        expect(screen.getByRole('link', { name: /get directions/i }))
            .toHaveAttribute('href', 'https://goo.gl/maps/Vw2s6sVSfVeaSy4v9');
    });

    test('Get Directions opens in a new tab', () => {
        renderContact();
        expect(screen.getByRole('link', { name: /get directions/i }))
            .toHaveAttribute('target', '_blank');
    });

    test('Get Directions has rel="noopener noreferrer" for security', () => {
        renderContact();
        expect(screen.getByRole('link', { name: /get directions/i }))
            .toHaveAttribute('rel', 'noopener noreferrer');
    });
});

// ── CONTACT_DETAILS data integrity ────────────────────────────────────────────

describe('CONTACT_DETAILS data integrity', () => {
    test('has exactly 3 entries', () => {
        expect(CONTACT_DETAILS).toHaveLength(3);
    });

    test('every entry has a content value', () => {
        CONTACT_DETAILS.forEach(({ content }) => expect(content).toBeTruthy());
    });

    test('address entry has no href', () => {
        expect(CONTACT_DETAILS[0].href).toBeFalsy();
    });

    test('exactly one entry is a tel link', () => {
        const tels = CONTACT_DETAILS.filter(({ href }) => href?.startsWith('tel:'));
        expect(tels).toHaveLength(1);
    });

    test('exactly one entry is a mailto link', () => {
        const mailtos = CONTACT_DETAILS.filter(({ href }) => href?.startsWith('mailto:'));
        expect(mailtos).toHaveLength(1);
    });

    test('the tel href digits match the displayed phone number', () => {
        const phone  = CONTACT_DETAILS.find(({ href }) => href?.startsWith('tel:'));
        const digits = phone.content.replace(/\D/g, '');
        expect(phone.href).toBe(`tel:${digits}`);
    });

    test('the mailto href matches the displayed email', () => {
        const email = CONTACT_DETAILS.find(({ href }) => href?.startsWith('mailto:'));
        expect(email.href).toBe(`mailto:${email.content}`);
    });

    test('all content values are unique', () => {
        const contents = CONTACT_DETAILS.map((d) => d.content);
        expect(new Set(contents).size).toBe(contents.length);
    });
});

// ── FORM_TABS data integrity ──────────────────────────────────────────────────

describe('FORM_TABS data integrity', () => {
    test('has exactly 2 tabs', () => {
        expect(FORM_TABS).toHaveLength(2);
    });

    test('tab ids match the form types ContactForm expects', () => {
        expect(FORM_TABS.map((t) => t.id)).toEqual(['business', 'contractor']);
    });

    test('every tab has a label', () => {
        FORM_TABS.forEach(({ label }) => expect(label).toBeTruthy());
    });
});

// ── MAP_LOCATION data integrity ───────────────────────────────────────────────

describe('MAP_LOCATION data integrity', () => {
    test('has an address string', () => {
        expect(MAP_LOCATION.address).toBeTruthy();
    });

    test('has a valid latitude for Maryland', () => {
        // Owings Mills, MD is approximately 39.4° N
        expect(MAP_LOCATION.lat).toBeGreaterThan(39);
        expect(MAP_LOCATION.lat).toBeLessThan(40);
    });

    test('has a valid longitude for Maryland', () => {
        // Owings Mills, MD is approximately -76.8° W
        expect(MAP_LOCATION.lng).toBeGreaterThan(-77);
        expect(MAP_LOCATION.lng).toBeLessThan(-76);
    });
});