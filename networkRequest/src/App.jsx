import { useState } from 'react'
import './App.css'
import DataDisplay from './components/DataDisplay';

function App() {
  let [data, setData] = useState([]);
  let [error, setError] = useState(null);
  let [loading, setLoading] = useState(false);

  async function fetchData () {
    try {
      setLoading(true);
      let res = await fetch("https://jsonplaceholder.typicode.com/users");
      let finalData = await res.json();
      setData(finalData);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>error :{error.message}</h1>
  }

  return (
    <>
      <div>
        <h1>Click on the below button to get data from the server</h1>
       <div id='button'>
       <button onClick={fetchData}>Get Data</button>
       </div>
        <div>
          <DataDisplay data={data} />
        </div>
      </div>
    </>
  )
}

export default App
