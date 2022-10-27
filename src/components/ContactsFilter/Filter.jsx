import s from './Filter.module.css';
import PropTypes from 'prop-types';

const ContactFilter = ({ value, onChange }) => {
  return (
    <label>
      Find contact by name
      <input
        autoComplete="off"
        className={s.input}
        type='text'
        name='filer'
        value={value}
        onChange={onChange}
      />
    </label>
  )
}

export default ContactFilter;

ContactFilter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}