import React from "react"
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql, StaticQuery, useStaticQuery, Link } from "gatsby"
import './styles.css'
import Layout from "../components/layout"

// export  function Read() {
//   return (
// <StaticQuery

//         query={graphql`
          // {
          //   allSitePage(filter: {id:{regex:"/blog/"}}) {
          //     edges {
          //       node {
          //         id
          //         path
          //       }
          //     }
          //   }
          // }
//           query Somename($slug: String!) {
//               markdownRemark(frontmatter: { slug: { eq: $slug } }) {
//                 html
//                 frontmatter {
//                   slug
//                   title
//                 }
//               }
//             }
          
//         `}
        

        
        
//       />)
// }


export const query = graphql`
      
    query PostsByID($id: String!) {
        mdx(
            id: { eq: $id }
        ){
            html
            body
            frontmatter {
                title
                date(formatString: "YYYY MMMM Do")
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
   
 
// export  function Header() {
//   const data = useStaticQuery(graphql`
//     query HeaderQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     },

//   `)}
// export  function Read() {
//   return (
//       <StaticQuery
//         query = { graphql`
//         query IndexPageQuery ($slug: String!) {
//           markdownRemark(frontmatter: { slug: { eq: $slug } }) {
//             html
//             frontmatter {
//               slug
//               title
//             }
//           }
//         }      
        
//       `} 
      
//       /> 
//     )}

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
      const { frontmatter, html} = data
      const { body } = data.mdx
      return (
         <Layout>
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
 <MDXRenderer>{body}</MDXRenderer>
          </Layout>
        
      ) 
    }


