import { Header } from "./comp/header";
import { Hero } from "./comp/hero";
import './App.css'
import { Companies } from "./comp/companies";
import { Residencies } from "./comp/Residencies/residencies";
import { Contact } from "./comp/contact/contact";
import { GetStarted } from "./comp/getStarted";
import { Footer } from "./comp/Footer/footer";



function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>

      <Companies />
      <Residencies />
      <Contact />
      <GetStarted />
      <Footer />

    </div>
  );
}

export default App;
