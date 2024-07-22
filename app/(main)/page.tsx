import Banner from '../component/banner/Banner'
import FirstPageCard from '../component/cards/FirstPageCards'
import FirsPageMiddleBox from '../component/middlebox/FirsPageMiddleBox'
import Image from 'next/image'
export default function Home() {
  return (
    <>
    <Banner />
    
    <section className='z-10 w-full border-t-8 border-t-[#F2968F]  block ' >
      <div className='grid grid-cols-1 lg:grid-cols-5 gap-5 md:grid-cols-5 items-center object-center' >
       <div className='block  ' >
          
       </div>
       <div className=' block mt-28 relative' >
          <Image src="/assets/categoryimages/section1/main.png" width="600" height="600" alt="hero 1" className='z-0 absolute' />
          <Image src="/assets/categoryimages/section1/number.png" width="100" height="100" alt="hero 1" className='z-10 absolute' />
       </div>
       <div className='block col-span-2 p-10' >
        <p className='font-bold'>MENTALLY HEALTHY</p>
        For many people, especially those who are lonely, having a pet can be a valuable source of comfort and company. Renting a pet gives lonely people the opportunity to enjoy the presence and love of a pet, which can significantly increase their mood and well-being at such a difficult time.
       </div>
       
       <div className='block' >
       </div>
      </div>
    </section>

  </>
  )
}
