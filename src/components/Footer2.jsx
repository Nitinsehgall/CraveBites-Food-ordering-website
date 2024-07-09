import { Crousal } from "./Crousal"

const stats = [
    { id: 1, name: 'Enjoy meals made from the freshest ingredients, sourced locally and prepared with care to ensure the best taste and quality.', value: 'Fresh Ingredients' },
    { id: 2, name: 'Check our delivery areas to see if CraveBites is available in your neighborhood, and find out how quickly we can get your meal to you.', value: 'Delivery in Zones' },
    { id: 3, name: 'Discover a variety of delicious dishes from our diverse menu, carefully crafted to satisfy every craving.', value: 'Explore Our Menu' },
  ]
  
  export default function Footer2() {
    return (
      <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      </>
    )
  }
  