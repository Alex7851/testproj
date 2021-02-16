import React from "react"
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql, StaticQuery, useStaticQuery } from "gatsby"
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
      const { frontmatter, html, body } = data.mdx
      return (
         <Layout>
 <MDXRenderer>{body}</MDXRenderer>
        
          </Layout>
        
      ) 
    }


