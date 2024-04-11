import React, { useEffect, useState } from 'react'
import EditPost from './Editpost';

const Postcard = ({post, delPosts, updatePosts}) => {

    const [updateOpen, setUpdateOpen] = useState(false) 
  return (
    
        <div className="col"  >
            {updateOpen && <EditPost updatePosts={updatePosts} post={post} setUpdateOpen={setUpdateOpen} updateOpen={updateOpen}/>}
          <div className="card shadow-sm" style={{height: "700px"}}>
            <img src="https://png.pngtree.com/thumb_back/fh260/back_our/20190623/ourmid/pngtree-blue-business-atmosphere-business-card-background-image_243064.jpg" alt="blog-img" />
            <div className="card-body">
              <p className="card-text">{post.title}</p>
              <h2 >{post.userId}</h2>   
              <p className="card-text">{post.body}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  {post.tags.map((tag, ind) => <button key={ind} type="button" className="btn btn-sm btn-outline-secondary">{tag}</button>
                  )}
                </div>
                <small className="text-body-secondary">{post.reactions}</small>
              </div>
            </div>
            <button className='btn btn-primary' onClick={() => delPosts(post.id)}>Delete posts</button>
            <br />
            <button className='btn btn-primary' onClick={() => setUpdateOpen(!updateOpen)}>Update posts</button>
            
          </div>
          
        </div>
      
  )
}

export default Postcard