import React, { useState } from "react";
import Header from '../components/Header';
import Slider from "react-slick";
import ListaCard from '../components/ListaCard';
import MySVG from '../assets/svg/undraw_mobile_messages_re_yx8w.svg'
import emailjs from 'emailjs-com'; // Importando o SDK
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faReact, faJsSquare, faHtml5, faCss3Alt, faNodeJs, faPython } from '@fortawesome/free-brands-svg-icons';
import { faDribbble } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Home() {

  const skills = [
    { name: 'JavaScript', icon: faJsSquare },
    { name: 'React', icon: faReact },
    { name: 'HTML5', icon: faHtml5 },
    { name: 'CSS3', icon: faCss3Alt },
    { name: 'Node.js', icon: faNodeJs },
    { name: 'Python', icon: faPython },
    { name: 'GitHub', icon: faGithub },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 6000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    draggable: false,
    swipe: false,
    touchMove: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } },
    ],
  };

  const projects = [
    { title: "Projeto 1", image: "/path/to/image1.jpg" },
    { title: "Projeto 2", image: "/path/to/image2.jpg" },
    // Adicione mais projetos conforme necessário
  ];

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
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <Header />

      {/* Currículo */}
      <div className="flex flex-col md:flex-row p-8 md:p-20 space-y-4 md:space-y-0 md:space-x-4">
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4">
          <div>
            <h1 className="text-cyan-400 font-semibold text-sm">Lorem Ipsum</h1>
            <h1 className="text-2xl font-semibold">Mauro Sergio</h1>
          </div>
          <div className="space-y-4 pb-4">
            <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
            <button className="border-2 border-cyan-400 rounded-md py-2 px-4 text-cyan-400 font-semibold">
              Baixar currículo
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img src={MySVG} alt="Ilustração" className="w-[70%] h-auto" /> {/* Usando o SVG como imagem */}
        </div>
      </div>

      {/* Sobre Mim */}
      <div id="Sobre" className="w-full flex md:flex-row-reverse flex-col justify-center align-middle bg-gray-900 p-8">
        <div className="w-full md:w-2/3 p-4 md:p-8">
          <h1 className="pb-4 text-xl font-semibold">SOBRE</h1>
          <p className="py-2">Conheça um pouco sobre mim.</p>
          <p>Sou um desenvolvedor full stack com experiência em React, Typescript, Tailwind, PostgreeSQL e NextUI, especializado na criação de interfaces modernas e funcionais. Com formação em Engenharia de Software e prática em desenvolvimento de projetos pessoais e sistemas de gerenciamento, estou sempre aprendendo novas tecnologias para expandir minhas capacidades. Busco aplicar minhas habilidades para resolver problemas complexos e entregar soluções inovadoras.</p>
        </div>
        <div className="flex w-full md:w-1/3 flex-col items-center space-y-4">
          <FontAwesomeIcon icon={faUser} className="text-cyan-400 w-16 h-16 md:w-24 md:h-24" />
          <h2 className="text-white text-xl">Mauro Sérgio</h2>
          <div className="flex space-x-4 text-cyan-400">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
            <FontAwesomeIcon icon={faGithub} size="2x" />
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
            <FontAwesomeIcon icon={faDribbble} size="2x" />
          </div>
        </div>
      </div>

      {/* Skills - Carrossel */}
      <div id="Skill" className="bg-gray-800 py-10">
        <h1 className="text-center text-white text-xl md:text-3xl font-bold mb-6">Skills</h1>
        <Slider {...settings} className="w-full max-w-full overflow-hidden">
          {skills.concat(skills).map((skill, index) => (
            <div key={index} className="flex flex-col items-center p-4 justify-center">
              <FontAwesomeIcon icon={skill.icon} size="4x" className="text-cyan-400" />
              <h3 className="text-white text-base mt-4">{skill.name}</h3>
            </div>
          ))}
        </Slider>
      </div>

      {/* Projects */}
      <div className="flex justify-center">
        <div id="Projects" className="w-full p-4 md:p-8">
          <h1 className="text-center text-white md:text-3xl text-xl font-bold">Projetos</h1>
          <div className="flex justify-center"><ListaCard /></div>
        </div>
      </div>

      {/* Contato */}
      <div id="Contato" className="bg-gray-800 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-bold text-cyan-400 mb-4 text-xl md:text-3xl">Entre em Contato</h2>
          <p className="text-white mb-8 text-sm md:text-base">
            Estou sempre aberto a novas oportunidades e colaborações. Se você quiser discutir um projeto, compartilhar ideias, fique à vontade para entrar em contato!
          </p>

          <div className="flex flex-col items-center space-y-4 mb-8">
            <div className="flex items-center space-x-3">
              <FontAwesomeIcon icon={faEnvelope} size="2x" className="text-cyan-400" />
              <a
                href="mailto:maurosergiocantuaria@gmail.com?subject=Contato&body=Olá Mauro,"
                className="text-cyan-400 hover:text-cyan-600 text-sm md:text-base"
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
                className="text-cyan-400 hover:text-cyan-600 text-sm md:text-base"
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
                className="text-cyan-400 hover:text-cyan-600 text-sm md:text-base"
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
                className="text-cyan-400 hover:text-cyan-600 text-sm md:text-base"
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
                className="p-2 rounded-md bg-gray-900 text-white border border-cyan-400 focus:ring-2 focus:ring-cyan-600 text-sm"
                placeholder="Seu nome"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white text-left" htmlFor="email">Email</label>
              <input
                id="email"
                name="email" // Certifique-se de que o nome do campo corresponde ao esperado no template do EmailJS
                type="email"
                className="p-2 rounded-md bg-gray-900 text-white border border-cyan-400 focus:ring-2 focus:ring-cyan-600 text-sm"
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
    </div>
  );
}
