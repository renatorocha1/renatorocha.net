import React from "react"
import Layout from "./../components/Layout"
import SEO from "./../components/seo"

import * as S from "./../components/Post/styled"

const AboutPage = () => (
  <Layout>
    <SEO title="About me" description="" />
    <S.PostHeader>
      <S.PostTitle>About me</S.PostTitle>
    </S.PostHeader>
    <S.MainContent>
      <p>
        Full stack developer with over 4 years of experience. As a self-taught
        professional, I have commenced my career as a graphic designer until I
        discovered my passion for software developing, as it's a way of not only
        use my creativity, but also my logic focused mind to create new things
        and find solutions to improve the users experience. I have worked for
        different companies, having the opportunity to master new technologies
        providing me with a solid background.
      </p>
      <h1>Experience</h1>

      <article>
        <p>
          <strong>Full Stack Developer</strong> as a Freelancer, Remote
          <br />
          <small>June 2019 — Present</small>
        </p>
        <ul>
          <li>
            <li>Interacted with clients to identify business requirements.</li>
            <li>
              Helped to achieve a consistent look and a visual theme across the
              website by promoting uniform fonts, formatting, images, and
              layout.
            </li>
            <li>
              Planned, developed, tested, deployed and maintained web
              applications.
            </li>
          </li>
        </ul>

        <p>
          <strong>Key technologies:</strong> React, Redux, JavaScript, Webpack,
          PHP, Nodejs, MySQL.
        </p>
      </article>
    </S.MainContent>
  </Layout>
)

export default AboutPage
