import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router';
import AnotherDev from './components/AnotherData';
import Blogs from './components/Blogs';
import NotFoundData from './components/NotFoundData';
import DataProvider from './components/DataComponent';
import Home from './components/Home';

function App() {

  return (
    <div>
      <DataProvider >
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='/blogs' element={<AnotherDev />}>
            <Route path=":number" element={<Blogs />}></Route>
          </Route>
            <Route path='*' element={<NotFoundData />}></Route>
        </Routes>
      </DataProvider>
    </ div >
  );
}

export default App;
