import React, { Component } from "react";

// import { Container } from './styles';

export default class Post extends Component {
  render() {
    const { post } = this.props;
    return (
      <div className="card">
        <div className="post-header">
          <img className="img-1" src={post.img} alt="logo" />
          <div className="text-header">
            <p className="p1">{post.name}</p>
            <p className="p2">{post.time}</p>
          </div>
        </div>
        <div className="linha"></div>
        <div className="text-post">
          <p>{post.text}</p>
        </div>
      </div>
    );
  }
}
