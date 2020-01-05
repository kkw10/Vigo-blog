import React from 'react';
import styled from 'styled-components';
import { colorSet } from '../utils/color';

const TagsWrap = styled.ul`
  display: flex;
  font-size: 14px;
  width: 100%;

  & > li {
    padding: 0 0.5rem;
    border-radius: 5px;
    background: ${colorSet.tag.background};
    color: ${colorSet.tag.color};
    text-align: center;
    margin-right: 0.5rem;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const Tags = ({ tagArr }) => {
  return (
    <TagsWrap>
      {tagArr && tagArr.map((tag) => {
        console.log(tag);
        return (
          <li key={tag}>
            {tag}
          </li>
        )
      })}
    </TagsWrap>
  )
}

export default Tags;