import React, {Component} from 'react';
import Repository from "../repository/repository";
import {getHistoryFromStore} from "../data/local_store";

class HistoryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: []
        }
    }
    getHistory = () => {
        const dataRepository = new Repository();
        const arr = dataRepository.getHistoryList();
        this.setState({...this.state, history: arr});
    }
    render() {
        return (
            <div>
                <button onClick={this.getHistory}>Get History</button>
                <span>{JSON.stringify(this.state.history)}</span>
            </div>
        );
    }
}

export default HistoryPage;