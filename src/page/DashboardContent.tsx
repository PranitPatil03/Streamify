import "../App.css";
import KeyMetrics from "../components/KeyMetrics";
import { UserGrowth } from "../components/UserGrowth";
import { RecentStreams } from "@/components/RecentStreams";
import { TopStreamedSongs } from "@/components/TopStreamedSongs";
import { RevenueDistribution } from "../components/RevenueDistribution";

const DashboardContent = () => {
  return (
    <div className="flex flex-col w-full h-full bg-gray-50 dark:bg-neutral-900 custom-scrollbar overflow-y-auto px-3">
      <div className="flex flex-col lg:flex-row gap-4 md:gap-7">
        <div className="w-full lg:w-1/2">
          <KeyMetrics />
        </div>
        <div className="w-full lg:w-1/2">
          <UserGrowth />
        </div>
      </div>
      <div className="mt-10 flex flex-col lg:flex-row gap-4 md:gap-7 items-start justify-between w-full">
        <div className="w-full lg:w-1/2">
          <RevenueDistribution />
        </div>
        <div className="w-full lg:w-1/2">
          <TopStreamedSongs />
        </div>
      </div>
      <div className="mt-10">
        <RecentStreams />
      </div>
    </div>
  );
};

export default DashboardContent;
