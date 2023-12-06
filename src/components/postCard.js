import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

export default props => (
  <article
    className={`post-card ${props.postClass}`}
  >
    <Link to={props.node.fields.slug} style={{ display: "block", color: "inherit", textDecoration: "none" }}>
      {/* Image Container */}
      {props.node.frontmatter.thumbnail && (
        <div className="post-card-image">
          <Img fluid={props.node.frontmatter.thumbnail.childImageSharp.fluid} alt={props.node.frontmatter.title} />
        </div>
      )}

      {/* Details Container */}
      <div className="post-card-details">
        {/* Project Title */}
        <h2 className="post-card-title">
          {props.node.frontmatter.title || props.node.fields.slug}
        </h2>

        {/* Project Description (acting as subtitle) */}
        <p className="post-card-description">
          {props.node.frontmatter.description}
        </p>
      </div>
    </Link>
  </article>
);
