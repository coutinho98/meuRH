import { Container } from "./styles";

import logo from "../../assets/images/myRH.png";

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="MyRH" width="201" />
    </Container>
  );
}
