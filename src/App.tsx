import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import {Profile} from './components/Profile/Profile';
import {Dialogs, DialogType, MessageType} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settinsgs';
import {PostType} from './components/Profile/MyPosts/MyPosts';

type AppPropsType = {
    posts: PostType[]
    dialogs: DialogType[]
    messages: MessageType[]
}

const App = (props: AppPropsType) => {

/*    let posts = [
        {id: 1, message: 'Hi, how are you?', likeCount: 12},
        {id: 2, message: "It's my first post", likeCount: 11},
        {id: 3, message: "Blf-blf", likeCount: 11},
        {id: 4, message: "Hm...", likeCount: 11},
    ]*/

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

                    {/*<Route path='/dialogs' component={Dialogs}/>*/}
                    <Route path='/dialogs' render={ () => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>

                    {/*<Route path='/profile' component={Profile}/>*/}
                    <Route path='/profile' render={ () => <Profile posts={props.posts}/>}/>

                    {/*<Route path='/news' component={News}/>*/}
                    <Route path='/news' render={ () => <News/>} />

                    {/*<Route path='/music' component={Music}/>*/}
                    <Route path='/music' render={ () => <Music/>} />

                    {/*<Route path='/settings' component={Settings}/>*/}
                    <Route path='/settings' render={ () => <Settings/>} />

                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
