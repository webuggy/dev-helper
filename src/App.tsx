import DefaultLayout from "./layout/DefaultLayout";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return <RouterProvider router={router} />;
}

export default App;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<DefaultLayout />}>
      <Route path="/" element={<HomeScreen />} />
    </Route>
  )
);
