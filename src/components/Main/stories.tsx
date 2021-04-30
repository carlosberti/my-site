import { Story, Meta } from '@storybook/react/types-6-0'
import Main, { MainProps } from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    links: [
      {
        name: 'WonGames (github)',
        url: 'https://github.com/carlosberti/won-games-client'
      },
      {
        name: 'my-trips',
        url: 'https://mytrips.carlosberti.dev/'
      },
      {
        name: 'Discord clone',
        url: 'https://discord.carlosberti.dev/'
      },
      {
        name: 'Finance Wizard',
        url: 'https://finance-wizard.carlosberti.dev/'
      },
      {
        name: 'LandingPage React Avançado',
        url: 'https://landingpage-react-avancado.carlosberti.dev/'
      }
    ]
  }
} as Meta

export const Default: Story<MainProps> = (args) => <Main {...args} />
