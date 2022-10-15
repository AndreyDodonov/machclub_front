import '../News/newsItem.css'
import imageGears from '../News/gears.svg'
import { INews } from '../../models';

export function NewsItem(props : INews) {
  console.log('props from news item: ', props.title);

  return (
    <div className="newsitem_container">
      <h2 className='newsitem_header'>{(props.title) ? props.title : 'Заголовок'}</h2>
      <p className='newsitem_description'>{(props.description) ? props.description : 'Описание'}</p>
      <img className="newsitem_image" src={(props.image) ? props.image : imageGears} alt="иллюстрация"/>
    </div>
  )
}


