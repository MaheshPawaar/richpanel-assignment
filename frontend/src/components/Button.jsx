export const Button = ({ label, onClick }) => {
  const buttonColor =
    label === 'Delete Integration'
      ? 'w-full text-white bg-[#E5271D] hover:bg-[#E5271D] focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-sm text-sm px-5 py-2.5 me-2 mb-2`'
      : `w-full text-white bg-[#1E4D91] hover:bg-[#1E4D91] focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-sm text-sm px-5 py-2.5 me-2 mb-2`;

  return (
    <button onClick={onClick} type="button" className={buttonColor}>
      {label}
    </button>
  );
};
