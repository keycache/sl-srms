import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Students from "./pages/Students";
import Courses from "./pages/Courses";

function App() {
  return (
    <>
      <Router>
        <div className="flex">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<Students />} />
            <Route path="/courses" element={<Courses />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
