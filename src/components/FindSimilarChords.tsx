import React, {useContext, useEffect, useState} from "react";
import UberChordService from "../services/uberChord";
import ChordSearch from "./ChordSearch";
import TablatureCheck from "./TablatureCheck";
import ChordTable from "./ChordTable";
import {Context} from "../store";

const FindSimilarChords = () => {
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, dispatch] = useContext(Context)

  const [chords, setChords] = useState([])
  const [viewAsTabs, setViewAsTabs] = useState(false)
  const [searchValue, setSearchValue] = useState('a')
  const instructions = useState('ex. A, Ab, Adim, Amaj7, dim, 9')

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
      <div className="chord-instructions">{instructions}</div>
      <div>
        <ChordSearch handleChange={handleChange} searchValue={searchValue}/>
        <TablatureCheck viewAsTabs={viewAsTabs} setViewAsTabs={setViewAsTabs}/>
        <div className="chords-container flex-container">
          {chords.length > 0 && chords.map((chord, i) => {
            return (
              <ChordTable chord={chord} key={i} viewAsTabs={viewAsTabs}/>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default FindSimilarChords
