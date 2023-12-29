import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home, About, Contact, Navbar } from "./components";

const App = () => {
    const location = useLocation();

    return (
        <div className="h-screen flex flex-col items-center justify-center dark:bg-dark-mode text-slate-50">
            <Navbar />
            <Routes location={location} key={location.pathname}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
};

export default App;
