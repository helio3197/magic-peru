import { Link, NavLink } from 'react-router-dom';

const toLink = ({ children, className, href }) => (
  <Link to={href} className={className}>
    {children}
  </Link>
);

const toNavLink = ({
  children, className, href, style,
}) => (
  <NavLink to={href} className={className} style={style}>
    {children}
  </NavLink>
);

export { toLink, toNavLink };
