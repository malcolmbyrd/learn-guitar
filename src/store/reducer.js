import React from "react";

const Reducer = (state, action) => {
  switch (action.type) {
    case "STORE_DATA":
      return {
        ...state,
        data: action.payload
      };
  }
}

export default Reducer;
