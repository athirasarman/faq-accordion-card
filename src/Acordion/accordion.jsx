import React, { useState } from "react";
import AccordionItem from "./accordion-item";
// import IconMinus from "../assets/images/icon-minus.svg";
// import IconPlus from "../assets/images/icon-plus.svg";

function Accordion({ key,items }) {
  const [openIndex, setOpenIndex] = useState(0); // Index of the initially open item
  // let buttonImage = IconPlus;

  const handleToggle = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
    getImage(index);
  };
  const getImage = (index) => {
  //  return buttonImage = index === openIndex ? IconMinus : IconPlus;
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          index={index} 
          title={item.title}
          content={item.content}
          isOpen={index === openIndex}
          onToggle={() => handleToggle(index)}
          // buttonImage={getImage(index)}
          showDivider={index!=items.length-1}
        />
      ))}
    </div>
  );
}

export default Accordion;
