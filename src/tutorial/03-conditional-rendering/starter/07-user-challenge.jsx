import {useState} from 'react';

const UserChallenge = () => {
  const [user,setUser]= useState(null);

  const login = ()=>{
    setUser({name:'NeikaQueen'});
  };

  const logout = ()=>{
    setUser(null);
  }

  return <div>
    {user ?
        ( <div>
      <h4>hello there, {user.name}</h4>
      <button className='btn' onClick={logout}>Logout</button>
    </div>)
        :
        (<div>
          <h4>Please login</h4>
          <button className='btn' onClick={login}>Login</button>
        </div>  )
    }
  </div>;
};

export default UserChallenge;
