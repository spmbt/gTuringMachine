(function () {
	var e = !0,
		g = null,
		i = !1,
		aa = this,
		ba = function (a, b, c) {
			return a.call.apply(a.bind, arguments)
		},
		ca = function (a, b, c) {
			if (!a) throw Error();
			if (2 < arguments.length) {
				var d = Array.prototype.slice.call(arguments, 2);
				return function () {
					var c = Array.prototype.slice.call(arguments);
					Array.prototype.unshift.apply(c, d);
					return a.apply(b, c)
				}
			}
			return function () {
				return a.apply(b, arguments)
			}
		},
		j = function (a, b, c) {
			j = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ba : ca;
			return j.apply(g, arguments)
		},
		da = function (a, b) {
			var c = Array.prototype.slice.call(arguments, 1);
			return function () {
				var b = Array.prototype.slice.call(arguments);
				b.unshift.apply(b, c);
				return a.apply(this, b)
			}
		};
	Function.prototype.bind = Function.prototype.bind ||
	function (a, b) {
		if (1 < arguments.length) {
			var c = Array.prototype.slice.call(arguments, 1);
			c.unshift(this, a);
			return j.apply(g, c)
		}
		return j(this, a)
	};
	var k, m;
	var ea = ["Moz", "Webkit", "O", "ms"],
		n = function (a) {
			a && a.parentNode && a.parentNode.removeChild(a)
		},
		o = function (a, b) {
			for (var c = 0, d;
			(d = a[c]) && d != b; c++);
			d = c == a.length - 1 ? a[0] : a[c + 1];
			return c == a.length ? g : d
		},
		p = function (a, b, c) {
			a.addEventListener ? a.addEventListener(b, c, i) : a.attachEvent("on" + b, c)
		},
		q = function (a, b, c) {
			a && c && (a.removeEventListener ? a.removeEventListener(b, c, i) : a.detachEvent && a.detachEvent("on" + b, c))
		},
		r = function (a, b) {
			var c = a.style;
			"opacity" in c ? c.opacity = b : "MozOpacity" in c ? c.MozOpacity = b : "filter" in c && (c.filter = "" === b ? "" : "alpha(opacity=" + 100 * b + ")")
		};
	var fa = {
		G0: {
			x: 0,
			y: 613,
			width: 35,
			height: 37
		},
		G1: {
			x: 35,
			y: 613,
			width: 35,
			height: 37
		},
		G2: {
			x: 70,
			y: 613,
			width: 35,
			height: 37
		},
		G3: {
			x: 105,
			y: 613,
			width: 35,
			height: 37
		},
		G4: {
			x: 140,
			y: 613,
			width: 35,
			height: 37
		},
		G5: {
			x: 175,
			y: 613,
			width: 35,
			height: 37
		},
		G6: {
			x: 210,
			y: 613,
			width: 35,
			height: 37
		},
		G7: {
			x: 245,
			y: 613,
			width: 35,
			height: 37
		},
		e0: {
			x: 0,
			y: 653,
			width: 22,
			height: 23
		},
		e1: {
			x: 22,
			y: 653,
			width: 22,
			height: 23
		},
		e2: {
			x: 44,
			y: 653,
			width: 22,
			height: 23
		},
		e3: {
			x: 66,
			y: 653,
			width: 22,
			height: 23
		},
		e4: {
			x: 88,
			y: 653,
			width: 22,
			height: 23
		},
		e5: {
			x: 110,
			y: 653,
			width: 22,
			height: 23
		},
		e6: {
			x: 132,
			y: 653,
			width: 22,
			height: 23
		},
		e7: {
			x: 154,
			y: 653,
			width: 22,
			height: 23
		},
		"eq-bunny-b": {
			x: 137,
			y: 0,
			width: 40,
			height: 40
		},
		"eq-bunny-g": {
			x: 217,
			y: 0,
			width: 40,
			height: 40
		},
		"eq-bunny-r": {
			x: 257,
			y: 0,
			width: 40,
			height: 40
		},
		"eq-bunny-y": {
			x: 177,
			y: 0,
			width: 40,
			height: 40
		},
		"eq-dim": {
			x: 97,
			y: 0,
			width: 40,
			height: 40
		},
		"eq-eq": {
			x: 337,
			y: 0,
			width: 40,
			height: 40
		},
		"eq-neq": {
			x: 297,
			y: 0,
			width: 40,
			height: 40
		},
		g0: {
			x: 366,
			y: 640,
			width: 26,
			height: 36
		},
		g1: {
			x: 392,
			y: 640,
			width: 26,
			height: 36
		},
		g2: {
			x: 418,
			y: 640,
			width: 26,
			height: 36
		},
		g3: {
			x: 444,
			y: 640,
			width: 26,
			height: 36
		},
		g4: {
			x: 470,
			y: 640,
			width: 26,
			height: 36
		},
		g5: {
			x: 496,
			y: 640,
			width: 26,
			height: 36
		},
		g6: {
			x: 522,
			y: 640,
			width: 26,
			height: 36
		},
		g7: {
			x: 548,
			y: 640,
			width: 26,
			height: 36
		},
		head: {
			x: 286,
			y: 554,
			width: 61,
			height: 59
		},
		l0: {
			x: 380,
			y: 0,
			width: 16,
			height: 35
		},
		l1: {
			x: 396,
			y: 0,
			width: 16,
			height: 35
		},
		l2: {
			x: 412,
			y: 0,
			width: 16,
			height: 35
		},
		l3: {
			x: 428,
			y: 0,
			width: 16,
			height: 35
		},
		l4: {
			x: 444,
			y: 0,
			width: 16,
			height: 35
		},
		l5: {
			x: 460,
			y: 0,
			width: 16,
			height: 35
		},
		l6: {
			x: 476,
			y: 0,
			width: 16,
			height: 35
		},
		l7: {
			x: 492,
			y: 0,
			width: 16,
			height: 35
		},
		"o-back-i": {
			x: 665,
			y: 416,
			width: 35,
			height: 45
		},
		"o-back-i-in": {
			x: 665,
			y: 506,
			width: 35,
			height: 45
		},
		"o-back-i-lit": {
			x: 665,
			y: 461,
			width: 35,
			height: 45
		},
		"o-back-i-out": {
			x: 665,
			y: 326,
			width: 35,
			height: 45
		},
		"o-back-i-out-lit": {
			x: 665,
			y: 371,
			width: 35,
			height: 45
		},
		"o-back-s": {
			x: 714,
			y: 48,
			width: 34,
			height: 45
		},
		"o-back-s-lit-b": {
			x: 714,
			y: 138,
			width: 34,
			height: 45
		},
		"o-back-s-lit-g": {
			x: 714,
			y: 228,
			width: 34,
			height: 45
		},
		"o-back-s-lit-r": {
			x: 714,
			y: 183,
			width: 34,
			height: 45
		},
		"o-back-s-lit-y": {
			x: 714,
			y: 93,
			width: 34,
			height: 45
		},
		"o-back2-i": {
			x: 385,
			y: 416,
			width: 35,
			height: 45
		},
		"o-back2-i-in": {
			x: 385,
			y: 506,
			width: 35,
			height: 45
		},
		"o-back2-i-lit": {
			x: 385,
			y: 461,
			width: 35,
			height: 45
		},
		"o-back2-i-out": {
			x: 385,
			y: 326,
			width: 35,
			height: 45
		},
		"o-back2-i-out-lit": {
			x: 385,
			y: 371,
			width: 35,
			height: 45
		},
		"o-back2-s": {
			x: 442,
			y: 48,
			width: 34,
			height: 45
		},
		"o-back2-s-lit-b": {
			x: 442,
			y: 138,
			width: 34,
			height: 45
		},
		"o-back2-s-lit-g": {
			x: 442,
			y: 228,
			width: 34,
			height: 45
		},
		"o-back2-s-lit-r": {
			x: 442,
			y: 183,
			width: 34,
			height: 45
		},
		"o-back2-s-lit-y": {
			x: 442,
			y: 93,
			width: 34,
			height: 45
		},
		"o-back3-i": {
			x: 420,
			y: 416,
			width: 35,
			height: 45
		},
		"o-back3-i-in": {
			x: 420,
			y: 506,
			width: 35,
			height: 45
		},
		"o-back3-i-lit": {
			x: 420,
			y: 461,
			width: 35,
			height: 45
		},
		"o-back3-i-out": {
			x: 420,
			y: 326,
			width: 35,
			height: 45
		},
		"o-back3-i-out-lit": {
			x: 420,
			y: 371,
			width: 35,
			height: 45
		},
		"o-back3-s": {
			x: 476,
			y: 48,
			width: 34,
			height: 45
		},
		"o-back3-s-lit-b": {
			x: 476,
			y: 138,
			width: 34,
			height: 45
		},
		"o-back3-s-lit-g": {
			x: 476,
			y: 228,
			width: 34,
			height: 45
		},
		"o-back3-s-lit-r": {
			x: 476,
			y: 183,
			width: 34,
			height: 45
		},
		"o-back3-s-lit-y": {
			x: 476,
			y: 93,
			width: 34,
			height: 45
		},
		"o-back4-i": {
			x: 455,
			y: 416,
			width: 35,
			height: 45
		},
		"o-back4-i-in": {
			x: 455,
			y: 506,
			width: 35,
			height: 45
		},
		"o-back4-i-lit": {
			x: 455,
			y: 461,
			width: 35,
			height: 45
		},
		"o-back4-i-out": {
			x: 455,
			y: 326,
			width: 35,
			height: 45
		},
		"o-back4-i-out-lit": {
			x: 455,
			y: 371,
			width: 35,
			height: 45
		},
		"o-back4-s": {
			x: 510,
			y: 48,
			width: 34,
			height: 45
		},
		"o-back4-s-lit-b": {
			x: 510,
			y: 138,
			width: 34,
			height: 45
		},
		"o-back4-s-lit-g": {
			x: 510,
			y: 228,
			width: 34,
			height: 45
		},
		"o-back4-s-lit-r": {
			x: 510,
			y: 183,
			width: 34,
			height: 45
		},
		"o-back4-s-lit-y": {
			x: 510,
			y: 93,
			width: 34,
			height: 45
		},
		"o-back8-i": {
			x: 595,
			y: 416,
			width: 35,
			height: 45
		},
		"o-back8-i-in": {
			x: 595,
			y: 506,
			width: 35,
			height: 45
		},
		"o-back8-i-lit": {
			x: 595,
			y: 461,
			width: 35,
			height: 45
		},
		"o-back8-i-out": {
			x: 595,
			y: 326,
			width: 35,
			height: 45
		},
		"o-back8-i-out-lit": {
			x: 595,
			y: 371,
			width: 35,
			height: 45
		},
		"o-back8-s": {
			x: 646,
			y: 48,
			width: 34,
			height: 45
		},
		"o-back8-s-lit-b": {
			x: 646,
			y: 138,
			width: 34,
			height: 45
		},
		"o-back8-s-lit-g": {
			x: 646,
			y: 228,
			width: 34,
			height: 45
		},
		"o-back8-s-lit-r": {
			x: 646,
			y: 183,
			width: 34,
			height: 45
		},
		"o-back8-s-lit-y": {
			x: 646,
			y: 93,
			width: 34,
			height: 45
		},
		"o-back9-i": {
			x: 630,
			y: 416,
			width: 35,
			height: 45
		},
		"o-back9-i-in": {
			x: 630,
			y: 506,
			width: 35,
			height: 45
		},
		"o-back9-i-lit": {
			x: 630,
			y: 461,
			width: 35,
			height: 45
		},
		"o-back9-i-out": {
			x: 630,
			y: 326,
			width: 35,
			height: 45
		},
		"o-back9-i-out-lit": {
			x: 630,
			y: 371,
			width: 35,
			height: 45
		},
		"o-back9-s": {
			x: 680,
			y: 48,
			width: 34,
			height: 45
		},
		"o-back9-s-lit-b": {
			x: 680,
			y: 138,
			width: 34,
			height: 45
		},
		"o-back9-s-lit-g": {
			x: 680,
			y: 228,
			width: 34,
			height: 45
		},
		"o-back9-s-lit-r": {
			x: 680,
			y: 183,
			width: 34,
			height: 45
		},
		"o-back9-s-lit-y": {
			x: 680,
			y: 93,
			width: 34,
			height: 45
		},
		"o-blank-down-i": {
			x: 735,
			y: 416,
			width: 35,
			height: 45
		},
		"o-blank-down-i-in": {
			x: 735,
			y: 506,
			width: 35,
			height: 45
		},
		"o-blank-down-i-lit": {
			x: 735,
			y: 461,
			width: 35,
			height: 45
		},
		"o-blank-down-i-out": {
			x: 735,
			y: 326,
			width: 35,
			height: 45
		},
		"o-blank-down-i-out-lit": {
			x: 735,
			y: 371,
			width: 35,
			height: 45
		},
		"o-blank-down-s": {
			x: 782,
			y: 48,
			width: 34,
			height: 45
		},
		"o-blank-down-s-lit-b": {
			x: 782,
			y: 138,
			width: 34,
			height: 45
		},
		"o-blank-down-s-lit-g": {
			x: 782,
			y: 228,
			width: 34,
			height: 45
		},
		"o-blank-down-s-lit-r": {
			x: 782,
			y: 183,
			width: 34,
			height: 45
		},
		"o-blank-down-s-lit-y": {
			x: 782,
			y: 93,
			width: 34,
			height: 45
		},
		"o-blank-i": {
			x: 0,
			y: 416,
			width: 35,
			height: 45
		},
		"o-blank-i-in": {
			x: 0,
			y: 506,
			width: 35,
			height: 45
		},
		"o-blank-i-lit": {
			x: 0,
			y: 461,
			width: 35,
			height: 45
		},
		"o-blank-i-out": {
			x: 0,
			y: 326,
			width: 35,
			height: 45
		},
		"o-blank-i-out-lit": {
			x: 0,
			y: 371,
			width: 35,
			height: 45
		},
		"o-blank-s": {
			x: 34,
			y: 48,
			width: 34,
			height: 45
		},
		"o-blank-s-lit-b": {
			x: 34,
			y: 138,
			width: 34,
			height: 45
		},
		"o-blank-s-lit-g": {
			x: 34,
			y: 228,
			width: 34,
			height: 45
		},
		"o-blank-s-lit-r": {
			x: 34,
			y: 183,
			width: 34,
			height: 45
		},
		"o-blank-s-lit-y": {
			x: 34,
			y: 93,
			width: 34,
			height: 45
		},
		"o-blank-up-i": {
			x: 700,
			y: 416,
			width: 35,
			height: 45
		},
		"o-blank-up-i-in": {
			x: 700,
			y: 506,
			width: 35,
			height: 45
		},
		"o-blank-up-i-lit": {
			x: 700,
			y: 461,
			width: 35,
			height: 45
		},
		"o-blank-up-i-out": {
			x: 700,
			y: 326,
			width: 35,
			height: 45
		},
		"o-blank-up-i-out-lit": {
			x: 700,
			y: 371,
			width: 35,
			height: 45
		},
		"o-blank-up-s": {
			x: 748,
			y: 48,
			width: 34,
			height: 45
		},
		"o-blank-up-s-lit-b": {
			x: 748,
			y: 138,
			width: 34,
			height: 45
		},
		"o-blank-up-s-lit-g": {
			x: 748,
			y: 228,
			width: 34,
			height: 45
		},
		"o-blank-up-s-lit-r": {
			x: 748,
			y: 183,
			width: 34,
			height: 45
		},
		"o-blank-up-s-lit-y": {
			x: 748,
			y: 93,
			width: 34,
			height: 45
		},
		"o-dim-s": {
			x: 0,
			y: 48,
			width: 34,
			height: 45
		},
		"o-dim-s-lit-b": {
			x: 0,
			y: 138,
			width: 34,
			height: 45
		},
		"o-dim-s-lit-g": {
			x: 0,
			y: 228,
			width: 34,
			height: 45
		},
		"o-dim-s-lit-r": {
			x: 0,
			y: 183,
			width: 34,
			height: 45
		},
		"o-dim-s-lit-y": {
			x: 0,
			y: 93,
			width: 34,
			height: 45
		},
		"o-down0-i": {
			x: 35,
			y: 416,
			width: 35,
			height: 45
		},
		"o-down0-i-in": {
			x: 35,
			y: 506,
			width: 35,
			height: 45
		},
		"o-down0-i-lit": {
			x: 35,
			y: 461,
			width: 35,
			height: 45
		},
		"o-down0-i-out": {
			x: 35,
			y: 326,
			width: 35,
			height: 45
		},
		"o-down0-i-out-lit": {
			x: 35,
			y: 371,
			width: 35,
			height: 45
		},
		"o-down0-s": {
			x: 102,
			y: 48,
			width: 34,
			height: 45
		},
		"o-down0-s-lit-b": {
			x: 102,
			y: 138,
			width: 34,
			height: 45
		},
		"o-down0-s-lit-g": {
			x: 102,
			y: 228,
			width: 34,
			height: 45
		},
		"o-down0-s-lit-r": {
			x: 102,
			y: 183,
			width: 34,
			height: 45
		},
		"o-down0-s-lit-y": {
			x: 102,
			y: 93,
			width: 34,
			height: 45
		},
		"o-down1-i": {
			x: 70,
			y: 416,
			width: 35,
			height: 45
		},
		"o-down1-i-in": {
			x: 70,
			y: 506,
			width: 35,
			height: 45
		},
		"o-down1-i-lit": {
			x: 70,
			y: 461,
			width: 35,
			height: 45
		},
		"o-down1-i-out": {
			x: 70,
			y: 326,
			width: 35,
			height: 45
		},
		"o-down1-i-out-lit": {
			x: 70,
			y: 371,
			width: 35,
			height: 45
		},
		"o-down1-s": {
			x: 136,
			y: 48,
			width: 34,
			height: 45
		},
		"o-down1-s-lit-b": {
			x: 136,
			y: 138,
			width: 34,
			height: 45
		},
		"o-down1-s-lit-g": {
			x: 136,
			y: 228,
			width: 34,
			height: 45
		},
		"o-down1-s-lit-r": {
			x: 136,
			y: 183,
			width: 34,
			height: 45
		},
		"o-down1-s-lit-y": {
			x: 136,
			y: 93,
			width: 34,
			height: 45
		},
		"o-down_-i": {
			x: 105,
			y: 416,
			width: 35,
			height: 45
		},
		"o-down_-i-in": {
			x: 105,
			y: 506,
			width: 35,
			height: 45
		},
		"o-down_-i-lit": {
			x: 105,
			y: 461,
			width: 35,
			height: 45
		},
		"o-down_-i-out": {
			x: 105,
			y: 326,
			width: 35,
			height: 45
		},
		"o-down_-i-out-lit": {
			x: 105,
			y: 371,
			width: 35,
			height: 45
		},
		"o-down_-s": {
			x: 170,
			y: 48,
			width: 34,
			height: 45
		},
		"o-down_-s-lit-b": {
			x: 170,
			y: 138,
			width: 34,
			height: 45
		},
		"o-down_-s-lit-g": {
			x: 170,
			y: 228,
			width: 34,
			height: 45
		},
		"o-down_-s-lit-r": {
			x: 170,
			y: 183,
			width: 34,
			height: 45
		},
		"o-down_-s-lit-y": {
			x: 170,
			y: 93,
			width: 34,
			height: 45
		},
		"o-left-i": {
			x: 280,
			y: 416,
			width: 35,
			height: 45
		},
		"o-left-i-in": {
			x: 280,
			y: 506,
			width: 35,
			height: 45
		},
		"o-left-i-lit": {
			x: 280,
			y: 461,
			width: 35,
			height: 45
		},
		"o-left-i-out": {
			x: 280,
			y: 326,
			width: 35,
			height: 45
		},
		"o-left-i-out-lit": {
			x: 280,
			y: 371,
			width: 35,
			height: 45
		},
		"o-left-s": {
			x: 340,
			y: 48,
			width: 34,
			height: 45
		},
		"o-left-s-lit-b": {
			x: 340,
			y: 138,
			width: 34,
			height: 45
		},
		"o-left-s-lit-g": {
			x: 340,
			y: 228,
			width: 34,
			height: 45
		},
		"o-left-s-lit-r": {
			x: 340,
			y: 183,
			width: 34,
			height: 45
		},
		"o-left-s-lit-y": {
			x: 340,
			y: 93,
			width: 34,
			height: 45
		},
		"o-print0-i": {
			x: 350,
			y: 416,
			width: 35,
			height: 45
		},
		"o-print0-i-in": {
			x: 350,
			y: 506,
			width: 35,
			height: 45
		},
		"o-print0-i-lit": {
			x: 350,
			y: 461,
			width: 35,
			height: 45
		},
		"o-print0-i-out": {
			x: 350,
			y: 326,
			width: 35,
			height: 45
		},
		"o-print0-i-out-lit": {
			x: 350,
			y: 371,
			width: 35,
			height: 45
		},
		"o-print0-s": {
			x: 408,
			y: 48,
			width: 34,
			height: 45
		},
		"o-print0-s-lit-b": {
			x: 408,
			y: 138,
			width: 34,
			height: 45
		},
		"o-print0-s-lit-g": {
			x: 408,
			y: 228,
			width: 34,
			height: 45
		},
		"o-print0-s-lit-r": {
			x: 408,
			y: 183,
			width: 34,
			height: 45
		},
		"o-print0-s-lit-y": {
			x: 408,
			y: 93,
			width: 34,
			height: 45
		},
		"o-print1-i": {
			x: 315,
			y: 416,
			width: 35,
			height: 45
		},
		"o-print1-i-in": {
			x: 315,
			y: 506,
			width: 35,
			height: 45
		},
		"o-print1-i-lit": {
			x: 315,
			y: 461,
			width: 35,
			height: 45
		},
		"o-print1-i-out": {
			x: 315,
			y: 326,
			width: 35,
			height: 45
		},
		"o-print1-i-out-lit": {
			x: 315,
			y: 371,
			width: 35,
			height: 45
		},
		"o-print1-s": {
			x: 374,
			y: 48,
			width: 34,
			height: 45
		},
		"o-print1-s-lit-b": {
			x: 374,
			y: 138,
			width: 34,
			height: 45
		},
		"o-print1-s-lit-g": {
			x: 374,
			y: 228,
			width: 34,
			height: 45
		},
		"o-print1-s-lit-r": {
			x: 374,
			y: 183,
			width: 34,
			height: 45
		},
		"o-print1-s-lit-y": {
			x: 374,
			y: 93,
			width: 34,
			height: 45
		},
		"o-rback2-i": {
			x: 490,
			y: 416,
			width: 35,
			height: 45
		},
		"o-rback2-i-in": {
			x: 490,
			y: 506,
			width: 35,
			height: 45
		},
		"o-rback2-i-lit": {
			x: 490,
			y: 461,
			width: 35,
			height: 45
		},
		"o-rback2-i-out": {
			x: 490,
			y: 326,
			width: 35,
			height: 45
		},
		"o-rback2-i-out-lit": {
			x: 490,
			y: 371,
			width: 35,
			height: 45
		},
		"o-rback2-s": {
			x: 544,
			y: 48,
			width: 34,
			height: 45
		},
		"o-rback2-s-lit-b": {
			x: 544,
			y: 138,
			width: 34,
			height: 45
		},
		"o-rback2-s-lit-g": {
			x: 544,
			y: 228,
			width: 34,
			height: 45
		},
		"o-rback2-s-lit-r": {
			x: 544,
			y: 183,
			width: 34,
			height: 45
		},
		"o-rback2-s-lit-y": {
			x: 544,
			y: 93,
			width: 34,
			height: 45
		},
		"o-rback3-i": {
			x: 525,
			y: 416,
			width: 35,
			height: 45
		},
		"o-rback3-i-in": {
			x: 525,
			y: 506,
			width: 35,
			height: 45
		},
		"o-rback3-i-lit": {
			x: 525,
			y: 461,
			width: 35,
			height: 45
		},
		"o-rback3-i-out": {
			x: 525,
			y: 326,
			width: 35,
			height: 45
		},
		"o-rback3-i-out-lit": {
			x: 525,
			y: 371,
			width: 35,
			height: 45
		},
		"o-rback3-s": {
			x: 578,
			y: 48,
			width: 34,
			height: 45
		},
		"o-rback3-s-lit-b": {
			x: 578,
			y: 138,
			width: 34,
			height: 45
		},
		"o-rback3-s-lit-g": {
			x: 578,
			y: 228,
			width: 34,
			height: 45
		},
		"o-rback3-s-lit-r": {
			x: 578,
			y: 183,
			width: 34,
			height: 45
		},
		"o-rback3-s-lit-y": {
			x: 578,
			y: 93,
			width: 34,
			height: 45
		},
		"o-rback4-i": {
			x: 560,
			y: 416,
			width: 35,
			height: 45
		},
		"o-rback4-i-in": {
			x: 560,
			y: 506,
			width: 35,
			height: 45
		},
		"o-rback4-i-lit": {
			x: 560,
			y: 461,
			width: 35,
			height: 45
		},
		"o-rback4-i-out": {
			x: 560,
			y: 326,
			width: 35,
			height: 45
		},
		"o-rback4-i-out-lit": {
			x: 560,
			y: 371,
			width: 35,
			height: 45
		},
		"o-rback4-s": {
			x: 612,
			y: 48,
			width: 34,
			height: 45
		},
		"o-rback4-s-lit-b": {
			x: 612,
			y: 138,
			width: 34,
			height: 45
		},
		"o-rback4-s-lit-g": {
			x: 612,
			y: 228,
			width: 34,
			height: 45
		},
		"o-rback4-s-lit-r": {
			x: 612,
			y: 183,
			width: 34,
			height: 45
		},
		"o-rback4-s-lit-y": {
			x: 612,
			y: 93,
			width: 34,
			height: 45
		},
		"o-right-i": {
			x: 245,
			y: 416,
			width: 35,
			height: 45
		},
		"o-right-i-in": {
			x: 245,
			y: 506,
			width: 35,
			height: 45
		},
		"o-right-i-lit": {
			x: 245,
			y: 461,
			width: 35,
			height: 45
		},
		"o-right-i-out": {
			x: 245,
			y: 326,
			width: 35,
			height: 45
		},
		"o-right-i-out-lit": {
			x: 245,
			y: 371,
			width: 35,
			height: 45
		},
		"o-right-s": {
			x: 306,
			y: 48,
			width: 34,
			height: 45
		},
		"o-right-s-lit-b": {
			x: 306,
			y: 138,
			width: 34,
			height: 45
		},
		"o-right-s-lit-g": {
			x: 306,
			y: 228,
			width: 34,
			height: 45
		},
		"o-right-s-lit-r": {
			x: 306,
			y: 183,
			width: 34,
			height: 45
		},
		"o-right-s-lit-y": {
			x: 306,
			y: 93,
			width: 34,
			height: 45
		},
		"o-up0-i": {
			x: 140,
			y: 416,
			width: 35,
			height: 45
		},
		"o-up0-i-in": {
			x: 140,
			y: 506,
			width: 35,
			height: 45
		},
		"o-up0-i-lit": {
			x: 140,
			y: 461,
			width: 35,
			height: 45
		},
		"o-up0-i-out": {
			x: 140,
			y: 326,
			width: 35,
			height: 45
		},
		"o-up0-i-out-lit": {
			x: 140,
			y: 371,
			width: 35,
			height: 45
		},
		"o-up0-s": {
			x: 204,
			y: 48,
			width: 34,
			height: 45
		},
		"o-up0-s-lit-b": {
			x: 204,
			y: 138,
			width: 34,
			height: 45
		},
		"o-up0-s-lit-g": {
			x: 204,
			y: 228,
			width: 34,
			height: 45
		},
		"o-up0-s-lit-r": {
			x: 204,
			y: 183,
			width: 34,
			height: 45
		},
		"o-up0-s-lit-y": {
			x: 204,
			y: 93,
			width: 34,
			height: 45
		},
		"o-up1-i": {
			x: 175,
			y: 416,
			width: 35,
			height: 45
		},
		"o-up1-i-in": {
			x: 175,
			y: 506,
			width: 35,
			height: 45
		},
		"o-up1-i-lit": {
			x: 175,
			y: 461,
			width: 35,
			height: 45
		},
		"o-up1-i-out": {
			x: 175,
			y: 326,
			width: 35,
			height: 45
		},
		"o-up1-i-out-lit": {
			x: 175,
			y: 371,
			width: 35,
			height: 45
		},
		"o-up1-s": {
			x: 238,
			y: 48,
			width: 34,
			height: 45
		},
		"o-up1-s-lit-b": {
			x: 238,
			y: 138,
			width: 34,
			height: 45
		},
		"o-up1-s-lit-g": {
			x: 238,
			y: 228,
			width: 34,
			height: 45
		},
		"o-up1-s-lit-r": {
			x: 238,
			y: 183,
			width: 34,
			height: 45
		},
		"o-up1-s-lit-y": {
			x: 238,
			y: 93,
			width: 34,
			height: 45
		},
		"o-up_-i": {
			x: 210,
			y: 416,
			width: 35,
			height: 45
		},
		"o-up_-i-in": {
			x: 210,
			y: 506,
			width: 35,
			height: 45
		},
		"o-up_-i-lit": {
			x: 210,
			y: 461,
			width: 35,
			height: 45
		},
		"o-up_-i-out": {
			x: 210,
			y: 326,
			width: 35,
			height: 45
		},
		"o-up_-i-out-lit": {
			x: 210,
			y: 371,
			width: 35,
			height: 45
		},
		"o-up_-s": {
			x: 272,
			y: 48,
			width: 34,
			height: 45
		},
		"o-up_-s-lit-b": {
			x: 272,
			y: 138,
			width: 34,
			height: 45
		},
		"o-up_-s-lit-g": {
			x: 272,
			y: 228,
			width: 34,
			height: 45
		},
		"o-up_-s-lit-r": {
			x: 272,
			y: 183,
			width: 34,
			height: 45
		},
		"o-up_-s-lit-y": {
			x: 272,
			y: 93,
			width: 34,
			height: 45
		},
		"o-x-s": {
			x: 68,
			y: 48,
			width: 34,
			height: 45
		},
		"o-x-s-lit-b": {
			x: 68,
			y: 138,
			width: 34,
			height: 45
		},
		"o-x-s-lit-g": {
			x: 68,
			y: 228,
			width: 34,
			height: 45
		},
		"o-x-s-lit-r": {
			x: 68,
			y: 183,
			width: 34,
			height: 45
		},
		"o-x-s-lit-y": {
			x: 68,
			y: 93,
			width: 34,
			height: 45
		},
		o10: {
			x: 16,
			y: 585,
			width: 26,
			height: 25
		},
		o11: {
			x: 42,
			y: 585,
			width: 26,
			height: 25
		},
		o12: {
			x: 68,
			y: 585,
			width: 26,
			height: 25
		},
		o13: {
			x: 94,
			y: 585,
			width: 26,
			height: 25
		},
		o14: {
			x: 120,
			y: 585,
			width: 26,
			height: 25
		},
		o15: {
			x: 146,
			y: 585,
			width: 26,
			height: 25
		},
		o16: {
			x: 172,
			y: 585,
			width: 26,
			height: 25
		},
		o17: {
			x: 198,
			y: 585,
			width: 26,
			height: 25
		},
		o20: {
			x: 577,
			y: 610,
			width: 26,
			height: 25
		},
		o21: {
			x: 603,
			y: 610,
			width: 26,
			height: 25
		},
		o22: {
			x: 629,
			y: 610,
			width: 26,
			height: 25
		},
		o23: {
			x: 655,
			y: 610,
			width: 26,
			height: 25
		},
		o24: {
			x: 681,
			y: 610,
			width: 26,
			height: 25
		},
		o25: {
			x: 707,
			y: 610,
			width: 26,
			height: 25
		},
		o26: {
			x: 733,
			y: 610,
			width: 26,
			height: 25
		},
		o27: {
			x: 759,
			y: 610,
			width: 26,
			height: 25
		},
		"play-flat": {
			x: 424,
			y: 276,
			width: 45,
			height: 46
		},
		"play-in": {
			x: 469,
			y: 276,
			width: 45,
			height: 46
		},
		"play-out": {
			x: 334,
			y: 276,
			width: 45,
			height: 46
		},
		"play-out-lit": {
			x: 379,
			y: 276,
			width: 45,
			height: 46
		},
		"slot-left": {
			x: 350,
			y: 610,
			width: 13,
			height: 55
		},
		"slot-right": {
			x: 0,
			y: 554,
			width: 13,
			height: 55
		},
		"tape-shadow-l": {
			x: 350,
			y: 554,
			width: 47,
			height: 41
		},
		"tape-shadow-r": {
			x: 511,
			y: 0,
			width: 47,
			height: 41
		},
		tape0: {
			x: 721,
			y: 0,
			width: 40,
			height: 46
		},
		tape0a: {
			x: 561,
			y: 0,
			width: 40,
			height: 46
		},
		tape0b: {
			x: 601,
			y: 0,
			width: 40,
			height: 46
		},
		tape0c: {
			x: 641,
			y: 0,
			width: 40,
			height: 46
		},
		tape0d: {
			x: 681,
			y: 0,
			width: 40,
			height: 46
		},
		tape1: {
			x: 291,
			y: 276,
			width: 40,
			height: 46
		},
		tape1a: {
			x: 131,
			y: 276,
			width: 40,
			height: 46
		},
		tape1b: {
			x: 171,
			y: 276,
			width: 40,
			height: 46
		},
		tape1c: {
			x: 211,
			y: 276,
			width: 40,
			height: 46
		},
		tape1d: {
			x: 251,
			y: 276,
			width: 40,
			height: 46
		},
		tape_: {
			x: 243,
			y: 554,
			width: 40,
			height: 45
		},
		"target-blank": {
			x: 0,
			y: 276,
			width: 128,
			height: 47
		},
		track: {
			x: 400,
			y: 554,
			width: 369,
			height: 53
		},
		"track-l2": {
			x: 0,
			y: 0,
			width: 90,
			height: 27
		},
		"track-l3": {
			x: 109,
			y: 554,
			width: 131,
			height: 27
		},
		"track-l4": {
			x: 366,
			y: 610,
			width: 173,
			height: 27
		},
		"track-short": {
			x: 0,
			y: 30,
			width: 94,
			height: 8
		},
		"track-u2": {
			x: 16,
			y: 554,
			width: 90,
			height: 28
		},
		"track-u3": {
			x: 517,
			y: 276,
			width: 131,
			height: 28
		},
		"track-u4": {
			x: 577,
			y: 638,
			width: 173,
			height: 28
		},
		"track-vert": {
			x: 286,
			y: 616,
			width: 7,
			height: 49
		}
	};
	var ga = {
		"light-00011-0": {
			x: 2454,
			y: 0,
			width: 129,
			height: 47
		},
		"light-00011-1": {
			x: 2583,
			y: 0,
			width: 129,
			height: 47
		},
		"light-00011-10": {
			x: 3744,
			y: 0,
			width: 129,
			height: 47
		},
		"light-00011-11": {
			x: 3873,
			y: 0,
			width: 129,
			height: 47
		},
		"light-00011-12": {
			x: 4002,
			y: 0,
			width: 129,
			height: 47
		},
		"light-00011-2": {
			x: 2712,
			y: 0,
			width: 129,
			height: 47
		},
		"light-00011-3": {
			x: 2841,
			y: 0,
			width: 129,
			height: 47
		},
		"light-00011-4": {
			x: 2970,
			y: 0,
			width: 129,
			height: 47
		},
		"light-00011-5": {
			x: 3099,
			y: 0,
			width: 129,
			height: 47
		},
		"light-00011-6": {
			x: 3228,
			y: 0,
			width: 129,
			height: 47
		},
		"light-00011-7": {
			x: 3357,
			y: 0,
			width: 129,
			height: 47
		},
		"light-00011-8": {
			x: 3486,
			y: 0,
			width: 129,
			height: 47
		},
		"light-00011-9": {
			x: 3615,
			y: 0,
			width: 129,
			height: 47
		},
		"light-01001-0": {
			x: 2454,
			y: 47,
			width: 129,
			height: 47
		},
		"light-01001-1": {
			x: 2583,
			y: 47,
			width: 129,
			height: 47
		},
		"light-01001-10": {
			x: 3744,
			y: 47,
			width: 129,
			height: 47
		},
		"light-01001-11": {
			x: 3873,
			y: 47,
			width: 129,
			height: 47
		},
		"light-01001-12": {
			x: 4002,
			y: 47,
			width: 129,
			height: 47
		},
		"light-01001-2": {
			x: 2712,
			y: 47,
			width: 129,
			height: 47
		},
		"light-01001-3": {
			x: 2841,
			y: 47,
			width: 129,
			height: 47
		},
		"light-01001-4": {
			x: 2970,
			y: 47,
			width: 129,
			height: 47
		},
		"light-01001-5": {
			x: 3099,
			y: 47,
			width: 129,
			height: 47
		},
		"light-01001-6": {
			x: 3228,
			y: 47,
			width: 129,
			height: 47
		},
		"light-01001-7": {
			x: 3357,
			y: 47,
			width: 129,
			height: 47
		},
		"light-01001-8": {
			x: 3486,
			y: 47,
			width: 129,
			height: 47
		},
		"light-01001-9": {
			x: 3615,
			y: 47,
			width: 129,
			height: 47
		},
		"light-01011-0": {
			x: 2454,
			y: 94,
			width: 129,
			height: 47
		},
		"light-01011-1": {
			x: 2583,
			y: 94,
			width: 129,
			height: 47
		},
		"light-01011-10": {
			x: 3744,
			y: 94,
			width: 129,
			height: 47
		},
		"light-01011-11": {
			x: 3873,
			y: 94,
			width: 129,
			height: 47
		},
		"light-01011-12": {
			x: 4002,
			y: 94,
			width: 129,
			height: 47
		},
		"light-01011-2": {
			x: 2712,
			y: 94,
			width: 129,
			height: 47
		},
		"light-01011-3": {
			x: 2841,
			y: 94,
			width: 129,
			height: 47
		},
		"light-01011-4": {
			x: 2970,
			y: 94,
			width: 129,
			height: 47
		},
		"light-01011-5": {
			x: 3099,
			y: 94,
			width: 129,
			height: 47
		},
		"light-01011-6": {
			x: 3228,
			y: 94,
			width: 129,
			height: 47
		},
		"light-01011-7": {
			x: 3357,
			y: 94,
			width: 129,
			height: 47
		},
		"light-01011-8": {
			x: 3486,
			y: 94,
			width: 129,
			height: 47
		},
		"light-01011-9": {
			x: 3615,
			y: 94,
			width: 129,
			height: 47
		},
		"light-10000-0": {
			x: 2454,
			y: 141,
			width: 129,
			height: 47
		},
		"light-10000-1": {
			x: 2583,
			y: 141,
			width: 129,
			height: 47
		},
		"light-10000-10": {
			x: 3744,
			y: 141,
			width: 129,
			height: 47
		},
		"light-10000-11": {
			x: 3873,
			y: 141,
			width: 129,
			height: 47
		},
		"light-10000-12": {
			x: 4002,
			y: 141,
			width: 129,
			height: 47
		},
		"light-10000-2": {
			x: 2712,
			y: 141,
			width: 129,
			height: 47
		},
		"light-10000-3": {
			x: 2841,
			y: 141,
			width: 129,
			height: 47
		},
		"light-10000-4": {
			x: 2970,
			y: 141,
			width: 129,
			height: 47
		},
		"light-10000-5": {
			x: 3099,
			y: 141,
			width: 129,
			height: 47
		},
		"light-10000-6": {
			x: 3228,
			y: 141,
			width: 129,
			height: 47
		},
		"light-10000-7": {
			x: 3357,
			y: 141,
			width: 129,
			height: 47
		},
		"light-10000-8": {
			x: 3486,
			y: 141,
			width: 129,
			height: 47
		},
		"light-10000-9": {
			x: 3615,
			y: 141,
			width: 129,
			height: 47
		},
		"scroll-00011-0": {
			x: 0,
			y: 47,
			width: 129,
			height: 47
		},
		"scroll-00011-1": {
			x: 129,
			y: 47,
			width: 129,
			height: 47
		},
		"scroll-00011-10": {
			x: 1290,
			y: 47,
			width: 129,
			height: 47
		},
		"scroll-00011-11": {
			x: 1419,
			y: 47,
			width: 129,
			height: 47
		},
		"scroll-00011-12": {
			x: 1548,
			y: 47,
			width: 129,
			height: 47
		},
		"scroll-00011-13": {
			x: 1677,
			y: 47,
			width: 129,
			height: 47
		},
		"scroll-00011-14": {
			x: 1806,
			y: 47,
			width: 129,
			height: 47
		},
		"scroll-00011-15": {
			x: 1935,
			y: 47,
			width: 129,
			height: 47
		},
		"scroll-00011-16": {
			x: 2064,
			y: 47,
			width: 129,
			height: 47
		},
		"scroll-00011-17": {
			x: 2193,
			y: 47,
			width: 129,
			height: 47
		},
		"scroll-00011-18": {
			x: 2322,
			y: 47,
			width: 129,
			height: 47
		},
		"scroll-00011-2": {
			x: 258,
			y: 47,
			width: 129,
			height: 47
		},
		"scroll-00011-3": {
			x: 387,
			y: 47,
			width: 129,
			height: 47
		},
		"scroll-00011-4": {
			x: 516,
			y: 47,
			width: 129,
			height: 47
		},
		"scroll-00011-5": {
			x: 645,
			y: 47,
			width: 129,
			height: 47
		},
		"scroll-00011-6": {
			x: 774,
			y: 47,
			width: 129,
			height: 47
		},
		"scroll-00011-7": {
			x: 903,
			y: 47,
			width: 129,
			height: 47
		},
		"scroll-00011-8": {
			x: 1032,
			y: 47,
			width: 129,
			height: 47
		},
		"scroll-00011-9": {
			x: 1161,
			y: 47,
			width: 129,
			height: 47
		},
		"scroll-01001-0": {
			x: 0,
			y: 94,
			width: 129,
			height: 47
		},
		"scroll-01001-1": {
			x: 129,
			y: 94,
			width: 129,
			height: 47
		},
		"scroll-01001-10": {
			x: 1290,
			y: 94,
			width: 129,
			height: 47
		},
		"scroll-01001-11": {
			x: 1419,
			y: 94,
			width: 129,
			height: 47
		},
		"scroll-01001-12": {
			x: 1548,
			y: 94,
			width: 129,
			height: 47
		},
		"scroll-01001-13": {
			x: 1677,
			y: 94,
			width: 129,
			height: 47
		},
		"scroll-01001-14": {
			x: 1806,
			y: 94,
			width: 129,
			height: 47
		},
		"scroll-01001-15": {
			x: 1935,
			y: 94,
			width: 129,
			height: 47
		},
		"scroll-01001-16": {
			x: 2064,
			y: 94,
			width: 129,
			height: 47
		},
		"scroll-01001-17": {
			x: 2193,
			y: 94,
			width: 129,
			height: 47
		},
		"scroll-01001-18": {
			x: 2322,
			y: 94,
			width: 129,
			height: 47
		},
		"scroll-01001-2": {
			x: 258,
			y: 94,
			width: 129,
			height: 47
		},
		"scroll-01001-3": {
			x: 387,
			y: 94,
			width: 129,
			height: 47
		},
		"scroll-01001-4": {
			x: 516,
			y: 94,
			width: 129,
			height: 47
		},
		"scroll-01001-5": {
			x: 645,
			y: 94,
			width: 129,
			height: 47
		},
		"scroll-01001-6": {
			x: 774,
			y: 94,
			width: 129,
			height: 47
		},
		"scroll-01001-7": {
			x: 903,
			y: 94,
			width: 129,
			height: 47
		},
		"scroll-01001-8": {
			x: 1032,
			y: 94,
			width: 129,
			height: 47
		},
		"scroll-01001-9": {
			x: 1161,
			y: 94,
			width: 129,
			height: 47
		},
		"scroll-01011-0": {
			x: 0,
			y: 0,
			width: 129,
			height: 47
		},
		"scroll-01011-1": {
			x: 129,
			y: 0,
			width: 129,
			height: 47
		},
		"scroll-01011-10": {
			x: 1290,
			y: 0,
			width: 129,
			height: 47
		},
		"scroll-01011-11": {
			x: 1419,
			y: 0,
			width: 129,
			height: 47
		},
		"scroll-01011-12": {
			x: 1548,
			y: 0,
			width: 129,
			height: 47
		},
		"scroll-01011-13": {
			x: 1677,
			y: 0,
			width: 129,
			height: 47
		},
		"scroll-01011-14": {
			x: 1806,
			y: 0,
			width: 129,
			height: 47
		},
		"scroll-01011-15": {
			x: 1935,
			y: 0,
			width: 129,
			height: 47
		},
		"scroll-01011-16": {
			x: 2064,
			y: 0,
			width: 129,
			height: 47
		},
		"scroll-01011-17": {
			x: 2193,
			y: 0,
			width: 129,
			height: 47
		},
		"scroll-01011-18": {
			x: 2322,
			y: 0,
			width: 129,
			height: 47
		},
		"scroll-01011-2": {
			x: 258,
			y: 0,
			width: 129,
			height: 47
		},
		"scroll-01011-3": {
			x: 387,
			y: 0,
			width: 129,
			height: 47
		},
		"scroll-01011-4": {
			x: 516,
			y: 0,
			width: 129,
			height: 47
		},
		"scroll-01011-5": {
			x: 645,
			y: 0,
			width: 129,
			height: 47
		},
		"scroll-01011-6": {
			x: 774,
			y: 0,
			width: 129,
			height: 47
		},
		"scroll-01011-7": {
			x: 903,
			y: 0,
			width: 129,
			height: 47
		},
		"scroll-01011-8": {
			x: 1032,
			y: 0,
			width: 129,
			height: 47
		},
		"scroll-01011-9": {
			x: 1161,
			y: 0,
			width: 129,
			height: 47
		},
		"scroll-10000-0": {
			x: 0,
			y: 141,
			width: 129,
			height: 47
		},
		"scroll-10000-1": {
			x: 129,
			y: 141,
			width: 129,
			height: 47
		},
		"scroll-10000-10": {
			x: 1290,
			y: 141,
			width: 129,
			height: 47
		},
		"scroll-10000-11": {
			x: 1419,
			y: 141,
			width: 129,
			height: 47
		},
		"scroll-10000-12": {
			x: 1548,
			y: 141,
			width: 129,
			height: 47
		},
		"scroll-10000-13": {
			x: 1677,
			y: 141,
			width: 129,
			height: 47
		},
		"scroll-10000-14": {
			x: 1806,
			y: 141,
			width: 129,
			height: 47
		},
		"scroll-10000-15": {
			x: 1935,
			y: 141,
			width: 129,
			height: 47
		},
		"scroll-10000-16": {
			x: 2064,
			y: 141,
			width: 129,
			height: 47
		},
		"scroll-10000-17": {
			x: 2193,
			y: 141,
			width: 129,
			height: 47
		},
		"scroll-10000-18": {
			x: 2322,
			y: 141,
			width: 129,
			height: 47
		},
		"scroll-10000-2": {
			x: 258,
			y: 141,
			width: 129,
			height: 47
		},
		"scroll-10000-3": {
			x: 387,
			y: 141,
			width: 129,
			height: 47
		},
		"scroll-10000-4": {
			x: 516,
			y: 141,
			width: 129,
			height: 47
		},
		"scroll-10000-5": {
			x: 645,
			y: 141,
			width: 129,
			height: 47
		},
		"scroll-10000-6": {
			x: 774,
			y: 141,
			width: 129,
			height: 47
		},
		"scroll-10000-7": {
			x: 903,
			y: 141,
			width: 129,
			height: 47
		},
		"scroll-10000-8": {
			x: 1032,
			y: 141,
			width: 129,
			height: 47
		},
		"scroll-10000-9": {
			x: 1161,
			y: 141,
			width: 129,
			height: 47
		}
	};
	var s = function (a) {
			a = fa[a] || ga[a] || {width:35,height:45};
			return {
				width: a.width,
				height: a.height
			}
		},
		t = function (a) {
			var b = fa[a] || ga[a] || {width:35,height:45};
			return !b ? "red" : "url(" + (!fa[a] && ga[a] ? "turing12-hp-deferredsprite.png" : "turing12-hp-sprite.png") + ") " + -b.x + "px " + -b.y + "px no-repeat"
		},
		v = function (a) {
			var b = u(),
				c = fa[a];
			b.style.width = c ? c.width + "px" : "50px";
			b.style.height = c ? c.height + "px" : "50px";
			b.style.background = t(a);
			b.style.webkitTapHighlightColor = "rgba(0,0,0,0)";
			return b
		},
		u = function () {
			var a = document.createElement("div");
			a.style.position = "absolute";
			a.style.zb = "none";
			a.style.webkitUserSelect = "none";
			a.style.webkitTapHighlightColor = "rgba(0,0,0,0)";
			a.style.MozUserSelect = "none";
			a.unselectable = "on";
			return a
		},
		ha = function (a) {
			var b = document.createElement("img");
			b.src = a;
			return b
		};
	var w = e,
		x = [],
		ia = i,
		y = 0,
		ja = 1,
		z = 0,
		A = 0,
		ka = 1E3 / 60,
		B = ka,
		la;
	a: {
		var ma = (document.body || document.documentElement).style;
		if ("undefined" != typeof ma) {
			if ("string" == typeof ma.transition) {
				la = "transition";
				break a
			}
			for (var oa = 0, pa; pa = ea[oa++];) if ("string" == typeof ma[pa + "Transition"]) {
				la = pa + "Transition";
				break a
			}
		}
		la = void 0
	}
	var qa = {
		top: "px",
		left: "px"
	};
	window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
	function (a) {
		window.setTimeout(a, B)
	};
	var C = function (a, b) {
			return ra(a, Math.ceil(b / B))
		},
		ra = function (a, b) {
			var c = ja++;
			x.push({
				Ca: y + b,
				call: a,
				cb: c
			});
			ia = e;
			return c
		},
		sa = function (a) {
			for (var b = 0; b < x.length; b++) if (x[b].cb == a) {
				x.splice(b, 1);
				break
			}
		},
		D = function (a, b, c, d) {
			var f = {},
				h = {},
				l;
			for (l in b) f[l] = parseFloat(a.style[l] || 0), h[l] = parseFloat(b[l]);
			for (var c = Math.ceil(c / B), na = 0; na <= c; na++) {
				var yb = Math.min(1, na / c);
				for (l in b) ra(j(function (b) {
					a.style[l] = (1 - b) * f[l] + b * h[l] + (qa[l] || "")
				}, window, yb), na)
			}
			d && ra(d, c)
		},
		E = function (a, b) {
			la && (a.style[la] = b)
		},
		F = function (a, b, c, d) {
			for (var f = [], h = 0; h < b.length; h++) f[h] = t(b[h]);
			ta(a, f, c, d)
		},
		ta = function (a, b, c, d) {
			for (var c = Math.ceil(c / B), f = 0; f <= c; f++) {
				var h = Math.min(1, f / c);
				ra(j(function (c) {
					a.style.background = b[Math.min(b.length - 1, Math.floor(c * b.length))]
				}, window, h), f)
			}
			d && ra(d, c)
		},
		ua = function () {
			window.requestAnimationFrame(function b() {
				if (!w) {
					var c = (new Date).getTime();
					30 < y && z && (c - z >= 1.05 * B ? A++ : A >>= 1, 20 < A && (B = Math.min(50, 1.2 * B), A = 0));
					z = c;
					ia && (x.sort(function (b, c) {
						return b.Ca == c.Ca ? b.cb - c.cb : b.Ca - c.Ca
					}), ia = i);
					for (var d = c = 0, f; f = x[d]; d++) if (f.Ca <= y) f.call(), c++;
					else break;
					x.splice(0, c);
					y++;
					window.requestAnimationFrame(b)
				}
			})
		},
		va = function () {
			w = e;
			z = A = 0;
			x = [];
			y = 0;
			ia = i;
			ja = 1;
			B = ka;
			z = A = 0
		};
	var wa = function (a, b) {
			for (var c = [], d = 0; 9 >= d; d++) c.push(t("scroll-" + a + "-" + (b ? d : 9 + d)));
			return c
		};
	var G = function () {
			this.ma = g;
			this.ia = i;
			this.La = this.Ja = this.Ka = this.Ia = g
		};
	G.prototype.create = function (a, b) {
		this.ma = g;
		this.ia = i;
		this.k = u();
		var c = this.k.style;
		c.background = "#fff";
		c.top = "0";
		c.fontSize = "small";
		c.height = "20px";
		c.textAlign = "right";
		c.visibility = "hidden";
		c.width = "447px";
		c.zIndex = 501;
		E(this.k, "2s");
		r(this.k, 0);
		c = document.createElement("a");
		c.setAttribute("tabIndex", -1);
		c.hideFocus = e;
		c.href = b;
		c.style.outline = "none";
		c.style.textDecoration = "underline";
		c.style.color = "#6b433b";
		c.innerHTML = a;
		this.k.appendChild(c)
	};
	G.prototype.w = function (a) {
		this.Y = a;
		this.Ia = j(this.mb, this);
		p(this.Y, "click", this.Ia);
		this.Ka = j(this.ob, this);
		p(this.Y, "mouseover", this.Ka);
		this.Ja = j(this.nb, this);
		p(this.Y, "mouseout", this.Ja);
		this.La = j(this.pb, this);
		p(this.k, "mouseover", this.La);
		this.Y.appendChild(this.k)
	};
	G.prototype.destroy = function () {
		xa(this);
		this.ia = i;
		n(this.k);
		this.Y = g
	};
	var xa = function (a) {
			ya(a);
			q(a.Y, "click", a.Ia);
			a.Ia = g;
			q(a.Y, "mouseover", a.Ka);
			a.Ka = g;
			q(a.Y, "mouseout", a.Ja);
			a.Ja = g;
			q(a.k, "mouseover", a.La);
			a.La = g
		},
		ya = function (a) {
			a.ma != g && window.clearTimeout(a.ma);
			a.ma = g
		},
		za = function (a, b) {
			a.ia == b || w || ((a.ia = b) ? (a.k.style.visibility = "visible", E(a.k, "1s"), r(a.k, 0.99)) : (E(a.k, "2s"), r(a.k, 0)))
		};
	G.prototype.mb = function () {
		this.ia ? (E(this.k, "4s"), r(this.k, 0.25)) : ya(this)
	};
	G.prototype.pb = function () {
		za(this, e);
		E(this.k, "1s");
		r(this.k, 0.99)
	};
	G.prototype.ob = function () {
		ya(this);
		this.ma = window.setTimeout(j(function () {
			za(this, e)
		}, this), 1E3)
	};
	G.prototype.nb = function () {
		ya(this);
		this.ma = window.setTimeout(j(function () {
			za(this, i)
		}, this), 500)
	};
	var Aa = function () {
			this.Pa = ""
		};
	Aa.prototype.create = function () {
		this.T = v("target-blank");
		this.T.style.top = "21px";
		this.T.style.zIndex = 400;
		this.T.style.left = "280px";
		this.Oa = v("track");
		var a = this.Oa.style;
		a.top = "40px";
		a.left = "383px";
		a.height = "9px";
		a.width = "40px";
		a.zIndex = 398;
		this.I = v("eq-dim");
		this.I.style.top = "25px";
		this.I.style.left = "411px";
		this.I.style.zIndex = 399;
		this.$a = j(this.vb, this);
		p(this.I, "click", this.$a)
	};
	Aa.prototype.destroy = function () {
		n(this.T);
		this.T = g;
		n(this.Oa);
		this.Oa = g;
		q(this.I, "click", this.$a);
		this.$a = g;
		n(this.I);
		this.I = g;
		this.Pa = ""
	};
	Aa.prototype.w = function (a) {
		a.appendChild(this.T);
		a.appendChild(this.Oa);
		a.appendChild(this.I)
	};
	var Ba = function (a) {
			var b = H;
			if (!a && !b.Pa) b.T.style.background = t("scroll-01011-18");
			else {
				var c;
				c = a ? wa(a, e) : wa(b.Pa, i);
				ta(b.T, c, 800);
				b.Pa = a
			}
		},
		I = function (a, b, c) {
			if (!c || 400 > c) a.I.style.background = t("eq-" + b);
			else {
				for (var d = [], f = c; 400 < f;) d.push("eq-dim"), d.push("eq-" + b), f -= 400;
				F(a.I, d, c, j(function () {
					this.I.style.background = t("eq-dim")
				}, a))
			}
		},
		Ca = function (a, b, c) {
			var d = H;
			if (!(b > a.length)) {
				var f = t("light-" + a + "-" + (2 * b + 1)),
					b = t("light-" + a + "-" + (2 * b + 2)),
					a = t("light-" + a + "-0");
				ta(d.T, [a, f, b, b, b, b, f, a], c)
			}
		};
	Aa.prototype.vb = function () {
		this.eb && this.eb()
	};
	var J = function () {
			this.la = i;
			this.ga = this.ka = this.Ma = this.ja = g
		};
	J.prototype.create = function () {
		this.d = v("play-flat");
		this.d.style.left = "55px";
		this.d.style.top = "127px";
		this.d.style.zIndex = 499;
		this.d.style.cursor = "pointer";
		//var t=this;
		//this.ja = function () { console.log('down', t.qb, t); return j(t.qb, t);};
		this.ja = j(this.qb, this);
		p(this.d, "mousedown", this.ja);
		p(this.d, "touchstart", this.ja);
		this.Ma = j(this.tb, this);
		p(this.d, "mouseup", this.Ma);
		this.ka = j(this.rb, this);
		p(this.d, "mouseout", this.ka);
		p(this.d, "touchmove", this.ka)
	};
	J.prototype.destroy = function () {
		q(this.d, "mousedown", this.ja);
		q(this.d, "touchstart", this.ja);
		q(this.d, "mouseup", this.Ma);
		q(this.d, "mouseout", this.ka);
		q(this.d, "touchmove", this.ka);
		this.ka = this.Ma = this.ja = g;
		n(this.d);
		this.d = g
	};
	J.prototype.w = function (a) {
		a.appendChild(this.d)
	};
	var Da = function (a, b) {
			a.ga = b;
			a.d.style.background = t("play-out");
			a.d.style.cursor = "pointer"
		};
	J.prototype.qb = function () {
		console.log('down');
		this.ga && !this.la && (F(this.d, ["play-out", "play-flat"], 20), this.la = e)
	};
	J.prototype.tb = function () {
		this.la && this.ga && this.ga.call();
		this.la = i
	};
	J.prototype.rb = function () {
		this.la && (this.la = i, Da(this, this.ga))
	};
	var Ea = "G o1 o2 g l e".split(" "),
		Fa = "1px 11px 11px 11px 0 11px".split(" "),
		Ga = "0 33px 57px 79px 100px 111px".split(" "),
		K = function () {
			this.Q = []
		};
	K.prototype.w = function (a) {
		a.appendChild(this.v)
	};
	K.prototype.create = function (a) {
		this.v = u();
		this.v.style.left = "79px";
		this.v.style.top = "24px";
		for (var b = 0, c; c = Ea[b]; b++) this.Q[b] = v(b < a ? c + 7 : c + "0"), this.Q[b].style.left = Ga[b], this.Q[b].style.top = Fa[b], this.v.appendChild(this.Q[b])
	};
	K.prototype.destroy = function () {
		n(this.v);
		this.v = g;
		for (var a = 0, b; b = this.Q[a++];) n(b);
		this.Q.splice(0)
	};
	var Ha = function (a, b) {
			for (var c = [], d = 0; 8 > d; d++) c[d] = t(a + (b ? d : 7 - d));
			return c
		};
	K.prototype.jb = function (a, b) {
		var c = this.Q[a];
		if (c) {
			var d = Ea[a];
			b ? ta(c, Ha(d, i), b) : c.style.background = t(d + "0")
		}
	};
	var Ia = function (a, b) {
			for (var c = 0; c < a.Q.length; c++) C(j(a.jb, a, c, b), 250)
		};
	K.prototype.wb = function (a) {
		for (var b = Ea.length, c = 0; c < b; c++) C(j(this.jb, this, b - (c + 1), 500), 250 * c);
		C(j(function () {
			Ia(this);
			a()
		}, this), 250 * (1 + Ea.length) + 500)
	};
	var Ja = function () {};
	Ja.prototype.create = function (a) {
			console.log(333, a)

		this.V = u();
		this.V.style.width = a.offsetWidth + "px";
		this.V.style.height = (a.offsetHeight || 229) + "px";
		this.V.style.cursor = "pointer";
		this.V.style.zIndex = 500;
		this.bb = j(this.xb, this);
		p(this.V, "click", this.bb)
	};
	Ja.prototype.destroy = function () {
		q(this.V, "click", this.bb);
		n(this.V);
		this.V = this.bb = g
	};
	Ja.prototype.w = function (a, b) {
		a.appendChild(this.V);
		this.yb = b
	};
	Ja.prototype.xb = function () {
		this.destroy();
		this.yb()
	};
	var Ka = [150, 194],
		La = [100, 140, 180],
		L = 8,
		M = 2,
		N = i,
		Ma = "y",
		Na = function (a) {
			Ma = /^[bryg]$/.test(a) ? a : "y"
		},
		Oa = {
			L: "o-left",
			R: "o-right",
			"0": "o-print0",
			1: "o-print1",
			D0: "o-down0",
			D1: "o-down1",
			D_: "o-down_",
			B2: "o-back2",
			B3: "o-back3",
			B4: "o-back4",
			RB2: "o-rback2",
			RB3: "o-rback3",
			RB4: "o-rback4",
			U0: "o-up0",
			U1: "o-up1",
			U_: "o-up_",
			"": "o-blank",
			_: "o-x",
			U: "o-blank-up",
			D: "o-blank-down",
			B8: "o-back8",
			B9: "o-back9"
		},
		O = function (a, b) {
			this.Ua = a;
			this.Wa = b;
			this.a = [];
			this.o = [];
			this.da = g;
			this.va = [];
			this.ya = [];
			this.xa = [];
			this.wa = [];
			this.ba = [];
			this.pa = e;
			this.$ = i
		};
	O.prototype.create = function () {
		var a = s("o-blank-i"),
			b = s("track");
		N && (b.width = 500);
		this.v = u();
		this.v.style.width = b.width + "px";
		this.v.style.height = a.height + "px";
		this.v.style.zIndex = 400;
		for (b = 0; b < L; b++) Pa(this, b);
		N || (this.F = v("track-l4"), this.F.style.display = "none", this.F.style.top = this.Ua + "px");
		this.v.style.zIndex = 399;
		this.v.style.top = this.Ua - a.height / 2 + "px";
		this.v.style.left = N ? "0" : "74px"
	};
	var Pa = function (a, b) {
			a.o[b] = v("o-dim-s");
			var c = Qa("o-blank-s", b);
			a.o[b].style.left = c.left + "px";
			a.o[b].style.top = c.top + "px";
			N || (a.va[b] = j(a.lb, a, b), a.ya[b] = j(function () {
				this.ba[b] = e;
				this.Ya(b, e)
			}, a), a.xa[b] = j(a.Ya, a, b, e), a.wa[b] = j(a.Ya, a, b, i), p(a.o[b], "mousedown", a.va[b]), p(a.o[b], "touchstart", a.ya[b]), p(a.o[b], "mouseup", a.xa[b]), p(a.o[b], "mouseout", a.wa[b]));
			a.ba[b] = i;
			a.v.appendChild(a.o[b])
		},
		Qa = function (a, b) {
			var c = s("o-blank-i"),
				d = s("track");
			N && (d.width = 500);
			var f = N ? 13 : 31,
				d = (d.width - 9 - f) / L,
				h = s(a);
			return {
				left: f + Math.floor(b * d + d / 2 - h.width / 2) - Math.ceil((c.width - h.width) / 2),
				top: Math.ceil((c.height - h.height) / 2)
			}
		};
	O.prototype.ua = function (a) {
		this.$ = a;
		Ra(this)
	};
	var Sa = ["D0", "D1", "D_"],
		Ta = ["U0", "U1", "U_"],
		Ua = ["B2", "B3", "B4"],
		Va = ["0", "1"],
		Wa = ["L", "R"];
	O.prototype.lb = function (a) {
		var b = this.a[a];
		if (this.$ && b && !("*" != b.charAt(0) || this.ba[a])) this.ba[a] = e, b = Xa(O.prototype, b), F(this.o[a], [b + "-i-out", b + "-i", b + "-i-in"], 20)
	};
	O.prototype.Ya = function (a, b) {
		var c = this.a[a];
		if (this.$ && c && "*" == c.charAt(0) && this.ba[a]) {
			if (b && this.$ && (c = this.a[a]) && "*" == c.charAt(0)) c = c.substr(1), this.a[a] = "*" + (o(Ta, c) || o(Sa, c) || o(Ua, c) || o(Va, c) || o(Wa, c) || c);
			c = this.a[a];
			c = Xa(O.prototype, c);
			F(this.o[a], [c + "-i-in", c + "-i", c + "-i-out"], 20, j(function (a) {
				this.ba[a] = i;
				Ya(this, a, i)
			}, this, a))
		}
	};
	var Xa = function (a, b) {
			b && "*" == b.charAt(0) && (b = b.substr(1));
			if (a.Wa && ("B2" == b || "B3" == b || "B4" == b)) b = "R" + b;
			return Oa[b || ""]
		},
		Za = function (a, b) {
			a.a = b.slice(0);
			a.da = g;
			for (var c = 0; c < a.a.length; c++) if (a.a[c] && a.a[c].match(/B/)) {
				a.da = c;
				break
			}
		};
	O.prototype.aa = function (a) {
		Za(this, a);
		Ra(this)
	};
	var Ra = function (a) {
			!N && a.da == g && (a.F.style.display = "none");
			for (var b = 0; b < L; b++) Ya(a, b, i)
		},
		Ya = function (a, b, c) {
			if (!a.pa) {
				var d = a.o[b],
					f = a.a[b] || "",
					h = "";
				f && "*" == f.charAt(0) ? a.$ ? (h = a.ba[b] ? "-i-in" : "-i-out", d.style.cursor = "pointer") : (h = c ? "-i-lit" : "-i", d.style.cursor = "default") : (h = c ? "-s-lit-" + Ma : "-s", d.style.cursor = "default");
				c = Xa(a, f);
				f = s(c + h);
				d.style.background = t(c + h);
				var l = Qa(c + h, b);
				d.style.left = l.left + "px";
				d.style.top = l.top + "px";
				d.style.width = f.width + "px";
				d.style.height = f.height + "px";
				b == a.da && (d = c + h, a.da == g || N || (h = a.a[a.da].match(/(\d)$/), b = s(d), d = Qa(d, a.da), h = "track-" + (a.Wa ? "l" : "u") + h[1], c = s(h), a.F.style.background = t(h), a.F.style.left = Math.floor(74 + d.left - c.width + b.width / 2 + 4) + "px", a.F.style.top = Math.floor(a.Ua + (a.Wa ? -3 : -c.height + 2)) + "px", a.F.style.width = c.width + "px", a.F.style.height = c.height + "px", a.F.style.display = "block"))
			}
		};
	O.prototype.Za = function () {
		$a(this, e)
	};
	var $a = function (a, b) {
			for (var c = 0; c < a.va.length; c++) q(a.o[c], "mousedown", a.va[c]);
			a.va.splice(0);
			if (!b) {
				for (c = 0; c < a.ya.length; c++) q(a.o[c], "touchstart", a.ya[c]);
				a.ya.splice(0)
			}
			for (c = 0; c < a.xa.length; c++) q(a.o[c], "mouseup", a.xa[c]);
			a.xa.splice(0);
			for (c = 0; c < a.wa.length; c++) q(a.o[c], "mouseout", a.wa[c]);
			a.wa.splice(0)
		};
	O.prototype.destroy = function () {
		$a(this);
		for (var a = 0; a < this.o.length; a++) n(this.o[a]);
		this.o.splice(0);
		n(this.v);
		this.v = g;
		n(this.F);
		this.F = g
	};
	O.prototype.w = function (a) {
		a.appendChild(this.v);
		this.F && a.appendChild(this.F)
	};
	var P = function () {
			this.s = [];
			for (var a = 0; a < M; a++) this.s[a] = new O(N ? La[a] : Ka[a], 1 == a);
			this.J = [];
			this.Qa = this.Ra = this.K = this.M = this.hb = 0;
			this.pa = this.oa = e;
			this.$ = i
		};
	P.prototype.create = function () {
		for (var a = 0; a < this.s.length; a++) this.s[a].create();
		if (!N) {
			var b = Ka[0];
			this.Na = v("track");
			this.Na.style.left = "74px";
			this.Na.style.top = b - 4 + "px";
			for (var c = s("track-vert"), d = (s("track").width - 31 - 9) / L, a = 0; a < L; a++) this.J[a] = v("track-vert"), this.J[a].style.left = Math.floor(105 + a * d + d / 2 - c.width / 2 - 1) + "px", this.J[a].style.top = b + "px", this.J[a].style.zIndex = 398, this.J[a].style.display = "none"
		}
	};
	P.prototype.destroy = function () {
		for (var a = 0; a < this.s.length; a++) this.s[a].destroy();
		n(this.Na);
		for (a = 0; a < this.J.length; a++) n(this.J[a]);
		this.J.splice(0)
	};
	P.prototype.w = function (a) {
		for (var b = 0; b < this.s.length; b++) this.s[b].w(a);
		if (!N) {
			a.appendChild(this.Na);
			for (b = 0; b < this.J.length; b++) a.appendChild(this.J[b])
		}
	};
	P.prototype.reset = function () {
		for (var a = 0; a < M; a++) Ra(this.s[a]);
		if (!N) for (a = 0; a < L; a++) {
			this.J[a].style.background = t("track-vert");
			for (var b = i, c = 0; c < M; c++) {
				var d = this.s[c].a[a];
				!this.pa && (d && d.match(/D|U/)) && (b = e)
			}
			this.J[a].style.display = b ? "block" : "none"
		}
	};
	P.prototype.aa = function (a, b) {
		this.Qa = this.Ra = this.K = this.M = 0;
		this.oa = i;
		this.pa = b || i;
		this.hb = a.length;
		for (var c = 0; c < M; c++) Za(this.s[c], a[c] || []), this.s[c].pa = b || i;
		this.reset()
	};
	P.prototype.ua = function (a) {
		this.$ = a;
		for (var b = 0; b < M; b++) this.s[b].ua(a)
	};
	var ab = function (a, b, c) {
			0 <= b && b < a.hb && 0 <= c && c < L ? (a.Ra = b, a.Qa = c, a.oa = i) : a.oa = e
		};
	P.prototype.Za = function () {
		for (var a = 0; a < M; a++) this.s[a].Za()
	};
	var bb = {
		"": "tape_",
		_: "tape_",
		" ": "tape_",
		"0": "tape0",
		1: "tape1"
	},
		cb = {
			"0": "tape_ tape0a tape0b tape0c tape0d tape0".split(" "),
			1: "tape_ tape1a tape1b tape1c tape1d tape1".split(" ")
		},
		db = {
			"0": cb["0"].slice(0).reverse(),
			1: cb["1"].slice(0).reverse()
		},
		Q = function () {
			this.B = {};
			this.gb = this.Ba = this.H = 0;
			this.O = [];
			this.ca = g;
			this.za = i
		};
	Q.prototype.w = function (a) {
		this.Aa();
		a.appendChild(this.X);
		a.appendChild(this.Fa);
		a.appendChild(this.Ga);
		a.appendChild(this.Da);
		a.appendChild(this.Ea)
	};
	Q.prototype.create = function () {
		var a = s("tape_"),
			b = 9 * a.width + 16;
		this.P = u();
		this.P.style.width = b + "px";
		this.P.style.height = a.height + "px";
		this.P.style.overflow = "hidden";
		this.P.style.left = "0";
		this.P.style.top = "0";
		this.P.style.zIndex = 400;
		var c = 13 * a.width;
		this.S = u();
		this.S.style.width = c + "px";
		this.S.style.left = -2 * a.width + 7 + "px";
		for (c = 0; 13 > c; c++) this.O[c] = v("tape_"), this.O[c].style.display = "inline-block", this.O[c].style.position = "", this.S.appendChild(this.O[c]);
		this.P.appendChild(this.S);
		var d = s("head"),
			c = d.height - a.height,
			d = d.width - a.width;
		this.ha = v("head");
		this.ha.style.top = -c / 2 - 2 + "px";
		this.ha.style.left = 7 + 4 * a.width - d / 2 + 1 + "px";
		this.ha.style.zIndex = 401;
		this.X = u();
		this.X.style.top = "74px";
		this.X.style.left = "63px";
		this.X.appendChild(this.P);
		this.X.appendChild(this.ha);
		this.Fa = eb("slot-left", 63, -1, a.height);
		this.Ga = eb("slot-right", 63 + b, 0, a.height);
		this.Da = fb("tape-shadow-l", 63);
		this.Ea = fb("tape-shadow-r", 63 + b - s("tape-shadow-r").width)
	};
	var eb = function (a, b, c, d) {
			var f = s(a),
				a = v(a);
			a.style.zIndex = 399;
			a.style.left = Math.floor(b - c - f.width / 2) + "px";
			a.style.top = 72 + d / 2 - f.height / 2 + "px";
			return a
		},
		fb = function (a, b) {
			var c = v(a);
			c.style.zIndex = 401;
			c.style.left = b + "px";
			c.style.top = "74px";
			return c
		};
	Q.prototype.destroy = function () {
		for (var a = 0; a < this.O.length; a++) n(this.O[a]);
		this.O.splice(0);
		n(this.S);
		this.S = g;
		n(this.P);
		this.P = g;
		n(this.ha);
		this.ha = g;
		n(this.X);
		this.X = g;
		n(this.Fa);
		this.Fa = g;
		n(this.Ga);
		this.Ga = g;
		n(this.Da);
		this.Da = g;
		n(this.Ea);
		this.Ea = g
	};
	var gb = function (a, b, c) {
			a.za = e;
			a.H--;
			var d = -1 * s("tape_").width + 7;
			C(j(function () {
				D(this.S, {
					left: d + "px"
				}, c, j(this.Aa, this))
			}, a), b)
		},
		hb = function (a, b, c) {
			a.za = e;
			a.H++;
			var d = -3 * s("tape_").width + 7;
			C(j(function () {
				D(this.S, {
					left: d + "px"
				}, c, j(this.Aa, this))
			}, a), b)
		},
		jb = function (a) {
			a.ca != g && (a.H < a.ca ? hb(a, 0, 50) : a.H > a.ca ? gb(a, 0, 50) : (a.ca = g, ib(a, a.H - 4, a.H + 9)))
		},
		ib = function (a, b, c) {
			for (var d in a.B) if (d < b || d > c) a.B[d] = ""
		};
	Q.prototype.print = function (a, b, c) {
		var d = this.B[this.H];
		this.B[this.H] = a;
		this.Ba = Math.max(this.H, this.Ba);
		a = j(this.ub, this, a, c);
		"0" == d || "1" == d ? F(this.O[6], db[d], b, a) : C(a, b)
	};
	Q.prototype.ub = function (a, b) {
		("0" == a || "1" == a) && F(this.O[6], cb[a], b, j(this.ib, this, 6))
	};
	var lb = function (a) {
			var b = k;
			b.Ba += 13;
			var c = b.Ba;
			b.gb = c;
			kb(b, a, c);
			b.ca = c + Math.floor(a.length / 2);
			b.za || b.Aa()
		},
		kb = function (a, b, c) {
			for (var d = 0; d < b.length; d++) a.B[c + d] = b.charAt(d)
		};
	Q.prototype.Aa = function () {
		this.za = i;
		for (var a = s("tape_"), b = 0; 13 > b; b++) this.ib(b);
		this.S.style.left = -2 * a.width + 7 + "px";
		jb(this)
	};
	Q.prototype.ib = function (a) {
		this.O[a].style.background = t(bb[this.B[a + this.H - 6] || ""])
	};
	var mb = {
		"0": {
			ta: 750,
			fa: 600,
			ra: 400,
			qa: 850
		},
		1: {
			ta: 650,
			fa: 500,
			ra: 200,
			qa: 750
		},
		2: {
			ta: 450,
			fa: 300,
			ra: 200,
			qa: 550
		},
		3: {
			ta: 250,
			fa: 200,
			ra: 100,
			qa: 250
		},
		4: {
			ta: 100,
			fa: 50,
			ra: 100,
			qa: 100
		}
	},
		nb = function () {
			this.N = this.g = g;
			this.C = -1;
			this.Ha = g;
			this.Z = this.Ta = 0;
			this.Sa = {};
			this.W = mb[2];
			this.Xa = i
		},
		ob = function (a, b) {
			var c = R,
				d = m,
				f = k; - 1 == c.C && (ab(d, 0, 0), c.W = mb[a], c.Ta = 0, c.Sa = {}, c.C = C(j(c.step, c), 0), c.g = d, c.N = f, c.Ha = b || g)
		};
	nb.prototype.stop = function () {
		-1 != this.C && sa(this.C);
		this.C = -1;
		this.N = this.g = g;
		this.Ha && (this.Ha(), this.Ha = g)
	};
	nb.prototype.pause = function () {
		-1 != this.C && sa(this.C);
		this.C = -1;
		this.Xa = e
	};
	nb.prototype.step = function () {
		if (this.N && this.g && -1 != this.C) {
			this.C = -1;
			var a = this.g;
			Ya(a.s[a.M], a.K, i);
			a.oa || (a.M = a.Ra, a.K = a.Qa, Ya(a.s[a.M], a.K, e));
			if (this.g.oa || 0 < this.Z && this.Ta > this.Z) a = this.g, Ya(a.s[a.M], a.K, i), this.stop();
			else {
				if (0 < this.Z) {
					var a = this.g.M + "," + this.g.K,
						b = this.Sa[a] || 0;
					this.Sa[a] = b + 1;
					6 < b ? this.W = mb[4] : 4 < b && (this.W = mb[3])
				}
				this.Ta++;
				(a = this.g.s[this.g.M].a[this.g.K]) && "*" == a.charAt(0) && (a = a.substr(1));
				var b = e,
					c = this.W.fa / 2,
					d = this.W.fa / 2;
				if ("0" == a || "1" == a || "_" == a) this.N.print(a, c, d);
				else if ("L" == a) gb(this.N, c, d);
				else if ("R" == a) hb(this.N, c, d);
				else if (/B[2-9]/.test(a)) ab(this.g, this.g.M, this.g.K - parseInt(a.charAt(1), 10)), b = i;
				else if (/^D/.test(a)) {
					if (1 == a.length || (this.N.B[this.N.H] || "_") == a.charAt(1)) ab(this.g, this.g.M + 1, this.g.K), b = i
				} else if (/^U/.test(a) && (1 == a.length || (this.N.B[this.N.H] || "_") == a.charAt(1))) ab(this.g, this.g.M - 1, this.g.K), b = i;
				b && ab(this.g, this.g.M, this.g.K + 1);
				b = this.W.ta;
				a ? /^[UDB]/.test(a) && (b = this.W.qa) : b = this.W.ra;
				this.C = C(j(this.step, this), b)
			}
		}
	};
	var pb = function () {
			this.i = 1
		},
		qb = function (a) {
			var b = S;
			b.i = a;
			b.save()
		};
	pb.prototype.save = function () {
		window.localStorage && window.localStorage.setItem && window.localStorage.setItem("doodle-turing-p", this.i)
	};
	pb.prototype.restore = function () {
		if (window.localStorage && window.localStorage["doodle-turing-p"] && (this.i = parseInt(window.localStorage["doodle-turing-p"], 10) || 0, 1 > this.i || 12 < this.i)) this.i = 1
	};
	var T = function (a) {
			for (var b = {}, c = 0; 1 >= c; c++) {
				for (var d = [], f = 0; f < arguments.length; f++) {
					for (var h = arguments[f].split(/ +/).slice(0), l = 0; l < h.length; l++) "." == h[l] ? h[l] = "" : /\(.*\)/.test(h[l]) ? h[l] = 0 == c ? h[l].replace(/.*\((.*)\).*/, "$1") : "*" + h[l].replace(/\(.*\)/, "") : 0 == c && (h[l] && "*" == h[l][0]) && (h[l] = h[l].substr(1));
					d.push(h)
				}
				0 == c ? b.Va = d : b.kb = d
			}
			return b
		},
		U = [{
			z: "",
			p: "",
			a: T("D0 D_ 0  L  B4", ".  1  R  U_ B2")
		}, {
			z: "00010",
			p: "01011",
			a: T("L 0(1) R R R 0(1)"),
			ea: e,
			A: 0,
			G: "b"
		}, {
			z: "0_011",
			p: "00011",
			a: T("L D0(D_) 1", ". 0"),
			ea: e,
			A: 1,
			G: "r"
		}, {
			z: "01011",
			p: "00011",
			a: T("D1 D1 D1 L B2(B4)", "0  R  R  R"),
			ea: e,
			A: 2,
			G: "y"
		}, {
			z: "11011",
			p: "01011",
			a: T("L D1(D_) B2", ". R      0"),
			ea: e,
			A: 3,
			G: "b"
		}, {
			z: "0_001",
			p: "01001",
			a: T("L L D0(D_) R  D1 B3", ". . 1      U1"),
			A: 4,
			G: "g"
		}, {
			z: "01111",
			p: "10000",
			a: T("L L D0(D1) 0(1) R   D_ B4", ". . *0     .    *U0"),
			A: 5,
			G: "r"
		}, {
			z: "11010",
			p: "01011",
			a: T("L D_ B2 . R(L)   1", ". R  0  R U0(U_) B2"),
			A: 0,
			G: "b"
		}, {
			z: "01_01",
			p: "00011",
			a: T("L D_(D1) B2 . L      1  L 0", ". .      0  R U_(U1) B2 . ."),
			A: 1,
			G: "r"
		}, {
			z: "00111",
			p: "00011",
			a: T("D_(D1) 1  L      D_(D1) 1 L      D_(D0) 1", "1      R  U_(U1) 0      R U_(U1) 0      *U_"),
			A: 2,
			G: "y"
		}, {
			z: "01011",
			p: "01011",
			a: T(".  .  D_ D_ L R L R", "U_ U_ .  .  . . 1 0"),
			ea: e,
			A: 3,
			G: "b"
		}, {
			z: "0_00_",
			p: "01001",
			a: T("L L D_(D0) 1  R D1(D_) B4", ". R U0(U_) B2"),
			A: 4,
			G: "g"
		}, {
			z: "00001",
			p: "10000",
			a: T("D0(D1) R . D0(D_) B4", "0      L 1 L      U_(U0)"),
			fb: 80,
			A: 5,
			G: "r"
		}],
		rb = T("1 . D1 . .  .  . _  R  D_ B2", "R U _  R D_ B2 . 1  B8 1  D_ L  B2", "U . B2 . 1  R  0 U_ L  B2 0  B9").Va,
		S = new pb,
		sb = i,
		tb = 0,
		ub = 0,
		V = new K,
		vb = new Ja,
		R = new nb,
		W = new J,
		H = new Aa,
		X = new G,
		Y = g,
		wb = function (a) {
			return a.complete || "complete" == a.readyState
		},
		Ab = function () {
			X.w(Y);
			V.w(Y);
			k.w(Y);
			m.w(Y);
			vb.w(Y, xb);
			W.w(Y);
			H.w(Y);
			Y.style.background = "";
			zb();
			m.ua(i);
			m.aa(U[0].a.Va, e);
			ob(3)
		},
		xb = function () {
			var a = ha("turing12-hp-deferredsprite.png");
			R.stop();
			R.Z = 40;
			0 == U[S.i].A && Ia(V, 500);
			if (wb(a)) Bb(), C(function () {
				Cb(S.i)
			}, 500);
			else {
				var b = i;
				C(function () {
					b || (hb(k, 100, 100), C(arguments.callee, 300))
				}, 300);
				a.onload = function () {
					b = e;
					Bb();
					Cb(S.i)
				}
			}
		},
		Cb = function (a) {
			var b = U[a];
			ub = (new Date).getTime();
			b.fb && (R.Z = b.fb);
			m.aa([
				[],
				[]
			]);
			Ba("");
			I(H, "dim");
			C(Z(function () {
				lb(b.z)
			}), 800);
			C(Z(function () {
				Ba(b.p)
			}), 2200);
			C(Z(function () {
				if (sb) {
					m.aa(b.a.Va);
					var c = H,
						d = Db;
					I(c, "bunny-" + b.G);
					c.I.style.cursor = "pointer";
					c.eb = d;
					Na(b.G);
					ob(3, Z(function () {
						Eb(a)
					}))
				} else {
					m.aa(b.a.kb);
					Fb(500)
				}
			}), 3200)
		},
		Fb = function (a) {
			I(H, "dim");
			C(function () {
				Da(W, function () {
					m.ua(i);
					W.ga = g;
					W.d.style.background = t("play-in");
					W.d.style.cursor = "default";
					C(function () {
						var a = U[S.i].ea ? 1 : 2;
						2 <= tb && (a = U[S.i].ea ? 0 : 1);
						ob(a, Gb)
					}, 600)
				});
				C(function () {
					m.ua(e)
				}, a)
			}, 0)
		},
		Ib = function () {
			lb("");
			m.aa([
				[],
				[]
			]);
			m.reset();
			Ba("");
			sb ? google.nav.go(google.doodle.url || "http://www.google.com/search?q=Alan+Turing") : (S.i == U.length - 1 ? qb(1) : qb(S.i + 1), sb = e, C(j(V.wb, V, Hb), 1E3));
			I(H, "dim")
		},
		Hb = function () {
			var a = S.i;
			Cb(1 == a ? U.length - 6 : a - 6)
		},
		Db = function () {
			R.stop();
			V.destroy();
			W.destroy();
			H.destroy();
			m.destroy();
			N = e;
			M = 3;
			L = 13;
			Na("y");
			zb();
			var a = k;
			D(a.X, {
				top: "27px"
			}, 200);
			D(a.Da, {
				top: "27px"
			}, 200);
			D(a.Ea, {
				top: "27px"
			}, 200);
			D(a.Fa, {
				top: "21px"
			}, 200);
			D(a.Ga, {
				top: "21px"
			}, 200);
			C(function () {
				lb("");
				C(function () {
					m = new P;
					m.create();
					m.w(Y);
					m.aa(rb);
					R.Z = 0;
					ob(3)
				}, 2E3)
			}, 2E3)
		},
		Z = function (a) {
			return function () {
				N || a()
			}
		},
		Gb = function () {
			C(function () {
				W.d.style.background = t("play-flat");
				W.d.style.cursor = "default";
				C(Jb, 1E3)
			}, 700)
		},
		Jb = function () {
			Kb(-1, Eb, Lb)
		},
		Eb = function (a) {
			sb || Mb(e);
			tb = 0;
			var b = a || S.i,
				c = U[b].A;
			V.Q[c] && ta(V.Q[c], Ha(Ea[c], e), 500);
			!N && 5 == c ? C(Ib, 500) : a ? C(Z(function () {
				Cb(a + 1)
			}), 500) : C(Z(function () {
				qb(b + 1);
				Cb(S.i)
			}), 500)
		},
		Lb = function () {
			Mb(i);
			tb++;
			var a = U[S.i];
			C(function () {
				var b = a.z,
					c = k,
					d = c.gb;
				kb(c, b, d);
				ib(c, d, d + b.length - 1);
				c.ca = d + Math.floor(b.length / 2);
				c.za || c.Aa();
				C(function () {
					Fb(100);
					m.reset()
				}, 400)
			}, 300)
		},
		Kb = function (a, b, c) {
			var d;
			var f = k;
			d = g;
			for (var h in f.B) f.B[h] && ("_" != f.B[h] && " " != f.B[h]) && (d == g && (d = h), d = Math.min(d, h));
			d = (d == g ? -1 : d) + a; - 1 == d ? d = "" : (f.ca = d, jb(f), d = f.B[d]);
			f = U[S.i]; - 1 == a ? C(da(Kb, a + 1, b, c), 600) : !d && !f.p[a] ? (Ca(f.p, a, 1600), I(H, "eq", 1600), C(b, 2E3)) : d != f.p[a] ? (Ca(f.p, a, 1600), I(H, "neq", 1600), C(c, 2E3)) : (d = U[S.i].ea ? 1E3 : 500, Ca(f.p, a, d), I(H, "eq", d - 200), C(da(Kb, a + 1, b, c), d))
		},
		$ = g,
		Nb = i,
		zb = function () {
			Nb = i;
			p(document, "mousemove", Ob);
			p(document, "touchstart", Pb);
			$ = window.setTimeout(Qb, 2E4)
		},
		Ob = function () {
			Nb = e;
			if (w) {
				w = i;
				ua();
				var a = R;
				a.Xa && (a.C = C(j(a.step, a), 0));
				a.Xa = i;
				$ = window.setTimeout(Qb, 2E4)
			}
		},
		Pb = function () {
			m.Za();
			xa(X);
			X.ia = e;
			X.k.style.visibility = "visible";
			E(X.k, "");
			r(X.k, 1);
			Ob()
		},
		Qb = function () {
			var a;
			if (a = -1 != R.C) a = 0 == R.Z && !Nb;
			a ? (R.pause(), w = e, z = A = 0) : $ = window.setTimeout(Qb, 2E4);
			Nb = i
		},
		Bb = function () {
			q(document, "mousemove", Ob);
			q(document, "touchstart", Pb);
			$ != g && (window.clearTimeout($), $ = g)
		},
		Mb = function (a) {
			if (window.google && window.google.log) {
				var b = "p:" + S.i + ",a:" + (tb + 1);
				a && (b += ",t:" + Math.round(((new Date).getTime() - ub) / 1E3));
				window.google.log("turing", b)
			}
		},
		Rb = function () {
			if (window.google && window.google.rein && window.google.dstr && (!window.google.doodle || !window.google.doodle.jesr)) {
				var a = ["google", "doodle", "jesr"],
					b = aa;
				!(a[0] in b) && b.execScript && b.execScript("var " + a[0]);
				for (var c; a.length && (c = a.shift());)!a.length ? b[c] = e : b = b[c] ? b[c] : b[c] = {};
				window.google.rein.push(Rb);
				window.google.dstr.push(Sb)
			}
			if ((Y = document.getElementById("hplogo")) && !google.doodle.ab) google.doodle.ab = e, window.google && (window.google.psy && window.google.psy.q && window.google.msg) && window.google.msg.listen(22, function () {
				Sb();
				return e
			}), a = ha("turing12-hp-sprite.png"), S.restore(), va(), w = i, ua(), N = i, M = 2, L = 8, Na("y"), m = new P, sb = i, tb = 0, vb.create(Y), X.create(google.doodle.alt || "Alan Turing's 100th Birthday", google.doodle.url || "http://www.google.com/search?q=Alan+Turing"), b = U[S.i].A, V.create(0 == b ? 6 : b), k = new Q, k.create(), m.create(), W.create(), H.create(), wb(a) ? Ab() : a.onload = Ab
		},
		Sb = function () {
			google.doodle.ab && (S.save(), Bb(), va(), R.stop(), X.destroy(), H.destroy(), vb.destroy(), m && (m.destroy(), m = g), k && (k.destroy(), k = g), V.destroy(), W.destroy(), google.doodle.ab = i)
		};
	console.log(window.google && window.google.x, window.google.y)
	window.google && window.google.x00 ? window.google.x({ //DEBUG x -> x00
		id: "DOODLE"
	}, Rb) : Rb();
})();