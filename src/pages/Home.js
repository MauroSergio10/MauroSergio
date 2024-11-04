import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Image } from "@nextui-org/react";
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import eu from "../assets/svg/image/eu.webp"
import { faGithub, faLinkedin, faReact, faJsSquare, faHtml5, faCss3Alt, faNodeJs, faPython, faSass, faDribbble } from '@fortawesome/free-brands-svg-icons'; // Corrigido aqui
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import projetos from "../ListaCard.json";
import TailwindIcon from "../assets/svg/tailwind-css.svg";

export default function Home() {
  const skills = [
    { name: 'JavaScript', icon: faJsSquare },
    { name: 'React', icon: faReact },
    { name: 'HTML5', icon: faHtml5 },
    { name: 'CSS3', icon: faCss3Alt },
    { name: 'Node.js', icon: faNodeJs },
    { name: 'Python', icon: faPython },
    { name: 'GitHub', icon: faGithub },
    { name: 'Sass', icon: faSass },
    { name: 'Tailwind CSS', icon: TailwindIcon },
    { name: 'Next UI', icon: faReact },
  ];

  const stackColors = {
    'React': 'bg-blue-400',
    'JavaScript': 'bg-yellow-400',
    'HTML5': 'bg-red-400',
    'CSS3': 'bg-blue-500',
    'Node.js': 'bg-green-400',
    'Python': 'bg-blue-300',
    'GitHub': 'bg-gray-500',
  };

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
      {/* Sobre Mim */}
      <div id="Sobre" className="w-full flex md:flex-row flex-col justify-center align-middle bg-gradient-to-r p-12 pt-32 pb-32">
        <div className="w-full md:w-2/3 p-4 md:p-8 md:pl-px-6 md:max-w-4xl">
          <h1 className="pb-4 text-xl font-semibold">SOBRE MIM</h1>
          <p className="py-4">Sou Mauro, um desenvolvedor full stack com experiência em bots, desenvolvimento web e especializado na criação de interfaces modernas e funcionais.</p>
          <p>Com formação em Engenharia de Software e experiência no desenvolvimento de projetos pessoais e sistemas de gerenciamento, busco constantemente aprender novas tecnologias, ampliando minha versatilidade.</p>
        </div>
        <div className="flex justify-center items-center">
          <div className="relative w-48 h-96 bg-black rounded-3xl shadow-lg flex flex-col items-center justify-center">
            <div className="w-44 h-80 bg-yellow-900 mt-4 rounded-xl flex flex-col items-center justify-center space-y-4">
              <img
                src={eu}
                alt="Descrição da imagem"
                style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  objectFit: 'cover'
                }}
              />
              <h2 className="text-white text-lg">Mauro Sérgio</h2>
              <div className="flex space-x-4">
                <a href="mailto:maurosergiocantuaria@gmail.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faEnvelope} size="lg" color="#fff" />
                </a>
                <a href="https://github.com/MauroSergio10" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} size="lg" color="#fff" />
                </a>
                <a href="https://www.linkedin.com/in/mauro-sergio-15a60a19a/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" color="#fff" />
                </a>
                <a href="https://dribbble.com/MauroSergioC" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faDribbble} size="lg" color="#fff" />
                </a>
              </div>
            </div>
            <div className="absolute top-2 w-2.5 h-2.5 bg-gray-500 rounded-full"></div>
            <div className="absolute bottom-4 w-12 h-2 bg-gray-500 rounded-full"></div>
            <div className="absolute top-20 left-0 flex flex-col space-y-3">
              <div className="w-1.5 h-10 bg-gray-500 rounded"></div>
              <div className="w-1.5 h-10 bg-gray-500 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills - Carrossel com Swiper */}
      <div id="Skill" className="bg-gray-800 py-10">
        <h1 className="text-center text-white text-xl md:text-3xl font-bold mb-6">Skills</h1>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30} // Você pode ajustar esse valor conforme necessário
          slidesPerView={5} // Defina o valor padrão para 5
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={2000}
          loop={true}
          className="w-full max-w-full"
          breakpoints={{
            1024: { slidesPerView: 5 }, // Para desktops
            768: { slidesPerView: 4 },  // Para tablets
            640: { slidesPerView: 3 },  // Para celulares
            480: { slidesPerView: 2 },   // Para telas muito pequenas
          }}
        >

          {skills.concat(skills).map((skill, index) => (
            <SwiperSlide key={index} className="flex flex-col items-center justify-center p-4">
              {typeof skill.icon === 'object' ? (
                <FontAwesomeIcon icon={skill.icon} size="4x" className="text-cyan-400" />
              ) : (
                <img src={skill.icon} alt={skill.name} className="w-16 h-16" />
              )}
              <h3 className="text-white text-base mt-4 text-center">{skill.name}</h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Projects */}
      <div className="flex justify-center">
        <div id="Projects" className="w-full p-4 md:p-8">
          <h1 className="text-center text-white md:text-3xl text-xl font-bold mb-12">Projetos</h1>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 py-4">
            {projetos.map((projeto) => (
              <div key={projeto.id} className="bg-gray-900 p-4 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 w-[100%] md:w-[90%]">
                <Image alt={projeto.title} className="object-cover md:w-360 md:h-100 w-100 w-200 transition-transform duration-300 transform hover:scale-125" src={projeto.image} />
                <div className="p-4">
                  <h3 className="font-bold text-cyan-400 text-sm">{projeto.title}</h3>
                  <p className="text-white text-xs md:text-base">{projeto.description}</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <a href={projeto.link} className="text-cyan-400 hover:text-cyan-600 font-bold text-sm" target="_blank" rel="noopener noreferrer">Ver projetos</a>
                  <div className="hidden md:flex">
                    {projeto.techStack.map((tech, i) => (
                      <span key={i} className={`px-2 py-1 ${stackColors[tech] || 'bg-gray-500'} text-white rounded-md text-xs mr-1`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contato */}
      <div id="Contato" className="bg-gray-800 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-bold text-cyan-400 mb-6 text-xl md:text-3xl">Entre em Contato</h2>
          <p className="text-white mb-8 text-sm md:text-base">
            Estou sempre aberto a novas oportunidades e colaborações. Se você quiser discutir um projetos, compartilhar ideias, fique à vontade para entrar em contato!
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
