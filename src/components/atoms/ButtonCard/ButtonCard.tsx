import { MdCreate, MdDeleteOutline } from 'react-icons/md';

import Styles from './ButtonCard.styles'

interface IButtonCard {
  icon?: 'edit' | 'delete'
  onClick: () => void
}

const Button: React.FC<IButtonCard> = ({ icon, onClick }) => {
  return (
    <Styles>
      <div className='button'>
        <button
          disabled={false}
          onClick={onClick}>
          {icon == 'edit' && <MdCreate size={15} />}
          {icon == 'delete' && <MdDeleteOutline size={15} />}
        </button>
      </div>
    </Styles>
  );
};

export default Button;
