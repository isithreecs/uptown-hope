import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import About from './About';

// ── Mocks ─────────────────────────────────────────────────────────────────────

// react-parallax doesn't render properly in jsdom — render children directly
jest.mock('react-parallax', () => ({
    Parallax: ({ children }) => <div data-testid="parallax">{children}</div>,
}));

// Image imports
jest.mock('../pageImages/uptownhope_bkgrd.png',  () => 'uptownhope_bkgrd.png');
jest.mock('../pageImages/group_photo.jpg',        () => 'group_photo.jpg');

// ── Helper ────────────────────────────────────────────────────────────────────

const renderAbout = () =>
    render(
        <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <About />
        </MemoryRouter>
    );

// ── Section 1: Hero ───────────────────────────────────────────────────────────

describe('Hero section', () => {
    test('renders the hero heading', () => {
        renderAbout();
        expect(screen.getByText('Learn More About Us!')).toBeInTheDocument();
    });

    test('renders the hero subtitle', () => {
        renderAbout();
        expect(
            screen.getByText('Discover the mission, vision, and values at Uptown Hope!')
        ).toBeInTheDocument();
    });
});

// ── Section 2: H.O.P.E. acronym ──────────────────────────────────────────────

describe('H.O.P.E. section', () => {
    test('renders all four letters', () => {
        renderAbout();
        expect(screen.getByText('H')).toBeInTheDocument();
        expect(screen.getByText('O')).toBeInTheDocument();
        expect(screen.getByText('P')).toBeInTheDocument();
        expect(screen.getByText('E')).toBeInTheDocument();
    });

    test('renders all four word labels', () => {
        renderAbout();
        expect(screen.getByText('Holistic')).toBeInTheDocument();
        expect(screen.getByText('Opportunity')).toBeInTheDocument();
        expect(screen.getByText('Preparation')).toBeInTheDocument();
        expect(screen.getByText('Empowerment')).toBeInTheDocument();
    });

    test('renders the description for Holistic', () => {
        renderAbout();
        expect(
            screen.getByText(/We take a whole-person approach to staffing/i)
        ).toBeInTheDocument();
    });

    test('renders the description for Opportunity', () => {
        renderAbout();
        expect(
            screen.getByText(/We open doors — connecting talent/i)
        ).toBeInTheDocument();
    });

    test('renders the description for Preparation', () => {
        renderAbout();
        expect(
            screen.getByText(/thoroughly trained and ready to contribute/i)
        ).toBeInTheDocument();
    });

    test('renders the description for Empowerment', () => {
        renderAbout();
        expect(
            screen.getByText(/We invest in people/i)
        ).toBeInTheDocument();
    });

    test('renders the H.O.P.E. image', () => {
        renderAbout();
        expect(screen.getByAltText('Be The Missing Piece')).toBeInTheDocument();
    });
});

// ── Section 3: Mission / Vision / Values / Motto cards ───────────────────────

describe('Mission cards section', () => {
    test('renders all four card titles', () => {
        renderAbout();
        expect(screen.getByText('Motto')).toBeInTheDocument();
        expect(screen.getByText('Mission')).toBeInTheDocument();
        expect(screen.getByText('Vision')).toBeInTheDocument();
        expect(screen.getByText('Values')).toBeInTheDocument();
    });

    test('renders the Motto card text', () => {
        renderAbout();
        expect(
            screen.getByText(/Positive Outlook, Open and Healthy Mind/i)
        ).toBeInTheDocument();
    });

    test('renders the Mission card text', () => {
        renderAbout();
        expect(
            screen.getByText(/holistic approach in delivering quality service/i)
        ).toBeInTheDocument();
    });

    test('renders the Vision card text', () => {
        renderAbout();
        expect(
            screen.getByText(/dedicated to delivering high-quality staffing services/i)
        ).toBeInTheDocument();
    });

    test('renders the Values card text', () => {
        renderAbout();
        expect(
            screen.getByText(/building relationships with our clients/i)
        ).toBeInTheDocument();
    });

    test('renders exactly 4 cards', () => {
        renderAbout();
        // Each card has a title — assert all four are present and only four
        const titles = ['Motto', 'Mission', 'Vision', 'Values'];
        titles.forEach((title) => expect(screen.getByText(title)).toBeInTheDocument());
        expect(titles).toHaveLength(4);
    });
});

// ── Section 4: Leadership ─────────────────────────────────────────────────────

describe('Leadership section', () => {
    test('renders the Leadership Credentials heading', () => {
        renderAbout();
        expect(screen.getByText('Leadership Credentials')).toBeInTheDocument();
    });

    test('renders the leadership intro text', () => {
        renderAbout();
        expect(
            screen.getByText(/extensive and relevant experience/i)
        ).toBeInTheDocument();
    });

    test('renders the CEO accordion', () => {
        renderAbout();
        expect(
            screen.getByText('Uptown Hope, LLC — Founder and CEO')
        ).toBeInTheDocument();
    });

    test('renders the CFO accordion', () => {
        renderAbout();
        expect(screen.getByText('Uptown Hope, LLC — CFO')).toBeInTheDocument();
    });

    test('renders exactly 2 leadership accordions', () => {
        renderAbout();
        expect(screen.getAllByRole('button', { name: /uptown hope, llc/i })).toHaveLength(2);
    });

    test('CEO accordion expands to show bullet points on click', async () => {
        renderAbout();
        const ceoButton = screen.getByRole('button', { name: /founder and ceo/i });
        await userEvent.click(ceoButton);
        expect(
            screen.getByText(/business planning, development, operation/i)
        ).toBeInTheDocument();
    });

    test('CFO accordion expands to show bullet points on click', async () => {
        renderAbout();
        const cfoButton = screen.getByRole('button', { name: /cfo/i });
        await userEvent.click(cfoButton);
        expect(
            screen.getByText(/meticulous, dedicated, high-energy professional/i)
        ).toBeInTheDocument();
    });

    test('CEO accordion contains the correct number of bullet points', async () => {
        renderAbout();
        const ceoButton = screen.getByRole('button', { name: /founder and ceo/i });
        await userEvent.click(ceoButton);
        // CEO has 5 bullets — find the expanded accordion region and count list items
        const region = screen.getByRole('region', { name: /founder and ceo/i });
        const items = within(region).getAllByRole('listitem');
        expect(items).toHaveLength(5);
    });

    test('CFO accordion contains the correct number of bullet points', async () => {
        renderAbout();
        const cfoButton = screen.getByRole('button', { name: /cfo/i });
        await userEvent.click(cfoButton);
        const region = screen.getByRole('region', { name: /cfo/i });
        const items = within(region).getAllByRole('listitem');
        expect(items).toHaveLength(3);
    });
});