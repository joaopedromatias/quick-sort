def quick_sort(arr, left = None, right = None): 
    initial_left = left or 0
    initial_right = right or len(arr) - 1

    if (len(arr) == 0 or initial_left == initial_right):
        return arr
    
    left_pointer = initial_left
    right_pointer = initial_right
    pivot = arr[left_pointer]

    while (True):
        while(arr[right_pointer] >= pivot and right_pointer != left_pointer):
            right_pointer = right_pointer - 1
        if(right_pointer == left_pointer):
            break
        else:
            arr[left_pointer] = arr[right_pointer]
            left_pointer = left_pointer + 1

        while(arr[left_pointer] <= pivot and right_pointer != left_pointer):
            left_pointer = left_pointer + 1
        
        if(right_pointer == left_pointer):
            break
        else:
            arr[right_pointer] = arr[left_pointer]
            right_pointer = right_pointer - 1

    arr[left_pointer] = pivot
    if(left_pointer != initial_left): 
        quick_sort(arr, initial_left, left_pointer - 1 )
    if (right_pointer != initial_right): 
        quick_sort(arr, left_pointer + 1, initial_right)
    return arr

arr = [100, -5, 14, -98, 167, 8, 4, 2, 51, 86, 57, 3, 1, -200]
print(quick_sort(arr))

