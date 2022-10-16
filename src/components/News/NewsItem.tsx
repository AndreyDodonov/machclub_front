import '../News/newsItem.css'
import imageGears from '../News/gears.svg'
import { INews } from '../../models';
import { Link } from 'react-router-dom';

export function NewsItem(props: INews) {
  console.log('props from news item: ', props.title);

  return (
    <Link className='link newsitem_link' to="/newsid">
      <div className="newsitem_container">
        <h2 className='newsitem_header'>{(props.title) ? props.title : 'Заголовок'}</h2>
        <p className='newsitem_description'>{(props.description) ? props.description : 'Описание'}</p>
        <img className="newsitem_image" src={(props.image) ? props.image : imageGears} alt="иллюстрация" />
      </div>
    </Link>

  )
}


