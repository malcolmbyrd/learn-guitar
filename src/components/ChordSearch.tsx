import React, {VFC} from "react";

const ChordSearch: VFC<{ handleChange: Function, searchValue: string }> = ({handleChange, searchValue}) => {

  return (
    <input
      type="text"
      className="guitar-input"
      onChange={e => handleChange(e.target.value)}
      name="chord-input"
      value={searchValue}
      placeholder="Find Chords"
    />
  )
}

export default ChordSearch
