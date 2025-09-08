import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

test('renders button with text', () => {
  render(<Button>Click me</Button>)
  const btn = screen.getByRole('button', {
    name: 'Click me',
  })
  expect(btn).toBeInTheDocument()
})

test('calls onClick when clicked', async () => {
  const onClick = jest.fn()
  const user = userEvent.setup()

  render(<Button onClick={onClick}>Click me</Button>)
  const btn = screen.getByRole('button', { name: 'Click me' })

  await user.click(btn)

  expect(onClick).toHaveBeenCalledTimes(1)
})
