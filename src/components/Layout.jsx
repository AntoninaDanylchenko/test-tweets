import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Container, StyledMain } from "./Styles.styled";

export const Layout = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <Container>
          <Suspense>
            <Outlet />
          </Suspense>
        </Container>
      </StyledMain>
      <Footer />
    </>
  );
};
