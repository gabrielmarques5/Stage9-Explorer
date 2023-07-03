import { Container } from './styles'
import { Input } from '../../components/Input'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <Container>
      <div className="header">
        <h1>
          <Link to="/">RocketMovies</Link>
        </h1>
        <Input placeholder="Pesquisar pelo título" />
        <div className="profile">
          <div>
            <Link to="/profile">Gabriel</Link>
            <a href="#">sair</a>
          </div>
          <Link to="/profile">
            <img src="https://github.com/gabrielmarques5.png" alt="User Image" />
          </Link>
        </div>
      </div>
    </Container>
  )
}
