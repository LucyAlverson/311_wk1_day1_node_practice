const { numbers, strings, dates } = require('../src')

  function isEven(value) {
	if (value%2 == 0)
		return true;
	else
		return false;
}
  test('Check if a given number is even or odd', () => {
    const isEven = numbers.isEven(29384)
    expect(isEven).toBe(true)
  })

var foo = '1';
typeof (foo - 0); // => 'number'

var a = '1',
    b = '2',
    c = '3',
    d = '4',
    e = '5',
    f = '6';
console.log((a - 0) + (b - 0)); // 21

  test('Add multiple numbers', () => {
    const sum = numbers.sum([1, 2, 3, 4, 5, 6])
    expect(sum).toEqual(21)
  })

Input : arr[] = 1, 3, 6, 2, 9 
            x = 14
Output : [1, 1, 1, 1]
         [1, 1, 3]
         [1, 6]
         [2, 2]
         [9] 


  test('Determine if any combination equals a given sum', () => {
    const exists = numbers.comboSum([1, 3, 6, 2, 9], 14)
    expect(exists).toBe(false)
  })

})

Input: candidates = [1,3,6,2,9], target = 14
Output: [[2,2,6],[14]]


describe('Strings module', () => {

  test('Split a string on the given delimeter', () => {
    const split = strings.split('a-new-string', '-')
    expect(split.length).toEqual(3)
    expect(split[0]).toBe('a')
    expect(split[1]).toBe('new')
    expect(split[2]).toBe('string')
  })

  test('Break a string into pairs', () => {
    const pairs = strings.pairs('abcdefghijklmnop')
    expect(pairs.length).toEqual(8)
    expect(pairs).toContain('gh')
    expect(pairs).toEqual(['ab', 'cd', 'ef', 'gh', 'ij', 'kl', 'mn', 'op'])
  })

  test('Reverse a string', () => {
    const reversed = strings.reverse('a blue dog')
    expect(reversed).toBe('god eulb a')
  })

})

describe('Dates module', () => {

  test('Return today\'s day - ex. Monday', () => {
    const weekdays = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday'
    ]

    const day = dates.today()
    expect(weekdays).toContain(day)
  })

  test('Return today\'s date in the format: May 29, 2019', () => {
    const cal = dates.calendar()
    expect(cal).toMatch(/^[A-z]{3} [0-9]{2}, [0-9]{4}$/)
  })

  test('Return the current time in the format: 03:21:51 PM', () => {
    const time = dates.currentTime()
    expect(time).toMatch(/^[0-9]{2}:[0-9]{2}:[0-9]{2} [A-Z]{2}$/)
  })

})