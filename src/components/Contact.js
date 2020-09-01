import React from "react"
import styled from "styled-components"
// import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"
import Footer from "./Footer"

const Section = styled.section`
  width: 100%;
  min-height: ${({ sectionHeight }) => sectionHeight};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

// const Ul = styled.ul`
//   list-style: none;
//   margin: 0;
//   padding: 0;
//   font-size: 9px;

//   ${({ theme }) => theme.mq.tablet} {
//     font-size: 12px;
//   }
// `

// const Li = styled.li`
//   margin: 3em 0;
// `

// const Link = styled.a`
//   font-family: ${({ theme }) => theme.fontFamily2};
//   font-size: 3em;
//   text-decoration: none;
//   color: ${({ theme }) => theme.c.navItem};
//   background-color: ${({ theme }) => theme.c.card};
//   padding: 0.4em;
//   border-radius: 5px;
//   display: flex;
//   align-items: center;
//   transition: opacity 0.2s ease;

//   &:hover {
//     opacity: 0.6;
//   }
// `

// const Span = styled.span`
//   font-size: ${({ theme }) => theme.f.em(8)};
//   padding-left: 0.6em;
// `

const Form = styled.form`
  width: 400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  ${({ theme }) => theme.mq.laptop} {
    margin-bottom: 60px;
  }
`

const Label = styled.label`
  /* font-size: ${({ theme }) => theme.font.size.r};
  color: ${({ theme }) => theme.grey}; */
  color: white;
`

const InputWrapper = styled.div`
  width: 100%;
  margin: 10px 0;
  /* ${({ theme }) => theme.mq.tablet} {
    width: 31%;
    margin: 10px 30px 10px 0;
  } */
`

const Input = styled.input`
  padding: 10px;
  width: 100%;
  /* border: 1px solid ${({ theme }) => theme.grey}; */
  outline: none;
  &:focus {
    /* background-color: ${({ theme }) => theme.lightGrey}; */
  }
`

const TextAreaWrapper = styled.div`
  width: 100%;
  margin: 10px 0;
`

const Textarea = styled.textarea`
  width: 100%;
  /* border: 1px solid ${({ theme }) => theme.grey}; */
  height: 155px;
  resize: none;
  outline: none;
  &:focus {
    /* background-color: ${({ theme }) => theme.lightGrey}; */
  }
`

const Button = styled.button`
  margin: 20px 0px 50px auto;
  /* border: 1px solid ${({ theme }) => theme.secondaryDark}; */
  background: none;
  text-transform: uppercase;
  /* color: ${({ theme }) => theme.secondaryDark}; */
  color: white;
  padding: 10px 25px;
  font-size: 13px;
  font-weight: 600;
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 0.6;
  }
`

class Contact extends React.Component {
  constructor() {
    super()
    this.state = {
      sectionHeight: "100vh",
    }
  }

  componentDidMount() {
    const navbarHeight = document.querySelector("#navigation").offsetHeight

    this.setState({
      sectionHeight: `${window.innerHeight - navbarHeight - 80}px`,
    })
  }

  render() {
    return (
      <>
        <Section id="contact" sectionHeight={this.state.sectionHeight}>
          <Form
            name="contact"
            method="POST"
            netlify-honeypot="bot-field"
            data-netlify="true"
          >
            <input type="hidden" name="bot-field" />
            {/* Must inlude form-name input to let Netlify handle a form sumbision properly  */}
            <input type="hidden" name="form-name" value="contact" />
            <InputWrapper>
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" name="name" />
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="mail">e-mail</Label>
              <Input id="mail" type="email" name="email" />
            </InputWrapper>
            <TextAreaWrapper>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" type="text" name="message" />
            </TextAreaWrapper>
            <Button type="submit">Send</Button>
          </Form>
        </Section>
        <Footer />
      </>
    )
  }
}

export default Contact

{
  /* <Ul>
            <Li>
              <Link href="mailto:mariusjagminas.it@gmail.com">
                <FaEnvelope />
                <Span>mariusjagminas.it@gmail.com</Span>
              </Link>
            </Li>
            <Li>
              <Link href="https://github.com/mariusjagminas">
                <FaGithub />
                <Span>github.com/mariusjagminas</Span>
              </Link>
            </Li>
            <Li>
              <Link href="https://www.linkedin.com/in/mariusjagminas/">
                <FaLinkedin />
                <Span>linkedin.com/in/mariusjagminas</Span>
              </Link>
            </Li>
          </Ul> */
}
