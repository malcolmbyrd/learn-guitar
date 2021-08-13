import React, {useContext, VFC} from "react";
import {Context} from "../store";
import {setPage} from "../helper/helper";
import {Button} from "../stories/Button";

const GuitarChords: VFC = () => {
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, dispatch] = useContext(Context)

  return (
    <>
      <h1>Learn Guitar Chords</h1>
      <Button size="large" label='Find Similar Chords' onClick={() => setPage('FindSimilar', dispatch)} />
      <Button size="large" label='Find a Specific Chord' onClick={() => setPage('FindChord', dispatch)} />
    </>
  )
}

export default GuitarChords
