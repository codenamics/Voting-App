import React from "react";
import Polls from "../components/Polls";
import ErrorMessage from "../components/ErrorMessage";

const Home = props => {
  return (
    <div className="home flex">
      <ErrorMessage />
      <Polls {...props} />
    </div>
  );
};

export default Home;
