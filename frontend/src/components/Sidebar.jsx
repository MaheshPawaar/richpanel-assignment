import InboxIcon from './images/inbox64.png';
import PeopleIcon from './images/people50.png';
import DiagramIcon from './images/graph50.png';
import LogoutIcon from './images/logout.png';
import Logo from './images/richpanel_logo.jpg';
import { useNavigate } from 'react-router-dom';

export const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen bg-[#1E4D91] text-white">
      <div className="flex items-center justify-center p-4">
        <img src={Logo} alt="Logo" className="w-10 h-10" />
      </div>
      <div className="flex flex-col flex-1 items-center justify-between">
        <div className="my-4 flex flex-col items-center justify-center">
          <img className="w-9 my-4" src={InboxIcon} />
          <img className="w-9 my-4" src={PeopleIcon} />
          <img className="w-9 my-4" src={DiagramIcon} />
        </div>
      </div>
      <div className="flex items-center p-4 cursor-pointer">
        <img
          src={LogoutIcon}
          alt="Log out"
          className="w-8"
          onClick={() => {
            localStorage.removeItem('token');
            navigate('/');
          }}
        />
      </div>
    </div>
  );
};
