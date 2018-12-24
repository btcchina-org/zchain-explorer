import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Chain } from '/imports/api/chain/chain.js';
import ConsensusState from './Consensus.jsx';

export default ConsensusStateContainer = withTracker(() => {
    const statusHandle = Meteor.subscribe('chain.status');
    const loading = !statusHandle.ready();
    const consensus = Chain.findOne({chainId:Meteor.settings.public.chainId});
    const consensusExist = !loading && !!consensus;
    // console.log(props.state.limit);
    return {
        loading,
        consensusExist,
        consensus: consensusExist ? consensus : {}
    };
})(ConsensusState);

