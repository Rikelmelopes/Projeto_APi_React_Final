import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Pagina from "../../components/Pagina";
import apiFilmes from "../../services/apiFilmes";

const Detalhes = ({ filme }) => {
  return (
    <Pagina titulo={filme.title}>
      <Row>
        <Col md={3}>
          <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`}
          />
        </Col>

        <Col md={9}>
          <p>
            {" "}
            <strong>Data de lançamento: </strong>
            {filme.release_date}
          </p>
          <p>
            <strong>Orçamento:R$ </strong>
            {filme.budget.toFixed(1).replace(".", ",")}
          </p>
          <p>
            <strong>Duração: </strong>
            {filme.runtime}
          </p>
          <p>
            <strong>Nota: </strong>
            {filme.vote_average.toFixed(1)}
          </p>
          <div>
            {filme.genres.map((Item) => (
              <li>{Item.name}</li>
            ))}
          </div>
          <p>{filme.overview}</p>
        </Col>
      </Row>
    </Pagina>
  );
};

export default Detalhes;

export async function getServerSideProps(context) {
  const id = context.params.id;

  const resultado = await apiFilmes.get(`/movie/${id}?language=pt-BR`);

  const filme = await resultado.data;
  const generos = filme.genres;
  return {
    props: { filme, generos }, // will be passed to the page component as props
  };
}
