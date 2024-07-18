import React, { useState } from "react";
import AccordionItem from "./accordion-item";

function Accordion({key,items}) {
  const [openIndex, setOpenIndex] = useState(0); // Index of the initially open item

  const handleToggle = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
    // getImage(index);
  };
  
  const getImage = (index) => {
    // let el=document.getElementById("openicon"+index);
    // el.classList.remove("open");
    // el.classList.add("close");
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
          showDivider={index!==items.length-1}
        />
      ))}
    </div>
  );
}

export default Accordion;
