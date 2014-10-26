require "./helpers"

Tween = require "../main"

describe "Tweening", ->
  it "should interpolate values according to an easing function", ->
    [
      [0, 0]
      [0.1, 0.01]
      [0.2, 0.04]
      [0.3, 0.09]
      [0.4, 0.16]
      [0.5, 0.25]
      [0.6, 0.36]
      [0.7, 0.49]
      [0.8, 0.64]
      [0.9, 0.81]
      [1, 1]
    ].forEach ([t, v]) ->
      equalEnough Tween(0, 1, 0, 1, t, "quadratic"), v
