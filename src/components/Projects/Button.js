import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'


const Link = styled.a`
  font-size: ${({ theme }) => theme.f.em(16)};
  display: block;
  text-decoration: none;
  color: ${({ theme }) => theme.c.navItem};
  border: 1px solid ${({ theme }) => theme.c.navItem};
  border-radius: 7px;
  width: ${({ theme }) => theme.f.em(120)};
  height: ${({ theme }) => theme.f.em(40)};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.c.text};
    background-color: ${({ theme }) => theme.c.active};
  }
`;

const Text = styled.span`
  text-transform: uppercase;
  margin-left: ${({ theme }) => theme.f.em(10)};
`;

const Button = ({ text, icon, href }) => {
  return (
    <Link href={href}>
      {icon}
      <Text>{text}</Text>
    </Link>
  )
}

export default Button;

Button.proptTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  href: PropTypes.string.isRequired
}
