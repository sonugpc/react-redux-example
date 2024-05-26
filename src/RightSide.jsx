import { useDispatch, useSelector } from "react-redux";
import { removeCard } from "./utils/store";

function RightSide(props) {
  const selector = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const onRemove = (item) => {
    dispatch(removeCard(item));
  };
  return (
    <div
      style={{
        backdropFilter: "blur(5px)",
        backgroundColor: "#1f1ff1",
        height: "400px",
        width: "100%",
      }}
    >
      <h1>Cart</h1>

      {selector.map((item, index) => (
        <div
          key={index}
          style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {item.fruit}
          <button onClick={() => onRemove(item)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default RightSide;
