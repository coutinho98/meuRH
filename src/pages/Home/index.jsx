import { Link } from "react-router-dom";
import { ButtonLogin } from "./styles";

import Button from "../../components/Button";

export default function Home() {
  return (
    <ButtonLogin>
      <Link to="/password">
        <Button type="button">trocar senha</Button>
      </Link>
    </ButtonLogin>
  );
}
