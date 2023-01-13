import { render } from "@testing-library/react";
import React from "react";
import { Media } from "reactstrap";

function RenderLeader(props) {
    
    const leader = props.leaders.map((leader) => {
        return (
            <div key={leader.id} className="col-12">
                <Media className='m-3'>
                    <img src={leader.image} alt={leader.alt} />
                    <Media body className="ml-3">
                        <Media heading>{leader.name}</Media>
                        <Media>{leader.designation}</Media>
                        <br />
                        <Media className='d-none d-sm-block'>{leader.description}</Media>
                    </Media>
                </Media> <br />
            </div>
        );
    });
    
    return(
        <div>{leader}</div>
        
    )
}

export default RenderLeader;