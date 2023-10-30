import Img from "gatsby-image";
import React, { useState, useEffect } from "react";
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/postCard"


// import "../utils/global.scss"
import "../utils/normalize.css"
import "../utils/css/screen.css"
//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const BlogIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  let postCounter = 0

  const [opacity, setOpacity] = useState(1);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = 300;
      const scrollPos = window.scrollY || document.documentElement.scrollTop;
      const newOpacity = Math.max(1.1 - scrollPos / maxScroll, 0);

      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Layout title={siteTitle} isHomepage={true}>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      
      <div className="hero-section">
        <div className="hero">
          <Img
                  fluid={data.smallPic.childImageSharp.fluid}
                  className="kg-image"
                  style={{ width: '250px', height: 'auto', transform: `scale(${scale})`, opacity: opacity }}
                />
          <div className="herocontent">
            <h1 className="hero-text" style={{ transform: `scale(${scale})`, opacity: opacity }}>Benjamin Shanahan</h1>
            <p className="hero-subtext" style={{ transform: `scale(${scale})`, opacity: opacity }}>UX Product Designer passionate about creating delightful experiences to be used by everyone. Currently obsessed about using AI to expand the capacity of designers</p>
          </div>
          <div className="view-work-link">
            <a href="#case-studies">View My Work</a>
          </div>
        </div>

      </div>

      {/* <Bio /> */}
      {data.site.siteMetadata.description && (
        <header className="page-head">
          <h2 className="page-head-title">
            Case Studies
          </h2>
        </header>
      )}
      <div className="post-feed" id="case-studies">
        {posts.map(({ node }) => {
          postCounter++
          return (
            <PostCard
              key={node.fields.slug}
              count={postCounter}
              node={node}
              postClass={`post`}
            />
          )
        })}
      </div>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    smallPic: file(
      relativePath: { eq: "benshan.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
)
