import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

import {Transaction} from './Transaction'

const TransactionList = () => {

  const {transactions} = useContext(GlobalContext);
  console.log(transactions)
  return (
    <>
       <h3>History</h3>
      <ul className="list">
        {transactions.length !== 0 ? transactions.map(transaction => (
         <Transaction transaction={transaction} key={transaction.id}/>
          
        )): <div>There is no transaction</div>}
      </ul>
    </>
  )
}

export default TransactionList
