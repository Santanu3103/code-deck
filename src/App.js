import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./Pages/Routes"; // array of objects
const Loader = () => {
  <div>Loading...</div>;
};
function App() {
  return (
    // Suspence from react
    <Suspense fallback={Loader()}> 
      <BrowserRouter>
        <Routes>
          <>
            {routes.map((route) => (
              <Route path={route.path} element={route.component} />
            ))}
          </>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;