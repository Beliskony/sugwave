import { type FC } from 'react'


interface SeparateurProps{
    numero?: string,
    titre?: string,
    description?: string,
    annee?: string,
}

const Separateur:FC<SeparateurProps> = ({numero, titre, description, annee}) => {
  return (
    <div className="flex flex-row items-center justify-between w-full bg-white text-[#333232] font-mono border-b border-gray-300 shadow-2xl">
        <div className="flex flex-row w-2/3 items-center justify-start gap-x-1">
          <h6 className='text-xs font-light'>{numero}</h6>
          <h5 className='text-xl font-normal'>{titre}</h5>
        </div>

        <div className='flex flex-row items-center justify-between w-1/3 gap-x-2'>
          <h5 className='text-xl font-normal'>{description}</h5>
          <h5 className='text-xl font-normal'>{annee}</h5>
        </div>

    </div>
  )
}

export default Separateur