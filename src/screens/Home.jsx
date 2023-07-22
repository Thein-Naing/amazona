// import React from "react";
// import "../Style/Home.css";
// import Product from "../components/Product";
// // import amazonBanner from '../images/amazonBanner.jpg';
// import banner from '../images/banner.png'

// function Home() {
//     return(
//         <div className="home">
//             <div className="home_container">
//                 <img
//                     className="home_image"
//                     // src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB28684220_.jpg"
//                     // src={amazonBanner}
//                     // src={banner}
//                     src="	https://m.media-amazon.com/images/I/61NC10esvML._SX3000_.jpg"
//                     alt=""
//                 />


//                 <div className="home_row">
//                     <Product
//                         id='1'
//                         title="Sony PlayStation5 Console + Residental Evil 4"
//                         price={169.99}
//                         image="https://m.xcite.com/media/catalog/product/cache/1/small_image/350x/9df78eab33525d08d6e5fb8d27136e95/s/o/sony-playstation-5-console-resident-evil-village-lendticular-sleeve-nba-2k22-game-standard-edition-cod-vanguard-back-4-blood-special-edition.jpg"
//                         rating={5}
//                     />
//                     <Product
//                         id='2'
//                         title="DELL Alienware 6GB Geforce RTX2060 Core i7"
//                         price={734.900}
//                         image="https://m.xcite.com/media/catalog/product/cache/1/small_image/350x/9df78eab33525d08d6e5fb8d27136e95/l/a/laptop-alienware-15-mlk-pdp-8.jpg"
//                         rating={4}
//                     />
//                     <Product
//                         id='3'
//                         title="Funko POP! Games: Fortnite Midas Metallic..."
//                         price={6.550}
//                         image="https://m.xcite.com/media/catalog/product/cache/1/small_image/350x/9df78eab33525d08d6e5fb8d27136e95/f/u/fu52973_funko.jpg"
//                         rating={3}
//                     />
//                 </div>
//                 <div className="home_row">
//                     <Product
//                         id='4'
//                         title="Funko Pocket Pop & Tee: Fortnite >> Love..."
//                         price={12.000}
//                         image="https://m.xcite.com/media/catalog/product/cache/1/small_image/350x/9df78eab33525d08d6e5fb8d27136e95/1/5/1587147377628079363-800x800_726_821.jpg"
//                         rating={2}
//                     />
//                     <Product
//                         id='5'
//                         title="Apple iPhone 13 Pro Max 256GB - Gold (Dual SIM)"
//                         price={394.000}
//                         image="https://m.xcite.com/media/catalog/product/cache/1/small_image/350x/9df78eab33525d08d6e5fb8d27136e95/a/_/a_7_3.jpg"
//                         rating={5}
//                     />
//                 </div>
//                 <div className="home_row">
//                     <Product
//                         id='6'
//                         title="Samsung 49inch' Curved LED Gaming Monitor = Super Ultra Wide"
//                         price={1094.98}
//                         image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
//                         rating={5}
//                     />
//                 </div>
//             </div>
//         </div>

//     )
// }

// export default Home;


import React from "react";
import "../Style/Home.css";
import Product from "../components/Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="	https://m.media-amazon.com/images/I/61NC10esvML._SX3000_.jpg"
          alt=""
        />
        <div className="home_product">
          <Product
            id="1"
            title="Sony PlayStation5 Console + Residental Evil 5"
            price={499}
            image="https://m.media-amazon.com/images/I/51eOztNdCkL._SL300_.jpg"
            rating={5}
          />
          <Product
            id="2"
            title="Apple 2023 MacBook Air Laptop with M2 chip: 15.3-inch Liquid Retina Display"
            price={2734.9}
            image="https://m.media-amazon.com/images/I/81Fm0tRFdHL._AC_SL300_.jpg"
            rating={4}
          />
          <Product
            id="3"
            title="Apple Watch Series 7 GPS +:Cellular, 45mm Midnight..."
            price={329.95}
            image="https://m.media-amazon.com/images/I/51NV+STh2IL._AC_SL300_.jpg"
            rating={5}
          />
        </div><small></small>

        <div className="home_product">
          <Product
            id="4"
            title="18-Piece Kitchen Dinnerware Set: Service for 6, White Porcelain Coupe..."
            price={72.15}
            image="https://m.media-amazon.com/images/I/71t3ZbyVamL._AC_SL300_.jpg"
            rating={5}
          />
          <Product
            id="5"
            title="Apple iPhone 14, 256GB, Midnight - Unlocked (Renewed)"
            price={734.97}
            image="https://m.media-amazon.com/images/I/51Yz9FaNIGL._AC_SL300_.jpg"
            rating={5}
          />
        </div>
        <div className="home_product">
          <Product
            id="6"
            title="Motivational Water Bottle = 128 oz/3.8Le"
            price={100.99}
            image="https://m.media-amazon.com/images/I/71aKLlVFJNL._AC_SL400_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
