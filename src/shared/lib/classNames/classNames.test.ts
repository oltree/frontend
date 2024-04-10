import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional classes', () => {
    const expected = 'someClass class1 class2';
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('with additional modes', () => {
    const expected = 'someClass hovered focused';
    expect(classNames('someClass', { hovered: true, focused: true }, [])).toBe(
      expected
    );
  });

  test('with additional mode - false', () => {
    const expected = 'someClass hovered';
    expect(classNames('someClass', { hovered: true, focused: false }, [])).toBe(
      expected
    );
  });

  test('with additional mode - undefined', () => {
    const expected = 'someClass hovered';
    expect(
      classNames('someClass', { hovered: true, focused: undefined }, [])
    ).toBe(expected);
  });

  test('with all other params', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(
      classNames(
        'someClass',
        { hovered: true, focused: false, disabled: undefined },
        ['class1', 'class2']
      )
    ).toBe(expected);
  });
});
