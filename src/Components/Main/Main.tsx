
import { Home } from '../Home/Home';
import { Header } from '../Header/Header';
import './main.css';
import {  Route, BrowserRouter as Routes  } from 'react-router-dom';
import { Partners } from '../Partners/Partners';
import { Footer } from '../Footer/Footer';

export const Main = () => {
    return <main className="main_wrapper">
        <Header/>
            <Routes>
                <Route path='*' element={<Home/>} />
                <Route path='/partners' element={<Partners/>}/>
            </Routes>
        <Footer/>
    </main>;
};
