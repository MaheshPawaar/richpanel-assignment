import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BottomWarning } from '../components/BottomWarning';
import { Button } from '../components/Button';
import { Heading } from '../components/Heading';
import { InputBox } from '../components/InputBox';
import { RememberMe } from '../components/RememberMe';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [label, setLabel] = useState('Login');
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="bg-[#1E4D91] h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="bg-white w-80 text-center p-2 h-max px-4 rounded-2xl">
          <Heading label={'Login to your Account'} />
          <div className="px-6">
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
              checked={rememberMe}
              onChange={() => {
                setRememberMe(!rememberMe);
              }}
            />
          </div>
          <div className="px-6 pt-6">
            <Button
              onClick={async () => {
                setLabel('Logging in...');
                const response = await axios.post(
                  `https://richpanel-assignment-backend.onrender.com/api/user/signin`,
                  {
                    email,
                    password,
                  }
                );
                localStorage.setItem('token', response.data.token);
                navigate('/connect-page');
              }}
              label={label}
            />
          </div>
          <div className="py-1">
            <BottomWarning
              label={'New to MyApp?'}
              buttonText={'Sign Up'}
              to={'/signup'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
