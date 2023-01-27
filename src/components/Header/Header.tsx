import {
  HeaderContainer,
  TitleHeader,
} from './HeaderStyle';
import {FaShoppingCart} from 'react-icons/fa'


export default function Header() {
  return (
    <HeaderContainer>
      <TitleHeader>
        <h1>MKS</h1>
        <h3>Sistemas</h3> 
      </TitleHeader>
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
