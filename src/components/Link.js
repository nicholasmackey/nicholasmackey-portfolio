import React from "react"
import styled from "styled-components"

const SocialLink = styled.a`
  color: #222321;
  background-color: #ffc600;
  font-weight: 400;
  text-decoration: none;
  font-weight: 600;
  padding: 0.8rem 2.8rem;
  border-radius: 0.2rem;
  margin-right: 1rem;
  cursor: pointer;
  transition: all 250ms ease-in;

  &:hover {
    opacity: 0.9;
  }
`
const Link = (props) => {
  return (
    <SocialLink href={props.address} target="blank" rel="noopener noreferrer">
      {props.title}
    </SocialLink>
  )
}

export default Link
