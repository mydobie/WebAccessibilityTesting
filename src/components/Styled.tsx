/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import styled from 'styled-components';

const StyledSectionDivider = styled.div`
  height: 35px;
`;

const StyledSneakyLink = styled.a`
  text-decoration: none;
  color: var(--bs-body-color);
`;

export const SectionDivider = (props: any) => (
  <StyledSectionDivider {...props} />
);
export const SneakyLink = (props: any) => <StyledSneakyLink {...props} />;
