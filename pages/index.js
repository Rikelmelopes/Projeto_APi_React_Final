import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";
import Cabecalho from "../components/Cabecalho";
import Pagina from "../components/Pagina";

export default function Home() {
  return (
    <>
      <Pagina titulo="Pagina inicial" />
      <Container>
        <h1>hello</h1>

        <p>1</p>
        <p>2</p>
        <p>3</p>
      </Container>
    </>
  );
}
