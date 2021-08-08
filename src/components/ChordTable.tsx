import {FC} from "react";

const ChordTable:
    FC<{ chord: {
        chordName: string,
        fingering: string,
        strings: string,
        tones: string } }> = ({ chord }) => (
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

export default ChordTable
