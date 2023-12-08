export default function Main(){
    return(
        <div className="container-fluid w-100 text-center p-3 m-5">
            <div className='row'>
                <div className="col-6 w-50 p-5">
                    <h1 className="m-3 fs-1">Luis Modesto</h1>
                    <h3 className="m-3">Software Engineer</h3>
                    <p className='w-100 m-3 text-center'>
                    I'm Luis Modesto, a Software Developer passionate about learning and exploring technologies that bring creative ways to resolve problems.
                    </p>
                </div>
                <div className="col-6 text-center p-3">
                    <img
                        src='./developer-profile-picture.png'
                        alt="Profile Picture"
                        style={{margin: 10, width: 280, height: 200}}
                    ></img>
                </div>   
            </div>   
        </div>
    );
}