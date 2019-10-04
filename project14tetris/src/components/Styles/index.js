import styled from "styled-components";

export const StyledTetrisWrapper = styled.div`
  height: 50vw;
  /* width: 100vw;
  height: 100vw; */
`;

export const PanelStyle = styled.div`
  margin-top: 20px;
  /* width: 360px; */
  width: 270px;
  /* height: 600px; */
  background: yellow;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  display: flex;
`;

export const CellStyle = styled.div`
  width: 22.5px;
  height: 22.5px;
  background: #ccc;
  background: ${props => props.color};
  box-shadow: 0 0 1px #fff inset;
  display: flex;
`;
