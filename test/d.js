[ '-1': '--double-next' ]
[ '--double-next', 22, '--discard-prev' ]
[ '--discard-prev', false, '--double-next', NaN, NaN, '--discard-next' ]
[ '--double-next', Infinity, '--discard-prev', { '0': 'first', '1': 'second', length: 2 }, '--discard-next', NaN, 0, '8.963', '--discard-prev' ]
[ '--discard-prev', 3.14, '--double-next', 0, '--discard-next', 3.14, '--discard-prev', 0, '8.963', 1.233, { '0': 'first', '1': 'second', length: 2 }, '--double-prev' ]
[ '--discard-prev', 22, '--discard-next', 1.233, '--discard-prev', 22, '--discard-next', 'ABC', '--discard-next', { John: 'Smith' }, Infinity, '8.963', 0, 'GHI', '--double-prev' ]
[ '--double-next', 3.14, '--discard-prev', 1, '--discard-prev', 1.233, '--double-prev', 'GHI', '--double-next', { '0': 'first', '1': 'second', length: 2 }, '--discard-next', false, 'ABC', NaN, 1.233, '8.963', 'GHI', '--double-prev' ]
[ '--double-next', { John: 'Smith' }, '--double-prev', { John: 'Smith' }, '--discard-prev', 1.233, '--double-prev', 'GHI', '--discard-prev', 3.14, '--double-prev', { '0': 'first', '1': 'second', length: 2 }, '--discard-next', NaN, 3.14, 1, 3.14, 1.233, 'DEF', 1.233, '--discard-prev' ]
[ '--double-prev', true, '--discard-prev', 'DEF', '--discard-prev', 22, '--double-prev', { John: 'Smith' }, '--discard-next', NaN, '--double-prev', Infinity, '--discard-prev', false, '--double-prev', 333, 22, 'ABC', { '0': 'first', '1': 'second', length: 2 }, 3.14, Infinity, 3.14, 1.233, '--discard-next' ]