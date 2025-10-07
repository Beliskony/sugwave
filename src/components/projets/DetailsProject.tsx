import { type FC, useState } from "react";
import { MapPin, Calendar, User, CheckCircle, X } from "lucide-react";
import { type IProject } from "../../data/ProjectData";

type ProjectDetailsProps = {
  project: IProject;
};

const ProjectDetails: FC<ProjectDetailsProps> = ({ project }) => {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  return (
    <section className="flex flex-col w-full bg-white rounded-2xl shadow-lg overflow-hidden mb-10">
      {/* Image de couverture */}
      <div className="relative h-[400px] w-full">
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h2 className="text-4xl font-bold text-white text-center px-4">
            {project.title}
          </h2>
        </div>
      </div>

      {/* Contenu texte */}
      <div className="p-4 flex flex-col gap-6">
        {/* Description */}
        <p className="text-lg text-gray-700 leading-relaxed">
          {project.description || "Pas de description disponible."}
        </p>

        {/* Infos projet */}
        <div className="grid grid-cols-2 gap-4 text-gray-600 max-sm:grid-cols-1">
          {project.client && (
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-black" />
              <span>
                Client : <strong>{project.client}</strong>
              </span>
            </div>
          )}
          {project.location && (
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-black" />
              <span>
                Lieu : <strong>{project.location}</strong>
              </span>
            </div>
          )}
          {project.date && (
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-black" />
              <span>
                Date : <strong>{project.date}</strong>
              </span>
            </div>
          )}
          {project.status && (
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-black" />
              <span>
                Statut : <strong>{project.status}</strong>
              </span>
            </div>
          )}
        </div>

        {/* Galerie */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mt-6">
            <h3 className="text-2xl font-semibold mb-4">Galerie</h3>
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
              {project.gallery.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${project.title} - ${index + 1}`}
                  className="w-36 h-24 md:w-48 md:h-32 flex-shrink-0 rounded-lg object-cover shadow cursor-pointer hover:opacity-80 transition"
                  onClick={() => setFullscreenImage(img)} // 👈 ouvre l'image en plein écran
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Fullscreen Lightbox */}
      {fullscreenImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <button
            className="absolute top-5 right-5 text-white p-2 bg-black/50 rounded-full hover:bg-black transition"
            onClick={() => setFullscreenImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={fullscreenImage}
            alt="Fullscreen"
            className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}
    </section>
  );
};

export default ProjectDetails;
