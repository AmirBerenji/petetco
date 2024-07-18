import Image from 'next/image'
import Banner from '../component/banner/Banner'
import FirstPageCard from '../component/cards/FirstPageCards'
import FirsPageMiddleBox from '../component/middlebox/FirsPageMiddleBox'

export default function Home() {
  return (
    <>
    <Banner />
    <section>
      <div className='my-5 px-5 mx-auto mb-16' >

        <div className='grid grid-cols-1 lg:grid-cols-5 gap-5 md:grid-cols-5 items-center object-center' >

          <div
            className="block ">
          </div>

          <FirstPageCard imageSrc='/assets/categoryimages/petcare01.jpg' buttonText='More...' link='/' title='Add Routine Care' desc='You can set the notification for set the appointment for routine care of your pet. ' />
          <FirstPageCard imageSrc='/assets/02.jpg' buttonText='More...' link='/' title='Add Weight Your Pet' desc='You can add your pet weights for monitoring the weight in during the time.  ' />
          <FirstPageCard imageSrc='/assets/03.jpg' buttonText='Sign Up' link='user/register' title='Join Our Community' desc='Ready to take your pet ownership journey to the next level? Join our vibrant community of pet lovers from around the world. Share stories, seek advice, and connect with others who share your passion for creating a nurturing and loving environment for your pets.' />
          <div
            className="block ">
          </div>
        </div>
      </div>
    </section>


    <FirsPageMiddleBox color='bg-[#B1A296]'
      desc='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
      imageSrc='https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      link='/'
      title='OUR SERVICE' />

    <section>
      <div className='my-5 px-5 mx-auto mb-16' >

        <div className='grid grid-cols-1 lg:grid-cols-5 gap-5 md:grid-cols-5 items-center object-center' >

          <div
            className="block ">
          </div>
          <FirstPageCard imageSrc='/assets/categoryimages/petcare01.jpg' buttonText='More...' link='/' title='Add Routine Care' desc='You can set the notification for set the appointment for routine care of your pet. ' />
          <FirstPageCard imageSrc='/assets/02.jpg' buttonText='More...' link='/' title='Add Weight Your Pet' desc='You can add your pet weights for monitoring the weight in during the time.  ' />
          <FirstPageCard imageSrc='/assets/03.jpg' buttonText='More...' link='/' title='Add Routine Care' desc='You can set the notification for set the appointment for routine care of your pet. ' />

          <div
            className="block ">
          </div>
        </div>
      </div>
    </section>

    <FirsPageMiddleBox color='bg-[#7395AE]'
      desc='Ready to take your pet ownership journey to the next level? Join our vibrant community of pet lovers from around the world. Share stories, seek advice, and connect with others who share your passion for creating a nurturing and loving environment for your pets.'
      imageSrc='assets/02.jpg'
      link='#'
      title='Join Our Community' />

  </>
  )
}
