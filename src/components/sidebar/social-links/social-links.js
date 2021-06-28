import { getIcon, getLink } from "./utils"

import React from "react"
import "./social-links.scss"

const SocialLinks = ({ social }) => {
  return (
    <div className="social">
      <ul className="social__list">
        {social &&
          Object.entries(social).map(entry => {
            const [sitename, username] = entry
            return (
              username && (
                <li key={sitename} className="social__list__item">
                  <a
                    href={getLink(sitename, username)}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={sitename}
                  >
                    {getIcon(sitename)}
                  </a>
                </li>
              )
            )
          })}
      </ul>
    </div>
  )
}

export default SocialLinks
