import React, {ChangeEventHandler} from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settinsgs';
import {RootStateType, StoreType} from "./redux/state";
import {store} from "./redux/state";

type AppPropsType = {
    store: StoreType
}
const App: React.FC<AppPropsType> = (props) => {

    const state = props.store.getState()

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

                    <Route path='/dialogs' render={() => <Dialogs state={props.store._state.dialogsPage}/>}/>

                    <Route path='/profile'
                           render={() => <Profile profilePage={props.store._state.profilePage} addPost={props.store.addPost.bind(props.store)}
                                                  updateNewPostText={props.store.updateNewPostText.bind(props.store)}/>}/>

                    <Route path='/news' render={() => <News/>}/>

                    <Route path='/music' render={() => <Music/>}/>

                    <Route path='/settings' render={() => <Settings/>}/>

                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
