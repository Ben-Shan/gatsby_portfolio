import React from "react"
import { Link } from "gatsby"

export default props => (
  <article
    className={`post-card post-card-large ${props.postClass} ${
      props.node.frontmatter.thumbnail ? `with-image` : `no-image`
    }`}
    style={{
      ...props.node.frontmatter.thumbnail ? {
        backgroundImage: `url(${props.node.frontmatter.thumbnail.childImageSharp.fluid.src})`
      } : {},
      margin: "15px 0",
      height: "80vh",   // Adjust the height to make posts smaller
      borderRadius: "32px"
    }}
  >
    <Link to={props.node.fields.slug} className="post-card-link">
      <div className="post-card-content">
        <h2 className="post-card-title">
          {props.node.frontmatter.title || props.node.fields.slug}
        </h2>
      </div>
    </Link>
  </article>
)
