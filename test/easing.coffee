require "./helpers"

Easing = require "../easing"

describe "Easing", ->
  it "should have a bunch of easing functions", ->
    """
      linear
      quadratic
      cubic
      quartic
      quintic
      sinusoidal
    """.split("\n").forEach (name) ->
      v = Easing[name](0)
      equalEnough v, 0, 0.001, "f(0) = #{v}"
      
      v = Easing[name](1)
      equalEnough v, 1, 0.001, "f(1) = #{v}"
