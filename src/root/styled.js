import styled from "styled-components";

export const Moc = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 150vh;
  background-color: yellowgreen;
`;
Moc.Main = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  position: fixed;
  z-index: 999;
`;
Moc.Flex = styled.div`
  display: flex;
  flex-direction: column;
  background-color: red;
`;
Moc.Navbar = styled.div`
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  width: 230px;
  height: 100vh;
  position: fixed;
  z-index: 1;
`;
Moc.Basic = styled.div`
  display: flex;
`;
Moc.Sitebar = styled.div`
  display: flex;
  margin-top: 60px;
  margin-left: 230px;
  width: 88%;
  height: 60px;
  position: fixed;
  z-index: 999;
`;
Moc.Footer = styled.div`
  display: flex;
  margin-left: 230px;
  width: 88%;
  height: 100vh;
  position: fixed;
  z-index: -1;
`;
