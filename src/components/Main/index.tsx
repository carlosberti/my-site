import Link from 'next/link'
import * as S from './styles'

export type Link = {
  name: string
  url: string
}

export type MainProps = {
  links: Link[]
}

const Main = ({ links }: MainProps) => (
  <S.Wrapper>
    {links.map((link, index) => (
      <Link href={link.url} key={`${link.name}-${index}`} passHref>
        <S.Link rel="noopener noreferrer" target="_blank">
          {link.name}
        </S.Link>
      </Link>
    ))}
  </S.Wrapper>
)

export default Main
