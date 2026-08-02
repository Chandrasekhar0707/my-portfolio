import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import CursorGlow from './components/CursorGlow';
import Footer from './components/Footer';
import Home from './pages/Home';
import { useTheme } from './hooks/useTheme';
import { useLenis } from './hooks/useLenis';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [loading, setLoading] = useState(true);

  useLenis(); // buttery-smooth scrolling across the whole page

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader show={loading} />
      <CursorGlow />
      <ScrollProgress />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="relative z-10">
        <Home />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
