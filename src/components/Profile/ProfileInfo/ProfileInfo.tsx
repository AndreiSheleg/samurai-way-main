import React from "react";
import s from './ProfileInfo.module.css'


export const ProfileInfo = (props: any) => {
    return (
        <div >
            <img
                src='https://avatars.mds.yandex.net/i?id=6b596b9cb99909263995fe0022478cd10bcac181-4901993-images-thumbs&n=13'/>
            <div className={s.descriptionBlock}>
                ava + description
            </div>

        </div>
    )
}