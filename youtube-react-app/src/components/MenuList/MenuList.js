import { NavLink } from "react-router-dom";

// Functional Comp with Arrow Function
const MenuList = (props) => {
  // must return jsx
  const navItems = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Video",
      url: "/video",
    },
    {
      id: 3,
      title: "About Us",
      url: "/about-us",
    },
    {
      id: 4,
      title: "Contact Us",
      url: "/contact-us",
    },
  ];

  return (
    <ul className="navbar-nav me-auto mb-2 mb-md-0">
      {navItems.map((navItem) => {
        // console.log(navItem);
        return (
          <li className="nav-item" key={navItem.id}>
            <NavLink to={navItem.url} className="nav-link">
              {navItem.title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default MenuList;