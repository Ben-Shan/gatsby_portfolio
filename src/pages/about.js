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
            Hello! I'm Ben, I'm a passionate UX Product Designer with a love for creating incredible experiences and helping people and teams achieve their potential. This year I have also began to foster a keen interest for AI and in how it will revolutionize, not only the design industry, but the wider technology sector.
          </p>

          <h3 id="professional-experience">Professional Journey</h3>
          <p>
            I'm currently in Aer Lingus, Ireland's flag carrier airline, enhancing our user interface to ensure a seamless purchasing and travel experience. I also have contributed significantly to bolstering company profits by crafting compelling interfaces. 
          </p>
          <p>
            To achieve success in each project, I follow the same process while tweaking for the specific needs:
          </p>
            <ul>
                <li> <strong>Collaboration:</strong> I work closely with product managers and stakeholders, ensuring alignment on scope and expected outcomes.</li>
                <li> <strong>UX Research:</strong> While working closely with UX Researchers, this can involve: Reviewing user feedback, Conducting competitor analyses, Distributing surveys, Performing tree testing or others depending on the requirements.
                        
                    
                </li>
                <li> <strong>Ideation:</strong> I transition from paper sketches to low-fidelity Figma prototypes, visualizing potential solutions.</li>
                <li> <strong>Validation & Iteration:</strong> Designs undergo validation with stakeholders and fellow designers, and I iterate as required.</li>
                <li> <strong>Design System:</strong> If components are missing, I ensure they're crafted and added post-project completion.</li>
                <li> <strong>A/B Testing:</strong> It's a regular step, but sometimes, in-house assessments also guide our design choices.</li>
                <li> <strong>Finalization:</strong> Once a design is settled, I collaborate with developers all the way up to deployment.</li>
            </ul>

          <h3 id="insights">Personal Insights</h3>
          <p>
            One of my favourite aspects of being a UX Product Designer is the diversity in roles and responsibilities it brings. Engaging with diverse teams, from designers and product managers to legal and operations, and the constant requirement to be a source of truth for information and design solutions is exhilarating. These are crucial requirements in my current role but with my growing love for them I aim to move into a management role in my future career where these talents are even more essential. 
          </p>
          
          <h3 id="educational-background">Educational Background</h3>
          
            <h6>BSc in Computer Science and Chinese</h6>
              <ul>
                  <li>Gained development understanding of various technologies including:</li>
                    <ul id="mini-list">
                      <li>Object Oriented Programming</li>
                      <li>Web Development</li>
                      <li>Databases</li>
                      <li>Advanced Security</li>
                    </ul>  
                  <li>Attained HSK-3 certification in the Chinese language.</li>
                  <li>Awarded a scholarship to study at Beihang University, Beijing.</li>
                  <li>Developed a interest for the 'macro' side of technology as well as the visual, interactive experience of systems.</li>
              </ul>
            <p>
              Although I really enjoyed my undergraduate degree and loved learning about the intricacies of technology develop, I knew after achieving it I wanted to pursue 'wider view' career in technology. In my final year I had began to develop an interest in UX and after talking to achedemic mentors and professionals in the industry, I decided my best course of action would be to pursue a Masters  in UX.
            </p>
            <h6>MSc in User Experience Design</h6>
            <p>During the masters I became proficient in a wide array of research, design and project management methods including:</p>
              <ul>
                  <li>Research methodologies</li>
                  <li>Interaction design</li>
                  <li>Prototyping</li>
                  <li>Critical problem solving</li>
              </ul>

              <h3 id="interests">Interests & Hobbies</h3>
                <p>
                    🎨 I have a passion for <strong>Drawing</strong>, particularly realistic sketches and informative design pieces such as maps. 💻 My interests in the technology expand to <strong>Digital Art</strong>, where I create using various tools including Illustrator, Photoshop, After Effects, Procreate and more. 🤖 With the ever-growing capabilities of technology, I've ventured into <strong>AI Projects</strong> which allow me to create digital products beyond my existing skills. ✈️ <strong>Travel</strong> plays a significant part in my leisure time, as I love exploring different places, experiencing cultures, and making memories. This often intertwines with my love for 🌲 <strong>Hiking</strong>, where scenic treks become a priority during my travels. 🎾 While I admit I'm not a pro at <strong>Tennis</strong>, I love it and continue to try be better. I also love 📚 <strong>Reading</strong> particularly history and the classics, although I don't get to read enough, I am slowly working through my reading list of the greats!
                </p>










          <h3 id="conclusion">Reach Out!</h3>
          <p>
            Thank you for taking the time to read about me and my work! When I have time, I love to collaborate with others to create interesting things, so of you want to work with me, reach out! 
          </p>
          <h6>Need help?</h6>
          <p>
            I am incredibly passionate about help people starting out in UX and need help or advice, if that's you shoot me a message and I will always help out how I can!
           </p>
          <hr></hr>
          <p>
            Thanks!<br />
          </p>
          <div class="signature">
              Ben
          </div>

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
        fluid(maxWidth: 2000) {
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
