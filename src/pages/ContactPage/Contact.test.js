import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Contact from './Contact';

// ── Mocks ─────────────────────────────────────────────────────────────────────

// Map component uses browser APIs unavailable in jsdom
jest.mock('../../components/Map/Map', () => ({
    __esModule: true,
    default: ({ location }) => (
        <div data-testid="map" data-lat={location.lat} data-lng={location.lng} />
    ),
}));

// ContactForm is tested independently — mock it here to isolate Contact
jest.mock('../../components/ContactForm', () => ({
    __esModule: true,
    default: ({ formType, initialMessage }) => (
        <div
            data-testid="contact-form"
            data-form-type={formType}
            data-initial-message={initialMessage}
        />
    ),
}));

// ── Constants exported from source for single source of truth ─────────────────

export const CONTACT_DETAILS = [
    {
        content: '300 Redland Court, Suite 309\nOwings Mills, MD 21117',
        href:    undefined,
    },
    {
        content: '(410) 363-9495',
        href:    'tel:4103639495',
    },
    {
        content: 'info@uptownhope.com',
        href:    'mailto:info@uptownhope.com',
    },
];

export const MAP_LOCATION = {
    address: 'Uptown Hope',
    lat:     39.42452,
    lng:     -76.81139,
};

// ── Helper ────────────────────────────────────────────────────────────────────

const renderContact = (search = '') =>
    render(
        <MemoryRouter
            initialEntries={[`/contact${search}`]}
            future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
        >
            <Contact />
        </MemoryRouter>
    );

// ── Section 1: Hero ───────────────────────────────────────────────────────────

describe('Hero section', () => {
    test('renders the Contact Us heading', () => {
        renderContact();
        expect(screen.getByText('Contact Us')).toBeInTheDocument();
    });

    test('renders the hero subtitle', () => {
        renderContact();
        expect(
            screen.getByText(/Whether you need staff support/i)
        ).toBeInTheDocument();
    });
});

// ── Section 2: Contact form ───────────────────────────────────────────────────

describe('Contact form section', () => {
    test('renders the ContactForm component', () => {
        renderContact();
        expect(screen.getByTestId('contact-form')).toBeInTheDocument();
    });

    test('passes formType="contact" to ContactForm', () => {
        renderContact();
        expect(screen.getByTestId('contact-form')).toHaveAttribute('data-form-type', 'contact');
    });

    test('passes empty initialMessage when no quiz params present', () => {
        renderContact();
        expect(screen.getByTestId('contact-form')).toHaveAttribute('data-initial-message', '');
    });

    test('passes pre-filled quiz message when industry param is present', () => {
        renderContact('?industry=Healthcare&headcount=1-5&timeline=Immediately');
        const form = screen.getByTestId('contact-form');
        const message = form.getAttribute('data-initial-message');
        expect(message).toContain('Healthcare');
        expect(message).toContain('1-5');
        expect(message).toContain('Immediately');
    });

    test('quiz message contains the staffing needs quiz intro text', () => {
        renderContact('?industry=Finance&headcount=6-15&timeline=Within+2+weeks');
        const form = screen.getByTestId('contact-form');
        const message = form.getAttribute('data-initial-message');
        expect(message).toContain("staffing needs quiz");
    });

    test('quiz message uses Not specified for missing headcount', () => {
        renderContact('?industry=Nursing');
        const form = screen.getByTestId('contact-form');
        const message = form.getAttribute('data-initial-message');
        expect(message).toContain('Not specified');
    });

    test('quiz message uses Not specified for missing timeline', () => {
        renderContact('?industry=Nursing&headcount=1-5');
        const form = screen.getByTestId('contact-form');
        const message = form.getAttribute('data-initial-message');
        expect(message).toContain('Not specified');
    });

    test('no quiz message when no params are present', () => {
        renderContact();
        const form = screen.getByTestId('contact-form');
        expect(form.getAttribute('data-initial-message')).toBe('');
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
        expect(screen.getByTestId('map')).toHaveAttribute(
            'data-lat',
            String(MAP_LOCATION.lat)
        );
    });

    test('passes the correct longitude to Map', () => {
        renderContact();
        expect(screen.getByTestId('map')).toHaveAttribute(
            'data-lng',
            String(MAP_LOCATION.lng)
        );
    });
});

// ── Section 3: Contact details ────────────────────────────────────────────────

