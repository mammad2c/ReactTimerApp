var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require("../../../node_modules/jquery/dist/jquery.min.js");
var TestUtils = require('react-dom/lib/ReactTestUtils');

var Countdown = require('Countdown');


describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).toExist();
  });
  describe('handleSetCountDown', () => {
    it('should set state to started and countdow', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetCountDown(10);
      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');
      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        done();

      }, 1001);
    });

    it('should count not to be negative', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetCountDown(1);

      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        done();

      }, 3001);
    })
  })

})