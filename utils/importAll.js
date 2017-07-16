// On require.context, see https://webpack.js.org/guides/dependency-management/#require-context
export const importAllAsArray = r => r.keys().map(r);

export const importAllAsObject = r => {
    let imports = {};
    r.keys().forEach(key => {
        imports[key.replace('./', '')] = r(key);
    });
    return imports;
};

export const generatePortraitKey = (review, ext) => `${review.fullName.split(' ').map(x => x.toLowerCase()).join('-')}.${ext}`;