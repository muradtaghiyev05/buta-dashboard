import data from "@/mock-data.json";

interface DepartmentData {
  name: string;
  value: number;
}

export const getDepartments = () => {
  const departmentData: DepartmentData[] = [];
  const departments: { [key: string]: number } = {};

  data.forEach((item) => {
    departments[item.department] = departments[item.department]
      ? departments[item.department] + 1
      : 1;
  });

  Object.entries(departments).forEach(([key, value]) => {
    departmentData.push({ name: key, value });
  });

  return departmentData;
};
