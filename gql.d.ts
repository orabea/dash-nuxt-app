declare module '*.gql' {
    import { DocumentNode } from 'graphql'
  
    const content: DocumentNode
    export default content
  }
  
  declare module '*.graphql' {
    import { DocumentNode } from 'graphql'
  
    const content: DocumentNode
    export default content
  }

  // gql.types.ts
export interface User {
  id: string;
  name: string;
  email: string;
}

export interface UsersQueryResponse {
  users: User[];
}

  