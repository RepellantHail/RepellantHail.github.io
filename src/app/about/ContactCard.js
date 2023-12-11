import React from 'react'
import styles from "./../page.module.css"

export default function ContactCard() {
  return (
    <div 
        className={`card mb-3 ${styles.cardMine}`} 
        style={{width: '18rem'}}
    >
        <img
            className="img-thumbnail"
            src='./../images/developer-profile-picture.png'
            alt="Profile Picture"
        ></img>
        <div class="card-body">
            <h5 class="card-title">Contact</h5>
            <p class="card-text">
                <a href="mailto:jearimmodesto@gmail.com">
                    <i className="fas fa-envelope"></i> jearimmodesto@gmail.com
                </a>
            </p>
            <a href="./../Profile.pdf" download>
                <button type="button" className="btn btn-primary">
                <i className="fas fa-file-arrow-down"></i> Download Resume
                </button>
            </a>
        </div>
    </div>
  )
}
