import React from "react";
import { useSelector } from "react-redux";

function Header(props) {
  const selector = useSelector((state) => state.cart.cartItems);

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "10px",
        height: "40px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>Logo</div>
      <div>
        Cart{" "}
        <span style={{ color: "crimson", background: "#fff", padding: "10px" }}>
          {selector.length}
        </span>
      </div>
    </div>
  );
}

export default Header;
