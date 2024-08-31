import { AgeGroups } from "@/components/AgeGroups";
import { GenderDistribution } from "@/components/GenderDistribution";
import { GenreDistribution } from "@/components/GenreDistribution";
import { Subscription } from "@/components/Subscription";

const UserAnalytics = () => {
  return (
    <div className="flex flex-col w-full h-full bg-gray-50 dark:bg-neutral-900 custom-scrollbar overflow-y-auto px-3">
      <div className="flex flex-col md:flex-col lg:flex-row gap-4 md:gap-7 w-full">
        <Subscription />
        <GenreDistribution />
      </div>
      <div className="mt-10 flex flex-col lg:flex-row gap-4 md:gap-7 items-start justify-between w-full h-full">
        <div className="w-full lg:w-1/2">
          <AgeGroups />
        </div>
        <div className="w-full lg:w-1/2">
          <GenderDistribution />
        </div>
      </div>
    </div>
  );
};

export default UserAnalytics;
