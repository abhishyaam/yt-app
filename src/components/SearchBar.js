import React,{useState} from 'react';

const SearchBar = ({onFormSubmit}) => {
  const[term,setTerm] = useState('');

  const onInputChange = (e) => {
    setTerm(e.target.value)
  }

  const searchVideos = (e) => {
    e.preventDefault();
    onFormSubmit(term);
  }
  return(
    <div className ="search-bar ui segment">
      <form className="ui form" onSubmit={searchVideos}>
        <div className="field">
          <label>Search for a Video</label>
          <input type="text" value={term} onChange={onInputChange}/>
        </div>
      </form>
    </div>
  )
}

export default SearchBar;
