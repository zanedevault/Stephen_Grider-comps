import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!divEl.current) {
        return;
      }

      if(!divEl.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('click', handler, true);

    // if you 'return' a function from an useEffect call the function will be called inbetween re-renders of the component AND if the component is removed from the DOM - the function does not need to be named 'cleanUp' and can even be an anonymous function
    const cleanUp = () => {
      document.removeEventListener('click', handler);
    }
    return cleanUp;

  }, []);


  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => (
    <div
      className="hover:bg-sky-100 rounded cursor-pointer p-1"
      key={option.value}
      onClick={() => handleOptionClick(option)}
    >
      {option.label}
    </div>
  ));

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // switched below with the JS Boolean Expression with ||
  // const selectedValue = value ? value.label : "Select...";

  return (
    <div className="w-48 relative" ref={divEl}>
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen && (
        <Panel className="absolute top-full">
          {renderedOptions}
        </Panel>
      )}
    </div>
  );
}

export default Dropdown;
