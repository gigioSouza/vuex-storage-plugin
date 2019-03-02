export default {
  populate: [
    {
      attr: 'NamedDynamicModule/namedDynamicModuleAttr',
      mutation: 'NamedDynamicModule/setNamedDynamicModuleAttr'
    }
  ],
  state: {
    namedDynamicModuleAttr: null
  },
  mutations: {
    setNamedDynamicModuleAttr(state, value) {
      state.namedDynamicModuleAttr = value;
    }
  }
}