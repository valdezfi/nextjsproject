import Navbar from '../components/navbar'
import Footer from '../components/footer';
import { useRouter } from 'next/router'


function Airdrop() {
    const router = useRouter()
    return (
        <div className="Lathe">
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
                                            <h1>Airdrop</h1>
                                        </div>
                                        <div className="col">
                                            <h1 className="text-end">
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-group mb-3 mt-5">
                                            <input
                                                type="text"
                                                className="form-control transparent-input-border text-end"
                                                aria-label="Text input with dropdown button"
                                            />
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row ps-5 pe-5">
                                        <button className="btn btn-light  btn-lg btn-block" type="button">Submit</button>
                                    </div>
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

export default Airdrop;
