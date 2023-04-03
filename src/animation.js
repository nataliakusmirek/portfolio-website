import React from "react";
import "./App.css";
import { ANIMATION } from './data';
import loading from './loading.gif';

export const animation = () => 
{
    return
    (
        <>
        <div>        <img src={loading} alt="..."></img>
</div>
        </>
    );
};