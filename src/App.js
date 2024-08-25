import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div class="flex flex-col justify-between h-screen">
        <Navbar />
        <main className="container mx-auto px-3 pb-12">
          content
        </main>
        <Footer />
      </div>
      
      
    </Router>
  );
}

export default App;
