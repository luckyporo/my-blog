import * as React from "react"
import "./page.scss"

type PageProp = {
  title: string;
  image?: string;
  children?: any;
  nopadding?: boolean;
}

const Page = ({ title, image, children, nopadding }: PageProp) => {
  return (
    <div>
      <header className="header">
        {image && (
          <div
            className="header__image"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        )}
        <h1 className="header__title">{title}</h1>
      </header>
      <section
        className="content"
        style={
          nopadding && {
            paddingRight: 0,
            paddingLeft: 0,
          }
        }
      >
        {children}
      </section>
    </div>
  )
}

export default Page
