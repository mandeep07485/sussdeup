import Home from "./components/Home";
import Contact from "./components/Contact";
import Payfoundation from "./components/Payfoundation";
import Profile from "./components/Profile";
import Management from "./components/Management";
import Governors from "./components/Governors";
import Process from "./components/Process";
import Eligibility from "./components/Eligibility";
import Feestructure from "./components/Feestructure";
import Scholarship from "./components/Scholarship";
import Aboutsu from "./components/Aboutsu";
import Practice from "./components/Practice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Visionandmission from "./components/Visionandmission";
import CoreValue from "./components/Corevalue";
import ResearchCenters from "./components/ResearchCenters";
import IndustryPartnerships from "./components/IndustryPartnerships";
import InnovationFramework from "./components/InnovationFramework";
import StartupEcosystem from "./components/StartupEcosystem";
import Campus1 from "./components/Campus1";
import Campus2 from "./components/Campus2";
import Campus3 from "./components/Campus3";
import Campus4 from "./components/Campus4";
import Academic from "./components/Academic";
// import Academic2 from "./components/Academic2";
// import Academic3 from "./components/Academic3";
// import Academic4 from "./components/Academic4";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pay" element={<Payfoundation />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/management" element={<Management />} />
          <Route path="/governors" element={<Governors />} />
          <Route path="/process" element={<Process />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/eligibility" element={<Eligibility />} />
          <Route path="/feestructure" element={<Feestructure />} />
          <Route path="/scholarship" element={<Scholarship />} />
          <Route path="/about" element={<Aboutsu />} />
          <Route path="/vision" element={<Visionandmission />} />
          <Route path="/corevalue" element={<CoreValue />} />
          <Route path="/research" element={<ResearchCenters />} />
          <Route path="/industrypartner" element={<IndustryPartnerships />} />
          <Route path="/innovation" element={<InnovationFramework />} />
          <Route path="/ecosystem" element={<StartupEcosystem />} />
          <Route path="/infrastructure" element={<Campus1 />} />
          <Route path="/academicfacities" element={<Campus2 />} />
          <Route path="/studentlife" element={<Campus3 />} />
          <Route path="/residentialfacilities" element={<Campus4 />} />
          <Route path="/undergraduate" element={<Academic />} />
          {/* <Route path="/postgraduate" element={<Academic2 />} />
          <Route path="/diploma" element={<Academic3 />} />
          <Route path="/professionaldevelopment" element={<Academic4 />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
