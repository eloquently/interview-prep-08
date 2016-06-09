import 'babel-polyfill';
import { expect } from 'chai';
import * as gen from '../src/generators';
import sinon from 'sinon';

function* count() {
    console.log('before yielding 1');
    yield 1;
    console.log('before yielding 2');
    yield 2;
    console.log('before yielding 3');
    yield 3;
    console.log('before finishing');
}

describe('generator specs', () => {
    if(gen.completeGenerator) {
        describe('completeGenerator', () => {
            it('completes generator', () => {
                const counter = count();
                gen.completeGenerator(counter);
                expect(counter.next().done).to.eq(true);
            });
            
            it('prints 4 messages to console', () => {
                const counter = count();
                const cl = sinon.spy(console, 'log');
                
                gen.completeGenerator(counter);
                
                expect(cl.callCount).to.eq(4);
                console.log.restore();
            });
        });
    }
    
    if(gen.seededRNG) {
        describe('seededRNG', () => {
            it('generates random numbers', () => {
                const rng = gen.seededRNG(1111);
                expect(rng.next().value).to.eq(2343);
                expect(rng.next().value).to.eq(2365);
                expect(rng.next().value).to.eq(2387);
                
                const rng2 = gen.seededRNG(1111);
                expect(rng2.next().value).to.eq(2343);
                expect(rng2.next().value).to.eq(2365);
                expect(rng2.next().value).to.eq(2387);
                
                
                const rng3 = gen.seededRNG(7680);
                expect(rng3.next().value).to.eq(9824);
                expect(rng3.next().value).to.eq(9977);
                expect(rng3.next().value).to.eq(131);
            });
        });
    }
});