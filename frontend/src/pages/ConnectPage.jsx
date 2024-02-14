import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { Heading } from '../components/Heading';

export const ConnectPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#1E4D91] h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="bg-white w-80 text-center p-2 h-max px-4 rounded-2xl">
          <Heading label={'Facebook Page Integration'} />
          <div className="px-6 py-6">
            <Button
              onClick={() => {
                navigate('/manage-page')
              }}
              label={'Connect Page'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
