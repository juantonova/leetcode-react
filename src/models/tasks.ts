export type Task = {
    id: number
    description: string
    incoming_example: string
    outgoing_example: string
    tags: Tag[]
    category: CategoryType
    score: number
    title: string
    additional_info?: string[]
  }
  
  export const enum Tag {
    STRINGS = 'strings',
    BACKEND = 'backend',
    FUNDAMENTALS = 'fundamentals',
    ARRAYS = 'arrays'
  }
  
  export const enum CategoryType {
    ALGORITHMS = 'Algorithms',
    ARRAYS = 'Arrays',
    RECURSION = 'Recursion',
    DATA_SCIENCE = 'Data Science',
    STRINGS = 'Strings'
  }

  export type Score = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

  export const CategoryTypeOptions = [
    { label: 'Algorithms', value: CategoryType.ALGORITHMS },
    { label: 'Arrays', value: CategoryType.ARRAYS },
    { label: 'Recursion', value: CategoryType.RECURSION },
    { label: 'Data Science', value: CategoryType.DATA_SCIENCE },
    { label: 'Strings', value: CategoryType.STRINGS }
  ]
  

 export const  ScoreOptions = [
  { label: '1', value: 1 },
  { label: '2', value: 2 },
  { label: '3', value: 3 },
  { label: '4', value: 4 },
  { label: '5', value: 5 },
  { label: '6', value: 6 },
  { label: '7', value: 7 },
  { label: '8', value: 8 },
  { label: '9', value: 9 },
  { label: '10', value: 10 },
 ]