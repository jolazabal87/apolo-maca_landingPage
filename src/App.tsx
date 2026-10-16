import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { WhatIsMaca } from './components/WhatIsMaca';
import { Products } from './components/Products';
import { History } from './components/History';
import { AboutUs } from './components/AboutUs';
import { Contact } from './components/Contact';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-cream">
      <TopBar />
      <Header />
      <Hero />
      <Benefits />
      <WhatIsMaca />
      <Products />
      <History />
      <AboutUs />
      <Contact />
      <FAQ />
      <Footer />
    </main>
  );
}

export default App;
