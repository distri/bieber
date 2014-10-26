Tween some values

    Easing = require "./easing"
    lerp = require "./lerp"

    module.exports = (x0, x1, t0, t1, t, easing) ->
      t = (t - t0)/(t1 - t0)

      if typeof easing is "function"
        p = easing(t)
      else
        p = Easing[easing](t)

      lerp(x0, x1, p)

    module.exports.Easing = Easing
