import React from 'react';

function Normal(props) {
    return <p>Normal</p>;
}

function Degraded(props) {
    return <p className={props.className} onClick={props.onAction}>Degraded</p>;
}

function NotConnected(props) {
    return <p className={props.className}>Not Connected</p>;
}

export{
    Normal,
    Degraded,
    NotConnected
}