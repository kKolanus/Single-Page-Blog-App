import React from 'react'
import {useParams, Link} from "react-router-dom"

const PostPage = ({posts, handleDelete}) => {
  const {id} = useParams();
  const post = posts.find(post=>(post.id).toString() === id)
  return (
    <main className='PostPage'>
        <article className='post'>
          {post && 
            <>
              <h2>{post.title}</h2>
              <p className='postDate'>{post.datatime}</p>
              <p className='postBody'>{post.body}</p>
              <Link to={`/edit/${post.id}`}>
              <button className='editButton'>Edit Post</button>  
              </Link>
              <button className='deleteButton' onClick={()=>handleDelete(post.id)}>Delete Post</button>
            </>
          }
          {!post && 
            <>
              <h2>POST NOT FOUND</h2>
              <p>Selected post doesn't exist</p>
              <p>
                <Link to='/'>Return to Homepage</Link>
              </p>
            </>
          }
        </article>
    </main>
  )
}

export default PostPage