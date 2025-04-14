import React, { useState } from 'react';

export default function ExpenseTable({ expenses }) {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredExpenses = expenses.filter((expense) => {
        const searchLower = searchTerm.toLowerCase();
        return (
          expense.name.toLowerCase().includes(searchLower) ||
          expense.desc.toLowerCase().includes(searchLower) ||
          expense.category.toLowerCase().includes(searchLower) ||
          expense.amount.toString().includes(searchLower) ||
          expense.date.toLowerCase().includes(searchLower)
        );
      });
    

    return (
      <div className="bg-white p-4 rounded-lg shadow">
    <input type="text" placeholder="Search expenses..." className="w-full border px-3 py-2 mb-4 rounded" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}/>


        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-black text-white">
              <th className="p-2">Expense</th>
              <th className="p-2">Description</th>
              <th className="p-2">Category</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredExpenses.map((expense, idx) => (
              <tr key={idx} className="border-t hover:bg-gray-100">
                <td className="p-2">{expense.name}</td>
                <td className="p-2">{expense.desc}</td>
                <td className="p-2 capitalize">{expense.category}</td>
                <td className="p-2">${expense.amount}</td>
                <td className="p-2">{expense.date}</td>
              </tr>
            ))}
            {filteredExpenses.length === 0 && (
              <tr>
                <td colSpan="5" className="p-4 text-center text-gray-400">
                  No expenses yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
 