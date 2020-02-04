import React, { Component } from 'react'
import { connect } from 'react-redux';

class Post extends Component {

    handleClick = () => {
        this.props.deletePost (this.props.post.id)
        this.props.history.push ('/messpa')
}

    render () {
        console.log('t ',this.props);
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center" >
                    <button className="btn grey" onClick={this.handleClick} >Delete post</button>
                </div>
            </div>
        ) : (
            <div className="center">Loading post...</div>
        )

        return (
            <div className="container">
                { post }
            </div>
        )
    }
}
//loading params from props of this component. these params added to its props by Router.
//take id from router.params.history, get post_id from "address bar"
//check all state and find a post with that post_id
//drop it to props of this component by redux.connect. Use it as this.props.post later.

const mapStateToProps = (state, ownProps) => {
    let post_id = ownProps.match.params.post_id; 
    return {
        post: state.posts.find( post => post.id === post_id )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (idPostForDel) => { dispatch ({ type: "DELETE_POST", id: idPostForDel })  }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
