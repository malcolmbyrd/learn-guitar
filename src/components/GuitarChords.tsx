import React, {VFC, useState, useEffect, useContext} from "react"
import {Context} from "../store"
import UberChordService from "../services/uberChord"
import ChordTable from "./ChordTable"

const GuitarChords: VFC = () => {
  // @ts-ignore
  const [state, dispatch] = useContext(Context)

  const [chords, setChords] = useState([])
  const [searchValue, setSearchValue] = useState('a');

  const handleChange = (input: string) => {
    setSearchValue(input);
  }

  useEffect(() => {
    UberChordService.fetchChordsLike(searchValue.toUpperCase())
      .then(r => {
        setChords(r);
        dispatch({type: 'SET_CHORDS', payload: r})
      })
  }, [dispatch, searchValue])

  return (
    <>
      {state.data}
      <h1>Guitar Chords</h1>
      <div>
        <input
          type="text"
          className="guitar-input"
          onChange={e => handleChange(e.target.value)}
          name="chord-input"
          value={searchValue}
          placeholder="Find Chords Like"
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
