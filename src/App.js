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
      data: new Date(2021,4,18),
      description: 'Sofas',
      amount: 1499.99,
    },
    {
      id: '9876',
      data: new Date(2020,10,20),
      description: 'King Size Mattresses',
      amount: 649.99,
    },
    {
      id: '13987',
      data: new Date(2019,9,2),
      description: 'Bananas',
      amount: 1.97,
    },
    {
      id: '234',
      data: new Date(2019,10,14),
      description: 'Vinotemp 15-Inch',
      amount: 1499.99,
    },
    {
      id: '2632',
      data: new Date(2019,4,25),
      description: 'Portofino Comfort',
      amount: 2499.99,
    },
    {
      id: '427c',
      data: new Date(2019,8,9),
      description: 'Seagrass Woven Chaise Lounge',
      amount: 549.99,
    },
    {
      id: '32s',
      data: new Date(2019,4,21),
      description: '50-stem Red Roses',
      amount: 49.99,
    },
    {
      id: '23a',
      data: new Date(2020,1,14),
      description: 'Kenwood Chef Major 7-Qt. Stand Mixer',
      amount: 499.99,
    },
    {
      id: '86a',
      data: new Date(2020,7,2),
      description: 'Braun MultiQuick 7 Hand Blender',
      amount: 99.99,
    },
    {
      id: 'a53q',
      data: new Date(2020,10,12),
      description: 'Vinotheque 288 Bottle',
      amount: 3299.99,
    },
    {
      id: '2ai1',
      data: new Date(2021,3,17),
      description: 'GE Smart 40 Gallon Electric Water Heater',
      amount: 719.99,
    },
    {
      id: '4s63',
      data: new Date(2021,5,11),
      description: 'Ancona 30 Inch. Convertible',
      amount: 249.99,
    },
    {
      id: 'qd42',
      data: new Date(2021,11,6),
      description: 'Samsung Smart 44dBA Dishwasher',
      amount: 625.23,
    },
    {
      id: '5f2',
      data: new Date(2021,5,9),
      description: 'KitchenAid Stainless Steel 8-Burner Grill',
      amount: 1499.99,
    },
    {
      id: 'zf32',
      data: new Date(2021,2,9),
      description: 'Rapid Flo 5/8 in. x 100 ft. Compact Garden Hose',
      amount: 49.99,
    },
    {
      id: 'sa130s',
      data: new Date(2022,1,11),
      description: 'MacBook Pro 13.3"',
      amount: 1249.99,
    },
    {
      id: '2eLd2',
      data: new Date(2022,4,13),
      description: 'LG UltraGear 38" Class WQHD IPS',
      amount: 1599.99,
    },
    {
      id: '023dq',
      data: new Date(2022,8,24),
      description: 'Ozzie Swivel Chair',
      amount: 199.99,
    },
    {
      id: 'we324',
      data: new Date(2022,11,10),
      description: 'EPOS Sennheiser GSP 302',
      amount: 48.99,
    },
  ]
  const [costsList, setCostsList] = useState(costs)
  const addCostHandler = (costNew) =>{
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
