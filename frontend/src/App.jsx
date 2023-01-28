import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Students from "./pages/Students";
import Courses from "./pages/Courses";
import Results from "./pages/Results";

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
            <Route path="/results" element={<Results />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
