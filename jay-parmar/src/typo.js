import Typed from 'typed.js';
import React from 'react';
const TypedReactHooksDemo = () => {
  // Create reference to store the Typed instance itself
	const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
    	strings: [
        'Hi! myself Ayush Shukla',
        'I m Full stack Developer',
        'Welcome to my portfolio'
      ],
      typeSpeed: 100,
      backSpeed: 100,
      loop:true
    };
    
    // elRef refers to the <span> rendered below
    typed.current = new Typed('.addname', options);
    
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])}

  export default TypedReactHooksDemo