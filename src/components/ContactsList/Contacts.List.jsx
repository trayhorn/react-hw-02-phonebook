import s from './ContactsList.module.css';
import PropTypes from 'prop-types';
import IconButton from '../IconButton/IconButton';
import { ReactComponent as DeleteIcon } from '../icons/cross.svg';

const ContactsList = ({ contacts, onDeleteContact }) => {

  return (
    <ul className={s.list}>
      {contacts.map(({id, name, number}) => {
        return (
          <li
            key={id}
            className={s.item}>
            {name}: {number}
            <IconButton>
              <DeleteIcon className={s.icon}
              onClick={() => onDeleteContact(id)}/>
            </IconButton>
          </li>
        )
      })}
    </ul>
  )
}

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDeleteContact: PropTypes.func
}