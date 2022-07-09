import Navbar from '../components/navbar'

import { useRouter } from 'next/router'


function AboutUS() {
    const router = useRouter()
    return (
        <div className="AboutUS">
            <Navbar dashboard={false} connectwallet={true} />
            <hr />
            <div className="container-fluid ">
                <div className="container">
                    <div className="row">
                        <a style={{ cursor: "pointer" }} onClick={() => router.back()}><i className="fas fa-arrow-left"></i>  Back</a>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 mission-box mission-radius mission-border mt-5 mb-5 p-5">
                            <div className="row">
                                <div className="col-lg-3">
                                    <img src="/assets/images/Group 36697.png" className="Image-fluid" />
                                </div>
                                <div className="col-lg-9">
                                    <h2><b></b></h2>
                                    <p className="mt-5">
                                        <a className="icon p-2" href="https://t.me/+LdFqD-mMu082ZjYx"><i className="fab fa-telegram-plane"></i></a>
                                        <a className="icon p-2" href="https://twitter.com/megafiprotocol"><i className="fab fa-twitter"></i></a>
                                        <a className="icon p-2" href="https://www.youtube.com/channel/UCcPcWN4irqZDgSpj9fJkBUg"><i className="fab fa-youtube"></i></a>
                                        <a className="icon p-2" href="#"><i className="fab fa-instagram"></i></a>
                                        <a className="icon p-2" href="https://www.tiktok.com/t/ZTdn66sdn/"><i className="fab fa-tiktok"></i></a>
                                    </p>
                                </div>
                            </div>
                            <div className="row"><p className="mt-5">Lathe is running on MEGAFI network, inspired by a Imagexa product. Lathes that are used in modern industry to save time and improve work precision, since CNC centers are very useful for complex machining. Lathe machine is one of the most important machine tools which is used in the metalworking industry. It operates on the principle of a rotating work piece and a fixed cutting tool. The cutting tool is feed into the work piece which rotates about its own axis causing the workpiece to form the desired shape. The revolutionized design of a lathe  allows metal parts enthusiasts to enjoy and have a high-profit stream with no prior investment.</p></div>
                            <div className="row"><a className="mt-5" href="#">Full Research <i className="fas fa-chevron-right"></i><i className="fas fa-chevron-right"></i><i className="fas fa-chevron-right"></i></a></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mission-box mission-radius mission-border mb-5 p-5">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="row"><p className="text-center">NFT in the pool</p></div>
                                    <div className="row"><h2 className="text-center">756,220</h2></div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="row"><p className="text-center">NFT minted</p></div>
                                    <div className="row"><h2 className="text-center">606,420</h2></div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="row"><p className="text-center">1 x USDC = </p></div>
                                    <div className="row"><h2 className="text-center">1.247 NFT</h2></div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="row"><p className="text-center">Completed</p></div>
                                    <div className="row"><h2 className="text-center">128.30%</h2></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mission-box mission-radius mission-border mb-5 p-5">
                            
                            <div className="row">
                                
                            </div>
                            <div className="row">
                                <div className="progress">
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          
        </div>
    );
}

export default AboutUS;