import React from 'react'

export default function ProjectCard({title, picture, desc, tools, repo, liveSite}) {
  return (
    <div className='col'>
      <div className="card mb-3" 
      style={{
          maxWidth: "540px",
        }}
        >
        <div className="row g-0 align-items-center">
          <div className="col-md-4">
            <img src={picture} className="img-fluid img-thumbnail m-1" alt="projectImage"/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{desc}</p>
              <p className="card-text"><small className="text-body-secondary">{tools}</small></p>
              <div className='card-footer d-flex justify-content-end'>
                <a href={repo} target='_blank' style={{color: 'inherit', }}> <i class="fa-brands fa-github"></i> </a>
                <a href={liveSite} target='_blank' style={{color: 'inherit', }}> <i class="fa-solid fa-arrow-up-right-from-square"></i> </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
