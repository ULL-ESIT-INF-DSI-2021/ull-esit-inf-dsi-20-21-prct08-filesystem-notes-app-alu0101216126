import 'mocha';
import {expect} from 'chai';
import {Visa} from '../src/mod/visa';
import {Mastercard} from '../src/mod/mastercard';
import {Paypal} from '../src/mod/paypal';

const visa = new Visa(10);
const paypal = new Paypal(10);
const mastercard = new Mastercard(10);

describe('Visa function test', () => {
  it('Exist an visa object', () => {
    expect(visa).not.to.be.equal(null);
  });

  it('visa.run() returns 6.5', () => {
    expect(visa.run()).to.be.equal(6.5);
  });
});

describe('Mastercad function test', () => {
  it('Exist an mastercard object', () => {
    expect(mastercard).not.to.be.equal(null);
  });

  it('mastercard.run() returns 5', () => {
    expect(mastercard.run()).to.be.equal(5);
  });
});

describe('Paypal function test', () => {
  it('Exist an paypal object', () => {
    expect(paypal).not.to.be.equal(null);
  });

  it('paypal.run() returns 3', () => {
    expect(paypal.run()).to.be.equal(3);
  });
});
