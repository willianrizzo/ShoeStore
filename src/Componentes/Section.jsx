import { BsArrowRight } from 'react-icons/bs'
import Boot from '../assets/boot.svg'
import Card1 from '../assets/card1.svg'
import Card2 from '../assets/card2.svg'

function Section() {
    return (
        <div className="bg-home h-[89.6vh] bg-cover">
            <div className='flex items-center'>
                <div className="w-[40%] flex flex-col">
                    <p className="text-[60px] font-thin pl-[88px] pt-[124px] leading-[73px]">Are you ready to <span className="font-bold">lead the way</span></p>
                    <p className="pl-[88px] pt-6"><span className="font-bold">COMPREHENSIVE PROTECTION</span> <br /> <br /> The widen steel toe cap and bulletproof midsole layer would protect your feet from impact or puncture, meets or exceeds ASTM F2413-18 safety standards.</p>
                    <div className='bg-white w-[267px] h-[67px] shadow-md rounded-full flex items-center justify-center gap-2 mt-10 ml-32'>
                        <button className='text-[25px] font-semibold text-[#FF005C]'>Buy Now</button>
                        <BsArrowRight className='text-[25px] font-semibold mt-2 text-[#FF005C]' />
                    </div>  
                </div>
               
                <div className='ml-[349px] flex flex-col mt-20 gap-5'>
                    <div className=''>
                        <img className='h-[372px] w-[328px]' src={Boot} alt="" />
                    </div>
                    <div className='flex gap-8 '>
                        <img src={Card1} alt="" />
                        <img src={Card2} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Section;