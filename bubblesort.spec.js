describe('Bubble Sort', function() {
  beforeAll(function() {
    spyOn(window, 'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
  });

  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });

  it('number of times swap called', function() {
    // bubbleSort.swap();
    expect(window.swap.calls.count()).toEqual(0);
  });


});


describe('Bubble Sort Single', function() {


  beforeAll(function() {
    spyOn(window, 'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
  });

  it('handles single case', function() {
    expect(bubbleSort([2, 1])).toEqual([1, 2]);
  });

  it('number of times swap called', function() {
    // bubbleSort.swap();
    expect(window.swap.calls.count()).toEqual(1);
  });

});

describe('Bubble Sort Multiple', function() {


  beforeAll(function() {
    spyOn(window, 'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
  });

  it('handles multiple case', function() {
    expect(bubbleSort([3, 2, 1])).toEqual([1, 2, 3]);
  });

  it('number of times swap called', function() {
    // bubbleSort.swap();
    expect(window.swap.calls.count()).toEqual(4);
  });


});
