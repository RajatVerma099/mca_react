import React, { useState } from 'react';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastClickTime, setLastClickTime] = useState(0);

  const toggleAccordion = () => {
    const currentTime = new Date().getTime();
    if (currentTime - lastClickTime < 300) {
      // Double tap occurred
      setIsOpen(false);
    } else {
      // Single tap occurred
      setIsOpen(!isOpen);
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
        title="Section 1"
        content={
          <div>
            <p>Content of section 1</p>
            <NestedAccordion />
          </div>
        }
      />
      <AccordionItem
        title="Section 2"
        content={
          <div>
            <p>Content of section 2</p>
            <NestedAccordion />
          </div>
        }
      />
    </div>
  );
};

export default NestedAccordion;



// import React, { useState } from 'react';

// const AccordionItem = ({ title, content }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleAccordion = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="accordion-item">
//       <div className="accordion-header" onClick={toggleAccordion}>
//         {title}
//       </div>
//       {isOpen && <div className="accordion-content">{content}</div>}
//     </div>
//   );
// };

// const NestedAccordion = () => {
//   return (
//     <div className="nested-accordion">
//       <AccordionItem
//         title="Section 1"
//         content={
//           <div>
//             <p>Content of section 1</p>
//             <NestedAccordion />
//           </div>
//         }
//       />
//       <AccordionItem
//         title="Section 2"
//         content={
//           <div>
//             <p>Content of section 2</p>
//             <NestedAccordion />
//           </div>
//         }
//       />
//     </div>
//   );
// };

// export default NestedAccordion;
