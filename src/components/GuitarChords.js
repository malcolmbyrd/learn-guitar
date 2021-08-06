import React, {useState} from "react";
import UberChordService from "../services/uberChord";

const GuitarChords = () => {
  const [chords, setChords] = useState({})

  const getChords = (input) => {
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
          Chords
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
              <div className="chord-table-container">
                <table className="chord-table">
                  <tr>
                    <td>Chord Name</td>
                    <td>{chord.chordName}</td>
                  </tr>
                  <tr>
                    <td>Fingering</td>
                    <td>{chord.fingering}</td>
                  </tr>
                  <tr>
                    <td>Strings</td>
                    <td>{chord.strings}</td>
                  </tr>
                  <tr>
                    <td>Tones</td>
                    <td>{chord.tones}</td>
                  </tr>
                </table>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default GuitarChords
