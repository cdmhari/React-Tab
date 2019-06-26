import React from 'react';

function TabNavType1(props) {
    const element = <li
        className={props.className ? `tab-item ${props.className}` : 'tab-item'}
        onClick={props.onTabChange(props.index)}>
        <a>Tab Nav 1</a>
        <div>100</div>
    </li>
    return element;
}

export default TabNavType1;