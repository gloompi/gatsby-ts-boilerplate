import React, { FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Global, css } from '@emotion/core';

import Header from 'components/header';

const Layout: FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Global styles={globalStyles} />
      <Header title={data.site.siteMetadata.title} />
      <main css={mainStyle}>{children}</main>
      <footer css={footerStyle}>
        <div css={containerStyle}>
          © {new Date().getFullYear()}, Made with love by GloompiQue
        </div>
      </footer>
    </>
  );
};

const mainStyle = css`
  width: 100%;
  min-height: calc(100vh - 100px);
`;

const footerStyle = css`
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  color: #fff;
  background: rebeccapurple;
`;

const containerStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 50px;
  width: 100%;
  padding: 0 calc((100vw - 1200px) / 2);
  margin: 0 25px;
`;

const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  html,
  body {
    margin: 0;
    color: #555;
    font-family: -apple-system, BlinkMacSystemFont, 'segoe UI', Roboto, Helvetica, sans-serif
    font-size: 18px;
    line-hegiht: 1.4;

    > div {
      margin-top: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: #222;
      line-height: 1.1;

      + * {
        margin-top: 0.5rem;
      }
    }

    li {
      margin-top: 0.25rem;
    }

    a {
      text-decoration: none;
    }
  }
`;

export default Layout;
