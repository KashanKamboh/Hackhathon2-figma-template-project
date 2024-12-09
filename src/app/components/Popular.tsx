'use client'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Popular = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/productlisting'); // Navigates to the "/about" page
  };

  return (
    <>
      <section>
        <div className='px-8 py-12 text-[#2A254B] mt-12'>
          <h1 className='text-2xl'>Our popular products</h1>

          {/* Flexbox layout: stack on small screens, side by side on medium and large screens */}
          <div className='flex flex-col md:flex-row gap-8 mt-8'>
            
            {/* Product 1 */}
            <div className='w-full md:w-[700px] h-auto group'>
              <Image
                src={'/images/pic7.jpg'}
                height={800}
                width={800}
                alt='sofa'
                className='w-full h-[80%] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105'
              />
              <div className='mt-4 text-[#2A254B]'>
                <p className='py-2'>The popular suede sofa</p>
                <p>$980</p>
              </div>
            </div>

            {/* Product 2 */}
            <div className='w-full md:w-[350px] h-auto group'>
              <Image
                src={'/images/pic5.png'}
                height={800}
                width={800}
                alt='chair'
                className='w-full h-[80%] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105'
              />
              <div className='mt-4 text-[#2A254B]'>
                <p className='py-2'>The Dandy chair</p>
                <p>$250</p>
              </div>
            </div>

            {/* Product 3 */}
            <div className='w-full md:w-[350px] h-auto group'>
              <Image
                src={'/images/pic6.png'}
                height={900}
                width={900}
                alt='chair'
                className='w-full h-[80%] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105'
              />
              <div className='mt-4 text-[#2A254B]'>
                <p className='py-2'>The Dandy chair</p>
                <p>$250</p>
              </div>
            </div>

          </div>

          {/* View Collection Button */}
          <div className='my-10 flex justify-center items-center'>
             <Link href="/products"><button className='bg-[#2A254B] py-4 px-6 rounded-[5px] text-[#f9f9f9]' onClick={handleNavigation}>
              View products
            </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Popular;