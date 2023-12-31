import { useEffect } from "react";
import { useState } from "react";
import "../styles/Riddles.css";

const Riddles = () => {
  const [riddles, setRiddles] = useState([]);

  useEffect(() => {
    // Using fetch to fetch the api from
    // flask server it will be redirected to proxy
    fetch("/api/get_riddles").then((res) =>
      res.json().then((data) => {
        // Setting a data from api
        setRiddles(data);
      })
    );
  }, []);

  return (
    <div id="riddles">
      <h1 id="riddle-title">Riddles</h1>
      <ol type="A">
        {riddles.map(function (riddle, i) {
          return (
            <li className="riddle" key={i}>
              {riddle}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Riddles;
