import React, { Component} from 'react';
import {connect} from 'react-redux';

class Dash extends Component {
    renderContent(){
        switch (this.props.auth){
            case null:
              return ;
            case false:
              return [
                <h4 className="card-title">Dashboard for user who is <strong>NOT logged in</strong> </h4>,
                <p className="card-text">Statistic related to this account will go here</p>
              ]
            default:
              return [
                <h4 className="card-title">Dashboard for <strong>logged in </strong>user</h4>,
                <p className="card-text">Statistic related to this account will go here</p>
              ];
          }
    }
 
    render(){
    return (
        <div className="m-4">
            <div className="card">
                <div className="card-body text-center">

                    {this.renderContent()}     

                </div>
            </div>
            
        </div>
            
    );
};
};

function mapStateToProps(state){
    return { auth: state.auth };
  }
export default connect(mapStateToProps)(Dash);
