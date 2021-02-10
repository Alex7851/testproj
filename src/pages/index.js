import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"

    export default () => (
      <StaticQuery

        query={graphql`
          {
            allSitePage(filter: {id:{regex:"/blog/"}}) {
              edges {
                node {
                  id
                  path
                }
              }
            }
          }
        `}
        render={({ allSitePage: { edges } }) => (
         <Layout>
          <ul>
            {edges.map(({ node: { id, path } }) => (
              <li key={id}>
                <Link to={path}>{id}</Link>
              </li>
            ))}
          </ul>
         
          </Layout>

        )}
      />
    );

