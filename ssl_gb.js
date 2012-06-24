(function () {
	try {
		var i = void 0,
			k = !0,
			l = null,
			m = !1,
			n, p = this,
			q = function (a, b, c) {
				a = a.split(".");
				c = c || p;
				!(a[0] in c) && c.execScript && c.execScript("var " + a[0]);
				for(var d; a.length && (d = a.shift());)!a.length && aa(b) ? c[d] = b : c = c[d] ? c[d] : c[d] = {}
			},
			s = function (a) {
				var b = typeof a;
				if("object" == b) if(a) {
					if(a instanceof Array) return "array";
					if(a instanceof Object) return b;
					var c = Object.prototype.toString.call(a);
					if("[object Window]" == c) return "object";
					if("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
					if("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
				} else return "null";
				else if("function" == b && "undefined" == typeof a.call) return "object";
				return b
			},
			aa = function (a) {
				return a !== i
			},
			ba = function (a) {
				var b = s(a);
				return "array" == b || "object" == b && "number" == typeof a.length
			},
			u = function (a) {
				return "string" == typeof a
			},
			ca = function (a) {
				var b = typeof a;
				return "object" == b && a != l || "function" == b
			};
		Math.floor(2147483648 * Math.random()).toString(36);
		var da = function (a, b, c) {
				return a.call.apply(a.bind, arguments)
			},
			ea = function (a, b, c) {
				if(!a) throw Error();
				if(2 < arguments.length) {
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
			v = function (a, b, c) {
				v = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? da : ea;
				return v.apply(l, arguments)
			},
			fa = function (a, b) {
				var c = Array.prototype.slice.call(arguments, 1);
				return function () {
					var b = Array.prototype.slice.call(arguments);
					b.unshift.apply(b, c);
					return a.apply(this, b)
				}
			},
			ga = Date.now ||
		function () {
			return +new Date
		};
		window.gbar.tev && window.gbar.tev(3, "m");
		var ma = function (a) {
				if(!ha.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(ia, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(ja, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(ka, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(la, "&quot;"));
				return a
			},
			ia = /&/g,
			ja = /</g,
			ka = />/g,
			la = /\"/g,
			ha = /[&<>\"]/;
		var w = Array.prototype,
			na = w.indexOf ?
		function (a, b, c) {
			return w.indexOf.call(a, b, c)
		} : function (a, b, c) {
			c = c == l ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
			if(u(a)) return !u(b) || 1 != b.length ? -1 : a.indexOf(b, c);
			for(; c < a.length; c++) if(c in a && a[c] === b) return c;
			return -1
		}, oa = w.forEach ?
		function (a, b, c) {
			w.forEach.call(a, b, c)
		} : function (a, b, c) {
			for(var d = a.length, e = u(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
		}, pa = w.filter ?
		function (a, b, c) {
			return w.filter.call(a, b, c)
		} : function (a, b, c) {
			for(var d = a.length, e = [], f = 0, g = u(a) ? a.split("") : a, h = 0; h < d; h++) if(h in g) {
				var j = g[h];
				b.call(c, j, h, a) && (e[f++] = j)
			}
			return e
		}, qa = function (a) {
			var b = a.length;
			if(0 < b) {
				for(var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
				return c
			}
			return []
		}, ra = function (a, b, c) {
			return 2 >= arguments.length ? w.slice.call(a, b) : w.slice.call(a, b, c)
		};
		var y = function (a, b) {
				this.x = aa(a) ? a : 0;
				this.y = aa(b) ? b : 0
			};
		var sa = function (a, b) {
				this.width = a;
				this.height = b
			};
		sa.prototype.floor = function () {
			this.width = Math.floor(this.width);
			this.height = Math.floor(this.height);
			return this
		};
		var ta = function (a, b) {
				for(var c in a) b.call(i, a[c], c, a)
			},
			ua = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),
			va = function (a, b) {
				for(var c, d, e = 1; e < arguments.length; e++) {
					d = arguments[e];
					for(c in d) a[c] = d[c];
					for(var f = 0; f < ua.length; f++) c = ua[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
				}
			};
		var wa, xa, ya, za, Aa, Ba = function () {
				return p.navigator ? p.navigator.userAgent : l
			};
		Aa = za = ya = xa = wa = m;
		var Ca;
		if(Ca = Ba()) {
			var Da = p.navigator;
			wa = 0 == Ca.indexOf("Opera");
			xa = !wa && -1 != Ca.indexOf("MSIE");
			za = (ya = !wa && -1 != Ca.indexOf("WebKit")) && -1 != Ca.indexOf("Mobile");
			Aa = !wa && !ya && "Gecko" == Da.product
		}
		var Ea = wa,
			z = xa,
			Fa = Aa,
			A = ya,
			Ga = za,
			Ha;
		a: {
			var Ia = "",
				Ja;
			if(Ea && p.opera) var Ka = p.opera.version,
				Ia = "function" == typeof Ka ? Ka() : Ka;
			else if(Fa ? Ja = /rv\:([^\);]+)(\)|;)/ : z ? Ja = /MSIE\s+([^\);]+)(\)|;)/ : A && (Ja = /WebKit\/(\S+)/), Ja) var La = Ja.exec(Ba()),
				Ia = La ? La[1] : "";
			if(z) {
				var Ma, Pa = p.document;
				Ma = Pa ? Pa.documentMode : i;
				if(Ma > parseFloat(Ia)) {
					Ha = "" + Ma;
					break a
				}
			}
			Ha = Ia
		}
		var Qa = Ha,
			Ra = {},
			Sa = function (a) {
				var b;
				if(!(b = Ra[a])) {
					b = 0;
					for(var c = ("" + Qa).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = ("" + a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
						var g = c[f] || "",
							h = d[f] || "",
							j = RegExp("(\\d*)(\\D*)", "g"),
							o = RegExp("(\\d*)(\\D*)", "g");
						do {
							var r = j.exec(g) || ["", "", ""],
								t = o.exec(h) || ["", "", ""];
							if(0 == r[0].length && 0 == t[0].length) break;
							b = ((0 == r[1].length ? 0 : parseInt(r[1], 10)) < (0 == t[1].length ? 0 : parseInt(t[1], 10)) ? -1 : (0 == r[1].length ? 0 : parseInt(r[1], 10)) > (0 == t[1].length ? 0 : parseInt(t[1], 10)) ? 1 : 0) || ((0 == r[2].length) < (0 == t[2].length) ? -1 : (0 == r[2].length) > (0 == t[2].length) ? 1 : 0) || (r[2] < t[2] ? -1 : r[2] > t[2] ? 1 : 0)
						} while (0 == b)
					}
					b = Ra[a] = 0 <= b
				}
				return b
			},
			Ta = {},
			Ua = function (a) {
				return Ta[a] || (Ta[a] = z && !! document.documentMode && document.documentMode >= a)
			};
		var Va, Wa = !z || Ua(9);
		!Fa && !z || z && Ua(9) || Fa && Sa("1.9.1");
		var Xa = z && !Sa("9");
		var Ya = function (a) {
				a = a.className;
				return u(a) && a.match(/\S+/g) || []
			},
			$a = function (a, b) {
				var c = Ya(a),
					d = ra(arguments, 1),
					e = c.length + d.length;
				Za(c, d);
				a.className = c.join(" ");
				return c.length == e
			},
			bb = function (a, b) {
				var c = Ya(a),
					d = ra(arguments, 1),
					e = ab(c, d);
				a.className = e.join(" ");
				return e.length == c.length - d.length
			},
			Za = function (a, b) {
				for(var c = 0; c < b.length; c++) 0 <= na(a, b[c]) || a.push(b[c])
			},
			ab = function (a, b) {
				return pa(a, function (a) {
					return !(0 <= na(b, a))
				})
			};
		var eb = function (a) {
				return a ? new cb(db(a)) : Va || (Va = new cb)
			},
			gb = function (a, b) {
				var c = b || document;
				return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : c.getElementsByClassName ? c.getElementsByClassName(a) : fb(a, b)
			},
			hb = function (a, b) {
				var c = b || document,
					d = l;
				return(d = c.querySelectorAll && c.querySelector ? c.querySelector("." + a) : gb(a, b)[0]) || l
			},
			fb = function (a, b) {
				var c, d, e, f;
				c = b || document;
				if(c.querySelectorAll && c.querySelector && a) return c.querySelectorAll("" + (a ? "." + a : ""));
				if(a && c.getElementsByClassName) {
					var g = c.getElementsByClassName(a);
					return g
				}
				g = c.getElementsByTagName("*");
				if(a) {
					f = {};
					for(d = e = 0; c = g[d]; d++) {
						var h = c.className;
						"function" == typeof h.split && 0 <= na(h.split(/\s+/), a) && (f[e++] = c)
					}
					f.length = e;
					return f
				}
				return g
			},
			jb = function (a, b) {
				ta(b, function (b, d) {
					"style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in ib ? a.setAttribute(ib[d], b) : 0 == d.lastIndexOf("aria-", 0) ? a.setAttribute(d, b) : a[d] = b
				})
			},
			ib = {
				cellpadding: "cellPadding",
				cellspacing: "cellSpacing",
				colspan: "colSpan",
				rowspan: "rowSpan",
				valign: "vAlign",
				height: "height",
				width: "width",
				usemap: "useMap",
				frameborder: "frameBorder",
				maxlength: "maxLength",
				type: "type"
			},
			lb = function (a, b, c) {
				var d = arguments,
					e = document,
					f = d[0],
					g = d[1];
				if(!Wa && g && (g.name || g.type)) {
					f = ["<", f];
					g.name && f.push(' name="', ma(g.name), '"');
					if(g.type) {
						f.push(' type="', ma(g.type), '"');
						var h = {};
						va(h, g);
						g = h;
						delete g.type
					}
					f.push(">");
					f = f.join("")
				}
				f = e.createElement(f);
				g && (u(g) ? f.className = g : "array" == s(g) ? $a.apply(l, [f].concat(g)) : jb(f, g));
				2 < d.length && kb(e, f, d, 2);
				return f
			},
			kb = function (a, b, c, d) {
				function e(c) {
					c && b.appendChild(u(c) ? a.createTextNode(c) : c)
				}
				for(; d < c.length; d++) {
					var f = c[d];
					ba(f) && !(ca(f) && 0 < f.nodeType) ? oa(mb(f) ? qa(f) : f, e) : e(f)
				}
			},
			nb = function (a, b) {
				kb(db(a), a, arguments, 1)
			},
			db = function (a) {
				return 9 == a.nodeType ? a : a.ownerDocument || a.document
			},
			ob = {
				SCRIPT: 1,
				STYLE: 1,
				HEAD: 1,
				IFRAME: 1,
				OBJECT: 1
			},
			pb = {
				IMG: " ",
				BR: "\n"
			},
			rb = function (a, b, c) {
				if(!(a.nodeName in ob)) if(3 == a.nodeType) c ? b.push(("" + a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
				else if(a.nodeName in pb) b.push(pb[a.nodeName]);
				else for(a = a.firstChild; a;) rb(a, b, c), a = a.nextSibling
			},
			mb = function (a) {
				if(a && "number" == typeof a.length) {
					if(ca(a)) return "function" == typeof a.item || "string" == typeof a.item;
					if("function" == s(a)) return "function" == typeof a.item
				}
				return m
			},
			cb = function (a) {
				this.r = a || p.document || document
			};
		cb.prototype.createElement = function (a) {
			return this.r.createElement(a)
		};
		cb.prototype.createTextNode = function (a) {
			return this.r.createTextNode(a)
		};
		var sb = function (a) {
				var b = a.r,
					a = !A && "CSS1Compat" == b.compatMode ? b.documentElement : b.body,
					b = b.parentWindow || b.defaultView;
				return new y(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
			};
		cb.prototype.appendChild = function (a, b) {
			a.appendChild(b)
		};
		var tb = function (a) {
				tb[" "](a);
				return a
			};
		tb[" "] = function () {};
		var ub = function (a, b) {
				try {
					return tb(a[b]), k
				} catch(c) {}
				return m
			};
		var B = function (a, b, c, d) {
				d = d || {};
				d._sn = ["m", b, c].join(".");
				window.gbar.logger.ml(a, d)
			};
		var H = window.gbar;
		var vb = {
			ub: 1,
			Sb: 2,
			Rb: 3,
			wb: 4,
			vb: 5,
			yb: 6,
			xb: 7,
			Lb: 8
		};
		var wb = [],
			xb = l,
			I = function (a, b) {
				wb.push([a, b])
			},
			yb = function (a, b) {
				var c = l;
				b && (c = {
					m: b
				});
				H.tev && H.tev(a, "m", c)
			};
		q("gbar.mddn", function () {
			for(var a = [], b = 0, c; c = wb[b]; ++b) a.push(c[0]);
			return a.join(",")
		}, i);
		var zb, Gb = function () {
				Ab();
				q("gbar.addHover", Bb, i);
				q("gbar.close", Cb, i);
				q("gbar.cls", Db, i);
				q("gbar.tg", Eb, i);
				H.adh("gbd4", function () {
					Fb(5)
				});
				H.adh("gbd5", function () {
					Fb(6)
				})
			},
			Hb = function () {
				zb === i && (zb = /MSIE (\d+)\.(\d+);/.exec(navigator.userAgent));
				return zb
			},
			Ib = function () {
				var a = Hb();
				return a && 1 < a.length ? new Number(a[1]) : l
			},
			Jb = "",
			K = i,
			Kb = i,
			Lb = i,
			Mb = i,
			Nb = m,
			Ob = i,
			Pb = "gbzt,gbgt,gbg0l,gbmt,gbml1,gbmlb,gbqfb,gbqfba,gbqfbb,gbqfqw".split(","),
			L = function (a, b, c, d) {
				var e = "on" + b;
				if(a.addEventListener) a.addEventListener(b, c, !! d);
				else if(a.attachEvent) a.attachEvent(e, c);
				else {
					var f = a[e];
					a[e] = function () {
						var a = f.apply(this, arguments),
							b = c.apply(this, arguments);
						return a == i ? b : b == i ? a : b && a
					}
				}
			},
			M = function (a) {
				return document.getElementById(a)
			},
			Qb = function () {
				var a = M("gbx1");
				return H.kn && H.kn() && a ? a.clientWidth : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.clientWidth
			},
			Rb = function (a) {
				var b = {};
				if("none" != a.style.display) return b.width = a.offsetWidth, b.height = a.offsetHeight, b;
				var c = a.style,
					d = c.display,
					e = c.visibility,
					f = c.position;
				c.visibility = "hidden";
				c.position = "absolute";
				c.display = "inline";
				var g;
				g = a.offsetWidth;
				a = a.offsetHeight;
				c.display = d;
				c.position = f;
				c.visibility = e;
				b.width = g;
				b.height = a;
				return b
			},
			Sb = function (a) {
				if(Lb === i) {
					var b = document.body.style;
					Lb = !(b.WebkitBoxShadow !== i || b.MozBoxShadow !== i || b.boxShadow !== i || b.BoxShadow !== i)
				}
				if(Lb) {
					var b = a.id + "-gbxms",
						c = M(b);
					c || (c = document.createElement("span"), c.id = b, c.className = "gbxms", a.appendChild(c));
					Mb === i && (Mb = c.offsetHeight < a.offsetHeight / 2);
					Mb && (c.style.height = a.offsetHeight - 5 + "px", c.style.width = a.offsetWidth - 3 + "px")
				}
			},
			Tb = function (a, b) {
				if(a) {
					var c = a.style,
						d = b || M(Jb);
					d && (a.parentNode && a.parentNode.appendChild(d), d = d.style, d.width = a.offsetWidth + "px", d.height = a.offsetHeight + "px", d.left = c.left, d.right = c.right)
				}
			},
			Vb = function (a) {
				try {
					if(K && (!H.eh[K] || !(!a && !window.event ? 0 : (a || window.event).ctrlKey || (a || window.event).metaKey || 2 == (a || window.event).which))) {
						var b = M(Jb);
						b && (b.style.cssText = "", b.style.visibility = "hidden");
						var c = M(K);
						if(c) {
							c.style.cssText = "";
							c.style.visibility = "hidden";
							var d = c.getAttribute("aria-owner"),
								e = d ? M(d) : l;
							e && (Ub(e.parentNode, "gbto"), e.blur())
						}
						Kb && (Kb(), Kb = i);
						var f = H.ch[K];
						if(f) for(var a = 0, g; g = f[a]; a++) try {
							g()
						} catch(h) {
							B(h, "sb", "cdd1")
						}
						K = i
					}
				} catch(j) {
					B(j, "sb", "cdd2")
				}
			},
			Wb = function (a, b) {
				try {
					if(K) for(var c = b.target || b.srcElement;
					"a" != c.tagName.toLowerCase();) {
						if(c.id == a) return b.cancelBubble = k, c;
						c = c.parentNode
					}
				} catch(d) {
					B(d, "sb", "kdo")
				}
				return l
			},
			Fb = function (a) {
				var b = {
					s: !K ? "o" : "c"
				}; - 1 != a && H.logger.il(a, b)
			},
			Xb = function (a, b) {
				if(ub(a, "className")) {
					var c = a.className;
					N(a, b) || (a.className += ("" != c ? " " : "") + b)
				}
			},
			Ub = function (a, b) {
				var c = a.className,
					d = RegExp("\\s?\\b" + b + "\\b");
				c && c.match(d) && (a.className = c.replace(d, ""))
			},
			N = function (a, b) {
				var c = a.className;
				return !(!c || !c.match(RegExp("\\b" + b + "\\b")))
			},
			Eb = function (a, b, c, d) {
				try {
					a = a || window.event;
					c = c || m;
					if(!Jb) {
						var e = document.createElement("iframe");
						e.frameBorder = "0";
						e.tabIndex = "-1";
						Jb = e.id = "gbs";
						e.src = "javascript:''";
						M("gbw").appendChild(e)
					}
					Nb || (L(document, "click", Cb), L(document, "keyup", Yb), Nb = k);
					c || (a.preventDefault && a.preventDefault(), a.returnValue = m, a.cancelBubble = k);
					if(!b) for(var b = a.target || a.srcElement, f = b.parentNode.id; !N(b.parentNode, "gbt");) {
						if("gb" == f) return;
						b = b.parentNode;
						f = b.parentNode.id
					}
					var g = b.getAttribute("aria-owns");
					if(g && g.length) if(d || b.focus(), K == g) Db(g);
					else {
						var h = b.offsetWidth,
							a = 0;
						do a += b.offsetLeft || 0;
						while(b = b.offsetParent);
						if(Ob === i) {
							var j = document.body,
								o, r = document.defaultView;
							if(r && r.getComputedStyle) {
								var t = r.getComputedStyle(j, "");
								t && (o = t.direction)
							} else o = j.currentStyle ? j.currentStyle.direction : j.style.direction;
							Ob = "rtl" == o
						}
						j = Ob ? m : k;
						b = Ob ? m : k;
						"gbd" == g && (b = !b);
						"gbz" == g && (b = !b, j = !j);
						K && Vb();
						var x = H.bh[g];
						if(x) for(var C = 0, D; D = x[C]; C++) try {
							D()
						} catch(E) {
							B(E, "sb", "t1")
						}
						var x = a,
							F = M(g);
						if(F) {
							var S = F.style,
								G = F.offsetWidth;
							if(G < h) {
								S.width = h + "px";
								var G = h,
									J = F.offsetWidth;
								J != h && (S.width = h - (J - h) + "px")
							}
							J = 5;
							if(0 > x) var T = Qb(),
								O = window.document,
								Na = "CSS1Compat" == O.compatMode ? O.documentElement : O.body,
								J = J - (T - (new sa(Na.clientWidth, Na.clientHeight)).width);
							var Oa, U, T = Qb();
							if(b) {
								if(Oa = j ? Math.max(T - x - G, J) : T - x - h, U = -(T - x - h - Oa), Hb()) {
									var uc = Ib();
									(6 == uc || 7 == uc && "BackCompat" == document.compatMode) && (U -= 2)
								}
							} else Oa = j ? x : Math.max(x + h - G, J), U = Oa - x;
							var vc = M("gbw"),
								wc = M("gb");
							if(vc && wc) {
								var xc = vc.offsetLeft;
								xc != wc.offsetLeft && (U -= xc)
							}
							Sb(F);
							S.right = b ? U + "px" : "auto";
							S.left = b ? "auto" : U + "px";
							S.visibility = "visible";
							var yc = F.getAttribute("aria-owner"),
								zc = yc ? M(yc) : l;
							zc && Xb(zc.parentNode, "gbto");
							var qb = M(Jb);
							qb && (Tb(F, qb), qb.style.visibility = "visible");
							K = g
						}
						var Ac = H.dh[g];
						if(Ac) for(C = 0; D = Ac[C]; C++) try {
							D()
						} catch(Pd) {
							B(Pd, "sb", "t2")
						}
					}
				} catch(Qd) {
					B(Qd, "sb", "t3")
				}
			},
			Yb = function (a) {
				if(K) try {
					var a = a || window.event,
						b = a.target || a.srcElement;
					if(a.keyCode && b) if(a.keyCode && 27 == a.keyCode) Vb();
					else if("a" == b.tagName.toLowerCase() && -1 != b.className.indexOf("gbgt") && (13 == a.keyCode || 3 == a.keyCode)) {
						var c = document.getElementById(K);
						if(c && "gbz" != c.id) {
							var d = c.getElementsByTagName("a");
							d && d.length && d[0].focus && d[0].focus()
						}
					}
				} catch(e) {
					B(e, "sb", "kuh")
				}
			},
			Ab = function () {
				var a = M("gb");
				if(a) {
					Ub(a, "gbpdjs");
					for(var b = a.getElementsByTagName("a"), a = [], c = M("gbqfw"), d = 0, e; e = b[d]; d++) a.push(e);
					if(c) {
						var f = M("gbqfqw"),
							d = M("gbqfwc"),
							b = M("gbqfwe");
						e = c.getElementsByTagName("button");
						c = [];
						f && !H.sg.c && c.push(f);
						if(e && 0 < e.length) for(var f = 0, g; g = e[f]; f++) c.push(g);
						d && b && (c.push(d), c.push(b));
						for(d = 0; b = c[d]; d++) a.push(b)
					}
					for(d = 0; c = a[d]; d++)(b = Zb(c)) && $b(c, fa(ac, b))
				}
			},
			Bb = function (a) {
				var b = Zb(a);
				b && $b(a, fa(ac, b))
			},
			Zb = function (a) {
				for(var b = 0, c; c = Pb[b]; b++) if(N(a, c)) return c
			},
			$b = function (a, b) {
				var c = function (a, b) {
						return function (c) {
							try {
								var c = c || window.event,
									g, h = c.relatedTarget;
								g = h && ub(h, "parentNode") ? h : l;
								var j;
								if(!(j = a === g)) if(a === g) j = m;
								else {
									for(; g && g !== a;) g = g.parentNode;
									j = g === a
								}
								j || b(c, a)
							} catch(o) {
								B(o, "sb", "bhe")
							}
						}
					}(a, b);
				L(a, "mouseover", c);
				L(a, "mouseout", c)
			},
			ac = function (a, b, c) {
				try {
					if(a += "-hvr", "mouseover" == b.type) {
						Xb(c, a);
						var d = document.activeElement;
						if(d && ub(d, "className")) {
							var e = N(d, "gbgt") || N(d, "gbzt"),
								f = N(c, "gbgt") || N(c, "gbzt");
							e && f && d.blur()
						}
					} else "mouseout" == b.type && Ub(c, a)
				} catch(g) {
					B(g, "sb", "moaoh")
				}
			},
			bc = function (a) {
				for(; a && a.hasChildNodes();) a.removeChild(a.firstChild)
			},
			Cb = function (a) {
				Vb(a)
			},
			Db = function (a) {
				a == K && Vb()
			},
			P = function (a, b) {
				var c = document.createElement(a);
				c.className = b;
				return c
			},
			cc = function (a) {
				a && "visible" == a.style.visibility && (Sb(a), Tb(a))
			};
		I("base", {
			init: function () {
				Gb()
			}
		});
		var Q = function (a, b) {
				var c;
				a: {
					c = db(a);
					if(c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, l))) {
						c = c[b] || c.getPropertyValue(b) || "";
						break a
					}
					c = ""
				}
				return c || (a.currentStyle ? a.currentStyle[b] : l) || a.style && a.style[b]
			},
			dc = function (a) {
				if(Ga && A) {
					var b = a.ownerDocument.defaultView;
					if(b != b.top) return m
				}
				return !!a.getBoundingClientRect
			},
			ec = function (a) {
				var b = a.getBoundingClientRect();
				z && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
				return b
			},
			fc = function (a) {
				if(z && !Ua(8)) return a.offsetParent;
				for(var b = db(a), c = Q(a, "position"), d = "fixed" == c || "absolute" == c, a = a.parentNode; a && a != b; a = a.parentNode) if(c = Q(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
				return l
			},
			gc = function (a) {
				var b, c = db(a),
					d = Q(a, "position"),
					e = Fa && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY),
					f = new y(0, 0),
					g;
				b = c ? db(c) : document;
				if(g = z) if(g = !Ua(9)) g = "CSS1Compat" != eb(b).r.compatMode;
				g = g ? b.body : b.documentElement;
				if(a == g) return f;
				if(dc(a)) b = ec(a), a = sb(eb(c)), f.x = b.left + a.x, f.y = b.top + a.y;
				else if(c.getBoxObjectFor && !e) b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(g), f.x = b.screenX - a.screenX, f.y = b.screenY - a.screenY;
				else {
					e = a;
					do {
						f.x += e.offsetLeft;
						f.y += e.offsetTop;
						e != a && (f.x += e.clientLeft || 0, f.y += e.clientTop || 0);
						if(A && "fixed" == Q(e, "position")) {
							f.x += c.body.scrollLeft;
							f.y += c.body.scrollTop;
							break
						}
						e = e.offsetParent
					} while (e && e != a);
					if(Ea || A && "absolute" == d) f.y -= c.body.offsetTop;
					for(e = a;
					(e = fc(e)) && e != c.body && e != g;) if(f.x -= e.scrollLeft, !Ea || "TR" != e.tagName) f.y -= e.scrollTop
				}
				return f
			},
			ic = function (a) {
				if("none" != Q(a, "display")) return hc(a);
				var b = a.style,
					c = b.display,
					d = b.visibility,
					e = b.position;
				b.visibility = "hidden";
				b.position = "absolute";
				b.display = "inline";
				a = hc(a);
				b.display = c;
				b.position = e;
				b.visibility = d;
				return a
			},
			hc = function (a) {
				var b = a.offsetWidth,
					c = a.offsetHeight,
					d = A && !b && !c;
				return(!aa(b) || d) && a.getBoundingClientRect ? (a = ec(a), new sa(a.right - a.left, a.bottom - a.top)) : new sa(b, c)
			},
			jc = function (a, b) {
				var c = a.style;
				"opacity" in c ? c.opacity = b : "MozOpacity" in c ? c.MozOpacity = b : "filter" in c && (c.filter = "" === b ? "" : "alpha(opacity=" + 100 * b + ")")
			},
			kc = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;
		var lc = window.gbar.i;
		var mc = function (a, b) {
				this.z = a;
				this.N = b;
				!this.z || !this.N ? B(Error("Missing DOM"), "sbr", "init") : (this.aa = hb("gbsbt", this.z), this.$ = hb("gbsbb", this.z), !this.aa || !this.$ ? B(Error("Missing Drop Shadows for " + b.id), "sbr", "init") : (this.k(), L(b, "scroll", v(this.k, this), m)))
			};
		mc.prototype.k = function () {
			try {
				var a = this.N.scrollTop,
					b = this.N.scrollHeight - this.N.clientHeight;
				0 === b ? (jc(this.aa, 0), jc(this.$, 0)) : (jc(this.aa, a / b), jc(this.$, (b - a) / b))
			} catch(c) {
				B(c, "sbr", "sh")
			}
		};
		var R = function (a) {
				var b = v(this.Oa, this);
				q("gbar.pcm", b, i);
				b = v(this.Ma, this);
				q("gbar.paa", b, i);
				b = v(this.Pa, this);
				q("gbar.pca", b, i);
				b = v(this.Sa, this);
				q("gbar.prm", b, i);
				b = v(this.ma, this);
				q("gbar.pge", b, i);
				b = v(this.oa, this);
				q("gbar.ppe", b, i);
				b = v(this.La, this);
				q("gbar.pae", b, i);
				b = v(this.Ua, this);
				q("gbar.spn", b, i);
				b = v(this.Va, this);
				q("gbar.spp", b, i);
				b = v(this.Wa, this);
				q("gbar.sps", b, i);
				b = v(this.Xa, this);
				q("gbar.spd", b, i);
				this.S = this.na = this.ka = this.K = this.la = m;
				this.Ga = a.mg || "%1$s";
				this.Fa = a.md || "%1$s";
				this.H = a.ppa;
				this.Na = a.cp;
				this.Ja = a.mh;
				this.Qa = a.d;
				this.B = a.e;
				this.T = a.p;
				this.Ka = a.ppl;
				this.ja = a.pp;
				this.Ha = a.ppm;
				this.Ta = a.s;
				this.Ia = a.sanw;
				(b = M("gbi4i")) && b.loadError && this.ma();
				(b = M("gbmpi")) && b.loadError && this.oa();
				this.la || ((b = M("gbd4")) && L(b, "click", v(Wb, this, "gbd4"), k), this.la = k);
				try {
					var c = M("gbmpas"),
						d = M("gbmpasb");
					this.Ta && c && d && (this.b = new mc(d, c), H.adh("gbd4", v(this.Ra, this)))
				} catch(e) {
					B(e, "sp", "ssb")
				}
				if(this.Na) try {
					var f = document.getElementById("gbmpiw");
					f && (L(f, "mouseover", v(this.U, this, bb), m), L(f, "mouseout", v(this.U, this, $a), m), this.U($a))
				} catch(g) {
					B(g, "sp", "smh")
				}
				if(!this.Qa && (c = M("gbmpn")) && nc(c) == this.B) c = this.B.indexOf("@"), 0 <= c && oc(this.B.substring(0, c));
				a.xp && (a = M("gbg4"), c = M("gbg6"), a && (L(a, "mouseover", v(this.V, this)), this.H && L(a, "mouseover", v(this.pa, this))), c && (L(c, "mouseover", v(this.V, this)), this.H && L(c, "mouseover", v(this.pa, this))));
				if(this.H && (this.J = {}, a = M("gbmpas"))) {
					a = gb("gbmt", a);
					for(c = 0; d = a[c]; ++c) d && (f = hb("gbps3", d), d = hb("gbmpia", d), f && d && (b = i, Xa && "innerText" in f ? b = f.innerText.replace(/(\r\n|\r|\n)/g, "\n") : (b = [], rb(f, b, k), b = b.join("")), b = b.replace(/ \xAD /g, " ").replace(/\xAD/g, ""), b = b.replace(/\u200B/g, ""), Xa || (b = b.replace(/ +/g, " ")), " " != b && (b = b.replace(/^\s*/, "")), f = b, d = d.getAttribute("data-asrc"), this.J[f] = d))
				}
				this.ia = []
			};
		n = R.prototype;
		n.U = function (a) {
			var b = document.getElementById("gbmpicb"),
				c = document.getElementById("gbmpicp");
			b && a(b, "gbxo");
			c && a(c, "gbxo")
		};
		n.Oa = function () {
			try {
				var a = M("gbmpas");
				a && bc(a);
				this.b && this.b.k();
				this.K = m;
				pc(this, m)
			} catch(b) {
				B(b, "sp", "cam")
			}
		};
		n.Sa = function () {
			var a = M("gbmpdv"),
				b = M("gbmps");
			if(a && b && !this.K) {
				var c = M("gbmpal"),
					d = M("gbpm");
				if(c) {
					a.style.width = "";
					b.style.width = "";
					c.style.width = "";
					d && (d.style.width = "1px");
					var e = Rb(a).width,
						f = Rb(b).width,
						e = e > f ? e : f;
					if(f = M("gbg4")) f = Rb(f).width, f > e && (e = f);
					Hb() && (f = Ib(), (6 == f || 7 == f && "BackCompat" == document.compatMode) && (e += 2));
					e += "px";
					a.style.width = e;
					b.style.width = e;
					c.style.width = e;
					d && (d.style.width = e);
					this.b && this.b.k();
					this.K = k
				}
			}
		};
		n.Pa = function () {
			for(var a = 0, b; b = this.ia[a]; ++a) b && b && b.parentNode && b.parentNode.removeChild(b);
			this.b && this.b.k();
			this.K = m;
			pc(this, m)
		};
		n.Ma = function (a, b, c, d, e, f, g, h, j, o) {
			try {
				var r = M("gbmpas");
				if(a) for(var t = gb("gbp0", r), x = 0, C; C = t[x]; ++x) C && bb(C, "gbp0");
				if(r) {
					t = "gbmtc";
					a && (t += " gbp0");
					f || (t += " gbpd");
					var D = P("div", t),
						E = P(f ? "a" : "span", "gbmt");
					if(f) {
						if(h) for(var F in h) E.setAttribute(F, h[F]);
						E.href = g;
						$b(E, fa(ac, "gbmt"));
						this.Ia && (E.target = "_blank", E.rel = "noreferrer")
					}
					if(this.H) {
						var S = P("span", "gbmpiaw"),
							G = P("img", "gbmpia");
						G.height = "48";
						G.width = "48";
						d ? G.alt = d : G.alt = e;
						a = "//ssl.gstatic.com/gb/images/silhouette_48.png";
						j ? (a = j, this.J[e] = j) : this.J[e] && (a = this.J[e]);
						G.setAttribute("src", a);
						G.setAttribute("data-asrc", a);
						S.appendChild(G);
						E.appendChild(S)
					}
					var J = P("span", "gbmpnw"),
						T = P("span", "gbps");
					J.appendChild(T);
					T.appendChild(document.createTextNode(d || e));
					var O = P("span", "gbps2");
					b ? qc(this.Fa, e, O) : c ? qc(this.Ga, e, O) : o ? O.appendChild(document.createTextNode(this.Ha)) : qc(l, e, O);
					J.appendChild(O);
					E.appendChild(J);
					D.appendChild(E);
					r.appendChild(D);
					this.ia.push(D);
					this.b && this.b.k();
					o && !this.S && pc(this, o)
				}
			} catch(Na) {
				B(Na, "sp", "aa")
			}
		};
		var qc = function (a, b, c) {
				var d = P("span", "gbps3");
				d.appendChild(document.createTextNode(b));
				a ? (a = a.split("%1$s"), b = document.createTextNode(a[1]), c.appendChild(document.createTextNode(a[0])), c.appendChild(d), c.appendChild(b)) : c.appendChild(d)
			},
			pc = function (a, b) {
				var c = M("gbmppc");
				c && (b ? (Ub(c, "gbxx"), a.S = k) : (Xb(c, "gbxx"), a.S = m))
			},
			oc = function (a) {
				var b = M("gbd4"),
					c = M("gbmpn");
				b && c && (bc(c), c.appendChild(document.createTextNode(a)), cc(b))
			},
			rc = function () {
				var a = M("gbmpas");
				return a ? gb("gbmpiaw", a) : l
			};
		R.prototype.ma = function () {
			try {
				sc("gbi4i", "gbi4id")
			} catch(a) {
				B(a, "sp", "gbpe")
			}
		};
		R.prototype.oa = function () {
			try {
				sc("gbmpi", "gbmpid")
			} catch(a) {
				B(a, "sp", "ppe")
			}
		};
		R.prototype.La = function () {
			try {
				var a = rc();
				if(a) for(var b = 0, c; c = a[b]; ++b) c && (c.style.display = "none")
			} catch(d) {
				B(d, "sp", "pae")
			}
		};
		var sc = function (a, b) {
				var c = M(a);
				c && (c.style.backgroundImage = "//ssl.gstatic.com/gb/images/s_513818bc.png", c.style.display = "none");
				var d = M(b);
				d && (c.style.backgroundImage = "//ssl.gstatic.com/gb/images/s_513818bc.png", d.style.display = "", d.style.backgroundImage = "url(//ssl.gstatic.com/gb/images/s_513818bc.png)")
			};
		R.prototype.V = function () {
			try {
				if(!this.ka) {
					this.ka = k;
					var a = M("gbmpi");
					a && this.T && (a.src = this.T)
				}
			} catch(b) {
				B(b, "sp", "swp")
			}
		};
		R.prototype.pa = function () {
			try {
				if(!this.na) {
					this.na = k;
					var a = rc();
					if(a) for(var b = 0, c; c = a[b]; ++b) if(c) {
						var d = gb("gbmpia", c)[0];
						d.setAttribute("src", d.getAttribute("data-asrc"));
						Ub(c, "gbxv")
					}
				}
			} catch(e) {
				B(e, "sp", "sap")
			}
		};
		R.prototype.Ua = function (a) {
			try {
				var b = M("gbi4t");
				nc(M("gbmpn")) == this.B || oc(a);
				nc(b) != this.B && (bc(b), b.appendChild(document.createTextNode(a)))
			} catch(c) {
				B(c, "sp", "spn")
			}
		};
		var nc = function (a) {
				return a.firstChild && a.firstChild.nodeValue ? a.firstChild.nodeValue : ""
			};
		n = R.prototype;
		n.Va = function (a) {
			try {
				this.ja = a;
				var b = M("gbmpi");
				if(b) {
					var c = a(b.height);
					c && (this.T = b.src = c)
				}
				var d = M("gbi4i");
				if(d) {
					var e = a(d.height);
					e && (d.src = e)
				}
			} catch(f) {
				B(f, "sp", "spp")
			}
		};
		n.Wa = function (a) {
			try {
				if(this.Ka) {
					var b = M("gbi4i"),
						c = M("gbi4ip");
					b && c && (b.width = b.height = c.width = c.height = a, "none" != b.style.display && (c.src = b.src, c.style.display = "", b.onload = R.prototype.Db, b.src = this.ja(a)))
				}
			} catch(d) {
				B(d, "sp", "sps")
			}
		};
		n.Db = function () {
			var a = M("gbi4i");
			a.onload = l;
			a.style.display = "";
			M("gbi4ip").style.display = "none"
		};
		n.Xa = function () {
			try {
				var a = M("gbg4");
				this.V();
				Eb(l, a, k, k)
			} catch(b) {
				B(b, "sp", "sd")
			}
		};
		n.Ra = function () {
			try {
				var a = M("gbmpas");
				if(a) {
					var b = lc.j("Height"),
						c = M("gbd4"),
						d = new y;
					if(1 == c.nodeType) {
						if(dc(c)) {
							var e = ec(c);
							d.x = e.left;
							d.y = e.top
						} else {
							var f = sb(eb(c)),
								g = gc(c);
							d.x = g.x - f.x;
							d.y = g.y - f.y
						}
						if(Fa && !Sa(12)) {
							var h = d,
								j;
							var o;
							z ? o = "-ms-transform" : A ? o = "-webkit-transform" : Ea ? o = "-o-transform" : Fa && (o = "-moz-transform");
							var r;
							o && (r = Q(c, o));
							r || (r = Q(c, "transform"));
							if(r) {
								var t = r.match(kc);
								j = !t ? new y(0, 0) : new y(parseFloat(t[1]), parseFloat(t[2]))
							} else j = new y(0, 0);
							d = new y(h.x + j.x, h.y + j.y)
						}
					} else h = "function" == s(c.ta), j = c, c.targetTouches ? j = c.targetTouches[0] : h && c.ta().targetTouches && (j = c.ta().targetTouches[0]), d.x = j.clientX, d.y = j.clientY;
					var x = d.y,
						C = ic(c).height,
						b = x + C - (b - 20),
						D = ic(a).height,
						E = Math.min(D - b, this.Ja);
					a.style.maxHeight = Math.max(74, E) + "px";
					cc(c);
					this.b.k()
				}
			} catch(F) {
				B(F, "sp", "rac")
			}
		};
		I("prf", {
			init: function (a) {
				new R(a)
			}
		});
		var tc = function () {};
		(function (a) {
			a.Hb = function () {
				a.Ib || (a.Ib = new a)
			}
		})(tc);
		var Bc = l;
		I("il", {
			init: function () {
				tc.Hb();
				var a;
				if(!Bc) {
					a: {
						a = ["gbar", "logger"];
						for(var b = p, c; c = a.shift();) if(b[c] != l) b = b[c];
						else {
							a = l;
							break a
						}
						a = b
					}
					Bc = a || {}
				}
				a = Bc;
				"function" == s(a.il) && a.il(8, i)
			}
		});
		var Fc = function (a, b) {
				if(window.gbar.logger._itl(b)) return b;
				var c = a.stack;
				if(c) {
					for(var c = c.replace(/\s*$/, "").split("\n"), d = [], e = 0; e < c.length; e++) d.push(Cc(c[e]));
					c = d
				} else c = Dc();
				for(var d = c, e = 0, f = d.length - 1, g = 0; g <= f; g++) if(d[g] && 0 <= d[g].name.indexOf("_mlToken")) {
					e = g + 1;
					break
				}
				0 == e && f--;
				c = [];
				for(g = e; g <= f; g++) d[g] && !(0 <= d[g].name.indexOf("_onErrorToken")) && c.push("> " + Ec(d[g]));
				d = [b, "&jsst=", c.join("")];
				e = d.join("");
				if(!window.gbar.logger._itl(e) || 2 < c.length && (d[2] = c[0] + "..." + c[c.length - 1], e = d.join(""), !window.gbar.logger._itl(e))) return e;
				return b
			};
		I("er", {
			init: function () {
				window.gbar.logger._aem = Fc
			}
		});
		var Cc = function (a) {
				var b = a.match(Gc);
				return b ? new Hc(b[1] || "", b[2] || "", b[3] || "", "", b[4] || b[5] || "") : (b = a.match(Ic)) ? new Hc("", b[1] || "", "", b[2] || "", b[3] || "") : l
			},
			Gc = RegExp("^ at(?: (?:(.*?)\\.)?((?:new )?(?:[a-zA-Z_$][\\w$]*|<anonymous>))(?: \\[as ([a-zA-Z_$][\\w$]*)\\])?)? (?:\\(unknown source\\)|\\(native\\)|\\((?:eval at )?((?:http|https|file)://[^\\s)]+|javascript:.*)\\)|((?:http|https|file)://[^\\s)]+|javascript:.*))$"),
			Ic = /^([a-zA-Z_$][\w$]*)?(\(.*\))?@(?::0|((?:http|https|file):\/\/[^\s)]+|javascript:.*))$/,
			Dc = function () {
				for(var a = [], b = arguments.callee.caller, c = 0; b && 20 > c;) {
					var d;
					d = (d = Function.prototype.toString.call(b).match(Jc)) ? d[1] : "";
					var e = b,
						f = ["("];
					if(e.arguments) for(var g = 0; g < e.arguments.length; g++) {
						var h = e.arguments[g];
						0 < g && f.push(", ");
						"string" == typeof h ? f.push('"', h, '"') : f.push("" + h)
					} else f.push("unknown");
					f.push(")");
					a.push(new Hc("", d, "", f.join(""), ""));
					try {
						if(b == b.caller) break;
						b = b.caller
					} catch(j) {
						break
					}
					c++
				}
				return a
			},
			Jc = /^function ([a-zA-Z_$][\w$]*)/,
			Hc = function (a, b, c, d, e) {
				this.za = a;
				this.name = b;
				this.ya = c;
				this.rb = d;
				this.G = e
			},
			Ec = function (a) {
				var b = [a.za ? a.za + "." : "", a.name ? a.name : "anonymous", a.rb, a.ya ? " [as " + a.ya + "]" : ""];
				a.G && (b.push(" at "), b.push(a.G));
				a = b.join("");
				for(b = window.location.href.replace(/#.*/, ""); 0 <= a.indexOf(b);) a = a.replace(b, "[page]");
				return a = a.replace(/http.*?extern_js.*?\.js/g, "[xjs]")
			};
		var Kc = function (a) {
				this.r = a
			},
			Lc = /\s*;\s*/;
		Kc.prototype.isEnabled = function () {
			return navigator.cookieEnabled
		};
		Kc.prototype.set = function (a, b, c, d, e, f) {
			if(/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
			if(/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
			aa(c) || (c = -1);
			e = e ? ";domain=" + e : "";
			d = d ? ";path=" + d : "";
			f = f ? ";secure" : "";
			c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(ga() + 1E3 * c)).toUTCString();
			this.r.cookie = a + "=" + b + e + d + c + f
		};
		Kc.prototype.get = function (a, b) {
			for(var c = a + "=", d = (this.r.cookie || "").split(Lc), e = 0, f; f = d[e]; e++) {
				if(0 == f.indexOf(c)) return f.substr(c.length);
				if(f == a) return ""
			}
			return b
		};
		Kc.prototype.remove = function (a, b, c) {
			var d = aa(this.get(a));
			this.set(a, "", 0, b, c);
			return d
		};
		var Mc = new Kc(document);
		Mc.Ub = 3950;
		var Oc = function (a) {
				this.A = {};
				lc.g = v(this.ob, this);
				lc.h = v(this.nb, this);
				for(var b = this.A, a = a.p.split(":"), c = 0, d; d = a[c]; ++c) if(d = d.split(","), 5 == d.length) {
					var e = {};
					e.id = d[0];
					e.key = d[1];
					e.ba = d[2];
					e.Mb = lc.c(d[3], 0);
					e.Nb = lc.c(d[4], 0);
					b[e.ba] = e
				}
				for(var f in this.A) if(this.A.hasOwnProperty(f) && (b = this.A[f], -1 == Mc.get("OGP", "").indexOf("-" + b.key))) {
					if(a = Nc[b.ba])(a = document.getElementById(a)) && H.ca(a, "gbto");
					H.logger.il(36, {
						pr: b.id
					})
				}
			},
			Nc = {
				7: "gbprc"
			};
		Oc.prototype.ob = function (a) {
			if(a = this.A[a]) Pc(a), H.logger.il(37, {
				pr: a.id
			})
		};
		Oc.prototype.nb = function (a) {
			if(a = this.A[a]) Pc(a), H.logger.il(38, {
				pr: a.id
			})
		};
		var Pc = function (a) {
				var b = Nc[a.ba];
				b && (b = document.getElementById(b)) && H.cr(b, "gbto");
				b = a.key;
				(a = Mc.get("OGP", "")) && (a += ":");
				for(var a = a + ("-" + b), c; 50 < a.length && -1 != (c = a.indexOf(":"));) a = a.substring(c + 1);
				c = window.location.hostname;
				b = c.indexOf(".google.");
				c = 0 < b ? c.substring(b) : i;
				50 >= a.length && c && Mc.set("OGP", a, 2592E3, "/", c)
			};
		I("pm", {
			init: function (a) {
				new Oc(a)
			}
		});
		var Qc = function (a) {
				this.v = a;
				this.a = 0;
				this.F = m;
				this.Za = k;
				this.C = this.w = l
			},
			V = function (a) {
				return 5 == a.a || 4 == a.a
			};
		Qc.prototype.isEnabled = function () {
			return this.Za
		};
		var Rc = function (a, b) {
				var c = b || {},
					d = v(a.$a, a);
				c.fc = d;
				d = v(a.gb, a);
				c.rc = d;
				d = v(a.hb, a);
				c.sc = d;
				d = v(a.X, a);
				c.hc = d;
				d = v(a.W, a);
				c.cc = d;
				d = v(a.fb, a);
				c.os = d;
				d = v(a.Z, a);
				c.or = d;
				d = v(a.cb, a);
				c.oh = d;
				d = v(a.ab, a);
				c.oc = d;
				d = v(a.bb, a);
				c.oe = d;
				d = v(a.eb, a);
				c.oi = d;
				return c
			};
		var Sc = function (a, b, c) {
				this.D = a || {};
				this.Y = b || 0;
				this.Ya = c || 0;
				this.tb = Rc(this)
			};
		n = Sc.prototype;
		n.gb = function (a, b, c) {
			try {
				a += b != l ? "_" + b : "", c.sm(this.tb, a), this.D[a] = new Qc(c)
			} catch(d) {
				return m
			}
			return k
		};
		n.$a = function (a, b) {
			var c = this.D[a + (b != l ? "_" + b : "")];
			return c ? c.v : l
		};
		n.hb = function (a) {
			var b = W(this, a);
			if(b && (2 == b.a || 3 == b.a) && b.isEnabled() && !b.F) {
				try {
					a.sh()
				} catch(c) {
					Tc(c, "am", "shc")
				}
				b.F = k
			}
		};
		n.X = function (a) {
			var b = W(this, a);
			if(b && (2 == b.a || 3 == b.a || V(b)) && b.F) {
				try {
					a.hi()
				} catch(c) {
					Tc(c, "am", "hic")
				}
				b.F = m
			}
		};
		n.W = function (a) {
			var b = W(this, a);
			if(b && 5 != b.a) {
				try {
					this.X(a), a.cl()
				} catch(c) {
					Tc(c, "am", "clc")
				}
				this.M(b)
			}
		};
		n.fb = function (a) {
			if((a = W(this, a)) && 0 == a.a) Uc(this, a), a.a = 1
		};
		var Uc = function (a, b) {
				if(a.Y) {
					var c = setTimeout(v(function () {
						V(b) || (Vc(b, 6), Wc(this, b))
					}, a), a.Y);
					b.C = c
				} else Wc(a, b)
			},
			Wc = function (a, b) {
				var c = a.Ya - a.Y;
				0 < c && (c = setTimeout(v(function () {
					V(b) || (Vc(b, 7), b.a = 4, this.W(b.v))
				}, a), c), b.C = c)
			},
			Xc = function (a) {
				a.C != l && (clearTimeout(a.C), a.C = l)
			};
		n = Sc.prototype;
		n.Z = function (a) {
			if((a = W(this, a)) && !V(a)) Vc(a, 5), 1 == a.a && (Xc(a), a.a = 3)
		};
		n.cb = function (a) {
			if((a = W(this, a)) && !V(a)) a.F = m
		};
		n.ab = function (a) {
			var b = W(this, a);
			if(b && !V(b)) {
				try {
					this.X(a)
				} catch(c) {
					Tc(c, "am", "oc")
				}
				this.M(b)
			}
		};
		n.bb = function (a, b, c, d, e, f) {
			if((a = W(this, a)) && !V(a)) Tc(c, d, e, a, b, f), a.a = 4, this.W(a.v)
		};
		n.eb = function (a, b, c, d) {
			if((a = W(this, a)) && !V(a)) Vc(a, b, c, d), 2 <= b && 4 >= b && !V(a) && (Xc(a), a.a = 2)
		};
		n.M = function (a) {
			Xc(a);
			a.a = 5;
			var b = this.D,
				c;
			for(c in b) b[c] == a && delete b[c]
		};
		var W = function (a, b) {
				return a.D[b.n]
			};
		var Yc, Zc, $c, ad, bd = function (a, b, c) {
				Sc.call(this, a, b, c)
			};
		(function () {
			function a() {}
			a.prototype = Sc.prototype;
			bd.xa = Sc.prototype;
			bd.prototype = new a
		})();
		var Tc = function (a, b, c, d, e, f) {
				f = f || {};
				d && (f._wg = d.v.n);
				e !== i && -1 != e && (f._c = e);
				B(a, b, c, f)
			},
			Vc = function (a, b, c, d) {
				d = d || {};
				d._wg = a.v.n;
				d._c = b;
				c && (d._m = c);
				H.logger.il(25, d)
			};
		bd.prototype.Z = function (a, b) {
			bd.xa.Z.call(this, a, b);
			H.wg.owrd && H.wg.owrd(a)
		};
		bd.prototype.M = function (a) {
			bd.xa.M.call(this, a);
			var b = this.D,
				c;
			for(c in b) b[c] == a && H.wg.owcl && H.wg.owcl(a)
		};
		I("wg", {
			init: function (a) {
				Yc = new bd(H.wg.rg, a.tiw, a.tie);
				Rc(Yc, H.wg)
			}
		});
		var cd = ["xec", "clkc", "xc"],
			dd = function () {
				this.f = this.O = l
			},
			ed = function (a, b, c) {
				var d = a.f[b],
					a = a.O[b];
				d != l && a != l && c.push([b, "~", d - a].join(""))
			},
			fd = function (a, b) {
				var c;
				if(b) {
					c = new dd;
					c.O = {};
					var d = c.O;
					d.t = (new Date).getTime();
					for(var e = 0, f; f = cd[e]; ++e) d[f] = 0
				} else c = l;
				a.w = c
			},
			gd = function (a) {
				return 3 == a.a && !! a.w
			},
			hd = 0,
			id = l,
			jd = 0,
			kd = 0,
			ld = m,
			md = function (a, b) {
				ld || (id == l && 1E3 <= b ? (jd = (new Date).getTime(), id = setTimeout(function () {
					id = l;
					0 < kd && (new Date).getTime() - jd < b * kd && (ld = k);
					a()
				}, b)) : B(Error(""), "wm", "shmt"))
			},
			nd = function () {
				id != l && (clearTimeout(id), id = l)
			},
			od = m,
			qd = function () {
				try {
					var a = [],
						b = H.wg.rg,
						c;
					for(c in b) {
						var d = b[c];
						if(gd(d)) {
							var e = d.w,
								f = "";
							if(e.f != l) {
								var g = [];
								ed(e, "t", g);
								for(var h = 0, j; j = cd[h]; ++h) ed(e, j, g);
								f = g.join(",")
							} else f = "_h~0";
							a.push([c, "~{", f, "}"].join(""));
							f = e;
							f.f && (f.O = f.f, f.f = l)
						}
					}
					if(0 < a.length) {
						var o = {
							ogw: a.join(","),
							_cn: hd++
						};
						ld && (o._tmfault = "1");
						H.logger.il(26, o)
					}
					od = m;
					pd()
				} catch(r) {
					B(r, "wm", "shr")
				}
			},
			rd = function (a, b) {
				try {
					a.f = {};
					var c = a.f;
					c.t = (new Date).getTime();
					for(var d = 0, e; e = cd[d]; ++d) c[e] = b[e];
					var c = k,
						f = H.wg.rg,
						g;
					for(g in f) {
						var h = f[g];
						if(gd(h) && !h.w.f) {
							c = m;
							break
						}
					}
					c && (nd(), qd())
				} catch(j) {
					B(j, "wm", "ovr")
				}
			},
			sd = function () {
				try {
					var a = H.wg.rg,
						b;
					for(b in a) {
						var c = a[b];
						gd(c) && c.v.vr("base", fa(rd, c.w))
					}
					od = k;
					md(qd, Zc)
				} catch(d) {
					B(d, "wm", "dhc")
				}
			},
			pd = function () {
				if((0 < $c || 0 < ad) && !od) {
					nd();
					var a = 0,
						b = m,
						c = H.wg.rg,
						d;
					for(d in c) {
						var e = c[d];
						gd(e) ? ++a : 3 == e.a && (fd(e, k), b = k, ++a)
					}
					0 < a && (a = b && 0 < $c ? $c : ad, 0 < a && md(sd, a))
				}
			},
			td = function () {
				pd()
			},
			ud = function (a) {
				gd(a) && (!od || !a.w.f) && fd(a, m)
			};
		I("wm", {
			init: function (a) {
				$c = a.thi || 0;
				ad = a.thp || 0;
				Zc = a.tho || 0;
				kd = a.tet || 0;
				H.wg.owrd = td;
				H.wg.owcl = ud;
				pd()
			}
		});
		var vd = function () {
				this.Ca = m;
				this.Ca || (L(window, "resize", v(this.Fb, this), k), this.Ca = k)
			};
		vd.prototype.R = 0;
		vd.prototype.Eb = function () {
			H.elg();
			this.R = 0
		};
		vd.prototype.Fb = function () {
			H.elg();
			this.R && window.clearTimeout(this.R);
			this.R = window.setTimeout(v(this.Eb, this), 1500)
		};
		I("el", {
			init: function () {
				new vd
			}
		});
		var wd = function () {
				this.wa = m;
				if(!H.sg.c) {
					var a = document.getElementById("gbqfq"),
						b = document.getElementById("gbqfqwb"),
						c = document.getElementById("gbqfqw");
					if(!this.wa) {
						a && b && (L(a, "focus", v(this.P, this, c)), L(a, "blur", v(this.ea, this, c)), L(b, "click", v(this.da, this, a)));
						var a = document.getElementById("gbqfqb"),
							b = document.getElementById("gbqfwd"),
							c = document.getElementById("gbqfwc"),
							d = document.getElementById("gbqfqc"),
							e = document.getElementById("gbqfwf"),
							f = document.getElementById("gbqfwe");
						a && b && d && e && (L(a, "focus", v(this.P, this, c)), L(a, "blur", v(this.ea, this, c)), L(b, "click", v(this.da, this, a)), L(d, "focus", v(this.P, this, f)), L(d, "blur", v(this.ea, this, f)), L(e, "click", v(this.da, this, d)));
						this.wa = k
					}
					a = document.getElementById("gbqfqw");
					document.activeElement == document.getElementById("gbqfq") && this.P(a)
				}
				a = v(this.pb, this);
				q("gbar.qfhi", a, i)
			};
		wd.prototype.P = function (a) {
			try {
				a && Xb(a, "gbqfqwf")
			} catch(b) {
				B(b, "sf", "stf")
			}
		};
		wd.prototype.ea = function (a) {
			try {
				a && Ub(a, "gbqfqwf")
			} catch(b) {
				B(b, "sf", "stb")
			}
		};
		wd.prototype.da = function (a) {
			try {
				a && a.focus()
			} catch(b) {
				B(b, "sf", "sf")
			}
		};
		wd.prototype.pb = function (a) {
			var b = document.getElementById("gbqffd");
			if(b && (b.innerHTML = "", a)) for(var c in a) {
				var d = document.createElement("input");
				d.name = c;
				d.value = a[c];
				d.type = "hidden";
				b.appendChild(d)
			}
		};
		I("sf", {
			init: function () {
				new wd
			}
		});
		var xd, yd, Bd = function () {
				zd();
				Ad(k);
				setTimeout(function () {
					document.getElementById("gbbbc").style.display = "none"
				}, 1E3);
				xd = i
			},
			Cd = function (a) {
				for(var b = a[0], c = [], d = 1; 3 >= d; d++) {
					var e;
					e = (e = /^(.*?)\$(\d)\$(.*)$/.exec(b)) ? {
						index: parseInt(e[2], 10),
						Da: e[1],
						Gb: e[3]
					} : l;
					if(!e) break;
					if(3 < e.index) throw Error();
					e.Da && c.push(e.Da);
					c.push(lb("A", {
						href: "#gbbb" + e.index
					}, a[e.index]));
					b = e.Gb
				}
				b && c.push(b);
				for(a = document.getElementById("gbbbc"); b = a.firstChild;) a.removeChild(b);
				nb(a, c)
			},
			Dd = function (a) {
				var b = a.target || a.srcElement;
				3 == b.nodeType && (b = b.parentNode);
				if(b = b.hash) b = parseInt(b.charAt(b.length - 1), 10), xd && xd(b), a.preventDefault && a.preventDefault(), a.returnValue = m, a.cancelBubble = k
			},
			zd = function () {
				yd && (clearTimeout(yd), yd = i)
			},
			Ad = function (a) {
				var b = document.getElementById("gbbbb").style;
				a ? (b.WebkitTransition = "opacity 1s, -webkit-transform 0 linear 1s", b.MozTransition = "opacity 1s, -moz-transform 0s linear 1s", b.OTransition = "opacity 1s, -o-transform 0 linear 1s", b.Ea = "opacity 1s, transform 0 linear 1s") : (b.WebkitTransition = b.MozTransition = b.Ea = "", b.OTransition = "all 0s");
				b.opacity = "0";
				b.filter = "alpha(opacity=0)";
				b.WebkitTransform = b.MozTransform = b.OTransform = b.transform = "scale(.2)"
			},
			Ed = function () {
				var a = document.getElementById("gbbbb").style;
				a.WebkitTransition = a.MozTransition = a.OTransition = a.Ea = "all 0.218s";
				a.opacity = "1";
				a.filter = "alpha(opacity=100)";
				a.WebkitTransform = a.MozTransform = a.OTransform = a.transform = "scale(1)"
			};
		q("gbar.bbs", function (a, b, c) {
			try {
				document.getElementById("gbbbc").style.display = "inline", Cd(a), xd = b, zd(), Ad(m), setTimeout(Ed, 0), 0 < c && (yd = setTimeout(Bd, 1E3 * c))
			} catch(d) {
				B(d, "bb", "s")
			}
		}, i);
		q("gbar.bbr", function (a, b, c) {
			try {
				Cd(a), xd = b || xd, c && (zd(), 0 < c && (yd = setTimeout(Bd, 1E3 * c)))
			} catch(d) {
				B(d, "bb", "r")
			}
		}, i);
		q("gbar.bbh", Bd, i);
		I("bub", {
			init: function () {
				var a = document.getElementById("gbbbb").style;
				a.WebkitBorderRadius = a.MozBorderRadius = a.Pb = "2px";
				a.WebkitBoxShadow = a.Ob = a.Qb = "0px 2px 4px rgba(0,0,0,0.2)";
				Ad(m);
				a.display = "inline-block";
				L(document.getElementById("gbbbc"), "click", Dd)
			}
		});
		var Fd = function (a) {
				this.qa = M("gbd");
				this.z = M("gbmmb");
				this.L = M("gbmm");
				a.s && this.qa && this.L && this.z && (this.b = new mc(this.z, this.L), H.adh("gbd", v(this.ib, this)))
			};
		Fd.prototype.ib = function () {
			try {
				var a = lc.j("Height"),
					b = gc(this.L).y;
				this.L.style.maxHeight = a - 2 * b + "px";
				cc(this.qa);
				this.b.k()
			} catch(c) {
				B(c, "mm", "oo")
			}
		};
		I("mm", {
			init: function (a) {
				new Fd(a)
			}
		});
		var Gd = function () {
				var a = v(this.Jb, this);
				q("gbar.tsl", a, i);
				a = v(this.Kb, this);
				q("gbar.tst", a, i)
			},
			Hd = ["gbx1", "gbi4t", "gbgs4d"];
		Gd.prototype.Jb = function (a, b, c, d) {
			try {
				var e = document.getElementById("gbqld");
				if(e) e.src = a, b && (e.alt = b), c && (e.width = c), d && (e.height = d);
				else {
					var f = document.getElementById("gbqlw");
					if(f) {
						bc(f);
						var g = lb("img", {
							id: "gbqld",
							src: a,
							"class": "gbqldr"
						});
						b && (g.alt = b);
						c && (g.width = c);
						d && (g.height = d);
						f.appendChild(g)
					}
				}
			} catch(h) {
				B(h, "t", "tsl")
			}
		};
		Gd.prototype.Kb = function (a) {
			try {
				var b = "",
					c = "";
				switch(a) {
				case "default":
					b = "gbthc";
					c = ["gbtha", "gbthb"];
					break;
				case "light":
					b = "gbtha";
					c = ["gbthc", "gbthb"];
					break;
				case "dark":
					b = "gbthb";
					c = ["gbthc", "gbtha"];
					break;
				default:
					return
				}
				for(a = 0; a < Hd.length; a++) {
					var d = document.getElementById(Hd[a]);
					if(d) {
						var e = d,
							f = c,
							g = b,
							h = Ya(e);
						if(u(f)) {
							var j = h,
								o = na(j, f);
							0 <= o && w.splice.call(j, o, 1)
						} else "array" == s(f) && (h = ab(h, f));
						u(g) && !(0 <= na(h, g)) ? h.push(g) : "array" == s(g) && Za(h, g);
						e.className = h.join(" ")
					}
				}
			} catch(r) {
				B(r, "t", "tst")
			}
		};
		I("t", {
			init: function () {
				new Gd
			}
		});
		var Id = {
			va: "v4_img_dt",
			ua: "v4.ipv6-exp.l.google.com"
		},
			Jd = {
				va: "ds_img_dt",
				ua: "ds.ipv6-exp.l.google.com"
			},
			Kd = function () {},
			Ld = function (a, b) {
				function c(a) {
					e != l && (d = Math.abs(new Date - e), (a || m) && (d *= -1))
				}
				var d = -1,
					e = l;
				this.kb = function () {
					var b = new Image(0, 0);
					b.onload = function () {
						c()
					};
					b.onerror = b.onabort = function () {
						c(k)
					};
					e = new Date;
					b.src = a
				};
				this.sa = function () {
					return b
				};
				this.lb = function () {
					return d
				};
				this.jb = function () {
					return [b, d].join("=")
				}
			},
			Md = function (a, b, c) {
				this.Q = "" + a;
				"p" != this.Q.charAt(0) && (this.Q = "p" + this.Q);
				this.sb = b;
				this.qb = c;
				this.fa = Math.floor(9E5 * Math.random());
				this.fa += 1E5;
				this.ra = function () {
					return [this.Q, this.sb, this.qb, this.fa].join(".")
				}
			},
			Nd = function (a) {
				for(var b = ["i1", "i2"], c = [], c = 0.5 <= Math.random() ? [Jd, Id] : [Id, Jd], d = [], e = 0; e < b.length; e++) {
					var f = new Ld(["//", [a.ra(), b[e], c[e].ua].join("."), "http://www.google.com/intl/en_ALL/ipv6/images/6.gif"].join(""), c[e].va);
					f.kb();
					d.push(f)
				}
				setTimeout(function () {
					for(var b = ["/gen_204?ipv6exp=3", "sentinel=1"], c = {
						mb: []
					}, e = 0; e < d.length; e++) b.push(d[e].jb()), c[d[e].sa()] = d[e].lb(), c.mb.push(d[e].sa());
					b = ["//", [a.ra(), "s1.v4.ipv6-exp.l.google.com"].join("."), b.join("&")].join("");
					(new Image(0, 0)).src = b;
					try {
						Kd(c)
					} catch(f) {}
				}, 3E4)
			},
			Rd = function () {
				var a = Od[0],
					b = Od[1],
					c = Od[2];
				if("https:" != document.location.protocol) {
					var d = new Md(a, b, c);
					setTimeout(function () {
						Nd(d)
					}, 1E4)
				}
			};
		var Sd = function () {
				var a = ["google", "youtube"],
					b = document.location.hostname ? document.location.hostname : "";
				if(!b) return "google.com";
				for(var b = b.toLowerCase(), c = b.split("."), d = 0; d < a.length; d++) for(var e = c.length - 1; 0 <= e; e--) if(c[e] == a[d]) return c.slice(e).join(".");
				return b
			};
		var Td = function (a) {
				this.Aa = a;
				this.G = "/"
			},
			Ud = {
				name: "OGPERM",
				zb: 31536E3
			},
			Vd = function (a, b) {
				var c = decodeURIComponent(Mc.get(Ud.name, "") || ""),
					d = RegExp("((?:^|;)" + b + "=)(.*?)((?:$|;))"),
					e;
				c.match(d) && (e = c.replace(d, "$3"), ";" == e.charAt(0) && (e = e.slice(1)));
				e ? Mc.set(Ud.name, encodeURIComponent(e), Ud.zb, a.G, a.Aa) : Mc.remove(Ud.name, a.G, a.Aa)
			};
		Kd = function () {
			var a = "." + Sd(),
				a = new Td(a);
			Vd(a, "W6");
			Vd(a, "W6P")
		};
		a: if(H && H.v6b) {
			for(var Wd = ["p", "rnd", "hmac"], Xd = 0; Xd < Wd.length; Xd++) if(!H.v6b[Wd[Xd]]) break a;
			var Yd = H.v6b.p + "-" + H.v6b.rnd + "-" + H.v6b.hmac + "-if-v6exp3-v4.metric.gstatic.com";
			try {
				var Zd = Yd || window.location.hostname,
					Od = [],
					$d = Zd.indexOf(".metric.");
				(Od = -1 < $d ? Zd.substring(0, $d).split("-") : Zd.split(".")) && 3 <= Od.length && Rd()
			} catch(ae) {
				H.logger.ml(ae)
			}
		};
		var be = window,
			ce = document,
			de = be.location,
			ee = function () {},
			fe = /\[native code\]/,
			X = function (a, b, c) {
				return a[b] = a[b] || c
			},
			ge = function (a) {
				for(var b = 0; b < this.length; b++) if(this[b] === a) return b;
				return -1
			},
			he = function (a) {
				for(var a = a.sort(), b = [], c = i, d = 0; d < a.length; d++) {
					var e = a[d];
					e != c && b.push(e);
					c = e
				}
				return b
			},
			ie = function () {
				var a;
				if((a = Object.create) && fe.test(a)) a = a(l);
				else {
					a = {};
					for(var b in a) a[b] = i
				}
				return a
			},
			je = function (a, b) {
				for(var c = 0; c < b.length && a; c++) a = a[b[c]];
				return a
			},
			Y = X(be, "gapi", {});
		var ke = function (a, b, c) {
				if(a = a && RegExp("([?#].*&|[?#])" + b + "=([^&#]*)", "g").exec(a)) try {
					c = decodeURIComponent(a[2])
				} catch(d) {}
				return c
			};
		var Z;
		Z = X(be, "___jsl", ie());
		X(Z, "I", 0);
		var le = function (a) {
				return X(X(Z, "H", ie()), a, ie())
			},
			me = function (a) {
				var b = X(Z, "us", []);
				b.push(a);
				var c = /^https:(.*)$/.exec(a);
				c && b.push("http:" + c[1]);
				X(Z, "u", a)
			};
		var ne = ie(),
			oe = [],
			$;
		$ = {
			Ba: "callback",
			Cb: "sync",
			Ab: "config",
			ga: "_c",
			Bb: "h",
			Vb: "platform",
			Tb: "ds",
			ha: "jsl"
		};
		oe.push([$.ha, function (a) {
			for(var b in a) if(Object.prototype.hasOwnProperty.call(a, b)) {
				var c = a[b];
				"object" == typeof c ? Z[b] = X(Z, b, []).concat(c) : X(Z, b, c)
			}(a = a.u) && me(a)
		}]);
		ne.m = function (a) {
			var b = Z.ms || "https://apis.google.com",
				a = a[0];
			if(!a || 0 <= a.indexOf("..")) throw "Bad hint";
			return b + a
		};
		var pe = function (a) {
				return a.join(",").replace(/\./g, "_").replace(/-/g, "_")
			},
			qe = function (a, b) {
				for(var c = [], d = 0; d < a.length; ++d) {
					var e = a[d];
					e && 0 > ge.call(b, e) && c.push(e)
				}
				return c
			},
			re = function () {
				var a = ke(de.href, "jsh", Z.h);
				if(!a) throw "Bad hint";
				return a
			},
			se = function (a) {
				var b = a.split(";"),
					c = ne[b.shift()],
					b = c && c(b);
				if(!b) throw "Bad hint:" + a;
				return b
			},
			ue = function (a) {
				"loading" != ce.readyState ? te(a) : ce.write(['<script src="', a, '"><\/script>'].join(""))
			},
			te = function (a) {
				var b = ce.createElement("script");
				b.setAttribute("src", a);
				b.async = "true";
				a = ce.getElementsByTagName("script")[0];
				a.parentNode.insertBefore(b, a)
			},
			ve = function (a, b) {
				var c = b && b[$.ga];
				if(c) for(var d = 0; d < oe.length; d++) {
					var e = oe[d][0],
						f = oe[d][1];
					f && Object.prototype.hasOwnProperty.call(c, e) && f(c[e], a, b)
				}
			},
			we = i;
		Y.load = function (a, b) {
			var c = b || {};
			"function" == typeof b && (c = {}, c[$.Ba] = b);
			if(!we || !we(c)) {
				ve(a, c);
				var d = c[$.Bb] || re(),
					e = c[$.Ba],
					f = c[$.Ab],
					g = X(le(d), "r", []).sort(),
					h = X(le(d), "L", []).sort(),
					j = function (a) {
						h.push.apply(h, r);
						var b = ((Y || {}).config || {}).update;
						b ? b(f) : f && X(Z, "cu", []).push(f);
						a && (b = d === ke(de.href, "jsh", Z.h) ? X(Y, "_", ie()) : ie(), b = X(le(d), "_", b), a(b));
						e && e();
						return 1
					},
					o = a ? he(a.split(":")) : [],
					r = qe(o, h);
				if(!r.length) return j();
				var r = qe(o, g),
					t = Z.I++,
					x = "loaded_" + t;
				Y[x] = function (a) {
					if(!a) return 0;
					var b = function () {
							Y[x] = l;
							return j(a)
						};
					if(Y["loaded_" + (t - 1)]) Y[x] = b;
					else for(b();
					(b = Y["loaded_" + ++t]) && b(););
				};
				if(!r.length) return Y[x](ee);
				o = se(d);
				o = o.replace("__features__", pe(r)).replace(/\/$/, "") + (g.length ? "/ed=1/exm=" + pe(g) : "") + ("/cb=gapi." + x);
				g.push.apply(g, r);
				c[$.Cb] || be.___gapisync ? ue(o) : te(o)
			}
		};
		var xe = function (a, b) {
				var c = a.replace(/\:\d+$/, "").replace(/^https?\:\/\//, "");
				if(b) {
					if(!/^[0-9a-zA-Z.-]+$/.test(c)) return m;
					for(var d = b.split(","), e = 0, f = d.length; e < f; ++e) {
						var g = d[e],
							h = c.lastIndexOf(g);
						if((0 == h || "." == g.charAt(0) || "." == c.charAt(h - 1)) && c.length - g.length == h) return k
					}
				}
				return m
			};
		ne.n = function (a) {
			if(2 == a.length) {
				var b = a[0].replace(/\/$/, "");
				if(xe(b, Z.m)) return b + a[1]
			}
		};
		var ye = /([^\/]*\/\/[^\/]*)(\/js\/.*)$/,
			we = function (a) {
				var b = je(a, [$.ga, $.ha, "u"]),
					c = ye.exec(b);
				if(!b || !c) return m;
				var d = c[1],
					c = c[2],
					e = ke(b, "nr"),
					f = ke(be.location.href, "_bsh"),
					a = je(a, [$.ga, $.ha, "m"]);
				if(f && (!a || !xe(f, a))) throw "Bad hint";
				if(e == i && f && f != d) return d = f + c + (0 <= c.indexOf("?") ? "&" : "?") + "nr=" + encodeURIComponent(b), a = ce.getElementsByTagName("script"), a = a[a.length - 1].src, (b && b.replace(/^.*:/, "")) == (a && a.replace(/^.*:/, "")) ? ue(d) : te(d), k;
				/^http/.test(e) && me(e);
				return m
			};
		var ze = function (a) {
				var b = window.gapi.load;
				q("dgl", b, H);
				try {
					var c = {
						isPlusUser: a.isPlusUser || a.pu
					},
						d = a.socialhost || a.sh;
					d && (c.iframes = {
						":socialhost:": d
					});
					b && b("", {
						config: c
					})
				} catch(e) {
					B(e, "gl", "init")
				}
			};
		lc.o && I("gl", {
			init: ze
		});
		yb(vb.Lb);
		(function () {
			yb(vb.wb);
			var a, b;
			for(a = 0;
			(b = H.bnc[a]) && !("m" == b[0]); ++a);
			b && !b[1].l && (a = function () {
				for(var a = H.mdc, d = H.mdi || {}, e = 0, f; f = wb[e]; ++e) {
					var g = f[0],
						h = a[g],
						j = d[g],
						o;
					if(o = h) {
						if(j = !j) {
							var r;
							a: {
								j = g;
								if(o = H.mdd) try {
									if(!xb) {
										xb = {};
										var t = o.split(/;/);
										for(o = 0; o < t.length; ++o) xb[t[o]] = k
									}
									r = xb[j];
									break a
								} catch(x) {
									H.logger && H.logger.ml(x)
								}
								r = m
							}
							j = !r
						}
						o = j
					}
					if(o) {
						yb(vb.yb, g);
						try {
							f[1].init(h), d[g] = k
						} catch(C) {
							H.logger && H.logger.ml(C)
						}
						yb(vb.xb, g)
					}
				}
				if(a = H.qd.m) {
					H.qd.m = [];
					for(d = 0; e = a[d]; ++d) try {
						e()
					} catch(D) {
						H.logger && H.logger.ml(D)
					}
				}
				b[1].l = k;
				yb(vb.vb);
				a: {
					for(a = 0; d = H.bnc[a]; ++a) if((d[1].auto || "m" == d[0]) && !d[1].l) {
						a = m;
						break a
					}
					a = k
				}
				a && yb(vb.ub)
			}, !b[1].libs || H.agl && H.agl(b[1].libs) ? a() : b[1].i = a)
		})();
	} catch(e) {
		window.gbar && gbar.logger && gbar.logger.ml(e, {
			"_sn": "m.init",
			"_mddn": (gbar.mddn ? gbar.mddn() : "0")
		});
	}
})();