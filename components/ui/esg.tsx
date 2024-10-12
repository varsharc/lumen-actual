import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Leaf, Users, Building2 } from "lucide-react";

type ESGProps = {
  eScore: number;
  sScore: number;
  gScore: number;
};

export default function ESG(
  { eScore, sScore, gScore }: ESGProps = { eScore: 0, sScore: 0, gScore: 0 },
) {
  return (
    <div className="flex justify-center space-x-4">
      <Card className="w-[200px]">
        <CardHeader className="flex flex-col items-center">
          <Leaf className="h-8 w-8 text-green-500" />
          <CardTitle className="mt-2 text-sm font-medium">
            Environmental
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <Progress
            value={eScore}
            className="h-16 w-16"
            indicatorColor="bg-green-500"
          />
          <p className="mt-2 text-lg font-semibold">{eScore}%</p>
        </CardContent>
      </Card>

      <Card className="w-[200px]">
        <CardHeader className="flex flex-col items-center">
          <Users className="h-8 w-8 text-blue-500" />
          <CardTitle className="mt-2 text-sm font-medium">Social</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <Progress
            value={sScore}
            className="h-16 w-16"
            indicatorColor="bg-blue-500"
          />
          <p className="mt-2 text-lg font-semibold">{sScore}%</p>
        </CardContent>
      </Card>

      <Card className="w-[200px]">
        <CardHeader className="flex flex-col items-center">
          <Building2 className="h-8 w-8 text-yellow-500" />
          <CardTitle className="mt-2 text-sm font-medium">Governance</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <Progress
            value={gScore}
            className="h-16 w-16"
            indicatorColor="bg-yellow-500"
          />
          <p className="mt-2 text-lg font-semibold">{gScore}%</p>
        </CardContent>
      </Card>
    </div>
  );
}
