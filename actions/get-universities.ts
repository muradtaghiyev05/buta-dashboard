import data from "@/mock-data.json";

interface UniversitiesData {
  name: string;
  value: number;
}

export const getuniversities = () => {
  const universitiesData: UniversitiesData[] = [];
  const universities: { [key: string]: number } = {};

  data.forEach((item) => {
    universities[item.university] = universities[item.university]
      ? universities[item.university] + 1
      : 1;
  });

  Object.entries(universities).forEach(([key, value]) => {
    universitiesData.push({ name: key, value });
  });

  return universitiesData;
};
