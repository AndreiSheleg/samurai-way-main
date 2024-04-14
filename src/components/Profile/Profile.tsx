import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionsTypes, ProfilePageType} from "../../redux/state";


type ProfilePropsType = {
    profilePage: ProfilePageType
    //addPost: (postMessage: string) => void
    //updateNewPostText: (newText: string) => void
    dispatch: (action: ActionsTypes) => void

}

export const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch} />

        </div>
    )
}

