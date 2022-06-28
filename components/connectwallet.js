import Swapcoin from "./swapcoin"
import ConnectWalletButton from './_connectwallet';

function ConnectWallet() {
    return (
        <div 
        className="container-fluid ">
             <Swapcoin />
            <div className="container">
                <div className="row">
                    <div className="col-lg-12  mb-5">
                        <div className="row  d-flex justify-content-between d-grid ">
                            <div className="col-lg-5 mb-1 text-center  mission-box mission-radius mission-border">
                                <div className="row"><p className="p-3"><b>Please connect your wallet to proceed</b></p></div>
                                <div className="row mb-3">
                                    <img src="/assets/images/Group 36690.png" className="mx-auto d-block lathe-images" />
                                </div>
                                <ConnectWalletButton />
                            </div>
                            <div className="col-lg-5 p-4 mt-1  mission-box mission-radius mission-border">
                                <p><b>Requirements:</b></p>
                                <ol>
                                    <li>You will purchase with MFI on MEGAFI. You will claim your NFT on Imagexa.</li>
                                    <li>You MUST set your Imegaxa Address before 30th May, 4am UTC.</li>
                                    <li>Prepare an Imegaxa Address. ONLY use https://wallet.imagesa.mx/</li>
                                    <li>Claims will go live on 30th May, 12PM UTC.</li>
                                    <li>You MUST Opt-In to the Zone Token in order to receive airdrops associated with the Imagexa Lathe NFT.</li>

                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default ConnectWallet;
