import React from "react";
import { Card } from "react-bootstrap";
import { Link} from "react-router-dom";



const CardProducto = (props) => {
  return (
    <Card className="my-4">
      <Card.Img variant="top" src={props.imagen} className="w-100" />
      <Card.Body>
        <Card.Title>{props.nombreProducto}</Card.Title>
        <Card.Subtitle>{props.categoria}</Card.Subtitle>
        <Card.Text>Precio: ${props.precio}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Link
          className="btn btn-danger me-2" to={`/detalle-producto/${props.id}`}
        >
          Ver más
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default CardProducto;
