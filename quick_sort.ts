function quickSort(arr: (number | string)[], left?: number, right?: number) {
  const initialLeft = left || 0
  const initialRight = right || arr.length - 1

  if (arr.length === 0 || initialLeft === initialRight) return arr

  let rightPointer = initialRight
  let leftPointer = initialLeft
  let pivot = arr[leftPointer]

  while (true) {
    while (arr[rightPointer] >= pivot && leftPointer !== rightPointer) {
      rightPointer--
    }

    if (leftPointer === rightPointer) {
      break
    } else {
      arr[leftPointer] = arr[rightPointer]
      leftPointer++
    }

    while (arr[leftPointer] <= pivot && leftPointer !== rightPointer) {
      leftPointer++
    }

    if (leftPointer === rightPointer) {
      break
    } else {
      arr[rightPointer] = arr[leftPointer]
      rightPointer--
    }
  }

  arr[leftPointer] = pivot
  if (leftPointer !== initialLeft) {
    quickSort(arr, initialLeft, leftPointer - 1)
  }
  if (leftPointer !== initialRight) {
    quickSort(arr, leftPointer + 1, initialRight)
  }
  return arr
}

const arr = [100, -5, 14, -98, 167, 8, 4, 2, 51, 86, 57, 3, 1, -200]
console.log(quickSort(arr))

export {}
