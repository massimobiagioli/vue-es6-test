import { expect } from 'chai'
import { mutations } from '../src/store'

// destructure assign mutations
const { INCREMENT } = mutations;

describe('mutations', () => {
  it('INCREMENT', () => {
    // mock state
    const state = { count: 0 };
    // apply mutation
    INCREMENT(state, 1);
    // assert result
    expect(state.count).to.equal(1);
  });
});