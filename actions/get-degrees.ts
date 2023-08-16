import data from "@/mock-data.json";

interface DegreesData {
  name: string;
  value: number;
}

export const getdegrees = () => {
  const degreesData: DegreesData[] = [];
  const degrees: { [key: string]: number } = {};

  data.forEach((item) => {
    degrees[item.degree] = degrees[item.degree] ? degrees[item.degree] + 1 : 1;
  });

  Object.entries(degrees).forEach(([key, value]) => {
    degreesData.push({ name: key, value });
  });

  return degreesData;
};
