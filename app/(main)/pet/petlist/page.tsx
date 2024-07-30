
import { Pet } from '@/app/models/pet';
import PetCard from './petCard';

interface Props {
  pet: Pet;
}


export default function PetListPage(prop: Props) {
  return (
    <div className='container m-auto mt-10' >
      <div className='justify-items-center -ml-9 grid  xl:grid-cols-4 md:grid-cols-2 sm:gap-0 sm:grid-cols-1 md:gap-2   ' >
        <PetCard />
        <PetCard />
        <PetCard />
      </div >

    </div>
  )
}
