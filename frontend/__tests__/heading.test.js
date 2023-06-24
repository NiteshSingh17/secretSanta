import { render, screen } from '@testing-library/react';
import { HeroHeading } from '../src/app/components/heroHeading';
import '@testing-library/jest-dom';

describe('Heading', () => {
  it('renders a heading', () => {
    render(<HeroHeading />)

    const heading = screen.getByText('Acme Secret Santa')

    expect(heading).toBeInTheDocument()
  })
});
