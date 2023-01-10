import Main, { Link, MainProps } from 'components/Main'

export default function Home(props: MainProps) {
  return <Main {...props} />
}

export function getStaticProps() {
  const links: Link[] = [
    {
      name: 'movIeau',
      url: 'https://movieau.carlosberti.dev/'
    },
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
    },
    {
      name: 'My Linkedin Profile',
      url: 'https://www.linkedin.com/in/carlos-augusto-berti-a30536163/'
    }
  ]

  return {
    props: {
      links
    }
  }
}
