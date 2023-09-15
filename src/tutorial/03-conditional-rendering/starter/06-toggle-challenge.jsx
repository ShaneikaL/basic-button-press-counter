import {useState} from 'react';

const ToggleChallenge = () => {
  const [showAlert,setShowAlert]=useState(false);

  // const handleToggle = ()=>{
  //     if(showAlert){
  //         setShowAlert(false);
  //         return;
  //     }
  //     setShowAlert(true);
  // }

  return (
      <div>
      <h2>toggle challenge</h2>
          <button className='btn' onClick={()=>setShowAlert(!showAlert)}>
              Toggle
          </button>
          {showAlert && <AlertDisplay/>}
      </div>
  );
};

const AlertDisplay = () => {
  return (
      <div className='alert alert-danger'>
      Hi Neika!
      </div>
  )
}
export default ToggleChallenge;
