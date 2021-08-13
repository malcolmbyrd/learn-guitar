import {Breadcrumb, BreadcrumbHome, BreadcrumbItem, SecondaryNavigation} from "@wfp/ui";
import {setPage} from "../helper/helper";
import React, {useContext} from "react";
import {Context} from "../store";

const SecondaryNav = () => {
  // @ts-ignore
  const [state, dispatch] = useContext(Context)

  return (
    <SecondaryNavigation>
      <Breadcrumb>
        {(state.page === 'Home' || 'LearnChords') && (
        <BreadcrumbItem>
          <a href="/#" onClick={() => setPage('Home', dispatch)}>
            <BreadcrumbHome />
          </a>
        </BreadcrumbItem>
        )}
        {(state.page === 'LearnChords' || 'FindSimilar') && (
          <BreadcrumbItem href="#" onClick={() => setPage('LearnChords', dispatch)}>
            <a href="/#">Learn Chords</a>
          </BreadcrumbItem>
        )}
        {(state.page === 'FindSimilar') && (
          <BreadcrumbItem disableLink>
            <span>Find Similar Chords</span>
          </BreadcrumbItem>
        )}
        {(state.page === 'FindChord') && (
          <BreadcrumbItem disableLink>
            <span>Find Chord</span>
          </BreadcrumbItem>
        )}
      </Breadcrumb>
    </SecondaryNavigation>
  )
}

export default SecondaryNav
