import { NewsItem } from "../../components/News/NewsItem"
import '../NewsPage/newsPage.css'

//const URL: string = 'https://dummyjson.com/posts/'
const URL: string = './mockData.json'

export function NewsPage() {

  const getNews = async () => {
    fetch(URL)
      .then(response => response.json())
      .then(jsonresp => {
        Object.values(jsonresp).map((item: any) => (
          console.log(item.title)
        ))
      })
  }
  getNews()

  return (
    <div className="newspage_container">
      <h1>News Page</h1>
      <div className="news_container">
        <NewsItem
         title = {'Главная новость'}
         description = {'Описание новости. Что-то где-то произошло, кто-то сделал какое-то открытие и всем от этого такой-то профит'}
         image = {'https://s.abcnews.com/images/US/hanna-swimmer-mo_hpMain_20200725-163152_2_4x3t_384.jpg'}
         />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>

    </div>
  )
}