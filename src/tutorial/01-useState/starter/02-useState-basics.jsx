import {useState} from 'react';

const UseStateBasics = () => {
  const [count,setCount] = useState(0);
  const handleCount = () =>{
     setCount(count + 1 );
  }
  return (
      <>
        <h1>You Clicked {count} Times.</h1>
        <button className='btn' onClick={handleCount}>Increase</button>
      </>
  );
};

export default UseStateBasics;
