import React from "react";
import { Image } from "@nextui-org/react";
import projetos from '../ListaCard.json'; // Importa o JSON diretamente

export default function ListaCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 py-12">
      {projetos.map((projeto) => (
        <div 
          key={projeto.id} 
          className="bg-gray-900 p-4 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300"
        >
          <Image
            alt={projeto.title}
            className="object-cover rounded-t-lg"
            src={projeto.image}
            width={400}
            height={200}
          />
          <div className="p-4">
            <h3 className="font-bold text-xl text-cyan-400">{projeto.title}</h3>
            <p className="text-white text-sm">{projeto.description}</p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <a 
              href={projeto.link} 
              className="text-cyan-400 hover:text-cyan-600 font-bold"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Ver Projeto
            </a>
            <p className="text-sm text-gray-400">{projeto.techStack}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
  