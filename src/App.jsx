import { Outlet } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="container-fluid px-4 my-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
