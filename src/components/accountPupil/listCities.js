import React, { useState, useEffect } from "react";
import axios from "axios";

function ListCities() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    doApi();
  }, []);

  const doApi = async () => {
    let url = `https://data.gov.il/api/3/action/datastore_search?resource_id=5c78e9fa-c2e2-4771-93ff-7f400a12f7ba&limit=1272`;
    let res = await axios.get(url);
    console.log(res.data.result.records);
    setCities(res.data.result.records);
  };

  return (
    <div>
      <h1>Data Display</h1>
      <div>
        <h1>List of Cities in Israel</h1>
        <ul>
          {cities.map((city) => (
          <li key={city._id}>{city.שם_ישוב}</li>
        ))}
        </ul>
      </div>
    </div>
  );
}

export default ListCities;
