import React from "react"
import "./toc.scss"

const TOC = ({ toc }) => {
  if (!toc) {
    return null
  }
  return (
    <div dangerouslySetInnerHTML={{ __html: toc }} className="toc" />
  )
}

export default TOC
