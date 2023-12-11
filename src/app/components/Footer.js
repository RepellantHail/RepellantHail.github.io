
import styles from "./../page.module.css"

export default function Footer() {
    return (
        <div className={`container-fluid text-center ${styles.footer}`}>
            <div className="row m-2 p-1">
                <div className="col-6">
                    <h4  className='mb-3'>Luis Modesto</h4>
                    <p>Software Engineering Student</p>
                </div>
                <div className="col-6" >
                    <h4  className='mb-3'>Social</h4>
                    <div className="d-flex  flex-wrap justify-content-end p-1">
                        <a className="icon-link" href="https://www.linkedin.com/in/jearim-modesto/" target="_blank">
                            <i class="bi bi-linkedin"> </i>        
                            LinkedIn                      
                        </a>
                        <a className="icon-link" href="https://github.com/RepellantHail" target="_blank">
                            <i class="bi bi-github"> </i>
                            Github
                        </a>     
                        <a className="icon-link" href="https://leetcode.com/a20310068/" target="_blank">                            
                            <img src='./utils/leetcode.svg' alt="leetcode SVG" style={{ margin: 0, width: 20, height: 20}}/>
                            LeetCode
                        </a> 
                        <a className="icon-link" href="https://www.hackerrank.com/profile/a20310068" target="_blank">      
                            <i class="fa-brands fa-hackerrank"></i>
                            HackerRank
                        </a>     
                        <a className="icon-link" href="https://www.codewars.com/users/RepellantHail10" target="_blank">  
                            <img src='./utils/codewars.svg' alt="codewars SVG" style={{ margin: 0, width: 20, height: 20}}/>
                            CodeWars
                        </a>                        
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="row m-3">
                <div className="col d-flex  flex-wrap  justify-content-between">
                    <h6>Built with: 
                        <i class="fa-brands fa-react"></i> React.js  Next.js 
                        <i class="fa-brands fa-bootstrap"></i> Bootstrap
                    </h6>
                    <h6>Copyright © Luis Modesto 2023 </h6>
                </div>
            </div>
        </div>
    );
  }