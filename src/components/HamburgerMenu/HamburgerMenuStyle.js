import styled from 'styled-components';
import { colors } from '../../utils/styles/theme';
import { Link } from 'react-router-dom';

export const MenuWrapper = styled.div`
  position: absolute;
  top: 80px;
  right: 0;
  width: 200px;
  background-color: ${colors.bgSecondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0 0 0;
  z-index: 9999;
  border: 2px solid ${colors.primary};
  border-radius: 4px;
`;

export const MenuItem = styled(Link)`
  color: ${colors.textPrimary};
  text-decoration: none;
  margin-bottom: 10px;
  font-size: 18px;
  transition: color 0.3s ease-out;
  padding: 8px 0;
  position: relative;
  width: 100%;

  display: flex;
  justify-content: center;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${colors.primary};
  }

  &:hover {
    color: ${colors.primary};
  }
`;

export const HamburgerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;

  svg {
    width: 32px;
    height: 32px;
    fill: ${props => (props.isOpen ? colors.primary : colors.textPrimary)};
  }
`;