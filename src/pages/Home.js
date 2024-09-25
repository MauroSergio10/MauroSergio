import React from "react";
import Header from '../components/Header';
import Contato from '../components/contato';
import curriculumImage from '../assets/images/curriculoImagem.avif';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedin, faReact, faJsSquare, faHtml5, faCss3Alt, faNodeJs, faPython } from '@fortawesome/free-brands-svg-icons';
import Slider from "react-slick";
import ListaCard from '../components/ListaCard';
import { faDribbble } from '@fortawesome/free-brands-svg-icons';

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
          <div className="space-y-4">
            <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
            <button className="border-2 border-cyan-400 rounded-md py-2 px-4 text-cyan-400 font-semibold">
              Baixar currículo
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img src={curriculumImage} className="max-h-full w-full object-cover" alt="Currículo" />
        </div>
      </div>

      {/* Sobre Mim */}
      <div id="Sobre" className="w-full flex flex-col md:flex-row bg-gray-900 p-8">
        <div className="w-full md:w-1/3 flex flex-col items-center space-y-4">
          <FontAwesomeIcon icon={faUser} size="6x" className="text-cyan-400" />
          <h2 className="text-white text-xl">Mauro Sérgio</h2>
          <div className="flex space-x-4 text-cyan-400">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
            <FontAwesomeIcon icon={faGithub} size="2x" />
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
            <FontAwesomeIcon icon={faDribbble} size="2x" />
          </div>
        </div>
        <div className="w-full md:w-2/3 p-4 md:p-8">
          <h1 className="pb-4 text-2xl font-semibold">SOBRE</h1>
          <p>Conheça um pouco sobre mim</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
        </div>
      </div>

      {/* Skills - Carrossel */}
      <div id="Skill" className="bg-gray-800 py-10">
        <h1 className="text-center text-white text-3xl font-bold mb-6">Skills</h1>
        <Slider {...settings} className="w-full max-w-full overflow-hidden">
          {skills.concat(skills).map((skill, index) => (
            <div key={index} className="flex flex-col items-center p-4 justify-center">
              <FontAwesomeIcon icon={skill.icon} size="4x" className="text-cyan-400" />
              <h3 className="text-white text-lg mt-4">{skill.name}</h3>
            </div>
          ))}
        </Slider>
      </div>

      {/* Projects */}
      <div className="flex justify-center">
        <div id="Projects" className="w-full p-4 md:p-8">
          <h1 className="text-center text-white text-3xl font-bold mb-6">Projetos</h1>
          <div><ListaCard /></div>
        </div>
      </div>

      {/* Contato */}
      <Contato />
    </div>
  );
}
