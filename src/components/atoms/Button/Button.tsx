import { MdLogout, MdAdd, MdSave, MdOutlineClose } from 'react-icons/md';

import Styles from './Button.styles'

interface IButton {
  icon?: '' | 'logout' | 'add' | 'save' | 'close'
  text: string
  onClick: () => void
}

const Button: React.FC<IButton> = ({ icon, text, onClick }) => {
  return (
    <Styles>
      <div className='button'>
        <button
          disabled={false}
          onClick={onClick}>
          {icon == 'logout' && <MdLogout size={15} />}
          {icon == 'add' && <MdAdd size={15} />}
          {icon == 'save' && <MdSave size={15} />}
          {icon == 'close' && <MdOutlineClose size={15} />}
          {text}
        </button>
      </div>
    </Styles>
  );
};

export default Button;
