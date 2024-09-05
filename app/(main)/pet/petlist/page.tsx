import PetListCardPage from "./petListCard";


export default function PetListPage() {
  return (
    <div className='container m-auto mt-10' >
      <div className='justify-items-center -ml-9 grid  xl:grid-cols-4 md:grid-cols-2 sm:gap-0 sm:grid-cols-1 md:gap-2   ' >
        <PetListCardPage/>
      </div >

    </div>
  )
}
