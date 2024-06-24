import { useState } from "react";
import { LuAlignJustify, LuX } from "react-icons/lu";
import { Link as LinkNav } from 'react-scroll';
import { ToggleTheme } from "./ToggleTheme";

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handlerToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
      <nav className="bg-midnightBlue dark:bg-dark-light fixed top-0 w-full z-50">
        <div className="max-w-screen-xl mx-auto flex items-center p-4 2xl:py-5 2xl:px-0 justify-between">
          {/* <h2 className="text-2xl font-title text-light font-semibold">
            {"Port"}<span className="text-orange-700">fólio</span>
          </h2> */}

          <h1 className="text-2xl font-title text-light font-semibold tracking-wide">
            Caio <span className="text-orange-700">Pfaltzgraff</span>
          </h1>

          <div className="flex gap-x-6 items-center md:hidden">
            <ToggleTheme />
            {isMenuOpen 
              ? <LuX className="size-7 text-light cursor-pointer" onClick={handlerToggleMenu}/>
              : <LuAlignJustify className="size-7 text-light cursor-pointer" onClick={handlerToggleMenu}/>
            }
          </div>

          <div className='hidden md:flex gap-x-4'>
            <LinkNav className="nav-link" activeClass='nav-link-active' smooth spy to='start' offset={-100}>
              Início
            </LinkNav>
            <LinkNav className="nav-link" activeClass='nav-link-active' smooth spy to='aboutme' offset={-100}>
              Sobre mim
            </LinkNav>
            <LinkNav className="nav-link" activeClass='nav-link-active' smooth spy to='projects' offset={-100}>
              Projetos
            </LinkNav>
            <LinkNav className="nav-link" activeClass='nav-link-active' smooth spy to='skills' offset={-100}>
              Habilidades
            </LinkNav>
            <LinkNav className="nav-link" activeClass='nav-link-active' smooth spy to='achievements' offset={-100}>
              Conquistas
            </LinkNav>
            <LinkNav className="nav-link" activeClass='nav-link-active' smooth spy to='contact' offset={-100}>
              Contato
            </LinkNav>
            <ToggleTheme />
          </div>
        </div>
        {isMenuOpen && (
          <div className='bg-midnightBlue dark:bg-dark-light absolute h-screen w-full flex flex-col justify-center items-center gap-y-8'>
            <LinkNav 
              className="nav-link-mobile" 
              activeClass='nav-link-mobile-active' 
              smooth spy 
              to='start'
              onClick={handlerToggleMenu}
              offset={-64}
            >
              Início
            </LinkNav>
            <LinkNav 
              className="nav-link-mobile" 
              activeClass='nav-link-mobile-active' 
              smooth spy 
              to='aboutme'
              onClick={handlerToggleMenu}
              offset={-64}
            >
              Sobre mim
            </LinkNav>
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
          </div>
        )}
      </nav>
  )
}