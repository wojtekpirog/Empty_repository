const deepCopy = src => {
  if (typeof src !== 'object' || src === null) {
    return src;
  }

  let srcCopy = Array.isArray(src) ? [] : {};

  for (let key in src) {
    if (src.hasOwnProperty(key)) {
      srcCopy[key] = deepCopy(src[key]);
    }
  }

  return srcCopy;
}

const source = {
  type: "źródło",
  id: 1,
}

const deepCopiedSrc = deepCopy(source);
console.log(deepCopiedSrc);
console.log(deepCopiedSrc === source);