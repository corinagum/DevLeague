# Sorting Algorithms

This programs creates modules for several different types of sorting algorithms: Bubble Sort, Quick Sort, Merge Sort, Selection Sort, and Insertion Sort.

## Bubble Sort

* Bubble sort is a function that compares numbers that are listed in a line like 'a, b, c, d, ...'. Starting with a, the program will compare 'a' with 'b'. If the value of 'a' is bigger than 'b', they will switch positions so that 'a' is moved one spot farther down the line, past 'b'. This is done over and over again to each number, so that eventually the biggest values are at the end of the line and and the smallest ones are at the beginning.

* Pseudo Code for Bubble Sort:

```
while (variable) switching is true:
  for loop: i = 0 and iterates through array.length
    compare i and i+1.
      if value of i is larger than i+1
        swap positions of i and i+1
        continue iteration of for loop until i is not larger than i+1
      otherwise, keep indexes the same

end program when switching is false (when program iterates through array without swapping i and i+1)


```

* Performance explanations
- Best-case Scenario: O(N), where the array is already sorted. If the array only has one value, checking the array will produce the best-case scenario.
- Worst-case Scenario: O(n^2), where the performance/efficiency gets worse exponentially as the length of the array increases. If the array is in reverse order, where the largest number is at the front of the array and the smallest is at the end of the array, this produces the worst-case scenario because the program will have to compare each number to every other number in order to produce the smallest-to-largest array.

## Quick Sort

* Quick sort is a very fast program that splits a line of numbers by first choosing a 'compare' number. Let's call it a pivot. The pivot can be chosen at random, or by deciding to always make the first or last number in the line the pivot. Really though, the pivot can be any number in the line. Once the pivot is decided, the quick sort program looks at every other number and moves it to a new line, 'smaller' or 'larger', depending on if it is smaller or larger than the pivot. After this step is done, the program has the 'smaller' line, the 'larger' line, and the pivot. Then, it splits both the smaller array AND larger array again by choosing a pivot for THAT line, and separating out the smaller values and the larger values to that new pivot. The program keeps splitting the lines up until every line has only one number in it. Then the program starts putting the numbers back together, using the pivots to remember if the value was smaller or larger in the previous step. Once all the numbers are put back together, they are in order of smallest to largest.

* Pseudo Code for Quick Sort:

```
function quicksort:
  variable 'pivot' equals spliced value of array index 0
  variables 'left' and 'right' equals array literals
  for loop: i = 0 and iterates through array.length
    if i < pivot
      push i 'left'
    otherwise push i 'right'

return (quicksort left) concat to (quicksort right)
```

* Performance explanations
- Best-case Scenario: O(*n* log *n*)
- Worst-case Scenario: O(n^2)

## Merge Sort

* Merge sort takes a line of numbers and splits the lines up over and over until every line is equal to one. Then it goes back up the chain, comparing the last 'line' that was split and arranging the first and second half according to whichever line's first value is smaller. It continues to join each line together until all numbers are sorted and are returned to one line.

* Pseudo Code for Merge Sort:

```
function mergesort (parameter: array)
  if array is empty or 1 then return array

  variables 'left' and 'right' - empty arrays
  find location of middle of array with Math floor array.length/2
  'left' equals first half of array
  'right' equals second half of array

  left equals mergesort of left
  right equals mergesort of right

  merge left and right.
  function merge (parameters: left and right)
  var result equals empty array
  if left <= right then
  append left to result
  else append right to result
run recursively through function until array is rejoined

```

* Performance explanations:
- Best-case Scenario: O(*n* log *n*)
- Worst-case Scenario: O *n* log *n* - (n-1)