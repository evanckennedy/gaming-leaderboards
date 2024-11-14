import SideMenu from "./components/layout/sideMenu/SideMenu";
import Header from "./components/layout/header/Header";

const App = () => {
  return (
    <>
      <Header />
      <main className="grid grid-cols-12">
        <SideMenu />
        {/* side menu takes up one column when closed and two columns when open*/}
        {/* pages take up probably 8 or 9 columns so that there's a room for it to 
            be pushed aside by an open side menu*/}
      </main>
    </>
  );
};

export default App;
