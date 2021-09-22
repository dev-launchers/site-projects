import { Search, SearchBox } from "./StyledSearchBar";

function SearchBar({ onChange }) {
  return (
    <SearchBox>
      <Search onChange={(e) => onChange(e.target.value) }></Search>
    </SearchBox>
  );
}

export default SearchBar;
