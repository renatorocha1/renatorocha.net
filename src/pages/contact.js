import React from "react"
import Layout from "./../components/Layout"
import SEO from "./../components/seo"

import * as S from "./../components/Post/styled"
import Button from "./../components/Button"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" description="" />
    <S.PostHeader>
      <S.PostTitle>Contact</S.PostTitle>
    </S.PostHeader>
    <S.MainContent>
      <article>
        <p>Let's make something together.</p>
        <p>
          Feel free to send me an email if you're looking for a software
          developer, have a question or just want to say hi! 👋🏽
        </p>
        <p>
          <Button
            href="mailto:hi@renatorocha.net"
            title="My email to contact"
            target="_blank"
            rel="noreferrer noopener"
          >
            Say hello
          </Button>
        </p>
      </article>
    </S.MainContent>
  </Layout>
)

export default ContactPage
