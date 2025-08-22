// CategoryList.tsx
interface CategoryItem {
    id: number;
    name: string;
    icon: string;
    prompt: string;
  }
  
  const CategoryList: CategoryItem[] = [
    {
      id: 1,
      name: "Programming",
      icon: "/globe.svg",
      prompt: ""
    },
    {
      id: 2,
      name: "Heath",
      icon: "/globe.svg",
      prompt: ""
    },
    {
      id: 3,
      name: "Creative",
      icon: "/globe.svg",
      prompt: ""
    },
  ];
  
  export default CategoryList;