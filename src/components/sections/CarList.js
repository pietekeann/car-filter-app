import CarItem from "./CarItem";

function CarList(props) {

const List = {
    listStyle: "none",
    margin: "0",
    padding: "0",
    display: "flex",
    flexWrap: "wrap",
}

  return (
    <ul style={List}>
      {props.cars.map((car, i) => (
        <CarItem
          key={i}
          id={car.Model_ID}
          name={car.Make_Name}
          model_name={car.Model_Name}
          type={props.type}
        />
      ))}
    </ul>
  );
}

export default CarList;
