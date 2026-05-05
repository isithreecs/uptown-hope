import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Home from './Home';

// ── Mocks ─────────────────────────────────────────────────────────────────────

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));

// Image imports — Jest can't process binary files
jest.mock('../pageImages/missing_puzzlepiece.jpg', () => 'missing_puzzlepiece.jpg');
jest.mock('../pageImages/stafferWorking.jpg',       () => 'stafferWorking.jpg');
jest.mock('../pageImages/sunshine.jpg',             () => 'sunshine.jpg');

// FontAwesome — render a span with the icon name so tests can assert by icon
jest.mock('@fortawesome/react-fontawesome', () => ({
    FontAwesomeIcon: ({ icon }) => (
        <span data-testid={`fa-icon-${icon.iconName}`} aria-hidden="true" />
    ),
}));

// ── Helper ────────────────────────────────────────────────────────────────────

const renderHome = () =>
    render(
        <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <Home />
        </MemoryRouter>
    );

beforeEach(() => {
    mockNavigate.mockClear();
});

// ── Section 1: Hero ───────────────────────────────────────────────────────────

describe('Hero section', () => {
    test('renders the main headline', () => {
        renderHome();
        expect(screen.getByText('Staffing Done Right.')).toBeInTheDocument();
    });

    test('renders the hero subtext', () => {
        renderHome();
        expect(screen.getByText(/We connect the most qualified individuals/i)).toBeInTheDocument();
    });

    test('renders the Explore Careers CTA button', () => {
        renderHome();
        expect(screen.getAllByRole('button', { name: /explore careers/i })[0]).toBeInTheDocument();
    });

    test('renders the Find Staff CTA button', () => {
        renderHome();
        expect(screen.getByRole('button', { name: /find staff/i })).toBeInTheDocument();
    });
});

// ── Section 2: Stat bar ───────────────────────────────────────────────────────

describe('Stat bar', () => {
    test('renders the 5+ stat value', () => {
        renderHome();
        expect(screen.getByText('5+')).toBeInTheDocument();
    });

    test('renders the 300+ stat value', () => {
        renderHome();
        expect(screen.getByText('300+')).toBeInTheDocument();
    });

    test('renders the 100% stat value', () => {
        renderHome();
        expect(screen.getByText('100%')).toBeInTheDocument();
    });

    test('renders the 24/7 stat value', () => {
        renderHome();
        expect(screen.getByText('24/7')).toBeInTheDocument();
    });

    test('renders the Years in Business label', () => {
        renderHome();
        expect(screen.getByText('Years in Business')).toBeInTheDocument();
    });

    test('renders the Positions Filled label', () => {
        renderHome();
        expect(screen.getByText('Positions Filled')).toBeInTheDocument();
    });

    test('renders the Commitment to Quality label', () => {
        renderHome();
        expect(screen.getByText('Commitment to Quality')).toBeInTheDocument();
    });

    test('renders the Support for Clients label', () => {
        renderHome();
        expect(screen.getByText('Support for Clients')).toBeInTheDocument();
    });
});

// ── Section 3: Who We Are ─────────────────────────────────────────────────────

describe('Who We Are section', () => {
    test('renders the Who We Are overline', () => {
        renderHome();
        expect(screen.getByText('Who We Are')).toBeInTheDocument();
    });

    test('renders the Uptown Hope company name', () => {
        renderHome();
        expect(screen.getByText('Uptown Hope (UH)')).toBeInTheDocument();
    });

    test('renders the company description', () => {
        renderHome();
        expect(screen.getByText(/privately held limited liability company/i)).toBeInTheDocument();
    });

    test('renders the Who We Are image', () => {
        renderHome();
        expect(screen.getByAltText('Who We Are')).toBeInTheDocument();
    });

    test('renders the Learn More button', () => {
        renderHome();
        expect(screen.getByRole('button', { name: /learn more/i })).toBeInTheDocument();
    });
});

