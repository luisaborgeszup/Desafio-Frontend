const sum = (arr) => {
  if (arr.length === 0)
    return 0

//   return arr[0] + sum(arr.slice(1)) --> EcmaScript 5

  const [head, ...tail] = arr // EcmaScript 6
  return head + sum(tail)
}

console.log(sum([1, 2, 3]))