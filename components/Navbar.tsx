const navbarId = 'mainNav';

const NavbarMenu = () => (
  <a role='button' className='navbar-burger' aria-label='menu' aria-expanded='false' data-target={navbarId}>
    <span aria-hidden='true'></span>
    <span aria-hidden='true'></span>
    <span aria-hidden='true'></span>
  </a>
);

const NavbarBrand = () => (
  <div className='navbar-brand'>
    <a className='navbar-item' href='/'>ThemeLad</a>
    <NavbarMenu />
  </div>
);

const Navbar = () => {
  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='container'>
        <NavbarBrand />
        <div id={navbarId} className='navbar-menu'>
          <div className='navbar-end'>
            <a className='navbar-item' href='/themes'>Themes</a>
            <a className='navbar-item' href='/blog'>Blog</a>
            <a className='navbar-item' href='/pricing'>Pricing</a>
            <a className='navbar-item' href='/contact'>Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
