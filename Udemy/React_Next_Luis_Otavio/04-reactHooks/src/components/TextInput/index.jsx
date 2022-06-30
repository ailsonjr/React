import './styles.css';

export const TextInput = ({ onChange, searchValue }) => (
  <input className='text-input'
    onChange={onChange}
    value={searchValue}
    type="search"
    placeholder='Type your search'
  />
);