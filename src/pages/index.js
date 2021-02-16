import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"

    // export default () => (
    //   <StaticQuery

    //     query={graphql`
    //       {
    //         allSitePage(filter: {id:{regex:"/blog/"}}) {
    //           edges {
    //             node {
    //               id
    //               path
    //             }
    //           }
    //         }
    //       }
    //     `}
    //     render={({ allSitePage: { edges } }) => (
    //      <Layout>
    //       <ul>
    //         {edges.map(({ node: { id, path } }) => (
    //           <li key={id}>
    //             <Link to={path}>{id}</Link>
    //           </li>
    //         ))}
    //       </ul>
         
    //       </Layout>

    //     )}
    //   />
    // );

export const query = graphql
`
    query SITE_INDEX_QUERY {
        site {
            siteMetadata {
              title
              description
            }
          }
          allMdx(sort: {fields: [frontmatter___date], order: DESC}) {
            nodes {
              id
              excerpt(pruneLength: 250)
              frontmatter {
                title
                date
              }
              fields {
                slug
              }
            }
          }
    }
`

const HomePage = ({ data }) => {
    return (
        <div>
            <div>
            </div>

            <div>
                {data.allMdx.nodes.map(({ excerpt, frontmatter, fields }) => (
                    <div>
                    <Link to={fields.slug}>
                        <h1>{frontmatter.title}</h1>
                    </Link>
                        <p>{frontmatter.date}</p>
                        <p></p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomePage