import { Conversations } from '../components/Conversations';
import { Sidebar } from '../components/Sidebar';

export const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-white p-4">
        <Conversations/>
      </div>
    </div>
  );
};
