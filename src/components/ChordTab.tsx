import {VFC} from "react";

const ChordTab:VFC<{ chord: {chordName: string, strings: string} }> = ({ chord }) => {
  const strings = chord.strings.split(' ')

  return (
    <div className="chord-tab">
      <h5>
        {chord.chordName
        .replace(',,', '')
        .replace(',', '')
        .replace(',', '')
        .replace(',', '')}
      </h5>

      {strings && (
        <><span>
          e|--------{strings[5]}---------|<br/>

          B|--------{strings[4]}---------|<br/>

          G|--------{strings[3]}---------|<br/>

          D|--------{strings[2]}---------|<br/>

          A|--------{strings[1]}---------|<br/>

          E|--------{strings[0]}---------|<br/>
          </span></>
      )}
    </div>
  )
}

export default ChordTab
