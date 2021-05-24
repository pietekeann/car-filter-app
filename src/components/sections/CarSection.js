import React from "react";
import CarList from "./CarList";

function CarSection(props) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [loadedCars, setLoadedCars] = React.useState([]);

  const Center = {
    textAlign: "center",
  };

  React.useEffect(() => {
    let formatType = props.type.replace(/\s/g, "%20");

    fetch(
      "https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/" +
        props.make +
        "/modelyear/" +
        props.year.toString() +
        "/vehicletype/" +
        formatType +
        "?format=json"
    )
      .then((response) => {
        if (response.status == 404) {
          console.log("404 error");
        }
        console.log(
          "https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/" +
          props.make +
            "/modelyear/" +
            props.year.toString() +
            "/vehicletype/" +
            formatType +
            "?format=json"
        );
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setLoadedCars(data.Results);
      });
  }, [props.type, props.year, props.make]);

  if (isLoading) {
    return (
      <div style={Center}>
        <br />
        <img
          src="https://www.xenren.co/loader.gif"
          alt="loading..."
          width="50"
        />
      </div>
    );
  }

  let data = <p></p>;
  if (loadedCars.length == 0) {
    data = <p>No Results Found</p>;
  }

  return (
    <section>
      <div style={Center}>
        <br />
        {data}
      </div>
      <CarList cars={loadedCars} />
    </section>
  );
}

export default CarSection;
