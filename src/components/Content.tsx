import React, {useContext, VFC} from "react";
import {Context} from '../store';
import GuitarChords from "./GuitarChords";
import Navigation from './Navigation';
import {setPage} from '../helper/helper';
import {Button} from "../stories/Button";

const Content: VFC = () => {
  // @ts-ignore
  const [state, dispatch] = useContext(Context)
  const welcome = 'Welcome. Choose an action to get started.';

  return (
    <>
      <Navigation/>
      <main>
        {(!state.page || state.page === 'Home') && (
          <>
            <div className="homepage-actions">
              <div className="welcome"><h1>{welcome}</h1></div>
              <Button size="large" label='Learn Chords' onClick={() => setPage('LearnChords', dispatch)} />
            </div>
          </>
        )}

        {(state.page && state.page === 'LearnChords') && (
          <>
            <GuitarChords/>
          </>
        )}
      </main>
    </>
  )
}

export default Content
