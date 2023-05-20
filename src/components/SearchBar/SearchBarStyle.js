import styled from 'styled-components';

export const SearchInput = styled.input`
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  width: 300px;
  margin: 0 0 30px 0;

  &:focus {
    outline: none;
    border-color: rgb(191, 57, 57);
  }
`;