import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router';
import AnotherDev from './components/AnotherData';
import Blogs from './components/Blogs';
import NotFoundData from './components/NotFoundData';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar />}></Route>
        <Route path='/blogs' element={<AnotherDev />}>
          <Route path=":number" element={<Blogs />}></Route> 
        </Route>
        <Route path='*' element={<NotFoundData />}></Route>
      </Routes>
    </div>
  );
}

export default App;
