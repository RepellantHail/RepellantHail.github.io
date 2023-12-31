import Title from "./components/Title";

export default function Main(){
    return(
        <div className="container-fluid w-100 text-center p-3 m-5">
            <div className='row'>
                <div className="col p-5">
                    <Title {...{ title: "Luis Modesto" }} />
                    <h3 className="m-3"><i class="fa-solid fa-laptop-code"></i> Software Engineer</h3>
                    <p className='w-100 m-3 text-center'>
                    I'm Luis Modesto, a Software Developer passionate about learning and exploring technologies that bring creative ways to resolve problems.
                    </p>
                </div>
                <div className="col text-center p-3">
                    <img
                        src='./images/developer-profile-picture.png'
                        alt="Profile Picture"
                        style={{margin: 10, width: 280, height: 200}}
                    ></img>
                </div>   
            </div>   
        </div>
    );
}