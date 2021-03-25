import React, { Component } from "react";

import { Card, Button, CardDeck, Col, Container } from "react-bootstrap";

import { movies$ } from "../Data/movies";
import Filter from "./Filter"

export default class Movies extends Component {
  constructor() {
    super()
    this.state = {
     movies: []
    }
  }
  componentDidMount() {
     movies$
     .then(data => this.setState({movies: data}))
  }
  render() {
    return (
      <div>
          <h1 style={{ color: "white"}}>Movies</h1>
          <Filter></Filter>
            <CardDeck>
            {this.state.movies.map(movie => 
            
                <Col className="col-lg-4 d-flex align-items-stretch">  
                  <Card key={movie.id} className="shadow mb-4" style={{ backgroundColor: "#382545", borderRadius:"15px"}}>
                    <Card.Img variant="top" src={"images/"+movie.image} alt={movie.title} style={{ borderTopRightRadius:"15px", borderTopLeftRadius:"15px"}}/>
                    <Card.Body>
                      <Card.Title style={{ color: "white", fontWeight: "bold"}}>{movie.title}</Card.Title>
                      <Card.Text style={{ color: "white"}}>
                        Categorie: {movie.category}
                      </Card.Text>
                    
                      <Button variant="primary" className="mt-auto btn btn-lg btn-block" style={{ backgroundColor: "#382545"}}>Supprimer</Button>
                      
                    </Card.Body>
                  </Card>
              </Col>
           
            )}
            </CardDeck>

      </div>
    );
  }
}
