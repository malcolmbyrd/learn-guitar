import { MainNavigation, MainNavigationItem } from "@wfp/ui";
import {useContext} from "react";
import {Context} from "../store";
import {setPage} from "../helper/helper";

const Navigation = () => {
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, dispatch] = useContext(Context)

  return (
    <MainNavigation>
      <MainNavigationItem>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#" onClick={() => setPage('Home', dispatch)}>
          Home
        </a>
      </MainNavigationItem>
      <MainNavigationItem>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#" onClick={() => setPage('LearnChords', dispatch)}>
          Learn Chords
        </a>
      </MainNavigationItem>
    </MainNavigation>
  )
}

export default Navigation;
