import React, { Component } from "react";

import Post from './../../components/Post'
// import { Container } from './styles';

export default class Posts extends Component {
  state = {
    posts: [
      {
        name: "Davi Cardoso",
        img:
          "https://avatars2.githubusercontent.com/u/59803604?s=400&u=aae3ce9d18dbd5b67fa9ea8db37b393c71d7c58c&v=4",
        time: "há 2min",
        text: "I got in touch with programming a little over 4 months ago. In the meantime, I was able to develop solid knowledge in front-end development, and I feel the need to enter the job market using the main technologies of the moment such as ReactJS, Vue Js and angularJS."
      },
      {
        name: "Daniel Cardoso",
        img:
          "https://avatars2.githubusercontent.com/u/37663993?s=400&v=4",
        time: "há 4min",
        text: "Working as a front-end developer for over 4 years, I always try to adapt to the new technologies of the market and I'm always looking for new challenges."
      },
      {
        name: "Diego schell Fernandes",
        img:
          "https://avatars1.githubusercontent.com/u/2254731?s=400&v=4",
        time: "há 9min",
        text: "CTO at @Rocketseat. Passionate about the best web and mobile development technologies."
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="container">
        {posts.map((post, key) => (
          <Post key={key} post={post}/>
        ))}
      </div>
    );
  }
}
