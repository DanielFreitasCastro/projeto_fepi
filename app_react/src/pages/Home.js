import React, { Component } from 'react';
import Header from '../components/Header';

import './Home.css';

class Home extends Component {

    state = {
        term: ''
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ term: 'teste' })
            setTimeout(() => {
                this.button.click();
            }, 2000);
        }, 2000);
    }

    async _onFormSubmit(evt) {
        evt.preventDefault();
        const { term } = this.state;
        if (!term.length) {
            alert("Informe um termo!");
            return false;
        }
        this.props.history.push(`/lista/${term}`);
    }

    render() {
        const { term } = this.state;

        return (
            <>
                <Header title="Home" />
                <div id="home_content" className="content">
                    <div className="home_form_container">
                        <p>Informe um termo:</p>
                        <form onSubmit={this._onFormSubmit.bind(this)}>
                            <input type="text" id="input_term" value={term} onChange={(evt) => {
                                this.setState({ term: evt.target.value });
                            }} />
                            <button ref={ref => this.button = ref} type="submit">Pesquisar</button>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default Home;