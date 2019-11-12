import React, { FC } from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

interface IProps {
  title: string;
}

const Header: FC<IProps> = ({ title }) => (
  <header css={headerStyle}>
    <div css={containerStyle}>
      <h1 css={h1Style}>
        <Link to="/">{title}</Link>
      </h1>
    </div>
  </header>
);

const headerStyle = css`
  display: flex;
  justify-content: center;
  min-height: 50px;
  color: #fff;
  background: rebeccapurple;
  margin-bottom: '1.45rem';
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

const h1Style = css`
  color: #fff;
  margin: 0;

  & > a {
    color: #fff;
  }
`;

export default Header;
