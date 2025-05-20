import { type FC } from 'react';

interface SpecialBoxProps {
    titre?: string;
    icones?: string;
    details?: string;

}

const SpecialBox: FC<SpecialBoxProps> = ({ titre, icones, details }) => {
    return (
        <div className="flex flex-col h-40 max-sm:h-56 my-2 border-t-4 border-black p-4 bg-white text-black transition-colors duration-300 relative cursor-pointer group hover:bg-black hover:text-white focus-within:bg-black focus-within:text-white max-sm:invert">
            <div className="flex flex-row items-center justify-between">
                <span className="font-bold text-lg text-wrap">{titre}</span>
                <img src={icones} alt="icon" className="w-10 h-10 transition group-hover:invert" />
            </div>
            <div className="opacity-0 max-h-0 overflow-hidden transition-all duration-300 mt-2 group-hover:opacity-100 group-hover:max-h-40 group-focus-within:opacity-100 group-focus-within:max-h-40
            max-sm:opacity-100 max-sm:min-h-40 max-sm:max-h-72">
                {details}
            </div>
        </div>
    );
};

export default SpecialBox;
