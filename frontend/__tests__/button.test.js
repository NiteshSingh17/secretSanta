import { render, screen } from '@testing-library/react';
import { Button } from '../src/app/common/button';
import '@testing-library/jest-dom';

describe('Button', () => {
  it('renders a Button', () => {
    render(<Button onClick={e => {e.target.innerHTML = 'You Clicked'} }>Click Me</Button>)
    const button = screen.getByRole('button')
    expect(button.innerHTML).toBe('Click Me');
    button.click()
    expect(button.innerHTML).toBe('You Clicked');
  })
});
