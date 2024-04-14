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
import {ActionsTypes, RootStateType, StoreType} from "./redux/state";
import {store} from "./redux/state";

type AppPropsType = {
    state: RootStateType
    //addPost: (postMessage: string) => void
    //updateNewPostText: (newText: string) => void
    dispatch: (action: ActionsTypes) => void
}
const App: React.FC<AppPropsType> = (props) => {

    return (
        //№26 мы хотим, чтобы всё контролировалось компонентой браузер-роутер, чтобы при клике по ссылке
        // страница перезагружалась

        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                {/*компоненты ROUTE следит за URL и если компонена видит, то URL изменился и стал равен
                    /dialogs, то он автоматически подгружает компоненту Dialogs*/}

                <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>}/>

                <Route path='/profile'
                       render={() => <Profile
                           profilePage={props.state.profilePage}
                           dispatch={props.dispatch} /> } />

                <Route path='/news' render={() => <News/>}/>

                <Route path='/music' render={() => <Music/>}/>

                <Route path='/settings' render={() => <Settings/>}/>

            </div>
        </div>


    );
}

export default App;
