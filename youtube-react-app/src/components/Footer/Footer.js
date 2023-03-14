import MenuList from '../MenuList/MenuList';

// Fn comp with anonymous function
const Footer = function () {
  const copyrightYear = new Date().getFullYear();
  const developerName = 'Arun';

  // must return jsx
  return (
    <footer className="text-center">
      <hr />
      <MenuList />
      <div>
        Copyright &copy; {copyrightYear} | {developerName}
      </div>
    </footer>
  );
}

export default Footer;
