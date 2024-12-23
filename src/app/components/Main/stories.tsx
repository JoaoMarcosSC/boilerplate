import { Meta, StoryObj } from '@storybook/react'
import Button from '.'

const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    label: 'Click Me'
  }
}
