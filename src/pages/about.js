import React from "react"
import Layout from "./../components/Layout"
import SEO from "./../components/seo"

import Button from "./../components/Button"
import * as S from "./../components/Post/styled"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About me" description="" />
      <S.PostHeader>
        <S.PostTitle>Hi, I'm Renato</S.PostTitle>
      </S.PostHeader>
      <S.MainContent>
        <article>
          <p>
            Full stack developer with over 5 years of experience. As a
            self-taught professional, I have commenced my career as a graphic
            designer until I discovered my passion for software developing, as
            it's a way of not only use my creativity, but also my logic focused
            mind to create new things and find solutions to improve the users
            experience. I have worked for different companies, having the
            opportunity to master new technologies providing me with a solid
            background.
          </p>
          <p>
            When I'm not coding, I'm likely on the beach playing volleyball or
            watching a movie.
          </p>
          <p>
            You can read more about me, experience, skills and much more at the
            link below:
          </p>
          <p>
            <Button
              href="https://resume.io/r/LWCDWYlIH"
              title="My Resume"
              target="_blank"
              rel="noreferrer noopener"
            >
              My resume
            </Button>
          </p>
        </article>
      </S.MainContent>
    </Layout>
  )
}

export default AboutPage
