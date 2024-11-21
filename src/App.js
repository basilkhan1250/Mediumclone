import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router';
import AnotherDev from './components/AnotherData';
import Blogs from './components/Blogs';
import NotFoundData from './components/NotFoundData';
import DataProvider from './components/DataComponent';

function App() {
  // <Blogs />

  return (
    // <div>
    <DataProvider>
      <Routes>
        <Route path='/' element={<Navbar />}></Route>
        <Route path='/blogs' element={<AnotherDev />}>
          <Route path=":number" element={<Blogs />}></Route>
        </Route>
        <Route path='*' element={<NotFoundData />}></Route>
      </Routes>
    </DataProvider>
    // </div>
  );
}

export default App;
