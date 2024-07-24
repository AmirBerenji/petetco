import Image from 'next/image';


interface Props {
    className?: string;
  }

export default function MainPic(prop: Props) {
  return (
    <div className={prop.className} >

        <Image src="/assets/categoryimages/banner/circelPink.png" width="560" height="560" alt="hero 1" className='absolute top-0 left-32' />
        <Image src="/assets/categoryimages/banner/circulePurpel.png" width="800" height="800" alt="hero 1" className="z-0 absolute -bottom-14 lg:right-56 right-2 " />
        <Image src="/assets/categoryimages/banner/dogBanner.png" width="744" height="900" alt="hero 1" className=" z-10 absolute -bottom-16 lg:right-56 right-2 " />
    </div>

    
  )
}
