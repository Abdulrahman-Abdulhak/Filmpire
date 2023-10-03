export const clone = (obj, cloneInto = {}) => {
  const entries = Object.entries(obj);
  const clonePointer = cloneInto;

  entries.forEach((entry) => {
    const key = entry[0];
    const val = entry[1];

    clonePointer[key] = val;
  });

  return clonePointer;
};

export const isEmpty = (obj = {}) => {
  if (!obj) return true;

  const entries = Object.entries(obj);
  return entries.length === 0;
};

export const isNotEmpty = (obj = {}) => !isEmpty(obj);
