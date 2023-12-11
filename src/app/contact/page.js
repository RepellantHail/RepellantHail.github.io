import React from 'react'
import Title from '../components/Title'

export default function page() {
    return (
      <div className='container-fluid vh-100 text-center p-5'>
          <Title {...{title: 'Contact'}}/>
          <p> I'm seeking opportunities to collaborate in projects that bring value to the world. I'm eager to learn and share it with the world as together we reach farther. I'm excited about the potential of technology to improve lives and I'm seeking projects that leverage technology for positive change.</p>
          <p>Leave a comment about your thoughts on the this website as I'm constantly updating the site.</p>
          <p>Get in touch to discuss potential collaborations. </p>          
          <dl className="text-start ms-5">
            <dt><i class="fa-solid fa-envelope"></i> Email</dt>
                <a href="mailto:jearimmodesto@gmail.com">
                    <i className="fas fa-envelope"></i> jearimmodesto@gmail.com
                </a>
            <dt><i class="fa-brands fa-linkedin"></i> LinkedIn</dt>
              <dd>
                        <a className="icon-link" href="https://www.linkedin.com/in/jearim-modesto/" target="_blank">
                            <i class="bi bi-linkedin"> </i>        
                            Jearim Modesto
                        </a></dd>  
          </dl>
      </div>
    )
  }
  
