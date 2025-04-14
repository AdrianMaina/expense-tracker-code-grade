import { useState } from 'react';


export default function ExpenseForm({ onAddExpense }) {
 const [formData, setFormData] = useState({
   name: '',
   desc: '',
   category: '',
   amount: '',
   date: ''
 });


 const handleChange = (e) => {
   setFormData({ ...formData, [e.target.name]: e.target.value });
 };


 const handleSubmit = (e) => {
   e.preventDefault();
   onAddExpense(formData); // send data to App
   setFormData({ name: '', desc: '', category: '', amount: '', date: '' }); // clear form
 };


 return (
   <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow space-y-4">
     <h2 className="text-xl font-semibold">Add Expense</h2>
     <input name="name" value={formData.name} onChange={handleChange} placeholder="Expense name" className="w-full border rounded px-3 py-2" />
     <input name="desc" value={formData.desc} onChange={handleChange} placeholder="Description" className="w-full border rounded px-3 py-2" />
     <input name="category" value={formData.category} onChange={handleChange} placeholder="Category" className="w-full border rounded px-3 py-2" />
     <input name="amount" value={formData.amount} onChange={handleChange} type="number" placeholder="Amount" className="w-full border rounded px-3 py-2" />
     <input name="date" value={formData.date} onChange={handleChange} type="date" className="w-full border rounded px-3 py-2" />
     <button className="bg-black text-white w-full py-2 rounded hover:bg-gray-800">Submit</button>
   </form>
 );
}
