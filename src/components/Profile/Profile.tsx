import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

export type ProfilePropsType = {
    profile : profileType | null
}
export type profileType = {
    "aboutMe": string
    "contacts": {
        "facebook": string
        "website": null,
        "vk": string
        "twitter": string
        "instagram": string
        "youtube": null,
        "github": string
        "mainLink": null
    },
    "lookingForAJob": boolean,
    "lookingForAJobDescription": string
    "fullName": string
    "userId": number
    "photos": {
        "small": string
        "large": string
    }
}

export const Profile = (props : ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer/>
        </div>
    )
}
