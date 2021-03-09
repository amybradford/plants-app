import icon from './assets/leaf-icon.png';

const Header = () => {
  return (
    <div className="headerContainer">
      <header>
        <h1>  S p r o u t </h1>
        <h2 className="firstH2">Find an indoor plant for your apartment</h2>
        <div className="iconContainer">
          <img src={icon} alt="leaf stencil"/>   
          <img src={icon} alt="leaf stencil"/>  
          <img src={icon} alt="leaf stencil"/>  
          <img src={icon} alt="leaf stencil"/> 
        </div>    
      </header>
    </div>
  )
}
export default Header;