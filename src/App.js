//import ExpenseItem from './component/ExpenseItem';
import React from 'react';
import Expenses from '../component/Expenses/Expenses';

//import './App.css';


const App=()=> {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: 'Agra'
    },
    { id: 'e2',
     title: 'New TV',
      amount: 799.49,
       date: new Date(2021, 2, 12),
        location:'banglore' }, 
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      loaction: 'New delhi'
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      location:'gurugram'
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      
       <Expenses items={expenses}/>
    
      
    </div>
  );
}

export default App;
