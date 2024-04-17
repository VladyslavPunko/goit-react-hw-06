import css from "./SearchBox.module.css";

import { useSelector, useDispatch } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const filters = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const onChangeFilter = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <label className={css.label}>
      Finde contacts by name
      <input
        placeholder="Search..."
        value={filters}
        onChange={onChangeFilter}
      />
    </label>
  );
};

export default SearchBox;
