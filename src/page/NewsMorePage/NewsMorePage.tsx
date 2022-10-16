import '../NewsMorePage/newsmorepage.css'
import imageGears from '../../components/News/gears.svg'
import { INews } from '../../models'

export function NewsMorePage(props: INews) {
  return (
    <div className="newsmorepage_container">
      <h2>Заголовок</h2>
      <p>текст статьи</p>
      <img src={(props.image) ? props.image : imageGears} alt="картинка к статье" />
    </div>
  )
}