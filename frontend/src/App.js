import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    const fetchAllPerson = async () => {
      const response = await axios.get(process.env.REACT_APP_API_URL + '/persons');
      setData(JSON.parse(response.data));
    }
    fetchAllPerson();
  }, []);

  const seeDetail = async (id) => {
    const response = await axios.get(process.env.REACT_APP_API_URL + '/persons/' + id);
    console.log(response.data)
    setDetailData(JSON.parse(response.data));
  }


  return (
    <div className="App" style={{ display: "flex", gap: "20px" }}>
      <div style={{padding: "20px 40px", boxShadow: "1px 2px 9px #DEDEDE", borderRadius: "6px"}}>
        <h2>List of Person</h2>
        <div style={{ display: "flex", gap: "8px" }}>
        {
          Object.entries(data).map(([key, value]) => {
            return (
              <div key={key}>
                <p onClick={() => {seeDetail(value.id)}} style={{cursor: "pointer", color: "blue", padding: "8px", boxShadow: "1px 2px 9px #DEDEDE", borderRadius: "6px"}}>{value.id}</p>
              </div>
            )
          })
        }
        </div>
      </div>
      <div style={{padding: "20px 40px", boxShadow: "1px 2px 9px #DEDEDE", borderRadius: "6px"}}>
        <h2>Person's Detail</h2>
        <p>Name = {detailData.name ?? "-"}</p>
        <p>Age = {detailData.age ?? "-"}</p>
      </div>
    </div>
  );
}

export default App;
