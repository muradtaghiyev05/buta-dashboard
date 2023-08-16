import Link from "next/link";
import { Calendar, Group, Users } from "lucide-react";

import data from "@/mock-data.json";
import events from "@/events-data.json";
import Heading from "@/components/ui/heading";
import { Overview } from "@/components/overview";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAges } from "@/actions/get-ages";
import { getDepartments } from "@/actions/get-departments";

export default function Home() {
  const ageData = getAges();
  const departmentData = getDepartments();

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Heading title="Dashboard" description="Overview of Buta Group Team" />
        <Separator />
        <div className="grid gap-4 grid-cols-3">
          <Card>
            <Link href="/members">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Members
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{data.length}</div>
              </CardContent>
            </Link>
          </Card>
          <Card>
            <Link href="/departments">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Departments
                </CardTitle>
                <Group className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {departmentData.length}
                </div>
              </CardContent>
            </Link>
          </Card>
          <Card>
            <Link href="/events">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Upcoming events
                </CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{events.length}</div>
              </CardContent>
            </Link>
          </Card>
        </div>
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Ages</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview data={ageData} />
          </CardContent>
        </Card>
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Departments</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview data={departmentData} showTooltip={true} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
