import React, { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Signature from './components/Signature';
import Collection from './components/Collection';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <CustomCursor />
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      
      <Navbar />
      <Hero loading={loading} />
      <Signature />
      <Collection />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default App;