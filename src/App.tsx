import DefaultLayout from "./layout/DefaultLayout";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import { navigationPath } from "./api/navigationPath";
import { CustomScreen } from "./components/Screen/CustomScreen";
import { ScreenComponentList } from "./util/screen-list";

function App() {
  return <RouterProvider router={router} />;
}

export default App;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<DefaultLayout />}>
      <Route path="/" element={<HomeScreen />} />
      {navigationPath.map((ele, i) => (
        <Route path={ele.path} key={i}>
          {ele.item.map((navItem, j) => (
            <Route
              path={navItem.path}
              element={
                <CustomScreen
                  component={navItem.component as ScreenComponentList}
                />
              }
              key={j}
            />
          ))}
        </Route>
      ))}
    </Route>
  )
);
