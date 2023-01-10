import React, { useState, useEffect, useRef } from "react";
import Card from "./Card";

function ApiFetch() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const dataFetchRef = useRef(false);

  const fetchData = () => {
    // console.log("i fire " + crypto.randomUUID());
    fetch("https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setData(data);
        // console.log(data);
      })
      .catch((error) => {
        console.error("Error Fetching data :", error);
        setError(error);
        // console.log("Error happend! We're extremely sorry for that");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  // console.log(data);
  useEffect(() => {
    if (dataFetchRef.current) return;
    dataFetchRef.current = true;
    fetchData();
  }, []);

  if (loading) return "Loading...";
  if (error) return "Error!";

  return (
    <div className="flex flex-row flex-wrap">
      {data &&
        data.length > 0 &&
        data.map((data) => {
          const { dishName, description, image, id } = data;
          return (
            <div key={id}>
              {/* <div key={id}>{data.dishName} - {data.description} - {data.image}</div> */}
              <Card dish={dishName} description={description} image={image} />
            </div>
          );
        })}
    </div>
  );
}

export default ApiFetch;
