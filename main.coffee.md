Tween some values

    Easing = require "./easing"
    lerp = require "./lerp"

    module.exports = (x0, x1, t0, t1, t, easing) ->
      t = (t - t0)/(t1 - t0)

      p = Easing[easing](t)

      lerp(x0, x1, p)
