import React, { useState } from 'react';
import { X, ZoomIn, Filter, Building, Users, Briefcase, Award, Target, Monitor } from 'lucide-react';
import { galleryImages } from '../utils/images';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryData = [
    {
      id: 1,
      src: galleryImages.gallery1,
      title: "Moderne Büroräume Leipzig",
      category: "office",
      description: "Unser modernes Büro in Leipzig mit innovativer Arbeitsplatzgestaltung für optimale Produktivität"
    },
    {
      id: 2,
      src: galleryImages.gallery2,
      title: "Expertenteam bei der Arbeit",
      category: "team",
      description: "Andreas Scobel und unser engagiertes Team bei der täglichen Analyse von Ausschreibungen"
    },
    {
      id: 3,
      src: galleryImages.gallery3,
      title: "Bauprojekte",
      category: "projects",
      description: "Dokumentation erfolgreicher Ausschreibungsprojekte im Baubereich unserer Kunden"
    },
    // {
    //   id: 4,
    //   src: galleryImages.gallery4,
    //   title: "Portal Dashboard",
    //   category: "technology",
    //   description: "Modernste Technologie für die 24/7 Analyse von Ausschreibungsdaten aus über 100 Quellen"
    // },
    // {
    //   id: 5,
    //   src: galleryImages.gallery5,
    //   title: "Strategische Beratung",
    //   category: "office",
    //   description: "Strategische Besprechungen zur kontinuierlichen Optimierung unserer Services"
    // },
    {
      id: 6,
      src: galleryImages.gallery6,
      title: "Kundenberatung",
      category: "team",
      description: "Roberto da Silva bei der persönlichen Beratung und Betreuung unserer Kunden"
    },
    {
      id: 7,
      src: galleryImages.gallery7,
      title: "Schienenverkehr Projekte",
      category: "projects",
      description: "Spezialisierte Ausschreibungen für Schienenverkehr und Infrastruktur-Projekte"
    },
    {
      id: 8,
      src: galleryImages.gallery8,
      title: "Digitale Sicherheit",
      category: "technology",
      description: "Höchste Sicherheitsstandards für den Schutz Ihrer sensiblen Ausschreibungsdaten"
    },
    // {
    //   id: 9,
    //   src: galleryImages.gallery9,
    //   title: "20 Jahre Expertise",
    //   category: "awards",
    //   description: "Anerkennungen für unsere herausragenden Leistungen im Ausschreibungsmanagement"
    // },
    // {
    //   id: 10,
    //   src: galleryImages.gallery10,
    //   title: "Kontinuierliche Innovation",
    //   category: "team",
    //   description: "Unser Team arbeitet stetig an innovativen Lösungen für bessere Ausschreibungsergebnisse"
    // }
  ];

  const filters = [
    { id: 'all', label: 'Alle', icon: Filter },
    { id: 'office', label: 'Büro', icon: Building },
    { id: 'team', label: 'Team', icon: Users },
    { id: 'projects', label: 'Projekte', icon: Briefcase },
    { id: 'technology', label: 'Technologie', icon: Monitor },
    // { id: 'awards', label: 'Erfolge', icon: Award }
  ];

  const filteredImages = activeFilter === 'all' 
    ? galleryData 
    : galleryData.filter(img => img.category === activeFilter);

  

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
      
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-gray-900 mb-4">
            Einblicke in unser Unternehmen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entdecken Sie unser Team, unsere modernen Büroräume und Projekte.
          </p>
        </div>

     
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center space-x-2 px-6 py-2 rounded-xl font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              <filter.icon size={18} />
              <span>{filter.label}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredImages.map((image, index) => (
            <div
              key={`${image.id}-${activeFilter}`}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
              onClick={() => setSelectedImage(image)}
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
               
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                    <ZoomIn className="text-white" size={24} />
                  </div>
                </div>

                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                    {filters.find(f => f.id === image.category)?.label}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                  {image.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[70vh] object-contain"
            />
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )} */}

      
    </section>
  );
};

export default Gallery;