import { type FC } from 'react'


interface SeparateurProps{
    numero?: string,
    titre?: string,
    annee?: string,
}

const Separateur:FC<SeparateurProps> = ({numero, titre, annee}) => {
  return (
    <div className="flex flex-row items-center justify-between w-full bg-white text-[#333232] font-mono border-b border-gray-300 shadow-2xl">
        <div className="flex flex-row w-2/3 items-center justify-start gap-x-1">
          <h1 className='text-xs font-light'>{numero}</h1>
          <h2 className='text-xl font-normal'>{titre}</h2>
        </div>

        <div className='flex flex-row items-center justify-between w-1/3 gap-x-2'>
          <h3 className='text-xl font-normal'>{annee}</h3>
        </div>

    </div>
  )
}

export default Separateur