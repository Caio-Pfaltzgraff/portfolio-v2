import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import { useState } from "react";
import { Link as LinkNav } from "react-scroll";
import { ToggleTheme } from "./ToggleTheme";

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handlerToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        isBlurred={false}
        maxWidth="xl"
        className="shadow-md bg-midnightBlue dark:bg-dark-light"
      >
        <NavbarContent justify="start">
          <NavbarBrand>
            <p className="text-2xl lg:text-3xl font-title text-light font-semibold tracking-wide">
              {'Port'}<span className="text-orange-700">fólio</span>
            </p>
          </NavbarBrand>
          <ToggleTheme className="md:hidden"/>
          <NavbarMenuToggle 
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden text-light"
          />
        </NavbarContent>

        <NavbarContent className="hidden md:flex gap-4" justify="end">
          <NavbarItem>
            <LinkNav
              className="nav-link"
              activeClass="nav-link-active"
              smooth spy
              to="start"
              offset={-100}
            >
              Início
            </LinkNav>
          </NavbarItem>
          <NavbarItem>
            <LinkNav
              className="nav-link"
              activeClass="nav-link-active"
              smooth spy
              to="aboutme"
              offset={-100}
            >
              Sobre mim
            </LinkNav>
          </NavbarItem>
          <NavbarItem>
            <LinkNav
              className="nav-link"
              activeClass="nav-link-active"
              smooth spy
              to="skills"
              offset={-100}
            >
              Habilidades
            </LinkNav>
          </NavbarItem>
          <NavbarItem>
            <LinkNav
              className="nav-link"
              activeClass="nav-link-active"
              smooth spy
              to="projects"
              offset={-100}
            >
              Projetos
            </LinkNav>
          </NavbarItem>
          <NavbarItem>
            <LinkNav
              className="nav-link"
              activeClass="nav-link-active"
              smooth spy
              to="achievements"
              offset={-100}
            >
              Conquistas
            </LinkNav>
          </NavbarItem>
          <NavbarItem>
            <LinkNav
              className="nav-link"
              activeClass="nav-link-active"
              smooth spy
              to="contact"
              offset={-100}
            >
              Contato
            </LinkNav>
          </NavbarItem>
          <NavbarItem>
            <ToggleTheme />
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="flex justify-center items-center gap-y-10 bg-midnightBlue dark:bg-dark-light">
          <NavbarMenuItem>
            <LinkNav
              className="nav-link-mobile" 
            activeClass='nav-link-mobile-active'
              smooth spy
              to="start"
              onClick={handlerToggleMenu}
              offset={-64}
            >
              Início
            </LinkNav>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <LinkNav
              className="nav-link-mobile" 
              activeClass='nav-link-mobile-active'
              smooth spy
              to="aboutme"
              onClick={handlerToggleMenu}
              offset={-64}
            >
              Sobre mim
            </LinkNav>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <LinkNav 
              className="nav-link-mobile" 
              activeClass='nav-link-mobile-active' 
              smooth spy 
              to='skills'
              onClick={handlerToggleMenu}
              offset={-64}
            >
              Habilidades
            </LinkNav>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <LinkNav 
              className="nav-link-mobile" 
              activeClass='nav-link-mobile-active' 
              smooth spy 
              to='projects'
              onClick={handlerToggleMenu}
              offset={-64}
            >
              Projetos
            </LinkNav>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <LinkNav 
              className="nav-link-mobile" 
              activeClass='nav-link-mobile-active' 
              smooth spy 
              to='achievements'
              onClick={handlerToggleMenu}
              offset={-64}
            >
              Conquistas
            </LinkNav>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <LinkNav 
              className="nav-link-mobile" 
              activeClass='nav-link-mobile-active' 
              smooth spy 
              to='contact'
              onClick={handlerToggleMenu}
              offset={-64}
            >
              Contato
            </LinkNav>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
  )
}