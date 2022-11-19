import Expenses from './components/Expenses';
import './index.css'

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Car Insurance',
      amount: 2500,
      date: new Date(2021, 1, 28)
    },
    {
      id: 'e2',
      title: 'Petrol',
      amount: 1000,
      date: new Date(2021, 2, 29)
    },
    {
      id: 'e3',
      title: 'Groceries',
      amount: 2000,
      date: new Date(2021, 3, 30)
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 4250,
      date: new Date(2021, 5, 12),
    
    }
  ]

  return (
    <div>
      <Expenses expense={expenses}/>
    </div>
  );
}

export default App;
