import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import { Container, Row, Col } from 'react-bootstrap';



export default function Searchbar() {
    const [search, setSearch] = useState("")

    console.log(search)

    return (
        <Container>
            <Row>
                <Col>
        <Navbar className="bg-light justify-content-between">
        <Form inline>
        <FormControl type="text" placeholder="Employee" className=" mr-sm-2" id='search' onChange = {(e) => {setSearch(e.target.value)} } />
        <Button type="submit">Search</Button>
      </Form>
    </Navbar>
            </Col>
        </Row>
    </Container>
    )
}