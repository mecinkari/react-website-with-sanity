import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Gallery from './Gallery'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
