import React, { Component } from 'react'
import { connect } from 'react-redux'
import AppBar from './AppBar'
import getMainTabs from './MainTabs'
import '../../App.css'

class Layout extends Component {
    constructor() {
        super();
        this._appClass = this.appClass.bind(this);
    }

    appClass() {
        return "App " + this.props.routes[1].path
    }

    render() {
        console.log(this.props.routes[1].path);
        console.log(this.props);

        return (
            <div className={ "App " + this.props.routes[1].path }>
                <AppBar />
                { this.props.isLogged ? getMainTabs() : null }
                { this.props.children }
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isLogged: state.loginButton.loggedIn
    }
};

// const mapDispatchToProps = (dispatch) => {
//     return dispatch
// };

Layout.contextTypes = {
    location: React.PropTypes.object
};

export default connect(mapStateToProps)(Layout)
