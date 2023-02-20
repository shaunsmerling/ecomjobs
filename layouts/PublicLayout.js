import Navbarthree from "../components/navBarThree";

export default function PublicLayout({ children }) {
  return (
    <>
      <Navbarthree />
      <main>{children}</main>
    </>
  );
}
