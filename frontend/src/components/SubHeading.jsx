export const SubHeading = ({pageName}) => {
  return <div className="p-2 flex justify-center text-sm text-gray-800">
    <div>Integrated Page:</div>
    <div className="pl-1 font-semibold">{pageName}</div>
  </div>;
};
