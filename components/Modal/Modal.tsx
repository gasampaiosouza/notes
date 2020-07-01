import style from './modal.module.scss';

type modalType = {
  handleClose: any;
  show: boolean;
};

const Modal = ({ handleClose, show }: modalType) => {
  const showHideClassName = show ? 'display-block' : 'display-none';

  return (
    <div className={`modal ${style[showHideClassName]}`}>
      <div className={`${style['modal--overlay']}`} onClick={handleClose}></div>

      <div className={`${style['modal--box']}`}>
        <h1>hello world</h1>
        <button onClick={handleClose}>close</button>
      </div>
    </div>
  );
};

export default Modal;
