import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function RootElement() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default RootElement;
