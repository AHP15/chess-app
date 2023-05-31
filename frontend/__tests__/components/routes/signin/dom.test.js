/**
 * @jest-environment jsdom
 */

import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import SignIn from '../../../../src/components/routes/signin';

it('should increment the counter', async () => {
  const { container } = render(<SignIn />)
  // Act
  await userEvent.click(screen.getByText('Click me'));
  const paragraph = container.querySelector('.counter')

  // Assert
  expect(paragraph).toHaveTextContent('1')
});