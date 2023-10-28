import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`Ben`, `UX Product Designer`, `AI`, `Aer Lingus`, `portfolio`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          
              <div className="profile-container">
                <Img
                  fluid={data.smallPic.childImageSharp.fluid}
                  className="kg-image"
                  style={{ width: '200px', height: 'auto' }}
                />
              </div>
          
          <h2 id="introduction">About Me</h2>
          <p>
            Hello! I'm Ben, I'm a passionate UX Product Designer with a love for creating seamless experience and helping people and teams achieve their potential. This year I have also began to foster a keen interest for AI and in how it will revolutionize, not only the design industry, but the wider technology sector.
          
            I am also interested in collaborating with others when I have time, so if you want to work together on an interesting project, reach out! I also love helping people trying to enter the world of UX, so if you want advice or support in starting a UX career feel free to shoot me a message and we can chat!
          </p>

          <h3 id="professional-experience">Professional Journey</h3>
          <p>
            I'm currently with Aer Lingus, enhancing our user interface to ensure a seamless purchasing and travel experience. By crafting compelling interfaces, I also contribute to bolstering company profits. My commitment to each project involves closely working with product managers and stakeholders, aligning on scope and expected outcomes. The UX research phase involves reviewing user feedback, conducting competitor analyses, distributing surveys, performing tree testing, and more. Post-research, I embark on ideation, bringing potential solutions to life via paper sketches and low-fidelity Figma prototypes. Collaboration is key; I validate designs with stakeholders and fellow designers, iterating as required. When components are unavailable in our design system, I ensure they're crafted and added post-project completion. Rigorous A/B testing is a regular fixture, but sometimes in-house assessments guide our choice. Once a design crystallizes, I collaborate with developers right up to deployment.
          </p>

          <h3 id="insights">Personal Insights</h3>
          <p>
            The diversity in roles and responsibilities is what fuels my love for being a UX Product Designer. Engaging with diverse teams, from designers and product managers to legal and operations, and being that nexus of information and design solutions is exhilarating. This intrinsic drive to lead and synchronize teams propels my ambition to transition into management.
          </p>
          
          <h3 id="educational-background">Educational Background</h3>
          <p>
            My educational journey began with a BSc in Computer Science coupled with Chinese. I attained the HSK-3 certification in the Chinese language and was honored with a scholarship to study at Beihang University, Beijing - a highlight of my academic pursuits. Although the technicalities intrigued me, I soon realized my genuine interest lay in visual technology and curating delightful user experiences. This epiphany steered me towards a MSc in User Experience Design, where I honed my skills in research methodologies, interaction design, prototyping, and critical problem solving.
          </p>

          <h3 id="interests">Interests & Hobbies</h3>
          <p>
            Away from the screens, I'm often found immersed in art or dabbling in AI-related projects. The outdoors, especially hiking, beckon frequently. Tennis, literature, and cherished moments with friends complete my leisure tapestry. My recent endeavors have steered towards exploring the interplay between AI and design, a topic I'm always eager to discuss.
          </p>

          <h3 id="conclusion">Wrapping Up</h3>
          <p>
            I appreciate the time you've invested in getting to know me a little better through this brief narrative. If my expertise aligns with your project's vision or if you share my excitement about the nexus of AI and design, I'm just a message away. Let's connect!
          </p>

          <p>
            Warm regards,<br />
            Ben
          </p>
        </div>
      </article>
    </Layout>
  )
}



const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    smallPic: file(
      relativePath: { eq: "benshan.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
