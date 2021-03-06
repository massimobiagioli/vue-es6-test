import { expect } from 'chai'
import { incrementCounter } from '../src/actions'

const testAction = (action, args, state, expectedMutations, done) => {
    let count = 0;
    // mock dispatch
    const dispatch = (name, ...payload) => {
        const mutation = expectedMutations[count];
        expect(mutation.name).to.equal(name);
        if (payload) {
            expect(mutation.payload).to.deep.equal(payload);
        }
        count++;
        if (count >= expectedMutations.length) {
            done();
        }
    }
    // call the action with mocked store and arguments
    action({ dispatch, state }, ...args)

    // check if no mutations should have been dispatched
    if (expectedMutations.length === 0) {
        expect(count).to.equal(0)
        done()
    }
};

describe('actions', () => {
    it('incrementCounter', done => {
        testAction(incrementCounter, [], {}, [
            {
                name: 'INCREMENT',
                payload: [1]
            }
        ], done);
    });
});