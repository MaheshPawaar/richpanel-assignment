export const InputBox = ({ label, type, onChange }) => {
  return (
    <div>
      <div className="text-sm font-semibold text-left pt-4 text-gray-800">{label}</div>
      <input
        onChange={onChange}
        type={type}
        className="w-full px-2 py-1 border rounded border-s-slate-200"
      />
    </div>
  );
};
