import { UserGrowth } from "../components/UserGrowth";
import KeyMetrics from "../components/KeyMetrics";
import { RevenueDistribution } from "../components/RevenueDistribution";
import { TopStreamedSongs } from "@/components/TopStreamedSongs";

const DashboardContent = () => {
  return (
    <div className="flex flex-col w-full h-full overflow-y-auto bg-gray-50 dark:bg-neutral-900">
      <div className="flex flex-col md:flex-row gap-4 md:gap-7 items-start justify-between">
        <KeyMetrics />
        <UserGrowth />
      </div>
      <div className="mt-6 flex flex-col md:flex-row gap-4 md:gap-7 items-start justify-between w-full">
        <div className="w-full md:w-1/2">
          <RevenueDistribution />
        </div>
        <div className="w-full md:w-1/2">
          <TopStreamedSongs />
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
