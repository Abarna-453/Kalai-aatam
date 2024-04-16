
import React, { useEffect } from "react";

export const CommunityForums = () => {
  useEffect(() => {
    // Redirect to http://localhost:3000/
    window.open("http://localhost:3000");
    window.location.href = "http://localhost:5173/";
  }, []); // Empty dependency array ensures useEffect runs only once after component mounts

  return <div>{/* Your Navbar content goes here */}</div>;
};


