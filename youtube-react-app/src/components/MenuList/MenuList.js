// Functional Comp with Arrow Function
const MenuList = () => {
  // must return jsx 
  return (
    <ul className="navbar-nav me-auto mb-2 mb-md-0">
      <li className="nav-item">
        <a className="nav-link active" href="/">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">
          Videos
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">
          About Us
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">
          Contact Us
        </a>
      </li>
    </ul>
  );
}

export default MenuList;