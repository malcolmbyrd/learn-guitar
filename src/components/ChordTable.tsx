import {useState, VFC} from "react";
import ChordModal from "./modals/ChordModal";

const ChordTable:
  VFC<{
    chord: {
      chordName: string,
      fingering: string,
      strings: string,
      tones: string
    }
  }> = ({chord}) => {

    const [chordModalOpen, setChordModalOpen] = useState(false);

return (
  <>
    <div className="chord-table-container" onClick={() => setChordModalOpen(true)}>
      <table className="chord-table">
        <tbody>
        <tr>
          <td>Chord Name</td>
          <td>
            {chord.chordName
              .replace(',,', '')
              .replace(',', '')
              .replace(',', '')
              .replace(',', '')}
          </td>
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
        </tbody>
      </table>
    </div>
    {chordModalOpen && (
      <ChordModal setChordModalOpen={setChordModalOpen} />
    )}
  </>
)}

export default ChordTable
