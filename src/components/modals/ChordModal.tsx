import {VFC} from "react";
import {Content, Header, Modal} from "./Modal";

const ChordModal: VFC<{
  setChordModalOpen: any, chord: {
    chordName: string,
    fingering: string,
    strings: string,
    tones: string
  }
}> = ({setChordModalOpen, chord}) => {

  const chordName = chord.chordName
    .replace(',,', '')
    .replace(',', '')
    .replace(',', '');

  const strings = chord.strings.split(' ');
  const fingers = chord.fingering.split(' ');

  const getVerbalHelp = (finger: string, stringPosition: string, string: string) => {
    switch (finger) {
      case 'x':
        return '';
      case '1':
        return <div>Pointer Finger, Fret {stringPosition} on the {string} string<br /></div>;
      case '2':
        return <div>Middle Finger, Fret {stringPosition} on the {string} string<br /></div>;
      case '3':
        return <div>Ring Finger, Fret {stringPosition} on the {string} string<br /></div>;
      case '4':
        return <div>Pinky Finger, Fret {stringPosition} on the {string} string<br /></div>;
    }
  }

  return (
    <Modal classname={'chord-modal'} closeFunction={() => setChordModalOpen(false)}>
      <>
        <Header title={`Chord Details - ${chordName}`} onClick={() => setChordModalOpen(false)}/>
        <Content className={'chord-modal'}>
          <div>
            <div className="chord-tab">
              {strings && (
                <><span>
                  e|--------{strings[5]}---------|<br/>

                  B|--------{strings[4]}---------|<br/>

                  G|--------{strings[3]}---------|<br/>

                  D|--------{strings[2]}---------|<br/>

                  A|--------{strings[1]}---------|<br/>

                  E|--------{strings[0]}---------|<br/>
                </span><br/></>
              )}
              {strings && (
                <div className="verbal-tab-instructions">
                  {getVerbalHelp(fingers[0], strings[0], 'low E')}
                  {getVerbalHelp(fingers[1], strings[1], 'A')}
                  {getVerbalHelp(fingers[2], strings[2], 'D')}
                  {getVerbalHelp(fingers[3], strings[3], 'G')}
                  {getVerbalHelp(fingers[4], strings[4], 'B')}
                  {getVerbalHelp(fingers[5], strings[5], 'high e')}
                </div>
              )}
            </div>
          </div>
        </Content>
      </>
    </Modal>
  )
}

export default ChordModal;
