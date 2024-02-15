import React from 'react';
import { Heading } from '../components/Heading';
import { Button } from '../components/Button';
import { SubHeading } from '../components/SubHeading';
import { useNavigate } from 'react-router-dom';

export const ManagePage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#1E4D91] h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="bg-white w-80 text-center p-2 h-max px-4 rounded-2xl">
          <Heading label={'Facebook Page Integration'} />
          <SubHeading pageName={'Amazon Business'} />
          <div className="px-6 pt-4">
            <Button
              onClick={() => {
                localStorage.removeItem('token');
                navigate('/connect-page');
              }}
              label={'Delete Integration'}
            />
          </div>
          <div className="px-6 pt-1 pb-2">
            <Button
              onClick={() => {
                navigate('/dashboard');
              }}
              label={'Reply To Messages'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
