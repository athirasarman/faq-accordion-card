import React from "react";
import "./accordion-item.css";
import imageSrc from "../assets/images/icon-arrow-down.svg";

function AccordionItem({
  key,
  index,
  showDivider,
  title,
  content,
  isOpen,
  onToggle,
  buttonImage,
}) {
  // Function to change the image alignment
  const changeImage = () => {
    if (isOpen) {
      let el = document.getElementById("openicon" + index);
      el.classList.remove("close");
      el.classList.add("open");
    } else {
      let el = document.getElementById("openicon" + index);
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
        <span  className={`title ${isOpen ? 'active-title' : ''}`}>{title}</span>
        <span className="open-close">
          <img id={"openicon" + index} src={imageSrc} alt="Open-Close" />
        </span>
      </div>
      {isOpen && (
        <div className="accordion-content">
          {content}
          <div className="divider"></div>
        </div>
      )}
    </div>
  );
}

export default AccordionItem;
