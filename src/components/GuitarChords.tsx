import React, {VFC, useState, useEffect} from "react";
import UberChordService from "../services/uberChord";
import ChordTable from "./ChordTable";

const GuitarChords: VFC = () => {
  const [chords, setChords] = useState([])
  const [searchValue, setSearchValue] = useState('a');

  const getChords = (input: string) => {
    UberChordService.fetchChordsLike(input.toUpperCase())
      .then(r => {
        setChords(r);
      })
  }

  const handleChange = (input: string) => {
    setSearchValue(input);
    getChords(input);
  }

  useEffect(() => {
    getChords(searchValue);
  }, [])

  return (
    <>
      <h1>Guitar Chords</h1>
      <div>
        <input
          type="text"
          className="guitar-input"
          onChange={e => handleChange(e.target.value)}
          name="chord-input"
          value={searchValue}
          placeholder="Get chords similar to"
        />
        <div className="chords-container flex-container">
          {chords.length > 0 && chords.map((chord, i) => {
            return (
              <ChordTable chord={chord} key={i}/>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default GuitarChords
