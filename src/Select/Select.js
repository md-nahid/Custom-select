import React, { useEffect, useState } from "react";
import Wrapper from "./Select.styled";
// animation
import { AnimatePresence, motion } from "framer-motion";

function Select({ options, dropdownIcon }) {
  const [screen, setScreen] = useState({
    label: "",
    value: "",
  });
  const [dropdown, setDropdown] = useState(false);
  //   set default value
  useEffect(() => {
    options.forEach((option) => {
      if (option.selected === true) {
        setScreen({ ...options, label: option.label, value: option.value });
      }
    });
  }, [options]);

  // set display value
  function handleClick(optionValue) {
    options.forEach((item) => {
      item.selected = false;
      if (item.value === optionValue) {
        item.selected = true;
        setScreen({
          ...screen,
          label: item.label,
          value: item.value,
        });
      }
    });
    setDropdown(false);
  }
  // set blur function
  function handleBlur(event) {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  }

  const variants = {
    hidden: {
      y: 50,
      opacity: 0,
      transition: { duration: 0.5 },
    },
    show: {
      y: [50, 0],
      opacity: [0, 1],
      transition: { duration: 0.5 },
    },
  };

  return (
    <Wrapper>
      <div className="select" onBlur={handleBlur}>
        <button
          className="value-container"
          onClick={() => setDropdown(!dropdown)}
        >
          <p className="value">{screen.label}</p>
          <p className="icon">{dropdownIcon}</p>
        </button>
        <AnimatePresence>
          {dropdown && (
            <motion.div
              className="dropdown"
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={variants}
            >
              {options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleClick(option.value)}
                  className={option.selected ? "selected" : ""}
                >
                  {option.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Wrapper>
  );
}

export default Select;
