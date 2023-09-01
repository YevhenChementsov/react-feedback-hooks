import styled from 'styled-components';

export const setColor = ({ value, theme }) => {
  switch (value) {
    case 'good':
      return theme.colors.green;
    case 'neutral':
      return theme.colors.blue;
    case 'bad':
      return theme.colors.red;
    default:
      return 'transparent';
  }
};

export const ButtonsList = styled.ul`
  display: flex;
  gap: 15px;
  justify-content: center;
`;

export const FeedbackButton = styled.button`
  width: 70px;
  height: 40px;

  font-size: 18px;
  font-weight: 500;
  color: ${props => props.theme.colors.primaryText};
  cursor: pointer;

  border: 1px solid;
  border-radius: 8px;

  box-shadow: ${props => `4px 2px 5px 2px ${props.theme.colors.grey}`};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border: 1px solid ${setColor};

    box-shadow: 0 0 10px 2px ${setColor};
  }

  &:focus {
    outline: none;
  }
`;
