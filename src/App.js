import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import styles from "./App.module.css";
import Details from "./Components/Details";

function App() {
  const [name, setName] = useState("");
  const [error, setError] = useState();
  const [details, setDetails] = useState([]);
  const [click, setClick] = useState(Date.now());
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 80 + 1)
  );
  const url = `https://swapi.dev/api/people/${randomNumber}/`;

  const addRecordButtonHandler = () => {
    setRandomNumber(Math.floor(Math.random() * 80) + 1);
    setClick(Date.now());
    setDetails([...details, { id: Math.random(), name: name }]);
  };

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setName(response.data.name);
      })
      .catch((error) => {
        setError(error);
      });
  }, [click]);

  if (error) return `Error: ${error.message}`;

  const deleteHandler = (id) => {
    console.log(id);
    setDetails(details.filter((el) => el.id !== id));
  };

  return (
    <div className={styles.container}>
      <div>
        <button onClick={addRecordButtonHandler}>Add Record</button>
      </div>
      <div className={styles.details}>
        <h2>Name</h2>
        <Details details={details} deleteHandler={deleteHandler} />
      </div>
    </div>
  );
}

export default App;
