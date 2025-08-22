// This file would typically fetch data from an API
// For now, we'll use the sample data provided

export const courseData = {
  Topic: "TypeScript",
  level: "Advanced",
  Chapters: [
    {
      About: "Explore advanced type manipulations, conditional types, mapped types, and advanced generic patterns.",
      duration: "30 minutes",
      ChapterName: "Advanced Types and Generics",
    },
    {
      About: "Learn how to use decorators to add metadata and modify class behavior at runtime.",
      duration: "35 minutes",
      ChapterName: "Decorators and Metadata",
    },
    {
      About: "Understand the modular system in TypeScript and how to organize code using modules and namespaces.",
      duration: "35 minutes",
      ChapterName: "Modules and Namespaces",
    },
    {
      About: "Learn how to integrate TypeScript with existing JavaScript libraries and APIs using declaration files.",
      duration: "40 minutes",
      ChapterName: "Working with External Libraries and APIs",
    },
    {
      About:
        "Apply design patterns like dependency injection, inversion of control, and the module pattern in TypeScript projects.",
      duration: "40 minutes",
      ChapterName: "Advanced Design Patterns with TypeScript",
    },
  ],
  Duration: "3 Hours",
  category: "Programming",
  CourseName: "Advanced TypeScript Programming",
  Description: "A comprehensive course covering advanced concepts and techniques in TypeScript development.",
  NoOfChapters: 5,
}

