import {useState} from 'react';
import {data} from '../../../data';
const UseStateArray = () => {
  const [people,setPeople]= useState(data);
    const handleRemove = (id) => {
        setPeople(people.filter((info)=>info.id!==id));
    };
    const handleRemoveAll = () => {
        setPeople([]);
    };
  return(
      <>
        <h2>useState array example</h2>
          {people.map((info)=>{
              const {id,name}=info;
              return (
                  <div key={id}>
                      <h2>{name}</h2>
                      <button onClick={()=>handleRemove(id)}>Remove</button>
                  </div>
              )
          })}
          <button onClick={handleRemoveAll} className='btn'>Clear All</button>

  </>
  );
};

export default UseStateArray;
