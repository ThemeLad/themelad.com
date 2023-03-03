import Link from 'next/link';

interface Props {
  href: string;
  text: string;
}

const NavbarItem = ({ href, text }: Props): JSX.Element => {
  return (
    <Link className='navbar-item has-text-weight-bold' href={href}>{text}</Link>
  );
};

export default NavbarItem;
