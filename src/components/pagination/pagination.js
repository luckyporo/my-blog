import { Link } from "gatsby"
import React from "react"
import "./pagination.scss"

const Pagination = ({
  prevText,
  prevLink,
  nextText,
  nextLink,
  currentText,
}) => {
  return (
    <nav className="pagination">
      <div className="pagination__prev">
        {prevLink && (
          <Link to={prevLink} rel="prev">
            {prevText}
          </Link>
        )}
      </div>
      <div className="pagination__current">{currentText}</div>
      <div className="pagination__next">
        {nextLink && (
          <Link to={nextLink} rel="next">
            {nextText}
          </Link>
        )}
      </div>
    </nav>
  )
}

Pagination.defaultProps = {
  prevText: "← PREV",
  nextText: "NEXT →",
  currentText: "",
}

export default Pagination
