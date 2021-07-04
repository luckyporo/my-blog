import React from "react"
import "./toc.scss"

export type TOCProp = {
  toc?: string;
}

const TOC = ({ toc }: TOCProp) => {
  if (!toc) {
    return null
  }
  return (
    <div dangerouslySetInnerHTML={{ __html: toc }} className="toc" />
  )
}

export default TOC
