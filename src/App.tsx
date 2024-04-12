import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { AuthPage } from "./pages/AuthPage";
import { AirportDetalePage } from "./pages/AirportDetalePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/airport/:id" element={<AirportDetalePage />} />
      </Routes>
    </div>
  );
}

export default App;
