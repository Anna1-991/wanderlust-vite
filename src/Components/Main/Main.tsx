
import { Home } from '../Home/Home';
import { Header } from '../Header/Header';
import './main.css';

export const Main = () => {
    return <main className="main_wrapper">
        <Header/>
        <Home/>
    </main>;
};
