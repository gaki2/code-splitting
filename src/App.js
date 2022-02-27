//1. NO CODE SPLITTING
// import Sword from "./components/Sword";
// import Suriken from "./components/Suriken";
// import Info from "./components/Info";
// import Wolf from "./components/Wolf";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
//2. CODE SPLITTING
const Info = lazy(() => import("./components/Info"));
const Sword = lazy(() => import("./components/Sword"));
const Suriken = lazy(() => import("./components/Suriken"));
const Wolf = lazy(() => import("./components/Wolf"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Info />}></Route>
          <Route path="/sword" element={<Sword />}></Route>
          <Route path="/suriken" element={<Suriken />}></Route>
          <Route path="/wolf" element={<Wolf />}></Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
