import React from "react"
import "./copyright.scss"

const Copyright = ({ contentHTML }) => {
  return (
    <div
      className="copyright"
      dangerouslySetInnerHTML={{ __html: contentHTML }}
    />
  )
}

export default Copyright
