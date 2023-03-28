import Post from "./Post/Post";
import s from './MyPosts.module.css'

function MyPosts () {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>+Add post</button>
                <button>Remove</button>
            </div>

            <div className={s.posts}>
                <Post message='Hi, how are you?' likeCount='15'/>
                <Post message="It's my first post" likeCount='20' />


            </div>
        </div>
    )
}

export default MyPosts