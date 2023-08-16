import { Table } from "lucide-react";

import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { getDepartments } from "@/actions/get-departments";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Departments = () => {
  const departmentData = getDepartments();

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Heading
          title="Departments"
          description="See all the departments in Buta Group"
        />
        <Separator />
        <div className="grid gap-4 grid-cols-3">
          {departmentData.map((department) => (
            <Card key={department.name}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xl font-bold">
                  {department.name}
                </CardTitle>
                <Table className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-sm font-medium">
                  Members: {department.value}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Departments;
