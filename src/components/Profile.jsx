import React from "react";
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>
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
                <div  className={s.posts}>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>

                </div>
            </div>
        </div>
)
}

export default Profile