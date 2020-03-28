import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transcation = ({ t }) => {
  const sign = t.amount < 0 ? "-" : "+";

  const { deleteTranscation } = useContext(GlobalContext);
  return (
    <li className={t.amount < 0 ? "minus" : "plus"}>
      {t.text}{" "}
      <span>
        {sign}
        {Math.abs(t.amount)}$
      </span>
      <button className="delete-btn" onClick={() => deleteTranscation(t.id)}>
        x
      </button>
    </li>
  );
};
