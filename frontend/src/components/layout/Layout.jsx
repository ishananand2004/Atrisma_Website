import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow mt-16 md:mt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
