import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardBody,
  CardText,
  CardTitle,
} from "reactstrap";

class DishDetail extends Component {
  renderComments(comments) {
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

  renderDish(dish) {
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
  render() {
    if (this.props.dish != null) {
      const comments = this.props.dish.comments;
      return (
        <React.Fragment>
          {this.renderDish(this.props.dish)}
          {this.renderComments(comments)}
        </React.Fragment>
      );
    } else {
      return <div></div>;
    }
  }
}

export default DishDetail;
