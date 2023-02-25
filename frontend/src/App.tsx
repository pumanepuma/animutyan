import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import useInput from './hooks/useInput';
import useFetch from './hooks/useFetch';
import { type } from 'os';

interface ITyan {
  name:string,
  surname: string,
  id: string,
  age: number
}

function App() {
  const {data,loading,error} = useFetch<ITyan>('https://localhost:8000/Tyan')
  const name = useInput("")
  const surname = useInput("")
  const age = useInput(0)
  function handleClick(){
    console.log(`${name.value} ${surname.value} ${age.value}`)
  }
  return (
    <div className="App">
      <input type='text' placeholder='name' {...name}/>
      <input type='text' placeholder='surname' {...surname} />
      <input type='number' max={100} min={10} placeholder='age' {...age} />
      <button onClick={handleClick}>Click!</button>
      <div>
        {
          loading ? <h2>Loading...</h2>
          :error ? <h2>Error</h2>
          : <ul>
            {
              data.map(tyan => <li key={tyan.id}>
                <p>{tyan.name} {tyan.surname}</p>
              </li>)
            }
          </ul>
        }
      </div>
    </div>
  );
}

export default App;
