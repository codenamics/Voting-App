import React from "react";
import Polls from "../components/Polls";
import ErrorMessage from "../components/ErrorMessage";
import Poll from "../components/Poll";

export default function Home(props) {
  return (
    <div>
      <ErrorMessage />
      <Polls {...props} />
    </div>
  );
}
