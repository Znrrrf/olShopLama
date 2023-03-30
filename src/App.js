import './App.css';
import MainNav from './component/MainNav';
import AddName from './component/AddName';
import { Route, Routes } from 'react-router-dom';
import AddToCart from './component/AddToCart';
// import NameAdded from './component/addName/NameAdded';
// import NameList from './component/addName/NameList';

function App() {
  return (
    <div className="container">
      <MainNav />
      <Routes>
        <Route exact path='/name/*' element={<AddName />} />
        <Route exact path='/addToCart/*' element={<AddToCart />} />
      </Routes>
      {/* <Routes>
        <Route exact path="/" element={<NameList />} />
        <Route path="/nameAdded" element={<NameAdded />} />
      </Routes> */}
      {/* <AddName /> */}
    </div>
  );
}

export default App;
