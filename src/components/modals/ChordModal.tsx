import {VFC} from "react";
import {Content, Header, Modal} from "./Modal";

const ChordModal: VFC<{ setChordModalOpen: any }> = ({ setChordModalOpen }) => {
  
  return (
    <Modal classname={'chord-modal'} >
      <>
        <Header title={'Chord Details'} onClick={() => setChordModalOpen(false)} />
        <Content className={'chord-modal'}>
          <div>
            Chord Content
          </div>
        </Content>
      </>
    </Modal>
  )
}

export default ChordModal;
