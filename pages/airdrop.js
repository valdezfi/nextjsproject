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
    const [tweetShared, setTweetShared] = useState(false);
    const [isAddressLength, setIsAddressLength] = useState(false);


    const walletAddressChange = (e) => {
        if (e.target.value.trim().length <= 15) {
            setBtnDisabled(true);
            setMessage("Address should not be less than 15 chracters");
            setIsAddressLength(false);
            setMessageColor("text-danger");
        } else {
            setIsAddressLength(true);
            setMessage(null);
            validateShare();
        }

        setWalletAddress(e.target.value);
    }

    const validateShare = () => {
        if(tweetShared){
            setBtnDisabled(false);
        }
    }

    const validateAddressLength = () => {
        if(isAddressLength){
            setBtnDisabled(false)
        }
    }

    const confirmTweet = () => {
        event.preventDefault();
        setTweetShared(true);
        validateAddressLength();
    }


    const saveWallet = async () => {
        event.preventDefault();
        const response = await fetch(baseUrl + '/wallet.php?address=' + walletAddress)
        const data = await response.json();
        const dataStatus = data[0].status;
        if (dataStatus === 2) {
            setMessage("Duplicate Wallet Address in the database");
            setMessageColor("text-danger");
        } else if (dataStatus === 1) {

            setMessage("We have received your wallet address. Thank you!");
            setMessageColor("text-success");
        } else {
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
                                        <div className="row ps-5 pe-5 mb-4">
                                            <button className="btn btn-light btn-lg btn-block" type="submit" disabled={btnDisabled}>Submit</button>
                                        </div>

                                        {message && <div className={`message text-center mt-3 ${messageColor}`}>{message}</div>}

                                        <hr />
                                        <div className='mt-1 me-3 row'>
                                            <div className='col-10'>
                                                <p>Share this Airdrop before submitting to qualify</p>
                                            </div>
                                            <div className="col-2">
                                                <a className="twitter-button"
                                                    onClick={confirmTweet}
                                                    href="https://twitter.com/intent/tweet?text=I%20just%20joined%20the%20%23megafiairdrop.%20The%20internet%20of%20NFTs%20at%20%40megafiprotocol."
                                                    data-text="I just joined the #megafiairdrop. The internet of NFTs at @megafiprotocol."
                                                    data-url=""
                                                    data-size = "large"
                                                    data-related="airdrops,nfts"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Tweet
                                                </a>
                                            </div>
                                        </div>

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
