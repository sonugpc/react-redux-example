import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeCard } from "./utils/store";
import Header from "./Header";
import RightSide from "./RightSide";

const items = [
  { id: 1, fruit: "Apple" },
  { id: 2, fruit: "Banana" },
  { id: 3, fruit: "Orange" },
  // Add more objects as needed
];

function App() {
  const [count, setCount] = useState(0);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const addItem = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div>
      <Header />
      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ width: "70%" }}>
          {items.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #eee",
                textAlign: "left",
                height: "70px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px",
                margin: "10px",
              }}
            >
              <span>{item.fruit}</span>
              <button onClick={() => addItem(item)}>Add</button>
            </div>
          ))}
        </div>
        <div style={{ width: "30%", padding: "10px" }}>
          <RightSide />
        </div>
      </div>
    </div>
  );
}

export default App;