// ── Section 4: Employment ─────────────────────────────────────────────────────

describe('Employment section', () => {
    test('renders the Employment Opportunities overline', () => {
        renderHome();
        expect(screen.getByText('Employment Opportunities')).toBeInTheDocument();
    });

    test('renders the Be The Missing Piece heading', () => {
        renderHome();
        expect(screen.getByText('Be The Missing Piece')).toBeInTheDocument();
    });

    test('renders the Be The Missing Piece image', () => {
        renderHome();
        expect(screen.getByAltText('Be The Missing Piece')).toBeInTheDocument();
    });

    test('renders the Explore Careers link button', () => {
        renderHome();
        // Two Explore Careers buttons exist — hero CTA and section 4 link
        expect(screen.getAllByRole('button', { name: /explore careers/i })).toHaveLength(2);
    });
});

// ── Section 5: Lines of business ─────────────────────────────────────────────

describe('Lines of business section', () => {
    test('renders the Staffing Solutions overline', () => {
        renderHome();
        expect(screen.getByText('Staffing Solutions')).toBeInTheDocument();
    });

    test('renders the Better People. Better Business heading', () => {
        renderHome();
        expect(screen.getByText('Better People. Better Business')).toBeInTheDocument();
    });

    test('renders the Contingent Workforce Solutions heading', () => {
        renderHome();
        expect(screen.getByText('Contingent Workforce Solutions')).toBeInTheDocument();
    });

    test('renders the RPO heading', () => {
        renderHome();
        expect(screen.getByText('Recruitment Process Outsourcing (RPO)')).toBeInTheDocument();
    });

    test('renders the people-group icon', () => {
        renderHome();
        expect(screen.getByTestId('fa-icon-people-group')).toBeInTheDocument();
    });

    test('renders the magnifying glass icon', () => {
        renderHome();
        expect(screen.getByTestId('fa-icon-magnifying-glass')).toBeInTheDocument();
    });

    test('renders the Staffing Solutions nav button', () => {
        renderHome();
        expect(screen.getByRole('button', { name: /staffing solutions →/i })).toBeInTheDocument();
    });

    test('renders the Contact Us nav button', () => {
        renderHome();
        expect(screen.getByRole('button', { name: /contact us →/i })).toBeInTheDocument();
    });
});

// ── Navigation ────────────────────────────────────────────────────────────────

describe('Navigation', () => {
    test('Explore Careers hero button navigates to /career-opportunities', async () => {
        renderHome();
        await userEvent.click(screen.getAllByRole('button', { name: /explore careers/i })[0]);
        expect(mockNavigate).toHaveBeenCalledWith('/career-opportunities');
    });

    test('Find Staff button navigates to /staffing-solutions', async () => {
        renderHome();
        await userEvent.click(screen.getByRole('button', { name: /find staff/i }));
        expect(mockNavigate).toHaveBeenCalledWith('/staffing-solutions');
    });

    test('Learn More button navigates to /about', async () => {
        renderHome();
        await userEvent.click(screen.getByRole('button', { name: /learn more/i }));
        expect(mockNavigate).toHaveBeenCalledWith('/about');
    });

    test('Explore Careers section button navigates to /career-opportunities', async () => {
        renderHome();
        const buttons = screen.getAllByRole('button', { name: /explore careers/i });
        await userEvent.click(buttons[buttons.length - 1]);
        expect(mockNavigate).toHaveBeenCalledWith('/career-opportunities');
    });

    test('Staffing Solutions button navigates to /staffing-solutions', async () => {
        renderHome();
        await userEvent.click(screen.getByRole('button', { name: /staffing solutions →/i }));
        expect(mockNavigate).toHaveBeenCalledWith('/staffing-solutions');
    });

    test('Contact Us button navigates to /contact', async () => {
        renderHome();
        await userEvent.click(screen.getByRole('button', { name: /contact us →/i }));
        expect(mockNavigate).toHaveBeenCalledWith('/contact');
    });
});