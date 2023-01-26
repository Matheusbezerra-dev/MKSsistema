import {
  HeaderContainer
} from './HeaderStyle';
import {FaShoppingCart} from 'react-icons/fa'


export default function Header() {
  return (
    <HeaderContainer>
      <div>
        <h1>MKS</h1>
        <h3>Sistemas</h3> 
      </div>
      <div>
        <button
          type='button'
        >
         <FaShoppingCart />
        </button>
      </div>
    </HeaderContainer>
  )
}
