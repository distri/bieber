window["distri/bieber:master"]({
  "source": {
    "LICENSE": {
      "path": "LICENSE",
      "content": "The MIT License (MIT)\n\nCopyright (c) 2014 \n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the \"Software\"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.\n\n",
      "mode": "100644",
      "type": "blob"
    },
    "main.coffee.md": {
      "path": "main.coffee.md",
      "content": "Tween some values\n\n    Easing = require \"./easing\"\n    lerp = require \"./lerp\"\n\n    module.exports = (x0, x1, t0, t1, t, easing) ->\n      t = (t - t0)/(t1 - t0)\n\n      p = Easing[easing](t)\n\n      lerp(x0, x1, p)\n",
      "mode": "100644"
    },
    "test/easing.coffee": {
      "path": "test/easing.coffee",
      "content": "require \"./helpers\"\n\nEasing = require \"../easing\"\n\ndescribe \"Easing\", ->\n  it \"should have a bunch of easing functions\", ->\n    \"\"\"\n      linear\n      quadratic\n      cubic\n      quartic\n      quintic\n      sinusoidal\n    \"\"\".split(\"\\n\").forEach (name) ->\n      v = Easing[name](0)\n      equalEnough v, 0, 0.001, \"f(0) = #{v}\"\n      \n      v = Easing[name](1)\n      equalEnough v, 1, 0.001, \"f(1) = #{v}\"\n",
      "mode": "100644"
    },
    "easing.coffee.md": {
      "path": "easing.coffee.md",
      "content": "Easing\n======\n\n    {PI, sin, cos, pow} = Math\n\n    τ = 2 * PI\n\n    Easing =\n      sinusoidal: (t) ->\n        1 - cos(t * τ / 4)\n\n      sinusoidalOut: (t) ->\n        0 + sin(t * τ / 4)\n\n    polynomialEasings = [\"linear\", \"quadratic\", \"cubic\", \"quartic\", \"quintic\"]\n\n    polynomialEasings.forEach (easing, i) ->\n      exponent = i + 1\n      sign = if exponent % 2 then 1 else -1\n\n      Easing[easing] = (t) ->\n        pow(t, exponent)\n\n      Easing[\"#{easing}Out\"] = (t) ->\n        1 + sign * pow(t - 1, exponent)\n\n    [\"sinusoidal\"].concat(polynomialEasings).forEach (easing) ->\n      easeIn = Easing[easing]\n      easeOut = Easing[\"#{easing}Out\"]\n\n      Easing[\"#{easing}InOut\"] = (t) ->\n        if t < 0.5\n          easeIn(2 * t)\n        else\n          easeOut(2 * t - 1)\n\n    module.exports = Easing\n",
      "mode": "100644"
    },
    "lerp.coffee.md": {
      "path": "lerp.coffee.md",
      "content": "Linear Interpolation\n====================\n\n    module.exports = (x0, x1, t) ->\n      x0 + (x1 - x0) * t\n",
      "mode": "100644"
    },
    "test/lerp.coffee": {
      "path": "test/lerp.coffee",
      "content": "lerp = require \"../lerp\"\n\ndescribe \"lerp\", ->\n  it \"should linearly interpolate between two values\", ->\n    assert.equal lerp(0, 1, 0.4), 0.4\n",
      "mode": "100644"
    },
    "test/integration.coffee": {
      "path": "test/integration.coffee",
      "content": "require \"./helpers\"\n\nTween = require \"../main\"\n\ndescribe \"Tweening\", ->\n  it \"should interpolate values according to an easing function\", ->\n    [\n      [0, 0]\n      [0.1, 0.01]\n      [0.2, 0.04]\n      [0.3, 0.09]\n      [0.4, 0.16]\n      [0.5, 0.25]\n      [0.6, 0.36]\n      [0.7, 0.49]\n      [0.8, 0.64]\n      [0.9, 0.81]\n      [1, 1]\n    ].forEach ([t, v]) ->\n      equalEnough Tween(0, 1, 0, 1, t, \"quadratic\"), v\n",
      "mode": "100644"
    },
    "test/helpers.coffee": {
      "path": "test/helpers.coffee",
      "content": "global.equalEnough = (a, b, threshold=0.001, message) ->\n  delta = b - a\n\n  assert delta <= threshold, message\n  assert delta >= -threshold, message\n",
      "mode": "100644"
    }
  },
  "distribution": {
    "main": {
      "path": "main",
      "content": "(function() {\n  var Easing, lerp;\n\n  Easing = require(\"./easing\");\n\n  lerp = require(\"./lerp\");\n\n  module.exports = function(x0, x1, t0, t1, t, easing) {\n    var p;\n    t = (t - t0) / (t1 - t0);\n    p = Easing[easing](t);\n    return lerp(x0, x1, p);\n  };\n\n}).call(this);\n",
      "type": "blob"
    },
    "test/easing": {
      "path": "test/easing",
      "content": "(function() {\n  var Easing;\n\n  require(\"./helpers\");\n\n  Easing = require(\"../easing\");\n\n  describe(\"Easing\", function() {\n    return it(\"should have a bunch of easing functions\", function() {\n      return \"linear\\nquadratic\\ncubic\\nquartic\\nquintic\\nsinusoidal\".split(\"\\n\").forEach(function(name) {\n        var v;\n        v = Easing[name](0);\n        equalEnough(v, 0, 0.001, \"f(0) = \" + v);\n        v = Easing[name](1);\n        return equalEnough(v, 1, 0.001, \"f(1) = \" + v);\n      });\n    });\n  });\n\n}).call(this);\n",
      "type": "blob"
    },
    "easing": {
      "path": "easing",
      "content": "(function() {\n  var Easing, PI, cos, polynomialEasings, pow, sin, τ;\n\n  PI = Math.PI, sin = Math.sin, cos = Math.cos, pow = Math.pow;\n\n  τ = 2 * PI;\n\n  Easing = {\n    sinusoidal: function(t) {\n      return 1 - cos(t * τ / 4);\n    },\n    sinusoidalOut: function(t) {\n      return 0 + sin(t * τ / 4);\n    }\n  };\n\n  polynomialEasings = [\"linear\", \"quadratic\", \"cubic\", \"quartic\", \"quintic\"];\n\n  polynomialEasings.forEach(function(easing, i) {\n    var exponent, sign;\n    exponent = i + 1;\n    sign = exponent % 2 ? 1 : -1;\n    Easing[easing] = function(t) {\n      return pow(t, exponent);\n    };\n    return Easing[\"\" + easing + \"Out\"] = function(t) {\n      return 1 + sign * pow(t - 1, exponent);\n    };\n  });\n\n  [\"sinusoidal\"].concat(polynomialEasings).forEach(function(easing) {\n    var easeIn, easeOut;\n    easeIn = Easing[easing];\n    easeOut = Easing[\"\" + easing + \"Out\"];\n    return Easing[\"\" + easing + \"InOut\"] = function(t) {\n      if (t < 0.5) {\n        return easeIn(2 * t);\n      } else {\n        return easeOut(2 * t - 1);\n      }\n    };\n  });\n\n  module.exports = Easing;\n\n}).call(this);\n",
      "type": "blob"
    },
    "lerp": {
      "path": "lerp",
      "content": "(function() {\n  module.exports = function(x0, x1, t) {\n    return x0 + (x1 - x0) * t;\n  };\n\n}).call(this);\n",
      "type": "blob"
    },
    "test/lerp": {
      "path": "test/lerp",
      "content": "(function() {\n  var lerp;\n\n  lerp = require(\"../lerp\");\n\n  describe(\"lerp\", function() {\n    return it(\"should linearly interpolate between two values\", function() {\n      return assert.equal(lerp(0, 1, 0.4), 0.4);\n    });\n  });\n\n}).call(this);\n",
      "type": "blob"
    },
    "test/integration": {
      "path": "test/integration",
      "content": "(function() {\n  var Tween;\n\n  require(\"./helpers\");\n\n  Tween = require(\"../main\");\n\n  describe(\"Tweening\", function() {\n    return it(\"should interpolate values according to an easing function\", function() {\n      return [[0, 0], [0.1, 0.01], [0.2, 0.04], [0.3, 0.09], [0.4, 0.16], [0.5, 0.25], [0.6, 0.36], [0.7, 0.49], [0.8, 0.64], [0.9, 0.81], [1, 1]].forEach(function(_arg) {\n        var t, v;\n        t = _arg[0], v = _arg[1];\n        return equalEnough(Tween(0, 1, 0, 1, t, \"quadratic\"), v);\n      });\n    });\n  });\n\n}).call(this);\n",
      "type": "blob"
    },
    "test/helpers": {
      "path": "test/helpers",
      "content": "(function() {\n  global.equalEnough = function(a, b, threshold, message) {\n    var delta;\n    if (threshold == null) {\n      threshold = 0.001;\n    }\n    delta = b - a;\n    assert(delta <= threshold, message);\n    return assert(delta >= -threshold, message);\n  };\n\n}).call(this);\n",
      "type": "blob"
    }
  },
  "progenitor": {
    "url": "http://www.danielx.net/editor/"
  },
  "entryPoint": "main",
  "repository": {
    "branch": "master",
    "default_branch": "master",
    "full_name": "distri/bieber",
    "homepage": null,
    "description": "Tweening library",
    "html_url": "https://github.com/distri/bieber",
    "url": "https://api.github.com/repos/distri/bieber",
    "publishBranch": "gh-pages"
  },
  "dependencies": {}
});