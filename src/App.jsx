import { Outlet } from 'react-router-dom';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import ScrollProgress from './components/ui/ScrollProgress.jsx';
import BackToTop from './components/ui/BackToTop.jsx';
import CustomCursor from './components/ui/CustomCursor.jsx';
import LoadingScreen from './components/ui/LoadingScreen.jsx';

export default function App() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <CustomCursor />
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
