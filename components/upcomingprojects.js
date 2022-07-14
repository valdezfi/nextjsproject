import { useRouter } from 'next/router'

function UpcomingProjects() {
    const router = useRouter();
    return (
        <div className="col-lg-6 p-4 mission-box mission-radius mission-border mx-auto" style={{ cursor: "pointer" }} onClick={() => router.push('/venture')}>
            <div className="row">
                <h3 className="text-left">Upcoming projects</h3>
            </div>
            <hr />
            <div className="row">
                <div className="col-4">
                    <img
                        src="/assets/images/Group 36697.png"
                        className="lathe-images-small"
                    />
                </div>
                <div className="col">
                    <div className="row">
                        <h4>
                            <b>Rainbows</b>
                        </h4>
                    </div>
                    <div  className="row">
                        <p className="lathe-special-text">RAIN</p>
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <p>
                    Rainbows NFT will allow you to propose new ideas and vote on the megafi platform. This will allow creators and investors collaborate with the core team as products are released.
                    
                    The NFT is inspired by the book Rainbows End which is a novel that depicts a world where their is medical and AR advances which creates a hyper connected world.
                </p>
            </div>
            <hr />
            <div className="row">
                <table className="table">
                    <tbody>
                        <tr>
                            <th scope="row">
                                <p className="lathe-special-text">NAME</p>
                            </th>
                            <td>
                                <b>Rainbows</b>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <p className="lathe-special-text">SYMBOL</p>
                            </th>
                            <td>
                                <b>RAIN</b>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <p className="lathe-special-text">Price</p>
                            </th>
                            <td>
                                <b>$200 USDC</b>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <p className="lathe-special-text">ADDRESS</p>
                            </th>
                            <td>
                                <b>TBA</b>
                            </td>
                        </tr>
                        <tr style={{ borderBottom: "solid thin #1a1a1a" }}>
                            <th scope="row">
                                <p className="lathe-special-text">TOTAL SUPPLY</p>
                            </th>
                            <td>
                                <b>5,000</b>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UpcomingProjects;
