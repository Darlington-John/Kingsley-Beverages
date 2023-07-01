import React from 'react';
import KingsleyLogo from '../images/image4(4).png';
import './MinorComponents.css';
import Kingsley from '../images/image 4 (6).png';
import IsoradeGreen from '../images/image 1 (1).png';
import Dragon from '../images/image 1.png';
import CarterTea from '../images/image 3 (2).png';
import IsoradeBlue from '../images/image3(1).png';
import KingsleyFrameImg from '../images/Frame 10 (1).png';
import DragonEnergyImg from '../images/Frame 11 (2).png';
import IsoradeImg from '../images/Frame 12 (1).png';
import IsoradeImgAlt from '../images/Frame 10 (1).png';
import NaartjieMain from '../images/image 1 (2).png';
import MixedBerryMain from '../images/image 1 (3).png';
import GrapeMain from '../images/image 1 (4).png';
import WomanContainerImg from '../images/Frame 5 (1).png';
import WhiteLogoImg from '../images/image 4 (5).png';
import PopupImg from '../images/Frame 39.png';
import GreenBackgroundImg from '../images/MacBook Pro 14_ - 3 (1).png';
import BestImg from '../images/Frame 5 (3).png';
import Location from '../so-map.svg';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import 'swiper/swiper-bundle.min.css';
import Products from './../Pages/Products/Products';

export class KingsleyLogoContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="LogoContainer">
        <img src={KingsleyLogo} className="KingsleyLogo" />
        <img src={Kingsley} className="Kingsley" />
      </div>
    );
  }
}

export class LocationIcon extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <img src={Location} />;
  }
}

export class PopupCon extends React.Component {
  render() {
    return <img src={PopupImg} />;
  }
}

export class Beverages extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Beverages">
        <div className="Premium">
          <h1> Premium beverages at affordable prices </h1>
          <p>
            We believe that everyone deserves to experience the finest drinks
            without breaking the bank.That 's why we offer a selection of
            premium drinks, all at prices you 'll love.{' '}
          </p>{' '}
          <button> Our products </button>
        </div>{' '}
        <div className="Drinks">
          <DrinksContainer />
        </div>
      </div>
    );
  }
}

export class DrinksContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="DrinksContainer">
        <img src={IsoradeBlue} className="IsoradeBlue" />
        <img src={Dragon} className="Dragon" />
        <img src={CarterTea} className="CarterTea" />

        <img src={IsoradeGreen} className="IsoradeGreen" />
      </div>
    );
  }
}

export class Brands extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Brands">
        <div className="OurBrands">
          <h1>Our brands</h1>
          <p>
            Uncover the rich diversity of our sub-brands. Each with its own
            unique flavor and character, our range offers something for every
            taste. Explore and find your favorite today.
          </p>
          <SwiperApi />
          <button className="Explore">Explore all brands</button>
        </div>
      </div>
    );
  }
}

const CustomButton = ({ direction, onClick }) => {
  return (
    <button className={`swiper-button-${direction}`} onClick={onClick}>
      {direction === 'next' ? 'Next' : 'Prev'}
    </button>
  );
};

