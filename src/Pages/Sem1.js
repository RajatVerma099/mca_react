import React, { useState } from 'react';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastClickTime, setLastClickTime] = useState(0);

  const toggleAccordion = () => {
    const currentTime = new Date().getTime();
    if (currentTime - lastClickTime < 300) {
      // Double tap occurred
      setIsOpen(!isOpen);
    } else {
      // Single tap occurred
      setIsOpen(true);
    }
    setLastClickTime(currentTime);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={toggleAccordion}>
        {title}
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

const NestedAccordion = () => {
  return (
    <div className="nested-accordion">
      <AccordionItem
        title="Linear Algebra, Probability & Statistics"
        content={
          <div>
            <a href='https://drive.google.com/uc?export=view&id=1aIQF6gxiDZO_RbfHxySo4oKZ8fpZSP6U'><p> Linear Algebra Book</p></a>
            <p>Unit 1.) Vector Space</p>
            <p>Unit 2.) Linear Transformation</p>
            <p>Unit 3.) Probability and Random Variables</p>
            <p>Unit 4.) Testing of Hypothesis</p>
            <p>Unit 5.) Design Of Hypothesis</p>

            {/* <NestedAccordion /> */}
          </div>
        }
      />
      <AccordionItem
        title="Section 2"
        content={
          <div>
            <p>Content of section 2</p>
            {/* <NestedAccordion /> */}
          </div>
        }
      />
    </div>
  );
};

export default NestedAccordion;