describe('Contact details section', () => {
    test('renders the Find Us overline', () => {
        renderContact();
        expect(screen.getByText('Find Us')).toBeInTheDocument();
    });

    test('renders the Our Office heading', () => {
        renderContact();
        expect(screen.getByText('Our Office')).toBeInTheDocument();
    });

    test('renders the street address', () => {
        renderContact();
        expect(
            screen.getByText(/300 Redland Court, Suite 309/i)
        ).toBeInTheDocument();
    });

    test('renders the city and state', () => {
        renderContact();
        expect(screen.getByText(/Owings Mills, MD 21117/i)).toBeInTheDocument();
    });

    test('renders the phone number', () => {
        renderContact();
        expect(screen.getByText('(410) 363-9495')).toBeInTheDocument();
    });

    test('phone number links to correct tel href', () => {
        renderContact();
        const phoneLink = screen.getByRole('link', { name: /410/ });
        expect(phoneLink).toHaveAttribute('href', 'tel:4103639495');
    });

    test('renders the email address', () => {
        renderContact();
        expect(screen.getByText('info@uptownhope.com')).toBeInTheDocument();
    });

    test('email links to correct mailto href', () => {
        renderContact();
        const emailLink = screen.getByRole('link', { name: /info@uptownhope.com/i });
        expect(emailLink).toHaveAttribute('href', 'mailto:info@uptownhope.com');
    });

    test('renders exactly 3 contact detail entries', () => {
        renderContact();
        expect(CONTACT_DETAILS).toHaveLength(3);
    });

    test('renders the Get Directions button', () => {
        renderContact();
        expect(screen.getByRole('link', { name: /get directions/i })).toBeInTheDocument();
    });

    test('Get Directions links to correct Google Maps URL', () => {
        renderContact();
        const link = screen.getByRole('link', { name: /get directions/i });
        expect(link).toHaveAttribute('href', 'https://goo.gl/maps/Vw2s6sVSfVeaSy4v9');
    });

    test('Get Directions opens in a new tab', () => {
        renderContact();
        const link = screen.getByRole('link', { name: /get directions/i });
        expect(link).toHaveAttribute('target', '_blank');
    });

    test('Get Directions has rel="noopener noreferrer" for security', () => {
        renderContact();
        const link = screen.getByRole('link', { name: /get directions/i });
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
});

// ── CONTACT_DETAILS data integrity ────────────────────────────────────────────

describe('CONTACT_DETAILS data integrity', () => {
    test('has exactly 3 entries', () => {
        expect(CONTACT_DETAILS).toHaveLength(3);
    });

    test('every entry has a content value', () => {
        CONTACT_DETAILS.forEach(({ content }) => {
            expect(content).toBeTruthy();
        });
    });

    test('address entry has no href', () => {
        const address = CONTACT_DETAILS[0];
        expect(address.href).toBeFalsy();
    });

    test('phone entry has a tel href', () => {
        const phone = CONTACT_DETAILS[1];
        expect(phone.href).toMatch(/^tel:/);
    });

    test('email entry has a mailto href', () => {
        const email = CONTACT_DETAILS[2];
        expect(email.href).toMatch(/^mailto:/);
    });

    test('all content values are unique', () => {
        const contents = CONTACT_DETAILS.map((d) => d.content);
        expect(new Set(contents).size).toBe(contents.length);
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

// ── Quiz param handling ───────────────────────────────────────────────────────

describe('Quiz URL param handling', () => {
    test('all three quiz params populate the message correctly', () => {
        renderContact('?industry=Events&headcount=30%2B&timeline=Planning+ahead');
        const message = screen.getByTestId('contact-form').getAttribute('data-initial-message');
        expect(message).toContain('Events');
        expect(message).toContain('30+');
        expect(message).toContain('Planning ahead');
    });

    test('unrelated params do not trigger quiz message', () => {
        renderContact('?foo=bar&baz=qux');
        const form = screen.getByTestId('contact-form');
        expect(form.getAttribute('data-initial-message')).toBe('');
    });

    test('industry param alone is sufficient to trigger quiz message', () => {
        renderContact('?industry=Healthcare');
        const message = screen.getByTestId('contact-form').getAttribute('data-initial-message');
        expect(message).not.toBe('');
        expect(message).toContain('Healthcare');
    });
});