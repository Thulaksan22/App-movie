import React, { Component } from "react";
import '../Style/movie.css';

import { Card, Button, CardDeck, Col, Container } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'

import { movies$ } from "../Data/movies";
import Filter from "./Filter"

function add() {
  console.log("add");
}
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
          <div className=" mr-5 d-flex justify-content-end">
            <Filter/>
          </div>
            <CardDeck>
            {this.state.movies.map(movie => 
            
                <Col className="col-lg-4 d-flex align-items-stretch justify-content-center">  
                  <Card key={movie.id} className="shadow mb-4 mt-5" style={{ backgroundColor: "#382545", borderRadius:"15px", height: "auto", width: "auto", maxWidth: "290px"}}>
                    <Card.Img variant="top" src={"images/"+movie.image} alt={movie.title} style={{ borderTopRightRadius:"15px", borderTopLeftRadius:"15px", height: "auto", maxHeight: "350px", width: "auto", maxWidth: "300px"}}/>
                    <Card.Body>
                      <Card.Title style={{ color: "white", fontWeight: "bold"}}>{movie.title}</Card.Title>
                      <Card.Text style={{ color: "white"}}>
                        Categorie: {movie.category}
                      </Card.Text>
                      <Col className="d-flex mb-4 justify-content-around">
                        
                          <Button onClick={add} style={{backgroundColor: "#382545", borderColor:"#9198e5"}}><FontAwesomeIcon icon={faThumbsUp} /></Button>
                          <p className="mr-5" style={{ color: "white"}}>{movie.likes}</p>
                       

                          <p style={{ color: "white"}}>{movie.dislikes}</p>
                          <Button style={{backgroundColor: "#382545", borderColor:"#9198e5"}}><FontAwesomeIcon icon={faThumbsDown} flip="horizontal" /></Button>
                                 
                      </Col>
                      
                    
                      <Button className="mt-auto btn btn-lg btn-block" style={{backgroundColor: "#382545", borderColor:"#9198e5"}}>Supprimer</Button>
                      
                    </Card.Body>
                  </Card>
              </Col>
           
            )}
            </CardDeck>

      </div>
    );
  }
}
