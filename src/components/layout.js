import Navbar from './navbar';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <div className="lg:mx-[11.75rem] ">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
