import s from './Modal.module.css';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({children}) => {
  return (createPortal(<div className={s.backdrop}>
      <div className={s.modal}>{children}</div>
    </div>, modalRoot)
  )
}


export default Modal;