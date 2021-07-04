import { Link } from "gatsby"
import * as React from "react"
import { kebabCase } from "lodash"

const Tags = ({ tags }) => {
  return (
    <ul className="list-none flex flex-row flex-wrap justify-between max-w-full p-0 text-lg">
      {tags &&
        tags.map(tag => (
          <li key={tag.fieldValue} className="inline-block px-4 pt-10 overflow-hidden">
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              #{tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
    </ul>
  )
}

export default Tags
