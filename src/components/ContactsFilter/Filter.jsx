import s from './Filter.module.css';

const Filter = ({ value, onChange }) => {
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

export default Filter;