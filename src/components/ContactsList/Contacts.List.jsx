import s from './ContactsList.module.css';

const ContactsList = ({contacts}) => {
  return (
    <ul className={s.list}>
      {contacts.map(contact => {
        return (
          <li
            key={contact.id}
            className={s.item}>
            {contact.name}: {contact.number}
          </li>
        )
      })}
    </ul>
  )
}

export default ContactsList;