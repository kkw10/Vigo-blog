import React, {useEffect} from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components';
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Tags from '../components/tags';

const Article = styled.article`
  border-bottom: 1px solid #ddd;
  &:last-child { border-bottom: none };
`;

class BlogIndex extends React.Component {  
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const tagArr = data.allMarkdownRemark.edges
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <>{console.log(tagArr)}</>
        <SEO title="All posts" />
        <Bio />
        {posts.map(({ node }, i) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <Article key={node.fields.slug}>
              <header>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
                <Tags tagArr={tagArr[i].node.frontmatter.tags} />
              </section>
            </Article>
          )
        })}      
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`
