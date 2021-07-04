import React from "react"
import SEO from "./seo"
import "./layout.scss"

type LayoutProp = {
  title: string;
  description?: string;
  socialImage?: string;
  children?: any;
  meta?: any;
}

const Layout = ({ title, description, socialImage, children, meta }: LayoutProp) => {
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
