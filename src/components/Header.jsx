import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <Container>
      <a>
        <img className="logo" src="/Images/logo.svg" alt="Logo" />
      </a>
      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model Y</a>
        <a href="#">Model X</a>
        <a href="#">Model 3</a>
        <a href="#">Solar Panel</a>
        <a href="#">Solar Roofs</a>
      </Menu>

      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <Hamburger />
      </RightMenu>
      <HamburgerMenu>
        <li>
          <a href=""></a>Model S
        </li>
        <li>
          <a href=""></a>Model 3
        </li>
        <li>
          <a href=""></a>Model X
        </li>
        <li>
          <a href=""></a>Model Y
        </li>
        <li>
          <a href=""></a>solar roof
        </li>
        <li>
          <a href=""></a>solar panels
        </li>
        <li>
          <a href="">Existing Inventory</a>
        </li>
        <li>
          <a href="">Used inventory</a>
        </li>
        <li>
          <a href="">test drive</a>
        </li>
        <li>
          <a href="">powerwall</a>
        </li>
        <li>
          <a href="">commercial energy</a>
        </li>
        <li>
          <a href="">utilities</a>
        </li>
        <li>
          <a href="">charging</a>
        </li>
        <li>
          <a href="">find us</a>
        </li>
        <li>
          <a href="">support</a>
        </li>
        <li>
          <a href="">investor relations</a>
        </li>
        <li>
          <a href="">shop</a>
        </li>
        <li>
          <a href="">account</a>
        </li>
        <li>
          <a href="">
            more <span>></span>
          </a>
        </li>
      </HamburgerMenu>
    </Container>
  );
};

export default Header;

// styling goes here

const Container = styled.div`
  min-height: 4rem;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  justify-content: space-between;
  top: 0;
  right: 0;
  left: 0;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  @media (max-width: 805px) {
    display: none;
  }

  a {
    font-weight: 500;
    text-transform: capitalize;
    padding: 1px 5px;
    flex-wrap: nowrap;
    border-radius: 5px;
    margin-right: 0.5rem;
  }

  a:hover {
    animation: rightFill infinite 1s;
    animation-direction: alternate;
    animation-fill-mode: forwards;
    animation-timing-function: linear;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 500;
    text-transform: capitalize;
    padding: 1px 5px;
    flex-wrap: nowrap;
    border-radius: 5px;
  }
  a:hover {
    animation: rightFill infinite 1s;
    animation-direction: alternate;
    animation-fill-mode: forwards;
    animation-timing-function: linear;
  }

  @media (max-width: 805px) {
    a {
      display: none;
    }
  }
`;

const Hamburger = styled(MenuIcon)`
  cursor: pointer;
`;
const HamburgerMenu = styled.div`
  display: none;
  margin-top: 1rem;
  text-transform: capitalize;
  list-style: none;
  background-color: white;
  padding: 2rem 1rem 1rem 2rem;
  line-height: 2.2rem;
  
  li {
    width: 18rem;
    text-align: left;
  }
  }
`;
