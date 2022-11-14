import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import useUser from './hooks/useUser';

const paths = [
  { label: 'Home', urlTo: '/', selected: false },
  { label: 'About', urlTo: '/about', selected: false },
  { label: 'Articles', urlTo: '/articles', selected: false },
];

const NavBar = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  console.log(window.location.pathname);

  const updatedPaths = paths.map((path) => {
    let selected = false;
    if (path.urlTo === '/') {
      selected = path.urlTo === window.location.pathname;
    } else {
      selected = window.location.pathname
        .split('/')
        .join('')
        .includes(path.urlTo.split('/').join(''));
    }
    return {
      ...path,
      selected,
    };
  });

  return (
    <nav>
      <ul>
        {updatedPaths.map((path, idx) => (
          <li key={idx} className={path.selected ? 'selected' : ''}>
            <Link to={path.urlTo}>{path.label}</Link>
          </li>
        ))}
      </ul>
      <div className="nav-right">
        {user ? (
          <button
            onClick={() => {
              signOut(getAuth());
            }}
          >
            Log Out
          </button>
        ) : (
          <button
            onClick={() => {
              navigate('/login');
            }}
          >
            Log In
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
