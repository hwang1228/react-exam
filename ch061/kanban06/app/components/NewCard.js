import React,{Component, PropTypes} from 'react';
import CardForm from './CardForm'
import CardActionCreators from '../actions/CardActionCreators';
import DraftStore from '../stores/DraftStore';
import { Container } from 'flux/utils';

class NewCard extends Component{

    handleChange(field, value){
        CardActionCreators.updateDraft(field, value);
    }

    handleSubmit(e){
        e.preventDefault();
        // this.props.cardCallbacks.addCard(this.state);
        CardActionCreators.addCard(this.state.draft);
        this.props.router.push('/');
    }

    handleClose(e){
        this.props.router.push('/');
    }

    componentDidMount() {
        setTimeout(()=> CardActionCreators.createDraft(), 0);
    }

    render() {
        return (
            <CardForm draftCard={this.state.draft}
                buttonLabel="Create Card"
                handleChange={this.handleChange.bind(this)}
                handleSubmit={this.handleSubmit.bind(this)}
                handleClose={this.handleClose.bind(this)} />
        );
    }
}

NewCard.propTypes = {
    cardCallbacks: PropTypes.object,
};

NewCard.getStores = ()=>([DraftStore ]);
NewCard.calculateState = (prevState)=>({
    draft:DraftStore.getState()
})
export default Container.create(NewCard);