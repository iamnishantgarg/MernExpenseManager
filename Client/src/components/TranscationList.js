import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transcation } from "./Transcation";
export const TranscationList = () => {
  const { transcations, getTranscations } = useContext(GlobalContext);
  useEffect(() => {
    getTranscations();
  }, []);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transcations.map(t => (
          <Transcation key={t.id} t={t} />
        ))}
      </ul>
    </>
  );
};
