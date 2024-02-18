# Quick Sort

Quick sort is a divide and conquer algorithm.

In quick sort there are two pointers: left and right. Usually the pivot, which is the value to be ordered in each function call, is the initial value of the left pointer index.

The values on pointers are compared until the left and the right matches the same index. This index represents the correct position fot the pivot, since all the values in the left must be smaller than it and all the values in the right must be greater.

Recursively, a pseudo sub-array (defined by new pointers, but the same memory array) have its pivot sorted, until all the sub-arrays have length equals to 1.

The best case for quick sort happens when each pivot is positioned at the middle of the array, reducing by half the size for next call.

The worst case happens when the array is already sorted, because the sub-array size is n - 1, followed by n - 2, and so on. The sub-array is reduced only by 1 size, so the sub-problems size are very similar to the main problem size.

**`Time complexity lower bound`**: O(n \* log n)
**`Time complexity upper bound`**: O(n^2)
