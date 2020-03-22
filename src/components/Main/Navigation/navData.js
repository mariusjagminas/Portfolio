import React from 'react';
import { FaHome, FaImage, FaEnvelope, FaUserTie } from "react-icons/fa"

const links = [
  {
    path: "#main",
    icon: <FaHome />,
    name: "home"
  },
  {
    path: "#projects",
    icon: <FaImage />,
    name: "Projects"
  },
  {
    path: "#about",
    icon: <FaUserTie />,
    name: "about"
  },
  {
    path: "#contact",
    icon: <FaEnvelope />,
    name: "contact"
  },
];

export default links