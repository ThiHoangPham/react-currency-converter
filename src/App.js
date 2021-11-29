import React, { useEffect } from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow';

const BASE_URL = "http://data.fixer.io/api/latest?access_key=be1118ee9373259facf451d84f94e4ea"

function App() {

  const =

    useEffect(() => {
      fetch(BASE_URL)
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])

  return (
    <>
      <h1>Convert</h1>
      <CurrencyRow />
      <div className="equals">=</div>
      <CurrencyRow />
    </>
  );
}

export default App;
