// On require.context, see https://webpack.js.org/guides/dependency-management/#require-context
const importAll = r => r.keys().map(r);
export default importAll;