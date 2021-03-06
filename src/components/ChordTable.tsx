import {useState, VFC} from "react";
import ChordModal from "./ChordModal";
import ChordTab from "./ChordTab";
import '../styles/LearnGuitar.scss';
import '../styles/modal.scss';

const ChordTable:
  VFC<{
    chord: {
      chordName: string,
      fingering: string,
      strings: string,
      tones: string
    }, viewAsTabs: boolean
  }> = ({chord, viewAsTabs}) => {

  const [chordModalOpen, setChordModalOpen] = useState(false);

  return (
    <>
      <div className="chord-table-container" onClick={() => setChordModalOpen(true)}>
        {!viewAsTabs ? (
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
              </tbody>
            </table>
          )
          : <ChordTab chord={chord} />
        }
      </div>
      {chordModalOpen && (
        <ChordModal setChordModalOpen={setChordModalOpen} chord={chord}/>
      )}
    </>
  )
}

export default ChordTable
