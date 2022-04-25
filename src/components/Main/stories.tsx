import { ComponentStory, ComponentMeta } from '@storybook/react'

import Main from '.'

export default {
  title: 'Main',
  component: Main
} as ComponentMeta<typeof Main>

export const Primary: ComponentStory<typeof Main> = () => <Main></Main>
