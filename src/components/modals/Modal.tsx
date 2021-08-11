import React, {ReactElement, VFC} from 'react';
import Draggable from 'react-draggable';

export const Header: VFC<{ title: string, onClick: any }> = ({title}) => {

  return (
    <div className="modal-header">
      <div className="modal-title">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export const Content: VFC<{ children: ReactElement, className: string }> = ({children, className}) => (
  <div className={`modal-content ${className}`}>
    {children}
  </div>
);

export const Footer: VFC<{ onClick: any, onSubmit: any }> = ({onClick, onSubmit}) => {
  const cancel = 'Cancel';
  const submit = 'Submit';

  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="modal-footer">
      <button
        type="button"
        className="btn btn-cancel"
        onClick={() => handleOnClick()}
      >
        {cancel}
      </button>

      {onSubmit
      && (
        <button
          type='button'
          className="btn btn-primary ml-8"
          onClick={onSubmit}
        >
          {submit}
        </button>
      )}
    </div>
  );
};

export const Modal: VFC<{ classname: string, children: ReactElement, closeFunction: Function }> =
  ({classname, children, closeFunction}) => (
  <div className={`modal modal-outer ${classname}`} onClick={() => closeFunction()}>
    <Draggable>
      <div className={`modal modal-inner ${classname}`} onClick={e => e.preventDefault()}>
        {children}
      </div>
    </Draggable>
  </div>
);
