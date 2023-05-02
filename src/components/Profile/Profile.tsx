import React from 'react';
import s from './Profile.module.css'
import MyPosts, {PostType} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';


type ProfilePropsType = {
    posts: PostType[]
}

export const Profile = (props: ProfilePropsType) => {

    // let posts = [
    //     {id: 1, message: 'Hi, how are you?', likeCount: 12},
    //     {id: 2, message: "It's my first post", likeCount: 11},
    //     {id: 3, message: "Blf-blf", likeCount: 11},
    //     {id: 4, message: "Hm...", likeCount: 11},
    // ]

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts = {props.posts} />

        </div>
    )
}

