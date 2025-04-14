import { useState } from 'react';
import Header from './components/header';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import './index.css'


export default function App() {
 const [expenses, setExpenses] = useState([]);


 const addExpense = (newExpense) => {
   setExpenses((prev) => [...prev, newExpense]);
 };


 return (
  
   <div className="min-h-screen  text-gray-900 p-4">
     <Header />
     <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
       <div className="col-span-1">
         <ExpenseForm onAddExpense={addExpense} />
       </div>
       <div className="col-span-1 md:col-span-3">
         <ExpenseTable expenses={expenses} />
       </div>
     </div>
   </div>
 );
}
