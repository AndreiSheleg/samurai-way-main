import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/149020299/original/5fc76c739a2ed16b843e79db9c77f4838958c932/create-you-a-lego-star-wars-character-profile-icon.png'/>
            {props.message}
            <div>
                <span>like = {props.likeCount}</span>
            </div>
        </div>

    )
}

export default Post