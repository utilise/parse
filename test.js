var expect = require('chai').expect
  , parse = require('./')

describe('parse', function() {
  it('should gracefully return undefined if undefined', function() {
    expect(parse()).to.not.be.ok
  })

  it('should parse object', function() {
    expect(parse('{"foo":"bar"}')).to.eql({foo:'bar'})
  })
})