import {v1} from "uuid";
import {ActionsAllTypes, PostDataType, ProfilePageType} from "./state";


export type AddPostReducerType = {
    type : 'ADD-POST'
}
export type UpdateNewPostReducerType = {
    type : 'UPDATE_NEW_POST',
    newText : string
}

export type AllProfileReducersType = AddPostReducerType | UpdateNewPostReducerType


export const profileReducer = (state: ProfilePageType, action: ActionsAllTypes) => {
    switch (action.type) {

        case "ADD-POST":
            const newPost: PostDataType = {
                id: v1(),
                postMessage: state.newPostText,
                likes: 0
            }
            state.postData.push(newPost)
            state.newPostText = ''
            return state;

        case "UPDATE_NEW_POST":
            state.newPostText = action.newText
            return state;

        default:
            return state
    }
}

export const addPostCreator = () : AddPostReducerType => ( {type : "ADD-POST"} )
export const updateNewPostCreator = (text: string) : UpdateNewPostReducerType =>
    ( {type : "UPDATE_NEW_POST" , newText : text} )
