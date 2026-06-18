import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import BackgroundVideo from "./components/layout/BackgroundVideo";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="overflow-x-hidden">
      <BackgroundVideo />

      <Navbar />

      <main className="relative z-10">
        <AppRoutes />
      </main>

      <Footer />
    </div>
  );
}

export default App;