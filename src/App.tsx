import React from 'react';
import './App.css';


const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src='https://cdn.logo.com/hotlink-ok/logo-social.png'/>
            </header>
            <nav className='nav'>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>

            </nav>
            <div className='content'>
                <img
                    src='https://avatars.mds.yandex.net/i?id=6b596b9cb99909263995fe0022478cd10bcac181-4901993-images-thumbs&n=13'/>
                <div>
                    ava + description
                </div>


                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div>
                        <div>
                            post 1
                        </div>
                        <div>
                            post 2
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;
