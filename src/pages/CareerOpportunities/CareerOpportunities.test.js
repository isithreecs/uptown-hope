import { render, screen } from '@testing-library/react';
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
        expect(screen.getByText(/interested in any of our positions/i)).toBeInTheDocument();
    });

    test('renders the inline Apply now link', () => {
        renderPage();
        expect(screen.getByRole('button', { name: /apply now/i })).toBeInTheDocument();
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

    test('renders the Click to Apply button', () => {
        renderPage();
        expect(screen.getByRole('button', { name: /click to apply/i })).toBeInTheDocument();
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
    test('intro Contact Us button navigates to the contractor tab with message intent', async () => {
        renderPage();
        const buttons = screen.getAllByRole('button', { name: /contact us/i });
        await userEvent.click(buttons[0]);
        expect(mockNavigate).toHaveBeenCalledWith('/contact?form=contractor&intent=message');
    });

    test('Click to Apply routes to the contractor tab with the industry prefilled', async () => {
        renderPage();
        await userEvent.click(screen.getByRole('button', { name: /click to apply/i }));
        expect(mockNavigate).toHaveBeenCalledWith('/contact?form=contractor&position=Healthcare');
    });

    test('Click to Apply carries the industry of the visible card', async () => {
        renderPage();
        const dots = screen.getAllByRole('button', { name: /go to slide/i });
        await userEvent.click(dots[3]);
        await userEvent.click(screen.getByRole('button', { name: /click to apply/i }));
        expect(mockNavigate).toHaveBeenCalledWith('/contact?form=contractor&position=Finance');
    });

    test('Apply now routes to the contractor tab with no industry prefilled', async () => {
        renderPage();
        await userEvent.click(screen.getByRole('button', { name: /apply now/i }));
        expect(mockNavigate).toHaveBeenCalledWith('/contact?form=contractor');
    });

    test('CTA Contact Us button navigates to the contractor tab with message intent', async () => {
        renderPage();
        const buttons = screen.getAllByRole('button', { name: /contact us/i });
        await userEvent.click(buttons[buttons.length - 1]);
        expect(mockNavigate).toHaveBeenCalledWith('/contact?form=contractor&intent=message');
    });
});

// ── CATEGORIES data integrity ─────────────────────────────────────────────────

describe('CATEGORIES data integrity', () => {
    test('has exactly 5 categories', () => {
        expect(CATEGORIES).toHaveLength(5);
    });

    test('every category has required fields', () => {
        CATEGORIES.forEach(({ key, title, cardTitle, desc }) => {
            expect(key).toBeTruthy();
            expect(title).toBeTruthy();
            expect(cardTitle).toBeTruthy();
            expect(desc).toBeTruthy();
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

});