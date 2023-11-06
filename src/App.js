import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./component/shared/Layout";
import Dashboard from "./component/Dashboard";
import Files from "./component/Files";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="/files" element={<Files />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}
