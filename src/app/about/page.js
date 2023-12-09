import Title from "../components/Title";
import IconPill from "./IconPill";

export default function page() {
    return (
        <div className="container-fluid p-3">
            <div className="row m-3 ">
                <div className="col-8">
                    <Title {...{ title: "About me" }} />
                    <p>
                        Hey!, I'm Luis, I'm a software developer, located in México. Welcome to my profile site and portfolio. Checkout the projects on the portfolio page. I'm currently pursuing a degree in Software Engineering at <span>CETI</span> University. My journey into coding began with an extra class in robotics, using Lego Mindstorms.
                    </p>
                    <p>
                        In my coding adventures, I've developed a strong foundation in languages like <span>C++</span>, <span>Javascript</span>, <span>Java</span>, and I specialize in web development. I believe in the power of continuous learning, and I'm always on the lookout for new technologies and trends in the ever-evolving tech landscape.
                    </p>
                </div>
                <div className="col-4">
                    <h2>Picture</h2>
                </div>
            </div>
            <div className="row m-3">
                <div>
                    <h3>Tools</h3>
                    <hr></hr>
                    <div className="d-flex flex-wrap m-3">
                        <IconPill title="React">
                            <i className="fa-brands fa-react"></i>
                        </IconPill>
                        <IconPill title="React">
                            <i className="fa-brands fa-react"></i>
                        </IconPill>
                    </div>
                </div>
            </div>
        </div>
    );
}
