import { FaRegCalendarAlt, FaTags } from "react-icons/fa"

import { Link } from "gatsby"
import React from "react"
import "./post.scss"

const _ = require("lodash")

const Post = ({ post }) => {
  return (
    <article>
      <header className="header">
        {post.frontmatter.image && (
          <div
            className="header__image"
            style={{ backgroundImage: `url(${post.frontmatter.image})` }}
          ></div>
        )}
        <div className="header__info">
          <h1 className="header__info__title">
            {post.frontmatter.title}
          </h1>
          <span className="header__info__date">
            <FaRegCalendarAlt className="icon" />
            {post.fields.date}
          </span>
          {post.frontmatter.tags && (
            <span className="header__info__tags">
              <FaTags className="icon" />
              <ol>
                {post.frontmatter.tags.map(tag => (
                  <li key={tag}>
                    <Link to={`/tags/${_.kebabCase(tag)}/`}>{tag}</Link>
                  </li>
                ))}
              </ol>
            </span>
          )}
        </div>
      </header>
      <section
        className="content"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </article>
  )
}

export default Post
