const { Word } = require("../models");

const resolvers = {
    Query: {
        words: async () => {
            return await Word.find({});
        },
    },
    Mutation: {
        addWord: async (parent, args) => {
            try {
                const word = await Word.create(args);
                console.log("word created successfully", word);
                return word;
            } catch (error) {
                throw new Error("error adding word", error);
            }
        },
        deleteWord: async (parent, { id }) => {
            try {
              await Word.findByIdAndRemove(id);
              console.log("word deleted successfully");
              return true;
            } catch (error) {
              throw new Error("error deleting word", error);
            }

    },
    },
};

module.exports = resolvers;
