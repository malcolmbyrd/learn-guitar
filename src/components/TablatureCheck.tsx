import React, {VFC} from "react";

const TablatureCheck: VFC<{ viewAsTabs: boolean, setViewAsTabs: Function }> = ({viewAsTabs, setViewAsTabs}) => {

  return (
    <div>
      <label htmlFor="TablatureCheck">
        View as tabs?
        <input
          id="TablatureCheck"
          name="tablatureCheck"
          checked={viewAsTabs}
          onChange={() => setViewAsTabs(!viewAsTabs)}
          type="checkbox"
        />
      </label>
    </div>
  )
}

export default TablatureCheck
