import React from "react";
import FullHeader from "../components/FullHeader";
import Image from "next/image";
import Ceremics from "../components/Ceremics";
import Popular from "../components/Popular";
import Footer from "../components/Footer";

const AllProduct = () => {
  return (
    <div>
        {/* Full Header */}
         <FullHeader />
    <div className="w-full h-auto flex flex-col items-center px-4">
      
     

      {/* Main Product Image */}
      <div className="w-full max-w-[1440px] h-auto my-6">
        <Image
          src="/images/product.png"
          alt="product"
          width={1210}
          height={1000}
          layout="responsive"
          priority
        />
      </div>

      {/* Tab Image */}
      <div className="w-full max-w-[740px] h-auto mb-6">
        <Image
          src="/images/tab2.png"
          alt="product"
          width={1000}
          height={1000}
          layout="responsive"
          className="ml-[10px]"
        />
      </div>

      {/* Ceramics Section */}
      <div className="w-full max-w-[1440px] mb-6">
        <Ceremics />
      </div>

      {/* Second Product Image */}
      <div className="w-full max-w-[1440px] h-auto mb-6">
        <Image
          src="/images/product2.png"
          alt="product"
          width={1210}
          height={1000}
          layout="responsive"
          className="ml-[20px]"
        />
      </div>

      {/* Popular Section */}
      <div className="w-full max-w-[1440px] mb-6">
        <Popular />
      </div>

      {/* Footer */}
      <div className="w-full max-w-[1440px]">
       
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllProduct;
