import React, { useState } from 'react';

function Accordion(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
        
    </div>
  )
}

export default Accordion;