export default function SwiperApi() {
  const swiperRef = useRef(null);

  const slideNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const slidePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <>
      <div className="swiper-container">
        <Swiper
          slidesPerView={3.5}
          spaceBetween={10}
          ref={swiperRef}
          className="mySwiper"
        >
          <SwiperSlide>
            <KingsleyFrame />
          </SwiperSlide>
          <SwiperSlide>
            <DragonEnergy />
          </SwiperSlide>
          <SwiperSlide>
            <Isorade />
          </SwiperSlide>
          <SwiperSlide>
            <IsoradeImg2 />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export class KingsleyFrame extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const containerStyle = {
      background: `url("${KingsleyFrameImg}")`,
    };
    return (
      <div className="Relative" style={containerStyle}>
        <div className="Overlay">
          <div className="OverlayContent">
            <h2>Kingsley</h2>
            <p>
              Everyone has got flavour! With Kingsley's wide choice of Sparkling
              Soft Drinks, there's a flavour for everyone!
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export class DragonEnergy extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const containerStyle2 = {
      background: `url("${DragonEnergyImg}")`,
    };
    return (
      <div className="Relative2" style={containerStyle2}>
        <div className="Overlay">
          <div className="OverlayContent">
            <h2>Dragon Energy</h2>
            <p>
              Dragon Energy is specifically designed to maximise mental and
              physical performance.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export class Isorade extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const containerStyle3 = {
      background: `url("${IsoradeImg}")`,
    };
    return (
      <div className="Relative3" style={containerStyle3}>
        <div className="Overlay">
          <div className="OverlayContent">
            <h2>Isorade</h2>
            <p>
              Isorade drink helps replenish fluids and carbohydrates lost
              through sports and physical activity.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export class IsoradeImg2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const containerStyle4 = {
      position: 'relative',
      backgroundImage: `url("${IsoradeImgAlt}")`,
      backgroundRepeat: 'no-repeat',
      width: '419px',
      height: '220px',
      backgroundSize: 'cover',
    };
    return (
      <div className="Relative" style={containerStyle4}>
        <div className="Overlay">
          <div className="OverlayContent">
            <h2>Isorade</h2>
            <p>
              Isorade drink helps replenish fluids and carbohydrates lost
              through sports and physical activity.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export class BlueberryBig extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Link to="/individual-product">
        <div className="Blueberry">
          <div className="R12Con">
            <R12 />
            <img src={IsoradeBlue} className="R12Img" />
          </div>
          <p>Blueberry</p>
          <a href="#" id="Where">
            Where to buy
          </a>
        </div>
      </Link>
    );
  }
}

export class TropicalBig extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Link to="/individual-product">
        <div className="Blueberry">
          <div className="R12Con">
            <R12 />
            <img src={IsoradeGreen} className="R12Img" />
          </div>
          <p>Tropical flavoured sports drink</p>
          <a href="#" id="Where">
            Where to buy
          </a>
        </div>
      </Link>
    );
  }
}

export class Naartjie extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Link to="/individual-product">
        <div className="Blueberry">
          <div className="R12Con">
            <R12 />
            <img src={NaartjieMain} className="R12Img" />
          </div>
          <p>Naartjie</p>
          <a href="#" id="Where">
            Where to buy
          </a>
        </div>
      </Link>
    );
  }
}

export class NaartjieMin extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Blueberry">
        <div className="R12Con">
          <R12 />
          <img src={NaartjieMain} className="R12Img" />
        </div>
      </div>
    );
  }
}

export class MixedBerry extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Link to="/individual-product">
        <div className="Blueberry">
          <div className="R12Con">
            <R12 />
            <img src={MixedBerryMain} className="R12Img" />
          </div>
          <p>Mixed berry</p>
          <a href="#" id="Where">
            Where to buy
          </a>
        </div>
      </Link>
    );
  }
}

export class Grape extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Link to="/individual-product">
        <div className="Blueberry">
          <div className="R12Con">
            <R12 />
            <img src={GrapeMain} className="R12Img" />
          </div>
          <p>Grape</p>
          <a href="#">Where to buy</a>
        </div>
      </Link>
    );
  }
}

export class R12 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <button className="R12">R12</button>;
  }
}
export class Blueberry extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Blueberry">
        <div className="R12Con">
          <R12 />
          <img src={IsoradeBlue} className="R12Img" />
        </div>
        <p>Blueberry</p>
        <a href="#">Where to buy</a>
      </div>
    );
  }
}

export class Tropical extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Blueberry">
        <div className="R12Con">
          <R12 />
          <img src={IsoradeGreen} className="R12Img" />
        </div>
        <p>Tropical flavored sports drink</p>
        <a href="#">Where to buy</a>
      </div>
    );
  }
}
export class EnergyDrink extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Blueberry">
        <div className="R12Con">
          <R12 />
          <img src={Dragon} className="R12Img" />
        </div>
        <p>Energy Drink</p>
        <a href="#">Where to buy</a>
      </div>
    );
  }
}
export class IceTea extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Blueberry">
        <div className="R12Con">
          <R12 />
          <img src={CarterTea} className="R12Img" />
        </div>
        <p>Energy Drink</p>
        <a href="#">Where to buy</a>
      </div>
    );
  }
}

export class ForYou extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Brands" style={{ backgroundColor: 'white' }}>
        <div className="OurBrands">
          <h1>Beverages for you</h1>
          <p>
            Indulge in a world of flavor with our carefully crafted beverages.
            We understand that every taste is unique, which is why we offer a
            range of products to suit every palate
          </p>
          <SwiperApiProducts />
          <button className="Explore">See all our products</button>
        </div>
      </div>
    );
  }
}

