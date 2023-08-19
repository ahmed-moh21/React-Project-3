import React,{useState} from "react";
import {Navbar,Container,Form,FormControl,Button} from 'react-bootstrap';

const ImageSearch = ({searchText}) => {
    const [text, setText] = useState('');

    const onSubmit =(e) => {
        e.preventDefault();
        
        searchText(text);
    }

    return(
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Form  className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        onChange={e => setText(e.target.value)}
                        />
                        <Button onClick={onSubmit} variant="outline-success">Search</Button>
                    </Form>
                </Container>
            </Navbar>
        </div>
    );
}

export default ImageSearch;