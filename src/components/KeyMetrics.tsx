import { Users, UserCheck, Play, DollarSign, Music } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { data } from "@/data/data";

const KeyMetrics = () => {
  return (
    <>
      <div className="flex flex-col gap-5 md:gap-7 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
          <Card className="rounded-xl shadow-md dark:shadow-md dark:shadow-gray-900 py-2">
            <CardHeader>
              <CardTitle>
                <div className="flex flex-row gap-2 items-center justify-between">
                  <p className="text-xl">Total Users</p>
                  <Users className="w-6 h-6" />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{data.keyMetrics.totalUsers}</p>
            </CardContent>
          </Card>
          <Card className="rounded-xl shadow-md dark:shadow-md dark:shadow-gray-900 py-2">
            <CardHeader>
              <CardTitle>
                <div className="flex flex-row gap-2 items-center justify-between">
                  <p className="text-xl">Active Users</p>
                  <UserCheck className="w-6 h-6" />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">
                {data.keyMetrics.activeUsers}
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-xl shadow-md dark:shadow-md dark:shadow-gray-900 py-2">
            <CardHeader>
              <CardTitle>
                <div className="flex flex-row gap-2 items-center justify-between">
                  <p className="text-xl">Total Streams</p>
                  <Play className="w-6 h-6" />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">
                {data.keyMetrics.totalStreams}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
          <Card className="rounded-xl shadow-md dark:shadow-md dark:shadow-gray-900 py-2">
            <CardHeader>
              <CardTitle>
                <div className="flex flex-row gap-2 items-center justify-between">
                  <p className="text-xl">Revenue</p>
                  <DollarSign className="w-6 h-6" />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{data.keyMetrics.revenue}</p>
            </CardContent>
          </Card>
          <Card className="rounded-xl shadow-md dark:shadow-md dark:shadow-gray-900 py-2">
            <CardHeader>
              <CardTitle>
                <div className="flex flex-row gap-2 items-center justify-between">
                  <p className="text-xl">Top Artist</p>
                  <Music className="w-6 h-6" />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{data.keyMetrics.topArtist}</p>
            </CardContent>
          </Card>
          <Card className="rounded-xl shadow-md dark:shadow-md dark:shadow-gray-900 py-2">
            <CardHeader>
              <CardTitle>
                <div className="flex flex-row gap-2 items-center justify-between">
                  <p className="text-xl">Top Artist</p>
                  <Music className="w-6 h-6" />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{data.keyMetrics.topArtist}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default KeyMetrics;
