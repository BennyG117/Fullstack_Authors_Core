// import logo from './logo.svg';
// import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Dashboard from "./views/Dashboard";
import Edit from "./views/Edit";
import New from "./views/New";
import Error from "./views/Error";



function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      {/* <Link to={"/authors/new"}>Add an Author</Link> */}

      <Routes>

        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/authors" element={<Dashboard/>}></Route>
        <Route path="/authors/:id/edit" element={<Edit/>}></Route>
        <Route path="/authors/new" element={<New/>}></Route>
        <Route path="*" element={<Error/>}></Route>


      </Routes>

    </div>
  );
}

export default App;
