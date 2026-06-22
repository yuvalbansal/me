import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Books from './pages/Books';
import Music from './pages/Music';
import Thoughts from './pages/Thoughts';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/books" element={<Books />} />

        <Route path="/music" element={<Music />} />

        <Route path="/thoughts" element={<Thoughts />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
