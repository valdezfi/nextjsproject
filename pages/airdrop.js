import AirdropSection from '../components/airdropsection';
import Footer from '../components/footer';
import Navbar from '../components/navbar';


function Airdrop() {
  return (
    <div className="bg-black muli">
        <Navbar dashboard={false} connectwallet={true}/>
        <AirdropSection />
        <Footer />
    </div>
  );
}

export default Airdrop;
