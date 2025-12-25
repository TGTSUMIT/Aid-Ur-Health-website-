import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { LiveUpdates } from "./components/LiveUpdates";
import { Services } from "./components/Services";
import { Doctors } from "./components/Doctors";
import { Support } from "./components/Support";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <LiveUpdates />
        <Services />
        <Doctors />
        <Support />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}