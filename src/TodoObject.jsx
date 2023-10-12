import { useState,useEffect } from 'react'
import UserPng from './user.png';

function TodoObject(object){

    return(
    <div id="item">
        <img id="userIcon" src={UserPng} width="50" height="50" />
        <p>{object.userId}</p>
        <input id="done" type="radio" checked={object.completed} />
        <p>{object.title}</p>
    </div>
    )
}

export default TodoObject;