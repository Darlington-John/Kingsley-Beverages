import React from 'react';
import KingsleyLogo from '../images/image4(4).png';
import './MinorComponents.css';
import Kingsley from '../images/image 4 (6).png';
import IsoradeGreen from '../images/image 1 (1).png';
import Dragon from '../images/image 1.png';
import CarterTea from '../images/image 3 (2).png';
import IsoradeBlue from '../images/image3(1).png';
import KingsleyFrameImg from '../images/Frame 10.png';
import DragonEnergyImg from '../images/Frame 11 (1).png';
import IsoradeImg from '../images/Frame 12.png';
import IsoradeImgAlt from '../images/Frame 13.png';
import BlueBerryImg from '../images/Frame 19.png';
import BlueberryBigImg from '../images/Frame 19 (7).png';
import TropicalBigImg from '../images/Frame 19 (9).png';
import NaartjieImg from '../images/Frame 19 (4).png';
import MixedBerryImg from '../images/Frame 19 (5).png';
import GrapeImg from '../images/Frame 19 (6).png';
import TropicalImg from '../images/Frame 19 (3).png';
import EnergyDrinkImg from '../images/Frame 19 (1).png';
import IceTeaImg from '../images/Frame 19 (2).png';
import WomanContainerImg from '../images/Frame 5 (1).png';
import WhiteLogoImg from '../images/image 4 (5).png';
import EmailImg from '../images/Frame 36.png';
import PopupImg from '../images/Frame 39.png';
import GreenBackgroundImg from '../images/MacBook Pro 14_ - 3.png';
import BestImg from '../images/Frame 5 (2).png';
import Location from '../so-map.svg';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
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

SwiperCore.use([Navigation, Pagination]);

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
          slidesPerView={3.2}
          spaceBetween={30}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          pagination={{
            clickable: true,
          }}
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

        <div className="swiper-button-prev" onClick={slidePrev}></div>
        <div className="swiper-button-next" onClick={slideNext}></div>
      </div>
    </>
  );
}

export class KingsleyFrame extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <img src={KingsleyFrameImg} className="KingsleyFrameImg" />;
  }
}
export class DragonEnergy extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <img src={DragonEnergyImg} className="KingsleyFrameImg" />;
  }
}
export class Isorade extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <img src={IsoradeImg} className="KingsleyFrameImg" />;
  }
}
export class IsoradeImg2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <img src={IsoradeImgAlt} className="KingsleyFrameImg" />;
  }
}

export class Blueberry extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Blueberry">
        <img src={BlueBerryImg} className="KingsleyFrameImg" />
        <p>Blueberry</p>
        <a href="#">Where to buy</a>
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
      <div className="Blueberry">
        <img src={BlueberryBigImg} className="KingsleyFrameImg" />
        <p>Blueberry</p>
        <a href="#">Where to buy</a>
      </div>
    );
  }
}

export class TropicalBig extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Blueberry">
        <img src={TropicalBigImg} className="KingsleyFrameImg" />
        <p>Blueberry</p>
        <a href="#">Where to buy</a>
      </div>
    );
  }
}

export class Naartjie extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Blueberry">
        <img src={NaartjieImg} className="KingsleyFrameImg" />
        <p>Blueberry</p>
        <a href="#">Where to buy</a>
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
      <div className="Blueberry">
        <img src={MixedBerryImg} className="KingsleyFrameImg" />
        <p>Blueberry</p>
        <a href="#">Where to buy</a>
      </div>
    );
  }
}

export class Grape extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Blueberry">
        <img src={GrapeImg} className="KingsleyFrameImg" />
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
        <img src={TropicalImg} className="KingsleyFrameImg" />
        <p>Tropical flavoured sports drink</p>
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
        <img src={EnergyDrinkImg} className="KingsleyFrameImg" />
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
        <img src={IceTeaImg} className="KingsleyFrameImg" />
        <p>Carter's Ice Tea</p>
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

SwiperCore.use([Navigation, Pagination]);

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
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          pagination={{
            clickable: true,
          }}
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

        <div className="swiper-button-prev" onClick={slidePrev}></div>
        <div className="swiper-button-next" onClick={slideNext}></div>
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

export class Email extends React.Component {
  render() {
    return <img src={EmailImg} />;
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
    return (
      <div className="GreenBackground">
        <img src={GreenBackgroundImg} className="GreenBackgroundImg" />
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

export class GreenBackground2 extends React.Component {
  render() {
    return (
      <div className="GreenBackground">
        <img src={BestImg} className="GreenBackgroundImg" />
      </div>
    );
  }
}
