import { useSelector } from "react-redux";

const Navbar = () => {
  const totalsty = {
    marginLeft: "750px",
  };
  const { amount } = useSelector((state) => state.cart);
  return (
    <div>
      <ul className="list">
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>

        <h1 style={totalsty}>Total: {amount}</h1>
      </ul>
    </div>
  );
};

export default Navbar;
