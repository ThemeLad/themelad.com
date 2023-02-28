import Link from 'next/link';
import 'bulma/css/bulma.css';

const Navbar = () => {
  return (
    <nav className="navbar is-black" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" href="/">ThemeLad</Link>
          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="mainNav">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="mainNav" className="navbar-menu">
          <div className="navbar-end">
            <Link className="navbar-item" href="/themes">Themes</Link>
            <Link className="navbar-item" href="/pricing">Pricing</Link>
            <Link className="navbar-item" href="/blog">Blog</Link>
            <Link className="navbar-item" href="/contact">Contact</Link>
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-success has-text-weight-bold">Sign In</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
