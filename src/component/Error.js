import React,{useEffect,useState} from "react";
import {Modal,Button,Card} from 'react-bootstrap';

const Error = () => {

    function simulateNetworkRequest() {
        return new Promise((resolve) => setTimeout(resolve, 3000));
      }
      const [isLoading, setLoading] = useState(false);

      useEffect(() => {
        if (isLoading) {
          simulateNetworkRequest().then(() => {
            setLoading(false);
          });
        }
      }, [isLoading]);
    
      const handleClick = () => {
          setLoading(true);
          window.location.reload();
        };


    return(
        <div className="container" style={{paddingTop:"6rem"}}>
        <Modal.Dialog className="bg-dark">
            <Modal.Title style={{marginLeft:"1rem"}}>Error 404 ! nOT found</Modal.Title>
            <div style={{display:"flex"}}>
                <Card id="card">
                    <Card.Img variant="top" src="https://www.smashingmagazine.com/images/smashing-cat/sad-cat-2.svg" />
                </Card>
                <Card.Text className="text">
                    While a 404 page can easily stick out from a website, Pipcorn’s error page aligns perfectly with the rest of the site’s branding. There’s a nice animated background,
                </Card.Text>
            </div>
            <Modal.Footer>
                <Button
                    variant="outline-dark"
                    disabled={isLoading}
                    onClick={!isLoading ? handleClick : null}
                    >
                    {isLoading ? 'Loading…' : 'Go Back'}
                </Button>
            
            </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}
export default Error;