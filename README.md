## Development

## What's in the box

- Frontend
  - [Typescript](https://www.typescriptlang.org/) / [Next.js](https://nextjs.org/)
  - [TailwindCSS](https://tailwindcss.com/) / [SCSS](https://sass-lang.com/) / [SCSS Guidelines](https://github.com/bjankord/stylelint-config-sass-guidelines)
  - [Apollo](https://www.apollographql.com/) / [Codegen](https://www.graphql-code-generator.com/)
  - [NextAuth](https://next-auth.js.org/)
  - [ESlint](https://eslint.org/) / [Prettier](https://prettier.io/) / [Husky](https://github.com/typicode/husky) / [Stylelint](https://stylelint.io/) / [Lint Staged](https://github.com/okonet/lint-staged)

### Setup local dev environment 

```shell
git clone git@github.com:NoPallets/client.git
cd frontend

# install dependencies /// make sure you are using Node v14 or smaller
yarn

# Symlink dev environment
ln -hfs .env.example .env.local

# Start the project
yarn dev
```
Visit <http://localhost:3000/>


## Backend

Currently all the backend is in the cloud.

The [Hasura client](https://hasura.io/) and Postgres are hosted on [Heroku](https://www.heroku.com/)
And we are using S3 buckets inside AWS to store the images.

![app_architecture_diagram](https://i.ibb.co/C9bJt4S/7-EDAEC16-60-ED-43-BA-BE4-E-E46-CBFF33-EF5.jpg)



## GraphQl codegen

We are using codegenator to create our Typescript types from our GraphQL schema.

The code is generated straight from our schema in Hasura into `./src/graphql/generated/graphql.tsx`

Just run `yarn graphql:types`

For example, given the following schema:
```
type Author {
  id: Int!
  firstName: String!
  lastName: String!
  posts(findTitle: String): [Post]
}

type Post {
  id: Int!
  title: String!
  author: Author!
}

type Query {
  posts: [Post]
}

schema {
  query: Query
}
```
GraphQL Code Generator can generate the following TypeScript typings:
```
export type Maybe<T> = T | null;

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Author = {
  __typename?: 'Author',
  id: Scalars['Int'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  posts?: Maybe<Array<Maybe<Post>>>,
};

export type AuthorPostsArgs = {
  findTitle?: Maybe<Scalars['String']>
};

export type Post = {
  __typename?: 'Post',
  id: Scalars['Int'],
  title: Scalars['String'],
  author: Author,
};

export type Query = {
  __typename?: 'Query',
  posts?: Maybe<Array<Maybe<Post>>>,
};
```