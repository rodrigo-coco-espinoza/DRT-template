import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import store from "store";
import { Provider } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";
import AnimatedRoutes from "Routes";

function App() {
  
  return (
    <HelmetProvider>
      <Helmet>
        <title>My web app</title>
        <meta name="description" content="A Django-React-Tailwind web site template ready-to-use." />
      </Helmet>
      <Provider store={store}>
        <Router>
          <AnimatedRoutes />         
        </Router>
      </Provider>
    </HelmetProvider>
    );
}

export default App;