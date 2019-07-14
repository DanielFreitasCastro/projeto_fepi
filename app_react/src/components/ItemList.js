import React, { Component } from 'react'

import "./ItemList.css";

class ListItem extends Component {
    render() {
        const { item } = this.props;
        return (
            <li className="item_list">
                <div className="item_list_container">
                    <img src={item.avatar_url} alt={item.avatar_url} srcSet={item.avatar_url} />
                    <div className="item_list_container_texts">
                        <h3>{item.login}</h3>
                        <a href={item.html_url} target="_blank" rel="noopener noreferrer">{item.html_url}</a>
                    </div>
                </div>
            </li>
        )
    }
}

export default class ItemList extends Component {
    state = {
        list: []
    }

    render() {
        const { list = [] } = this.props;

        if (!list.length) {
            return (
                <h2>Nenhum usuário encontrado!</h2>
            )
        }

        return (
            <ul>
                {
                    list.map((value, index) => (
                        <ListItem item={value} key={`item_${index}`} />
                    ))
                }
            </ul>
        )
    }
}
