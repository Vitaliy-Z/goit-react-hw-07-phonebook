import { useDispatch } from "react-redux";
import { filterChange } from "redux/contacts/contactsActions";

function Filter() {
  const dispatch = useDispatch();

  return (
    <label className="label">
      Find contacts by name
      <input
        className="input"
        name="filter"
        type="text"
        onChange={(e) => dispatch(filterChange(e.currentTarget.value))}
        autoComplete="off"
      ></input>
    </label>
  );
}

export default Filter;
