// src/pages/Home.jsx
import HeroSlider from '../components/Home/HeroSlider';
import CompanySummary from "../components/Home/CompanySummary";
import Certificates from "../components/Home/Certificates";
import CompanyFactSheet from "../components/Home/CompanyFactSheet";
import ServicesAccordion from "../components/Home/ServicesAccordion"
import Clients from "../components/Home/Clients";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <CompanySummary />
      <Certificates />
      <CompanyFactSheet />
      <ServicesAccordion />
      <Clients />
    </div>
  );
};

export default Home;
