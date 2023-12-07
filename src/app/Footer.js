export default function Footer() {
    return (
        <div className="container-fluid text-center">
            <div className="row">
                <div className="col-8">
                    <h4>Luis Modesto</h4>
                </div>
                <div className="col-4">
                    <h4>Social</h4>
                    <div className="d-flex justify-content-evenly">
                        <i class="bi-alarm"></i>
                        <i class="bi-alarm"></i>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col d-flex justify-content-evenly">
                    <h6>Built with: React.js  Next.js </h6>
                    <h6>Copyright © Luis Modesto 2023 </h6>
                </div>
            </div>
        </div>
    );
  }