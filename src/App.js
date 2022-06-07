import './css/App.css';
import Costs from "./components/Costs";
import NewCost from "./components/newCost/NewCost";
import {useState} from "react";

function App() {
  const costs = [
    {
      id: '1234',
      data: new Date(2022,3,14),
      description: 'Refrigerator',
      amount: 1999.99,
    },
    {
      id: '12342345',
      data: new Date(2022,4,18),
      description: 'Sofas',
      amount: 1499.99,
    },
    {
      id: '9876',
      data: new Date(2021,10,20),
      description: 'King Size Mattresses',
      amount: 649.99,
    },
    {
      id: '13987',
      data: new Date(2021,9,2),
      description: 'Bananas',
      amount: 1.97,
    },
  ]
  const [costsList, setCostsList] = useState(costs)
  const addCostHandler = (costNew) =>{
    // console.log(costsList)
    // console.log(costNew)
    // const newCostsList = costsList.push(costNew)
    // console.log(newCostsList)
    setCostsList([costNew, ...costsList])
  }


  return (
    <div>
      <NewCost onAddCost={addCostHandler}/>
      <Costs costsList={costsList}/>
    </div>
  );
}

export default App;
