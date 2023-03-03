import Link from 'next/link';

import NavbarItem from './NavbarItem';
import { Github } from '@/components/Icons';

interface Props {
  isHome?: boolean;
}

const Navbar = ({ isHome }: Props): JSX.Element => {
  return (
    <nav className='navbar is-black' role='navigation' aria-label='main navigation'>
      <div className='container'>
        <div className='navbar-brand'>
          <Link className='navbar-item' href='/'>ThemeLad</Link>
          <a role='button' className='navbar-burger' aria-label='menu' aria-expanded='false' data-target='mainNav'>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>

        <div id='mainNav' className='navbar-menu has-text-weight-bold'>
          {/* <div className='navbar-start'>
            <NavbarItem href='/themes' text='Themes' />
            <NavbarItem href='/pricing' text='Pricing' />
            <NavbarItem href='/blog' text='Blog' />
            <NavbarItem href='/contact' text='Contact' />
          </div> */}
          <div className='navbar-end'>
            <a className='navbar-item' href='https://github.com/ThemeLad' target='_blank'>
              {/* <div className='buttons has-text-weight-bold'>
                <a className='button is-light'>Log in</a>
                <a className='button is-outlined'>Register</a>
              </div> */}
              <Github color='#fff' />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
