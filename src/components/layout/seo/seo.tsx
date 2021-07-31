/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"

import { Helmet } from "react-helmet"
import React from "react"

type Meta = {
  name: string;
  content: string;
}

const SEO = ({ description = '', lang = '', meta = [], title, socialImage }: {
  description: string;
  lang?: string;
  meta: Meta[];
  title: string;
  socialImage: string;
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            image
            social {
              twitter
            }
            language
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaImage = socialImage || site.siteMetadata.image

  return (
    <Helmet
      htmlAttributes={{
        lang: lang || site.siteMetadata.language,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.social.twitter,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: metaImage,
        },
      ].concat(meta)}
    />
  )
}


export default SEO
