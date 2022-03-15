import React from "react";
import Main from "../components/main";
import Navbar from "../components/navbar";
import Sitebar from "../components/sitebar";
import Footer from "../components/footer";
import { Scrollbars } from "react-custom-scrollbars";
import { Moc } from "./styled";
export const Root = () => {
  return (
    <Scrollbars style={{ width: "100%", height: "100%" }}>
      <Moc>
        <Moc.Main>
          <Main />
        </Moc.Main>
        <Moc.Flex>
          <Moc.Navbar>
            <Scrollbars style={{ width: "100%", height: "100%" }}>
              <Navbar />
            </Scrollbars>
          </Moc.Navbar>
          <Moc.Basic>
            <Moc.Sitebar>
              <Sitebar />
            </Moc.Sitebar>
            <Moc.Footer>
              <Scrollbars style={{ width: "100%", height: "100%" }}>
                <Footer />
              </Scrollbars>
            </Moc.Footer>
          </Moc.Basic>
        </Moc.Flex>
      </Moc>
    </Scrollbars>
  );
};
export default Root;
