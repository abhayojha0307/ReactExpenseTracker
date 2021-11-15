import React from 'react';
import './App.css';
import {Header} from "./component/header"
import {Balance} from './component/balance';
import {IncomeExpenses} from './component/incomeExpenses'
import {TransactionList} from "./component/transactionList"
import {AddTransaction} from "./component/AddTransaction"

import { GlobalProvider } from "./context/GlobalState"

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
      </div> 
    </GlobalProvider>
  );
}

export default App;
