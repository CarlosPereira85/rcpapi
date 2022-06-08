import { useState, useRef } from 'react';
import useFetch from '../hooks/useFetch';
import MyContext from './MyContext';
const MyProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState('');
  //const [search, setSearch] = useState('pasta');
  const search = useRef('pasta');
  const API_ID = process.env.REACT_APP_API_ID;
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [url, setUrl] = useState(
    `https://api.edamam.com/api/recipes/v2?type=public&q=${search.current}&app_id=${API_ID}&app_key=${API_KEY}`
  );
  const inputRef = useRef();
  let URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${search.current}&app_id=${API_ID}&app_key=${API_KEY}`;
  const data = useFetch(url);
  const changeHandler = (e) => {
    setSearchInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    search.current = searchInput;
    setSearchInput('');
    console.log(search.current);
    URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${search.current}&app_id=${API_ID}&app_key=${API_KEY}`;
    setUrl(URL);
    console.log(URL);
    inputRef.current.focus();
  };
  const handleNext = () => {
    setUrl(data.next);
  };
  return (
    <MyContext.Provider
      value={{
        data,
        searchInput,
        inputRef,
        changeHandler,
        submitHandler,
        handleNext,
      }}>
      {children}
    </MyContext.Provider>
  );
};
export default MyProvider;
