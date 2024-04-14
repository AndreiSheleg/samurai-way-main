import Post from './Post/Post';
import s from './MyPosts.module.css'
import React, {ChangeEvent} from "react";
import {ActionsTypes, addPostAC, updateNewPostTextAC, UpdateNewPostTextActionType} from "../../../redux/state";

export type PostType = {
    id: number,
    message: string,
    likeCount: number
}

export type MyPostsPropsType = {
    posts: PostType[]
    newPostText: string
    //addPost: (postMessage: string) => void
    //updateNewPostText: (newText: string) => void
    dispatch: (action: ActionsTypes) => void
}


const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>)

    let addPost = () => {
        //props.addPost(props.newPostText)
        props.dispatch(addPostAC(props.newPostText))
    }
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
       // props.updateNewPostText(text)
        let action: UpdateNewPostTextActionType = updateNewPostTextAC(text)
        props.dispatch(action)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>+Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts