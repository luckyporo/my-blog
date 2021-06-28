import { Link } from "gatsby"
import React from "react"
import "./postlist.scss"

const PostList = ({ posts, compact }) => {
  return (
    <div className="postlist">
      {posts.map(({ node }) => (
        <div
          className="postlist__item_wrapper"
          key={node.fields.slug}
        >
          <Link to={node.fields.slug} className="item">
            <div
              className={
                compact ? "item__info_compact" : "item__info"
              }
            >
              <h2
                className={
                  compact
                    ? "item__info_compact__title"
                    : "item__info__title"
                }
              >
                {node.frontmatter.title}
              </h2>
              {!compact && (
                <div className="item__info__description">
                  {node.frontmatter.description || node.excerpt}
                </div>
              )}
              <div
                className={
                  compact
                    ? "item__info_compact__date"
                    : "item__info__date"
                }
              >
                {node.fields.date}
              </div>
            </div>
            {!compact && node.frontmatter.image && (
              <div
                className="item__image"
                style={{ backgroundImage: `url(${node.frontmatter.image})` }}
              ></div>
            )}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default PostList
