export const RememberMe = ({onChange, checked}) => {
  return (
    <div className="flex">
      <input type="checkbox" checked={checked} onChange={onChange}/>
      <p className="pl-2 text-sm text-gray-800">Remember Me</p>
    </div>
  );
};
