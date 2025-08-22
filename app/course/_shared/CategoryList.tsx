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
      icon: "/code.png",
      prompt: ""
    },
    {
      id: 2,
      name: "Heath",
      icon: "/fitness.png",
      prompt: ""
    },
    {
      id: 3,
      name: "Creative",
      icon: "/content.png",
      prompt: ""
    },
  ];
  
  export default CategoryList;