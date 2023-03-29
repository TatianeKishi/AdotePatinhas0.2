import Navbar from '../../components/NavBar/index'
import Footer from '../../components/Footer/footer'
import './Interests.css';
import notInterests from '../../img/notInterests.svg'
import ButtonRemove from '../../components/Buttons/Button'
// import Interests from './'
function Interests () {
    return (
        <div className="interests">
            <Navbar/>
                <div className='interests_section'>
                    <div className='interests_section-container'>
                        <div className='interests_section-image'>
                            <img src={notInterests}/>
                        </div>
                        <div className='interests_section-button'>
                           <ButtonRemove corFundo='#5A3938'>ESCOLHA UM ANIMAL</ButtonRemove>
                        </div>
                    </div>
                    <div className='interests-section-cards'>

                    </div>
                </div>
            <Footer/>
        </div>
    );
}

export default Interests;