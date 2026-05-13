import React from "react";

const NotFound = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "80px", marginBottom: "10px" }}>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>

      <a href="/" style={{ marginTop: "20px", color: "#067804" }}>
        Go Back Home
      </a>
    </div>
  );
};

export default NotFound;
