import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settinsgs';

const App = () => {
    return (
        //№26 мы хотим, чтобы всё контролировалось компонентой браузер-роутер, чтобы при клике по ссылке
        // страница перезагружалась
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    {/*компоненты ROUTE следит за URL и если компонена видит, то URL изменился и стал равен
                    /dialogs, то он автоматически подгружает компоненту Dialogs*/}
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
