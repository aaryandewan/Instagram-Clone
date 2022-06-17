import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Login = lazy(() => import("./pages/login"));

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/login" element={Login} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
