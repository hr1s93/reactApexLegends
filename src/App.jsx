import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const URL = "https://raddythebrand.github.io/apex-legends/data.json";
        const response = await fetch(URL);
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError("Error fetching data: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log("Data:", data);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <div className="legends">
        {data.map((legend, id) => (
          <Card
            key={id}
            img={legend.thumbnail.default}
            nickname={legend.nickname}
            class={legend.class}
            skills={legend.ability.map((item, id) => (
              <div className="more-info">
                <h4 key={id}>{item.type}: </h4>
                <p>{item.title}</p>
              </div>
            ))}
          />
        ))}
      </div>
    </>
  );
}

export default App;
