import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [advice, setAdvice] = useState();
  useEffect(() => {

    const timeout = setTimeout(() => {

      getData();
    }, 100);
    return () => clearTimeout(timeout)
  }, []);


  const getData = async () => {
    try {
      const result = await axios.get("	https://api.adviceslip.com/advice");
      const adv = result.data.slip.advice
      setAdvice(adv)

    } catch (error) {
      setAdvice("Sorry network error")
      console.log(error)
    }
  };

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">
          {advice}
        </h1>

        <button className="button" onClick={getData}>
          <span>
            Give Me Advice!
          </span>

        </button>


      </div>

    </div>
  );
};

export default App;
