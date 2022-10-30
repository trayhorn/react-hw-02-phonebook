import s from './IconButton.module.css';

const IconButton = ({children}) => {
  return (
    <button className={s.deleteButton}>{children}</button>
  )
}

export default IconButton;