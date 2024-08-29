import { User } from "lucide-react";

const DashboardContent = () => {
  return (
    <div className="flex p-2 w-full h-full">
      <div className="flex flex-col gap-2 w-full h-full">
        <div className="flex flex-row gap-2">
          <div className="flex flex-col gap-2 items-center p-5">
            <div className="flex flex-row gap-2 items-center justify-between w-full" >
              <p>Total Users</p>
              <User className="w-4 h-4" />
            </div>
            <p>5432100</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div className="flex flex-row gap-2 items-center">
              <p>Total Users</p>
              <User className="w-4 h-4" />
            </div>
            <p>5432100</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full items-center h-[500px]">
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
