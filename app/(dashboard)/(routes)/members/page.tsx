"use client";

import React from "react";

import data from "@/mock-data.json";
import Heading from "@/components/ui/heading";
import { DataTable } from "@/components/ui/data-table";
import { Overview } from "@/components/overview";
import { getuniversities } from "@/actions/get-universities";
import { getdegrees } from "@/actions/get-degrees";

import { MemberColumn, columns } from "./components/columns";

const Members = () => {
  const [globalFilter, setglobalFilter] = React.useState<string>("");

  const universitiesData = getuniversities();
  const degreesData = getdegrees();

  const formattedMembers: MemberColumn[] = data.map((member) => ({
    id: member.id,
    first_name: member.first_name,
    last_name: member.last_name,
    age: member.age,
    department: member.department,
    degree: member.degree,
    university: member.university,
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Heading title="Members" description="See all the members" />
        <DataTable
          columns={columns}
          data={formattedMembers}
          globalFilter={globalFilter}
          setglobalFilter={setglobalFilter}
        />
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Heading title="Universities" description="Member's universities" />
        <Overview data={universitiesData} />
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Heading title="Degrees" description="Member's education levels" />
        <Overview data={degreesData} limit={20} />
      </div>
    </div>
  );
};

export default Members;
