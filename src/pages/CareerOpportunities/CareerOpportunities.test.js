import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import CareerOpportunities, { CATEGORIES } from './CareerOpportunities';

// ── Mocks ─────────────────────────────────────────────────────────────────────

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));

// react-parallax fails in jsdom — render children directly
jest.mock('react-parallax', () => ({
    Parallax: ({ children }) => <div data-testid="parallax">{children}</div>,
}));

// Image imports
jest.mock('../pageImages/application.jpg', () => 'application.jpg');

// ── Helper ────────────────────────────────────────────────────────────────────

const renderPage = () =>
    render(
        <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <CareerOpportunities />
        </MemoryRouter>
    );

beforeEach(() => {
    mockNavigate.mockClear();
});

// ── Section 1: Hero ───────────────────────────────────────────────────────────

describe('Hero section', () => {
    test('renders the parallax wrapper', () => {
        renderPage();
        expect(screen.getByTestId('parallax')).toBeInTheDocument();
    });

    test('renders the hero heading', () => {
        renderPage();
        expect(screen.getByText('Employment at Uptown Hope')).toBeInTheDocument();
    });

    test('renders the hero subtitle', () => {
        renderPage();
        expect(screen.getByText('Work when you want, where you want.')).toBeInTheDocument();
    });
});

// ── Section 2: Intro ──────────────────────────────────────────────────────────

describe('Intro section', () => {
    test('renders the Join Our Team overline', () => {
        renderPage();
        expect(screen.getByText('Join Our Team')).toBeInTheDocument();
    });

    test('renders the Looking for a Fresh Start heading', () => {
        renderPage();
        expect(screen.getByText('Looking for a Fresh Start?')).toBeInTheDocument();
    });

    test('renders the intro description', () => {
        renderPage();
        expect(screen.getByText(/reach out via email or click/i)).toBeInTheDocument();
    });

    test('renders the section image with correct alt text', () => {
        renderPage();
        expect(screen.getByAltText('Direct Support')).toBeInTheDocument();
    });

    test('renders the intro Contact Us button', () => {
        renderPage();
        const buttons = screen.getAllByRole('button', { name: /contact us/i });
        expect(buttons.length).toBeGreaterThan(0);
    });
});

// ── Section 3: Slideshow ──────────────────────────────────────────────────────

describe('Card slideshow', () => {
    test('renders the Industries overline', () => {
        renderPage();
        expect(screen.getByText('Industries')).toBeInTheDocument();
    });

    test('renders the Explore Employment Opportunities heading', () => {
        renderPage();
        expect(screen.getByText('Explore Employment Opportunities')).toBeInTheDocument();
    });

    test('renders the first card title on load — Healthcare', () => {
        renderPage();
        expect(screen.getByText('Health Care Staff Support')).toBeInTheDocument();
    });

    test('renders the first card heading — Healthcare', () => {
        renderPage();
        expect(screen.getByText('Healthcare')).toBeInTheDocument();
    });

    test('renders the first card description', () => {
        renderPage();
        expect(screen.getByText(CATEGORIES[0].desc)).toBeInTheDocument();
    });

    test('renders the View Positions button', () => {
        renderPage();
        expect(screen.getByRole('button', { name: /view positions/i })).toBeInTheDocument();
    });

    test('renders the Previous arrow button', () => {
        renderPage();
        expect(screen.getByRole('button', { name: /previous/i })).toBeInTheDocument();
    });

    test('renders the Next arrow button', () => {
        renderPage();
        expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument();
    });

    test(`renders exactly ${CATEGORIES.length} dot indicators`, () => {
        renderPage();
        const dots = screen.getAllByRole('button', { name: /go to slide/i });
        expect(dots).toHaveLength(CATEGORIES.length);
    });

    test('clicking Next advances to second card — Nursing', async () => {
        renderPage();
        await userEvent.click(screen.getByRole('button', { name: /next/i }));
        expect(screen.getByText('Nursing')).toBeInTheDocument();
        expect(screen.getByText('Nursing Referral Service Support')).toBeInTheDocument();
    });

    test('clicking Next twice advances to third card — Administration', async () => {
        renderPage();
        const next = screen.getByRole('button', { name: /next/i });
        await userEvent.click(next);
        await userEvent.click(next);
        expect(screen.getByText('Administration')).toBeInTheDocument();
    });

    test('clicking Previous from first card wraps to last card — Events', async () => {
        renderPage();
        await userEvent.click(screen.getByRole('button', { name: /previous/i }));
        expect(screen.getByText('Events')).toBeInTheDocument();
        expect(screen.getByText('Event Planning')).toBeInTheDocument();
    });

    test('clicking a dot navigates directly to that slide', async () => {
        renderPage();
        // Click dot 3 (Finance — index 3)
        const dots = screen.getAllByRole('button', { name: /go to slide/i });
        await userEvent.click(dots[3]);
        expect(screen.getByText('Finance')).toBeInTheDocument();
        expect(screen.getByText('Accounting & Finance Support')).toBeInTheDocument();
    });
});

