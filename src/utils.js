import { Link, NavLink } from 'react-router-dom';

const toLink = ({
  children, className, href, onClick,
}) => (
  <Link to={href} className={className} onClick={onClick}>
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
