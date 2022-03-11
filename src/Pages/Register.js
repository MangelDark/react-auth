import React, { useState } from 'react'

const Register = () => {
  const [name, setName] =  useState('');
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
        <form>
            <img className="mb-4" src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
            <h1 className="h3 mb-3 fw-normal">Please Register</h1>

            <div className="form-floating">
              <input onChange={e=> setName(e.target.value)} type="text" className="form-control" id="floatingInputFullName" placeholder="Full Name" />
              <label htmlFor="floatingInputFullName">Full Name</label>
            </div>
            <div className="form-floating">
              <input onChange={e=> setEmail(e.target.value)} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input onChange={e=> setPassword(e.target.value)} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
              <label htmlFor="floatingPassword">Password</label>
            </div>

          
            <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
            
          </form>
    </div>
  )
}

export default Register