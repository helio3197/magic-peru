import { Link } from 'react-router-dom';

const toLink = ({ children, className, href }) => (
  <Link to={href} className={className}>
    {children}
  </Link>
);

export default toLink;
