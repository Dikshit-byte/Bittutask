import React, { useEffect, useState, useRef } from "react";
import Card from "./Card";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const dataFetchRef = useRef(false);
  const num = useRef(1);
  // useEffect(() => {
  //       console.log("i fire "+crypto.randomUUID());
  //   fetch("https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json")
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //       throw response;
  //     })
  //     .then((data) => {
  //       setData(data);
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error Fetching data :", data);
  //       setError(error);
  //       console.log("Error happend..we're extremely sorry for that");
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);

  const fetchData = () => {
    console.log("i fire " + num.current++);
    fetch("https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error Fetching data :", data);
        setError(error);
        console.log("Error happend..we're extremely sorry for that");
      })
      .finally(() => {
        setLoading(false);
      });
  };
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
        data.map((data, id) => {
          return (
            <div key={id}>
              {/* <div key={id}>{data.dishName} - {data.description} - {data.image}</div> */}
              <Card dish={data.dishName} description={data.description} image={data.image}/>
            </div>
          );
        })}
    </div>
  );
}

export default App;
