import { Chart } from "./Chart";
import KeyMetrics from "./KeyMetrics";

const DashboardContent = () => {
  return (
    <div className="flex flex-col w-full h-full overflow-y-auto bg-gray-50 dark:bg-neutral-900">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-between">
        <KeyMetrics />
        <Chart />
      </div>
    </div>
  );
};

export default DashboardContent;
