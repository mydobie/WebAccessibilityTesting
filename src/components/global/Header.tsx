import React from 'react';
import styled from 'styled-components';

interface Props {}

const defaultProps = {};

const Bar = styled.div`
  padding: 15px;
  background-color: #000;
  color: #fff;
  margin-bottom: 50px;
`;

const Header = (props: Props) => <Bar>Web Accessibility Testing</Bar>;

Header.defaultProps = defaultProps;

export default Header;
