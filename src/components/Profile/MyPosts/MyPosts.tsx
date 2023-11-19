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
    addPost: (postMessage: string) => void
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postsElements = props.posts.map( p => <Post message={p.message} likeCount={p.likeCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let addPost = () => {
        //ОБРАТИ ВНИМАНИЕ НА ЗАПИСЬ CURRENT?VALUE - ТАК МЫ ЗАЩИЩАЕМСЯ ОТ СЛУЧАЯ, КОГДА ХОТИМ ВЗЯТЬ VALUE У NULL
        // ЕСЛИ  CURRENT НЕ СУЩЕСТВУЕТ, ТО МЫ ДАЛЬШЕ НЕ ПОЙДЁМ И ТАЙПСКРИПТ НЕ БУДЕТ РУГАТЬСЯ
        // let text = newPostElement.current?.value
        if(newPostElement.current){
            props.addPost(newPostElement.current.value)
        }

    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={ addPost }>+Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts