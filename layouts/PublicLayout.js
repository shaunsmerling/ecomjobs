import Navbartwo from "../components/NavBarTwo";

export default function PublicLayout({ children }) {
  return (
    <>
      <Navbartwo />
      <main>{children}</main>
    </>
  );
}
