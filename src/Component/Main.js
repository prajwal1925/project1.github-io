import './Main.css';
// import LifeCycle from './LifeCycle';
import API from './API';
import Timer from './Timer';
import Clock from './Clock';
import Memo from './Memo';
import IncDec from './IncDec';
import Create from '../CRUD/Create';
import Home from '../CRUD/Home';

function App() {
    return (
     
      <div>
        <Home/>
       <Create/>
       
      </div>
    );
  }
  
  export default App;