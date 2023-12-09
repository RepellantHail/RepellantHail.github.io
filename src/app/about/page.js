import Title from "../components/Title";
import IconPill from "./IconPill";

export default function page() {
    return (
        <div className="container-fluid p-3">
            <div className="d-flex m-1 ">
                <div className="p-2 flex-{grow|shrink}-0">
                    <Title {...{ title: "About me" }} />
                    <p>
                        Hey!, I'm Luis, I'm a software developer, located in México. Welcome to my profile site and portfolio. Checkout the projects on the portfolio page. I'm currently pursuing a degree in Software Engineering at <span>CETI</span> University. My journey into coding began with an extra class in robotics, using Lego Mindstorms.
                    </p>
                    <p>
                        In my coding adventures, I've developed a strong foundation in languages like <span>C++</span>, <span>Javascript</span>, <span>Java</span>, and I specialize in web development. I believe in the power of continuous learning, and I'm always on the lookout for new technologies and trends in the ever-evolving tech landscape.
                    </p>
                </div>
                <div className="p-2">
                <div class="card" style={{width: '18rem'}}>
                    <img
                        src='./../developer-profile-picture.png'
                        alt="Profile Picture"
                        style={{margin: 10, width: 280, height: 200}}
                    ></img>
                    <div class="card-body">
                        <h5 class="card-title">Contact</h5>
                        <p class="card-text">
                            <i class="fa-solid fa-envelope"></i> jearimmodesto@gmail.com
                        </p>
                        <button type="button" class="btn btn-primary"><i class="fa-solid fa-file-arrow-down"></i> Download Resume</button>
                    </div>
                </div>
                </div>
            </div>
            <div className="row m-1">
                <h3>Tools</h3>
                <hr></hr>
                <div className="d-flex flex-wrap m-1">
                    <IconPill title="React"> <i className="fa-brands fa-react"></i> </IconPill>
                    <IconPill title="Css"> <i class="fa-brands fa-css3-alt"></i> </IconPill>
                    <IconPill title="Android"> <i class="devicon-android-plain"></i> </IconPill>
                    <IconPill title="C"> <i class="devicon-c-plain"></i> </IconPill>
                    <IconPill title="C++"> <i class="devicon-cplusplus-plain"></i> </IconPill>
                    <IconPill title="Firebase"> <i class="devicon-firebase-plain"></i> </IconPill>
                    <IconPill title="C#"> <i class="devicon-csharp-plain"></i> </IconPill>
                    <IconPill title="Java"> <i class="devicon-java-plain"></i> </IconPill>
                    <IconPill title="Java Script"> <i class="devicon-javascript-plain"></i> </IconPill>
                    <IconPill title="HTML"> <i class="devicon-html5-plain"></i> </IconPill>
                    <IconPill title="Kotlin"> <i class="devicon-kotlin-plain"></i> </IconPill>
                    <IconPill title="PHP"> <i class="devicon-php-plain"></i> </IconPill>
                    <IconPill title="Sass"> <i class="devicon-sass-original"></i> </IconPill>
                    <IconPill title="jQuery"> <i class="devicon-jquery-plain"></i> </IconPill>
                    <IconPill title="Bootstrap"> <i class="devicon-bootstrap-plain"></i> </IconPill>
                    <IconPill title="MySQL"> <i class="devicon-mysql-plain"></i> </IconPill>
                    <IconPill title="Arduino"> <i class="devicon-arduino-plain"></i> </IconPill>
                    <IconPill title="Node"> <i class="devicon-nodejs-plain"></i> </IconPill>
                    <IconPill title="Bash"> <i class="devicon-bash-plain"></i> </IconPill>
                    <IconPill title="Devicon"> <i class="devicon-devicon-plain"></i> </IconPill>
                    <IconPill title="Git"> <i class="devicon-git-plain"></i> </IconPill>
                    <IconPill title="Next"> <i class="devicon-nextjs-original"></i> </IconPill>
                </div>
            </div>
            <div className="row m-1">
                <h3>Technologies</h3>
                <hr></hr>
                <div className="d-flex flex-wrap m-1">
                    <IconPill title="Ubuntu"> <i class="devicon-ubuntu-plain"></i> </IconPill>
                    <IconPill title="Visual Studio"> <i class="devicon-visualstudio-plain"></i> </IconPill>
                    <IconPill title="VS Code"> <i class="devicon-vscode-plain"></i> </IconPill>
                    <IconPill title="GitHub"> <i class="devicon-github-original"></i> </IconPill>
                    <IconPill title="IntelliJ"> <i class="devicon-intellij-plain"></i> </IconPill>
                    <IconPill title="Canva"> <i class="devicon-canva-original"></i> </IconPill>
                    <IconPill title="freeCodeCamp"> <i class="fa-brands fa-free-code-camp"></i> </IconPill>
                    <IconPill title="Codepen"> <i class="devicon-codepen-plain"></i> </IconPill>
                    <IconPill title="Figma"> <i class="devicon-figma-plain"></i> </IconPill>
                    <IconPill title="Linux"> <i class="devicon-linux-plain"></i> </IconPill>
                    <IconPill title="Debian"> <i class="devicon-debian-plain"></i> </IconPill>
                    <IconPill title="Filezilla"> <i class="devicon-filezilla-plain"></i> </IconPill>
                </div>
            </div>
            <div className="row m-1">
                <h3>Soft Skills</h3>
                <hr></hr>
                <dl className="text-start ms-5">
                    <dt>Communication</dt>
                        <dd>- Effective verbal and written communication skills</dd>                    
                    <dt>Teamwork</dt>
                        <dd>- Collaborative and team-oriented approach</dd>
                    <dt>Problem Solving</dt>
                        <dd>- Analytical thinking and creative problem-solving abilities</dd>
                    <dt>Time Management</dt>
                        <dd>- Efficiently managing time and priorities to meet project deadlines.</dd>
                    <dt>Critical Thinking</dt>
                        <dd>- Analyzing problems and making informed decisions using logic and reasoning.</dd>
                    <dt>Attention to Detail</dt>
                        <dd>- Paying close attention to small details to ensure code quality and accuracy.</dd>
                    <dt>Creativity</dt>
                        <dd>- Thinking outside the box to find innovative solutions to complex problems.</dd>
                    <dt>Adaptability</dt>
                        <dd>- Being open to change and quickly adjusting to new technologies or project requirements.</dd>
                    <dt>Self-Motivation</dt>
                        <dd>- Taking initiative and staying motivated to learn and improve independently.</dd>
                    <dt>Empathy</dt>
                        <dd>- Understanding and considering the perspectives and feelings of others.</dd>
                    <dt>Patience</dt>
                        <dd>- Remaining calm and patient when dealing with challenging issues or bugs.</dd>
                    <dt>Responsibility</dt>
                        <dd>- Taking ownership of tasks and being accountable for outcomes.</dd>
                </dl>
            </div>
        </div>
    );
}
