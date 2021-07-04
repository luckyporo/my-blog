import React from "react"

type PageProp = {
  title: string;
  image?: string;
  children?: any;
  nopadding?: boolean;
}

const Page = ({ title, image, children, nopadding }: PageProp) => {
  return (
    <div>
      <header className="px-11">
        {image && (
          <div style={{ backgroundImage: `url(${image})` }}></div>
        )}
        <h1>{title}</h1>
      </header>
      <section
        className="px-9"
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
