import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";

function AnimatedRoutes(){
    const location = useLocation();
    return(
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            {/* Error display */}
            <Route path="*" element={<Error404 />} />
            {/* Home display */}
            <Route path="/" element={<Home />} />
          </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;