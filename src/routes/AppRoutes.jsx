import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Purpose from "../pages/Purpose";
import Timeline from "../pages/Timeline";
import Personalities from "../pages/Personalities";
import FAQ from "../pages/FAQ";
import PersonalityDetails from "../pages/PersonalityDetails";
import TimelineDetails from "../pages/TimelineDetails";
import JourneyMap from "../pages/JourneyMap";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/purpose" element={<Purpose />} />
      <Route path="/timeline" element={<Timeline />} />
      <Route path="/personalities" element={<Personalities />} />
      <Route path="/faq" element={<FAQ />} />
      <Route
  path="/personalities/:slug"
  element={<PersonalityDetails />}/>
  <Route
  path="/timeline/:slug"
  element={<TimelineDetails />}/>
  <Route
  path="/journey-map"
  element={<JourneyMap />}/>
    </Routes>
  );
};

export default AppRoutes;