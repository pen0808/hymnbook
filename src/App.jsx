import Hymn1 from "./hymns/Hymn1";
import Hymn2 from "./hymns/Hymn2";
import Hymn3 from "./hymns/Hymn3";
import Hymn4 from "./hymns/Hymn4";
import Index from "./hymns/Index";
import { Routes, Route} from 'react-router-dom'

function App() {
  

  return (
      <div>
             
        <Routes>
          <Route path="/" element = {<Index/>} />
          <Route path = '/Abba-Father-send-Your-Spirit' element={<Hymn1/>} />
          <Route path="/Abide-with-me" element={<Hymn2 />}/>
          <Route path="/Accept-Almighty-Father" element={<Hymn3 />}/>
          <Route path="/Adeste-fideles" element={<Hymn4 />}/>
        </Routes>
      </div>
      
    
  )
}

export default App
