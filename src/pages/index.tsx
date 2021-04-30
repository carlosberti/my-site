import Main, { Link, MainProps } from 'components/Main'

export default function Home(props: MainProps) {
  return <Main {...props} />
}

export function getStaticProps() {
  const links: Link[] = [
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
    },
    {
      name: 'My GitHub Profile',
      url: 'https://github.com/carlosberti'
    }
  ]

  return {
    props: {
      links
    }
  }
}
