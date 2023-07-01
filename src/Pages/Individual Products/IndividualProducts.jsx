import React from 'react';
import { NavBar } from '../../Components/NavBar/NavBar';
import { Footer, NaartjieMin } from '../../MinorComponents/MinorComponents';
import './IndividualProducts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const IndividualProducts = () => {
  return (
    <div style={{ fontFamily: 'Figtree' }}>
      <NavBar />
      <NaartjiePage />
      <Footer />
    </div>
  );
};

export const NaartjiePage = () => {
  return (
    <div className="NaartjiePage">
      <div className="NaartjieIsorade">
        <h1>Naartjie</h1>
        <h3 className="Isorade">Isorade</h3>
        <div className="Content">
          <div className="NaartjiePreview">
            <NaartjieMin />
          </div>
          <div className="NutritionalInfo">
            <h3>Nutritional Information</h3>
            <table>
              <tr>
                <th>Calories</th>
                <td>140</td>
              </tr>
              <tr>
                <th>Total Fat</th>
                <td>0g</td>
              </tr>
              <tr>
                <th>Sodium</th>
                <td>45mg</td>
              </tr>
              <tr>
                <th>Total Carbs</th>
                <td>45mg</td>
              </tr>
              <tr>
                <th>Sugars</th>
                <td>39mg</td>
              </tr>
              <tr>
                <th>Protein</th>
                <td>0g</td>
              </tr>
            </table>
          </div>
          <div className="Map">
            <div>
              <table>
                <tr>
                  <th className="WhereToBuy" style={{ float: 'right' }}>
                    Where to buy
                  </th>
                  <td className="View" style={{ float: 'left' }}>
                    <a href="#">View on map</a>
                  </td>
                </tr>
              </table>
            </div>
            <div className="Warn">
              <FontAwesomeIcon icon={faInfoCircle} />
              Accept location permissions to find stores around you
            </div>
            <div className="Depot">
              <h4>Kingsley Depot Benrose (5.1km)</h4>
              <h5>39 Robyn Road, Benrose Johannesburg Gauteng, South Africa</h5>
              <span>072 156 3869</span>
              <span className="hh">Get Direction</span>
            </div>
            <div className="Depot">
              <h4>Hydration Hub</h4>
              <h5>39 Robyn Road, Benrose Johannesburg Gauteng, South Africa</h5>
              <span>072 156 3869</span>
              <span className="hh">Get Direction</span>
            </div>
            <div className="Depot">
              <h4>Refreshment Roundhouse</h4>
              <h5>39 Robyn Road, Benrose Johannesburg Gauteng, South Africa</h5>
              <span>072 156 3869</span>
              <span className="hh">Get Direction</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualProducts;
