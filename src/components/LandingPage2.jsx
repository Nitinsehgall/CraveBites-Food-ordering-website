import Items from "../content/Items";
import { Link } from "react-router-dom";
import Footer2 from "./Footer2";

const all = Items;
const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  // More products...
];

export default function LandingPage2() {
  console.log(Items);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Most purchased Items this months    
           <i className="text-yellow-400 fa-solid fa-star"></i>
           <i className="text-yellow-400 fa-solid fa-star"></i>
          <i class="text-yellow-400 fa-solid fa-star"></i>
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {all
            .filter((val, index, arr) => index < 4)
            .map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-50 lg:aspect-none group-hover:opacity-75 lg:h-80 LandingPage2Containers">
                  <Link to="/menu">
                    <p className="text-gray-950 text-xl text-center">
                    {product.name}: ₹{Object.values(product.options[0])[0]}
                    </p>
                    <img
                      className="h-full w-full object-contain lg:h-full lg:w-full "
                      alt={product.imageAlt}
                      src={product.src}
                      />
                  </Link>
                </div>
                <div className="mt-4 flex justify-between">
                 
                  <p className="text-sm font-medium text-gray-900 ">
                     
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
