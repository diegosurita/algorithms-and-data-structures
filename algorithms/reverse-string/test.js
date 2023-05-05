const { withClassicForLoop } = require('./index');

describe('Reverse with classic for loop', function() {
  test('Reverse function exists', () => {
    expect(withClassicForLoop).toBeDefined();
  });
  
  test('Reverse reverses string example 1', () => {
    expect(withClassicForLoop('abcd')).toEqual('dcba');
  });
  
  test('Reverse reverses string string example 2', () => {
    expect(withClassicForLoop('  abcd')).toEqual('dcba  ');
  });
});
