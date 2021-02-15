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


export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        date
      }
    }
  },
   
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
console.log (pageQuery)
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
      const { markdownRemark } = data // data.markdownRemark holds our post data
      const { frontmatter, html } = markdownRemark
      return (
         <Layout>

        <div> {frontmatter.title}
          <div 
              dangerouslySetInnerHTML={{ __html: html }}
            >
          </div>
        </div>
          </Layout>
        
      ) 
    }


