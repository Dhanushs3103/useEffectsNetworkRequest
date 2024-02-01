function DataDisplay ({data}) {
    return (
        <>
          <div id="main">
          {data.map((info) => (
          <div key={info.id} id="card">
              <h3> Id :{info.id}</h3>
              <h3> Name :{info.name}</h3>
              <h4> Username :{info.username}</h4>
              <h4> Email :{info.email}</h4>
              <h4>Address :</h4>
              <ul>
                <li key={info.address.street}>Street: {info.address.street}</li>
                <li key={info.address.suite}>Suite: {info.address.suite}</li>
                <li key={info.address.city}> City: {info.address.city}</li>
                <li key={info.address.zipcode}> Zipcode: {info.address.zipcode}</li>
              </ul>
          </div>
        ))}
          </div>
        </>
    )
}

export default DataDisplay