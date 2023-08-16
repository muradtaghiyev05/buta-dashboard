"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export type MemberColumn = {
  id: number;
  first_name: string;
  last_name: string;
  age: number;
  university: string;
  degree: string;
  department: string;
};

export const columns: ColumnDef<MemberColumn>[] = [
  {
    accessorKey: "first_name",
    header: "First Name",
  },
  {
    accessorKey: "last_name",
    header: "Last Name",
  },
  {
    accessorKey: "age",
    header: ({ column }) => {
      return (
        <div
          className="inline-flex items-center cursor-pointer hover:text-black hover:dark:text-white"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Age
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "university",
    header: ({ column }) => {
      return (
        <div
          className="inline-flex items-center cursor-pointer hover:text-black hover:dark:text-white"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          University
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "degree",
    header: ({ column }) => {
      return (
        <div
          className="inline-flex items-center cursor-pointer hover:text-black hover:dark:text-white"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Degree
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "department",
    header: ({ column }) => {
      return (
        <div
          className="inline-flex items-center cursor-pointer hover:text-black hover:dark:text-white"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Department
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
];
