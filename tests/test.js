'use strict';

const {expect} = require ('chai');
const {execSync} = require('child_process');

describe('cal',() => {
  describe('CLI', () => {
  it('should handle the current momth', () => {
    const goal = execSync('cal').toString();
    const output = execSync('./cal.js').toString();

    expect(output).to.equal(goal);
    });
  });

  describe("Zeller's congruence", () => {
    //const zellers = require('../lib/zellers.js')

    describe('.modified_month', () => {
      it('return 13 for January', () => {
        expect(zellers.modifiedMonth(1)).to.equal(13);
      });
      //2 === 14
      //3 === 3
    });

    describe('.modifiedYear', () => {
      it('returns 2015 for Jan 2015', () => {
        expect(zellers.modifiedYear(2015, 1)).to.equal(2014);
      });
      // 2016, 2 === 2015
      // 2017, 3 === 2017
    });

    describe('.getDay', () => {
      it('returns 2 (Tuesday) for March 1, 2016', () => {
        expect(zellers.getDay(2016, 3, 1)).to.equal(2);
      });
      // 2000, 3, 1 === 3
      // 2100, 3, 1 === 1
      // 2200, 3, 2 === 0
      // 2300, 3, 1 === 4
     })
   })
});
