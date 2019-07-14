import React, { Component } from 'react';
import Header from '../components/Header';

import ItemList from '../components/ItemList';

import './List.css';
import Github from '../services/Github';

class List extends Component {

    constructor(props) {
        super(props);

        this.state = {
            list: null,
            term: props.match.params.term || null
        }
    }

    async componentDidMount() {
        const { term } = this.state;
        const { history } = this.props;
        const { data, status } = await Github.get(`users?q=${term}`);

        if (!term || !term.length) {
            history.push('/');
            return;
        }

        if (status !== 200) {
            alert("Algo deu errado!");
            return;
        }

        this.setState({ list: data.items });
    }

    _renderList() {
        const { list } = this.state;

        if (!list) {
            return (
                <h1>Carregando...</h1>
            )
        }

        return (
            <>
                <h1>Itens encontrados:</h1>
                <ItemList list={list} />
            </>
        )
    }

    render() {
        return (
            <>
                <Header title="Lista" />
                <div id="list_content" className="content">
                    {this._renderList()}
                </div>
            </>
        )
    }
}

export default List;