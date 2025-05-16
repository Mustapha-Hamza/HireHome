import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import HomeTypePage from "./pages/HomeTypePage";
import LocationDetailPage from "./pages/LocationDetailPage";
import PaymentPage from "./pages/PaymentPage";
import ConfirmationPage from "./pages/ConfirmationPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="home-types/:homeTypeId" element={<HomeTypePage />} />
          <Route
            path="locations/:locationId"
            element={<LocationDetailPage />}
          />
          <Route path="payment/:locationId" element={<PaymentPage />} />
          <Route path="confirmation" element={<ConfirmationPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
