import React from "react";
import { Card, CardImg, CardText,CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link, BrowserRouter } from 'react-router-dom';



    function RenderDish({dish}) {
        if(dish != null) {
            const {name, image, price, description } = dish;
      
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

    function RenderComments({comments}) {
        if(comments != null) {

            const com = comments.map((c) => { return(
                <div key={c.id}>
                    <p>
                        {c.comment} <br /><br />
                        -- {c.author} , {new Intl.DateTimeFormat('en-Us', { year: 'numeric', month: 'short', day:'2-digit' }).format(new Date(Date.parse(c.date)))}<br />
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

const DishDetail = (props) => {  
    if(props.dish != null)
        return( 
            <BrowserRouter>
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3> 
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
            </BrowserRouter>
        )
}
export default DishDetail;