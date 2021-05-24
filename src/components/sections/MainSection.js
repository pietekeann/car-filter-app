import React, { Fragment } from "react";
import classes from "./MainSection.module.css";
import DropDown from "../ui/DropDown";
import ContinuousSlider from "../ui/ContinuousSlider";
import CarSection from "./CarSection";

function MainSection(props) {
  const [type, setType] = React.useState("Car");
  const [year, setYear] = React.useState(2021);
  const [make, setMake] = React.useState("Mercedes");
  const [formMake, setFormMake] = React.useState("Mercedes");
  const carTypes = [
    "Motorcycle",
    "Bus",
    "Multipurpose Passenger Vehicle",
    "Low Speed Vehicle",
    "Trailer",
    "Car",
    "Truck",
  ];

  const handleType = (e) => {
    setType(e.target.value);
  };

  const handleMake = (e) => {
    setFormMake(e.target.value);
    if (e.target.value.length > 0) {
        setMake(e.target.value);
    }
  };

  const handleYear = (e) => {
    setYear(e);
  };

  return (
    <Fragment>
    {/* Filter Section */}
      <section className={classes.background}>
        <h1 className={classes.h1}>Filter Car Types</h1>
        <div className={classes.flex}>
          <div className={classes.flexitem}>
            <h3>Car Make</h3>
            <input type="text" onChange={handleMake} value={formMake} />
          </div>
          <div className={classes.flexitem}>
            <h3>Car Type</h3>
            <DropDown data={carTypes} handler={handleType} />
          </div>
          <div className={classes.slider}>
            <h3>Year</h3>
            <ContinuousSlider handler={handleYear} />
          </div>
        </div>
      </section>
    {/* Results Section */}
      <CarSection make={make} type={type} year={year} />
    </Fragment>
  );
}

export default MainSection;
