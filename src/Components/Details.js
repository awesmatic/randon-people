import classes from "./Details.module.css";

function Details({ details, deleteHandler }) {
  return (
    <div>
      {details.map((item) => {
        return (
          <div key={item.id} className={classes.details}>
            <h3>{item.name}</h3>
            <button onClick={() => deleteHandler(item.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default Details;