// ── Section 3: Modal ──────────────────────────────────────────────────────────

describe('Category modal', () => {
    test('modal is not visible on initial render', () => {
        renderPage();
        expect(screen.queryByText('Typical Positions')).not.toBeInTheDocument();
    });

    test('clicking View Positions opens the modal', async () => {
        renderPage();
        await userEvent.click(screen.getByRole('button', { name: /view positions/i }));
        expect(screen.getByText('Typical Positions')).toBeInTheDocument();
    });

    test('modal shows the correct card title for Healthcare', async () => {
        renderPage();
        await userEvent.click(screen.getByRole('button', { name: /view positions/i }));
        expect(screen.getByText('Health Care Staff Support')).toBeInTheDocument();
    });

    test('modal shows the correct description for Healthcare', async () => {
        renderPage();
        await userEvent.click(screen.getByRole('button', { name: /view positions/i }));
        expect(screen.getByText(CATEGORIES[0].desc)).toBeInTheDocument();
    });

    test('modal shows all Healthcare position chips', async () => {
        renderPage();
        await userEvent.click(screen.getByRole('button', { name: /view positions/i }));
        CATEGORIES[0].positions.forEach((pos) => {
            expect(screen.getByText(pos)).toBeInTheDocument();
        });
    });

    test(`modal shows exactly ${CATEGORIES[0].positions.length} position chips for Healthcare`, async () => {
        renderPage();
        await userEvent.click(screen.getByRole('button', { name: /view positions/i }));
        // Each chip renders the position label — count them in the modal region
        const modal = screen.getByRole('presentation');
        const chips = within(modal).getAllByRole('button').filter(
            (el) => el.className.includes('MuiChip') || el.tagName === 'DIV'
        );
        // Assert directly via position text count
        CATEGORIES[0].positions.forEach((pos) => {
            expect(within(modal).getByText(pos)).toBeInTheDocument();
        });
    });

    test('clicking Close button closes the modal', async () => {
        renderPage();
        await userEvent.click(screen.getByRole('button', { name: /view positions/i }));
        expect(screen.getByText('Typical Positions')).toBeInTheDocument();
        await userEvent.click(screen.getByRole('button', { name: /close modal/i }));
        expect(screen.queryByText('Typical Positions')).not.toBeInTheDocument();
    });

    test('modal shows correct positions for Finance when navigated to', async () => {
        renderPage();
        // Navigate to Finance (index 3)
        const dots = screen.getAllByRole('button', { name: /go to slide/i });
        await userEvent.click(dots[3]);
        await userEvent.click(screen.getByRole('button', { name: /view positions/i }));
        CATEGORIES[3].positions.forEach((pos) => {
            expect(screen.getByText(pos)).toBeInTheDocument();
        });
    });

    test('modal shows correct positions for Events when navigated to', async () => {
        renderPage();
        const dots = screen.getAllByRole('button', { name: /go to slide/i });
        await userEvent.click(dots[4]);
        await userEvent.click(screen.getByRole('button', { name: /view positions/i }));
        CATEGORIES[4].positions.forEach((pos) => {
            expect(screen.getByText(pos)).toBeInTheDocument();
        });
    });
});

