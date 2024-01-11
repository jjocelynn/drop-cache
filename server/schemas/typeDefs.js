const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Word {
    _id: ID
    english: String
    jyutping: String
    character: String
  }

  type Query {
    words: [Word]
  }

  type Mutation {
    addWord(english: String, jyutping: String, character: String): Word
    deleteWord(id: ID!): Boolean
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;
module.exports = typeDefs;
