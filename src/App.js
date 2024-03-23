import React from 'react'
import {useForm} from 'react-hook-form'


function App() {

  const form = useForm();

  return (

    <div>
    <h1>Form Application</h1>

    <label htmlFor='username'>Username</label>
    <input type='text' id='username' name='username' />

    <label htmlFor='email'>Email</label>
    <input type='email' id='email' name='email' />

    <label htmlFor='channel'>Channel Name</label>
    <input type='text' id='channel' name='channel' />

    <button>Submit</button>


    </div>


  )
}

export default App