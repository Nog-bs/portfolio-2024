import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home, About, Contact, Navbar } from "./components";
import { AnimatePresence } from "framer-motion";

const App = () => {
    const location = useLocation();

    return (
        <div className="min-h-dvh flex flex-col items-center dark:bg-dark-mode text-slate-50 font-inter">
            <Navbar />
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </AnimatePresence>
        </div>
    );
};

export default App;
