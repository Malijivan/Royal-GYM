import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Layout({ onLogout }: { onLogout: () => void }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <div className="bg-zinc-950 min-h-screen text-slate-200 selection:bg-gold-500/30 selection:text-gold-400 flex flex-col">
      <Navbar onLogout={handleLogout} />
      <main className="pt-20 flex-1 flex flex-col"> {/* Add padding for fixed navbar */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
