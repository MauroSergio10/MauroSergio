import React from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState("Sobre");  // Estado para o item ativo

  const menuItems = ["Sobre", "Skill", "Projects"];

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => document.getElementById(item));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          setActiveItem(menuItems[index]);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuItems]);

  const handleClick = (item) => {
    const section = document.getElementById(item);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 50, // Ajuste o valor para o offset desejado
        behavior: "smooth"
      });
      setActiveItem(item);
    }
  };

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-gray-900"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <AcmeLogo className="text-white" /> {/* Logotipo Acme branco */}
          <p className="font-bold text-white">ACME</p> {/* Texto Acme branco */}
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 w-screen" justify="center">
        <NavbarBrand>
          <p className="font-bold text-white">ACME</p> {/* Texto Acme branco */}
        </NavbarBrand>
        <div className="flex w-[60%] justify-between font-serif">
          {menuItems.map((item) => (
            <NavbarItem key={item}>
              <Link
                href={`#${item}`}
                className={`
                  ${activeItem === item ? "text-cyan-400" : "text-white"} 
                  font-semibold
                `}
                onClick={(e) => {
                  e.preventDefault(); // Previne o comportamento padrão do link
                  handleClick(item);
                }}
              > 
                {item}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={index === 1 ? "warning" : "foreground"} // Destaque para "Skill" no menu
              href={`#${item}`}
              size="lg"
              onClick={(e) => {
                e.preventDefault(); // Previne o comportamento padrão do link
                handleClick(item);
              }}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
