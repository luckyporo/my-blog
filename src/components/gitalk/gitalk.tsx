import "@suziwen/gitalk/dist/gitalk.css"
import "./style-fix.scss"

import Gitalk from "gatsby-plugin-gitalk"
import React from "react"
import "./gitalk.scss"

const MyGitalk = ({ title, id }) => {
  return (
    <div className="gitalk">
      <Gitalk
        options={{
          id,
          title,
        }}
      />
    </div>
  )
}

export default MyGitalk
