import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideMenu from "./components/layout/sideMenu/SideMenu";
import Header from "./components/layout/header/Header";
import Leaderboards from "./pages/Leaderboards";
import CreateNew from "./pages/CreateNew";
import Users from "./pages/Users";
import SignIn from "./pages/SignIn";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow grid grid-cols-12">
          <SideMenu />
          <div className="col-span-10 py-6 px-16 3xl:py-9 3xl:px-24 4xl:py-20 4xl:px-52">
            <Routes>
              <Route path="/" element={<Leaderboards />} />
              <Route path="/leaderboards" element={<Leaderboards />} />
              <Route path="/create-new" element={<CreateNew />} />
              <Route path="/users" element={<Users />} />
              <Route path="/sign-in" element={<SignIn />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
};

export default App;
