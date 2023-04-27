import React from "react";
import "./First.css";
function FirstPage() {
  return (
    <div className="inputContainer">
      <div>
        <input type="text" placeholder="name" />
      </div>
      <div>
        <input type="mobile" placeholder="phone" />
      </div>
      <div>
        <input type="email" placeholder="email" />
      </div>
      <div>
        <input type="password" placeholder="password" />
      </div>
    </div>
  );
}

export default FirstPage;
