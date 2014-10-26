lerp = require "../lerp"

describe "lerp", ->
  it "should linearly interpolate between two values", ->
    assert.equal lerp(0, 1, 0.4), 0.4
