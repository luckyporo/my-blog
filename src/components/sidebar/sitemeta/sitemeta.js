import { Link } from "gatsby"
import React from "react"
import "./sitemeta.scss"

const SiteMeta = ({ title, description }) => {
  return (
    <Link
      to="/"
      className="sitemeta"
      activeClassName="sitemeta_active"
    >
      <div className="sitemeta__title"> {title} </div>
      <div className="sitemeta__description"> {description} </div>
    </Link>
  )
}

export default SiteMeta
