import{ type FC } from "react";

type ProjectBoxProps = {
    title: string;
    description: string;
    imageUrl: string;
};

const ProjectBox: FC<ProjectBoxProps> = ({ title, description, imageUrl }) => (
    <div
        className="relative group cursor-pointer rounded-lg overflow-hidden border border-gray-200 transition-colors duration-300
        h-[400px] w-[300px] max-sm:h-[300px] max-sm:w-[190px] max-sm:rounded-md max-sm:items-center max-sm:justify-center"
        style={{ minHeight: 180 }}
    >
        {/* Background image */}
        <div
            className="absolute inset-0 bg-center flex flex-col bg-cover transition-opacity duration-300"
            style={{ backgroundImage: `url(${imageUrl})` }}
        />
        {/* Black overlay sur hover */}
        <div className="absolute inset-0 backdrop-blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 max-sm:items-center max-sm:justify-center">
            <h3 className="text-2xl text-white text-center font-bold mb-2 group-hover:text-white transition-colors duration-300 max-sm:text-center">
                {title}
            </h3>
            <p className="text-gray-700 opacity-0 group-hover:opacity-100 group-hover:text-white transition-opacity duration-300 text-center max-sm:hidden">
                {description}
            </p>
        </div>
    </div>
);

export default ProjectBox;