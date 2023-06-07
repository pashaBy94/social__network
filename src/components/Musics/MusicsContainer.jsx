import React from "react";
import { connect } from "react-redux";
import Musics from "./Musics";
import { compose } from "redux";
import { getListMusics } from "../../redux/selectors";
import Preloader from "./../general/Preloader/Preloader";

class MusicsContainer extends React.Component {
    componentDidMount() {

    }
    componentDidUpdate(prevProp) {

    }
    render() {
        console.log(this.props.listMusics);
        if (!this.props.listMusics) return <Preloader />
        return (<Musics listMusics={this.props.listMusics} />)
    }
}

const mapStateToProp = state => ({
    listMusics: getListMusics(state),
});

export default compose(
    connect(mapStateToProp, {})
)(MusicsContainer)