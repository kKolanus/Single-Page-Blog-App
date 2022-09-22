import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useContext } from 'react';
import DataContext from './context/DataContext';
import {format} from 'date-fns';
import api from './api/posts';
import {useNavigate} from 'react-router-dom';

const EditPost = () => {
  const {
    posts, setPosts
  } = useContext(DataContext);

  const[editTitle, setEditTitle] = useState('');
  const[editBody, setEditBody] = useState('');
  const navigate = useNavigate();


    const {id} = useParams();
    const post = posts.find(post=>(post.id).toString() === id);

    const handleEdit = async (id) => {
      const datatime = format(new Date(), 'MMMM dd, yyyy pp');
      const updatedPost = {id, title: editTitle, datatime, body: editBody};
      try {
        const response = await api.put(`/posts/${id}`, updatedPost)
        setPosts(posts.map(post=> post.id === id ? {...response.data} : post));
        setEditTitle('');
        setEditBody('');
        navigate('/');
      } catch (err) {
        console.log(`Error: ${err.message}`)
      }
    }

    useEffect(()=>{
        if(post){
            setEditTitle(post.title);
            setEditBody(post.body)
        }

    }, [post, setEditBody, setEditTitle])
  return (
    <main className='NewPost'>
    {editTitle &&
    <>
        <h2>Edit Post</h2>
        <form className='newPostForm' onSubmit={(e)=> e.preventDefault()}>
        <label htmlFor="postTitle">Title:</label>
        <input  
        id="postTitle"
        type="text"
        required
        value={editTitle}
        onChange={(e) => setEditTitle(e.target.value)}/>
        <label htmlFor="postBody">Post:</label>
        <textarea 
        id="postBody" 
        required
        value={editBody}
        onChange={(e) => setEditBody(e.target.value)}/>
        <button type='submit' onClick={()=>handleEdit(post.id)}>Submit</button>
        </form>
    </>
    }
    {!editTitle &&
    <>
    <h2>Post Not Found</h2>
        <p>Something went wrong...</p>
        <p>
          <Link to='/'>Go back to Homepage</Link>
        </p>
    </>
    }
</main>
  )
}

export default EditPost