import React from "react";
import formatNumber from "format-number";
import photographer from "./images/girl.png";
import { setMoney } from './actions/index';
import { connect, useSelector } from 'react-redux';
import "./App.css";
import store from './store/index';

function App(props) {
    const withDrawMoney = (event) => {
        const amount = event.target.dataset.amount;
        store.dispatch(setMoney(amount));
    }

    const username = useSelector(state => state.username);
    const totalAmount = useSelector(state => state.totalAmount);
    //const { username, totalAmount } = props;
    return (
        <div className="App">
            <img className="App__userpic" src={photographer} alt="user" />
            <p className="App__username">Hello, {username}! </p>
            <div className="App__amount">
                {formatNumber({ prefix: "$" })(totalAmount)}
                <p className="App__amount--info">Total Amount</p>
            </div>

            <section className="App__buttons">
                <button
                    data-amount="10000"
                    onClick={withDrawMoney}
                >WITHDRAW $10,000</button>
                <button
                    data-amount="5000"
                    onClick={withDrawMoney}
                >WITHDRAW $5,000</button>
            </section>

            <p className="App__giveaway">Give away all your cash to charity</p>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        username: state.username,
        totalAmount: state.totalAmount
    };
}

const ConnectApp = connect(mapStateToProps)(App);
export default ConnectApp;