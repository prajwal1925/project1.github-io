import './Crud.css';
import Home from './Home';
import Create from './Create';
import Read from './Read';
import Update from './Update';
import Admin from "./Admin"
import { Route, Routes } from 'react-router-dom';

function CrudMain() {
    return (
        <div>
            
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/create" element={<Create/>} />
                <Route path="/read" element={<Read/>} />
                <Route path="/update" element={<Update/>} />
                <Route path="/user" element={<Admin/>} />
            </Routes>
            
        </div>
    );
}

export default CrudMain;
