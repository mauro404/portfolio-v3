import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Projects from './components/Projects';
import Experience from './components/Experience';

function App() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y lg:snap-mandatory overflow-scroll overflow-x-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </div>
  );
}

export default App;
