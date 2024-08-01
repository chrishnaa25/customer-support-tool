import React from "react";
import "./App.css";
import Details from "./pages/Details";
import OtpVerification from "./pages/OtpVerification";
import DeletePopup from "./pages/DeletePopup";
import ExpertiseLayout from "./pages/ExpertiseLayout";
import ServiceCenter from "./pages/ServiceCenter";
import AddAdvisor from "./pages/AddAdvisor";
import PersonalDetails from "./pages/PersonalDetails";

function App() {
  return (
    <div>
      <PersonalDetails />
      <AddAdvisor />
      <ServiceCenter />
      <Details />
      <div className="flex items-center">
        <OtpVerification />
        <DeletePopup />
      </div>
      <ExpertiseLayout />
    </div>
  );
}

export default App;
