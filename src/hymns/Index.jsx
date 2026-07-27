import {Link} from 'react-router-dom';

function Index(){
  return(
    <section className="">
      
      <div className="title">
        <h3>Index</h3>
        <div className="outer-container">
              
          <div className="links">
            <Link to="Abba-Father-send-Your-Spirit">Abba Father send Your Spirit</Link>
            <Link to="Abide-with-me">Abide with me</Link>
            <Link to="Accept-Almighty-Father">Accept Almighty Father</Link>
            <Link to="Adeste-fideles">Adeste fideles</Link>
          </div>
       </div>
        
      </div>
    </section>
  )
}

export default Index;