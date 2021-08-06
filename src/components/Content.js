import { BrowserRouter } from "react-router-dom";
import React from "react";
import GuitarChords from "./GuitarChords";

const Content = () => (
  <>
    <BrowserRouter>
      <main>
        <GuitarChords />
      </main>
    </BrowserRouter>
  </>
)

export default Content
