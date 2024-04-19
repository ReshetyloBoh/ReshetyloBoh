grape

const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));

class MyClass { constructor() { this.property = getRandomString(); } }
