// On require.context, see https://webpack.js.org/guides/dependency-management/#require-context
export const importAllAsArray = (r: __WebpackModuleApi.RequireContext): Array<string> => r.keys().map(r);

export const importAllAsObject = (r: __WebpackModuleApi.RequireContext): { [key: string]: string } => {
    let imports: { [key: string]: string } = {};
    r.keys().forEach(key => {
        imports[key.replace('./', '')] = r(key);
    });
    return imports;
};

export const generatePortraitKey = (review: IReview, ext: string): string =>
    `${review.fullName.split(' ').map(x => x.toLowerCase()).join('-')}.${ext}`;