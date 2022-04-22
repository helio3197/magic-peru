import { Link, NavLink } from 'react-router-dom';

const toLink = ({ children, className, href }) => (
  <Link to={href} className={className}>
    {children}
  </Link>
);

const toNavLink = ({
  children, className, href, style, onClick,
}) => (
  <NavLink to={href} className={className} style={style} onClick={onClick}>
    {children}
  </NavLink>
);

export { toLink, toNavLink };
