import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';


function App() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y lg:snap-mandatory overflow-scroll overflow-x-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
