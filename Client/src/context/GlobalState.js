import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
// import { axios } from "axios";
import axios from "axios";
// initial state

const initialState = {
  transcations: [],
  error: null,
  loading: true
};

// create context
export const GlobalContext = createContext(initialState);

// provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  async function getTranscations() {
    try {
      const res = await axios.get("/api/v1/transcations");
      dispatch({
        type: "GET_TRANSCATIONS",
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: "TRANSCATION_ERROR",
        payload: err.response.data.error
      });
    }
  }

  async function deleteTranscation(id) {
    try {
      await axios.delete(`/api/v1/transcations/${id}`);
      dispatch({
        type: "DELETE_TRANSCATION",
        payload: id
      });
    } catch (err) {
      dispatch({
        type: "TRANSCATION_ERROR",
        payload: err.response.data.error
      });
    }
  }
  async function addTranscation(transcation) {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      const res = await axios.post("/api/v1/transcations", transcation, config);
      dispatch({
        type: "ADD_TRANSCATION",
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: "TRANSCATION_ERROR",
        payload: err.response.data.error
      });
    }
  }
  return (
    <GlobalContext.Provider
      value={{
        transcations: state.transcations,
        getTranscations,
        error: state.error,
        loading: state.loading,
        deleteTranscation,
        addTranscation
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
