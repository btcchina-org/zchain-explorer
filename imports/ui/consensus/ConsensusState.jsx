import React, { Component } from 'react';
import { Badge } from 'reactstrap';
import moment from 'moment';
import numeral from 'numeral';
import Consensus from './ConsensusContainer.js';

export default class ConsensusState extends Component {
    constructor(props) {
      super(props);
    }

    render(){
        // console.log(this.props);
        if (this.props.loading){
            return <div>Loading</div>
        }
        else {
            return <div>
                <h1>Consensus State <Badge color="primary">{Meteor.settings.public.chainId}</Badge></h1>
                <Consensus />
            </div>
        }
        
    }
}