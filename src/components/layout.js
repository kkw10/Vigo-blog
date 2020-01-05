import React from "react";
import { Link } from "gatsby";
import styled, { createGlobalStyle } from 'styled-components';
import { rhythm, scale } from "../utils/typography";
import { colorSet } from '../utils/color';

const GlobalStyle = createGlobalStyle`
/* Reset css */
* {
  box-sizing: border-box;
}
ul, ol {
  list-style: none;
}

/* My markdown style */
blockquote {
  margin-left: 0;
  margin-right: 0;
  border-left-color: #34558b;
}

/* code block css */
.gatsby-highlight pre[class*="language-"].line-numbers {
  padding-left: 2.8em;
}
.gatsby-highlight {
  background-color: #fdf6e3;
  border-radius: 0.3em;
  margin: 0.5em 0;
  padding: 1em;
  overflow: auto;
}
.gatsby-highlight pre[class*="language-"].line-numbers {
  padding: 0;
  padding-left: 2.8em;
  overflow: initial;
}
.gatsby-highlight-code-line {
  background: ${colorSet.main};
  display: block;
  border-radius: 5px;
}
`;

const Footer = styled.footer`
  margin-top: 4.375rem;
`;

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <React.Fragment>
        <GlobalStyle />
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: `60rem`,
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <header>{header}</header>
          <main>{children}</main>
          <Footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </Footer>
        </div>      
      </React.Fragment>
    )
  }
}

export default Layout
