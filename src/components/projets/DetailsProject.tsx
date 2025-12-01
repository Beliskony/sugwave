import { type FC, useState, useEffect } from "react";
import { MapPin, Calendar, User, CheckCircle, X, Clapperboard, Image } from "lucide-react";
import { type IProject } from "../../data/ProjectData";
import ReactDOM from "react-dom";

type ProjectDetailsProps = {
  project: IProject;
};

type MediaItem = {
  type: 'image' | 'video';
  url: string;
};

// Composant Fullscreen séparé qui utilise Portal
const FullscreenLightbox: FC<{ 
  media: MediaItem; 
  onClose: () => void 
}> = ({ media, onClose }) => {
  useEffect(() => {
    // Désactiver le scroll du body quand le fullscreen est ouvert
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center p-4">
      {/* Bouton de fermeture */}
      <button
        className="absolute top-5 right-5 text-white p-2 bg-black/50 rounded-full hover:bg-black transition cursor-pointer z-50"
        onClick={onClose}
      >
        <X className="w-8 h-8" />
      </button>
      
      {/* Conteneur média */}
      <div className="w-full h-full flex items-center justify-center">
        {media.type === 'image' ? (
          <img
            src={media.url}
            alt="Fullscreen"
            className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
          />
        ) : (
          <video
            src={media.url}
            className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
            muted
            autoPlay
            loop
            playsInline
            controls
          />
        )}
      </div>
    </div>,
    document.body // Rendu directement dans le body, pas dans le composant parent
  );
};

const ProjectDetails: FC<ProjectDetailsProps> = ({ project }) => {
  const [fullscreenMedia, setFullscreenMedia] = useState<MediaItem | null>(null);

  // Fonction pour déterminer le type de média
  const getMediaType = (url: string): 'image' | 'video' => {
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi'];
    return videoExtensions.some(ext => url.toLowerCase().endsWith(ext)) 
      ? 'video' 
      : 'image';
  };

  // Convertir la galerie en format MediaItem
  const galleryMedia: MediaItem[] = (project.gallery || []).map(url => ({
    type: getMediaType(url),
    url: url
  }));

  return (
    <>
      <section className="flex flex-col w-full bg-white rounded-2xl shadow-lg overflow-hidden mb-10">
        {/* Image de couverture */}
        <div className="relative h-[400px] w-full">
          {getMediaType(project.coverImage) === 'image' ? (
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="bg-gray-600 w-full h-full flex items-center justify-center">
              <p className="text-white">Vidéo de couverture</p>
            </div>
          )}
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
          {galleryMedia.length > 0 && (
            <div className="mt-6">
              <h3 className="text-2xl font-semibold mb-4">Galerie</h3>
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
                {galleryMedia.map((media, index) => (
                  <div
                    key={index}
                    className="w-36 h-24 md:w-48 md:h-32 flex-shrink-0 rounded-lg shadow cursor-pointer hover:opacity-80 transition overflow-hidden relative"
                    onClick={() => setFullscreenMedia(media)}
                  >
                    {media.type === 'image' ? (
                      <img
                        src={media.url}
                        alt={`${project.title} - ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <video
                        src={media.url}
                        className="w-full h-full object-cover"
                        muted
                        autoPlay
                        loop
                        playsInline
                      />
                    )}
                    {/* Badge pour indiquer le type de média */}
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1 py-1 rounded">
                      {media.type === "image" ? <Image size={15}/> : <Clapperboard size={15}/>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Fullscreen Lightbox via Portal */}
      {fullscreenMedia && (
        <FullscreenLightbox 
          media={fullscreenMedia}
          onClose={() => setFullscreenMedia(null)}
        />
      )}
    </>
  );
};

export default ProjectDetails;