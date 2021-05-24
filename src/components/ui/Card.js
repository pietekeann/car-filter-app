function Card(props) {
  const cardStyle = {
    backgroundColor: "white",
    borderRadius: "6px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
  };

  return <div style={cardStyle}>{props.children}</div>;
}

export default Card;