export const chapterData = {
  chapterId: "TS_CH01",
  title: "Basic Types and Variables in TypeScript",
  description:
    "This chapter introduces the fundamental data types and variable declarations in TypeScript, laying the groundwork for more advanced concepts.",
  estimatedDuration: 75,
  contentSections: [
    {
      sectionId: "TS_CH01_S01",
      heading: "Introduction to TypeScript Types",
      content: [
        {
          textContent:
            "TypeScript is a superset of JavaScript that adds static typing to the language. This means that you can specify the type of a variable when you declare it, and the TypeScript compiler will check that the type is correct at compile time. This helps catch errors early in the development process.",
        },
        {
          textContent:
            "Unlike JavaScript, which is dynamically typed, TypeScript provides a way to define strict contracts for your data. This leads to more robust and maintainable code.",
        },
      ],
      examples: [
        {
          exampleId: "TS_CH01_S01_E01",
          exampleDescription: "Illustrates type checking preventing an error at compile time.",
          exampleCode:
            "// JavaScript (no error until runtime)\nlet message = \"Hello\";\nmessage = 123; // No error in JavaScript until this line is executed.\n\n// TypeScript (error at compile time)\nlet messageTS: string = \"Hello\";\n// messageTS = 123; // Error: Type 'number' is not assignable to type 'string'.",
        },
      ],
      exercises: [
        {
          exerciseId: "TS_CH01_S01_EX01",
          exerciseText: "Explain the benefit of static typing over dynamic typing.",
          bloomLevel: "Understanding",
        },
        {
          exerciseId: "TS_CH01_S01_EX02",
          exerciseText:
            "What does the term 'superset' mean in the context of TypeScript being a superset of Javascript",
          bloomLevel: "Remembering",
        },
      ],
      estimatedDuration: 15,
    },
    {
      sectionId: "TS_CH01_S02",
      heading: "Basic Types: `number`, `string`, `boolean`",
      content: [
        {
          textContent:
            "TypeScript provides several built-in types. The most fundamental are: `number`, `string`, and `boolean`.",
        },
        {
          textContent:
            "**`number`:** Represents numeric values, both integers and floating-point numbers. Unlike some languages, TypeScript does not have separate types for integers and floats.",
        },
        {
          textContent:
            "**`string`:** Represents textual data. You can use single quotes (`'`) or double quotes (`\"`) to create strings.",
        },
        {
          textContent: "**`boolean`:** Represents logical values, either `true` or `false`.",
        },
      ],
      examples: [
        {
          exampleId: "TS_CH01_S02_E01",
          exampleDescription: "Demonstrates declaring variables with number, string, and boolean types.",
          exampleCode:
            'let age: number = 30;\nlet name: string = "Alice";\nlet isStudent: boolean = false;\n\nconsole.log(`Name: ${name}, Age: ${age}, Is student: ${isStudent}`);',
        },
        {
          exampleId: "TS_CH01_S02_E02",
          exampleDescription: "Shows type inference working in some cases.",
          exampleCode:
            "let x = 10; // x is inferred to be of type number\nlet greeting = 'Hello'; // greeting is inferred to be of type string\n\n// x = 'test'; // would cause a type error.",
        },
      ],
      exercises: [
        {
          exerciseId: "TS_CH01_S02_EX01",
          exerciseText:
            "Declare a variable named `price` and assign it a number value of 99.99. Specify the type explicitly.",
          bloomLevel: "Applying",
          exerciseCode: "// Your code here",
        },
        {
          exerciseId: "TS_CH01_S02_EX02",
          exerciseText:
            'Explain why the following code would cause a TypeScript error: `let myNumber: number = "123";`',
          bloomLevel: "Understanding",
        },
      ],
      estimatedDuration: 20,
    },
    {
      sectionId: "TS_CH01_S03",
      heading: "Special Types: `any`, `unknown`, `void`, `null`, and `undefined`",
      content: [
        {
          textContent:
            "TypeScript offers several special types to handle scenarios where the type is not known or when dealing with the absence of a value.",
        },
        {
          textContent:
            "**`any`:** Disables type checking. Use it sparingly! It's essentially an escape hatch to JavaScript's dynamic typing. It can be useful when migrating JavaScript code to TypeScript.",
        },
        {
          textContent:
            "**`unknown`:** A type-safe alternative to `any`. You must perform type assertions or narrowing before you can use a value of type `unknown`.",
        },
        {
          textContent:
            "**`void`:** Represents the absence of a return value, typically used for functions that don't return anything.",
        },
        {
          textContent:
            "**`null` and `undefined`:** Represent the intentional absence of a value (`null`) and a variable that has not been assigned a value (`undefined`), respectively.",
        },
      ],
      examples: [
        {
          exampleId: "TS_CH01_S03_E01",
          exampleDescription: "Demonstrates the `any` type.",
          exampleCode:
            'let anything: any = 123;\nanything = "Hello";\nanything = true; // No errors! Avoid using `any` unless absolutely necessary.',
        },
      ],
      exercises: [
        {
          exerciseId: "TS_CH01_S03_EX01",
          exerciseText: "Explain the difference between `any` and `unknown` types.",
          bloomLevel: "Understanding",
        },
      ],
      estimatedDuration: 25,
    },
  ],
  learningObjectives: [
    {
      objectiveText: "Recall the basic data types in TypeScript (`number`, `string`, `boolean`).",
      bloomLevel: "Remembering",
    },
    {
      objectiveText: "Explain the purpose of static typing in TypeScript.",
      bloomLevel: "Understanding",
    },
    {
      objectiveText: "Declare variables with explicit types in TypeScript.",
      bloomLevel: "Applying",
    },
  ],
  assessmentQuestions: [
    {
      questionId: "TS_CH01_Q01",
      questionText: "Which of the following is NOT a primitive type in TypeScript?",
      options: ["number", "string", "boolean", "object"],
      correctAnswerIndex: 3,
      bloomLevel: "Remembering",
    },
    {
      questionId: "TS_CH01_Q02",
      questionText: "What is the purpose of the `unknown` type in TypeScript?",
      options: [
        "To disable type checking.",
        "To represent a variable with an unknown value.",
        "To represent a type-safe alternative to `any` where type assertions are required before use.",
        "To represent a function that does not return a value.",
      ],
      correctAnswerIndex: 2,
      bloomLevel: "Understanding",
    },
  ],
  learningResources: [
    {
      resourceId: "TS_CH01_R01",
      resourceName: "TypeScript Handbook - Basic Types",
      resourceLink: "https://www.typescriptlang.org/docs/handbook/basic-types.html",
      resourceDescription: "Official TypeScript documentation on basic types.",
    },
    {
      resourceId: "TS_CH01_R02",
      resourceName: "TypeScript Handbook - Variable Declarations",
      resourceLink: "https://www.typescriptlang.org/docs/handbook/variable-declarations.html",
      resourceDescription: "Official TypeScript documentation on variable declarations (let, const, var).",
    },
    {
      resourceId: "TS_CH01_R03",
      resourceName: "MDN Web Docs - let",
      resourceLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let",
      resourceDescription:
        "Mozilla Developer Network guide on the `let` keyword in JavaScript (relevant to TypeScript).",
    },
  ],
}
