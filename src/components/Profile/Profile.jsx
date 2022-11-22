import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <img
                src='https://avatars.mds.yandex.net/i?id=6b596b9cb99909263995fe0022478cd10bcac181-4901993-images-thumbs&n=13'/>
            <div>
                ava + description
            </div>
            <MyPosts/>

        </div>
    )
}

export default Profile