import React, {useEffect, useState} from "react";
import './App.css';

function App() {
    const [backendData, setBackendData] = useState([{}])
    useEffect(() => {
      fetch('/api').then(response => response.json())
          .then(data => {setBackendData(data)})
    } , [])
    console.log(backendData)

  return (
      <div className="App">
        <p>hello world!</p>
          {
              ( typeof backendData.users === 'undefined') ? (
                  <p>Loading</p>
              ) :
              (
                  backendData.users.map(el => {
                    return <p>{el}</p>
                  })
              )
          }
      </div>
  );
}

export default App;
