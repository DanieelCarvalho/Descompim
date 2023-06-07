//import { useState } from "react";
import { HomePage } from "../pages/Home/HomePage";
import { HeaderPartials } from "../../Partials/HeaderPartials";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MinhasPastas } from "../pages/minhasPastas";
import { AppContext } from "../../store/AppContext";
const initialState = {
  activePinId: null,
  mode: null,
  folders: [],
  type: null,
};
function App() {
  // const [count, setCount] = useState(0);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HeaderPartials />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/minhas-pastas", element: <MinhasPastas /> },
      ],
    },
  ]);

  return (
    <>
      <AppContext initialState={initialState}>
        <RouterProvider router={router} />;
      </AppContext>
    </>
  );
}

export default App;
