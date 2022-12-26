import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText,CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);

              
    }

    renderDish() {
        if(this.props.selectedDish != null) {
            const {name, image, price, description } = this.props.selectedDish;
      
            return(
                <Card>
                    <CardImg width="100%" object src={image} alt={name} />
                    <CardBody>
                        <CardTitle >{name}
                            <span className="ml-3 badge badge-pill bg-danger">
                                ${price}
                            </span>
                        </CardTitle>
                        <CardText>{description}</CardText>
                    </CardBody>
                </Card>
                
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }

    renderComments() {
        if(this.props.selectedDish != null) {

            const com = this.props.selectedDish.comments.map((c) => { return(
                <div key={c.id}>
                    <p>
                        {c.comment} <br /><br />
                        -- {c.author} , {c.date}<br />
                    </p>
                </div>
            )});
            
            return(
                <div>
                    <h3>Comments</h3>
                    { com }
                </div>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }

    render() {
        return( 
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish()}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments()}
                </div>
            </div>
        )
    }

}

export default DishDetail;