def selection_sort(arr):
    n = len(arr)
    passes = 0

    for i in range(n - 1):
        # Assume the minimum is the first element
        min_index = i
        
        # Iterate through unsorted elements
        for j in range(i + 1, n):
            if arr[j] < arr[min_index]:
                min_index = j
        
        # Swap the found minimum element with the first unsorted element
        if min_index != i:
            arr[i], arr[min_index] = arr[min_index], arr[i]
        
        # Increment the pass count
        passes += 1

    return passes

# Example usage
array = [23, 10, 5, 15, 42, 33, 98, 67, 88, 11]
number_of_passes = selection_sort(array)
print(f"Sorted array: {array}")
print(f"Number of passes required to sort the array: {number_of_passes}")
