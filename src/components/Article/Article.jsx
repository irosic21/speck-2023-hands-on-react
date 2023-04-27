import React from 'react'
import './Article.scss'
import '../Section/Section.scss'
import LectureImg1 from "../../assets/images/lecture-1.jpg";
import Section from "../Section/Section"


const SinglePage = () => {
  return (
    <>
    <Section title="Introduction">
      <article className="SinglePage">
        <figure className="SinglePage-Figure">
          <img
            src={LectureImg1}
            alt="Introduction"
            className="SinglePage-Img"
          />
        </figure>
        <p className="SinglePage-Content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
          omnis, aspernatur veritatis iure quisquam vel quos, numquam eaque
          at, saepe incidunt harum. Voluptates eligendi iste ullam fuga
          officiis distinctio earum? Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Rem iusto sequi in sit, consequuntur similique
          ullam eligendi adipisci. Neque odit sequi modi iusto adipisci
          recusandae vitae sapiente cum sit est. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Saepe voluptates minus nulla
          voluptatibus quod voluptatum debitis aspernatur magnam eius
          nostrum, quaerat facere molestias modi, amet praesentium? Tempore
          nihil dignissimos veniam.
        </p>
      </article>
    </Section>
    </>
  )
}

export default SinglePage