import { Link } from 'react-router-dom';
import '../../index.css'
import './header.css'

const burgerHandler = () => {
  let burger = document.querySelector('#burger'),
    nav = document.querySelector('.header_navburger'),
    navMain = document.querySelector('.header_navigation');
  navMain.classList.toggle('is-open')
  burger.classList.toggle('is-open')
  nav.classList.toggle('is-open')


}

export function Header() {
  return (
    <div className="header_container">
      <div className="header_logo">
        <h1 className="header_header"><Link className='link header_logolink' to="/">MachineClub</Link> </h1>
      </div>

      <nav className="header_navigation">
        <ul className='header_navlist'>
          <li><Link className='link header_link' to="/">Главная</Link></li>
          <li><Link className='link header_link' to="/news">Новости</Link></li>
        </ul>
      </nav>

      <div className="header_buttons">
        <button className='btn header_login'>Логин</button>
      </div>
      {/* BURGER MENU */}
      <button id="burger" className="header_burger" onClick={burgerHandler}>
        <span className="burger"></span>
        <span className="burger-text">menu</span>
      </button>

      {/* Отдельное меню, а не из списка, потому что списки в менюшке будут отличаться */}
      <nav className="header_navburger">
        <ul className='header_navlistburger'>
          <li><Link className='link header_link' to="/">Главная</Link></li>
          <li><Link className='link header_link' to="/news">Новости</Link></li>
        </ul>
      </nav>

    </div>
  )
}