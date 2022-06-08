import MyContext from "../context/MyContext";
import { useEffect, useContext } from "react";

const Form = () => {
  const { searchInput, inputRef, changeHandler, submitHandler } =
    useContext(MyContext);
   useEffect (()=>{
    inputRef.current.focus()
   },[inputRef])

  return (
    <form>
      <input
        type="text"
        placeholder="Search"
        ref={inputRef}
        value={searchInput}
        onChange={changeHandler}
      />
      <button onClick={submitHandler}>Search</button>
    </form>
  );
};
export default Form;
