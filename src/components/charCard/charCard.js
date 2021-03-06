import React, { Component } from "react";
import GotService from "../../services/gotService";
import { CardBody, CardImg, Card, CardTitle, CardText, CardSubtitle, } from "reactstrap";
import { FaCircle } from 'react-icons/fa';
import './charCard.css'

export default class RandomChar extends Component {

    gotService = new GotService()

    state = {
        char: {}
    }

    componentDidMount() {
        this.updateChar()
    }

    onCharLoaded = (char) => {
        this.setState({ char })
    }

    updateChar() {
        const id = Math.floor(Math.random() * 826 + 1)

        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
    }

    render() {

        const { char: { name, gender, status, image, species, type, location } } = this.state


        return (
            <>
                <Card>
                    <CardImg
                        alt="image"
                        src={image}
                        top
                        width="100%"
                        className="charCard"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            {name}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            <span className="span__circle">
                                <FaCircle className={status} />
                                {status}-{gender}
                            </span>
                        </CardSubtitle>
                        <CardText>
                            <span className="text-gray">Last known location:</span> {location}
                        </CardText>
                        <CardText>
                            <span className="text-gray">Species:</span> {species}
                        </CardText>
                        <CardText>
                            <span className="text-gray">Type:</span> {type}
                        </CardText>
                    </CardBody>
                </Card>
            </>
        )
    }
}