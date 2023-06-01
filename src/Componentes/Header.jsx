
import {AiOutlineSearch} from 'react-icons/ai'


function Header(){
    return(
        <div className="flex items-center justify-evenly gap-[700px] h-[69px] ">
            <div>
                <p className='text-bold'>Shoe</p>
            </div>
            <div className='flex gap-10 items-center'>
                <button className='text-[#FF005C] font-semibold'>Home</button>
                <button>About us</button>
                <button>Shop</button>
                <button>Contact</button>
                <AiOutlineSearch className='text-2xl'/>
            </div>
        </div>
    )
}
export default Header;