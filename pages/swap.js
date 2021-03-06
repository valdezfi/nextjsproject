import Footer from '../components/footer';
import Navbar from '../components/navbar';
import { useRouter } from 'next/router'
import Swapcoin from '../components/swapcoin';


function Swap() {
    const router = useRouter();
    return (
        <div className="Swap">
            <Navbar dashboard={false} connectwallet={true} />
            <hr />
            <div className="container-fluid ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12  mb-5 p-5">
                            <div className="row d-flex justify-content-between d-grid">
                                <div className="col-lg-6 p-4 mission-box mission-radius mission-border mx-auto">
                                    <div className="row">
                                        <div className="col">
                                            <h1>Swap</h1>
                                        </div>
                                        <div className="col">
                                            <h1 className="text-end">
                                                <a href="#">
                                                    <i className="fas fa-cog" />
                                                </a>
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="row mt-5">
                                        <p className="lathe-special-text"> From</p>
                                    </div>
                                    <div className="row">
                                        <div className="input-group mb-3">
                                            <button
                                                className="btn btn-outline-secondary transparent-dropdown-border"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <img src="/assets/images/image 11.png" /> MATIC
                                            </button>
                                            <input
                                                type="text"
                                                className="form-control transparent-input-border text-end"
                                                defaultValue={0}
                                                aria-label="Text input with dropdown button "
                                            />
                                        </div>
                                    </div>
                                    <div className="row m-3">
                                        <h1 className="text-center">
                                            <i className="far fa-arrow-alt-circle-down" />
                                        </h1>
                                    </div>
                                    <div className="row">
                                        <p className="lathe-special-text"> To</p>
                                    </div>
                                    <div className="row">
                                        <div className="input-group mb-3">
                                            <button
                                                className="btn btn-outline-secondary transparent-dropdown-border"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <img src="/assets/images/WhatsApp Image 2022-05-21 at 11.47 1.png" />{" "}
                                                MEGAFI
                                            </button>
                                            <input
                                                type="text"
                                                className="form-control transparent-input-border text-end"
                                                defaultValue={0}
                                                aria-label="Text input with dropdown button "
                                            />
                                        </div>
                                    </div>
                                    <hr />
                                    <Swapcoin />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Swap;
