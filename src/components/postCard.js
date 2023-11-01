import React from "react";
import { Link } from "gatsby";

export default props => (
  <article
    className={`post-card post-card-large ${props.postClass} ${
      props.node.frontmatter.thumbnail ? `with-image` : `no-image`
    }`}
    style={{
      margin: "15px 0",
      height: "80vh",
      borderRadius: "32px"
    }}
  >
    <Link to={props.node.fields.slug} style={{ position: "absolute", width: "100%", height: "100%" }}>
      {/* This div will handle the background image and its transitions */}
      <div
        className="post-card-link"
        style={{
          ...props.node.frontmatter.thumbnail
            ? {
                backgroundImage: `url(${props.node.frontmatter.thumbnail.childImageSharp.fluid.src})`
              }
            : {}
        }}
      ></div>

      <div className="details">
        {/* Displaying project title */}
        <h2 className="post-card-title">
          {props.node.frontmatter.title || props.node.fields.slug}
        </h2>

        {/* Displaying project description (acting as subtitle) */}
        <p className="post-card-description">
          {props.node.frontmatter.description}
        </p>
        {props.node.frontmatter.tags && (
            <div className="tags-container">
                {props.node.frontmatter.tags.map(tag => (
                    <span key={tag} className="tag">
                        {tag}
                    </span>
                ))}
            </div>
        )}
      </div>
    </Link>
  </article>
);
