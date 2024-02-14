import { Link } from 'react-router-dom';

export const BottomWarning = ({ label, buttonText, to }) => {
  return (
    <div className="py-2 text-sm flex justify-center">
      <div className='text-gray-800'>{label}</div>
      <Link className='pointer pl-1 cursor-pointer text-[#1E4D91]' to={to}>{buttonText}</Link>
    </div>
  );
};
