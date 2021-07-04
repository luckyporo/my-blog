import { Link } from "gatsby"
import React from "react"
import "./menu.scss"

const Menu = ({ menu }) => {
  return (
    <div className="menu">
      {menu &&
        menu.map(item => (
          <Link
            to={item.url}
            className="menu__item"
            activeClassName="menu__item_active"
            key={item.url}
          >
            {item.label}
          </Link>
        ))}
    </div>
  )
}

export default Menu
