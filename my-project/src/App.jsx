import "./App.css";
import NavBar from "./components1/NavBar";
import HeroSection from "./components1/HeroSection";
import MenuSection from "./components1/MenuSection";
import ChefSection from "./components1/ChefSection";
import Footer from "./components1/Footer";
import { OrderProvider } from "./components1/OrderContext";

function App() {
  return (
    <OrderProvider>
      <NavBar />
      <HeroSection />
      <MenuSection />
      <ChefSection />
      <Footer />
    </OrderProvider>
  );
}

export default App;
