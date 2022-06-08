
import MyContext from '../context/MyContext.js'
import {useContext} from 'react'

const Footer = () => {
    const {data, handleNext} = useContext(MyContext)
  return (
      <footer>
    {data.next !== undefined && (
        <button className='next' onClick={handleNext}> Next Page</button>
      )}
      </footer>
   
  )
}
export default Footer