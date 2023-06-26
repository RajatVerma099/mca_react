import React, { useState } from 'react';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastClickTime, setLastClickTime] = useState(0);

  const toggleAccordion = () => {
    const currentTime = new Date().getTime();
    // if (currentTime - lastClickTime < 300) {
      // Double tap occurred
   if (isOpen==true){
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
        title="Data Structure and Algorithm"
        content={
          <div>
           <p>Unit 1.) Linear DS</p>
            <p>Unit 2.) Algorithms In Computing</p>
            <p>Unit 3.) Hierarical DS and Hashing</p>
            <p>Unit 4.) Sorting, Tress and Graphs</p>
            <p>Unit 5.) Algorithm Design Techniques</p>

          </div>
        }
      />

<AccordionItem
        title="Python Programming"
        content={
          <div>
           <p>Unit 1.) Variables Operators and Conditionals</p>
            <p>Unit 2.) Loops and Functions</p>
            <p>Unit 3.) Simple Data Structures</p>
            <p>Unit 4.) String, Dictionaries, Modules</p>
            <p>Unit 5.) File and Exception Handling and System Level Commands</p>

          </div>
        }
      />
      <AccordionItem
        title="Content Technology"
        content={
          <div>
           <p>Unit 1.) Document Databasea</p>
            <p>Unit 2.) Graph and Column Databases</p>
            <p>Unit 3.) Distributed Database Patterns</p>
            <p>Unit 4.) DAM</p>
            <p>Unit 5.) DAM Metrics and Strategies</p>

          </div>
        }
      />

<AccordionItem
        title="Network Prog. and Device Management"
        content={
          <div>
           <p>Unit 1.) Architecture and Application</p>
            <p>Unit 2.) Socket Programming</p>
            <p>Unit 3.) Secure Communication</p>
            <p>Unit 4.) L2 &L3 Protocols and Devices</p>
            <p>Unit 5.) Devices, Monitoring and Management</p>

          </div>
        }
      />

<AccordionItem
        title="Research Methedology and IPR"
        content={
          <div>
           <p>Unit 1.) Research Problem Formulation</p>
            <p>Unit 2.) Literature Review</p>
            <p>Unit 3.) Technical Writing/Presentation</p>
            <p>Unit 4.) Introduction to IPR</p>
            <p>Unit 5.) IPR</p>

          </div>
        }
      />
    </div>
  );
};

export default NestedAccordion;
