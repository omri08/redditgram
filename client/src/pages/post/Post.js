import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Post() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  return (
    <div>
      <h1>{id}</h1>
      {loading && <li>Loading</li>}
    </div>
  );
}

export default Post;
