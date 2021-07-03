import React, {useRef} from 'react';

function Copy() {

    const textInput = useRef();
  
    const copy = () => {
      const el = textInput.current
      el.select()
      document.execCommand("copy")
    }
  
    return (
      <>
        <input type="text" value="Test Text" ref={textInput} readOnly></input>
        <button onClick={copy}>copy</button>
      </>
    );
  }
  
  export default Copy;