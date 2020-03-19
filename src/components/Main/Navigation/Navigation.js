import React from "react"
import styled from "styled-components"
import "./navigation.css"
import Scrollspy from "react-scrollspy"
import links from './navData';

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.c.bg} ;
  border-top: 2px solid ${({ theme }) => theme.c.navLine};
  border-bottom: 10px solid ${({ theme }) => theme.c.navLine};  
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 100;
  
  ${({ theme }) => theme.mq.tablet} {
    background-color: ${({ theme }) => theme.c.navBg};
    position: absolute;
    top: initial;
    bottom: 0;
  }
`

const StyledScrollspy = styled(Scrollspy)`
  list-style: none;
  padding: 0;
  margin: 0 auto;
  display: flex;
  max-width: ${({ theme }) => theme.f.rem(680)};
`

const Item = styled.li`
  width: 25%;
  margin: 0;
  background-color: ${({ theme }) => theme.c.navBg};

  ${({ theme }) => theme.mq.tablet}{
    background-color: transparent;
  }
`
const Link = styled.a`
  display: block;
  padding-top: 95%;
  border-left: 1px solid ${({ theme }) => theme.c.navLine};
  position: relative;

  &:last-child {
    border-right: 1px solid ${({ theme }) => theme.c.navLine};
  }
`

const Wrapper = styled.div`
  color: ${({ theme }) => theme.rgba3};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${({ theme }) => theme.f.rem(50)};
  padding-top: 30%;
  background-color: none;
  transition: opacity 0.3s ease;
  
  &:before {
    content: "";
    position: absolute;
    border: 10px solid transparent;
    bottom: ${({ theme }) => theme.f.rem(-20)};
  }

  &:hover {
    opacity: 0.4;
  }
`
const LinkName = styled.p`
  font-size: ${({ theme }) => theme.f.rem(10)};
  text-transform: uppercase;
  color: ${({ theme }) => theme.navItem};
  margin: 0;
  padding:  ${({ theme }) => theme.f.rem(7)};

  ${({ theme }) => theme.mq.tablet} {
    padding: ${({ theme }) => theme.f.rem(12)};
    font-size: ${({ theme }) => theme.f.rem(12)};
  }
`

const Navigation = ({ navbarHeight }) => {
  return (
    <Nav id="navigation">
      <StyledScrollspy
        items={["main", "projects", "about", "contact"]}
        currentClassName="active"
        offset={-navbarHeight - 10}
      >
        {links.map(link => {
          return (
            <Item>
              <Link href={link.path}>
                <Wrapper className="active__item">
                  {link.icon}
                  <LinkName className="active__item">{link.name}</LinkName>
                </Wrapper>
              </Link>
            </Item>
          )
        })}
      </StyledScrollspy>
    </Nav>
  )
}

export default Navigation
