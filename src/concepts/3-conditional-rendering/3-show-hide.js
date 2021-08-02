import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false)


  return (
    <React.Fragment>
      <button className='btn' onClick={() => setShow(!show)} >Show/hide</button>
      {show && <Item/>}
    </React.Fragment>
      
  );
};

const Item = () => {
const [size, setSize] = useState(window.innerWidth)
  const checkSize = () => {
  setSize(window.innerWidth)
}
  useEffect(() => {
    window.addEventListener('resize', checkSize)
    return () => {
      window.removeEventListener('resize', checkSize)
    }
  })
  return (
    <div style={{ marginTop: '2rem' }}>
      <h1>Window</h1>
      <h2>Size: {size} px</h2>
    </div>

  )
}

export default ShowHide;
