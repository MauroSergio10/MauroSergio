import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com'; // Importando o SDK

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dn3ylur', 'template_adx3pu5', e.target, 'VV6fWx3od9TlKEMCo')
      .then((result) => {
          console.log(result.text);
          alert("Mensagem enviada com sucesso!"); 
      }, (error) => {
          console.log(error.text);
          alert("Erro ao enviar mensagem. Tente novamente mais tarde.");
      });
  };
  
  return (
    <div id="Contato" className="bg-gray-800 py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-cyan-400 mb-4">Entre em Contato</h2>
        <p className="text-white text-lg mb-8">
          Estou sempre aberto a novas oportunidades e colaborações. Se você quiser discutir um projeto, compartilhar ideias, fique à vontade para entrar em contato!
        </p>

        <div className="flex flex-col items-center space-y-4 mb-8">
          <div className="flex items-center space-x-3">
            <FontAwesomeIcon icon={faEnvelope} size="2x" className="text-cyan-400" />
            <a 
              href="mailto:maurosergiocantuaria@gmail.com?subject=Contato&body=Olá Mauro,"
              className="text-cyan-400 hover:text-cyan-600 text-lg"
            >
              maurosergiocantuaria@gmail.com
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <FontAwesomeIcon icon={faPhone} size="2x" className="text-cyan-400" />
            <a 
              href="https://wa.me/5561999594718"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-600 text-lg"
            >
              +55 61 99959-4718
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <FontAwesomeIcon icon={faGithub} size="2x" className="text-cyan-400" />
            <a 
              href="https://github.com/MauroSergio10?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-600 text-lg"
            >
              github.com/MauroSergio10
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-cyan-400" />
            <a 
              href="https://www.linkedin.com/in/mauro-sergio-15a60a19a/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-600 text-lg"
            >
              linkedin.com/in/mauro-sergio-15a60a19a
            </a>
          </div>
        </div>

        <form onSubmit={sendEmail} className="w-full max-w-lg mx-auto space-y-4">
          <div className="flex flex-col">
            <label className="text-white text-left" htmlFor="name">Nome</label>
            <input
              id="name"
              name="name" // Certifique-se de que o nome do campo corresponde ao esperado no template do EmailJS
              type="text"
              className="p-2 rounded-md bg-gray-900 text-white border border-cyan-400 focus:ring-2 focus:ring-cyan-600"
              placeholder="Seu nome"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white text-left" htmlFor="email">Email</label>
            <input
              id="email"
              name="email" // Certifique-se de que o nome do campo corresponde ao esperado no template do EmailJS
              type="email"
              className="p-2 rounded-md bg-gray-900 text-white border border-cyan-400 focus:ring-2 focus:ring-cyan-600"
              placeholder="Seu email"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white text-left" htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              name="message" // Certifique-se de que o nome do campo corresponde ao esperado no template do EmailJS
              rows="4"
              className="p-2 rounded-md bg-gray-900 text-white border border-cyan-400 focus:ring-2 focus:ring-cyan-600"
              placeholder="Escreva sua mensagem"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 rounded-md bg-cyan-400 text-gray-900 font-bold hover:bg-cyan-600"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </div>
  );
}
