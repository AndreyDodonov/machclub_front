import '../Footer/footer.css';
import '../../index.css';
import telegramIcon from '../Footer/telegram.svg';

export function Footer() {
  return (
    <div className="footer_container">
      <p>author: Andrew Dodonow</p>
      <div className="footer_icon"><a href="https://t.me/ElKaban89"> <img src={telegramIcon} alt="значок телеграм" /></a></div>
    </div>
  )
}