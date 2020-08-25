import React from 'react';
import { render,screen, fireEvent } from '@testing-library/react';
import App from 'App';

test('renders header', () => {
  const { getByText } = render(<App />);
  const header = getByText(/Wikipedia Viewer/i);
  expect(header).toBeInTheDocument();
});

test("Working as we expect", async () => {
    render(<App/>);

    const input = await screen.findByRole('textbox');
    const button = await screen.findByRole('button');

    fireEvent.change(input, {target : {value:"JavaScript"}});
    fireEvent.click(button)

    const title = await screen.findByText("Search Results for: JavaScript...");
    expect(title).toBeVisible()
})
