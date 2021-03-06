import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './Component/404/NotFound';
import About from './Component/About/About';
import Blog from './Component/Blog/Blog';
import Dashboard from './Component/DashBoard/Dashboard';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Review from './Component/Review/Review';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/review' element={<Review />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
