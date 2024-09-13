/* Implement the Array.prototype.reduce method from scratch
 
# Method signature
reduce(collection, [iteratee=_.identity], [accumulator])
 
# Details
Reduces collection to a value which is the accumulated result of 
running each element in collection through iteratee, 
where each successive invocation is supplied the return value of the previous. 
If an accumulator is not given, the first element of the collection is used as the initial value.
*/

const assert = require("assert");

const reduce = (collection, iteratee, accumulator) => {
  let first = accumulator == undefined;

  for (let i = 0; i < collection.length; i++) {
    if (first) {
      accumulator = collection[i];
      first = false;
    } else {
      if (iteratee == null) return [];
      else accumulator = iteratee(accumulator, collection[i]);
    }
  }
  return accumulator;
};

const run = () => {
  console.clear();
  const TEST_CASES = [
    {
      inputCollection: [1, 5, 8, 10],
      inputIteratee: (acc, v) => acc + v,
      inputAccumulator: 0,
      expectedResult: 24,
    },
    {
      inputCollection: ["ello", " ", "java", "script"],
      inputIteratee: (acc, v) => acc + v,
      inputAccumulator: "h",
      expectedResult: "hello javascript",
    },
    {
      inputCollection: ["hello", " ", "java", "script"],
      inputIteratee: (acc, v) => acc + v,
      inputAccumulator: undefined,
      expectedResult: "hello javascript",
    },
    {
      inputCollection: [{ one: 1 }, { two: 2 }, { three: 3 }],
      inputIteratee: (acc, v) => {
        return { ...acc, ...v };
      },
      inputAccumulator: {},
      expectedResult: { one: 1, two: 2, three: 3 },
    },
    {
      inputCollection: [{ one: 1 }, { two: 2 }, { three: 3 }],
      inputIteratee: (acc, v) => {
        return { ...acc, ...v };
      },
      inputAccumulator: undefined,
      expectedResult: { one: 1, two: 2, three: 3 },
    },
    {
      inputCollection: [{ one: 1 }, { two: 2 }, { three: 3 }],
      inputIteratee: null,
      inputAccumulator: undefined,
      expectedResult: [],
    },
  ];
  TEST_CASES.forEach((testCase, i) => {
    try {
      const result = reduce(testCase.inputCollection, testCase.inputIteratee, testCase.inputAccumulator);
      assert.deepStrictEqual(result, testCase.expectedResult);
      console.log(`✅ TEST CASE ${i} PASSED ✅`);
    } catch (err) {
      console.log(`🚨 Test Case ${i} Failed 🚨`);
    }
  });
};

run();
