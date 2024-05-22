import React, { useState } from "react";
import "./accordion-item.css";
import imageSrc from "../assets/images/icon-arrow-down.svg";

function AccordionItem({key,index, showDivider,title, content, isOpen, onToggle,buttonImage }) {
  // const [isOpen, setIsOpen] = useState(false);
  // Define state to hold the image source
  // const [imageSrc, setImageSrc] = useState(buttonImage);
  // Function to change the image source
  const changeImage = () => {
    // Update the image source based on some condition or variable
    if (isOpen) {
      // setImageSrc(IconPlus);
      let el=document.getElementById("openicon"+index);
      el.classList.remove("close");
      el.classList.add("open");
    } else {
      // setImageSrc(IconMinus);
      let el=document.getElementById("openicon"+index);
        el.classList.remove("open");
        el.classList.add("close");
    }
  };

  const toggleAccordion = () => {
    changeImage();
    onToggle();
  };

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={toggleAccordion}>
        <span className="title">{title}</span>
        <span className="open-close">
          <img id={"openicon"+index} src={imageSrc} alt="Open-Close" />
        </span>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
     {showDivider &&  <div className="divider"></div>}
    </div>
  );
}

export default AccordionItem;
