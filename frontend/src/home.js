import {BrowserRouter as Router ,Link,Route,Routes} from 'react-router-dom';
import Srii from './Sign_Up/signup';
import DataBaseView from './Sign_Up/getform';
import UpdateForm from './Sign_Up/updatesignup';
import "../src/home.css";
function Intro() {
    return (  
        <Router>
          <div id="nav-link-section" class="nav-section">
      <ul class="nav">
  <li class="nav-item">
    <Link to="/Srii" class="nav-link active">HOME</Link>
  </li>
  <li class="nav-item">
    <Link to="/DataBaseView" class="nav-link">VIEW</Link>
  </li>
   <li class="nav-item">
  <Link to="/UpdateForm" class="nav-link" >UPDATE</Link>
  </li> 
  
</ul>
</div>
<Routes>
  <Route path="/Srii" element={<Srii/>}/>
  <Route path="/DataBaseView" element={<DataBaseView/>}/>
  <Route path="/UpdateForm" element={<UpdateForm/>}/>
  
  
</Routes>
    </Router>
    );
}

export default Intro;