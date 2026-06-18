import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { ProductsPage } from './pages/ProductsPage';
import { ContactPage } from './pages/ContactPage';


function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    const path = window.location.pathname;
    if (path === '/about') return 'about';
    if (path === '/gallery') return 'gallery';
    if (path === '/products') return 'products';

    if (path === '/contact') return 'contact';
    return 'home';
  });
  const [currentSearch, setCurrentSearch] = useState(() => window.location.search);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      setCurrentSearch(window.location.search);
      if (path === '/about') {
        setCurrentPage('about');
      } else if (path === '/gallery') {
        setCurrentPage('gallery');
      } else if (path === '/products') {
        setCurrentPage('products');
      } else if (path === '/contact') {
        setCurrentPage('contact');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (page, hash = '', search = '') => {
    setCurrentPage(page);
    setCurrentSearch(search);

    // Update path
    const pathMap = { about: '/about', gallery: '/gallery', products: '/products', contact: '/contact' };
    const newPath = (pathMap[page] || '/home') + search;
    if (window.location.pathname + window.location.search !== newPath) {
      window.history.pushState({}, '', newPath);
    }

    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {currentPage === 'home' && (
        <HomePage onNavigateAbout={() => handleNavigate('about')} onNavigate={handleNavigate} />
      )}

      {currentPage === 'about' && (
        <AboutPage onNavigateHome={(hash) => handleNavigate('home', hash)} />
      )}

      {currentPage === 'gallery' && (
        <GalleryPage />
      )}

      {currentPage === 'products' && (
        <ProductsPage onNavigate={handleNavigate} search={currentSearch} />
      )}

      {currentPage === 'contact' && (
        <ContactPage />
      )}

      <Footer onNavigate={(hash, page) => handleNavigate(page || 'home', hash)} />
      <WhatsAppButton />
    </div>
  );
}

export default App;
