import React from "react"
import SEO from "./seo"
import "./layout.scss"

const Layout = ({ title, description, socialImage, children, meta }) => {
  return (
    <div className="layout">
      <SEO
        title={title}
        description={description}
        meta={meta}
        socialImage={socialImage}
      />
      {children}
    </div>
  )
}

export default Layout
