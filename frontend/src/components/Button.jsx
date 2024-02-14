export const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="w-full text-white bg-[#1E4D91] hover:bg-[#1E4D91] focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-sm text-sm px-5 py-2.5 me-2 mb-2"
    >
      {label}
    </button>
  );
};
