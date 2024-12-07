// ~/components/my-component.js

export default {
  methods: {
    foo() {
      const client = this.$apollo.getClient();

      this.$apollo.mutate({ mutation, variables });

      this.$apollo.query({ query, variables }).then(({ data }) => {
        console.log(data);
      });
    },
  },
};
