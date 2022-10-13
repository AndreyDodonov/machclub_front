import { Link } from 'react-router-dom';
import '../../index.css'
import './header.css'

export function Header() {
  return (
    <div className="header_container">
      <div className="header_logo">
        <h1 className="header_header">MachineClub</h1>
      </div>

      <nav className="header_navigation">
        <Link className='link header_link' to="/">Главная</Link>
        <Link className='link header_link' to="/news">Новости</Link>
      </nav>

      <div className="header_buttons">
        <button className='btn header_login'>Логин</button>
      </div>

    </div>
  )
}