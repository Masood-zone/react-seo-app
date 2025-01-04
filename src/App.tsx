import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./pages/layout";
import LandingPage from "./pages/landing";
import About from "./pages/about";
import Gallery from "./pages/gallery";
import Room from "./pages/room";

function App() {
  return (
    <>
      <HelmetProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/rooms/:id" element={<Room />} />
            </Routes>
          </Layout>
        </Router>
      </HelmetProvider>
    </>
  );
}

export default App;
