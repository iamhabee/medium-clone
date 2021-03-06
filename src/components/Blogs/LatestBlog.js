import React from 'react'
import { Link } from 'react-router-dom'
import { latestBlogData } from '../../data'

const LatestBlog = () => {
    return (
      <>
        {latestBlogData.map((e) =>
        <Link to={`blog-details/${e.id}`}>
          <div className="card mb-3" key={e.id} >
            <div className="row g-0">
              <div className="col-md-4">
                <img src={`/assets/img/${e.image}`} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{e.title}</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        </Link>
        )}
      </>
    )
}

export default LatestBlog