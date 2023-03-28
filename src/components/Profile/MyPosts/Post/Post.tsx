import React from "react";
import s from './Post.module.css'
import imageName from  '../../avatPostMcCQN.jpg'


function Post (props: any) {
    return (
        <div className={s.item}>
            <img src={imageName} alt='avatar'/>
            {/*<img src='https://instagramis.ru/wp-content/uploads/Matthew-McConaughey.jpg' alt='avatar'/>*/}
            {props.message}
            <div>
                <span>like = {props.likeCount}</span>
            </div>
        </div>

    )
}

export default Post