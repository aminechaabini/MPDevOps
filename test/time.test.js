import { expect } from 'chai';
import { getFormattedTime } from '../utils.js';

describe('Time Formatting', () => {
    const testDate = new Date('2023-12-06T14:30:45Z');

    it('should return the correct time format', () => {
        const time = getFormattedTime(testDate);
        expect(time).to.equal('14:30:45');  // Expected 24-hour HH:MM:SS
    });

    it('should throw an error if the input is not a Date object', () => {
        expect(() => getFormattedTime("invalid")).to.throw("Invalid date");
    });
});
