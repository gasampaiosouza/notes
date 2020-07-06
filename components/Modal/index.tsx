import style from './modal.module.scss';
import Box from './Box';

type modalType = {
  handleClose?: any;
  show?: boolean;
  changeState?: any;
  state?: any;
};

const Modal = ({ handleClose, show, changeState, state }: modalType) => {
  const showHideClassName = show ? 'display-block' : 'display-none';

  return (
    <div className={`modal ${style[showHideClassName]}`}>
      <div className={`${style['modal--overlay']}`} onClick={handleClose}></div>

      <Box closeModal={handleClose} changeState={changeState} state={state} />
    </div>
  );
};

export default Modal;
