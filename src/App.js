import { useState } from 'react';
import Dropdown from './components/Dropdown';

function App() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  } 

  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" }
  ];


  return (
    <div className="flex">
      <Dropdown options={options} value={selection} onChange={handleSelect} />
    </div>
  );
}

export default App;



/*

import ButtonPage from './pages/ButtonPage';
import AccordionPage from "./pages/AccordionPage";

//////////////////////////////////////////////////////////

  return (
    <>
      <ButtonPage />
      <hr style={{margin: "100px 15px"}}/>
      <AccordionPage />
    </>
  );

*/
