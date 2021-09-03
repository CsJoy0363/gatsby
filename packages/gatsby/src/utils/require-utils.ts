// workaround for https://github.com/facebook/jest/issues/9543, so that we can mock it in jest

export const requireResolve = (
  id: string,
  options?: { paths?: Array<string> | undefined } | undefined
): string => require.resolve(id, options)
