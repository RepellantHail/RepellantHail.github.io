
import styles from './page.module.css'

export default function Footer() {
    return (
        <div className={`container-fluid text-center ${styles.footer}`}>
            <div className="row m-3 ">
                <div className="col-8">
                    <h4  className='mb-3'>Luis Modesto</h4>
                    <p><i class="fa-solid fa-laptop-code"></i> Software Engineering Student</p>
                </div>
                <div className="col-4 " >
                    <h4  className='mb-3'>Social</h4>
                    <div className="d-flex justify-content-end">
                        <a className="icon-link" href="https://www.linkedin.com/in/jearim-modesto/">
                            <i class="bi bi-linkedin"> </i>        
                            LinkedIn                      
                        </a>
                        <a className="icon-link" href="https://github.com/RepellantHail">
                            <i class="bi bi-github"> </i>
                            Github
                        </a>     
                        <a className="icon-link" href="https://leetcode.com/a20310068/">                            
                            <img src='./leetcode.svg' alt="My SVG" style={{ margin: 0, width: 20, height: 20}}/>
                            LeetCode
                        </a>                     
                    </div>
                </div>
            </div>
            <div className="row m-5">
                <div className="col d-flex justify-content-between">
                    <h6>Built with: <i class="fa-brands fa-react"></i> React.js  Next.js </h6>
                    <h6>Copyright © Luis Modesto 2023 </h6>
                </div>
            </div>
        </div>
    );
  }