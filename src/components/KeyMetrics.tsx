import { Users, UserCheck, Play, DollarSign, Music } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { data } from "@/data/data";

const KeyMetrics = () => {
  const metrics = [
    { title: "Total Users", icon: Users, value: data.keyMetrics.totalUsers },
    {
      title: "Active Users",
      icon: UserCheck,
      value: data.keyMetrics.activeUsers,
    },
    { title: "Total Streams", icon: Play, value: data.keyMetrics.totalStreams },
    { title: "Revenue", icon: DollarSign, value: data.keyMetrics.revenue },
    { title: "Top Artist", icon: Music, value: data.keyMetrics.topArtist },
    { title: "Top Album", icon: Music, value: data.keyMetrics.topAlbum },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 w-full">
      {metrics.map((metric, index) => (
        <Card
          key={index}
          className="rounded-xl shadow-md dark:shadow-md dark:shadow-gray-900 py-2 flex flex-col justify-between"
        >
          <CardHeader>
            <CardTitle>
              <div className="flex flex-row gap-2 items-center justify-between">
                <p className="text-sm 2xl:text-xl">{metric.title}</p>
                <metric.icon className="w-6 h-6" />
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl 2xl:text-3xl font-bold">{metric.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default KeyMetrics;
