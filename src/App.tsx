import { MainPage } from './page/MainPage/MainPage';
import { NewsPage } from './page/NewsPage/NewsPage';
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer';
import { NotFoundPage } from './page/NotFoundPage/NotFoundPage';
import { Routes, Route } from 'react-router-dom';
import { NewsMorePage } from './page/NewsMorePage/NewsMorePage';

function App() {
  return (
    <div className='container'>
      <div className="main_content">
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/news' element={<NewsPage />} />
            <Route path='*' element={<NotFoundPage />} />
            <Route path='/newsid' element={<NewsMorePage/>} />
          </Routes>
        </main>

      </div>
      <Footer />
    </div>

  );
}

export default App;
