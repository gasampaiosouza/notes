import style from './modal.module.scss';
import Box from './Box';

type modalType = {
  handleClose?: any;
  show?: boolean;
  changeState?: any;
};

const Modal = ({ handleClose, show, changeState }: modalType) => {
  const showHideClassName = show ? 'display-block' : 'display-none';

  return (
    <div className={`modal ${style[showHideClassName]}`}>
      <div className={`${style['modal--overlay']}`} onClick={handleClose}></div>

      <Box handleClose={handleClose} changeState={changeState} />
    </div>
  );
};

export default Modal;
