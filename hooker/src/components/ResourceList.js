import React, { useState, useEffect } from "react";
import axios from "axios";

export default ({ resource }) => {
  const [resources, setResources] = useState([]);

  const fetchResource = async resource => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );

    setResources(response.data);
    console.log(resources);
  };

  useEffect(() => {
    fetchResource(resource);
  }, [resource]);

  return (
    <ul>
      {resources.map(r => (
        <li key={r.id}>{r.title}</li>
      ))}
    </ul>
  );
};
