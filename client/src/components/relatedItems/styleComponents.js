import styled from 'styled-components';

const ListCarousel = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 10px;
  overflow: auto;
  margin: 0 100px;
  width: 1000px;
  z-index: 0;
  gap: 40px;
`;

export default ListCarousel;
