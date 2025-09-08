import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  args: { children: 'Save' }
}
export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = { args: { variant: 'primary' } }
export const Secondary: Story = { args: { variant: 'secondary' } }
export const Ghost: Story = { args: { variant: 'ghost' } }
export const Loading: Story = { args: { loading: true, children: 'Saving' } }
export const Disabled: Story = { args: { disabled: true } }
export const Large: Story = { args: { size: 'lg' } }
export const Small: Story = { args: { size: 'sm' } }
