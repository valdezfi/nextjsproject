import Navbar from '../components/navbar'
import Footer from '../components/footer';
import { useRouter } from 'next/router'
import { useState } from 'react';


function Airdrop() {
    const router = useRouter();

    const [baseUrl, setBaseUrl] = useState("https://yonetwork.org");  
    const [walletAddress, setWalletAddress] = useState("");    
    const [btnDisabled, setBtnDisabled] = useState(true);    
    const [message, setMessage] = useState(""); 
    const [messageColor, setMessageColor] = useState("text-white"); 

    const walletAddressChange = (e) => {
        if(e.target.value.trim().length <= 15){
            setBtnDisabled(true);
            setMessage("Address should not be less than 15 chracters");
            setMessageColor("text-danger");
        }else{
            setBtnDisabled(false);
            setMessage(null);
        }
        
        setWalletAddress(e.target.value);
    }

    const saveWallet = async () =>{
        event.preventDefault();
        const response = await fetch(baseUrl + '/wallet.php?address=' + walletAddress)
        const data = await response.json();
        const dataStatus = data[0].status;
        if(dataStatus === 2){
            setMessage("Duplicate Wallet Address in the database");
            setMessageColor("text-danger");
        }else if(dataStatus === 1){
            setMessage("We have received your wallet address. Thank you!");
            setMessageColor("text-success");
        }else{
            setMessage("Please try again");
            setMessageColor("text-danger");
        }
    }

    return (
        <div className="Airdrop">
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
                                    <form onSubmit={saveWallet}>
                                    <div className="row">
                                        <div className="form-group mb-3 mx-1 mt-5">
                                            <input
                                                onChange={walletAddressChange}
                                                type="text"
                                                className="form-control transparent-input-border text-end"
                                                value={walletAddress}
                                            />
                                        </div>
                                    </div>
                                 
                                    <hr />
                                    <div className="row ps-5 pe-5">
                                        <button className="btn btn-light btn-lg btn-block" type="submit" disabled={btnDisabled}>Submit</button>
                                    </div>

                                    {message && <div className={`message text-center mt-3 ${messageColor}`}>{message}</div>}
                                    </form>


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
