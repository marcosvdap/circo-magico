import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Espetaculos from './pages/Espetaculos';
import Numeros from './pages/Numeros';
import Servicos from './pages/Servicos';
import QuemSomos from './pages/QuemSomos';
import Contato from './pages/Contato';

export default function App() {
  return (
    <HashRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/espetaculos" element={<Espetaculos />} />
          <Route path="/numeros" element={<Numeros />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}
