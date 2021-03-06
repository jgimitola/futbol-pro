import styled from '@emotion/styled';

export const StyledCard = styled.li`
  display: flex;
  align-items: center;
  border: 1px solid #9e9e9e;
  box-shadow: 5px 8px 15px -5px #adadad;
  margin-top: 0.8rem;

  &:hover {
    border-color: #495057;
    border-width: 2px;
  }
`;

interface ImageProps {
  mode: string;
}

export const CardImage = styled.img<ImageProps>`
  aspect-ratio: ${(props) => {
    if (props.mode === 'flag') return 1.33;
    return 1;
  }};
  width: 120px;
`;

export const CardText = styled.p`
  margin-left: 1rem;
  font-size: 1.3rem;
  font-style: italic;
`;
