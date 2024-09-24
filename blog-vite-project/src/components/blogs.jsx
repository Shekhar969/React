import React from "react";
import { Link } from "react-router-dom";

const BlogsPosts = ()=>{
  const Blogpost =[
    {
      id:1,
      title:"This Is the First Title",
      description:"This Is the First Description"
    },
    {
      id:2,
      title:"This Is the second Title",
      description:"This Is the second Description"
    },
    {
      id:3,
      title:"This Is the Third Title",
      description:"This Is the Third Description"
    },
  ];

    return (
      <>
      <h1>Here You Can Find Daily Posts</h1>

        <ul>
          {
            Blogpost.map((post) => (
              <li key={post.id}>
                <Link to={`/blogs/${post.id}`}>{post.title}</Link>
              </li>
            ))
          }
        </ul>

      </>
    )

};

export default BlogsPosts;