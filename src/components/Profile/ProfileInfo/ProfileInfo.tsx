import React, { MouseEventHandler, useEffect } from "react";
import s from "./ProfileInfo.module.css";
import { ProfileStatusWithHooks } from "../ProfileStatus/ProfileStatusWithHooks";
import { useAppDispatch, useAppSelector } from "../../../redux/redux-store";
import { getUserProfileTC, updateUserAvatarTC } from "../../../redux/profile-reducer";
import { InputTypeFile } from "../../inputTypeFile/InputTypeFile";
import { SpanWithInput } from "../../common/SpanWithButton/SpanWithInput";

export const ProfileInfo = (props: { userId: number }) => {
    // @ts-ignore
    const largePhoto = useAppSelector((state) => state.profilePage.photos.large);

    const { fullName, aboutMe, lookingForAJob, lookingForAJobDescription, contacts } =
        useAppSelector((state) => state.profilePage);
    const dispatch = useAppDispatch();

    const { facebook, github, vk, twitter, website, youtube, mainLink, instagram } = contacts;

    const srcImgString = largePhoto
        ? largePhoto
        : "https://www.pngitem.com/pimgs/m/560-5603874_product-image-logo-avatar-minimalist-flat-line-hd.png";

    const onclickHandler = (e: any) => {
        if (e.target.files.length) {
            dispatch(updateUserAvatarTC(e.target.files[0]));
        }
    };

    useEffect(() => {
        dispatch(getUserProfileTC(props.userId));
    }, [dispatch, props.userId]);

    return (
        <div>
            <h1>{fullName}</h1>
            <p>{props.userId}</p>
            <div className={s.description}>
                <img src={srcImgString} alt={"profilePhoto" + props.userId} />
                <ProfileStatusWithHooks userId={props.userId} />
                <div style={{ marginTop: "25px" }}>
                    <p>About me : {aboutMe ? aboutMe : "-"}</p>
                    <p>Looking For A Job : {lookingForAJob ? "yes" : "no"}</p>
                    <strong>Social media : </strong>
                    <SpanWithInput name={"facebook"} />
                    <SpanWithInput name={"github"} />
                    <SpanWithInput name={"vk"} />
                    <SpanWithInput name={"twitter"} />
                    <SpanWithInput name={"website"} />

                    {/*<p>*/}
                    {/*    Looking For A Job Description :{" "}*/}
                    {/*    {lookingForAJobDescription ? lookingForAJobDescription : "-"}*/}
                    {/*</p>*/}
                    {/*<p>facebook : {facebook ? facebook : "-"}</p>*/}
                    {/*<p>github : {github ? github : "-"}</p>*/}
                    {/*<p>vk : {vk ? vk : "-"}</p>*/}
                    {/*<p>twitter : {twitter ? twitter : "-"}</p>*/}
                    {/*<p>website : {website ? website : "-"}</p>*/}
                    {/*<p>youtube : {youtube ? youtube : "-"}</p>*/}
                    {/*<p>mainLink : {mainLink ? mainLink : "-"}</p>*/}
                    {/*<p>instagram : {instagram ? instagram : "-"}</p>*/}
                </div>
            </div>
            <InputTypeFile />
            {/*<input type="file" onClick={onclickHandler} />*/}
        </div>
    );
};
