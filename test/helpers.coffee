global.equalEnough = (a, b, threshold=0.001, message) ->
  delta = b - a

  assert delta <= threshold, message
  assert delta >= -threshold, message
