import { Link } from "gatsby"
import React from "react"
import kebabCase from "lodash/kebabCase"
import "./tags.scss"

const Tags = ({ tags }) => {
  return (
    <ul className="tags">
      {tags &&
        tags.map(tag => (
          <li key={tag.fieldValue} className="tags__item">
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              #{tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
    </ul>
  )
}

export default Tags
