import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons'; 

const Header = () => {
  return (
    <div className="headerContainer">
      <header>
        <h1>  S p r o u t </h1>        
        <div className="iconContainer">
        <FontAwesomeIcon icon={faLeaf}/>
        <FontAwesomeIcon icon={faLeaf}/>
        <FontAwesomeIcon icon={faLeaf}/> 
        <FontAwesomeIcon icon={faLeaf}/>
        <FontAwesomeIcon icon={faLeaf}/>
        <FontAwesomeIcon icon={faLeaf}/>       
      </div>   
      </header>
    </div>
  )
}
export default Header;