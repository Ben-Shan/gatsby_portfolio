import Img from "gatsby-image";
import React, { useState, useEffect } from "react";
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/homelayout"
import SEO from "../components/seo"
import PostCard from "../components/postCard"

import DividerIcon from '../assets/bordericons.svg';
import MaintenanceIcon from '../assets/maintenance.svg';

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
      <div class="mobile-banner">
      <MaintenanceIcon className="maintenance-svg"/>
  <div class="banner-text">
    <h2>Under Maintenance</h2>
    <p>Please view on web for the best experience, but feel free to continue browsing on mobile!</p>
  </div>
</div>

      <div className="hero-section">
        <div className="hero">
          <div className="herocontent">
            <h1 className="hero-text" style={{ transform: `scale(${scale})`, opacity: opacity }}>Benjamin Shanahan</h1>
            <p className="hero-subtext" style={{ transform: `scale(${scale})`, opacity: opacity }}>Passionate designer with a love for creating amazing experiences and facilitating other’s potential </p>
            <div class="hero-divider" style={{ transform: `scale(${scale})`, opacity: opacity }}>
              <div class="hero-line"></div>
              <DividerIcon className="hero-divider-svg"/>
              <div class="hero-line"></div>
            </div>
          </div>
        </div>

      </div>

      {/* New Section: Live Projects */}
      <header className="page-head">
        <h2 className="page-head-title">
          Live Projects
        </h2>
      </header>
      <div className="live-projects">
      <a href="https://colorless.design" target="_blank" rel="noopener noreferrer">  
      <div className="colorless-div">
        
      </div>
        </a>
      
      </div>

      {/* <Bio /> */}
      {data.site.siteMetadata.description && (
        <header className="page-head">
          <h2 className="page-head-title">
            Case Studies
          </h2>
        </header>
      )}
      <div className="post-feed" id="case-studies" >
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
            tags
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
