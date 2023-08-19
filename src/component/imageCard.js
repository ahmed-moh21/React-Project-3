import React from "react";
import {Card,ListGroupItem,ListGroup} from 'react-bootstrap';


const ImageCard = ({image}) => {
    return(
        <div>
            
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image.webformatURL} />
                <Card.Body>
                    <Card.Title>{image.tags}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>likes : {image.likes}</ListGroupItem>
                    <ListGroupItem>Comments : {image.comments}</ListGroupItem>
                    <ListGroupItem> Downloads : {image.downloads}</ListGroupItem>
                </ListGroup>
                </Card>
            
        </div>
    )
}
 
export default ImageCard;