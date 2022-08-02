import React from "react";
import { useParams } from "react-router-dom";

const Extra = ({ page }) => {
  const { userId } = useParams();
  
  return (
    <div className="extra">
      <h1>
        {page} page for user <span style={{ color: "red" }}>{userId}</span>.
      </h1>
    </div>
  );
};

export default Extra;
