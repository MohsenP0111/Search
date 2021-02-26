import React from 'react';
import '../Styles/list_item.css';

function List_Item(props) {
    return (
        <div className="item">
        <a className="item-link" href={props.link}>
            <h5 className="item-title">{props.title}</h5>
            <p className="item-snippet">{props.snippet}</p>
        </a>
        </div>
    );
}

export default List_Item;