export function SwiperApiProducts() {
  const swiperRef = useRef(null);

  const slideNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const slidePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <>
      <div className="swiper-container" style={{ backgroundColor: 'white' }}>
        <Swiper
          slidesPerView={5.2}
          spaceBetween={30}
          ref={swiperRef}
          className="mySwiper"
        >
          <SwiperSlide>
            <Blueberry />
          </SwiperSlide>
          <SwiperSlide>
            <Tropical />
          </SwiperSlide>
          <SwiperSlide>
            <EnergyDrink />
          </SwiperSlide>
          <SwiperSlide>
            <IceTea />
          </SwiperSlide>
          <SwiperSlide>
            <Blueberry />
          </SwiperSlide>
          <SwiperSlide>
            <Tropical />
          </SwiperSlide>
          <SwiperSlide>
            <EnergyDrink />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export class FirstToKnow extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="FirstToKnow">
        <div className="SigningUp">
          <h1> Be the first to know </h1>
          <p>
            By signing up for our newsletter, you'll receive the latest news,
            updates, and exclusive offers straight to your inbox. Whether it's
            new products, special promotions, or events, our newsletter will
            keep you in the loop.
          </p>{' '}
          <input placeholder="Your email address"></input>
          <button> Sign me up for the newsletter </button>
        </div>{' '}
        <div className="WomanContainer">
          <WomanContainer />
        </div>
      </div>
    );
  }
}

export class WomanContainer extends React.Component {
  render() {
    return <img src={WomanContainerImg} />;
  }
}

export class Mission extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Mission">
        <h1>
          Our mission is to continually satisfy our customers with product
          development, superior quality, great tasting and refreshing beverages.
        </h1>
        <button>Learn more about us</button>
      </div>
    );
  }
}

export class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Outro">
        <WhiteLogo />
        <Email />
      </div>
    );
  }
}

export class WhiteLogo extends React.Component {
  render() {
    return (
      <div>
        <img src={WhiteLogoImg} />
        <p style={{ color: 'white' }}>
          Copyright © 2022. Kingsley Beverages (Pty) Ltd. All Rights Reserved.
        </p>
      </div>
    );
  }
}

export class Uncover extends React.Component {
  render() {
    return (
      <div className="Uncover">
        <h1>Our Products</h1>
        <p>
          Uncover the rich diversity of products within our brands. Each with
          its own unique flavor and character, our range offers something for
          every taste. Explore and find your favorite today.
        </p>
        <p id="Select">Select a brand to see it products</p>
        <UncoverButtons />
      </div>
    );
  }
}

export class UncoverButtons extends React.Component {
  render() {
    return (
      <div className="UncoverButtons">
        <button>Kingsley</button>
        <button className="active">Isorade</button>
        <button>Dragon Energy</button>
        <button>Aquafria</button>
        <button>Carter's</button>
        <button>Fruto</button>
        <button>Frutesca</button>
        <button>Mulberry Creak</button>
        <button>Viper</button>
        <button>Vacheron</button>
      </div>
    );
  }
}

export class GreenBackground extends React.Component {
  render() {
    const containerStyle5 = {
      background: `url("${GreenBackgroundImg}")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    };
    return (
      <div className="GreenBackground" style={containerStyle5}>
        <div className="Overlay">
          <div className="GreenBackgroundContent">
            <h1>
              Isorade drink helps replenish fluids, electrolytes and
              carbohydrates lost through sports and physical activity.
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export class GreenBackground2 extends React.Component {
  render() {
    const containerStyle6 = {
      background: `url("${BestImg}")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    };
    return (
      <div className="GreenBackground2" style={containerStyle6}>
        <div className="Overlay">
          <div className="GreenBackground2Content">
            <h1>Get the best to be your best</h1>
          </div>
        </div>
      </div>
    );
  }
}

export class ProductsRange extends React.Component {
  render() {
    return (
      <div className="ProductsRange">
        <h1>Products</h1>
        <p>
          A full range for the ultimate rehydration. Isorade is available in
          600ml PET bottles in the following flavours
        </p>
        <div className="Ranges">
          <BlueberryBig />
          <TropicalBig />
          <Naartjie />

          <MixedBerry />
          <Grape />
          <BlueberryBig />
        </div>
      </div>
    );
  }
}

export class Email extends React.Component {
  render() {
    return (
      <div className="Email">
        <p>
          <a href="#">
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ color: 'white' }}
              className="Emaili"
            />
            Email: info@kingsleybev.co.za
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faPhone} className="Emaili" />
          </a>
          <a href="#">
            {' '}
            <FontAwesomeIcon icon={faFacebook} className="Emaili" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} className="Emaili" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} className="Emaili" />
          </a>
        </p>
      </div>
    );
  }
}
