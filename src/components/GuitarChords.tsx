import React, {VFC, useState, useEffect, useContext} from "react";
import {Context} from "../store";
import UberChordService from "../services/uberChord";
import ChordTable from "./ChordTable";
import TablatureCheck from "./TablatureCheck";
import ChordSearch from "./ChordSearch";

const GuitarChords: VFC = () => {
  // @ts-ignore
  const [state, dispatch] = useContext(Context)

  const [chords, setChords] = useState([])
  const [viewAsTabs, setViewAsTabs] = useState(false)
  const [searchValue, setSearchValue] = useState('a')
  const instructions = useState('Enter uppercase for A, B, C chords etc. ' +
    'Bb is B flat. Bdim is B diminished.')

  const handleChange = (input: string) => {
    setSearchValue(input);
  }

  useEffect(() => {
    UberChordService.fetchChordsLike(searchValue)
      .then(r => {
        setChords(r);
        console.log(r);
        dispatch({type: 'SET_CHORDS', payload: r})
      })
  }, [dispatch, searchValue])

  return (
    <>
      {state.data}
      <h1>Guitar Chords</h1>
      <div className="chord-instructions">{instructions}</div>
      <div>
        <ChordSearch handleChange={handleChange} searchValue={searchValue} />
        <TablatureCheck viewAsTabs={viewAsTabs} setViewAsTabs={setViewAsTabs} />
        <div className="chords-container flex-container">
          {chords.length > 0 && chords.map((chord, i) => {
            return (
              <ChordTable chord={chord} key={i} viewAsTabs={viewAsTabs} />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default GuitarChords
