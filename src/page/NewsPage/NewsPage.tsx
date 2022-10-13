import { NewsItem } from "../../components/News/NewsItem"

export function NewsPage() {
  return (
    <div className="newspage_conteiner">
      <h1>News Page</h1>
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </div>
  )
}