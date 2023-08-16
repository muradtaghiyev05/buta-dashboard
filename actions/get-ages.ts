import data from "@/mock-data.json";

interface AgeData {
  name: string;
  value: number;
}

export const getAges = () => {
  const ageData: AgeData[] = [];
  const ages: { [key: number]: number } = {};

  data.forEach((item) => {
    ages[item.age] = ages[item.age] ? ages[item.age] + 1 : 1;
  });

  Object.entries(ages).forEach(([key, value]) => {
    ageData.push({ name: key, value });
  });

  return ageData;
};
