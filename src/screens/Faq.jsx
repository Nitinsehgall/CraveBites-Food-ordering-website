import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Faq() {

  return (
    <div className='relative top-10 p-10 bg-gradient-to-r from-green-400 to-blue-500'>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Frequently asked questions</h2>
          <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
            <div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  What is CraveBites?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  CraveBites was born out of a passion for culinary excellence and the desire to make delicious food accessible to everyone. Our founders, food enthusiasts themselves, noticed a gap in the market for a reliable, user-friendly food ordering platform that offers a diverse range of cuisines. From this vision, CraveBites was created, aiming to connect customers with their favorite local restaurants and new culinary discoveries.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  At CraveBites, we believe that food is not just about sustenance but an experience to be savored and enjoyed. Our mission is to bring the world’s flavors right to your doorstep with just a few clicks. Whether you're craving comfort food, international cuisine, or something sweet, we've got you covered.
                </p>
              </div>
            </div>
            <div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  How does CraveBites work?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  CraveBites allows you to browse through a variety of local restaurants and their menus conveniently from your computer or mobile device. Once you've made your selection, you can place your order directly through our platform. Our goal is to simplify the food ordering process and ensure that you have a seamless experience from start to finish.
                </p>
              </div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  Why choose CraveBites?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  CraveBites stands out for its commitment to quality, convenience, and variety. We partner with local restaurants to offer a wide range of cuisines, ensuring that you can find something to satisfy your cravings. Whether you're ordering for yourself, your family, or a group of friends, CraveBites is designed to make your dining experience enjoyable and hassle-free.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Faq;
