import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from '../ui/CustomCursor';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#030014] text-white selection:bg-neonPurple/30">
      <CustomCursor />
      <Navbar />
      <main className="flex-grow relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}
