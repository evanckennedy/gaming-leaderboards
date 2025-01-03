import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideMenu from "./components/layout/sideMenu/SideMenu";
import Header from "./components/layout/header/Header";
import Leaderboards from "./pages/Leaderboards";
import CreateNew from "./pages/CreateNew";
import Users from "./pages/Users";
import SignIn from "./pages/SignIn";
import NotAuthorized from "./pages/notAuthorized";
import ProtectedRoute from "./components/protectedRoutes/ProtectedRoute";
import useUserInit from "./features/authentication/hooks/useUserInit";

const App = () => {
  useUserInit();

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow grid grid-cols-12">
          <SideMenu />
          <div className="col-span-10 pt-6 pb-12 px-16 3xl:pt-9 3xl:pb-20 3xl:px-24 4xl:pt-20 4xl:pb-36 4xl:px-52">
            <Routes>
              <Route path="/" element={<Leaderboards />} />
              <Route path="/leaderboards" element={<Leaderboards />} />
              <Route
                path="/create-new"
                element={
                  <ProtectedRoute
                    allowedRoles={["Root", "Create"]}
                    element={<CreateNew />}
                  />
                }
              />
              <Route
                path="/users"
                element={
                  <ProtectedRoute allowedRoles={["Root"]} element={<Users />} />
                }
              />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/not-authorized" element={<NotAuthorized />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
};

export default App;
