import { FaRegCalendarAlt, FaTags } from "react-icons/fa"

import { Link } from "gatsby"
import React from "react"
import { kebabCase } from "lodash"

const Post = ({ post }) => {
  return (
    <article>
      <header className="header">
        {post.frontmatter.image && (
          <div
            className="w-full h-72 max-h-96 -mt-5 bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: `url(${post.frontmatter.image})` }}
          ></div>
        )}
        <div className="px-11 pt-3 font-semibold leading-6 not-italic">
          <h1>
            {post.frontmatter.title}
          </h1>
          <span className="mr-5">
            <FaRegCalendarAlt className="inline mr-2 mb-1 my-0" />
            {post.fields.date}
          </span>
          {post.frontmatter.tags && (
            <span>
              <FaTags className="inline mr-2 mb-1 my-0" />
              <ol className="p-0 inline">
                {post.frontmatter.tags.map(tag => (
                  <li key={tag} className="inline-block mr-2 shadow-sm hover:shadow-none">
                    <Link to={`/tags/${kebabCase(tag)}/`} className="no-underline">{tag}</Link>
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
