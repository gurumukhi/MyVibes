/* src/resolvers.js */
export default {
    Query: {
      // Our only Resolver, which belongs to the `Query`
      // Type that we defined before
      helloWorld: () => 'Hello World!' // Returns a String
    }
  };