import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/logo.webp';
import photo from '../../assets/images/aurora.jpg';

import './styles.scss';

export default function Header() {
  return (
    <>
      <div className="container-header">
        <Link to={'/'}>
          <img src={Logo} alt="Logo" />
        </Link>
        <div className="content-profile">
          <Link to={'/'}>
            <img src={photo} alt="picture profile" />
            <span>Aurora Aksnes</span>
          </Link>
        </div>
      </div>
    </>
  );
}
