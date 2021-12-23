import { toast, Toaster } from 'react-hot-toast';

import copyIcon from '../../assets/images/copy.svg';
import { Code } from './style';

type RoomCodeProps = {
  code: string;
};

export const RoomCode = ({ code }: RoomCodeProps) => {
  const copyRoomCodeFromClipboard = () => {
    navigator.clipboard.writeText(code);
    toast.success('Copied to clipboard!', {
      icon: '📋',
    });
  };

  return (
    <>
      <Code>
        <button onClick={copyRoomCodeFromClipboard}>
          <img src={copyIcon} alt="Copy Icon" />
        </button>
        Sala {code}
      </Code>
      <Toaster />
    </>
  );
};
