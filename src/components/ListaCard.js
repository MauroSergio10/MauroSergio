import React from "react";
import { Image } from "@nextui-org/react";
import projetos from '../ListaCard.json'; // Importa o JSON diretamente

export default function ListaCard() {
  return (
    <div className="container flex justify-center">
      {/* Ajusta o grid para ficar responsivo em diferentes tamanhos de tela */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 py-8">
        {projetos.map((projeto) => (
          <div 
            key={projeto.id} 
            className="bg-gray-900 p-4 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 w-[100%] md:w-[90%]"
          >
            <Image
              alt={projeto.title}
              className="object-cover md:w-360 md:h-100 w-100 w-200"
              src={projeto.image}
            />
            <div className="p-4">
              <h3 className="font-bold text-cyan-400 text-sm">{projeto.title}</h3>
              <p className="text-white text-xs md:text-base">{projeto.description}</p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <a 
                href={projeto.link} 
                className="text-cyan-400 hover:text-cyan-600 font-bold text-sm"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Ver Projeto
              </a>
              <p className="md:text-base text-gray-400">{projeto.techStack}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