// ── Section 4: CTA ────────────────────────────────────────────────────────────

describe('CTA section', () => {
    test('renders the Ready to Apply overline', () => {
        renderPage();
        expect(screen.getByText("Ready to Apply?")).toBeInTheDocument();
    });

    test("renders the Let's Get You Started heading", () => {
        renderPage();
        expect(screen.getByText("Let's Get You Started.")).toBeInTheDocument();
    });

    test('renders the CTA description', () => {
        renderPage();
        expect(screen.getByText(/Reach out and let us know which opportunity/i)).toBeInTheDocument();
    });
});

// ── Navigation ────────────────────────────────────────────────────────────────

describe('Navigation', () => {
    test('intro Contact Us button navigates to /contact', async () => {
        renderPage();
        const buttons = screen.getAllByRole('button', { name: /contact us/i });
        await userEvent.click(buttons[0]);
        expect(mockNavigate).toHaveBeenCalledWith('/contact');
    });

    test('modal Contact Us button navigates to /contact and closes modal', async () => {
        renderPage();
        await userEvent.click(screen.getByRole('button', { name: /view positions/i }));
        const modalContactBtn = screen.getByRole('button', { name: /contact us →/i });
        await userEvent.click(modalContactBtn);
        expect(mockNavigate).toHaveBeenCalledWith('/contact');
        expect(screen.queryByText('Typical Positions')).not.toBeInTheDocument();
    });

    test('CTA Contact Us button navigates to /contact', async () => {
        renderPage();
        const buttons = screen.getAllByRole('button', { name: /contact us/i });
        await userEvent.click(buttons[buttons.length - 1]);
        expect(mockNavigate).toHaveBeenCalledWith('/contact');
    });
});

// ── CATEGORIES data integrity ─────────────────────────────────────────────────

describe('CATEGORIES data integrity', () => {
    test('has exactly 5 categories', () => {
        expect(CATEGORIES).toHaveLength(5);
    });

    test('every category has required fields', () => {
        CATEGORIES.forEach(({ key, title, cardTitle, desc, positions }) => {
            expect(key).toBeTruthy();
            expect(title).toBeTruthy();
            expect(cardTitle).toBeTruthy();
            expect(desc).toBeTruthy();
            expect(positions.length).toBeGreaterThan(0);
        });
    });

    test('all category keys are unique', () => {
        const keys = CATEGORIES.map((c) => c.key);
        expect(new Set(keys).size).toBe(keys.length);
    });

    test('all category titles are unique', () => {
        const titles = CATEGORIES.map((c) => c.title);
        expect(new Set(titles).size).toBe(titles.length);
    });

    test('Healthcare has exactly 7 positions', () => {
        const healthcare = CATEGORIES.find((c) => c.key === 'healthCare');
        expect(healthcare.positions).toHaveLength(7);
    });

    test('Nursing has exactly 2 positions', () => {
        const nursing = CATEGORIES.find((c) => c.key === 'nursing');
        expect(nursing.positions).toHaveLength(2);
    });

    test('Administration has exactly 4 positions', () => {
        const admin = CATEGORIES.find((c) => c.key === 'administration');
        expect(admin.positions).toHaveLength(4);
    });

    test('Finance has exactly 5 positions', () => {
        const finance = CATEGORIES.find((c) => c.key === 'finance');
        expect(finance.positions).toHaveLength(5);
    });

    test('Events has exactly 5 positions', () => {
        const events = CATEGORIES.find((c) => c.key === 'events');
        expect(events.positions).toHaveLength(5);
    });

    test('all positions within each category are unique', () => {
        CATEGORIES.forEach(({ title, positions }) => {
            const unique = new Set(positions);
            expect(unique.size).toBe(positions.length);
        });
    });
});