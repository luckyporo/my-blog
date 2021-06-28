module.exports = {
  siteMetadata: {
    title: `luckyporo`,
    image: "/gatsby-icon.png",
    description: `A full stack developer`,
    siteUrl: `https://gatsby-starter-breeze.netlify.app/`,
    social: {
      // douban: "#",
      email: "zhinian0209@gmail.com",
      // facebook: "#",
      github: "luckyporo",
      // instagram: "#",
      // linkedin: "#",
      rss: "/rss.xml",
      // telegram: "#",
      twitter: "luckyporo",
      // youtube: "#",
    },
    sidebarMenu: [
      { url: "/archive/", label: "归档" },
      { url: "/tags/", label: "标签" },
      { url: "/about", label: "About" },
    ],
    footerHTML: `© 2021 <a href="https://github.com/luckyporo">luckyporo</a> All rights reserved.`,
    dateFormat: `YYYY-MM-DD`,
    language: `zh`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `content`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-classes`,
            options: {
              classMap: {
                table: "table table-hover",
              },
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     //trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  title: edge.node.frontmatter.title,
                  description:
                    edge.node.frontmatter.description || edge.node.excerpt,
                  date: edge.node.fields.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [fields___date] },
                  filter: {frontmatter: {layout: {ne: "page"}}},
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { 
                        slug 
                        date
                      }
                      frontmatter {
                        title
                        description
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "luckyporo",
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `luckyporo Blog`,
        short_name: `luckyporo`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#00AA90`,
        display: `minimal-ui`,
        icon: `static/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Quicksand`, `Noto Serif SC`],
        display: "swap",
      },
    },
    // {
    //   resolve: "gatsby-plugin-gitalk",
    //   options: {
    //     config: {
    //       clientID: "ee045e67607d9cc5d75b",
    //       clientSecret: "c0f18c2238127559210f0bf94711a5c345eea7f8",
    //       repo: "gatsby-starter-breeze",
    //       owner: "keithnull",
    //       admin: ["keithnull"],
    //       pagerDirection: "last",
    //       createIssueManually: true,
    //       distractionFreeMode: true,
    //       enableHotKey: true,
    //     },
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
