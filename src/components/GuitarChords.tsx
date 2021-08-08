import React, {VFC, useState} from "react";
import UberChordService from "../services/uberChord";
import ChordTable from "./ChordTable";

const GuitarChords: VFC = () => {
  const [chords, setChords] = useState([])

  const getChords = (input: string) => {
    UberChordService.fetchChordsLike(input)
      .then(r => {
        setChords(r)
        console.log(r)
      })
  }

  return (
    <>
      <h1>Guitar Chords</h1>
      <div>
        <h2>
          Find Similar Chords
        </h2>
        <input
          type="text"
          onChange={e => getChords(e.target.value)}
          name="chord-input"
          placeholder="Get chords similar to"
        />
        <div className="chords-container flex-container">
          {chords.length > 0 && chords.map((chord, i) => {
            return (
              <ChordTable chord={chord} key={i} />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default GuitarChords
