import React from 'react';
import './NavBar.css';
import {
  KingsleyLogoContainer,
  LocationIcon,
  PopupCon,
} from '../../MinorComponents/MinorComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';

export class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
    };
  }

  handleLocationLinkClick = () => {
    this.setState({ showPopup: true });
  };

  closePopup = () => {
    this.setState({ showPopup: false });
  };

  render() {
    const { pathname } = window.location; // Get the current path
    const { showPopup } = this.state;

    return (
      <div className="NavBar">
        <Link exact to="/">
          <KingsleyLogoContainer />
        </Link>
        <div className="Links">
          <a>Find a store nearby</a>
          <Link to="/product" activeClassName="active">
            Our products
          </Link>
          <a>About us</a>
          <a>Contact us</a>
          <a
            href="#"
            className="LocationLink"
            onClick={this.handleLocationLinkClick}
          >
            <LocationIcon />
            S.Africa
          </a>
        </div>

        {/* Pop-up */}
        {showPopup && (
          <div className="popup-container">
            <div className="popup-content">
              <FontAwesomeIcon
                icon={faTimes}
                className="fa-xl"
                style={{ color: '#AD2418', float: 'right' }}
                onClick={this.closePopup}
              />
              <PopupCon />
            </div>
          </div>
        )}
      </div>
    );
  }
}
