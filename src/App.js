import './css/App.css';
import Costs from "./components/Costs";

function App() {
  const costs = [
    {
      data: new Date(2022,3,14),
      description: 'Refrigerator',
      amount: 1999.99,
    },
    {
      data: new Date(2022,4,18),
      description: 'Sofas',
      amount: 1499.99,
    },
    {
      data: new Date(2021,10,20),
      description: 'King Size Mattresses',
      amount: 649.99,
    },
    {
      data: new Date(2021,9,2),
      description: 'Bananas',
      amount: 1.97,
    },
  ]
  return (
    <div>
      <h1> New Project </h1>
      <Costs costsList={costs}/>
    </div>
  );
}

export default App;
