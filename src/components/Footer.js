import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerStyle = {
    backgroundColor: "#4a2e29",
    padding: "1rem",
    textAlign: "center",
    color: "#fff",
    fontSize: "14px",
    height: "60px", // 固定高度
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    };


  const highlightStyle = {
    color: "#4fc3f7",
    fontWeight: "bold",
  };

  return (
    <div style={footerStyle}>
      <p style={{ margin: 0 }}>
        Copyright © {currentYear}{" "}
        <span style={highlightStyle}>Sanrio 心理測驗</span> All Rights Reserved. Designed by{" "}
        <span style={highlightStyle}>ZHANG,TING-ZHEN</span>.
      </p>
    </div>
  );
};

export default Footer;
