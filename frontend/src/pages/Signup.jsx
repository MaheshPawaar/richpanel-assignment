import { useState } from 'react';
import { BottomWarning } from '../components/BottomWarning';
import { Button } from '../components/Button';
import { Heading } from '../components/Heading';
import { InputBox } from '../components/InputBox';
import { RememberMe } from '../components/RememberMe';

export const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="bg-[#1E4D91] h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="bg-white w-80 text-center p-2 h-max px-4 rounded-2xl">
          <Heading label={'Create Account'} />
          <div className="px-6">
            <InputBox
              label={'Name'}
              type={'text'}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <InputBox
              label={'Email'}
              type={'text'}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <InputBox
              label={'Password'}
              type={'password'}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="px-6 pt-4">
            <RememberMe
              checked={isChecked}
              onChange={() => {
                setIsChecked(!isChecked);
              }}
            />
          </div>
          <div className="px-6 pt-6">
            <Button
              onClick={() => {
                alert('You Clicked Sign up button');
              }}
              label={'Sign Up'}
            />
          </div>
          <div className="py-1">
            <BottomWarning
              label={'Already have an account?'}
              buttonText={'Login'}
              to={'/login'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
