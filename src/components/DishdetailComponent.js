import React from "react";
import { Card, CardImg, CardBody, CardText, CardTitle } from "reactstrap";

function RenderComments({ comments }) {
  if (comments != null) {
    return (
      <div className="col-xs-12 col-sm-12 col-lg-5 col-md-5 m-1">
        <h4>Comments</h4>
        <ul className="list-unstyled">
          {comments.map((c) => {
            return (
              <li>
                <p>{c.comment}</p>
                <p>
                  -- {c.author},{" "}
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  }).format(new Date(Date.parse(c.date)))}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return <div></div>;
  }
}

function RenderDish({ dish }) {
  if (dish != null) {
    return (
      <div className="col-xs-12 col-sm-12 col-lg-5 col-md-5 m-1">
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  } else {
    return <div></div>;
  }
}
const DishDetail = (props) => {
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <RenderDish dish={props.dish} />
          <RenderComments comments={props.dish.comments} />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetail;
