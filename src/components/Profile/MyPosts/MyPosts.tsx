import Post from './Post/Post';
import s from './MyPosts.module.css'
import React from "react";

export type PostType = {
    id: number,
    message: string,
    likeCount: number
}

export type MyPostsPropsType = {
    posts: PostType[]
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

/*    let posts = [
        {id: 1, message: 'Hi, how are you?', likeCount: 12},
        {id: 2, message: "It's my first post", likeCount: 11},
        {id: 3, message: "Blf-blf", likeCount: 11},
        {id: 4, message: "Hm...", likeCount: 11},
    ]*/

    let postsElements = props.posts.map( p => <Post message={p.message} likeCount={p.likeCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>+Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts