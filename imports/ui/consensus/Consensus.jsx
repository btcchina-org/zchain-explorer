import React from 'react';
import { Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import moment from 'moment';
import numeral from 'numeral';

export default class ConsensusState extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          consensus: ""
      }
    }

    componentDidUpdate(prevProps){
        if (this.props.consensus != prevProps.consensus){
            if ((this.props.consensus.prevotes.length > 0) && (this.props.consensus.precommits.length > 0)){

            }
        }
    }

    render(){
        console.log(this.props);
        if (this.props.loading){
            return <div>Loading</div>
        }
        else {
            if (this.props.consensusExist){
                return <div>

                </div>
            }
            else{
                return <div>No consensus exists.</div>
            }
        }
    }
}