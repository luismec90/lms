window.Modernizr = function (l, g, F) {
    var f = {},
        z = g.documentElement;
    l = g.createElement("modernizr");
    l = l.style;
    var n = {},
        A = [],
        q = A.slice,
        h, r = {}.hasOwnProperty,
        p;
    "undefined" !== typeof r && "undefined" !== typeof r.call ? p = function (a, b) {
        return r.call(a, b)
    } : p = function (a, b) {
        return b in a && "undefined" === typeof a.constructor.prototype[b]
    };
    Function.prototype.bind || (Function.prototype.bind = function (a) {
        var b = this;
        if ("function" != typeof b) throw new TypeError;
        var c = q.call(arguments, 1),
            d = function () {
                if (this instanceof d) {
                    var e = function () {};
                    e.prototype = b.prototype;
                    var e = new e,
                        s = b.apply(e, c.concat(q.call(arguments)));
                    return Object(s) === s ? s : e
                }
                return b.apply(a, c.concat(q.call(arguments)))
            };
        return d
    });
    n.video = function () {
        var a = g.createElement("video"),
            b = !1;
        try {
            if (b = !! a.canPlayType) b = new Boolean(b), b.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), b.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), b.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")
        } catch (c) {}
        return b
    };
    for (var j in n) p(n, j) && (h = j.toLowerCase(), f[h] = n[j](), A.push((f[h] ? "" : "no-") + h));
    f.addTest = function (a, b) {
        if ("object" == typeof a) for (var c in a) p(a, c) && f.addTest(c, a[c]);
        else {
            a = a.toLowerCase();
            if (f[a] !== F) return f;
            b = "function" == typeof b ? b() : b;
            "undefined" != typeof enableClasses && enableClasses && (z.className += " " + (b ? "" : "no-") + a);
            f[a] = b
        }
        return f
    };
    l.cssText = "";
    l = null;
    var B = function () {
            var a = m.elements;
            return "string" == typeof a ? a.split(" ") : a
        },
        u = function (a) {
            var b = C[a[D]];
            return b || (b = {}, t++, a[D] = t, C[t] = b), b
        },
        E = function (a, b, c) {
            b || (b = g);
            if (k) return b.createElement(a);
            c || (c = u(b));
            var d;
            return c.cache[a] ? d = c.cache[a].cloneNode() : G.test(a) ? d = (c.cache[a] = c.createElem(a)).cloneNode() : d = c.createElem(a), d.canHaveChildren && !H.test(a) ? c.frag.appendChild(d) : d
        };
    h = function (a) {
        a || (a = g);
        var b = u(a);
        if (m.shivCSS && !v && !b.hasCSS) {
            var c, d = a;
            c = d.createElement("p");
            d = d.getElementsByTagName("head")[0] || d.documentElement;
            c = (c.innerHTML = "x<style>article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}</style>", d.insertBefore(c.lastChild, d.firstChild));
            b.hasCSS = !! c
        }
        if (!k) {
            var e = a;
            b.cache || (b.cache = {}, b.createElem = e.createElement, b.createFrag = e.createDocumentFragment, b.frag = b.createFrag());
            e.createElement = function (a) {
                return m.shivMethods ? E(a, e, b) : b.createElem(a)
            };
            e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + B().join().replace(/\w+/g, function (a) {
                return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
            }) + ");return n}")(m, b.frag)
        }
        return a
    };
    j = this.html5 || {};
    var H = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        G = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        v, D = "_html5shiv",
        t = 0,
        C = {},
        k;
    try {
        var w = g.createElement("a");
        w.innerHTML = "<xyz></xyz>";
        v = "hidden" in w;
        var x;
        if (!(x = 1 == w.childNodes.length)) {
            g.createElement("a");
            var y = g.createDocumentFragment();
            x = "undefined" == typeof y.cloneNode || "undefined" == typeof y.createDocumentFragment || "undefined" == typeof y.createElement
        }
        k = x
    } catch (I) {
        k = v = !0
    }
    var m = {
        elements: j.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
        shivCSS: !1 !== j.shivCSS,
        supportsUnknownElements: k,
        shivMethods: !1 !== j.shivMethods,
        type: "default",
        shivDocument: h,
        createElement: E,
        createDocumentFragment: function (a, b) {
            a || (a = g);
            if (k) return a.createDocumentFragment();
            b = b || u(a);
            for (var c = b.frag.cloneNode(), d = 0, e = B(), f = e.length; d < f; d++) c.createElement(e[d]);
            return c
        }
    };
    this.html5 = m;
    h(g);
    return f._version = "2.6.2", f
}(this, this.document);
// moment.js
// version : 2.0.0
// author : Tim Wood
// license : MIT
// momentjs.com
(function (e) {
    function O(e, t) {
        return function (n) {
            return j(e.call(this, n), t)
        }
    }
    function M(e) {
        return function (t) {
            return this.lang().ordinal(e.call(this, t))
        }
    }
    function _() {}
    function D(e) {
        H(this, e)
    }
    function P(e) {
        var t = this._data = {},
            n = e.years || e.year || e.y || 0,
            r = e.months || e.month || e.M || 0,
            i = e.weeks || e.week || e.w || 0,
            s = e.days || e.day || e.d || 0,
            o = e.hours || e.hour || e.h || 0,
            u = e.minutes || e.minute || e.m || 0,
            a = e.seconds || e.second || e.s || 0,
            f = e.milliseconds || e.millisecond || e.ms || 0;
        this._milliseconds = f + a * 1e3 + u * 6e4 + o * 36e5, this._days = s + i * 7, this._months = r + n * 12, t.milliseconds = f % 1e3, a += B(f / 1e3), t.seconds = a % 60, u += B(a / 60), t.minutes = u % 60, o += B(u / 60), t.hours = o % 24, s += B(o / 24), s += i * 7, t.days = s % 30, r += B(s / 30), t.months = r % 12, n += B(r / 12), t.years = n
    }
    function H(e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        return e
    }
    function B(e) {
        return e < 0 ? Math.ceil(e) : Math.floor(e)
    }
    function j(e, t) {
        var n = e + "";
        while (n.length < t) n = "0" + n;
        return n
    }
    function F(e, t, n) {
        var r = t._milliseconds,
            i = t._days,
            s = t._months,
            o;
        r && e._d.setTime(+e + r * n), i && e.date(e.date() + i * n), s && (o = e.date(), e.date(1).month(e.month() + s * n).date(Math.min(o, e.daysInMonth())))
    }
    function I(e) {
        return Object.prototype.toString.call(e) === "[object Array]"
    }
    function q(e, t) {
        var n = Math.min(e.length, t.length),
            r = Math.abs(e.length - t.length),
            i = 0,
            s;
        for (s = 0; s < n; s++)~~e[s] !== ~~t[s] && i++;
        return i + r
    }
    function R(e, t) {
        return t.abbr = e, s[e] || (s[e] = new _), s[e].set(t), s[e]
    }
    function U(e) {
        return e ? (!s[e] && o && require("./lang/" + e), s[e]) : t.fn._lang
    }
    function z(e) {
        return e.match(/\[.*\]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
    }
    function W(e) {
        var t = e.match(a),
            n, r;
        for (n = 0, r = t.length; n < r; n++) A[t[n]] ? t[n] = A[t[n]] : t[n] = z(t[n]);
        return function (i) {
            var s = "";
            for (n = 0; n < r; n++) s += typeof t[n].call == "function" ? t[n].call(i, e) : t[n];
            return s
        }
    }
    function X(e, t) {
        function r(t) {
            return e.lang().longDateFormat(t) || t
        }
        var n = 5;
        while (n-- && f.test(t)) t = t.replace(f, r);
        return C[t] || (C[t] = W(t)), C[t](e)
    }
    function V(e) {
        switch (e) {
        case "DDDD":
            return p;
        case "YYYY":
            return d;
        case "YYYYY":
            return v;
        case "S":
        case "SS":
        case "SSS":
        case "DDD":
            return h;
        case "MMM":
        case "MMMM":
        case "dd":
        case "ddd":
        case "dddd":
        case "a":
        case "A":
            return m;
        case "X":
            return b;
        case "Z":
        case "ZZ":
            return g;
        case "T":
            return y;
        case "MM":
        case "DD":
        case "YY":
        case "HH":
        case "hh":
        case "mm":
        case "ss":
        case "M":
        case "D":
        case "d":
        case "H":
        case "h":
        case "m":
        case "s":
            return c;
        default:
            return new RegExp(e.replace("\\", ""))
        }
    }
    function $(e, t, n) {
        var r, i, s = n._a;
        switch (e) {
        case "M":
        case "MM":
            s[1] = t == null ? 0 : ~~t - 1;
            break;
        case "MMM":
        case "MMMM":
            r = U(n._l).monthsParse(t), r != null ? s[1] = r : n._isValid = !1;
            break;
        case "D":
        case "DD":
        case "DDD":
        case "DDDD":
            t != null && (s[2] = ~~t);
            break;
        case "YY":
            s[0] = ~~t + (~~t > 68 ? 1900 : 2e3);
            break;
        case "YYYY":
        case "YYYYY":
            s[0] = ~~t;
            break;
        case "a":
        case "A":
            n._isPm = (t + "").toLowerCase() === "pm";
            break;
        case "H":
        case "HH":
        case "h":
        case "hh":
            s[3] = ~~t;
            break;
        case "m":
        case "mm":
            s[4] = ~~t;
            break;
        case "s":
        case "ss":
            s[5] = ~~t;
            break;
        case "S":
        case "SS":
        case "SSS":
            s[6] = ~~ (("0." + t) * 1e3);
            break;
        case "X":
            n._d = new Date(parseFloat(t) * 1e3);
            break;
        case "Z":
        case "ZZ":
            n._useUTC = !0, r = (t + "").match(x), r && r[1] && (n._tzh = ~~r[1]), r && r[2] && (n._tzm = ~~r[2]), r && r[0] === "+" && (n._tzh = -n._tzh, n._tzm = -n._tzm)
        }
        t == null && (n._isValid = !1)
    }
    function J(e) {
        var t, n, r = [];
        if (e._d) return;
        for (t = 0; t < 7; t++) e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
        r[3] += e._tzh || 0, r[4] += e._tzm || 0, n = new Date(0), e._useUTC ? (n.setUTCFullYear(r[0], r[1], r[2]), n.setUTCHours(r[3], r[4], r[5], r[6])) : (n.setFullYear(r[0], r[1], r[2]), n.setHours(r[3], r[4], r[5], r[6])), e._d = n
    }
    function K(e) {
        var t = e._f.match(a),
            n = e._i,
            r, i;
        e._a = [];
        for (r = 0; r < t.length; r++) i = (V(t[r]).exec(n) || [])[0], i && (n = n.slice(n.indexOf(i) + i.length)), A[t[r]] && $(t[r], i, e);
        e._isPm && e._a[3] < 12 && (e._a[3] += 12), e._isPm === !1 && e._a[3] === 12 && (e._a[3] = 0), J(e)
    }
    function Q(e) {
        var t, n, r, i = 99,
            s, o, u;
        while (e._f.length) {
            t = H({}, e), t._f = e._f.pop(), K(t), n = new D(t);
            if (n.isValid()) {
                r = n;
                break
            }
            u = q(t._a, n.toArray()), u < i && (i = u, r = n)
        }
        H(e, r)
    }
    function G(e) {
        var t, n = e._i;
        if (w.exec(n)) {
            e._f = "YYYY-MM-DDT";
            for (t = 0; t < 4; t++) if (S[t][1].exec(n)) {
                e._f += S[t][0];
                break
            }
            g.exec(n) && (e._f += " Z"), K(e)
        } else e._d = new Date(n)
    }
    function Y(t) {
        var n = t._i,
            r = u.exec(n);
        n === e ? t._d = new Date : r ? t._d = new Date(+r[1]) : typeof n == "string" ? G(t) : I(n) ? (t._a = n.slice(0), J(t)) : t._d = n instanceof Date ? new Date(+n) : new Date(n)
    }
    function Z(e, t, n, r, i) {
        return i.relativeTime(t || 1, !! n, e, r)
    }
    function et(e, t, n) {
        var i = r(Math.abs(e) / 1e3),
            s = r(i / 60),
            o = r(s / 60),
            u = r(o / 24),
            a = r(u / 365),
            f = i < 45 && ["s", i] || s === 1 && ["m"] || s < 45 && ["mm", s] || o === 1 && ["h"] || o < 22 && ["hh", o] || u === 1 && ["d"] || u <= 25 && ["dd", u] || u <= 45 && ["M"] || u < 345 && ["MM", r(u / 30)] || a === 1 && ["y"] || ["yy", a];
        return f[2] = t, f[3] = e > 0, f[4] = n, Z.apply({}, f)
    }
    function tt(e, n, r) {
        var i = r - n,
            s = r - e.day();
        return s > i && (s -= 7), s < i - 7 && (s += 7), Math.ceil(t(e).add("d", s).dayOfYear() / 7)
    }
    function nt(e) {
        var n = e._i,
            r = e._f;
        return n === null || n === "" ? null : (typeof n == "string" && (e._i = n = U().preparse(n)), t.isMoment(n) ? (e = H({}, n), e._d = new Date(+n._d)) : r ? I(r) ? Q(e) : K(e) : Y(e), new D(e))
    }
    function rt(e, n) {
        t.fn[e] = t.fn[e + "s"] = function (e) {
            var t = this._isUTC ? "UTC" : "";
            return e != null ? (this._d["set" + t + n](e), this) : this._d["get" + t + n]()
        }
    }
    function it(e) {
        t.duration.fn[e] = function () {
            return this._data[e]
        }
    }
    function st(e, n) {
        t.duration.fn["as" + e] = function () {
            return +this / n
        }
    }
    var t, n = "2.0.0",
        r = Math.round,
        i, s = {},
        o = typeof module != "undefined" && module.exports,
        u = /^\/?Date\((\-?\d+)/i,
        a = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g,
        f = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,
        l = /([0-9a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)/gi,
        c = /\d\d?/,
        h = /\d{1,3}/,
        p = /\d{3}/,
        d = /\d{1,4}/,
        v = /[+\-]?\d{1,6}/,
        m = /[0-9]*[a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF]+\s*?[\u0600-\u06FF]+/i,
        g = /Z|[\+\-]\d\d:?\d\d/i,
        y = /T/i,
        b = /[\+\-]?\d+(\.\d{1,3})?/,
        w = /^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,
        E = "YYYY-MM-DDTHH:mm:ssZ",
        S = [
            ["HH:mm:ss.S", /(T| )\d\d:\d\d:\d\d\.\d{1,3}/],
            ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
            ["HH:mm", /(T| )\d\d:\d\d/],
            ["HH", /(T| )\d\d/]
        ],
        x = /([\+\-]|\d\d)/gi,
        T = "Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|"),
        N = {
            Milliseconds: 1,
            Seconds: 1e3,
            Minutes: 6e4,
            Hours: 36e5,
            Days: 864e5,
            Months: 2592e6,
            Years: 31536e6
        },
        C = {},
        k = "DDD w W M D d".split(" "),
        L = "M D H h m s w W".split(" "),
        A = {
            M: function () {
                return this.month() + 1
            },
            MMM: function (e) {
                return this.lang().monthsShort(this, e)
            },
            MMMM: function (e) {
                return this.lang().months(this, e)
            },
            D: function () {
                return this.date()
            },
            DDD: function () {
                return this.dayOfYear()
            },
            d: function () {
                return this.day()
            },
            dd: function (e) {
                return this.lang().weekdaysMin(this, e)
            },
            ddd: function (e) {
                return this.lang().weekdaysShort(this, e)
            },
            dddd: function (e) {
                return this.lang().weekdays(this, e)
            },
            w: function () {
                return this.week()
            },
            W: function () {
                return this.isoWeek()
            },
            YY: function () {
                return j(this.year() % 100, 2)
            },
            YYYY: function () {
                return j(this.year(), 4)
            },
            YYYYY: function () {
                return j(this.year(), 5)
            },
            a: function () {
                return this.lang().meridiem(this.hours(), this.minutes(), !0)
            },
            A: function () {
                return this.lang().meridiem(this.hours(), this.minutes(), !1)
            },
            H: function () {
                return this.hours()
            },
            h: function () {
                return this.hours() % 12 || 12
            },
            m: function () {
                return this.minutes()
            },
            s: function () {
                return this.seconds()
            },
            S: function () {
                return ~~ (this.milliseconds() / 100)
            },
            SS: function () {
                return j(~~ (this.milliseconds() / 10), 2)
            },
            SSS: function () {
                return j(this.milliseconds(), 3)
            },
            Z: function () {
                var e = -this.zone(),
                    t = "+";
                return e < 0 && (e = -e, t = "-"), t + j(~~ (e / 60), 2) + ":" + j(~~e % 60, 2)
            },
            ZZ: function () {
                var e = -this.zone(),
                    t = "+";
                return e < 0 && (e = -e, t = "-"), t + j(~~ (10 * e / 6), 4)
            },
            X: function () {
                return this.unix()
            }
        };
    while (k.length) i = k.pop(), A[i + "o"] = M(A[i]);
    while (L.length) i = L.pop(), A[i + i] = O(A[i], 2);
    A.DDDD = O(A.DDD, 3), _.prototype = {
        set: function (e) {
            var t, n;
            for (n in e) t = e[n], typeof t == "function" ? this[n] = t : this["_" + n] = t
        },
        _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        months: function (e) {
            return this._months[e.month()]
        },
        _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        monthsShort: function (e) {
            return this._monthsShort[e.month()]
        },
        monthsParse: function (e) {
            var n, r, i, s;
            this._monthsParse || (this._monthsParse = []);
            for (n = 0; n < 12; n++) {
                this._monthsParse[n] || (r = t([2e3, n]), i = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[n] = new RegExp(i.replace(".", ""), "i"));
                if (this._monthsParse[n].test(e)) return n
            }
        },
        _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdays: function (e) {
            return this._weekdays[e.day()]
        },
        _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysShort: function (e) {
            return this._weekdaysShort[e.day()]
        },
        _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        weekdaysMin: function (e) {
            return this._weekdaysMin[e.day()]
        },
        _longDateFormat: {
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D YYYY",
            LLL: "MMMM D YYYY LT",
            LLLL: "dddd, MMMM D YYYY LT"
        },
        longDateFormat: function (e) {
            var t = this._longDateFormat[e];
            return !t && this._longDateFormat[e.toUpperCase()] && (t = this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (e) {
                return e.slice(1)
            }), this._longDateFormat[e] = t), t
        },
        meridiem: function (e, t, n) {
            return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
        },
        _calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[last] dddd [at] LT",
            sameElse: "L"
        },
        calendar: function (e, t) {
            var n = this._calendar[e];
            return typeof n == "function" ? n.apply(t) : n
        },
        _relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        relativeTime: function (e, t, n, r) {
            var i = this._relativeTime[n];
            return typeof i == "function" ? i(e, t, n, r) : i.replace(/%d/i, e)
        },
        pastFuture: function (e, t) {
            var n = this._relativeTime[e > 0 ? "future" : "past"];
            return typeof n == "function" ? n(t) : n.replace(/%s/i, t)
        },
        ordinal: function (e) {
            return this._ordinal.replace("%d", e)
        },
        _ordinal: "%d",
        preparse: function (e) {
            return e
        },
        postformat: function (e) {
            return e
        },
        week: function (e) {
            return tt(e, this._week.dow, this._week.doy)
        },
        _week: {
            dow: 0,
            doy: 6
        }
    }, t = function (e, t, n) {
        return nt({
            _i: e,
            _f: t,
            _l: n,
            _isUTC: !1
        })
    }, t.utc = function (e, t, n) {
        return nt({
            _useUTC: !0,
            _isUTC: !0,
            _l: n,
            _i: e,
            _f: t
        })
    }, t.unix = function (e) {
        return t(e * 1e3)
    }, t.duration = function (e, n) {
        var r = t.isDuration(e),
            i = typeof e == "number",
            s = r ? e._data : i ? {} : e,
            o;
        return i && (n ? s[n] = e : s.milliseconds = e), o = new P(s), r && e.hasOwnProperty("_lang") && (o._lang = e._lang), o
    }, t.version = n, t.defaultFormat = E, t.lang = function (e, n) {
        var r;
        if (!e) return t.fn._lang._abbr;
        n ? R(e, n) : s[e] || U(e), t.duration.fn._lang = t.fn._lang = U(e)
    }, t.langData = function (e) {
        return e && e._lang && e._lang._abbr && (e = e._lang._abbr), U(e)
    }, t.isMoment = function (e) {
        return e instanceof D
    }, t.isDuration = function (e) {
        return e instanceof P
    }, t.fn = D.prototype = {
        clone: function () {
            return t(this)
        },
        valueOf: function () {
            return +this._d
        },
        unix: function () {
            return Math.floor(+this._d / 1e3)
        },
        toString: function () {
            return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        },
        toDate: function () {
            return this._d
        },
        toJSON: function () {
            return t.utc(this).format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        },
        toArray: function () {
            var e = this;
            return [e.year(), e.month(), e.date(), e.hours(), e.minutes(), e.seconds(), e.milliseconds()]
        },
        isValid: function () {
            return this._isValid == null && (this._a ? this._isValid = !q(this._a, (this._isUTC ? t.utc(this._a) : t(this._a)).toArray()) : this._isValid = !isNaN(this._d.getTime())), !! this._isValid
        },
        utc: function () {
            return this._isUTC = !0, this
        },
        local: function () {
            return this._isUTC = !1, this
        },
        format: function (e) {
            var n = X(this, e || t.defaultFormat);
            return this.lang().postformat(n)
        },
        add: function (e, n) {
            var r;
            return typeof e == "string" ? r = t.duration(+n, e) : r = t.duration(e, n), F(this, r, 1), this
        },
        subtract: function (e, n) {
            var r;
            return typeof e == "string" ? r = t.duration(+n, e) : r = t.duration(e, n), F(this, r, -1), this
        },
        diff: function (e, n, r) {
            var i = this._isUTC ? t(e).utc() : t(e).local(),
                s = (this.zone() - i.zone()) * 6e4,
                o, u;
            return n && (n = n.replace(/s$/, "")), n === "year" || n === "month" ? (o = (this.daysInMonth() + i.daysInMonth()) * 432e5, u = (this.year() - i.year()) * 12 + (this.month() - i.month()), u += (this - t(this).startOf("month") - (i - t(i).startOf("month"))) / o, n === "year" && (u /= 12)) : (o = this - i - s, u = n === "second" ? o / 1e3 : n === "minute" ? o / 6e4 : n === "hour" ? o / 36e5 : n === "day" ? o / 864e5 : n === "week" ? o / 6048e5 : o), r ? u : B(u)
        },
        from: function (e, n) {
            return t.duration(this.diff(e)).lang(this.lang()._abbr).humanize(!n)
        },
        fromNow: function (e) {
            return this.from(t(), e)
        },
        calendar: function () {
            var e = this.diff(t().startOf("day"), "days", !0),
                n = e < -6 ? "sameElse" : e < -1 ? "lastWeek" : e < 0 ? "lastDay" : e < 1 ? "sameDay" : e < 2 ? "nextDay" : e < 7 ? "nextWeek" : "sameElse";
            return this.format(this.lang().calendar(n, this))
        },
        isLeapYear: function () {
            var e = this.year();
            return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
        },
        isDST: function () {
            return this.zone() < t([this.year()]).zone() || this.zone() < t([this.year(), 5]).zone()
        },
        day: function (e) {
            var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return e == null ? t : this.add({
                d: e - t
            })
        },
        startOf: function (e) {
            e = e.replace(/s$/, "");
            switch (e) {
            case "year":
                this.month(0);
            case "month":
                this.date(1);
            case "week":
            case "day":
                this.hours(0);
            case "hour":
                this.minutes(0);
            case "minute":
                this.seconds(0);
            case "second":
                this.milliseconds(0)
            }
            return e === "week" && this.day(0), this
        },
        endOf: function (e) {
            return this.startOf(e).add(e.replace(/s?$/, "s"), 1).subtract("ms", 1)
        },
        isAfter: function (e, n) {
            return n = typeof n != "undefined" ? n : "millisecond", +this.clone().startOf(n) > +t(e).startOf(n)
        },
        isBefore: function (e, n) {
            return n = typeof n != "undefined" ? n : "millisecond", +this.clone().startOf(n) < +t(e).startOf(n)
        },
        isSame: function (e, n) {
            return n = typeof n != "undefined" ? n : "millisecond", +this.clone().startOf(n) === +t(e).startOf(n)
        },
        zone: function () {
            return this._isUTC ? 0 : this._d.getTimezoneOffset()
        },
        daysInMonth: function () {
            return t.utc([this.year(), this.month() + 1, 0]).date()
        },
        dayOfYear: function (e) {
            var n = r((t(this).startOf("day") - t(this).startOf("year")) / 864e5) + 1;
            return e == null ? n : this.add("d", e - n)
        },
        isoWeek: function (e) {
            var t = tt(this, 1, 4);
            return e == null ? t : this.add("d", (e - t) * 7)
        },
        week: function (e) {
            var t = this.lang().week(this);
            return e == null ? t : this.add("d", (e - t) * 7)
        },
        lang: function (t) {
            return t === e ? this._lang : (this._lang = U(t), this)
        }
    };
    for (i = 0; i < T.length; i++) rt(T[i].toLowerCase().replace(/s$/, ""), T[i]);
    rt("year", "FullYear"), t.fn.days = t.fn.day, t.fn.weeks = t.fn.week, t.fn.isoWeeks = t.fn.isoWeek, t.duration.fn = P.prototype = {
        weeks: function () {
            return B(this.days() / 7)
        },
        valueOf: function () {
            return this._milliseconds + this._days * 864e5 + this._months * 2592e6
        },
        humanize: function (e) {
            var t = +this,
                n = et(t, !e, this.lang());
            return e && (n = this.lang().pastFuture(t, n)), this.lang().postformat(n)
        },
        lang: t.fn.lang
    };
    for (i in N) N.hasOwnProperty(i) && (st(i, N[i]), it(i.toLowerCase()));
    st("Weeks", 6048e5), t.lang("en", {
        ordinal: function (e) {
            var t = e % 10,
                n = ~~ (e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
            return e + n
        }
    }), o && (module.exports = t), typeof ender == "undefined" && (this.moment = t), typeof define == "function" && define.amd && define("moment", [], function () {
        return t
    })
}).call(this);
(function () {
    function b(a) {
        a.lang("en", {
            longDateFormat: {
                LT: "h:mma",
                L: "MM/DD/YYYY",
                LL: "MM/DD",
                LLL: "MMMM D, LT",
                LLLL: "MMMM D YYYY, LT"
            }
        });
        a.lang("es", {
            months: "enero febrero marzo abril mayo junio julio agosto septiembre octubre noviembre diciembre".split(" "),
            monthsShort: "ene. feb. mar. abr. may. jun. jul. ago. sep. oct. nov. dic.".split(" "),
            weekdays: "domingo lunes martes mi\u00e9rcoles jueves viernes s\u00e1bado".split(" "),
            weekdaysShort: "dom. lun. mar. mi\u00e9. jue. vie. s\u00e1b.".split(" "),
            weekdaysMin: "Do Lu Ma Mi Ju Vi S\u00e1".split(" "),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM",
                LL: "DD/MM/YYYY",
                LLL: "D \\de MMMM, LT",
                LLLL: "D \\de MMMM \\de YYYY, LT"
            },
            calendar: {
                sameDay: function () {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextDay: function () {
                    return "[ma\u00f1ana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextWeek: function () {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastDay: function () {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastWeek: function () {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un d\u00eda",
                dd: "%d d\u00edas",
                M: "un mes",
                MM: "%d meses",
                y: "un a\u00f1o",
                yy: "%d a\u00f1os"
            },
            ordinal: "%d\u00ba",
            week: {
                dow: 1,
                doy: 4
            }
        });
        a.lang("fr", {
            months: "janvier f\u00e9vrier mars avril mai juin juillet ao\u00fbt septembre octobre novembre d\u00e9cembre".split(" "),
            monthsShort: "janv. f\u00e9vr. mars avr. mai juin juil. ao\u00fbt sept. oct. nov. d\u00e9c.".split(" "),
            weekdays: "dimanche lundi mardi mercredi jeudi vendredi samedi".split(" "),
            weekdaysShort: "dim. lun. mar. mer. jeu. ven. sam.".split(" "),
            weekdaysMin: "Di Lu Ma Me Je Ve Sa".split(" "),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[Aujourd'hui \u00e0] LT",
                nextDay: "[Demain \u00e0] LT",
                nextWeek: "dddd [\u00e0] LT",
                lastDay: "[Hier \u00e0] LT",
                lastWeek: "dddd [dernier \u00e0] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            ordinal: function (a) {
                return a + (1 === a ? "er" : "\u00e8me")
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
        a.lang("it", {
            months: "Gennaio Febbraio Marzo Aprile Maggio Giugno Luglio Agosto Settembre Ottobre Novembre Dicembre".split(" "),
            monthsShort: "Gen Feb Mar Apr Mag Giu Lug Ago Set Ott Nov Dic".split(" "),
            weekdays: "Domenica Luned\u00ec Marted\u00ec Mercoled\u00ec Gioved\u00ec Venerd\u00ec Sabato".split(" "),
            weekdaysShort: "Dom Lun Mar Mer Gio Ven Sab".split(" "),
            weekdaysMin: "D L Ma Me G V S".split(" "),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd, D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[Oggi alle] LT",
                nextDay: "[Domani alle] LT",
                nextWeek: "dddd [alle] LT",
                lastDay: "[Ieri alle] LT",
                lastWeek: "[lo scorso] dddd [alle] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s fa",
                s: "secondi",
                m: "un minuto",
                mm: "%d minuti",
                h: "un'ora",
                hh: "%d ore",
                d: "un giorno",
                dd: "%d giorni",
                M: "un mese",
                MM: "%d mesi",
                y: "un anno",
                yy: "%d anni"
            },
            ordinal: "%d\u00ba",
            week: {
                dow: 1,
                doy: 4
            }
        });
        a.lang("pt-br", {
            months: "Janeiro Fevereiro Mar\u00e7o Abril Maio Junho Julho Agosto Setembro Outubro Novembro Dezembro".split(" "),
            monthsShort: "Jan Fev Mar Abr Mai Jun Jul Ago Set Out Nov Dez".split(" "),
            weekdays: "Domingo Segunda-feira Ter\u00e7a-feira Quarta-feira Quinta-feira Sexta-feira S\u00e1bado".split(" "),
            weekdaysShort: "Dom Seg Ter Qua Qui Sex S\u00e1b".split(" "),
            weekdaysMin: "Dom 2\u00aa 3\u00aa 4\u00aa 5\u00aa 6\u00aa S\u00e1b".split(" "),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D \\de MMMM \\de YYYY",
                LLL: "D \\de MMMM \\de YYYY LT",
                LLLL: "dddd, D \\de MMMM \\de YYYY LT"
            },
            calendar: {
                sameDay: "[Hoje \u00e0s] LT",
                nextDay: "[Amanh\u00e3 \u00e0s] LT",
                nextWeek: "dddd [\u00e0s] LT",
                lastDay: "[Ontem \u00e0s] LT",
                lastWeek: function () {
                    return 0 === this.day() || 6 === this.day() ? "[\u00daltimo] dddd [\u00e0s] LT" : "[\u00daltima] dddd [\u00e0s] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "%s atr\u00e1s",
                s: "segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um m\u00eas",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            ordinal: "%d\u00ba"
        });
        a.lang("pt", {
            months: "Janeiro Fevereiro Mar\u00e7o Abril Maio Junho Julho Agosto Setembro Outubro Novembro Dezembro".split(" "),
            monthsShort: "Jan Fev Mar Abr Mai Jun Jul Ago Set Out Nov Dez".split(" "),
            weekdays: "Domingo Segunda-feira Ter\u00e7a-feira Quarta-feira Quinta-feira Sexta-feira S\u00e1bado".split(" "),
            weekdaysShort: "Dom Seg Ter Qua Qui Sex S\u00e1b".split(" "),
            weekdaysMin: "Dom 2\u00aa 3\u00aa 4\u00aa 5\u00aa 6\u00aa S\u00e1b".split(" "),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D \\de MMMM \\de YYYY",
                LLL: "D \\de MMMM \\de YYYY LT",
                LLLL: "dddd, D \\de MMMM \\de YYYY LT"
            },
            calendar: {
                sameDay: "[Hoje \u00e0s] LT",
                nextDay: "[Amanh\u00e3 \u00e0s] LT",
                nextWeek: "dddd [\u00e0s] LT",
                lastDay: "[Ontem \u00e0s] LT",
                lastWeek: function () {
                    return 0 === this.day() || 6 === this.day() ? "[\u00daltimo] dddd [\u00e0s] LT" : "[\u00daltima] dddd [\u00e0s] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "%s atr\u00e1s",
                s: "segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um m\u00eas",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            ordinal: "%d\u00ba",
            week: {
                dow: 1,
                doy: 4
            }
        });
        a.lang("en")
    }
    "function" === typeof define && define.amd && define(["moment"], b);
    "undefined" !== typeof window && window.moment && b(window.moment)
})();
jQuery.fn.featured = function (a) {
    function h(a, c, j) {
        clearTimeout(k);
        if (c) {
            var e = d.eq(0).clone();
            f.append(e);
            d = $("li", f);
            a = d.length - 1
        }
        var e = c ? 0 : a,
            m = $("li", l);
        m.removeClass("sel");
        m.eq(e).addClass("sel");
        var e = c ? 0 : a,
            b = d.eq(e);
        b.hasClass("loaded") || b.css({
            backgroundImage: "url(" + b.attr("data-img") + ")"
        }).addClass("loaded");
        e < d.length && (b = d.eq(e + 1), b.hasClass("loaded") || setTimeout(function () {
            b.css({
                backgroundImage: "url(" + b.attr("data-img") + ")"
            }).addClass("loaded")
        }, n / 2));
        f.stop(!1, !1).animate({
            left: -a * g.width()
        }, q, function () {
            var e = a;
            c && (f.css({
                left: 0
            }), $("li", f).last().remove(), d = $("li", f), e = 0);
            var b, g = !1;
            e < d.length - 1 ? b = e + 1 : (b = 0, g = !0);
            p = b;
            k = setTimeout(function () {
                p == b && h(b, g)
            }, n);
            j && r && clearTimeout(k)
        })
    }
    a = a || {};
    var g = $(this),
        f = $("ul.holder", g),
        d = $("li.rowable", f),
        l, q = a.speed || 800,
        n = a.delay || 5E3,
        r = a.stoponclick || !1,
        p = -1,
        k;
    f.width((d.length + 1) * g.width());
    d.each(function () {
        $(this).width(g.width())
    });
    if (null != a.ref) var c = $("#" + a.ref);
    else c = $('<div class="ref"><ul></ul></div>'), g.append(c);
    c = c.children("ul");
    a = $("li", f).length;
    for (var j = 0; j < a; j++) {
        var s = $("<li></li>");
        c.append(s)
    }
    $("li", c).click(function () {
        h($("li", c).index($(this)), !1, !0)
    });
    l = c;
    h(0);
    $(window).resize(function () {
        f.width((d.length + 1) * g.width());
        d.each(function () {
            $(this).width(g.width())
        });
        h(0)
    })
};
(function (d) {
    function h(b) {
        return "object" == typeof b ? b : {
            top: b,
            left: b
        }
    }
    var m = d.scrollTo = function (b, c, a) {
            d(window).scrollTo(b, c, a)
        };
    m.defaults = {
        axis: "xy",
        duration: 1.3 <= parseFloat(d.fn.jquery) ? 0 : 1,
        limit: !0
    };
    m.window = function () {
        return d(window)._scrollable()
    };
    d.fn._scrollable = function () {
        return this.map(function () {
            if (this.nodeName && -1 == d.inArray(this.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"])) return this;
            var b = (this.contentWindow || this).document || this.ownerDocument || this;
            return /webkit/i.test(navigator.userAgent) || "BackCompat" == b.compatMode ? b.body : b.documentElement
        })
    };
    d.fn.scrollTo = function (b, c, a) {
        "object" == typeof c && (a = c, c = 0);
        "function" == typeof a && (a = {
            onAfter: a
        });
        "max" == b && (b = 9E9);
        a = d.extend({}, m.defaults, a);
        c = c || a.duration;
        a.queue = a.queue && 1 < a.axis.length;
        a.queue && (c /= 2);
        a.offset = h(a.offset);
        a.over = h(a.over);
        return this._scrollable().each(function () {
            function p(b) {
                j.animate(e, c, a.easing, b &&
                function () {
                    b.call(this, g, a)
                })
            }
            if (null != b) {
                var k = this,
                    j = d(k),
                    g = b,
                    n, e = {},
                    r = j.is("html,body");
                switch (typeof g) {
                case "number":
                case "string":
                    if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(g)) {
                        g = h(g);
                        break
                    }
                    g = d(g, this);
                    if (!g.length) return;
                case "object":
                    if (g.is || g.style) n = (g = d(g)).offset()
                }
                d.each(a.axis.split(""), function (b, d) {
                    var c = "x" == d ? "Left" : "Top",
                        l = c.toLowerCase(),
                        f = "scroll" + c,
                        h = k[f],
                        q = m.max(k, d);
                    n ? (e[f] = n[l] + (r ? 0 : h - j.offset()[l]), a.margin && (e[f] -= parseInt(g.css("margin" + c)) || 0, e[f] -= parseInt(g.css("border" + c + "Width")) || 0), e[f] += a.offset[l] || 0, a.over[l] && (e[f] += g["x" == d ? "width" : "height"]() * a.over[l])) : (c = g[l], e[f] = c.slice && "%" == c.slice(-1) ? parseFloat(c) / 100 * q : c);
                    a.limit && /^\d+$/.test(e[f]) && (e[f] = 0 >= e[f] ? 0 : Math.min(e[f], q));
                    !b && a.queue && (h != e[f] && p(a.onAfterFirst), delete e[f])
                });
                p(a.onAfter)
            }
        }).end()
    };
    m.max = function (b, c) {
        var a = "x" == c ? "Width" : "Height",
            h = "scroll" + a;
        if (!d(b).is("html,body")) return b[h] - d(b)[a.toLowerCase()]();
        var a = "client" + a,
            k = b.ownerDocument.documentElement,
            j = b.ownerDocument.body;
        return Math.max(k[h], j[h]) - Math.min(k[a], j[a])
    }
})(jQuery);
(function (a, b) {
    "use strict";
    var c = a.History = a.History || {},
        d = a.jQuery;
    if (typeof c.Adapter != "undefined") throw new Error("History.js Adapter has already been loaded...");
    c.Adapter = {
        bind: function (a, b, c) {
            d(a).bind(b, c)
        },
        trigger: function (a, b, c) {
            d(a).trigger(b, c)
        },
        extractEventData: function (a, c, d) {
            var e = c && c.originalEvent && c.originalEvent[a] || d && d[a] || b;
            return e
        },
        onDomLoad: function (a) {
            d(a)
        }
    }, typeof c.init != "undefined" && c.init()
})(window), function (a, b) {
    "use strict";
    var c = a.console || b,
        d = a.document,
        e = a.navigator,
        f = a.sessionStorage || !1,
        g = a.setTimeout,
        h = a.clearTimeout,
        i = a.setInterval,
        j = a.clearInterval,
        k = a.JSON,
        l = a.alert,
        m = a.History = a.History || {},
        n = a.history;
    k.stringify = k.stringify || k.encode, k.parse = k.parse || k.decode;
    if (typeof m.init != "undefined") throw new Error("History.js Core has already been loaded...");
    m.init = function () {
        return typeof m.Adapter == "undefined" ? !1 : (typeof m.initCore != "undefined" && m.initCore(), typeof m.initHtml4 != "undefined" && m.initHtml4(), !0)
    }, m.initCore = function () {
        if (typeof m.initCore.initialized != "undefined") return !1;
        m.initCore.initialized = !0, m.options = m.options || {}, m.options.hashChangeInterval = m.options.hashChangeInterval || 100, m.options.safariPollInterval = m.options.safariPollInterval || 500, m.options.doubleCheckInterval = m.options.doubleCheckInterval || 500, m.options.storeInterval = m.options.storeInterval || 1e3, m.options.busyDelay = m.options.busyDelay || 250, m.options.debug = m.options.debug || !1, m.options.initialTitle = m.options.initialTitle || d.title, m.intervalList = [], m.clearAllIntervals = function () {
            var a, b = m.intervalList;
            if (typeof b != "undefined" && b !== null) {
                for (a = 0; a < b.length; a++) j(b[a]);
                m.intervalList = null
            }
        }, m.debug = function () {
            (m.options.debug || !1) && m.log.apply(m, arguments)
        }, m.log = function () {
            var a = typeof c != "undefined" && typeof c.log != "undefined" && typeof c.log.apply != "undefined",
                b = d.getElementById("log"),
                e, f, g, h, i;
            a ? (h = Array.prototype.slice.call(arguments), e = h.shift(), typeof c.debug != "undefined" ? c.debug.apply(c, [e, h]) : c.log.apply(c, [e, h])) : e = "\n" + arguments[0] + "\n";
            for (f = 1, g = arguments.length; f < g; ++f) {
                i = arguments[f];
                if (typeof i == "object" && typeof k != "undefined") try {
                    i = k.stringify(i)
                } catch (j) {}
                e += "\n" + i + "\n"
            }
            return b ? (b.value += e + "\n-----\n", b.scrollTop = b.scrollHeight - b.clientHeight) : a || l(e), !0
        }, m.getInternetExplorerMajorVersion = function () {
            var a = m.getInternetExplorerMajorVersion.cached = typeof m.getInternetExplorerMajorVersion.cached != "undefined" ? m.getInternetExplorerMajorVersion.cached : function () {
                    var a = 3,
                        b = d.createElement("div"),
                        c = b.getElementsByTagName("i");
                    while ((b.innerHTML = "<!--[if gt IE " + ++a + "]><i></i><![endif]-->") && c[0]);
                    return a > 4 ? a : !1
                }();
            return a
        }, m.isInternetExplorer = function () {
            var a = m.isInternetExplorer.cached = typeof m.isInternetExplorer.cached != "undefined" ? m.isInternetExplorer.cached : Boolean(m.getInternetExplorerMajorVersion());
            return a
        }, m.emulated = {
            pushState: !Boolean(a.history && a.history.pushState && a.history.replaceState && !/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(e.userAgent) && !/AppleWebKit\/5([0-2]|3[0-2])/i.test(e.userAgent)),
            hashChange: Boolean(!("onhashchange" in a || "onhashchange" in d) || m.isInternetExplorer() && m.getInternetExplorerMajorVersion() < 8)
        }, m.enabled = !m.emulated.pushState, m.bugs = {
            setHash: Boolean(!m.emulated.pushState && e.vendor === "Apple Computer, Inc." && /AppleWebKit\/5([0-2]|3[0-3])/.test(e.userAgent)),
            safariPoll: Boolean(!m.emulated.pushState && e.vendor === "Apple Computer, Inc." && /AppleWebKit\/5([0-2]|3[0-3])/.test(e.userAgent)),
            ieDoubleCheck: Boolean(m.isInternetExplorer() && m.getInternetExplorerMajorVersion() < 8),
            hashEscape: Boolean(m.isInternetExplorer() && m.getInternetExplorerMajorVersion() < 7)
        }, m.isEmptyObject = function (a) {
            for (var b in a) return !1;
            return !0
        }, m.cloneObject = function (a) {
            var b, c;
            return a ? (b = k.stringify(a), c = k.parse(b)) : c = {}, c
        }, m.getRootUrl = function () {
            var a = d.location.protocol + "//" + (d.location.hostname || d.location.host);
            if (d.location.port || !1) a += ":" + d.location.port;
            return a += "/", a
        }, m.getBaseHref = function () {
            var a = d.getElementsByTagName("base"),
                b = null,
                c = "";
            return a.length === 1 && (b = a[0], c = b.href.replace(/[^\/]+$/, "")), c = c.replace(/\/+$/, ""), c && (c += "/"), c
        }, m.getBaseUrl = function () {
            var a = m.getBaseHref() || m.getBasePageUrl() || m.getRootUrl();
            return a
        }, m.getPageUrl = function () {
            var a = m.getState(!1, !1),
                b = (a || {}).url || d.location.href,
                c;
            return c = b.replace(/\/+$/, "").replace(/[^\/]+$/, function (a, b, c) {
                return /\./.test(a) ? a : a + "/"
            }), c
        }, m.getBasePageUrl = function () {
            var a = d.location.href.replace(/[#\?].*/, "").replace(/[^\/]+$/, function (a, b, c) {
                return /[^\/]$/.test(a) ? "" : a
            }).replace(/\/+$/, "") + "/";
            return a
        }, m.getFullUrl = function (a, b) {
            var c = a,
                d = a.substring(0, 1);
            return b = typeof b == "undefined" ? !0 : b, /[a-z]+\:\/\//.test(a) || (d === "/" ? c = m.getRootUrl() + a.replace(/^\/+/, "") : d === "#" ? c = m.getPageUrl().replace(/#.*/, "") + a : d === "?" ? c = m.getPageUrl().replace(/[\?#].*/, "") + a : b ? c = m.getBaseUrl() + a.replace(/^(\.\/)+/, "") : c = m.getBasePageUrl() + a.replace(/^(\.\/)+/, "")), c.replace(/\#$/, "")
        }, m.getShortUrl = function (a) {
            var b = a,
                c = m.getBaseUrl(),
                d = m.getRootUrl();
            return m.emulated.pushState && (b = b.replace(c, "")), b = b.replace(d, "/"), m.isTraditionalAnchor(b) && (b = "./" + b), b = b.replace(/^(\.\/)+/g, "./").replace(/\#$/, ""), b
        }, m.store = {}, m.idToState = m.idToState || {}, m.stateToId = m.stateToId || {}, m.urlToId = m.urlToId || {}, m.storedStates = m.storedStates || [], m.savedStates = m.savedStates || [], m.normalizeStore = function () {
            m.store.idToState = m.store.idToState || {}, m.store.urlToId = m.store.urlToId || {}, m.store.stateToId = m.store.stateToId || {}
        }, m.getState = function (a, b) {
            typeof a == "undefined" && (a = !0), typeof b == "undefined" && (b = !0);
            var c = m.getLastSavedState();
            return !c && b && (c = m.createStateObject()), a && (c = m.cloneObject(c), c.url = c.cleanUrl || c.url), c
        }, m.getIdByState = function (a) {
            var b = m.extractId(a.url),
                c;
            if (!b) {
                c = m.getStateString(a);
                if (typeof m.stateToId[c] != "undefined") b = m.stateToId[c];
                else if (typeof m.store.stateToId[c] != "undefined") b = m.store.stateToId[c];
                else {
                    for (;;) {
                        b = (new Date).getTime() + String(Math.random()).replace(/\D/g, "");
                        if (typeof m.idToState[b] == "undefined" && typeof m.store.idToState[b] == "undefined") break
                    }
                    m.stateToId[c] = b, m.idToState[b] = a
                }
            }
            return b
        }, m.normalizeState = function (a) {
            var b, c;
            if (!a || typeof a != "object") a = {};
            if (typeof a.normalized != "undefined") return a;
            if (!a.data || typeof a.data != "object") a.data = {};
            b = {}, b.normalized = !0, b.title = a.title || "", b.url = m.getFullUrl(m.unescapeString(a.url || d.location.href)), b.hash = m.getShortUrl(b.url), b.data = m.cloneObject(a.data), b.id = m.getIdByState(b), b.cleanUrl = b.url.replace(/\??\&_suid.*/, ""), b.url = b.cleanUrl, c = !m.isEmptyObject(b.data);
            if (b.title || c) b.hash = m.getShortUrl(b.url).replace(/\??\&_suid.*/, ""), /\?/.test(b.hash) || (b.hash += "?"), b.hash += "&_suid=" + b.id;
            return b.hashedUrl = m.getFullUrl(b.hash), (m.emulated.pushState || m.bugs.safariPoll) && m.hasUrlDuplicate(b) && (b.url = b.hashedUrl), b
        }, m.createStateObject = function (a, b, c) {
            var d = {
                data: a,
                title: b,
                url: c
            };
            return d = m.normalizeState(d), d
        }, m.getStateById = function (a) {
            a = String(a);
            var c = m.idToState[a] || m.store.idToState[a] || b;
            return c
        }, m.getStateString = function (a) {
            var b, c, d;
            return b = m.normalizeState(a), c = {
                data: b.data,
                title: a.title,
                url: a.url
            }, d = k.stringify(c), d
        }, m.getStateId = function (a) {
            var b, c;
            return b = m.normalizeState(a), c = b.id, c
        }, m.getHashByState = function (a) {
            var b, c;
            return b = m.normalizeState(a), c = b.hash, c
        }, m.extractId = function (a) {
            var b, c, d;
            return c = /(.*)\&_suid=([0-9]+)$/.exec(a), d = c ? c[1] || a : a, b = c ? String(c[2] || "") : "", b || !1
        }, m.isTraditionalAnchor = function (a) {
            var b = !/[\/\?\.]/.test(a);
            return b
        }, m.extractState = function (a, b) {
            var c = null,
                d, e;
            return b = b || !1, d = m.extractId(a), d && (c = m.getStateById(d)), c || (e = m.getFullUrl(a), d = m.getIdByUrl(e) || !1, d && (c = m.getStateById(d)), !c && b && !m.isTraditionalAnchor(a) && (c = m.createStateObject(null, null, e))), c
        }, m.getIdByUrl = function (a) {
            var c = m.urlToId[a] || m.store.urlToId[a] || b;
            return c
        }, m.getLastSavedState = function () {
            return m.savedStates[m.savedStates.length - 1] || b
        }, m.getLastStoredState = function () {
            return m.storedStates[m.storedStates.length - 1] || b
        }, m.hasUrlDuplicate = function (a) {
            var b = !1,
                c;
            return c = m.extractState(a.url), b = c && c.id !== a.id, b
        }, m.storeState = function (a) {
            return m.urlToId[a.url] = a.id, m.storedStates.push(m.cloneObject(a)), a
        }, m.isLastSavedState = function (a) {
            var b = !1,
                c, d, e;
            return m.savedStates.length && (c = a.id, d = m.getLastSavedState(), e = d.id, b = c === e), b
        }, m.saveState = function (a) {
            return m.isLastSavedState(a) ? !1 : (m.savedStates.push(m.cloneObject(a)), !0)
        }, m.getStateByIndex = function (a) {
            var b = null;
            return typeof a == "undefined" ? b = m.savedStates[m.savedStates.length - 1] : a < 0 ? b = m.savedStates[m.savedStates.length + a] : b = m.savedStates[a], b
        }, m.getHash = function () {
            var a = m.unescapeHash(d.location.hash);
            return a
        }, m.unescapeString = function (b) {
            var c = b,
                d;
            for (;;) {
                d = a.unescape(c);
                if (d === c) break;
                c = d
            }
            return c
        }, m.unescapeHash = function (a) {
            var b = m.normalizeHash(a);
            return b = m.unescapeString(b), b
        }, m.normalizeHash = function (a) {
            var b = a.replace(/[^#]*#/, "").replace(/#.*/, "");
            return b
        }, m.setHash = function (a, b) {
            var c, e, f;
            return b !== !1 && m.busy() ? (m.pushQueue({
                scope: m,
                callback: m.setHash,
                args: arguments,
                queue: b
            }), !1) : (c = m.escapeHash(a), m.busy(!0), e = m.extractState(a, !0), e && !m.emulated.pushState ? m.pushState(e.data, e.title, e.url, !1) : d.location.hash !== c && (m.bugs.setHash ? (f = m.getPageUrl(), m.pushState(null, null, f + "#" + c, !1)) : d.location.hash = c), m)
        }, m.escapeHash = function (b) {
            var c = m.normalizeHash(b);
            return c = a.escape(c), m.bugs.hashEscape || (c = c.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")), c
        }, m.getHashByUrl = function (a) {
            var b = String(a).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
            return b = m.unescapeHash(b), b
        }, m.setTitle = function (a) {
            var b = a.title,
                c;
            b || (c = m.getStateByIndex(0), c && c.url === a.url && (b = c.title || m.options.initialTitle));
            try {
                d.getElementsByTagName("title")[0].innerHTML = b.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
            } catch (e) {}
            return d.title = b, m
        }, m.queues = [], m.busy = function (a) {
            typeof a != "undefined" ? m.busy.flag = a : typeof m.busy.flag == "undefined" && (m.busy.flag = !1);
            if (!m.busy.flag) {
                h(m.busy.timeout);
                var b = function () {
                        var a, c, d;
                        if (m.busy.flag) return;
                        for (a = m.queues.length - 1; a >= 0; --a) {
                            c = m.queues[a];
                            if (c.length === 0) continue;
                            d = c.shift(), m.fireQueueItem(d), m.busy.timeout = g(b, m.options.busyDelay)
                        }
                    };
                m.busy.timeout = g(b, m.options.busyDelay)
            }
            return m.busy.flag
        }, m.busy.flag = !1, m.fireQueueItem = function (a) {
            return a.callback.apply(a.scope || m, a.args || [])
        }, m.pushQueue = function (a) {
            return m.queues[a.queue || 0] = m.queues[a.queue || 0] || [], m.queues[a.queue || 0].push(a), m
        }, m.queue = function (a, b) {
            return typeof a == "function" && (a = {
                callback: a
            }), typeof b != "undefined" && (a.queue = b), m.busy() ? m.pushQueue(a) : m.fireQueueItem(a), m
        }, m.clearQueue = function () {
            return m.busy.flag = !1, m.queues = [], m
        }, m.stateChanged = !1, m.doubleChecker = !1, m.doubleCheckComplete = function () {
            return m.stateChanged = !0, m.doubleCheckClear(), m
        }, m.doubleCheckClear = function () {
            return m.doubleChecker && (h(m.doubleChecker), m.doubleChecker = !1), m
        }, m.doubleCheck = function (a) {
            return m.stateChanged = !1, m.doubleCheckClear(), m.bugs.ieDoubleCheck && (m.doubleChecker = g(function () {
                return m.doubleCheckClear(), m.stateChanged || a(), !0
            }, m.options.doubleCheckInterval)), m
        }, m.safariStatePoll = function () {
            var b = m.extractState(d.location.href),
                c;
            if (!m.isLastSavedState(b)) c = b;
            else return;
            return c || (c = m.createStateObject()), m.Adapter.trigger(a, "popstate"), m
        }, m.back = function (a) {
            return a !== !1 && m.busy() ? (m.pushQueue({
                scope: m,
                callback: m.back,
                args: arguments,
                queue: a
            }), !1) : (m.busy(!0), m.doubleCheck(function () {
                m.back(!1)
            }), n.go(-1), !0)
        }, m.forward = function (a) {
            return a !== !1 && m.busy() ? (m.pushQueue({
                scope: m,
                callback: m.forward,
                args: arguments,
                queue: a
            }), !1) : (m.busy(!0), m.doubleCheck(function () {
                m.forward(!1)
            }), n.go(1), !0)
        }, m.go = function (a, b) {
            var c;
            if (a > 0) for (c = 1; c <= a; ++c) m.forward(b);
            else {
                if (!(a < 0)) throw new Error("History.go: History.go requires a positive or negative integer passed.");
                for (c = -1; c >= a; --c) m.back(b)
            }
            return m
        };
        if (m.emulated.pushState) {
            var o = function () {};
            m.pushState = m.pushState || o, m.replaceState = m.replaceState || o
        } else m.onPopState = function (b, c) {
            var e = !1,
                f = !1,
                g, h;
            return m.doubleCheckComplete(), g = m.getHash(), g ? (h = m.extractState(g || d.location.href, !0), h ? m.replaceState(h.data, h.title, h.url, !1) : (m.Adapter.trigger(a, "anchorchange"), m.busy(!1)), m.expectedStateId = !1, !1) : (e = m.Adapter.extractEventData("state", b, c) || !1, e ? f = m.getStateById(e) : m.expectedStateId ? f = m.getStateById(m.expectedStateId) : f = m.extractState(d.location.href), f || (f = m.createStateObject(null, null, d.location.href)), m.expectedStateId = !1, m.isLastSavedState(f) ? (m.busy(!1), !1) : (m.storeState(f), m.saveState(f), m.setTitle(f), m.Adapter.trigger(a, "statechange"), m.busy(!1), !0))
        }, m.Adapter.bind(a, "popstate", m.onPopState), m.pushState = function (b, c, d, e) {
            if (m.getHashByUrl(d) && m.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
            if (e !== !1 && m.busy()) return m.pushQueue({
                scope: m,
                callback: m.pushState,
                args: arguments,
                queue: e
            }), !1;
            m.busy(!0);
            var f = m.createStateObject(b, c, d);
            return m.isLastSavedState(f) ? m.busy(!1) : (m.storeState(f), m.expectedStateId = f.id, n.pushState(f.id, f.title, f.url), m.Adapter.trigger(a, "popstate")), !0
        }, m.replaceState = function (b, c, d, e) {
            if (m.getHashByUrl(d) && m.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
            if (e !== !1 && m.busy()) return m.pushQueue({
                scope: m,
                callback: m.replaceState,
                args: arguments,
                queue: e
            }), !1;
            m.busy(!0);
            var f = m.createStateObject(b, c, d);
            return m.isLastSavedState(f) ? m.busy(!1) : (m.storeState(f), m.expectedStateId = f.id, n.replaceState(f.id, f.title, f.url), m.Adapter.trigger(a, "popstate")), !0
        };
        if (f) {
            try {
                m.store = k.parse(f.getItem("History.store")) || {}
            } catch (p) {
                m.store = {}
            }
            m.normalizeStore()
        } else m.store = {}, m.normalizeStore();
        m.Adapter.bind(a, "beforeunload", m.clearAllIntervals), m.Adapter.bind(a, "unload", m.clearAllIntervals), m.saveState(m.storeState(m.extractState(d.location.href, !0))), f && (m.onUnload = function () {
            var a, b;
            try {
                a = k.parse(f.getItem("History.store")) || {}
            } catch (c) {
                a = {}
            }
            a.idToState = a.idToState || {}, a.urlToId = a.urlToId || {}, a.stateToId = a.stateToId || {};
            for (b in m.idToState) {
                if (!m.idToState.hasOwnProperty(b)) continue;
                a.idToState[b] = m.idToState[b]
            }
            for (b in m.urlToId) {
                if (!m.urlToId.hasOwnProperty(b)) continue;
                a.urlToId[b] = m.urlToId[b]
            }
            for (b in m.stateToId) {
                if (!m.stateToId.hasOwnProperty(b)) continue;
                a.stateToId[b] = m.stateToId[b]
            }
            m.store = a, m.normalizeStore(), f.setItem("History.store", k.stringify(a))
        }, m.intervalList.push(i(m.onUnload, m.options.storeInterval)), m.Adapter.bind(a, "beforeunload", m.onUnload), m.Adapter.bind(a, "unload", m.onUnload));
        if (!m.emulated.pushState) {
            m.bugs.safariPoll && m.intervalList.push(i(m.safariStatePoll, m.options.safariPollInterval));
            if (e.vendor === "Apple Computer, Inc." || (e.appCodeName || "") === "Mozilla") m.Adapter.bind(a, "hashchange", function () {
                m.Adapter.trigger(a, "popstate")
            }), m.getHash() && m.Adapter.onDomLoad(function () {
                m.Adapter.trigger(a, "hashchange")
            })
        }
    }, m.init()
}(window);;
(function (f, h, $) {
    var a = 'placeholder' in h.createElement('input'),
        d = 'placeholder' in h.createElement('textarea'),
        i = $.fn,
        c = $.valHooks,
        k, j;
    if (a && d) {
        j = i.placeholder = function () {
            return this
        };
        j.input = j.textarea = true
    } else {
        j = i.placeholder = function () {
            var l = this;
            l.filter((a ? 'textarea' : ':input') + '[placeholder]').not('.placeholder').bind({
                'focus.placeholder': b,
                'blur.placeholder': e
            }).data('placeholder-enabled', true).trigger('blur.placeholder');
            return l
        };
        j.input = a;
        j.textarea = d;
        k = {
            get: function (m) {
                var l = $(m);
                return l.data('placeholder-enabled') && l.hasClass('placeholder') ? '' : m.value
            },
            set: function (m, n) {
                var l = $(m);
                if (!l.data('placeholder-enabled')) {
                    return m.value = n
                }
                if (n == '') {
                    m.value = n;
                    if (m != h.activeElement) {
                        e.call(m)
                    }
                } else {
                    if (l.hasClass('placeholder')) {
                        b.call(m, true, n) || (m.value = n)
                    } else {
                        m.value = n
                    }
                }
                return l
            }
        };
        a || (c.input = k);
        d || (c.textarea = k);
        $(function () {
            $(h).delegate('form', 'submit.placeholder', function () {
                var l = $('.placeholder', this).each(b);
                setTimeout(function () {
                    l.each(e)
                }, 10)
            })
        });
        $(f).bind('beforeunload.placeholder', function () {
            $('.placeholder').each(function () {
                this.value = ''
            })
        })
    }
    function g(m) {
        var l = {},
            n = /^jQuery\d+$/;
        $.each(m.attributes, function (p, o) {
            if (o.specified && !n.test(o.name)) {
                l[o.name] = o.value
            }
        });
        return l
    }
    function b(m, n) {
        var l = this,
            o = $(l);
        if (l.value == o.attr('placeholder') && o.hasClass('placeholder')) {
            if (o.data('placeholder-password')) {
                o = o.hide().next().show().attr('id', o.removeAttr('id').data('placeholder-id'));
                if (m === true) {
                    return o[0].value = n
                }
                o.focus()
            } else {
                l.value = '';
                o.removeClass('placeholder');
                l == h.activeElement && l.select()
            }
        }
    }
    function e() {
        var q, l = this,
            p = $(l),
            m = p,
            o = this.id;
        if (l.value == '') {
            if (l.type == 'password') {
                if (!p.data('placeholder-textinput')) {
                    try {
                        q = p.clone().attr({
                            type: 'text'
                        })
                    } catch (n) {
                        q = $('<input>').attr($.extend(g(this), {
                            type: 'text'
                        }))
                    }
                    q.removeAttr('name').data({
                        'placeholder-password': true,
                        'placeholder-id': o
                    }).bind('focus.placeholder', b);
                    p.data({
                        'placeholder-textinput': q,
                        'placeholder-id': o
                    }).before(q)
                }
                p = p.removeAttr('id').hide().prev().attr('id', o).show()
            }
            p.addClass('placeholder');
            p[0].value = p.attr('placeholder')
        } else {
            p.removeClass('placeholder')
        }
    }
}(this, document, jQuery));
jQuery.fn.tooltip = function (a) {
    a = a || {};
    var b = a.defaultClass || "tooltip_label",
        e = a.xpos || "center",
        g = a.ypos || "top",
        c;
    this.each(function () {
        var a = $(this).off(".tooltip");
        $(".tooltip_label").remove();
        a.on("mouseenter.tooltip", function (f) {
            f.preventDefault();
            void 0 != a.attr("title") && (a.data("title", a.attr("title")), a.removeAttr("title"));
            var h = a.hasClass("tooltip-bot") ? "bottom" : g,
                j = void 0 != a.attr("data-text") ? '<div class="text">' + a.attr("data-text") + "</div>" : "",
                d = a.data("title") || "";
            f = a.offset();
            var k = a.hasClass("tooltip-white") ? " white" : a.hasClass("tooltip-badge") ? " badge" : "";
            if (!("undefined" == d || 0 == d.length)) {
                c = $('<div class="' + b + k + '">' + ("bottom" == h ? '<div class="arrow top"></div>' : "") + '<div class="tip"><div class="title">' + d + "</div>" + j + "</div>" + ("top" == h ? '<div class="arrow bottom"></div>' : "") + "</div>");
                $("body").append(c);
                switch (e) {
                case "right":
                    j = d = f.left + a.outerWidth();
                    d -= c.outerWidth();
                    break;
                case "left":
                    d = f.left;
                    j = d + c.outerWidth();
                    break;
                default:
                    d = f.left + a.outerWidth() / 2, j = d + c.outerWidth() / 2, d -= c.outerWidth() / 2
                }
                switch (h) {
                case "bottom":
                    h = f.top + a.outerHeight();
                    c.addClass("bottom");
                    break;
                default:
                    h = f.top - c.outerHeight(), c.addClass("top")
                }
                c.css({
                    top: h,
                    left: j > (window.innerWidth ? window.innerWidth : document.body.clientWidth) ? f.left + a.outerWidth() - c.outerWidth() : 0 > d ? f.left : d
                });
                "right" == e || j > (window.innerWidth ? window.innerWidth : document.body.clientWidth) ? c.addClass("right") : "left" == e || 0 > d ? c.addClass("left") : c.addClass("center")
            }
        }).on("mouseleave.tooltip", function () {
            null != c && c.remove();
            c = null
        }).on("mousedown.tooltip", function () {
            null != c && c.remove();
            c = null
        })
    })
};
(function () {
    jQuery.each({
        getSelection: function () {
            var a = this.jquery ? this[0] : this;
            return ("selectionStart" in a &&
            function () {
                var b = a.selectionEnd - a.selectionStart;
                return {
                    start: a.selectionStart,
                    end: a.selectionEnd,
                    length: b,
                    text: a.value.substr(a.selectionStart, b)
                }
            } || document.selection &&
            function () {
                a.focus();
                var b = document.selection.createRange();
                if (null == b) return {
                    start: 0,
                    end: a.value.length,
                    length: 0
                };
                var e = a.createTextRange(),
                    g = e.duplicate();
                e.moveToBookmark(b.getBookmark());
                g.setEndPoint("EndToStart", e);
                return {
                    start: g.text.length,
                    end: g.text.length + b.text.length,
                    length: b.text.length,
                    text: b.text
                }
            } ||
            function () {
                return {
                    start: 0,
                    end: a.value.length,
                    length: 0
                }
            })()
        },
        replaceSelection: function (a) {
            var b = this.jquery ? this[0] : this,
                e = a || "";
            return ("selectionStart" in b &&
            function () {
                b.value = b.value.substr(0, b.selectionStart) + e + b.value.substr(b.selectionEnd, b.value.length);
                return this
            } || document.selection &&
            function () {
                b.focus();
                document.selection.createRange().text = e;
                return this
            } ||
            function () {
                b.value += e;
                return this
            })()
        }
    }, function (a) {
        jQuery.fn[a] = this
    })
})();
jQuery.fn.extend({
    insertAtCaret: function (a) {
        return this.each(function () {
            if (document.selection) this.focus(), sel = document.selection.createRange(), sel.text = a, this.focus();
            else if (this.selectionStart || "0" == this.selectionStart) {
                var b = this.selectionStart,
                    e = this.selectionEnd,
                    g = this.scrollTop;
                this.value = this.value.substring(0, b) + a + this.value.substring(e, this.value.length);
                this.focus();
                this.selectionStart = b + a.length;
                this.selectionEnd = b + a.length;
                this.scrollTop = g
            } else this.value += a, this.focus()
        })
    }
});
jQuery.fn.progress = function (b) {
    function j(b) {
        b = b.toString();
        if (void 0 != c[b]) {
            l = parseInt(b);
            $(".text", r).html('<span class="num">' + c[b].num + "</span>" + c[b].title);
            m.empty();
            for (var e = c[b].clases.length, d = 0; d < e; d++) m.append('<li class="' + c[b].clases[d].status_class + " " + (c[b].clases[d].exam ? "exam" : "") + " " + (c[b].clases[d].id == s ? "actual" : "") + ' tooltip" data-unidad="' + c[b].num + '" data-title="' + c[b].clases[d].titulo + '"><a href="' + c[b].clases[d].url + '"><span class="num">' + b + "." + c[b].clases[d].num + '</span><span class="icon"></span></a></li>');
            m.find("a").click(function () {
                p.removeClass("hover")
            });
            $(".tooltip", m).tooltip();
            b = $("li", m);
            var f = b.length;
            b.each(function () {
                $(this).width(100 / f + "%")
            });
            a.ajaxify()
        }
    }
    function q(b, c) {
        var d = $(".circlebar." + b, k);
        d.html('<div class="slice' + (50 < c ? " gt50" : "") + '"><div class="pie"></div>' + (50 < c ? '<div class="pie fill"></div>' : "") + "</div>");
        var e = 3.6 * c;
        d.find(".slice .pie").css({
            "-moz-transform": "rotate(" + e + "deg)",
            "-webkit-transform": "rotate(" + e + "deg)",
            "-o-transform": "rotate(" + e + "deg)",
            transform: "rotate(" + e + "deg)"
        })
    }
    b = b || {};
    var c = b.data || {},
        f = b.start,
        s = b.actual,
        n = [],
        l = 1,
        k = this;
    b = k.find(".progress");
    var r = $(".unidad", b),
        m = $("ul", b),
        p = b.parent().parent(),
        e;
    for (e in c) n.push(parseInt(c[e].num));
    n.sort();
    $("#menu_unidades").remove();
    e = $('<div id="menu_unidades" class="dropmenu floated fittowidth fixed"><div class="arrow"><span></span><span></span></div><ul></ul></div>');
    e.appendTo($("#main"));
    e = e.find("ul");
    for (var g in c) {
        var h = $('<li><a href="#" data-num="' + c[g].num + '"><span class="num">' + c[g].num + "</span>" + c[g].title + "</a></li>");
        e.append(h);
        $("a", h).click(function () {
            j($(this).attr("data-num"));
            $(document).click();
            return !1
        })
    }
    if (null != f) j(f);
    else {
        e = 0;
        var h = 1,
            d;
        for (d in c) {
            g = c[d].clases.length;
            for (f = 0; f < g; f++) c[d].clases[f].fecha > e && (e = c[d].clases[f].fecha, h = d)
        }
        e ? (j(h), $(".lastclass", b).show(), $(".lastclass .timetag", b).html(moment.unix(e).format("YYYY-MM-DDTHH:mm:ss Z")), a.updateTimeTags()) : j(1)
    }
    p.hover(function () {
        $(this).addClass("hover")
    }, function () {
        $("#menu_unidades").is(":visible") || $(this).removeClass("hover")
    });
    k.find(".next").click(function () {
        l < n.length && j(l + 1)
    });
    k.find(".prev").click(function () {
        1 < l && j(l - 1)
    });
    e = h = b = 0;
    for (d in c) {
        g = c[d].clases.length;
        b += g;
        for (f = 0; f < g; f++) switch (c[d].clases[f].status_class) {
        case "complete":
            h++;
            break;
        case "oncourse":
            e++
        }
    }
    d = Math.round(100 * h / b);
    g = d + Math.round(100 * e / b);
    b = d + Math.floor(Math.round(100 * e / b) / 2);
    q("complete", d);
    q("oncourse", g);
    k.find(".percent .num").html(b + (100 > b ? '<span class="per">%</span>' : ""));
    100 <= b && k.find(".percent .num").addClass("hundred")
};
jQuery.fn.exam = function (d) {
    function w() {
        l.empty();
        for (var c = 100 / r, b = 0; b < r; b++) l.append('<li style="width:' + c + '%"><a></a><span class="line"></span></li>');
        c = m.length;
        if (0 < c) {
            for (var e = l.find("li"), b = 0; b < c; b++) e.eq(b).addClass(1 == parseInt(m[b].status) ? "complete" : "incorrect"), 1 == m[b].status && n++;
            k = c
        }
    }
    function s() {
        e.empty();
        a.loader(!0);
        a.load("/ajax/clase", "POST", {
            action: "exam_question",
            id: j
        }, function (c) {
            if (null != c.preg) {
                l.find("li").eq(k).addClass("actual");
                if (-1 == c.preg.tipo.indexOf("code")) {
                    $('<div class="q">' + c.preg.texto + "</div>").appendTo(e);
                    var b = $('<div class="ans block"><ul></ul></div>').appendTo(e).find("ul")
                }
                switch (c.preg.tipo) {
                case "choice":
                    for (var g = c.ans.length, h = 0; h < g; h++) b.append('<li><label><input type="radio" name="answer" value="' + c.ans[h].id + '" />' + c.ans[h].texto + "</label></li>");
                    break;
                case "multi":
                    b.append('<li class="note">' + f.multipleanswers + "</li>");
                    g = c.ans.length;
                    for (h = 0; h < g; h++) b.append('<li><label><input type="checkbox" name="answer[]" value="' + c.ans[h].id + '" />' + c.ans[h].texto + "</label></li>");
                    break;
                case "val":
                    b.append('<li class="note">' + f.valanswer + "</li>");
                    b.append('<li><input type="text" name="answer" value="" /></li>');
                    break;
                case "codeerror":
                case "codefill":
                case "codeorder":
                    var g = c.preg,
                        b = c.ans,
                        d = $('<pre class="prettyprint codebox ans"></pre>').appendTo(e);
                    $('<input type="hidden" name="type" value="' + g.tipo + '" />').appendTo(e);
                    switch (g.tipo) {
                    case "codeerror":
                        $('<div class="q">' + (g.texto ? g.texto : f.codeerror_q) + "</div>").prependTo(e);
                        var t = $('<input type="hidden" name="answer" value="" />').appendTo(e),
                            b = u(b[0].texto).replace(/(?:\[\[)([\s\S]+?)(?:\]\])/ig, "<a class='codeblock'>$1</a>");
                        d.html(b);
                        d.find("a.codeblock").each(function (b) {
                            $(this).click(function () {
                                t.val(b + 1);
                                d.find("a.codeblock").removeClass("sel");
                                $(this).addClass("sel")
                            })
                        });
                        break;
                    case "codefill":
                        $('<div class="q">' + (g.texto ? g.texto : f.codefill_q) + "</div>").prependTo(e);
                        b = u(b[0].texto).replace(/(?:\[\[)([\s\S]+?)(?:\]\])/ig, "<input type='text' name='answer[]' class='codeinput' />");
                        d.html(b);
                        break;
                    case "codeorder":
                        $('<div class="q">' + (g.texto ? g.texto : f.codeorder_q) + "</div>").prependTo(e);
                        for (var t = $('<input type="hidden" name="answer" value="" />').appendTo(e), p = $('<ul class="codeorder" />').appendTo(d), g = b.length, h = 0; h < g; h++) p.append('<li id="' + b[h].id + '">' + u(b[h].texto) + "</li>");
                        p.sortable({
                            placeholder: "sortmark",
                            items: "li",
                            opacity: 0.9,
                            forcePlaceholderSize: !0,
                            tolerance: "pointer",
                            addClasses: !1,
                            update: function () {
                                var b = p.sortable("toArray");
                                t.val(b.join(","))
                            }
                        });
                        p.disableSelection()
                    }
                    prettyPrint()
                }
                $('<div class="bottom"><input type="submit" value="' + f.continuar + '" class="boton" /></div>').appendTo(e);
                a.load("/ajax/clase", "POST", {
                    action: "exam_answer_seen",
                    id: j,
                    preg_id: c.preg.id
                });
                q.one("submit.exam", function () {
                    var b = c.preg,
                        d = q.serialize(),
                        d = d + ("&action=exam_answer&id=" + j + "&preg_id=" + b.id);
                    e.find(".ans input").prop("disabled", !0);
                    a.loader(!0);
                    a.load("/ajax/clase", "POST", d, function (c) {
                        e.find(".ans ul");
                        switch (b.tipo) {
                        case "choice":
                        case "multi":
                            for (var d in c.ans) $('input[value="' + c.ans[d] + '"]', e).parent().parent().addClass("correct");
                            break;
                        case "val":
                            c.correct && $('input[type="text"]', e).parent().addClass("correct")
                        }
                        d = $('<div class="result block"><div class="title"></div></div>');
                        e.find(".ans").after(d);
                        c.correct && n++;
                        d.addClass(c.correct ? "correct" : "incorrect");
                        d.find(".title").html(c.correct ? f.correcto : f.incorrecto);
                        c.explain && d.append('<div class="explain">' + c.explain + "</div>");
                        l.find("li").eq(k).removeClass("actual").addClass(c.correct ? "complete" : "incorrect");
                        $(".bottom input", e).val(f.siguiente).one("click", function () {
                            s();
                            k++
                        });
                        a.loader()
                    }, "json");
                    return !1
                })
            } else b = Math.round(100 * n / r), msg = 70 <= b ? f.endmsg_1 : 40 <= b ? f.endmsg_2 : f.endmsg_3, b = $('<div class="end"><div class="block"><h1>' + f.finish + '</h1><div class="score ' + (70 > b ? "red" : "") + '"><span class="user">' + b + '</span>/<span class="total">100</span></div><div class="msg">' + msg + "</div></div></div>"), e.append(b), 1 != x && ($('<input type="button" value="' + f.takeagain + '" class="boton big" />').appendTo(b).click(function () {
                m = {};
                n = k = 0;
                w();
                s();
                a.sendProgress(v, j, 1)
            }), $('<input type="button" value="' + f.resultados + '" class="boton big" />').appendTo(b).click(function () {
                a.reloadURL()
            })), a.load("/ajax/clase", "POST", {
                action: "exam_end",
                id: j
            }), a.sendProgress(v, j, 2);
            a.loader()
        }, "json")
    }
    function u(c) {
        return String(c).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    d = d || {};
    var j = d.id || 0,
        q = this,
        e = $(".examblock", q),
        l = $(".progress ul", q),
        v = d.curso_id,
        r = d.limit || 10,
        x = d.intentos || 0,
        m = d.pre || {},
        k = 0,
        n = 0,
        f = d.lang;
    0 < j && (w(), $("#startexam").val(0 < k ? f.continuarexam : f.startexam).click(function () {
        s();
        a.sendProgress(v, j, 1)
    }))
};
jQuery.fn.notepad = function (l) {
    function m(b) {
        f.find("li.list").remove();
        for (var c in e) $('<li class="list" data-id="' + e[c].id + '"><a class="no-ajax">' + e[c].titulo + "</a></li>").appendTo(f).click(function () {
            v($(this).attr("data-id"))
        });
        if (b) {
            var d = b = 0;
            for (c in e) e[c].fecha > d && (d = e[c].fecha, b = e[c].id);
            0 < b && (v(b), $(n).focus())
        }
    }
    function v(b) {
        if ((j || confirm(d.perdercambiosnota)) && b != g) clearInterval(t), k(d.cargandonota), a.load("/ajax/notas?get", "POST", {
            id: b
        }, function (c) {
            c.error || (w(b, c.nota.titulo), p = c = c.nota.texto, h.setCode(c), x())
        }, !0)
    }
    function x() {
        t = setInterval(function () {
            j || y()
        }, z)
    }
    function k(b) {
        q.find(".title").html(b)
    }
    function r(b) {
        b ? (g = 0, h.setCode(""), k(d.notasinguardar), s()) : p != h.getCode() ? a.loadAjaxPopup("notas?confirm", "narrow") : r(!0)
    }
    function y() {
        0 < g ? a.load("/ajax/notas?save", "POST", {
            id: g,
            nota: h.getCode()
        }, function (b) {
            b.error || s(!0)
        }, !0) : u()
    }
    function u() {
        var b = h.getCode();
        if (0 >= b.length) return !1;
        a.loadAjaxPopup("notas?add", "narrow", "POST", {
            nota: b
        })
    }
    function w(b, c, d) {
        g = b;
        k(c);
        d && (e.push({
            id: b,
            titulo: c
        }), m());
        s(!0)
    }
    function s(b) {
        b ? (q.find(".saved-msg").show(), j = !0, p = h.getCode()) : (q.find(".saved-msg").hide(), j = !1)
    }
    l = l || {};
    var n = this,
        h = n.find("textarea"),
        f = n.find(".dropmenu > ul"),
        q = n.find(".head"),
        g = 0,
        j = !0,
        p = "<p><br></p>",
        e = {},
        t, z = l.savetime || 3E4,
        d = l.lang;
    h.redactor({
        buttons: "formatting | bold italic underline | unorderedlist orderedlist | fontcolor backcolor | horizontalrule |".split(" "),
        formattingTags: ["p", "h1", "blockquote", "pre"],
        allowedTags: "code span div a br p b i del strike u blockquote ul ol li hr pre code strong em h1".split(" "),
        keyupCallback: function () {
            j && p != h.getCode() && (s(), clearInterval(t), x())
        },
        autoresize: !1,
        minHeight: 0 < $(".videoframe").length ? $(".videoframe").height() - 111 : 300
    });
    k(d.notasinguardar);
    $('<li><a class="no-ajax">' + d.guardar + "</a></li>").appendTo(f).find("a").click(function () {
        y()
    });
    $('<li><a class="no-ajax">' + d.guardarnueva + "</a></li>").appendTo(f).find("a").click(function () {
        u()
    });
    $('<li><a class="no-ajax">' + d.editartitulo + "</a></li>").appendTo(f).find("a").click(function () {
        0 < g ? (title = q.find(".title").text(), a.loadAjaxPopup("notas?edittitle", "narrow", "POST", {
            id: g,
            title: title
        })) : u()
    });
    $('<li><a class="no-ajax">' + d.eliminarnotaactual + "</a></li>").appendTo(f).find("a").click(function () {
        0 < g && a.loadAjaxPopup("notas?delete", "narrow", "POST", {
            id: g
        })
    });
    $('<li class="sep"></li>').appendTo(f);
    $('<li><a class="no-ajax">' + d.nuevanota + "</a></li>").appendTo(f).find("a").click(function () {
        r()
    });
    $('<li class="sep"></li><li class="title">' + d.misnotas + "</li>").appendTo(f);
    a.load("/ajax/notas?list", "GET", {}, function (b) {
        b.error || (e = b.notas, m(!0))
    }, !0);
    window.onbeforeunload = function () {
        if (!j) return d.unsavednote_msg
    };
    $.extend({
        confirmNewNote: function () {
            r(!0)
        },
        newSavedNote: function (b, c) {
            w(b, c, !0)
        },
        deletedNote: function (b) {
            for (var c in e) if (e[c].id == b) {
                e.splice(c, 1);
                break
            }
            m();
            r(!0)
        },
        updatedNoteTitle: function (b, c) {
            for (var d in e) if (e[d].id == b) {
                e[d].titulo = c;
                break
            }
            k(c);
            m()
        }
    })
};
(function (e) {
    function n(a, b) {
        if (this.createTextRange) {
            var c = this.createTextRange();
            c.collapse(!0);
            c.moveStart("character", a);
            c.moveEnd("character", b - a);
            c.select()
        } else this.setSelectionRange && (this.focus(), this.setSelectionRange(a, b))
    }
    function p(a) {
        var b = this.value.length;
        a = "start" == a.toLowerCase() ? "Start" : "End";
        if (document.selection) {
            var b = document.selection.createRange(),
                c;
            c = b.duplicate();
            c.expand("textedit");
            c.setEndPoint("EndToEnd", b);
            c = c.text.length - b.text.length;
            b = c + b.text.length;
            return "Start" == a ? c : b
        }
        "undefined" != typeof this["selection" + a] && (b = this["selection" + a]);
        return b
    }
    var u = {
        188: 44,
        109: 45,
        190: 46,
        191: 47,
        192: 96,
        220: 92,
        222: 39,
        221: 93,
        219: 91,
        173: 45,
        187: 61,
        186: 59,
        189: 45,
        110: 46
    },
        v = {
            96: "~",
            49: "!",
            50: "@",
            51: "#",
            52: "$",
            53: "%",
            54: "^",
            55: "&",
            56: "*",
            57: "(",
            48: ")",
            45: "_",
            61: "+",
            91: "{",
            93: "}",
            92: "|",
            59: ":",
            39: '"',
            44: "<",
            46: ">",
            47: "?"
        };
    e.fn.number = function (a, b, c, l) {
        l = "undefined" === typeof l ? "," : l;
        c = "undefined" === typeof c ? "." : c;
        b = "undefined" === typeof b ? 0 : b;
        var d = "\\u" + ("0000" + c.charCodeAt(0).toString(16)).slice(-4),
            q = RegExp("[^" + d + "0-9]", "g"),
            r = RegExp(d, "g");
        return !0 === a ? this.is("input:text") ? this.on({
            "keydown.format": function (f) {
                var a = e(this),
                    j = a.data("numFormat"),
                    g = f.keyCode ? f.keyCode : f.which,
                    d = "",
                    h = p.apply(this, ["start"]),
                    m = p.apply(this, ["end"]),
                    k = "",
                    k = !1;
                u.hasOwnProperty(g) && (g = u[g]);
                !f.shiftKey && 65 <= g && 90 >= g ? g += 32 : !f.shiftKey && 69 <= g && 105 >= g ? g -= 48 : f.shiftKey && v.hasOwnProperty(g) && (d = v[g]);
                "" == d && (d = String.fromCharCode(g));
                if (8 !== g && d != c && !d.match(/[0-9]/)) {
                    a = f.keyCode ? f.keyCode : f.which;
                    if (46 == a || 8 == a || 9 == a || 27 == a || 13 == a || (65 == a || 82 == a) && !0 === (f.ctrlKey || f.metaKey) || 35 <= a && 39 >= a) return;
                    f.preventDefault();
                    return !1
                }(0 == h && m == this.value.length || 0 == a.val()) && !f.metaKey && !f.ctrlKey && !f.altKey && 1 === d.length && 0 != d ? (h = m = 1, this.value = "", j.init = 0 < b ? -1 : 0, j.c = 0 < b ? -(b + 1) : 0, n.apply(this, [0, 0])) : j.c = m - this.value.length;
                if (0 < b && d == c && h == this.value.length - b - 1) j.c++, j.init = Math.max(0, j.init), f.preventDefault(), k = this.value.length + j.c;
                else if (d == c) j.init = Math.max(0, j.init), f.preventDefault();
                else if (0 < b && 8 == g && h == this.value.length - b) f.preventDefault(), j.c--, k = this.value.length + j.c;
                else if (0 < b && 8 == g && h > this.value.length - b) {
                    if ("" === this.value) return;
                    "0" != this.value.slice(h - 1, h) && (k = this.value.slice(0, h - 1) + "0" + this.value.slice(h), a.val(k.replace(q, "").replace(r, c)));
                    f.preventDefault();
                    j.c--;
                    k = this.value.length + j.c
                } else 8 == g && this.value.slice(h - 1, h) == l ? (f.preventDefault(), j.c--, k = this.value.length + j.c) : 0 < b && (h == m && this.value.length > b + 1 && h > this.value.length - b - 1 && isFinite(+d) && !f.metaKey && !f.ctrlKey && !f.altKey && 1 === d.length) && (this.value = m === this.value.length ? this.value.slice(0, h - 1) : this.value.slice(0, h) + this.value.slice(h + 1), k = h);
                !1 !== k && n.apply(this, [k, k]);
                a.data("numFormat", j)
            },
            "keyup.format": function (a) {
                var c = e(this),
                    d = c.data("numFormat");
                a = a.keyCode ? a.keyCode : a.which;
                var g = p.apply(this, ["start"]);
                "" === this.value || (48 > a || 57 < a) && (96 > a || 105 < a) && 8 !== a || (c.val(c.val()), 0 < b && (1 > d.init ? (g = this.value.length - b - (0 > d.init ? 1 : 0), d.c = g - this.value.length, d.init = 1, c.data("numFormat", d)) : g > this.value.length - b && 8 != a && (d.c++, c.data("numFormat", d))), c = this.value.length + d.c, n.apply(this, [c, c]))
            },
            "paste.format": function (a) {
                var b = e(this),
                    c = a.originalEvent,
                    d = null;
                window.clipboardData && window.clipboardData.getData ? d = window.clipboardData.getData("Text") : c.clipboardData && c.clipboardData.getData && (d = c.clipboardData.getData("text/plain"));
                b.val(d);
                a.preventDefault();
                return !1
            }
        }).each(function () {
            var a = e(this).data("numFormat", {
                c: -(b + 1),
                decimals: b,
                thousands_sep: l,
                dec_point: c,
                regex_dec_num: q,
                regex_dec: r,
                init: !1
            });
            "" !== this.value && a.val(a.val())
        }) : this.each(function () {
            var a = e(this),
                d = +a.text().replace(q, "").replace(r, ".");
            a.number(!isFinite(d) ? 0 : +d, b, c, l)
        }) : this.text(e.number.apply(window, arguments))
    };
    var s = null,
        t = null;
    e.valHooks.text ? (s = e.valHooks.text.get, t = e.valHooks.text.set) : e.valHooks.text = {};
    e.valHooks.text.get = function (a) {
        var b = e(a).data("numFormat");
        if (b) {
            if ("" === a.value) return "";
            a = +a.value.replace(b.regex_dec_num, "").replace(b.regex_dec, ".");
            return "" + (isFinite(a) ? a : 0)
        }
        if (e.isFunction(s)) return s(a)
    };
    e.valHooks.text.set = function (a, b) {
        var c = e(a).data("numFormat");
        if (c) return a.value = e.number(b, c.decimals, c.dec_point, c.thousands_sep);
        if (e.isFunction(t)) return t(a, b)
    };
    e.number = function (a, b, c, e) {
        e = "undefined" === typeof e ? "," : e;
        c = "undefined" === typeof c ? "." : c;
        b = !isFinite(+b) ? 0 : Math.abs(b);
        var d = "\\u" + ("0000" + c.charCodeAt(0).toString(16)).slice(-4);
        a = (a + "").replace(RegExp(d, "g"), ".").replace(RegExp("[^0-9+-Ee.]", "g"), "");
        a = !isFinite(+a) ? 0 : +a;
        d = "";
        d = function (a, b) {
            var c = Math.pow(10, b);
            return "" + Math.round(a * c) / c
        };
        d = (b ? d(a, b) : "" + Math.round(a)).split(".");
        3 < d[0].length && (d[0] = d[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, e));
        if ((d[1] || "").length < b) d[1] = d[1] || "", d[1] += Array(b - d[1].length + 1).join("0");
        return d.join(c)
    }
})(jQuery);
(function (d, f) {
    var a = d.jQuery || d.Cowboy || (d.Cowboy = {}),
        e;
    a.throttle = e = function (j, c, b, g) {
        function d() {
            function a() {
                e = +new Date;
                b.apply(l, m)
            }
            function n() {
                h = f
            }
            var l = this,
                k = +new Date - e,
                m = arguments;
            g && !h && a();
            h && clearTimeout(h);
            g === f && k > j ? a() : !0 !== c && (h = setTimeout(g ? n : a, g === f ? j - k : j))
        }
        var h, e = 0;
        "boolean" !== typeof c && (g = b, b = c, c = f);
        a.guid && (d.guid = b.guid = b.guid || a.guid++);
        return d
    };
    a.debounce = function (a, c, b) {
        return b === f ? e(a, c, !1) : e(a, b, !1 !== c)
    }
})(this);
/*!
 * MediaElement.js
 * HTML5 <video> and <audio> shim and player
 * http://mediaelementjs.com/
 *
 * Creates a JavaScript object that mimics HTML5 MediaElement API
 * for browsers that don't understand HTML5 or can't play the provided codec
 * Can play MP4 (H.264), Ogg, WebM, FLV, WMV, WMA, ACC, and MP3
 *
 * Copyright 2010-2013, John Dyer (http://j.hn)
 * License: MIT
 *
 */
var mejs = mejs || {};
mejs.version = "2.12.0";
mejs.meIndex = 0;
mejs.plugins = {
    silverlight: [{
        version: [3, 0],
        types: ["video/mp4", "video/m4v", "video/mov", "video/wmv", "audio/wma", "audio/m4a", "audio/mp3", "audio/wav", "audio/mpeg"]
    }],
    flash: [{
        version: [9, 0, 124],
        types: ["video/mp4", "video/m4v", "video/mov", "video/flv", "video/rtmp", "video/x-flv", "audio/flv", "audio/x-flv", "audio/mp3", "audio/m4a", "audio/mpeg", "video/youtube", "video/x-youtube"]
    }],
    youtube: [{
        version: null,
        types: ["video/youtube", "video/x-youtube", "audio/youtube", "audio/x-youtube"]
    }],
    vimeo: [{
        version: null,
        types: ["video/vimeo", "video/x-vimeo"]
    }]
};
mejs.Utility = {
    encodeUrl: function (a) {
        return encodeURIComponent(a)
    },
    escapeHTML: function (a) {
        return a.toString().split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;")
    },
    absolutizeUrl: function (a) {
        var b = document.createElement("div");
        b.innerHTML = '<a href="' + this.escapeHTML(a) + '">x</a>';
        return b.firstChild.href
    },
    getScriptPath: function (a) {
        for (var b = 0, c, d = "", e = "", f, g, h = document.getElementsByTagName("script"), l = h.length, j = a.length; b < l; b++) {
            f = h[b].src;
            c = f.lastIndexOf("/");
            if (c > -1) {
                g = f.substring(c + 1);
                f = f.substring(0, c + 1)
            } else {
                g = f;
                f = ""
            }
            for (c = 0; c < j; c++) {
                e = a[c];
                e = g.indexOf(e);
                if (e > -1) {
                    d = f;
                    break
                }
            }
            if (d !== "") break
        }
        return d
    },
    secondsToTimeCode: function (a, b, c, d) {
        if (typeof c == "undefined") c = false;
        else if (typeof d == "undefined") d = 25;
        var e = Math.floor(a / 3600) % 24,
            f = Math.floor(a / 60) % 60,
            g = Math.floor(a % 60);
        a = Math.floor((a % 1 * d).toFixed(3));
        return (b || e > 0 ? (e < 10 ? "0" + e : e) + ":" : "") + (f < 10 ? "0" + f : f) + ":" + (g < 10 ? "0" + g : g) + (c ? ":" + (a < 10 ? "0" + a : a) : "")
    },
    timeCodeToSeconds: function (a, b, c, d) {
        if (typeof c == "undefined") c = false;
        else if (typeof d == "undefined") d = 25;
        a = a.split(":");
        b = parseInt(a[0], 10);
        var e = parseInt(a[1], 10),
            f = parseInt(a[2], 10),
            g = 0,
            h = 0;
        if (c) g = parseInt(a[3]) / d;
        return h = b * 3600 + e * 60 + f + g
    },
    convertSMPTEtoSeconds: function (a) {
        if (typeof a != "string") return false;
        a = a.replace(",", ".");
        var b = 0,
            c = a.indexOf(".") != -1 ? a.split(".")[1].length : 0,
            d = 1;
        a = a.split(":").reverse();
        for (var e = 0; e < a.length; e++) {
            d = 1;
            if (e > 0) d = Math.pow(60, e);
            b += Number(a[e]) * d
        }
        return Number(b.toFixed(c))
    },
    removeSwf: function (a) {
        var b = document.getElementById(a);
        if (b && /object|embed/i.test(b.nodeName)) if (mejs.MediaFeatures.isIE) {
            b.style.display = "none";
            (function () {
                b.readyState == 4 ? mejs.Utility.removeObjectInIE(a) : setTimeout(arguments.callee, 10)
            })()
        } else b.parentNode.removeChild(b)
    },
    removeObjectInIE: function (a) {
        if (a = document.getElementById(a)) {
            for (var b in a) if (typeof a[b] == "function") a[b] = null;
            a.parentNode.removeChild(a)
        }
    }
};
mejs.PluginDetector = {
    hasPluginVersion: function (a, b) {
        var c = this.plugins[a];
        b[1] = b[1] || 0;
        b[2] = b[2] || 0;
        return c[0] > b[0] || c[0] == b[0] && c[1] > b[1] || c[0] == b[0] && c[1] == b[1] && c[2] >= b[2] ? true : false
    },
    nav: window.navigator,
    ua: window.navigator.userAgent.toLowerCase(),
    plugins: [],
    addPlugin: function (a, b, c, d, e) {
        this.plugins[a] = this.detectPlugin(b, c, d, e)
    },
    detectPlugin: function (a, b, c, d) {
        var e = [0, 0, 0],
            f;
        if (typeof this.nav.plugins != "undefined" && typeof this.nav.plugins[a] == "object") {
            if ((c = this.nav.plugins[a].description) && !(typeof this.nav.mimeTypes != "undefined" && this.nav.mimeTypes[b] && !this.nav.mimeTypes[b].enabledPlugin)) {
                e = c.replace(a, "").replace(/^\s+/, "").replace(/\sr/gi, ".").split(".");
                for (a = 0; a < e.length; a++) e[a] = parseInt(e[a].match(/\d+/), 10)
            }
        } else if (typeof window.ActiveXObject != "undefined") try {
            if (f = new ActiveXObject(c)) e = d(f)
        } catch (g) {}
        return e
    }
};
mejs.PluginDetector.addPlugin("flash", "Shockwave Flash", "application/x-shockwave-flash", "ShockwaveFlash.ShockwaveFlash", function (a) {
    var b = [];
    if (a = a.GetVariable("$version")) {
        a = a.split(" ")[1].split(",");
        b = [parseInt(a[0], 10), parseInt(a[1], 10), parseInt(a[2], 10)]
    }
    return b
});
mejs.PluginDetector.addPlugin("silverlight", "Silverlight Plug-In", "application/x-silverlight-2", "AgControl.AgControl", function (a) {
    var b = [0, 0, 0, 0],
        c = function (d, e, f, g) {
            for (; d.isVersionSupported(e[0] + "." + e[1] + "." + e[2] + "." + e[3]);) e[f] += g;
            e[f] -= g
        };
    c(a, b, 0, 1);
    c(a, b, 1, 1);
    c(a, b, 2, 1E4);
    c(a, b, 2, 1E3);
    c(a, b, 2, 100);
    c(a, b, 2, 10);
    c(a, b, 2, 1);
    c(a, b, 3, 1);
    return b
});
mejs.MediaFeatures = {
    init: function () {
        var a = this,
            b = document,
            c = mejs.PluginDetector.nav,
            d = mejs.PluginDetector.ua.toLowerCase(),
            e, f = ["source", "track", "audio", "video"];
        a.isiPad = d.match(/ipad/i) !== null;
        a.isiPhone = d.match(/iphone/i) !== null;
        a.isiOS = a.isiPhone || a.isiPad;
        a.isAndroid = d.match(/android/i) !== null;
        a.isBustedAndroid = d.match(/android 2\.[12]/) !== null;
        a.isBustedNativeHTTPS = location.protocol === "https:" && (d.match(/android [12]\./) !== null || d.match(/macintosh.* version.* safari/) !== null);
        a.isIE = c.appName.toLowerCase().indexOf("microsoft") != -1;
        a.isChrome = d.match(/chrome/gi) !== null;
        a.isFirefox = d.match(/firefox/gi) !== null;
        a.isWebkit = d.match(/webkit/gi) !== null;
        a.isGecko = d.match(/gecko/gi) !== null && !a.isWebkit;
        a.isOpera = d.match(/opera/gi) !== null;
        a.hasTouch = "ontouchstart" in window;
        a.svg = !! document.createElementNS && !! document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect;
        for (c = 0; c < f.length; c++) e = document.createElement(f[c]);
        a.supportsMediaTag = typeof e.canPlayType !== "undefined" || a.isBustedAndroid;
        try {
            e.canPlayType("video/mp4")
        } catch (g) {
            a.supportsMediaTag = false
        }
        a.hasSemiNativeFullScreen = typeof e.webkitEnterFullscreen !== "undefined";
        a.hasWebkitNativeFullScreen = typeof e.webkitRequestFullScreen !== "undefined";
        a.hasMozNativeFullScreen = typeof e.mozRequestFullScreen !== "undefined";
        a.hasTrueNativeFullScreen = a.hasWebkitNativeFullScreen || a.hasMozNativeFullScreen;
        a.nativeFullScreenEnabled = a.hasTrueNativeFullScreen;
        if (a.hasMozNativeFullScreen) a.nativeFullScreenEnabled = e.mozFullScreenEnabled;
        if (this.isChrome) a.hasSemiNativeFullScreen = false;
        if (a.hasTrueNativeFullScreen) {
            a.fullScreenEventName = a.hasWebkitNativeFullScreen ? "webkitfullscreenchange" : "mozfullscreenchange";
            a.isFullScreen = function () {
                if (e.mozRequestFullScreen) return b.mozFullScreen;
                else if (e.webkitRequestFullScreen) return b.webkitIsFullScreen
            };
            a.requestFullScreen = function (h) {
                if (a.hasWebkitNativeFullScreen) h.webkitRequestFullScreen();
                else a.hasMozNativeFullScreen && h.mozRequestFullScreen()
            };
            a.cancelFullScreen = function () {
                if (a.hasWebkitNativeFullScreen) document.webkitCancelFullScreen();
                else a.hasMozNativeFullScreen && document.mozCancelFullScreen()
            }
        }
        if (a.hasSemiNativeFullScreen && d.match(/mac os x 10_5/i)) {
            a.hasNativeFullScreen = false;
            a.hasSemiNativeFullScreen = false
        }
    }
};
mejs.MediaFeatures.init();
mejs.HtmlMediaElement = {
    pluginType: "native",
    isFullScreen: false,
    setCurrentTime: function (a) {
        this.currentTime = a
    },
    setMuted: function (a) {
        this.muted = a
    },
    setVolume: function (a) {
        this.volume = a
    },
    stop: function () {
        this.pause()
    },
    setSrc: function (a) {
        for (var b = this.getElementsByTagName("source"); b.length > 0;) this.removeChild(b[0]);
        if (typeof a == "string") this.src = a;
        else {
            var c;
            for (b = 0; b < a.length; b++) {
                c = a[b];
                if (this.canPlayType(c.type)) {
                    this.src = c.src;
                    break
                }
            }
        }
    },
    setVideoSize: function (a, b) {
        this.width = a;
        this.height = b
    }
};
mejs.PluginMediaElement = function (a, b, c) {
    this.id = a;
    this.pluginType = b;
    this.src = c;
    this.events = {};
    this.attributes = {}
};
mejs.PluginMediaElement.prototype = {
    pluginElement: null,
    pluginType: "",
    isFullScreen: false,
    playbackRate: -1,
    defaultPlaybackRate: -1,
    seekable: [],
    played: [],
    paused: true,
    ended: false,
    seeking: false,
    duration: 0,
    error: null,
    tagName: "",
    muted: false,
    volume: 1,
    currentTime: 0,
    play: function () {
        if (this.pluginApi != null) {
            this.pluginType == "youtube" ? this.pluginApi.playVideo() : this.pluginApi.playMedia();
            this.paused = false
        }
    },
    load: function () {
        if (this.pluginApi != null) {
            this.pluginType != "youtube" && this.pluginApi.loadMedia();
            this.paused = false
        }
    },
    pause: function () {
        if (this.pluginApi != null) {
            this.pluginType == "youtube" ? this.pluginApi.pauseVideo() : this.pluginApi.pauseMedia();
            this.paused = true
        }
    },
    stop: function () {
        if (this.pluginApi != null) {
            this.pluginType == "youtube" ? this.pluginApi.stopVideo() : this.pluginApi.stopMedia();
            this.paused = true
        }
    },
    canPlayType: function (a) {
        var b, c, d, e = mejs.plugins[this.pluginType];
        for (b = 0; b < e.length; b++) {
            d = e[b];
            if (mejs.PluginDetector.hasPluginVersion(this.pluginType, d.version)) for (c = 0; c < d.types.length; c++) if (a == d.types[c]) return "probably"
        }
        return ""
    },
    positionFullscreenButton: function (a, b, c) {
        this.pluginApi != null && this.pluginApi.positionFullscreenButton && this.pluginApi.positionFullscreenButton(Math.floor(a), Math.floor(b), c)
    },
    hideFullscreenButton: function () {
        this.pluginApi != null && this.pluginApi.hideFullscreenButton && this.pluginApi.hideFullscreenButton()
    },
    setSrc: function (a) {
        if (typeof a == "string") {
            this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(a));
            this.src = mejs.Utility.absolutizeUrl(a)
        } else {
            var b, c;
            for (b = 0; b < a.length; b++) {
                c = a[b];
                if (this.canPlayType(c.type)) {
                    this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(c.src));
                    this.src = mejs.Utility.absolutizeUrl(a);
                    break
                }
            }
        }
    },
    setCurrentTime: function (a) {
        if (this.pluginApi != null) {
            this.pluginType == "youtube" ? this.pluginApi.seekTo(a) : this.pluginApi.setCurrentTime(a);
            this.currentTime = a
        }
    },
    setVolume: function (a) {
        if (this.pluginApi != null) {
            this.pluginType == "youtube" ? this.pluginApi.setVolume(a * 100) : this.pluginApi.setVolume(a);
            this.volume = a
        }
    },
    setMuted: function (a) {
        if (this.pluginApi != null) {
            if (this.pluginType == "youtube") {
                a ? this.pluginApi.mute() : this.pluginApi.unMute();
                this.muted = a;
                this.dispatchEvent("volumechange")
            } else this.pluginApi.setMuted(a);
            this.muted = a
        }
    },
    setVideoSize: function (a, b) {
        if (this.pluginElement.style) {
            this.pluginElement.style.width = a + "px";
            this.pluginElement.style.height = b + "px"
        }
        this.pluginApi != null && this.pluginApi.setVideoSize && this.pluginApi.setVideoSize(a, b)
    },
    setFullscreen: function (a) {
        this.pluginApi != null && this.pluginApi.setFullscreen && this.pluginApi.setFullscreen(a)
    },
    enterFullScreen: function () {
        this.pluginApi != null && this.pluginApi.setFullscreen && this.setFullscreen(true)
    },
    exitFullScreen: function () {
        this.pluginApi != null && this.pluginApi.setFullscreen && this.setFullscreen(false)
    },
    addEventListener: function (a, b) {
        this.events[a] = this.events[a] || [];
        this.events[a].push(b)
    },
    removeEventListener: function (a, b) {
        if (!a) {
            this.events = {};
            return true
        }
        var c = this.events[a];
        if (!c) return true;
        if (!b) {
            this.events[a] = [];
            return true
        }
        for (i = 0; i < c.length; i++) if (c[i] === b) {
            this.events[a].splice(i, 1);
            return true
        }
        return false
    },
    dispatchEvent: function (a) {
        var b, c, d = this.events[a];
        if (d) {
            c = Array.prototype.slice.call(arguments, 1);
            for (b = 0; b < d.length; b++) d[b].apply(null, c)
        }
    },
    hasAttribute: function (a) {
        return a in this.attributes
    },
    removeAttribute: function (a) {
        delete this.attributes[a]
    },
    getAttribute: function (a) {
        if (this.hasAttribute(a)) return this.attributes[a];
        return ""
    },
    setAttribute: function (a, b) {
        this.attributes[a] = b
    },
    remove: function () {
        mejs.Utility.removeSwf(this.pluginElement.id);
        mejs.MediaPluginBridge.unregisterPluginElement(this.pluginElement.id)
    }
};
mejs.MediaPluginBridge = {
    pluginMediaElements: {},
    htmlMediaElements: {},
    registerPluginElement: function (a, b, c) {
        this.pluginMediaElements[a] = b;
        this.htmlMediaElements[a] = c
    },
    unregisterPluginElement: function (a) {
        delete this.pluginMediaElements[a];
        delete this.htmlMediaElements[a]
    },
    initPlugin: function (a) {
        var b = this.pluginMediaElements[a],
            c = this.htmlMediaElements[a];
        if (b) {
            switch (b.pluginType) {
            case "flash":
                b.pluginElement = b.pluginApi = document.getElementById(a);
                break;
            case "silverlight":
                b.pluginElement = document.getElementById(b.id);
                b.pluginApi = b.pluginElement.Content.MediaElementJS
            }
            b.pluginApi != null && b.success && b.success(b, c)
        }
    },
    fireEvent: function (a, b, c) {
        var d, e;
        a = this.pluginMediaElements[a];
        b = {
            type: b,
            target: a
        };
        for (d in c) {
            a[d] = c[d];
            b[d] = c[d]
        }
        e = c.bufferedTime || 0;
        b.target.buffered = b.buffered = {
            start: function () {
                return 0
            },
            end: function () {
                return e
            },
            length: 1
        };
        a.dispatchEvent(b.type, b)
    }
};
mejs.MediaElementDefaults = {
    mode: "auto",
    plugins: ["flash", "silverlight", "youtube", "vimeo"],
    enablePluginDebug: false,
    type: "",
    pluginPath: mejs.Utility.getScriptPath(["mediaelement.js", "mediaelement.min.js", "mediaelement-and-player.js", "mediaelement-and-player.min.js"]),
    flashName: "flashmediaelement.swf",
    flashStreamer: "",
    enablePluginSmoothing: false,
    enablePseudoStreaming: false,
    pseudoStreamingStartQueryParam: "start",
    silverlightName: "silverlightmediaelement.xap",
    defaultVideoWidth: 480,
    defaultVideoHeight: 270,
    pluginWidth: -1,
    pluginHeight: -1,
    pluginVars: [],
    timerRate: 250,
    startVolume: 0.8,
    success: function () {},
    error: function () {}
};
mejs.MediaElement = function (a, b) {
    return mejs.HtmlMediaElementShim.create(a, b)
};
mejs.HtmlMediaElementShim = {
    create: function (a, b) {
        var c = mejs.MediaElementDefaults,
            d = typeof a == "string" ? document.getElementById(a) : a,
            e = d.tagName.toLowerCase(),
            f = e === "audio" || e === "video",
            g = f ? d.getAttribute("src") : d.getAttribute("href");
        e = d.getAttribute("poster");
        var h = d.getAttribute("autoplay"),
            l = d.getAttribute("preload"),
            j = d.getAttribute("controls"),
            k;
        for (k in b) c[k] = b[k];
        g = typeof g == "undefined" || g === null || g == "" ? null : g;
        e = typeof e == "undefined" || e === null ? "" : e;
        l = typeof l == "undefined" || l === null || l === "false" ? "none" : l;
        h = !(typeof h == "undefined" || h === null || h === "false");
        j = !(typeof j == "undefined" || j === null || j === "false");
        k = this.determinePlayback(d, c, mejs.MediaFeatures.supportsMediaTag, f, g);
        k.url = k.url !== null ? mejs.Utility.absolutizeUrl(k.url) : "";
        if (k.method == "native") {
            if (mejs.MediaFeatures.isBustedAndroid) {
                d.src = k.url;
                d.addEventListener("click", function () {
                    d.play()
                }, false)
            }
            return this.updateNative(k, c, h, l)
        } else if (k.method !== "") return this.createPlugin(k, c, e, h, l, j);
        else {
            this.createErrorMessage(k, c, e);
            return this
        }
    },
    determinePlayback: function (a, b, c, d, e) {
        var f = [],
            g, h, l, j = {
                method: "",
                url: "",
                htmlMediaElement: a,
                isVideo: a.tagName.toLowerCase() != "audio"
            },
            k;
        if (typeof b.type != "undefined" && b.type !== "") if (typeof b.type == "string") f.push({
            type: b.type,
            url: e
        });
        else for (g = 0; g < b.type.length; g++) f.push({
            type: b.type[g],
            url: e
        });
        else if (e !== null) {
            l = this.formatType(e, a.getAttribute("type"));
            f.push({
                type: l,
                url: e
            })
        } else for (g = 0; g < a.childNodes.length; g++) {
            h = a.childNodes[g];
            if (h.nodeType == 1 && h.tagName.toLowerCase() == "source") {
                e = h.getAttribute("src");
                l = this.formatType(e, h.getAttribute("type"));
                h = h.getAttribute("media");
                if (!h || !window.matchMedia || window.matchMedia && window.matchMedia(h).matches) f.push({
                    type: l,
                    url: e
                })
            }
        }
        if (!d && f.length > 0 && f[0].url !== null && this.getTypeFromFile(f[0].url).indexOf("audio") > -1) j.isVideo = false;
        if (mejs.MediaFeatures.isBustedAndroid) a.canPlayType = function (m) {
            return m.match(/video\/(mp4|m4v)/gi) !== null ? "maybe" : ""
        };
        if (c && (b.mode === "auto" || b.mode === "auto_plugin" || b.mode === "native") && !mejs.MediaFeatures.isBustedNativeHTTPS) {
            if (!d) {
                g = document.createElement(j.isVideo ? "video" : "audio");
                a.parentNode.insertBefore(g, a);
                a.style.display = "none";
                j.htmlMediaElement = a = g
            }
            for (g = 0; g < f.length; g++) if (a.canPlayType(f[g].type).replace(/no/, "") !== "" || a.canPlayType(f[g].type.replace(/mp3/, "mpeg")).replace(/no/, "") !== "") {
                j.method = "native";
                j.url = f[g].url;
                break
            }
            if (j.method === "native") {
                if (j.url !== null) a.src = j.url;
                if (b.mode !== "auto_plugin") return j
            }
        }
        if (b.mode === "auto" || b.mode === "auto_plugin" || b.mode === "shim") for (g = 0; g < f.length; g++) {
            l = f[g].type;
            for (a = 0; a < b.plugins.length; a++) {
                e = b.plugins[a];
                h = mejs.plugins[e];
                for (c = 0; c < h.length; c++) {
                    k = h[c];
                    if (k.version == null || mejs.PluginDetector.hasPluginVersion(e, k.version)) for (d = 0; d < k.types.length; d++) if (l == k.types[d]) {
                        j.method = e;
                        j.url = f[g].url;
                        return j
                    }
                }
            }
        }
        if (b.mode === "auto_plugin" && j.method === "native") return j;
        if (j.method === "" && f.length > 0) j.url = f[0].url;
        return j
    },
    formatType: function (a, b) {
        return a && !b ? this.getTypeFromFile(a) : b && ~b.indexOf(";") ? b.substr(0, b.indexOf(";")) : b
    },
    getTypeFromFile: function (a) {
        a = a.split("?")[0];
        a = a.substring(a.lastIndexOf(".") + 1).toLowerCase();
        return (/(mp4|m4v|ogg|ogv|webm|webmv|flv|wmv|mpeg|mov)/gi.test(a) ? "video" : "audio") + "/" + this.getTypeFromExtension(a)
    },
    getTypeFromExtension: function (a) {
        switch (a) {
        case "mp4":
        case "m4v":
            return "mp4";
        case "webm":
        case "webma":
        case "webmv":
            return "webm";
        case "ogg":
        case "oga":
        case "ogv":
            return "ogg";
        default:
            return a
        }
    },
    createErrorMessage: function (a, b, c) {
        var d = a.htmlMediaElement,
            e = document.createElement("div");
        e.className = "me-cannotplay";
        try {
            e.style.width = d.width + "px";
            e.style.height = d.height + "px"
        } catch (f) {}
        e.innerHTML = b.customError ? b.customError : c !== "" ? '<a href="' + a.url + '"><img src="' + c + '" width="100%" height="100%" /></a>' : '<a href="' + a.url + '"><span>' + mejs.i18n.t("Download File") + "</span></a>";
        d.parentNode.insertBefore(e, d);
        d.style.display = "none";
        b.error(d)
    },
    createPlugin: function (a, b, c, d, e, f) {
        c = a.htmlMediaElement;
        var g = 1,
            h = 1,
            l = "me_" + a.method + "_" + mejs.meIndex++,
            j = new mejs.PluginMediaElement(l, a.method, a.url),
            k = document.createElement("div"),
            m;
        j.tagName = c.tagName;
        for (m = 0; m < c.attributes.length; m++) {
            var n = c.attributes[m];
            n.specified == true && j.setAttribute(n.name, n.value)
        }
        for (m = c.parentNode; m !== null && m.tagName.toLowerCase() != "body";) {
            if (m.parentNode.tagName.toLowerCase() == "p") {
                m.parentNode.parentNode.insertBefore(m, m.parentNode);
                break
            }
            m = m.parentNode
        }
        if (a.isVideo) {
            g = b.pluginWidth > 0 ? b.pluginWidth : b.videoWidth > 0 ? b.videoWidth : c.getAttribute("width") !== null ? c.getAttribute("width") : b.defaultVideoWidth;
            h = b.pluginHeight > 0 ? b.pluginHeight : b.videoHeight > 0 ? b.videoHeight : c.getAttribute("height") !== null ? c.getAttribute("height") : b.defaultVideoHeight;
            g = mejs.Utility.encodeUrl(g);
            h = mejs.Utility.encodeUrl(h)
        } else if (b.enablePluginDebug) {
            g = 320;
            h = 240
        }
        j.success = b.success;
        mejs.MediaPluginBridge.registerPluginElement(l, j, c);
        k.className = "me-plugin";
        k.id = l + "_container";
        a.isVideo ? c.parentNode.insertBefore(k, c) : document.body.insertBefore(k, document.body.childNodes[0]);
        d = ["id=" + l, "isvideo=" + (a.isVideo ? "true" : "false"), "autoplay=" + (d ? "true" : "false"), "preload=" + e, "width=" + g, "startvolume=" + b.startVolume, "timerrate=" + b.timerRate, "flashstreamer=" + b.flashStreamer, "height=" + h, "pseudostreamstart=" + b.pseudoStreamingStartQueryParam];
        if (a.url !== null) a.method == "flash" ? d.push("file=" + mejs.Utility.encodeUrl(a.url)) : d.push("file=" + a.url);
        b.enablePluginDebug && d.push("debug=true");
        b.enablePluginSmoothing && d.push("smoothing=true");
        b.enablePseudoStreaming && d.push("pseudostreaming=true");
        f && d.push("controls=true");
        if (b.pluginVars) d = d.concat(b.pluginVars);
        switch (a.method) {
        case "silverlight":
            k.innerHTML = '<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="' + l + '" name="' + l + '" width="' + g + '" height="' + h + '" class="mejs-shim"><param name="initParams" value="' + d.join(",") + '" /><param name="windowless" value="true" /><param name="background" value="black" /><param name="minRuntimeVersion" value="3.0.0.0" /><param name="autoUpgrade" value="true" /><param name="source" value="' + b.pluginPath + b.silverlightName + '" /></object>';
            break;
        case "flash":
            if (mejs.MediaFeatures.isIE) {
                a = document.createElement("div");
                k.appendChild(a);
                a.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + l + '" width="' + g + '" height="' + h + '" class="mejs-shim"><param name="movie" value="' + b.pluginPath + b.flashName + "?x=" + new Date + '" /><param name="flashvars" value="' + d.join("&amp;") + '" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /></object>'
            } else k.innerHTML = '<embed id="' + l + '" name="' + l + '" play="true" loop="false" quality="high" bgcolor="#000000" wmode="transparent" allowScriptAccess="always" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" src="' + b.pluginPath + b.flashName + '" flashvars="' + d.join("&") + '" width="' + g + '" height="' + h + '" class="mejs-shim"></embed>';
            break;
        case "youtube":
            b = a.url.substr(a.url.lastIndexOf("=") + 1);
            youtubeSettings = {
                container: k,
                containerId: k.id,
                pluginMediaElement: j,
                pluginId: l,
                videoId: b,
                height: h,
                width: g
            };
            mejs.PluginDetector.hasPluginVersion("flash", [10, 0, 0]) ? mejs.YouTubeApi.createFlash(youtubeSettings) : mejs.YouTubeApi.enqueueIframe(youtubeSettings);
            break;
        case "vimeo":
            j.vimeoid = a.url.substr(a.url.lastIndexOf("/") + 1);
            k.innerHTML = '<iframe src="http://player.vimeo.com/video/' + j.vimeoid + '?portrait=0&byline=0&title=0" width="' + g + '" height="' + h + '" frameborder="0" class="mejs-shim"></iframe>'
        }
        c.style.display = "none";
        return j
    },
    updateNative: function (a, b) {
        var c = a.htmlMediaElement,
            d;
        for (d in mejs.HtmlMediaElement) c[d] = mejs.HtmlMediaElement[d];
        b.success(c, c);
        return c
    }
};
mejs.YouTubeApi = {
    isIframeStarted: false,
    isIframeLoaded: false,
    loadIframeApi: function () {
        if (!this.isIframeStarted) {
            var a = document.createElement("script");
            a.src = "//www.youtube.com/player_api";
            var b = document.getElementsByTagName("script")[0];
            b.parentNode.insertBefore(a, b);
            this.isIframeStarted = true
        }
    },
    iframeQueue: [],
    enqueueIframe: function (a) {
        if (this.isLoaded) this.createIframe(a);
        else {
            this.loadIframeApi();
            this.iframeQueue.push(a)
        }
    },
    createIframe: function (a) {
        var b = a.pluginMediaElement,
            c = new YT.Player(a.containerId, {
                height: a.height,
                width: a.width,
                videoId: a.videoId,
                playerVars: {
                    controls: 0
                },
                events: {
                    onReady: function () {
                        a.pluginMediaElement.pluginApi = c;
                        mejs.MediaPluginBridge.initPlugin(a.pluginId);
                        setInterval(function () {
                            mejs.YouTubeApi.createEvent(c, b, "timeupdate")
                        }, 250)
                    },
                    onStateChange: function (d) {
                        mejs.YouTubeApi.handleStateChange(d.data, c, b)
                    }
                }
            })
    },
    createEvent: function (a, b, c) {
        c = {
            type: c,
            target: b
        };
        if (a && a.getDuration) {
            b.currentTime = c.currentTime = a.getCurrentTime();
            b.duration = c.duration = a.getDuration();
            c.paused = b.paused;
            c.ended = b.ended;
            c.muted = a.isMuted();
            c.volume = a.getVolume() / 100;
            c.bytesTotal = a.getVideoBytesTotal();
            c.bufferedBytes = a.getVideoBytesLoaded();
            var d = c.bufferedBytes / c.bytesTotal * c.duration;
            c.target.buffered = c.buffered = {
                start: function () {
                    return 0
                },
                end: function () {
                    return d
                },
                length: 1
            }
        }
        b.dispatchEvent(c.type, c)
    },
    iFrameReady: function () {
        for (this.isIframeLoaded = this.isLoaded = true; this.iframeQueue.length > 0;) this.createIframe(this.iframeQueue.pop())
    },
    flashPlayers: {},
    createFlash: function (a) {
        this.flashPlayers[a.pluginId] = a;
        var b, c = "//www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid=" + a.pluginId + "&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0";
        if (mejs.MediaFeatures.isIE) {
            b = document.createElement("div");
            a.container.appendChild(b);
            b.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + a.pluginId + '" width="' + a.width + '" height="' + a.height + '" class="mejs-shim"><param name="movie" value="' + c + '" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /></object>'
        } else a.container.innerHTML = '<object type="application/x-shockwave-flash" id="' + a.pluginId + '" data="' + c + '" width="' + a.width + '" height="' + a.height + '" style="visibility: visible; " class="mejs-shim"><param name="allowScriptAccess" value="always"><param name="wmode" value="transparent"></object>'
    },
    flashReady: function (a) {
        var b = this.flashPlayers[a],
            c = document.getElementById(a),
            d = b.pluginMediaElement;
        d.pluginApi = d.pluginElement = c;
        mejs.MediaPluginBridge.initPlugin(a);
        c.cueVideoById(b.videoId);
        a = b.containerId + "_callback";
        window[a] = function (e) {
            mejs.YouTubeApi.handleStateChange(e, c, d)
        };
        c.addEventListener("onStateChange", a);
        setInterval(function () {
            mejs.YouTubeApi.createEvent(c, d, "timeupdate")
        }, 250)
    },
    handleStateChange: function (a, b, c) {
        switch (a) {
        case -1:
            c.paused = true;
            c.ended = true;
            mejs.YouTubeApi.createEvent(b, c, "loadedmetadata");
            break;
        case 0:
            c.paused = false;
            c.ended = true;
            mejs.YouTubeApi.createEvent(b, c, "ended");
            break;
        case 1:
            c.paused = false;
            c.ended = false;
            mejs.YouTubeApi.createEvent(b, c, "play");
            mejs.YouTubeApi.createEvent(b, c, "playing");
            break;
        case 2:
            c.paused = true;
            c.ended = false;
            mejs.YouTubeApi.createEvent(b, c, "pause");
            break;
        case 3:
            mejs.YouTubeApi.createEvent(b, c, "progress")
        }
    }
};

function onYouTubePlayerAPIReady() {
    mejs.YouTubeApi.iFrameReady()
}
function onYouTubePlayerReady(a) {
    mejs.YouTubeApi.flashReady(a)
}
window.mejs = mejs;
window.MediaElement = mejs.MediaElement;
(function (a, b) {
    var c = {
        locale: {
            strings: {}
        },
        methods: {}
    };
    c.locale.getLanguage = function () {
        return c.locale || {
            language: navigator.language
        }
    };
    c.locale.INIT_LANGUAGE = c.locale.getLanguage();
    c.methods.checkPlain = function (d) {
        var e, f, g = {
            "&": "&amp;",
            '"': "&quot;",
            "<": "&lt;",
            ">": "&gt;"
        };
        d = String(d);
        for (e in g) if (g.hasOwnProperty(e)) {
            f = RegExp(e, "g");
            d = d.replace(f, g[e])
        }
        return d
    };
    c.methods.formatString = function (d, e) {
        for (var f in e) {
            switch (f.charAt(0)) {
            case "@":
                e[f] = c.methods.checkPlain(e[f]);
                break;
            case "!":
                break;
            default:
                e[f] = '<em class="placeholder">' + c.methods.checkPlain(e[f]) + "</em>"
            }
            d = d.replace(f, e[f])
        }
        return d
    };
    c.methods.t = function (d, e, f) {
        if (c.locale.strings && c.locale.strings[f.context] && c.locale.strings[f.context][d]) d = c.locale.strings[f.context][d];
        if (e) d = c.methods.formatString(d, e);
        return d
    };
    c.t = function (d, e, f) {
        if (typeof d === "string" && d.length > 0) {
            var g = c.locale.getLanguage();
            f = f || {
                context: g.language
            };
            return c.methods.t(d, e, f)
        } else throw {
            name: "InvalidArgumentException",
            message: "First argument is either not a string or empty."
        };
    };
    b.i18n = c
})(document, mejs);
(function (a) {
    if (mejs.i18n.locale.language && mejs.i18n.locale.strings) a[mejs.i18n.locale.language] = mejs.i18n.locale.strings
})(mejs.i18n.locale.strings);
(function (a) {
    a.de = {
        Fullscreen: "Vollbild",
        "Go Fullscreen": "Vollbild an",
        "Turn off Fullscreen": "Vollbild aus",
        Close: "Schlie\u00dfen"
    }
})(mejs.i18n.locale.strings);
(function (a) {
    a.zh = {
        Fullscreen: "\u5168\u87a2\u5e55",
        "Go Fullscreen": "\u5168\u5c4f\u6a21\u5f0f",
        "Turn off Fullscreen": "\u9000\u51fa\u5168\u5c4f\u6a21\u5f0f",
        Close: "\u95dc\u9589"
    }
})(mejs.i18n.locale.strings);

/*!
 * MediaElementPlayer
 * http://mediaelementjs.com/
 *
 * Creates a controller bar for HTML5 <video> add <audio> tags
 * using jQuery and MediaElement.js (HTML5 Flash/Silverlight wrapper)
 *
 * Copyright 2010-2013, John Dyer (http://j.hn/)
 * License: MIT
 *
 */
if (typeof jQuery != "undefined") mejs.$ = jQuery;
else if (typeof ender != "undefined") mejs.$ = ender;
(function (f) {
    mejs.MepDefaults = {
        poster: "",
        defaultVideoWidth: 480,
        defaultVideoHeight: 270,
        videoWidth: -1,
        videoHeight: -1,
        defaultAudioWidth: 400,
        defaultAudioHeight: 30,
        defaultSeekBackwardInterval: function (a) {
            return a.duration * 0.05
        },
        defaultSeekForwardInterval: function (a) {
            return a.duration * 0.05
        },
        audioWidth: -1,
        audioHeight: -1,
        startVolume: 0.8,
        loop: false,
        autoRewind: true,
        enableAutosize: true,
        alwaysShowHours: false,
        showTimecodeFrameCount: false,
        framesPerSecond: 25,
        autosizeProgress: true,
        alwaysShowControls: false,
        hideVideoControlsOnLoad: false,
        clickToPlayPause: true,
        iPadUseNativeControls: false,
        iPhoneUseNativeControls: false,
        AndroidUseNativeControls: false,
        features: ["playpause", "current", "progress", "duration", "tracks", "volume", "fullscreen"],
        isVideo: true,
        enableKeyboard: true,
        pauseOtherPlayers: true,
        keyActions: [{
            keys: [32, 179],
            action: function (a, b) {
                b.paused || b.ended ? b.play() : b.pause()
            }
        }, {
            keys: [38],
            action: function (a, b) {
                b.setVolume(Math.min(b.volume + 0.1, 1))
            }
        }, {
            keys: [40],
            action: function (a, b) {
                b.setVolume(Math.max(b.volume - 0.1, 0))
            }
        }, {
            keys: [37, 227],
            action: function (a, b) {
                if (!isNaN(b.duration) && b.duration > 0) {
                    if (a.isVideo) {
                        a.showControls();
                        a.startControlsTimer()
                    }
                    var c = Math.max(b.currentTime - a.options.defaultSeekBackwardInterval(b), 0);
                    b.setCurrentTime(c)
                }
            }
        }, {
            keys: [39, 228],
            action: function (a, b) {
                if (!isNaN(b.duration) && b.duration > 0) {
                    if (a.isVideo) {
                        a.showControls();
                        a.startControlsTimer()
                    }
                    var c = Math.min(b.currentTime + a.options.defaultSeekForwardInterval(b), b.duration);
                    b.setCurrentTime(c)
                }
            }
        }, {
            keys: [70],
            action: function (a) {
                if (typeof a.enterFullScreen != "undefined") a.isFullScreen ? a.exitFullScreen() : a.enterFullScreen()
            }
        }]
    };
    mejs.mepIndex = 0;
    mejs.players = {};
    mejs.MediaElementPlayer = function (a, b) {
        if (!(this instanceof mejs.MediaElementPlayer)) return new mejs.MediaElementPlayer(a, b);
        this.$media = this.$node = f(a);
        this.node = this.media = this.$media[0];
        if (typeof this.node.player != "undefined") return this.node.player;
        else this.node.player = this;
        if (typeof b == "undefined") b = this.$node.data("mejsoptions");
        this.options = f.extend({}, mejs.MepDefaults, b);
        this.id = "mep_" + mejs.mepIndex++;
        mejs.players[this.id] = this;
        this.init();
        return this
    };
    mejs.MediaElementPlayer.prototype = {
        hasFocus: false,
        controlsAreVisible: true,
        init: function () {
            var a = this,
                b = mejs.MediaFeatures,
                c = f.extend(true, {}, a.options, {
                    success: function (d, g) {
                        a.meReady(d, g)
                    },
                    error: function (d) {
                        a.handleError(d)
                    }
                }),
                e = a.media.tagName.toLowerCase();
            a.isDynamic = e !== "audio" && e !== "video";
            a.isVideo = a.isDynamic ? a.options.isVideo : e !== "audio" && a.options.isVideo;
            if (b.isiPad && a.options.iPadUseNativeControls || b.isiPhone && a.options.iPhoneUseNativeControls) {
                a.$media.attr("controls", "controls");
                if (b.isiPad && a.media.getAttribute("autoplay") !== null) {
                    a.media.load();
                    a.media.play()
                }
            } else if (!(b.isAndroid && a.options.AndroidUseNativeControls)) {
                a.$media.removeAttr("controls");
                a.container = f('<div id="' + a.id + '" class="mejs-container ' + (mejs.MediaFeatures.svg ? "svg" : "no-svg") + '"><div class="mejs-inner"><div class="mejs-mediaelement"></div><div class="mejs-layers"></div><div class="mejs-controls"></div><div class="mejs-clear"></div></div></div>').addClass(a.$media[0].className).insertBefore(a.$media);
                a.container.addClass((b.isAndroid ? "mejs-android " : "") + (b.isiOS ? "mejs-ios " : "") + (b.isiPad ? "mejs-ipad " : "") + (b.isiPhone ? "mejs-iphone " : "") + (a.isVideo ? "mejs-video " : "mejs-audio "));
                if (b.isiOS) {
                    b = a.$media.clone();
                    a.container.find(".mejs-mediaelement").append(b);
                    a.$media.remove();
                    a.$node = a.$media = b;
                    a.node = a.media = b[0]
                } else a.container.find(".mejs-mediaelement").append(a.$media);
                a.controls = a.container.find(".mejs-controls");
                a.layers = a.container.find(".mejs-layers");
                b = a.isVideo ? "video" : "audio";
                e = b.substring(0, 1).toUpperCase() + b.substring(1);
                a.width = a.options[b + "Width"] > 0 || a.options[b + "Width"].toString().indexOf("%") > -1 ? a.options[b + "Width"] : a.media.style.width !== "" && a.media.style.width !== null ? a.media.style.width : a.media.getAttribute("width") !== null ? a.$media.attr("width") : a.options["default" + e + "Width"];
                a.height = a.options[b + "Height"] > 0 || a.options[b + "Height"].toString().indexOf("%") > -1 ? a.options[b + "Height"] : a.media.style.height !== "" && a.media.style.height !== null ? a.media.style.height : a.$media[0].getAttribute("height") !== null ? a.$media.attr("height") : a.options["default" + e + "Height"];
                a.setPlayerSize(a.width, a.height);
                c.pluginWidth = a.width;
                c.pluginHeight = a.height
            }
            mejs.MediaElement(a.$media[0], c);
            typeof a.container != "undefined" && a.container.trigger("controlsshown")
        },
        showControls: function (a) {
            var b = this;
            a = typeof a == "undefined" || a;
            if (!b.controlsAreVisible) {
                if (a) {
                    b.controls.css("visibility", "visible").stop(true, true).fadeIn(200, function () {
                        b.controlsAreVisible = true;
                        b.container.trigger("controlsshown")
                    });
                    b.container.find(".mejs-control").css("visibility", "visible").stop(true, true).fadeIn(200, function () {
                        b.controlsAreVisible = true
                    })
                } else {
                    b.controls.css("visibility", "visible").css("display", "block");
                    b.container.find(".mejs-control").css("visibility", "visible").css("display", "block");
                    b.controlsAreVisible = true;
                    b.container.trigger("controlsshown")
                }
                b.setControlsSize()
            }
        },
        hideControls: function (a) {
            var b = this;
            a = typeof a == "undefined" || a;
            if (b.controlsAreVisible) if (a) {
                b.controls.stop(true, true).fadeOut(200, function () {
                    f(this).css("visibility", "hidden").css("display", "block");
                    b.controlsAreVisible = false;
                    b.container.trigger("controlshidden")
                });
                b.container.find(".mejs-control").stop(true, true).fadeOut(200, function () {
                    f(this).css("visibility", "hidden").css("display", "block")
                })
            } else {
                b.controls.css("visibility", "hidden").css("display", "block");
                b.container.find(".mejs-control").css("visibility", "hidden").css("display", "block");
                b.controlsAreVisible = false;
                b.container.trigger("controlshidden")
            }
        },
        controlsTimer: null,
        startControlsTimer: function (a) {
            var b = this;
            a = typeof a != "undefined" ? a : 1500;
            b.killControlsTimer("start");
            b.controlsTimer = setTimeout(function () {
                b.hideControls();
                b.killControlsTimer("hide")
            }, a)
        },
        killControlsTimer: function () {
            if (this.controlsTimer !== null) {
                clearTimeout(this.controlsTimer);
                delete this.controlsTimer;
                this.controlsTimer = null
            }
        },
        controlsEnabled: true,
        disableControls: function () {
            this.killControlsTimer();
            this.hideControls(false);
            this.controlsEnabled = false
        },
        enableControls: function () {
            this.showControls(false);
            this.controlsEnabled = true
        },
        meReady: function (a, b) {
            var c = this,
                e = mejs.MediaFeatures,
                d = b.getAttribute("autoplay");
            d = !(typeof d == "undefined" || d === null || d === "false");
            var g;
            if (!c.created) {
                c.created = true;
                c.media = a;
                c.domNode = b;
                if (!(e.isAndroid && c.options.AndroidUseNativeControls) && !(e.isiPad && c.options.iPadUseNativeControls) && !(e.isiPhone && c.options.iPhoneUseNativeControls)) {
                    c.buildposter(c, c.controls, c.layers, c.media);
                    c.buildkeyboard(c, c.controls, c.layers, c.media);
                    c.buildoverlays(c, c.controls, c.layers, c.media);
                    c.findTracks();
                    for (g in c.options.features) {
                        e = c.options.features[g];
                        if (c["build" + e]) try {
                            c["build" + e](c, c.controls, c.layers, c.media)
                        } catch (k) {}
                    }
                    c.container.trigger("controlsready");
                    c.setPlayerSize(c.width, c.height);
                    c.setControlsSize();
                    if (c.isVideo) {
                        if (mejs.MediaFeatures.hasTouch) c.$media.bind("touchstart", function () {
                            if (c.controlsAreVisible) c.hideControls(false);
                            else c.controlsEnabled && c.showControls(false)
                        });
                        else {
                            mejs.MediaElementPlayer.prototype.clickToPlayPauseCallback = function () {
                                console.log("media clicked", c.media, c.media.paused);
                                if (c.options.clickToPlayPause) c.media.paused ? c.media.play() : c.media.pause()
                            };
                            c.media.addEventListener("click", c.clickToPlayPauseCallback);
                            c.container.bind("mouseenter mouseover", function () {
                                if (c.controlsEnabled) if (!c.options.alwaysShowControls) {
                                    c.killControlsTimer("enter");
                                    c.showControls();
                                    c.startControlsTimer(2500)
                                }
                            }).bind("mousemove", function () {
                                if (c.controlsEnabled) {
                                    c.controlsAreVisible || c.showControls();
                                    c.options.alwaysShowControls || c.startControlsTimer(2500)
                                }
                            }).bind("mouseleave", function () {
                                c.controlsEnabled && !c.media.paused && !c.options.alwaysShowControls && c.startControlsTimer(1E3)
                            })
                        }
                        c.options.hideVideoControlsOnLoad && c.hideControls(false);
                        d && !c.options.alwaysShowControls && c.hideControls();
                        c.options.enableAutosize && c.media.addEventListener("loadedmetadata", function (j) {
                            if (c.options.videoHeight <= 0 && c.domNode.getAttribute("height") === null && !isNaN(j.target.videoHeight)) {
                                c.setPlayerSize(j.target.videoWidth, j.target.videoHeight);
                                c.setControlsSize();
                                c.media.setVideoSize(j.target.videoWidth, j.target.videoHeight)
                            }
                        }, false)
                    }
                    a.addEventListener("play", function () {
                        for (var j in mejs.players) {
                            var m = mejs.players[j];
                            m.id != c.id && c.options.pauseOtherPlayers && !m.paused && !m.ended && m.pause();
                            m.hasFocus = false
                        }
                        c.hasFocus = true
                    }, false);
                    c.media.addEventListener("ended", function () {
                        if (c.options.autoRewind) try {
                            c.media.setCurrentTime(0)
                        } catch (j) {}
                        c.media.pause();
                        c.setProgressRail && c.setProgressRail();
                        c.setCurrentRail && c.setCurrentRail();
                        if (c.options.loop) c.media.play();
                        else!c.options.alwaysShowControls && c.controlsEnabled && c.showControls()
                    }, false);
                    c.media.addEventListener("loadedmetadata", function () {
                        c.updateDuration && c.updateDuration();
                        c.updateCurrent && c.updateCurrent();
                        if (!c.isFullScreen) {
                            c.setPlayerSize(c.width, c.height);
                            c.setControlsSize()
                        }
                    }, false);
                    setTimeout(function () {
                        c.setPlayerSize(c.width, c.height);
                        c.setControlsSize()
                    }, 50);
                    c.globalBind("resize", function () {
                        c.isFullScreen || mejs.MediaFeatures.hasTrueNativeFullScreen && document.webkitIsFullScreen || c.setPlayerSize(c.width, c.height);
                        c.setControlsSize()
                    });
                    c.media.pluginType == "youtube" && c.container.find(".mejs-overlay-play").hide()
                }
                if (d && a.pluginType == "native") {
                    a.load();
                    a.play()
                }
                if (c.options.success) typeof c.options.success == "string" ? window[c.options.success](c.media, c.domNode, c) : c.options.success(c.media, c.domNode, c)
            }
        },
        handleError: function (a) {
            this.controls.hide();
            this.options.error && this.options.error(a)
        },
        setPlayerSize: function (a, b) {
            if (typeof a != "undefined") this.width = a;
            if (typeof b != "undefined") this.height = b;
            if (this.height.toString().indexOf("%") > 0 || this.$node.css("max-width") === "100%" || this.$node[0].currentStyle && this.$node[0].currentStyle.maxWidth === "100%") {
                var c = this.isVideo ? this.media.videoWidth && this.media.videoWidth > 0 ? this.media.videoWidth : this.options.defaultVideoWidth : this.options.defaultAudioWidth,
                    e = this.isVideo ? this.media.videoHeight && this.media.videoHeight > 0 ? this.media.videoHeight : this.options.defaultVideoHeight : this.options.defaultAudioHeight,
                    d = this.container.parent().closest(":visible").width();
                c = this.isVideo || !this.options.autosizeProgress ? parseInt(d * e / c, 10) : e;
                if (this.container.parent()[0].tagName.toLowerCase() === "body") {
                    d = f(window).width();
                    c = f(window).height()
                }
                if (c != 0 && d != 0) {
                    this.container.width(d).height(c);
                    this.$media.add(this.container.find(".mejs-shim")).width("100%").height("100%");
                    this.isVideo && this.media.setVideoSize && this.media.setVideoSize(d, c);
                    this.layers.children(".mejs-layer").width("100%").height("100%")
                }
            } else {
                this.container.width(this.width).height(this.height);
                this.layers.children(".mejs-layer").width(this.width).height(this.height)
            }
            d = this.layers.find(".mejs-overlay-play");
            c = d.find(".mejs-overlay-button");
            d.height(this.container.height() - this.controls.height());
            c.css("margin-top", "-" + (c.height() / 2 - this.controls.height() / 2).toString() + "px")
        },
        setControlsSize: function () {
            var a = 0,
                b = 0,
                c = this.controls.find(".mejs-time-rail"),
                e = this.controls.find(".mejs-time-total");
            this.controls.find(".mejs-time-current");
            this.controls.find(".mejs-time-loaded");
            var d = c.siblings();
            if (this.options && !this.options.autosizeProgress) b = parseInt(c.css("width"));
            if (b === 0 || !b) {
                d.each(function () {
                    var g = f(this);
                    if (g.css("position") != "absolute" && g.is(":visible")) a += f(this).outerWidth(true)
                });
                b = this.controls.width() - a - (c.outerWidth(true) - c.width())
            }
            c.width(b);
            e.width(b - (e.outerWidth(true) - e.width()));
            this.setProgressRail && this.setProgressRail();
            this.setCurrentRail && this.setCurrentRail()
        },
        buildposter: function (a, b, c, e) {
            var d = f('<div class="mejs-poster mejs-layer"></div>').appendTo(c);
            b = a.$media.attr("poster");
            if (a.options.poster !== "") b = a.options.poster;
            b !== "" && b != null ? this.setPoster(b) : d.hide();
            e.addEventListener("play", function () {
                d.hide()
            }, false)
        },
        setPoster: function (a) {
            var b = this.container.find(".mejs-poster"),
                c = b.find("img");
            if (c.length == 0) c = f('<img width="100%" height="100%" />').appendTo(b);
            c.attr("src", a);
            b.css({
                "background-image": "url(" + a + ")"
            })
        },
        buildoverlays: function (a, b, c, e) {
            var d = this;
            if (a.isVideo) {
                var g = f('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-loading"><span></span></div></div>').hide().appendTo(c),
                    k = f('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-error"></div></div>').hide().appendTo(c),
                    j = f('<div class="mejs-overlay mejs-layer mejs-overlay-play"><div class="mejs-overlay-button"></div></div>').appendTo(c).click(function () {
                        if (d.options.clickToPlayPause) e.paused ? e.play() : e.pause()
                    });
                e.addEventListener("play", function () {
                    j.hide();
                    g.hide();
                    b.find(".mejs-time-buffering").hide();
                    k.hide()
                }, false);
                e.addEventListener("playing", function () {
                    j.hide();
                    g.hide();
                    b.find(".mejs-time-buffering").hide();
                    k.hide()
                }, false);
                e.addEventListener("seeking", function () {
                    g.show();
                    b.find(".mejs-time-buffering").show()
                }, false);
                e.addEventListener("seeked", function () {
                    g.hide();
                    b.find(".mejs-time-buffering").hide()
                }, false);
                e.addEventListener("pause", function () {
                    mejs.MediaFeatures.isiPhone || j.show()
                }, false);
                e.addEventListener("waiting", function () {
                    g.show();
                    b.find(".mejs-time-buffering").show()
                }, false);
                e.addEventListener("loadeddata", function () {
                    g.show();
                    b.find(".mejs-time-buffering").show()
                }, false);
                e.addEventListener("canplay", function () {
                    g.hide();
                    b.find(".mejs-time-buffering").hide()
                }, false);
                e.addEventListener("error", function () {
                    g.hide();
                    b.find(".mejs-time-buffering").hide();
                    k.show();
                    k.find("mejs-overlay-error").html("Error loading this resource")
                }, false)
            }
        },
        buildkeyboard: function (a, b, c, e) {
            this.globalBind("keydown", function (d) {
                if (a.hasFocus && a.options.enableKeyboard) for (var g = 0, k = a.options.keyActions.length; g < k; g++) for (var j = a.options.keyActions[g], m = 0, q = j.keys.length; m < q; m++) if (d.keyCode == j.keys[m]) {
                    d.preventDefault();
                    j.action(a, e, d.keyCode);
                    return false
                }
                return true
            });
            this.globalBind("click", function (d) {
                if (f(d.target).closest(".mejs-container").length == 0) a.hasFocus = false
            })
        },
        findTracks: function () {
            var a = this,
                b = a.$media.find("track");
            a.tracks = [];
            b.each(function (c, e) {
                e = f(e);
                a.tracks.push({
                    srclang: e.attr("srclang") ? e.attr("srclang").toLowerCase() : "",
                    src: e.attr("src"),
                    kind: e.attr("kind"),
                    label: e.attr("label") || "",
                    entries: [],
                    isLoaded: false
                })
            })
        },
        changeSkin: function (a) {
            this.container[0].className = "mejs-container " + a;
            this.setPlayerSize(this.width, this.height);
            this.setControlsSize()
        },
        play: function () {
            this.media.play()
        },
        pause: function () {
            this.media.pause()
        },
        load: function () {
            this.media.load()
        },
        setMuted: function (a) {
            this.media.setMuted(a)
        },
        setCurrentTime: function (a) {
            this.media.setCurrentTime(a)
        },
        getCurrentTime: function () {
            return this.media.currentTime
        },
        setVolume: function (a) {
            this.media.setVolume(a)
        },
        getVolume: function () {
            return this.media.volume
        },
        setSrc: function (a) {
            this.media.setSrc(a)
        },
        remove: function () {
            var a, b;
            for (a in this.options.features) {
                b = this.options.features[a];
                if (this["clean" + b]) try {
                    this["clean" + b](this)
                } catch (c) {}
            }
            this.media.pluginType === "native" ? this.$media.prop("controls", true) : this.media.remove();
            this.isDynamic || this.$node.insertBefore(this.container);
            delete mejs.players[this.id];
            this.container.remove();
            this.globalUnbind();
            delete this.node.player
        }
    };
    (function () {
        function a(c, e) {
            var d = {
                d: [],
                w: []
            };
            f.each((c || "").split(" "), function (g, k) {
                var j = k + "." + e;
                if (j.indexOf(".") === 0) {
                    d.d.push(j);
                    d.w.push(j)
                } else d[b.test(k) ? "w" : "d"].push(j)
            });
            d.d = d.d.join(" ");
            d.w = d.w.join(" ");
            return d
        }
        var b = /^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/;
        mejs.MediaElementPlayer.prototype.globalBind = function (c, e, d) {
            c = a(c, this.id);
            c.d && f(document).bind(c.d, e, d);
            c.w && f(window).bind(c.w, e, d)
        };
        mejs.MediaElementPlayer.prototype.globalUnbind = function (c, e) {
            c = a(c, this.id);
            c.d && f(document).unbind(c.d, e);
            c.w && f(window).unbind(c.w, e)
        }
    })();
    if (typeof jQuery != "undefined") jQuery.fn.mediaelementplayer = function (a) {
        a === false ? this.each(function () {
            var b = jQuery(this).data("mediaelementplayer");
            b && b.remove();
            jQuery(this).removeData("mediaelementplayer")
        }) : this.each(function () {
            jQuery(this).data("mediaelementplayer", new mejs.MediaElementPlayer(this, a))
        });
        return this
    };
    f(document).ready(function () {
        f(".mejs-player").mediaelementplayer()
    });
    window.MediaElementPlayer = mejs.MediaElementPlayer
})(mejs.$);
(function (f) {
    f.extend(mejs.MepDefaults, {
        playpauseText: mejs.i18n.t("Play/Pause")
    });
    f.extend(MediaElementPlayer.prototype, {
        buildplaypause: function (a, b, c, e) {
            var d = f('<div class="mejs-button mejs-playpause-button mejs-play" ><button type="button" aria-controls="' + this.id + '" title="' + this.options.playpauseText + '" aria-label="' + this.options.playpauseText + '"></button></div>').appendTo(b).click(function (g) {
                g.preventDefault();
                e.paused ? e.play() : e.pause();
                return false
            });
            e.addEventListener("play", function () {
                d.removeClass("mejs-play").addClass("mejs-pause")
            }, false);
            e.addEventListener("playing", function () {
                d.removeClass("mejs-play").addClass("mejs-pause")
            }, false);
            e.addEventListener("pause", function () {
                d.removeClass("mejs-pause").addClass("mejs-play")
            }, false);
            e.addEventListener("paused", function () {
                d.removeClass("mejs-pause").addClass("mejs-play")
            }, false)
        }
    })
})(mejs.$);
(function (f) {
    f.extend(mejs.MepDefaults, {
        stopText: "Stop"
    });
    f.extend(MediaElementPlayer.prototype, {
        buildstop: function (a, b, c, e) {
            f('<div class="mejs-button mejs-stop-button mejs-stop"><button type="button" aria-controls="' + this.id + '" title="' + this.options.stopText + '" aria-label="' + this.options.stopText + '"></button></div>').appendTo(b).click(function () {
                e.paused || e.pause();
                if (e.currentTime > 0) {
                    e.setCurrentTime(0);
                    e.pause();
                    b.find(".mejs-time-current").width("0px");
                    b.find(".mejs-time-handle").css("left", "0px");
                    b.find(".mejs-time-float-current").html(mejs.Utility.secondsToTimeCode(0));
                    b.find(".mejs-currenttime").html(mejs.Utility.secondsToTimeCode(0));
                    c.find(".mejs-poster").show()
                }
            })
        }
    })
})(mejs.$);
(function (f) {
    f.extend(MediaElementPlayer.prototype, {
        buildprogress: function (a, b, c, e) {
            f('<div class="mejs-time-rail"><span class="mejs-time-total"><span class="mejs-time-buffering"></span><span class="mejs-time-loaded"></span><span class="mejs-time-current"></span><span class="mejs-time-handle"></span><span class="mejs-time-float"><span class="mejs-time-float-current">00:00</span><span class="mejs-time-float-corner"></span></span></span></div>').appendTo(b);
            b.find(".mejs-time-buffering").hide();
            var d = this,
                g = b.find(".mejs-time-total");
            c = b.find(".mejs-time-loaded");
            var k = b.find(".mejs-time-current"),
                j = b.find(".mejs-time-handle"),
                m = b.find(".mejs-time-float"),
                q = b.find(".mejs-time-float-current"),
                p = function (h) {
                    h = h.pageX;
                    var l = g.offset(),
                        r = g.outerWidth(true),
                        n = 0,
                        o = n = 0;
                    if (e.duration) {
                        if (h < l.left) h = l.left;
                        else if (h > r + l.left) h = r + l.left;
                        o = h - l.left;
                        n = o / r;
                        n = n <= 0.02 ? 0 : n * e.duration;
                        t && n !== e.currentTime && e.setCurrentTime(n);
                        if (!mejs.MediaFeatures.hasTouch) {
                            m.css("left", o);
                            q.html(mejs.Utility.secondsToTimeCode(n));
                            m.show()
                        }
                    }
                },
                t = false;
            g.bind("mousedown", function (h) {
                if (h.which === 1) {
                    t = true;
                    p(h);
                    d.globalBind("mousemove.dur", function (l) {
                        p(l)
                    });
                    d.globalBind("mouseup.dur", function () {
                        t = false;
                        m.hide();
                        d.globalUnbind(".dur")
                    });
                    return false
                }
            }).bind("mouseenter", function () {
                d.globalBind("mousemove.dur", function (h) {
                    p(h)
                });
                mejs.MediaFeatures.hasTouch || m.show()
            }).bind("mouseleave", function () {
                if (!t) {
                    d.globalUnbind(".dur");
                    m.hide()
                }
            });
            e.addEventListener("progress", function (h) {
                a.setProgressRail(h);
                a.setCurrentRail(h)
            }, false);
            e.addEventListener("timeupdate", function (h) {
                a.setProgressRail(h);
                a.setCurrentRail(h)
            }, false);
            d.loaded = c;
            d.total = g;
            d.current = k;
            d.handle = j
        },
        setProgressRail: function (a) {
            var b = a != undefined ? a.target : this.media,
                c = null;
            if (b && b.buffered && b.buffered.length > 0 && b.buffered.end && b.duration) c = b.buffered.end(0) / b.duration;
            else if (b && b.bytesTotal != undefined && b.bytesTotal > 0 && b.bufferedBytes != undefined) c = b.bufferedBytes / b.bytesTotal;
            else if (a && a.lengthComputable && a.total != 0) c = a.loaded / a.total;
            if (c !== null) {
                c = Math.min(1, Math.max(0, c));
                this.loaded && this.total && this.loaded.width(this.total.width() * c)
            }
        },
        setCurrentRail: function () {
            if (this.media.currentTime != undefined && this.media.duration) if (this.total && this.handle) {
                var a = Math.round(this.total.width() * this.media.currentTime / this.media.duration),
                    b = a - Math.round(this.handle.outerWidth(true) / 2);
                this.current.width(a);
                this.handle.css("left", b)
            }
        }
    })
})(mejs.$);
(function (f) {
    f.extend(mejs.MepDefaults, {
        duration: -1,
        timeAndDurationSeparator: " <span> / </span> "
    });
    f.extend(MediaElementPlayer.prototype, {
        buildcurrent: function (a, b, c, e) {
            f('<div class="mejs-time"><span class="mejs-currenttime">' + (a.options.alwaysShowHours ? "00:" : "") + (a.options.showTimecodeFrameCount ? "00:00:00" : "00:00") + "</span></div>").appendTo(b);
            this.currenttime = this.controls.find(".mejs-currenttime");
            e.addEventListener("timeupdate", function () {
                a.updateCurrent()
            }, false)
        },
        buildduration: function (a, b, c, e) {
            if (b.children().last().find(".mejs-currenttime").length > 0) f(this.options.timeAndDurationSeparator + '<span class="mejs-duration">' + (this.options.duration > 0 ? mejs.Utility.secondsToTimeCode(this.options.duration, this.options.alwaysShowHours || this.media.duration > 3600, this.options.showTimecodeFrameCount, this.options.framesPerSecond || 25) : (a.options.alwaysShowHours ? "00:" : "") + (a.options.showTimecodeFrameCount ? "00:00:00" : "00:00")) + "</span>").appendTo(b.find(".mejs-time"));
            else {
                b.find(".mejs-currenttime").parent().addClass("mejs-currenttime-container");
                f('<div class="mejs-time mejs-duration-container"><span class="mejs-duration">' + (this.options.duration > 0 ? mejs.Utility.secondsToTimeCode(this.options.duration, this.options.alwaysShowHours || this.media.duration > 3600, this.options.showTimecodeFrameCount, this.options.framesPerSecond || 25) : (a.options.alwaysShowHours ? "00:" : "") + (a.options.showTimecodeFrameCount ? "00:00:00" : "00:00")) + "</span></div>").appendTo(b)
            }
            this.durationD = this.controls.find(".mejs-duration");
            e.addEventListener("timeupdate", function () {
                a.updateDuration()
            }, false)
        },
        updateCurrent: function () {
            if (this.currenttime) this.currenttime.html(mejs.Utility.secondsToTimeCode(this.media.currentTime, this.options.alwaysShowHours || this.media.duration > 3600, this.options.showTimecodeFrameCount, this.options.framesPerSecond || 25))
        },
        updateDuration: function () {
            this.container.toggleClass("mejs-long-video", this.media.duration > 3600);
            if (this.durationD && (this.options.duration > 0 || this.media.duration)) this.durationD.html(mejs.Utility.secondsToTimeCode(this.options.duration > 0 ? this.options.duration : this.media.duration, this.options.alwaysShowHours, this.options.showTimecodeFrameCount, this.options.framesPerSecond || 25))
        }
    })
})(mejs.$);
(function (f) {
    f.extend(mejs.MepDefaults, {
        muteText: mejs.i18n.t("Mute Toggle"),
        hideVolumeOnTouchDevices: true,
        audioVolume: "horizontal",
        videoVolume: "vertical"
    });
    f.extend(MediaElementPlayer.prototype, {
        buildvolume: function (a, b, c, e) {
            if (!(mejs.MediaFeatures.hasTouch && this.options.hideVolumeOnTouchDevices)) {
                var d = this,
                    g = d.isVideo ? d.options.videoVolume : d.options.audioVolume,
                    k = g == "horizontal" ? f('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + d.id + '" title="' + d.options.muteText + '" aria-label="' + d.options.muteText + '"></button></div><div class="mejs-horizontal-volume-slider"><div class="mejs-horizontal-volume-total"></div><div class="mejs-horizontal-volume-current"></div><div class="mejs-horizontal-volume-handle"></div></div>').appendTo(b) : f('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + d.id + '" title="' + d.options.muteText + '" aria-label="' + d.options.muteText + '"></button><div class="mejs-volume-slider"><div class="mejs-volume-total"></div><div class="mejs-volume-current"></div><div class="mejs-volume-handle"></div></div></div>').appendTo(b),
                    j = d.container.find(".mejs-volume-slider, .mejs-horizontal-volume-slider"),
                    m = d.container.find(".mejs-volume-total, .mejs-horizontal-volume-total"),
                    q = d.container.find(".mejs-volume-current, .mejs-horizontal-volume-current"),
                    p = d.container.find(".mejs-volume-handle, .mejs-horizontal-volume-handle"),
                    t = function (n, o) {
                        if (!j.is(":visible") && typeof o == "undefined") {
                            j.show();
                            t(n, true);
                            j.hide()
                        } else {
                            n = Math.max(0, n);
                            n = Math.min(n, 1);
                            n == 0 ? k.removeClass("mejs-mute").addClass("mejs-unmute") : k.removeClass("mejs-unmute").addClass("mejs-mute");
                            if (g == "vertical") {
                                var s = m.height(),
                                    u = m.position(),
                                    v = s - s * n;
                                p.css("top", Math.round(u.top + v - p.height() / 2));
                                q.height(s - v);
                                q.css("top", u.top + v)
                            } else {
                                s = m.width();
                                u = m.position();
                                s = s * n;
                                p.css("left", Math.round(u.left + s - p.width() / 2));
                                q.width(Math.round(s))
                            }
                        }
                    },
                    h = function (n) {
                        var o = null,
                            s = m.offset();
                        if (g == "vertical") {
                            o = m.height();
                            parseInt(m.css("top").replace(/px/, ""), 10);
                            o = (o - (n.pageY - s.top)) / o;
                            if (s.top == 0 || s.left == 0) return
                        } else {
                            o = m.width();
                            o = (n.pageX - s.left) / o
                        }
                        o = Math.max(0, o);
                        o = Math.min(o, 1);
                        t(o);
                        o == 0 ? e.setMuted(true) : e.setMuted(false);
                        e.setVolume(o)
                    },
                    l = false,
                    r = false;
                k.hover(function () {
                    j.show();
                    r = true
                }, function () {
                    r = false;
                    !l && g == "vertical" && j.hide()
                });
                j.bind("mouseover", function () {
                    r = true
                }).bind("mousedown", function (n) {
                    h(n);
                    d.globalBind("mousemove.vol", function (o) {
                        h(o)
                    });
                    d.globalBind("mouseup.vol", function () {
                        l = false;
                        d.globalUnbind(".vol");
                        !r && g == "vertical" && j.hide()
                    });
                    l = true;
                    return false
                });
                k.find("button").click(function () {
                    e.setMuted(!e.muted)
                });
                e.addEventListener("volumechange", function () {
                    if (!l) if (e.muted) {
                        t(0);
                        k.removeClass("mejs-mute").addClass("mejs-unmute")
                    } else {
                        t(e.volume);
                        k.removeClass("mejs-unmute").addClass("mejs-mute")
                    }
                }, false);
                if (d.container.is(":visible")) {
                    t(a.options.startVolume);
                    a.options.startVolume === 0 && e.setMuted(true);
                    e.pluginType === "native" && e.setVolume(a.options.startVolume)
                }
            }
        }
    })
})(mejs.$);
(function (f) {
    f.extend(mejs.MepDefaults, {
        usePluginFullScreen: true,
        newWindowCallback: function () {
            return ""
        },
        fullscreenText: mejs.i18n.t("Fullscreen")
    });
    f.extend(MediaElementPlayer.prototype, {
        isFullScreen: false,
        isNativeFullScreen: false,
        docStyleOverflow: null,
        isInIframe: false,
        buildfullscreen: function (a, b, c, e) {
            if (a.isVideo) {
                a.isInIframe = window.location != window.parent.location;
                if (mejs.MediaFeatures.hasTrueNativeFullScreen) {
                    c = function () {
                        if (mejs.MediaFeatures.isFullScreen()) {
                            a.isNativeFullScreen = true;
                            a.setControlsSize()
                        } else {
                            a.isNativeFullScreen = false;
                            a.exitFullScreen()
                        }
                    };
                    mejs.MediaFeatures.hasMozNativeFullScreen ? a.globalBind(mejs.MediaFeatures.fullScreenEventName, c) : a.container.bind(mejs.MediaFeatures.fullScreenEventName, c)
                }
                var d = this,
                    g = f('<div class="mejs-button mejs-fullscreen-button"><button type="button" aria-controls="' + d.id + '" title="' + d.options.fullscreenText + '" aria-label="' + d.options.fullscreenText + '"></button></div>').appendTo(b);
                if (d.media.pluginType === "native" || !d.options.usePluginFullScreen && !mejs.MediaFeatures.isFirefox) g.click(function () {
                    mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen() || a.isFullScreen ? a.exitFullScreen() : a.enterFullScreen()
                });
                else {
                    var k = null;
                    if (function () {
                        var h = document.createElement("x"),
                            l = document.documentElement,
                            r = window.getComputedStyle;
                        if (!("pointerEvents" in h.style)) return false;
                        h.style.pointerEvents = "auto";
                        h.style.pointerEvents = "x";
                        l.appendChild(h);
                        r = r && r(h, "").pointerEvents === "auto";
                        l.removeChild(h);
                        return !!r
                    }() && !mejs.MediaFeatures.isOpera) {
                        var j = false,
                            m = function () {
                                if (j) {
                                    for (var h in q) q[h].hide();
                                    g.css("pointer-events", "");
                                    d.controls.css("pointer-events", "");
                                    d.media.removeEventListener("click", d.clickToPlayPauseCallback);
                                    j = false
                                }
                            },
                            q = {};
                        b = ["top", "left", "right", "bottom"];
                        var p, t = function () {
                                var h = g.offset().left - d.container.offset().left,
                                    l = g.offset().top - d.container.offset().top,
                                    r = g.outerWidth(true),
                                    n = g.outerHeight(true),
                                    o = d.container.width(),
                                    s = d.container.height();
                                for (p in q) q[p].css({
                                    position: "absolute",
                                    top: 0,
                                    left: 0
                                });
                                q.top.width(o).height(l);
                                q.left.width(h).height(n).css({
                                    top: l
                                });
                                q.right.width(o - h - r).height(n).css({
                                    top: l,
                                    left: h + r
                                });
                                q.bottom.width(o).height(s - n - l).css({
                                    top: l + n
                                })
                            };
                        d.globalBind("resize", function () {
                            t()
                        });
                        p = 0;
                        for (c = b.length; p < c; p++) q[b[p]] = f('<div class="mejs-fullscreen-hover" />').appendTo(d.container).mouseover(m).hide();
                        g.on("mouseover", function () {
                            if (!d.isFullScreen) {
                                var h = g.offset(),
                                    l = a.container.offset();
                                e.positionFullscreenButton(h.left - l.left, h.top - l.top, false);
                                g.css("pointer-events", "none");
                                d.controls.css("pointer-events", "none");
                                d.media.addEventListener("click", d.clickToPlayPauseCallback);
                                for (p in q) q[p].show();
                                t();
                                j = true
                            }
                        });
                        e.addEventListener("fullscreenchange", function () {
                            d.isFullScreen = !d.isFullScreen;
                            d.isFullScreen ? d.media.removeEventListener("click", d.clickToPlayPauseCallback) : d.media.addEventListener("click", d.clickToPlayPauseCallback);
                            m()
                        });
                        d.globalBind("mousemove", function (h) {
                            if (j) {
                                var l = g.offset();
                                if (h.pageY < l.top || h.pageY > l.top + g.outerHeight(true) || h.pageX < l.left || h.pageX > l.left + g.outerWidth(true)) {
                                    g.css("pointer-events", "");
                                    d.controls.css("pointer-events", "");
                                    j = false
                                }
                            }
                        })
                    } else g.on("mouseover", function () {
                        if (k !== null) {
                            clearTimeout(k);
                            delete k
                        }
                        var h = g.offset(),
                            l = a.container.offset();
                        e.positionFullscreenButton(h.left - l.left, h.top - l.top, true)
                    }).on("mouseout", function () {
                        if (k !== null) {
                            clearTimeout(k);
                            delete k
                        }
                        k = setTimeout(function () {
                            e.hideFullscreenButton()
                        }, 1500)
                    })
                }
                a.fullscreenBtn = g;
                d.globalBind("keydown", function (h) {
                    if ((mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen() || d.isFullScreen) && h.keyCode == 27) a.exitFullScreen()
                })
            }
        },
        cleanfullscreen: function (a) {
            a.exitFullScreen()
        },
        containerSizeTimeout: null,
        enterFullScreen: function () {
            var a = this;
            if (!(a.media.pluginType !== "native" && (mejs.MediaFeatures.isFirefox || a.options.usePluginFullScreen))) {
                docStyleOverflow = document.documentElement.style.overflow;
                document.documentElement.style.overflow = "hidden";
                normalHeight = a.container.height();
                normalWidth = a.container.width();
                if (a.media.pluginType === "native") if (mejs.MediaFeatures.hasTrueNativeFullScreen) {
                    mejs.MediaFeatures.requestFullScreen(a.container[0]);
                    a.isInIframe && setTimeout(function c() {
                        if (a.isNativeFullScreen) f(window).width() !== screen.width ? a.exitFullScreen() : setTimeout(c, 500)
                    }, 500)
                } else if (mejs.MediaFeatures.hasSemiNativeFullScreen) {
                    a.media.webkitEnterFullscreen();
                    return
                }
                if (a.isInIframe) {
                    var b = a.options.newWindowCallback(this);
                    if (b !== "") if (mejs.MediaFeatures.hasTrueNativeFullScreen) setTimeout(function () {
                        if (!a.isNativeFullScreen) {
                            a.pause();
                            window.open(b, a.id, "top=0,left=0,width=" + screen.availWidth + ",height=" + screen.availHeight + ",resizable=yes,scrollbars=no,status=no,toolbar=no")
                        }
                    }, 250);
                    else {
                        a.pause();
                        window.open(b, a.id, "top=0,left=0,width=" + screen.availWidth + ",height=" + screen.availHeight + ",resizable=yes,scrollbars=no,status=no,toolbar=no");
                        return
                    }
                }
                a.container.addClass("mejs-container-fullscreen").width("100%").height("100%");
                a.containerSizeTimeout = setTimeout(function () {
                    a.container.css({
                        width: "100%",
                        height: "100%"
                    });
                    a.setControlsSize()
                }, 500);
                if (a.media.pluginType === "native") a.$media.width("100%").height("100%");
                else {
                    a.container.find(".mejs-shim").width("100%").height("100%");
                    a.media.setVideoSize(f(window).width(), f(window).height())
                }
                a.layers.children("div").width("100%").height("100%");
                a.fullscreenBtn && a.fullscreenBtn.removeClass("mejs-fullscreen").addClass("mejs-unfullscreen");
                a.setControlsSize();
                a.isFullScreen = true
            }
        },
        exitFullScreen: function () {
            clearTimeout(this.containerSizeTimeout);
            if (this.media.pluginType !== "native" && mejs.MediaFeatures.isFirefox) this.media.setFullscreen(false);
            else {
                if (mejs.MediaFeatures.hasTrueNativeFullScreen && (mejs.MediaFeatures.isFullScreen() || this.isFullScreen)) mejs.MediaFeatures.cancelFullScreen();
                document.documentElement.style.overflow = docStyleOverflow;
                this.container.removeClass("mejs-container-fullscreen").width(normalWidth).height(normalHeight);
                if (this.media.pluginType === "native") this.$media.width(normalWidth).height(normalHeight);
                else {
                    this.container.find(".mejs-shim").width(normalWidth).height(normalHeight);
                    this.media.setVideoSize(normalWidth, normalHeight)
                }
                this.layers.children("div").width(normalWidth).height(normalHeight);
                this.fullscreenBtn.removeClass("mejs-unfullscreen").addClass("mejs-fullscreen");
                this.setControlsSize();
                this.isFullScreen = false
            }
        }
    })
})(mejs.$);
(function (f) {
    f.extend(mejs.MepDefaults, {
        startLanguage: "",
        tracksText: mejs.i18n.t("Captions/Subtitles"),
        hideCaptionsButtonWhenEmpty: true,
        toggleCaptionsButtonWhenOnlyOne: false,
        slidesSelector: ""
    });
    f.extend(MediaElementPlayer.prototype, {
        hasChapters: false,
        buildtracks: function (a, b, c, e) {
            if (a.tracks.length != 0) {
                a.chapters = f('<div class="mejs-chapters mejs-layer"></div>').prependTo(c).hide();
                a.captions = f('<div class="mejs-captions-layer mejs-layer"><div class="mejs-captions-position mejs-captions-position-hover"><span class="mejs-captions-text"></span></div></div>').prependTo(c).hide();
                a.captionsText = a.captions.find(".mejs-captions-text");
                a.captionsButton = f('<div class="mejs-button mejs-captions-button"><button type="button" aria-controls="' + this.id + '" title="' + this.options.tracksText + '" aria-label="' + this.options.tracksText + '"></button><div class="mejs-captions-selector"><ul><li><input type="radio" name="' + a.id + '_captions" id="' + a.id + '_captions_none" value="none" checked="checked" /><label for="' + a.id + '_captions_none">' + mejs.i18n.t("None") + "</label></li></ul></div></div>").appendTo(b);
                for (b = c = 0; b < a.tracks.length; b++) a.tracks[b].kind == "subtitles" && c++;
                this.options.toggleCaptionsButtonWhenOnlyOne && c == 1 ? a.captionsButton.on("click", function () {
                    a.setTrack(a.selectedTrack == null ? a.tracks[0].srclang : "none")
                }) : a.captionsButton.hover(function () {
                    f(this).find(".mejs-captions-selector").css("visibility", "visible")
                }, function () {
                    f(this).find(".mejs-captions-selector").css("visibility", "hidden")
                }).on("click", "input[type=radio]", function () {
                    lang = this.value;
                    a.setTrack(lang)
                });
                a.options.alwaysShowControls ? a.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover") : a.container.bind("controlsshown", function () {
                    a.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover")
                }).bind("controlshidden", function () {
                    e.paused || a.container.find(".mejs-captions-position").removeClass("mejs-captions-position-hover")
                });
                a.trackToLoad = -1;
                a.selectedTrack = null;
                a.isLoadingTrack = false;
                for (b = 0; b < a.tracks.length; b++) a.tracks[b].kind == "subtitles" && a.addTrackButton(a.tracks[b].srclang, a.tracks[b].label);
                a.loadNextTrack();
                e.addEventListener("timeupdate", function () {
                    a.displayCaptions()
                }, false);
                if (a.options.slidesSelector != "") {
                    a.slidesContainer = f(a.options.slidesSelector);
                    e.addEventListener("timeupdate", function () {
                        a.displaySlides()
                    }, false)
                }
                e.addEventListener("loadedmetadata", function () {
                    a.displayChapters()
                }, false);
                a.container.hover(function () {
                    if (a.hasChapters) {
                        a.chapters.css("visibility", "visible");
                        a.chapters.fadeIn(200).height(a.chapters.find(".mejs-chapter").outerHeight())
                    }
                }, function () {
                    a.hasChapters && !e.paused && a.chapters.fadeOut(200, function () {
                        f(this).css("visibility", "hidden");
                        f(this).css("display", "block")
                    })
                });
                a.node.getAttribute("autoplay") !== null && a.chapters.css("visibility", "hidden")
            }
        },
        setTrack: function (a) {
            var b;
            if (a == "none") {
                this.selectedTrack = null;
                this.captionsButton.removeClass("mejs-captions-enabled")
            } else for (b = 0; b < this.tracks.length; b++) if (this.tracks[b].srclang == a) {
                this.selectedTrack == null && this.captionsButton.addClass("mejs-captions-enabled");
                this.selectedTrack = this.tracks[b];
                this.captions.attr("lang", this.selectedTrack.srclang);
                this.displayCaptions();
                break
            }
        },
        loadNextTrack: function () {
            this.trackToLoad++;
            if (this.trackToLoad < this.tracks.length) {
                this.isLoadingTrack = true;
                this.loadTrack(this.trackToLoad)
            } else {
                this.isLoadingTrack = false;
                this.checkForTracks()
            }
        },
        loadTrack: function (a) {
            var b = this,
                c = b.tracks[a];
            f.ajax({
                url: c.src,
                dataType: "text",
                success: function (e) {
                    c.entries = typeof e == "string" && /<tt\s+xml/ig.exec(e) ? mejs.TrackFormatParser.dfxp.parse(e) : mejs.TrackFormatParser.webvvt.parse(e);
                    c.isLoaded = true;
                    b.enableTrackButton(c.srclang, c.label);
                    b.loadNextTrack();
                    c.kind == "chapters" && b.media.addEventListener("play", function () {
                        b.media.duration > 0 && b.displayChapters(c)
                    }, false);
                    c.kind == "slides" && b.setupSlides(c)
                },
                error: function () {
                    b.loadNextTrack()
                }
            })
        },
        enableTrackButton: function (a, b) {
            if (b === "") b = mejs.language.codes[a] || a;
            this.captionsButton.find("input[value=" + a + "]").prop("disabled", false).siblings("label").html(b);
            this.options.startLanguage == a && f("#" + this.id + "_captions_" + a).click();
            this.adjustLanguageBox()
        },
        addTrackButton: function (a, b) {
            if (b === "") b = mejs.language.codes[a] || a;
            this.captionsButton.find("ul").append(f('<li><input type="radio" name="' + this.id + '_captions" id="' + this.id + "_captions_" + a + '" value="' + a + '" disabled="disabled" /><label for="' + this.id + "_captions_" + a + '">' + b + " (loading)</label></li>"));
            this.adjustLanguageBox();
            this.container.find(".mejs-captions-translations option[value=" + a + "]").remove()
        },
        adjustLanguageBox: function () {
            this.captionsButton.find(".mejs-captions-selector").height(this.captionsButton.find(".mejs-captions-selector ul").outerHeight(true) + this.captionsButton.find(".mejs-captions-translations").outerHeight(true))
        },
        checkForTracks: function () {
            var a = false;
            if (this.options.hideCaptionsButtonWhenEmpty) {
                for (i = 0; i < this.tracks.length; i++) if (this.tracks[i].kind == "subtitles") {
                    a = true;
                    break
                }
                if (!a) {
                    this.captionsButton.hide();
                    this.setControlsSize()
                }
            }
        },
        displayCaptions: function () {
            if (typeof this.tracks != "undefined") {
                var a, b = this.selectedTrack;
                if (b != null && b.isLoaded) for (a = 0; a < b.entries.times.length; a++) if (this.media.currentTime >= b.entries.times[a].start && this.media.currentTime <= b.entries.times[a].stop) {
                    this.captionsText.html(b.entries.text[a]);
                    this.captions.show().height(0);
                    return
                }
                this.captions.hide()
            }
        },
        setupSlides: function (a) {
            this.slides = a;
            this.slides.entries.imgs = [this.slides.entries.text.length];
            this.showSlide(0)
        },
        showSlide: function (a) {
            if (!(typeof this.tracks == "undefined" || typeof this.slidesContainer == "undefined")) {
                var b = this,
                    c = b.slides.entries.text[a],
                    e = b.slides.entries.imgs[a];
                if (typeof e == "undefined" || typeof e.fadeIn == "undefined") b.slides.entries.imgs[a] = e = f('<img src="' + c + '">').on("load", function () {
                    e.appendTo(b.slidesContainer).hide().fadeIn().siblings(":visible").fadeOut()
                });
                else if (!e.is(":visible") && !e.is(":animated")) {
                    console.log("showing existing slide");
                    e.fadeIn().siblings(":visible").fadeOut()
                }
            }
        },
        displaySlides: function () {
            if (typeof this.slides != "undefined") {
                var a = this.slides,
                    b;
                for (b = 0; b < a.entries.times.length; b++) if (this.media.currentTime >= a.entries.times[b].start && this.media.currentTime <= a.entries.times[b].stop) {
                    this.showSlide(b);
                    break
                }
            }
        },
        displayChapters: function () {
            var a;
            for (a = 0; a < this.tracks.length; a++) if (this.tracks[a].kind == "chapters" && this.tracks[a].isLoaded) {
                this.drawChapters(this.tracks[a]);
                this.hasChapters = true;
                break
            }
        },
        drawChapters: function (a) {
            var b = this,
                c, e, d = e = 0;
            b.chapters.empty();
            for (c = 0; c < a.entries.times.length; c++) {
                e = a.entries.times[c].stop - a.entries.times[c].start;
                e = Math.floor(e / b.media.duration * 100);
                if (e + d > 100 || c == a.entries.times.length - 1 && e + d < 100) e = 100 - d;
                b.chapters.append(f('<div class="mejs-chapter" rel="' + a.entries.times[c].start + '" style="left: ' + d.toString() + "%;width: " + e.toString() + '%;"><div class="mejs-chapter-block' + (c == a.entries.times.length - 1 ? " mejs-chapter-block-last" : "") + '"><span class="ch-title">' + a.entries.text[c] + '</span><span class="ch-time">' + mejs.Utility.secondsToTimeCode(a.entries.times[c].start) + "&ndash;" + mejs.Utility.secondsToTimeCode(a.entries.times[c].stop) + "</span></div></div>"));
                d += e
            }
            b.chapters.find("div.mejs-chapter").click(function () {
                b.media.setCurrentTime(parseFloat(f(this).attr("rel")));
                b.media.paused && b.media.play()
            });
            b.chapters.show()
        }
    });
    mejs.language = {
        codes: {
            af: "Afrikaans",
            sq: "Albanian",
            ar: "Arabic",
            be: "Belarusian",
            bg: "Bulgarian",
            ca: "Catalan",
            zh: "Chinese",
            "zh-cn": "Chinese Simplified",
            "zh-tw": "Chinese Traditional",
            hr: "Croatian",
            cs: "Czech",
            da: "Danish",
            nl: "Dutch",
            en: "English",
            et: "Estonian",
            tl: "Filipino",
            fi: "Finnish",
            fr: "French",
            gl: "Galician",
            de: "German",
            el: "Greek",
            ht: "Haitian Creole",
            iw: "Hebrew",
            hi: "Hindi",
            hu: "Hungarian",
            is: "Icelandic",
            id: "Indonesian",
            ga: "Irish",
            it: "Italian",
            ja: "Japanese",
            ko: "Korean",
            lv: "Latvian",
            lt: "Lithuanian",
            mk: "Macedonian",
            ms: "Malay",
            mt: "Maltese",
            no: "Norwegian",
            fa: "Persian",
            pl: "Polish",
            pt: "Portuguese",
            ro: "Romanian",
            ru: "Russian",
            sr: "Serbian",
            sk: "Slovak",
            sl: "Slovenian",
            es: "Spanish",
            sw: "Swahili",
            sv: "Swedish",
            tl: "Tagalog",
            th: "Thai",
            tr: "Turkish",
            uk: "Ukrainian",
            vi: "Vietnamese",
            cy: "Welsh",
            yi: "Yiddish"
        }
    };
    mejs.TrackFormatParser = {
        webvvt: {
            pattern_identifier: /^([a-zA-z]+-)?[0-9]+$/,
            pattern_timecode: /^([0-9]{2}:[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ([0-9]{2}:[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,
            parse: function (a) {
                var b = 0;
                a = mejs.TrackFormatParser.split2(a, /\r?\n/);
                for (var c = {
                    text: [],
                    times: []
                }, e, d; b < a.length; b++) if (this.pattern_identifier.exec(a[b])) {
                    b++;
                    if ((e = this.pattern_timecode.exec(a[b])) && b < a.length) {
                        b++;
                        d = a[b];
                        for (b++; a[b] !== "" && b < a.length;) {
                            d = d + "\n" + a[b];
                            b++
                        }
                        d = f.trim(d).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, "<a href='$1' target='_blank'>$1</a>");
                        c.text.push(d);
                        c.times.push({
                            start: mejs.Utility.convertSMPTEtoSeconds(e[1]) == 0 ? 0.2 : mejs.Utility.convertSMPTEtoSeconds(e[1]),
                            stop: mejs.Utility.convertSMPTEtoSeconds(e[3]),
                            settings: e[5]
                        })
                    }
                }
                return c
            }
        },
        dfxp: {
            parse: function (a) {
                a = f(a).filter("tt");
                var b = 0;
                b = a.children("div").eq(0);
                var c = b.find("p");
                b = a.find("#" + b.attr("style"));
                var e, d;
                a = {
                    text: [],
                    times: []
                };
                if (b.length) {
                    d = b.removeAttr("id").get(0).attributes;
                    if (d.length) {
                        e = {};
                        for (b = 0; b < d.length; b++) e[d[b].name.split(":")[1]] = d[b].value
                    }
                }
                for (b = 0; b < c.length; b++) {
                    var g;
                    d = {
                        start: null,
                        stop: null,
                        style: null
                    };
                    if (c.eq(b).attr("begin")) d.start = mejs.Utility.convertSMPTEtoSeconds(c.eq(b).attr("begin"));
                    if (!d.start && c.eq(b - 1).attr("end")) d.start = mejs.Utility.convertSMPTEtoSeconds(c.eq(b - 1).attr("end"));
                    if (c.eq(b).attr("end")) d.stop = mejs.Utility.convertSMPTEtoSeconds(c.eq(b).attr("end"));
                    if (!d.stop && c.eq(b + 1).attr("begin")) d.stop = mejs.Utility.convertSMPTEtoSeconds(c.eq(b + 1).attr("begin"));
                    if (e) {
                        g = "";
                        for (var k in e) g += k + ":" + e[k] + ";"
                    }
                    if (g) d.style = g;
                    if (d.start == 0) d.start = 0.2;
                    a.times.push(d);
                    d = f.trim(c.eq(b).html()).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, "<a href='$1' target='_blank'>$1</a>");
                    a.text.push(d);
                    if (a.times.start == 0) a.times.start = 2
                }
                return a
            }
        },
        split2: function (a, b) {
            return a.split(b)
        }
    };
    if ("x\n\ny".split(/\n/gi).length != 3) mejs.TrackFormatParser.split2 = function (a, b) {
        var c = [],
            e = "",
            d;
        for (d = 0; d < a.length; d++) {
            e += a.substring(d, d + 1);
            if (b.test(e)) {
                c.push(e.replace(b, ""));
                e = ""
            }
        }
        c.push(e);
        return c
    }
})(mejs.$);
(function (f) {
    f.extend(mejs.MepDefaults, {
        contextMenuItems: [{
            render: function (a) {
                if (typeof a.enterFullScreen == "undefined") return null;
                return a.isFullScreen ? mejs.i18n.t("Turn off Fullscreen") : mejs.i18n.t("Go Fullscreen")
            },
            click: function (a) {
                a.isFullScreen ? a.exitFullScreen() : a.enterFullScreen()
            }
        }, {
            render: function (a) {
                return a.media.muted ? mejs.i18n.t("Unmute") : mejs.i18n.t("Mute")
            },
            click: function (a) {
                a.media.muted ? a.setMuted(false) : a.setMuted(true)
            }
        }, {
            isSeparator: true
        }, {
            render: function () {
                return mejs.i18n.t("Download Video")
            },
            click: function (a) {
                window.location.href = a.media.currentSrc
            }
        }]
    });
    f.extend(MediaElementPlayer.prototype, {
        buildcontextmenu: function (a) {
            a.contextMenu = f('<div class="mejs-contextmenu"></div>').appendTo(f("body")).hide();
            a.container.bind("contextmenu", function (b) {
                if (a.isContextMenuEnabled) {
                    b.preventDefault();
                    a.renderContextMenu(b.clientX - 1, b.clientY - 1);
                    return false
                }
            });
            a.container.bind("click", function () {
                a.contextMenu.hide()
            });
            a.contextMenu.bind("mouseleave", function () {
                a.startContextMenuTimer()
            })
        },
        cleancontextmenu: function (a) {
            a.contextMenu.remove()
        },
        isContextMenuEnabled: true,
        enableContextMenu: function () {
            this.isContextMenuEnabled = true
        },
        disableContextMenu: function () {
            this.isContextMenuEnabled = false
        },
        contextMenuTimeout: null,
        startContextMenuTimer: function () {
            var a = this;
            a.killContextMenuTimer();
            a.contextMenuTimer = setTimeout(function () {
                a.hideContextMenu();
                a.killContextMenuTimer()
            }, 750)
        },
        killContextMenuTimer: function () {
            var a = this.contextMenuTimer;
            if (a != null) {
                clearTimeout(a);
                delete a
            }
        },
        hideContextMenu: function () {
            this.contextMenu.hide()
        },
        renderContextMenu: function (a, b) {
            for (var c = this, e = "", d = c.options.contextMenuItems, g = 0, k = d.length; g < k; g++) if (d[g].isSeparator) e += '<div class="mejs-contextmenu-separator"></div>';
            else {
                var j = d[g].render(c);
                if (j != null) e += '<div class="mejs-contextmenu-item" data-itemindex="' + g + '" id="element-' + Math.random() * 1E6 + '">' + j + "</div>"
            }
            c.contextMenu.empty().append(f(e)).css({
                top: b,
                left: a
            }).show();
            c.contextMenu.find(".mejs-contextmenu-item").each(function () {
                var m = f(this),
                    q = parseInt(m.data("itemindex"), 10),
                    p = c.options.contextMenuItems[q];
                typeof p.show != "undefined" && p.show(m, c);
                m.click(function () {
                    typeof p.click != "undefined" && p.click(c);
                    c.contextMenu.hide()
                })
            });
            setTimeout(function () {
                c.killControlsTimer("rev3")
            }, 100)
        }
    })
})(mejs.$);
(function (f) {
    f.extend(mejs.MepDefaults, {
        postrollCloseText: mejs.i18n.t("Close")
    });
    f.extend(MediaElementPlayer.prototype, {
        buildpostroll: function (a, b, c) {
            var e = this.container.find('link[rel="postroll"]').attr("href");
            if (typeof e !== "undefined") {
                a.postroll = f('<div class="mejs-postroll-layer mejs-layer"><a class="mejs-postroll-close" onclick="$(this).parent().hide();return false;">' + this.options.postrollCloseText + '</a><div class="mejs-postroll-layer-content"></div></div>').prependTo(c).hide();
                this.media.addEventListener("ended", function () {
                    f.ajax({
                        dataType: "html",
                        url: e,
                        success: function (d) {
                            c.find(".mejs-postroll-layer-content").html(d)
                        }
                    });
                    a.postroll.show()
                }, false)
            }
        }
    })
})(mejs.$);

(function (b) {
    b.extend(mejs.MepDefaults, {
        sourcechooserText: "Source Quality",
        qualityText: "Calidad de video"
    });
    b.extend(MediaElementPlayer.prototype, {
        buildsourcechooser: function (e, c, f, a) {
            var d = this;
            e.sourcechooserButton = b('<div class="mejs-button mejs-sourcechooser-button"><div class="mejs-sourcechooser-label" title="' + d.options.sourcechooserText + '" aria-label="' + d.options.sourcechooserText + '"></div><div class="mejs-sourcechooser-selector mejs-list-selector"><ul><li class="title">' + d.options.qualityText + "</li></ul></div></div>").appendTo(c).hover(function () {
                b(this).find(".mejs-sourcechooser-selector").css("visibility", "visible")
            }, function () {
                b(this).find(".mejs-sourcechooser-selector").css("visibility", "hidden")
            }).delegate("li:not(.title)", "click", function () {
                d.sourcechooserButton.find(".mejs-sourcechooser-selector li").removeClass("selected");
                b(this).addClass("selected");
                src = b(this).attr("data-src");
                txt = b(this).attr("data-label");
                d.sourcechooserButton.find(".mejs-sourcechooser-label").html(txt);
                a.currentSrc != src && (currentTime = a.currentTime, paused = a.paused, currentRate = a.playbackRate, a.setSrc(src), a.load(), a.addEventListener("loadedmetadata", function () {
                    this.currentTime = currentTime;
                    this.playbackRate = currentRate
                }, !0), a.addEventListener("canplay", function () {
                    paused || this.play()
                }, !0))
            });
            for (i in a.children) src = a.children[i], "SOURCE" === src.nodeName && ("probably" == a.canPlayType(src.type) || "maybe" == a.canPlayType(src.type)) && e.addSourceButton(src.src, src.title, src.type, a.src == src.src);
            d.sourcechooserButton.find(".mejs-sourcechooser-label").html(d.sourcechooserButton.find(".mejs-sourcechooser-selector li.selected").attr("data-label"))
        },
        addSourceButton: function (e, c, f, a) {
            if ("" === c || void 0 == c) c = e;
            f = f.split("/")[1];
            this.sourcechooserButton.find("ul").append(b('<li data-name="' + this.id + '_sourcechooser" id="' + this.id + "_sourcechooser_" + c + f + '" data-src="' + e + '" data-label="' + c.replace(/\(.+\)/, "") + '" ' + (a ? 'class="selected"' : "") + ">" + c + "</li>"));
            this.adjustSourcechooserBox()
        },
        adjustSourcechooserBox: function () {
            this.sourcechooserButton.find(".mejs-sourcechooser-selector").height(this.sourcechooserButton.find(".mejs-sourcechooser-selector ul").outerHeight(!0))
        }
    })
})(mejs.$);
(function (a) {
    a.extend(mejs.MepDefaults, {
        playbackspeedText: "Playback Speed",
        speedText: "Velocidad de video"
    });
    a.extend(MediaElementPlayer.prototype, {
        buildplaybackspeed: function (d, b, e, f) {
            var c = this;
            d.playbackspeedButton = a('<div class="mejs-button mejs-playbackspeed-button"><div class="mejs-playbackspeed-label" title="' + c.options.playbackspeedText + '" aria-label="' + c.options.playbackspeedText + '"></div><div class="mejs-playbackspeed-selector mejs-list-selector"><ul><li class="title">' + c.options.speedText + "</li></ul></div></div>").appendTo(b).hover(function () {
                a(this).find(".mejs-playbackspeed-selector").css("visibility", "visible")
            }, function () {
                a(this).find(".mejs-playbackspeed-selector").css("visibility", "hidden")
            }).delegate("li:not(.title)", "click", function () {
                c.playbackspeedButton.find(".mejs-playbackspeed-selector li").removeClass("selected");
                a(this).addClass("selected");
                rate = a(this).attr("data-rate");
                txt = a(this).attr("data-label");
                c.playbackspeedButton.find(".mejs-playbackspeed-label").html(txt);
                f.playbackRate != rate && (f.playbackRate = rate)
            });
            b = {
                "0": {
                    speed: "2x",
                    rate: 2
                },
                1: {
                    speed: "1.75x",
                    rate: 1.75
                },
                2: {
                    speed: "1.5x",
                    rate: 1.5
                },
                3: {
                    speed: "1.25x",
                    rate: 1.25
                },
                4: {
                    speed: "1x",
                    rate: 1
                },
                5: {
                    speed: "0.75x",
                    rate: 0.75
                }
            };
            for (i in b) src = b[i], d.addPlaybackButton(src.speed, src.rate);
            c.playbackspeedButton.find(".mejs-playbackspeed-label").html(c.playbackspeedButton.find(".mejs-playbackspeed-selector li.selected").attr("data-label"))
        },
        addPlaybackButton: function (d, b) {
            var e = 1 == b ? !0 : !1;
            this.playbackspeedButton.find("ul").append(a('<li data-name="' + d + '_playbackrate" data-rate="' + b + '" data-label="' + d + '" ' + (e ? 'class="selected"' : "") + ">" + d + "</li>"));
            this.adjustPlaybackspeedBox()
        },
        adjustPlaybackspeedBox: function () {
            this.playbackspeedButton.find(".mejs-playbackspeed-selector").height(this.playbackspeedButton.find(".mejs-playbackspeed-selector ul").outerHeight(!0))
        }
    })
})(mejs.$);
(function (g) {
    g.extend(MediaElementPlayer.prototype, {
        buildinvideoquiz: function (d, c, b, h) {
            var e = g(c).find(".mejs-time-total"),
                j = !1,
                f = d.options.invideo;
            if (void 0 != f && f.length) g(h).off(".invideo").on("loadedmetadata.invideo", function () {
                d.loadPins(f, e, this.duration)
            }).on("timeupdate.invideo", function () {
                var b = 1E3 * this.currentTime,
                    c;
                for (c in f) if (b >= f[c].time && !f[c].done && !j) {
                    this.pause();
                    f[c].done = !0;
                    d.loadActivity(f[c]);
                    j = !0;
                    break
                }
            }).on("play", function () {
                d.cleanUI();
                j = !1
            })
        },
        cleanUI: function () {
            this.layers.find(".mejs-quiz").remove()
        },
        loadPins: function (d, c, b) {
            for (var h = d.length, e = 0; e < h; e++) g('<span class="mejs-timetag quiz"></span>').appendTo(c).css({
                left: d[e].time / b / 10 + "%"
            })
        },
        loadActivity: function (d) {
            var c = this,
                b = 0 === d.tipo.lastIndexOf("code", 0),
                h = g('<div class="mejs-overlay mejs-layer mejs-quiz ' + (b ? "code-act" : "") + '"></div>').appendTo(this.layers);
            c.form = g('<form class="invideo-quiz"></form>').appendTo(h).submit(function () {
                return !1
            });
            a.loader(!0);
            a.load("/ajax/clase", "POST", {
                action: "invideo_act_options",
                id: c.options.class_id,
                act_id: d.id
            }, function (e) {
                e.error || (b ? c.showCode(d, e.response) : c.showQuestion(d, e.response));
                a.loader()
            }, "json")
        },
        showCode: function (d, c) {
            var b = this,
                h = b.options.lang;
            if (c.length) {
                var e = g('<pre class="codebox"></pre>').appendTo(b.form);
                switch (d.tipo) {
                case "codeerror":
                    g('<div class="q">' + h.codeerror_q + "</div>").prependTo(b.form);
                    var j = g('<input type="hidden" name="block" value="" />').appendTo(b.form),
                        f = this.htmlEscape(c[0].texto).replace(/(?:\[\[)([\s\S]+?)(?:\]\])/ig, "<a class='codeblock'>$1</a>");
                    e.html(f);
                    e.find("a.codeblock").each(function (b) {
                        g(this).click(function () {
                            j.val(b + 1);
                            e.find("a.codeblock").removeClass("sel");
                            g(this).addClass("sel")
                        })
                    });
                    break;
                case "codeorder":
                    g('<div class="q">' + h.codeorder_q + "</div>").prependTo(b.form);
                    for (var j = g('<input type="hidden" name="order" value="" />').appendTo(b.form), k = g('<ul class="codeorder" />').appendTo(e), f = c.length, l = 0; l < f; l++) k.append('<li id="' + c[l].id + '">' + this.htmlEscape(c[l].texto) + "</li>");
                    k.sortable({
                        placeholder: "sortmark",
                        items: "li",
                        opacity: 0.9,
                        forcePlaceholderSize: !0,
                        tolerance: "pointer",
                        addClasses: !1,
                        update: function () {
                            var b = k.sortable("toArray");
                            j.val(b.join(","))
                        }
                    });
                    k.disableSelection()
                }
                var m = g('<div class="bottom"><input type="button" value="' + h.skip + '" class="boton dark skip" /> <input type="submit" value="' + h.continuar + '" class="boton" /></div>').appendTo(b.form).find(".skip").click(function () {
                    b.cleanUI();
                    b.play()
                });
                b.form.one("submit", function () {
                    b.checkAnswer(d);
                    m.remove();
                    return !1
                })
            } else b.play()
        },
        showQuestion: function (d, c) {
            var b = this,
                h = b.options.lang;
            if (c.length) {
                g('<div class="q">' + d.texto + "</div>").appendTo(b.form);
                var e = g('<div class="ans block"><ul></ul></div>').appendTo(b.form).find("ul");
                switch (d.tipo) {
                case "choice":
                    for (var j = c.length, f = 0; f < j; f++) e.append('<li><label><input type="radio" name="answer" value="' + c[f].id + '" />' + c[f].texto + "</label></li>");
                    break;
                case "multi":
                    e.append('<li class="note">' + h.multipleanswers + "</li>");
                    j = c.length;
                    for (f = 0; f < j; f++) e.append('<li><label><input type="checkbox" name="answer[]" value="' + c[f].id + '" />' + c[f].texto + "</label></li>");
                    break;
                case "val":
                    e.append('<li class="note">' + h.valanswer + "</li>"), e.append('<li><input type="text" name="answer" value="" /></li>')
                }
                var k = g('<div class="bottom"><input type="button" value="' + h.skip + '" class="boton dark skip" /> <input type="submit" value="' + h.continuar + '" class="boton" /></div>').appendTo(b.form).find(".skip").click(function () {
                    b.cleanUI();
                    b.play()
                });
                b.form.one("submit", function () {
                    b.checkAnswer(d);
                    k.remove();
                    return !1
                })
            } else b.play()
        },
        checkAnswer: function (d) {
            var c = this,
                b = c.form.serialize(),
                b = b + ("&action=invideo_answer&id=" + c.options.class_id + "&act_id=" + d.id);
            c.form.find(".ans input").prop("disabled", !0);
            a.loader(!0);
            a.load("/ajax/clase", "POST", b, function (b) {
                b.error || c.showAnswer(b.response, d);
                a.loader()
            }, "json")
        },
        showAnswer: function (d, c) {
            var b = this,
                h = b.options.lang;
            b.form.find(".ans ul");
            switch (c.tipo) {
            case "choice":
            case "multi":
                for (var e in d.ans) g('input[value="' + d.ans[e] + '"]', b.form).parent().parent().addClass("correct");
                break;
            case "val":
                d.correct && g('input[type="text"]', b.form).parent().addClass("correct")
            }
            e = g('<div class="result"><div class="title"></div></div>');
            b.form.find(".ans").after(e);
            e.addClass(d.correct ? "correct" : "incorrect");
            e.find(".title").html(d.correct ? h.correcto : h.incorrecto);
            d.explain && e.append('<div class="explain">' + d.explain + "</div>");
            b.form.one("submit", function () {
                b.cleanUI();
                b.play();
                return !1
            })
        },
        htmlEscape: function (d) {
            return String(d).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        },
        nl2br: function (d, c) {
            return (d + "").replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, "$1" + (c || "undefined" === typeof c ? "<br />" : "<br>") + "$2")
        }
    })
})(mejs.$);
(function (b) {
    b.extend(MediaElementPlayer.prototype, {
        buildinvideocode: function (a, d, f, c) {
            b(d).find(".mejs-time-total");
            var e = a.options.invideocode,
                g;
            void 0 != e && e.length && (a.setupEditor(e), b(c).off(".invideocode").on("timeupdate.invideocode", function () {
                if (!a.externalblock) {
                    var b = 1E3 * this.currentTime,
                        d = !1,
                        c;
                    for (c in e) if (b >= e[c].start && b < e[c].end) {
                        g != c && (a.loadCode(e[c]), g = c);
                        d = !0;
                        break
                    }
                    a.showUI(d)
                }
            }).on("play.invideocode", function () {
                a.externalblock = !1
            }))
        },
        showUI: function (a) {
            var d = this.layers.find(".mejs-code");
            a ? d.fadeIn(300) : (d.fadeOut(300), b("#codeblocks li").removeClass())
        },
        setupEditor: function (a) {
            var d = this.options.lang,
                f = b('<div class="mejs-overlay mejs-layer mejs-code"></div>').appendTo(this.layers);
            this.editor = b('<div class="editor dark"></div>').appendTo(f).html("<h3><a>" + d.ocultar + "</a>" + d.codigo + "</h3><div></div>");
            this.cm = CodeMirror(this.editor.children("div")[0], {
                value: "",
                theme: "acamica",
                indentUnit: 4,
                lineNumbers: !0,
                lineWrapping: !0,
                readOnly: !0
            });
            this.layers.find(".mejs-code").hide();
            this.h3 = this.editor.find("h3");
            this.h3.children("a").click(function () {
                c.showUI(!1)
            });
            var d = b("#codeblocks ul"),
                c = this,
                e;
            for (e in a) b("<li><span class='time'>" + moment(parseInt(a[e].start)).format("mm:ss") + "</span><span class='text'>" + this.htmlEscape(a[e].code.split("\n")[0]) + "</span></li>").appendTo(d).data("codei", e).click(function () {
                c.pause();
                c.externalblock = !0;
                c.loadCode(a[b(this).data("codei")]);
                b(this).addClass("sel")
            })
        },
        loadCode: function (a) {
            this.showUI(!0);
            this.cm.swapDoc(CodeMirror.Doc(a.code, this.getCodeMode(a.tipo)));
            this.cm.setSize(null, this.media.height - this.h3.height());
            b("#codeblocks li").removeClass()
        },
        getCodeMode: function (a) {
            switch (a) {
            case "js":
                return "javascript";
            case "css":
                return "css";
            case "java":
                return "text/x-java";
            case "xml":
                return "xml";
            default:
                return "htmlmixed"
            }
        },
        htmlEscape: function (a) {
            return String(a).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }
    })
})(mejs.$);
/*
	Redactor v8.2.2
	Updated: January 17, 2013

	http://redactorjs.com/

	Copyright (c) 2009-2013, Imperavi Inc.
	License: http://redactorjs.com/license/

	Usage: $('#content').redactor();
*/
eval(function (p, a, c, k, e, d) {
    e = function (c) {
        return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!''.replace(/^/, String)) {
        while (c--) {
            d[e(c)] = k[c] || e(c)
        }
        k = [function (e) {
            return d[e]
        }];
        e = function () {
            return '\\w+'
        };
        c = 1
    };
    while (c--) {
        if (k[c]) {
            p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])
        }
    }
    return p
}('H 5t,4W;F(Z 5x==="1h"){H 5x={}}H N={11:"bC",22:"3p aa",3k:"3p a2",1m:"5Q",2p:"am",93:"3p 2p",4O:"bF",37:"bG",8A:"bA",8E:"bz",5a:"a4",8G:"5m 1",8P:"5m 2",8Q:"5m 3",91:"5m 4",2K:"bt",2z:"bJ",3j:"bY ae",2M:"c0 ae",3E:"bL aG",3C:"c2 aG",3t:"b6",3y:"bg",3Q:"bf",4v:"3p",5R:"b8",9E:"4r",6b:"3p 5Q",67:"4p 5U bb",62:"4p 5U be",63:"4p 5W aQ",65:"4p 5W 9M",5O:"4r 5W",5N:"4r 5U",5J:"4r 5Q",8J:"df",8L:"dk",5G:"4p 9Q",5E:"4r 9Q",U:"d5",9B:"dm",21:"dI",1x:"aQ",32:"9M",9r:"a2 dq am",18:"b0",4u:"5Z",do:"5T",8M:"aa du a4",2d:"3p dy",3S:"7M",cm:"ck",5S:"cq",82:"ch 5S",8y:"c7 2d c4",5D:"9T 18 9U ao 1x",5H:"c5 18",5L:"9T 18 9U ao 32",5K:"cd 18",5i:"3p cK cQ",3c:"cD",5P:"cC",9u:"cZ 2p cE 2r cF",3U:"cB",56:"cA"};(G(b){3G.fn.1Y=G(c){K E.1q(G(){H e=b(E);H d=e.1v("1Y");F(!d){e.1v("1Y",(d=2r a(E,c)))}})};H a=G(d,c){E.$el=b(d);F(Z c!=="1h"&&Z c.4y!=="1h"&&c.4y!=="en"&&Z 5x[c.4y]!=="1h"){N=5x[c.4y]}E.J=b.3q({1y:I,12:I,4y:"en",6H:"cx",2f:I,6Q:I,6S:I,6l:I,61:I,8U:X,1k:I,4I:I,4A:X,4f:I,2H:I,9C:0,9y:I,5v:X,1I:X,96:X,1J:I,8B:I,8j:X,6g:X,7o:"7v://",5h:I,6z:I,8p:60,4n:I,49:I,42:I,5Y:I,5b:I,47:I,7x:I,7q:I,2i:I,2E:X,4a:X,9j:["1i","1f","3A","2Z","2v","cy","cz","2B","6C","6A","cG","cH","cP","cR","cS","cO","cN","cJ","7Z","cI","cM","5a","1U","M","1e","a","br","p","b","i","8q","8f","u","2y","22","5v","cu","2X","1y","1T","2k","41","2e","ct","cc","cb","2U","3b","1t","9b","dl","dt","dd","ce","cf","ca","1u","5a","6D","c9","8h","em","1m","1S","1j","4t","3d","23","9m","4D","4C","4x","4w","6s","6B"],4o:I,8T:{},8S:[],3a:["11","|","37","|","2K","2z","3c","|","3E","3C","3t","3y","|","3k","22","2d","1m","2p","|","3j","2M","|","56","|","5i"],8Z:["37","|","2K","2z","3c","|","3E","3C","3t","3y","|","3j","2M"],8R:["p","2e","1u","4D","4C","4x","4w"],5g:["3c","2z","2K","3U","3E","3C"],9w:{b:"2K",8h:"2K",i:"2z",em:"2z",8q:"3c",8f:"3c",2U:"3E",3b:"3C",u:"3U"},6w:["#c6","#c8","#cg","#cp","#cr","#cs","#co","#cn","#cj","#ci","#cl","#cT","#9i","#cU","#dw","#dx","#dz","#dv","#dp","#dr","#ds","#dA","#dB","#dJ","#dK","#dL","#dM","#dH","#dD","#dC","#7Y","#dE","#dF","#dG","#dn","#d3","#d2","#d4","#d6","#d1","#d0","#7Y","#cW","#cV","#cX","#cY","#c3","#dh","#di","#dj","#dg","#da","#d9","#db","#dN","#9i","#bT","#bd","#bc","#b9","#ba","#bm","#bn","#b7","#bl","#bk"],5q:"<p><br /></p>",3z:I,3N:X,a6:2C()+\'<M R="3X"><1i R="bh" 4d="5r" 3n="" 5A="5C/1i-1v"><1e>bi (bj)</1e><1f 1r="18" R="7w" Y="2G" /><M 1G="43-1A: bo;"><1f 1r="2d" R="3x" 1E="2d" /></M></1i><br></M>\',9Y:2C()+\'<M R="3X"><1e>\'+N.U+\'</1e><1f R="6a" Y="2G" /><1e>\'+N.2p+\'</1e><1f R="39" Y="2G" /><1e>\'+N.9B+\'</1e><2Z R="69"><2v 28="21">\'+N.21+\'</2v><2v 28="1x">\'+N.1x+\'</2v><2v 28="32">\'+N.32+\'</2v></2Z></M><M R="4q"><a 1b="1N:1L(17);" R="9H" Y="2q">\'+N.9E+\'</a>&1Q;&1Q;&1Q;<a 1b="1N:1L(17);" Y="2q 3T">\'+N.3Q+\'</a><1f 1r="3A" 1E="5R" Y="2q" R="9R" 28="\'+N.5R+\'" /></M>\',aC:2C()+\'<M R="3X"><M R="2V"><a 1b="1N:1L(17);" Y="3m">\'+N.3S+\'</a><a 1b="1N:1L(17);">\'+N.5S+\'</a><a 1b="1N:1L(17);">\'+N.2p+\'</a></M><1i R="bR" 4d="5r" 3n="" 5A="5C/1i-1v"><M R="9t" Y="2t"><1f 1r="2d" R="3x" 1E="2d" /></M><M R="6y" Y="2t" 1G="2Q: 21;"><M R="5V"></M></M></1i><M R="5X" Y="2t" 1G="2Q: 21;"><1e>\'+N.9r+\'</1e><1f 1r="18" 1E="39" R="39" Y="2G"  /></M></M><M R="4q"><a 1b="1N:1L(17);" Y="2q 3T">\'+N.3Q+\'</a><1f 1r="3A" 1E="3S" Y="2q" R="9p" 28="\'+N.4v+\'" /></M>\',aM:2C()+\'<M R="3X"><1i R="bS" 4d="5r" 3n=""><M R="2V"><a 1b="1N:1L(17);" Y="3m">5T</a><a 1b="1N:1L(17);">5Z</a><a 1b="1N:1L(17);">\'+N.5P+\'</a></M><1f 1r="7t" R="4b" 28="1" /><M Y="2t" R="9t"><1e>5T</1e><1f 1r="18" R="54" Y="2G"  /><1e>\'+N.18+\'</1e><1f 1r="18" Y="2G 4P" R="9N" /><1e><1f 1r="bP" R="7l"> \'+N.9u+\'</1e></M><M Y="2t" R="6y" 1G="2Q: 21;"><1e>5Z</1e><1f 1r="18" R="7C" Y="2G" /><1e>\'+N.18+\'</1e><1f 1r="18" Y="2G 4P" R="a8" /></M><M Y="2t" R="5X" 1G="2Q: 21;"><1e>\'+N.5P+\'</1e><1f 1r="18" Y="2G" R="7k"  /><1e>\'+N.18+\'</1e><1f 1r="18" Y="2G 4P" R="aR" /></M></1i></M><M R="4q"><a 1b="1N:1L(17);" Y="2q 3T">\'+N.3Q+\'</a><1f 1r="3A" Y="2q" R="aO" 28="\'+N.4v+\'" /></M>\',aK:2C()+\'<M R="3X"><1e>\'+N.8J+\'</1e><1f 1r="18" 2m="5" 28="2" R="5I" /><1e>\'+N.8L+\'</1e><1f 1r="18" 2m="5" 28="3" R="aL" /></M><M R="4q"><a 1b="1N:1L(17);" Y="2q 3T">\'+N.3Q+\'</a><1f 1r="3A" 1E="3S" Y="2q" R="b1" 28="\'+N.4v+\'" /></M>\',al:2C()+\'<M R="3X"><1i R="bp"><1e>\'+N.8M+\'</1e><2B R="68" 1G="25: 99%; 1B: bU;"></2B></1i></M><M R="4q"><a 1b="1N:1L(17);" Y="2q 3T">\'+N.3Q+\'</a><1f 1r="3A" Y="2q" R="af" 28="\'+N.4v+\'" /></M>\',1a:{11:{U:N.11,1l:"86"},37:{U:N.37,1l:"1p",2g:{p:{U:N.8A,1c:"2n"},2e:{U:N.8E,1c:"2n",2w:"bV"},1u:{U:N.5a,1c:"2n",2w:"bW"},4D:{U:N.8G,1c:"2n",2w:"bX"},4C:{U:N.8P,1c:"2n",2w:"bK"},4x:{U:N.8Q,1c:"2n",2w:"bw"},4w:{U:N.91,1c:"2n",2w:"bx"}}},2K:{U:N.2K,1c:"2K"},2z:{U:N.2z,1c:"2z"},3c:{U:N.3c,1c:"by"},3U:{U:N.3U,1c:"3U"},3E:{U:"&bv; "+N.3E,1c:"95"},3C:{U:"1. "+N.3C,1c:"94"},3t:{U:"< "+N.3t,1c:"3t"},3y:{U:"> "+N.3y,1c:"3y"},3k:{U:N.3k,1l:"aw"},22:{U:N.22,1l:"ad"},2d:{U:N.2d,1l:"aH"},1m:{U:N.1m,1l:"1p",2g:{6b:{U:N.6b,1l:"ax"},bu:{1E:"5n"},67:{U:N.67,1l:"9X"},62:{U:N.62,1l:"9I"},63:{U:N.63,1l:"aj"},65:{U:N.65,1l:"ab"},bq:{1E:"5n"},5G:{U:N.5G,1l:"9Z"},5E:{U:N.5E,1l:"5F"},bs:{1E:"5n"},5O:{U:N.5O,1l:"at"},5N:{U:N.5N,1l:"aX"},5J:{U:N.5J,1l:"a0"}}},2p:{U:N.2p,1l:"1p",2g:{2p:{U:N.93,1l:"ar"},4O:{U:N.4O,1c:"4O"}}},3j:{U:N.3j,1l:"1p"},2M:{U:N.2M,1l:"1p"},56:{U:N.56,1l:"1p",2g:{71:{U:N.5D,1c:"6Z"},7a:{U:N.5H,1c:"4V"},78:{U:N.5L,1c:"4T"},4F:{U:N.5K,1c:"4R"}}},71:{1c:"6Z",U:N.5D},7a:{1c:"4V",U:N.5H},78:{1c:"4T",U:N.5L},4F:{1c:"4R",U:N.5K},5i:{1c:"6o",U:N.5i}}},c,E.$el.1v());E.4G=[];E.45()};a.81={45:G(){E.1B=E.$el.12("1B");E.25=E.$el.12("25");4W=E.V=V;5t=E.1V=1V;F(E.J.96===I&&E.2R()){E.6I(X);K I}F(E.J.1y){E.J.4A=I}F(E.J.1J){E.J.3a=E.J.8Z}L{F(E.J.1a!==I){F(E.J.5v===I){H d=E.J.3a.3e("11");H e=E.J.3a[d+1];E.J.3a.8Y(d,1);F(Z e!=="1h"&&e==="|"){E.J.3a.8Y(d,1)}}b.3q(E.J.1a,E.J.8T);b.1q(E.J.8S,b.Q(G(f,g){E.J.3a.6v(g)},E))}}F(E.J.1a!==I){b.1q(E.J.1a.37.2g,b.Q(G(f,g){F(b.5j(f,E.J.8R)=="-1"){98 E.J.1a.37.2g[f]}},E))}G c(){E.8I();E.8n();F(Z E.J.61==="1T"){b.1q(E.J.61,b.Q(G(j,k){F(Z 6P[k]!=="1h"){b.3q(E,6P[k]);F(Z 6P[k].45!=="1h"){E.45()}}},E))}F(E.J.5g!==I&&E.J.1a!==I){H g=b.Q(G(){E.9v()},E);E.$T.1d(g).2O(g)}H i=I;F(E.1n("3F")&&48.3Z.3e("92")===-1){H f=E.1n("5l").7G(".");F(f[0]<bH){i=X}}F(E.2R(X)===I&&i===I){E.$T.44("bI",b.Q(G(j){F(E.J.8U===I){K X}E.6O=X;E.9A();F(E.J.4A===X){E.5u=E.V.1X.3O}L{E.5u=E.$T.3O()}H k=E.6h();3i(b.Q(G(){H l=E.6h();E.$T.19(k);E.2S();H m=E.aq(l);E.8m(m);E.6O=I},E),1)},E))}E.2O();E.6R();F(E.J.5h!==I){E.8r()}3i(b.Q(G(){E.2E();E.5e()},E),1);F(E.1n("33")){E.$T.1d(b.Q(G(){E.2I()},E));7e{E.V.1O("bE",I,I);E.V.1O("bB",I,I)}6n(h){}}F(E.J.1k){3i(b.Q(G(){E.$T.1k()},E),1)}F(E.J.2H){E.70();b(V).bD(b.Q(E.70,E))}F(Z E.J.2f==="G"){E.J.2f(E)}F(E.J.1a!==I){E.$1a.1w("a").16("4I","-1")}}E.6I(I,c)},1I:G(d,c){d.31();E.1O(c,I)},2O:G(){E.$T.2O(b.Q(G(d){H c=d.5p||d.8W;F(E.1n("33")&&!E.6O){E.2I()}F(Z E.J.6Q==="G"){E.J.6Q(E,d)}F(c===8||c===46){E.2E();K E.9n(d)}F(c===13&&!d.4z&&!d.8X&&!d.8V){F(E.1n("3F")){E.9h(d)}F(E.J.8j){E.$T.9s()}}E.1s()},E))},6R:G(){E.$T.6R(b.Q(G(j){H d=j.5p||j.8W;H f=E.2L();H i=E.3o();H h=I;H g=j.8X||j.8V;F((f||i)&&(b(f).1g(0).1z==="5f"||b(i).1g(0).1z==="5f")){h=X}F(Z E.J.6S==="G"){E.J.6S(E,j)}F(g&&E.J.1I){F(d===90){F(E.J.3z!==I){j.31();E.9q()}L{F(j.4z){E.1I(j,"fF")}L{E.1I(j,"fC")}}}L{F(d===77){E.1I(j,"fE")}L{F(d===66){E.1I(j,"2K")}L{F(d===73){E.1I(j,"2z")}L{F(d===74){E.1I(j,"95")}L{F(d===75){E.1I(j,"94")}L{F(d===76){E.1I(j,"fl")}L{F(d===72){E.1I(j,"fx")}}}}}}}}}F(!g&&d!==90){E.J.3z=I}F(h===X&&d===13){j.31();H c=b(i).1W().18();E.3W(E.V.6M("\\r\\n"));F(c.3Y(/\\s$/)==-1){E.3W(E.V.6M("\\r\\n"))}E.1s();K I}F(E.J.1I&&!j.4z&&d===9){F(h===I){E.1I(j,"3y")}L{j.31();E.3W(E.V.6M("\\t"));E.1s();K I}}L{F(E.J.1I&&j.4z&&d===9){E.1I(j,"3t")}}F(E.1n("3F")&&48.3Z.3e("92")===-1){K E.8z(j,d)}},E))},6I:G(e,i){F(e!==X){E.$24=b(\'<M Y="gk"></M>\');F(E.J.1J){E.1J=b(\'<M Y="6T" 1G="2Q: 21;"></M>\')}E.$1M=17;G h(){E.$T=E.$1M.8F().1w("1X").16("6L",X).16("8D",E.J.6H);4W=E.V=E.$T[0].gn;5t=E.1V=E.V.gj||1V;F(E.J.12!==I){E.$1M.8F().1w("ge").19(\'<2p 4m="gf" 1b="\'+E.J.12+\'" />\')}E.$T.11(f);F(i){i.4S(E);i=17}}E.4J=X;F(E.$el.1g(0).1z==="8H"){F(E.J.1y){H g=E;E.$1M=b(\'<1y 1G="25: 4B%;" gp="0"></1y>\').aJ(G(){h.4S(g)})}L{E.$1M=E.$T=b("<M></M>")}H d=E.$el.1g(0).2w.7G(/\\s+/);b.1q(d,b.Q(G(j,k){E.$1M.2a("gw"+k)},E))}L{E.4J=I;E.$1M=E.$T=E.$el;E.$el=b(\'<2B 1E="\'+E.$T.16("R")+\'"></2B>\').12("1B",E.1B)}F(E.$T){E.$T.2a("4c").16("6L",X).16("8D",E.J.6H)}F(E.J.4I!==I){E.$1M.16("4I",E.J.4I)}F(E.J.4f!==I){E.$1M.12("gs-1B",E.J.4f+"1Z")}F(E.J.8B===X){E.$1M.2a("8K")}F(E.J.4A===I){E.$1M.12("1B",E.1B)}E.$el.1P();H f="";F(E.4J){f=E.$el.15();f=E.6f(f);E.$24.8C(E.$el).19(E.$1M).19(E.$el)}L{f=E.$T.11();f=E.6f(f);E.$24.8C(E.$1M).19(E.$el).19(E.$T)}f=E.9o(f);F(E.$T){E.$T.11(f)}F(E.4J===I){E.1s()}}L{F(E.$el.1g(0).1z!=="8H"){H f=E.$el.15();H c=b(\'<2B 1E="\'+E.$T.16("R")+\'"></2B>\').12("1B",E.1B).15(f);E.$el.1P();E.$el.2h(c)}}F(i&&E.$T){i.4S(E)}},8I:G(){F(E.J.1J===I){K I}E.1J.1P();E.$T.44("8O",b.Q(G(c){E.8N(c)},E));E.$T.44("97",b.Q(G(){E.1J.1P()},E))},8N:G(g){b(".6T").1P();H c=E.1J.9D();H f=g.gd;F(b(E.V).25()<(f+c)){f=f-c}H d=g.g0+b(V).3O()+14;F(E.J.1y===X){d=d+E.$24.2J().1A;f=f+E.$24.2J().1x}E.1J.12({1x:f+"1Z",1A:d+"1Z"}).1p()},1s:G(){E.$el.15(E.$T.11())},5d:G(c){c=E.4l(c);E.$T.11(c).1k();E.1s()},4H:G(){H c="";F(E.J.3N){c=E.$T.11()}L{c=E.$el.15()}K E.4l(c)},7f:G(c){E.$T.1k();E.6V(c);E.2E();E.1s()},6V:G(d){H h,c;F(E.V.1o){h=E.1V.1o();F(h.4h&&h.4k){c=h.4h(0);c.fZ();H e=E.V.3v("M");e.3L=d;H i=E.V.aY(),g,f;3B(g=e.aW){f=i.4Y(g)}c.a9(i);F(f){c=c.b3();c.fY(f);c.3s(X);h.7c();h.6d(c)}}}L{F(E.V.1R&&E.V.1R.1r!="fV"){E.V.1R.2Y().6U(d)}}},8o:G(){H d=E.4H();F(E.4J){E.$24.2h(E.$el);E.$24.1C();E.$el.1B(E.1B).15(d).1p()}L{E.$24.2h(E.$T);E.$24.1C();E.$T.26("4c").26("8K").16("6L",I).11(d).1p()}F(E.J.4o){b(E.J.4o).7u()}b(".6T").1C();3f(H c=0;c<E.4G.3g;c++){E.4G[c].1C();98(E.4G[c])}F(E.J.5h!==I){ga(E.88)}},9v:G(){H d=E.3o();E.6u();b.1q(E.J.9w,b.Q(G(f,g){F(b(d).3I(f,E.$T.1g()[0]).3g!=0){E.2T(g)}},E));H c=b(d).3I(["p","M","4D","4C","4x","4w","6s","6B","2e","1j"]);F(Z c[0]!=="1h"&&Z c[0].79!=="1h"&&b(c[0].79).2m()!=0){H e=b(c[0].79).12("18-6F");g8(e){7b"32":E.2T("78");4e;7b"9f":E.2T("7a");4e;7b"4F":E.2T("4F");4e;g7:E.2T("71");4e}}},2E:G(){F(E.J.2E===I){K I}E.$T.1w("2y").1q(b.Q(G(c,d){F(E.1n("2b")){b(d).16("gb","fX")}E.av(d)},E))},5e:G(){E.$T.1w("1m").1d(b.Q(E.a5,E))},70:G(){H c=b(E.V).3O();H f=E.$24.2l().1A;H e=0;F(c>f){H d="4B%";F(E.J.9y){e=E.$24.2l().1x;d=E.$24.9D()}E.2H=X;E.$1a.12({2J:"2H",25:d,9z:gv,1A:E.J.9C+"1Z",1x:e})}L{E.2H=I;E.$1a.12({2J:"go",25:"3u",9z:1,1A:0,1x:e})}},9A:G(){E.2I();E.J.3z=E.$T.11()},9q:G(){F(E.J.3z===I){K I}E.$T.11(E.J.3z);F(!E.1n("2b")){E.2S()}E.J.3z=I},1O:G(d,c){F(E.J.3N==I){E.$el.1k();K I}7e{H k;F(d==="3r"){F(E.1n("2b")){E.$T.1k();E.V.1R.2Y().6U(c)}L{E.6V(c)}E.2E()}L{F(d==="4O"){k=E.2L();F(b(k).1g(0).1z==="A"){b(k).2F(b(k).18())}L{E.3h(d,c)}}L{F(d==="6Z"||d==="4V"||d==="4T"||d==="4R"){k=E.3o();H l=b(k).1g(0).1z;F(E.J.1y===I&&b(k).gl(".4c").2m()==0){K I}H g=["P","6k","ft","fg","eh","ei","ej","eg","6m","ef"];F(b.5j(l,g)!=-1){H i=I;F(d==="4V"){i="9f"}L{F(d==="4T"){i="32"}L{F(d==="4R"){i="4F"}}}F(i===I){b(k).12("18-6F","")}L{b(k).12("18-6F",i)}}L{E.3h(d,c)}}L{F(d==="2n"&&c==="2e"){k=E.3o();F(b(k).1g(0).1z==="6m"){F(E.1n("2b")){H f=b("<p>"+b(k).11()+"</p>");b(k).2F(f)}L{E.3h(d,"p")}}L{F(b(k).1g(0).1z==="P"){H j=b(k).1W();F(b(j).1g(0).1z==="6m"){H f=b("<p>"+b(k).11()+"</p>");b(j).2F(f);E.4g(f[0],0,f[0],0)}L{F(E.1n("2b")){H f=b("<2e>"+b(k).11()+"</2e>");b(k).2F(f)}L{E.3h(d,c)}}}L{E.3h(d,c)}}}L{F(d==="2n"&&(c==="1u"||c==="p")){k=E.2L();F(b(k).1g(0).1z==="5f"){b(k).2F("<p>"+E.6e(b(k).18())+"</p>")}L{E.3h(d,c)}}L{F(d==="6o"&&E.1n("2b")){E.$T.1k()}F(d==="2n"&&E.1n("33")){E.$T.1k()}E.3h(d,c)}}}}}F(d==="6o"){E.$T.1w("9b").az("R")}E.1s();F(E.2P()){E.$T.1k()}F(Z E.J.6l==="G"){E.J.6l(E,d)}F(E.J.1J){E.1J.1P()}}6n(h){}},3h:G(c,d){F(c==="2n"&&E.1n("2b")){d="<"+d+">"}E.V.1O(c,I,d)},9h:G(f){H d=E.2L();F(d.au==="6k"&&d.2w==="4c"){H c=b(E.3o());F(c.1g(0).1z==="6k"&&(c.11()===""||c.11()==="<br>")){H g=b("<p>").19(c.3M().1g(0).7A);c.2F(g);g.11("<br />");E.4g(g[0],0,g[0],0)}}},8z:G(d,c){F(d.4z&&c===13){d.31();E.3W(b("<1U><br /></1U>").1g(0));E.1s();K I}L{K X}},9n:G(g){H c=b.4N(E.$T.11());F(E.1n("33")){c=c.O(/<br>/i,"")}H f=c.O(/<(?:.|\\n)*?>/gm,"");F(c===""||f===""){g.31();H d=b(E.J.5q).1g(0);E.$T.11(d);E.4g(d,0,d,0);E.1s();K I}L{E.1s()}},9o:G(e){e=b.4N(e);F(e===""||e==="<p></p>"){K E.J.5q}F(E.J.6g){e=e.O(/<M(.*?)>([\\w\\W]*?)<\\/M>/gi,"<p>$2</p>")}H f=G(h,i,g){K h.O(2r 3D(i,"g"),g)};H c=G(h,g){K f(e,h,g)};H d="(1m|23|9m|6r|ew|3d|1S|1j|4t|M|dl|dd|dt|2U|3b|1t|1u|2Z|1i|2e|9l|ex|1G|eu|1T|1f|41|p|h[1-6])";e+="\\n";c("<br />\\\\s*<br />","\\n\\n");c("(<"+d+"[^>]*>)","\\n$1");c("(</"+d+">)","$1\\n\\n");c("\\r\\n|\\r","\\n");c("\\n\\n+","\\n\\n");c("\\n?((.|\\n)+?)$","<p>$1</p>\\n");c("<p>\\\\s*?</p>","");c("<p>(<M[^>]*>\\\\s*)","$1<p>");c("<p>([^<]+)\\\\s*?(</(M|9l|1i)[^>]*>)","<p>$1</p>$2");c("<p>\\\\s*(</?"+d+"[^>]*>)\\\\s*</p>","$1");c("<p>(<1t.+?)</p>","$1");c("<p>\\\\s*(</?"+d+"[^>]*>)","$1");c("(</?"+d+"[^>]*>)\\\\s*</p>","$1");c("(</?"+d+"[^>]*>)\\\\s*<br />","$1");c("<br />(\\\\s*</?(p|1t|M|dl|dd|dt|4t|1u|1j|2U|3b)[^>]*>)","$1");F(e.3e("<1u")!=-1){c("(<1u(.|\\n)*?>)((.|\\n)*?)</1u>",G(j,i,h,g){K f(i,"\\\\\\\\([\'\\"\\\\\\\\])","$1")+f(f(f(g,"<p>","\\n"),"</p>|<br />",""),"\\\\\\\\([\'\\"\\\\\\\\])","$1")+"</1u>"})}K c("\\n</p>$","</p>")},4l:G(d){H e=E.J.9j;H c=/<\\/?([a-z][a-et-9]*)\\b[^>]*>/gi;K d.O(c,G(g,f){K b.5j(f.7T(),e)>"-1"?g:""})},6f:G(c){H d=c.5c(/<1u(.*?)>([\\w\\W]*?)<\\/1u>/gi);F(d!==17){b.1q(d,b.Q(G(f,g){H e=g.5c(/<1u(.*?)>([\\w\\W]*?)<\\/1u>/i);e[2]=E.6e(e[2]);c=c.O(g,"<1u"+e[1]+">"+e[2]+"</1u>")},E))}K c},6e:G(c){c=2C(c).O(/&7z;/g,"&").O(/&4M;/g,"<").O(/&gt;/g,">").O(/&9F;/g,\'"\');K 2C(c).O(/&/g,"&7z;").O(/</g,"&4M;").O(/>/g,"&gt;").O(/"/g,"&9F;")},7R:G(d){d=d.O(/<br>/gi,"\\n");d=d.O(/<\\/p>/gi,"\\n");d=d.O(/<\\/M>/gi,"\\n");H c=E.V.3v("M");c.3L=d;K c.er||c.es},8m:G(c){H d=E.2L();F(b(d).1g(0).1z==="5f"){c=E.7R(c);E.6i(c);K X}c=c.O(/<!--[\\s\\S]*?-->|<\\?(?:ea)?[\\s\\S]*?\\?>/gi,"");c=c.O(/(&1Q;){2,}/gi,"&1Q;");c=c.O(/<b\\e9="dV-5v-dX(.*?)">([\\w\\W]*?)<\\/b>/gi,"$2");c=E.4l(c);c=c.O(/<1j><\\/1j>/gi,"[1j]");c=c.O(/<1j>&1Q;<\\/1j>/gi,"[1j]");c=c.O(/<1j><br><\\/1j>/gi,"[1j]");c=c.O(/<a(.*?)1b="(.*?)"(.*?)>([\\w\\W]*?)<\\/a>/gi,\'[a 1b="$2"]$4[/a]\');c=c.O(/<1y(.*?)>([\\w\\W]*?)<\\/1y>/gi,"[1y$1]$2[/1y]");c=c.O(/<22(.*?)>([\\w\\W]*?)<\\/22>/gi,"[22$1]$2[/22]");c=c.O(/<2X(.*?)>([\\w\\W]*?)<\\/2X>/gi,"[2X$1]$2[/2X]");c=c.O(/<2k(.*?)>([\\w\\W]*?)<\\/2k>/gi,"[2k$1]$2[/2k]");c=c.O(/<1T(.*?)>([\\w\\W]*?)<\\/1T>/gi,"[1T$1]$2[/1T]");c=c.O(/<41(.*?)>/gi,"[41$1]");c=c.O(/<2y(.*?)1G="(.*?)"(.*?)>/gi,"[2y$1$3]");c=c.O(/<(\\w+)([\\w\\W]*?)>/gi,"<$1>");c=c.O(/<[^\\/>][^>]*>(\\s*|\\t*|\\n*|&1Q;|<br>)<\\/[^>]+>/gi,"");c=c.O(/<[^\\/>][^>]*>(\\s*|\\t*|\\n*|&1Q;|<br>)<\\/[^>]+>/gi,"");c=c.O(/\\[1j\\]/gi,"<1j>&1Q;</1j>");c=c.O(/\\[a 1b="(.*?)"\\]([\\w\\W]*?)\\[\\/a\\]/gi,\'<a 1b="$1">$2</a>\');c=c.O(/\\[1y(.*?)\\]([\\w\\W]*?)\\[\\/1y\\]/gi,"<1y$1>$2</1y>");c=c.O(/\\[22(.*?)\\]([\\w\\W]*?)\\[\\/22\\]/gi,"<22$1>$2</22>");c=c.O(/\\[2X(.*?)\\]([\\w\\W]*?)\\[\\/2X\\]/gi,"<2X$1>$2</2X>");c=c.O(/\\[2k(.*?)\\]([\\w\\W]*?)\\[\\/2k\\]/gi,"<2k$1>$2</2k>");c=c.O(/\\[1T(.*?)\\]([\\w\\W]*?)\\[\\/1T\\]/gi,"<1T$1>$2</1T>");c=c.O(/\\[41(.*?)\\]/gi,"<41$1>");c=c.O(/\\[2y(.*?)\\]/gi,"<2y$1>");F(E.J.6g){c=c.O(/<M(.*?)>([\\w\\W]*?)<\\/M>/gi,"<p>$2</p>")}c=c.O(/<1U>([\\w\\W]*?)<\\/1U>/gi,"$1");c=c.O(/\\n{3,}/gi,"\\n");c=c.O(/<p><p>/gi,"<p>");c=c.O(/<\\/p><\\/p>/gi,"</p>");F(E.1n("33")){c=c.O(/<br>$/gi,"")}E.6i(c)},6i:G(c){E.1O("3r",c);F(E.J.4A===X){b(E.V.1X).3O(E.5u)}L{E.$T.3O(E.5u)}},85:G(d){H c=[];H e=d.5c(/<1u(.*?)>([\\w\\W]*?)<\\/1u>/gi);F(e!==17){b.1q(e,G(f,g){d=d.O(g,"80"+f);c.6v(g)})}d=d.O(/\\s{2,}/g," ");d=d.O(/\\n/g," ");d=d.O(/[\\t]*/g,"");d=d.O(/\\n\\s*\\n/g,"\\n");d=d.O(/^[\\s\\n]*/g,"");d=d.O(/[\\s\\n]*$/g,"");d=d.O(/>\\s+</g,"><");F(c){b.1q(c,G(f,g){d=d.O("80"+f,g)});c=[]}K d},7N:G(c){c=c.O(/<1t/g,"\\t<1t");c=c.O(/<1S/g,"\\t<1S");c=c.O(/<1j/g,"\\t\\t<1j");c=c.O(/<\\/1S>/g,"\\t</1S>");K c},83:G(f){H e=["<1u></1u>","<2e>\\\\s*</2e>","<em>\\\\s*</em>","<2U></2U>","<3b></3b>","<1t></1t>","<1m></1m>","<1S></1S>","<1U>\\\\s*<1U>","<1U>&1Q;<1U>","<b>\\\\s*</b>","<b>&1Q;</b>","<p>\\\\s*</p>","<p>&1Q;</p>","<p>\\\\s*<br>\\\\s*</p>","<M>\\\\s*</M>","<M>\\\\s*<br>\\\\s*</M>"];3f(H d=0;d<e.3g;++d){H c=e[d];f=f.O(2r 3D(c,"gi"),"")}K f},7V:G(e){H f="\\r\\n";H g=["<p","<1i","</2U>","</3b>","<6C","<6A","<1T","<2k","<2Z","<2v","<1f","<2B","<1u","<2e","<2U","<3b","<1t","<dl","<dt","<dd","<1m","<23","<3d","<6r","</6r>","<4t","<1S","<1j","<6D"];3f(H d=0;d<g.3g;++d){H c=g[d];e=e.O(2r 3D(c,"gi"),f+c)}K e},7Q:G(e){H g="\\r\\n";H c=["</p>","</M>","</4D>","</4C>","</4x>","</4w>","</6s>","</6B>","<br>","<br />","</dl>","</dt>","</dd>","</1i>","</2e>","</1u>","</6A>","</6C>","</1T>","</2k>","</2B>","</2Z>","</2v>","</1m>","</23>","</3d>","</1S>","</1j>","</4t>","</6D>"];3f(H d=0;d<c.3g;++d){H f=c[d];e=e.O(2r 3D(f,"gi"),f+g)}K e},37:G(c){c=E.85(c);c=E.83(c);c=E.7V(c);c=E.7Q(c);c=E.7N(c);K c},86:G(){H d;F(E.J.3N){H c=E.$T.f4();E.$T.1P();E.$1M.1P();d=E.$T.11();E.$el.1B(c).15(d).1p().1k();E.2T("11");E.J.3N=I}L{E.$el.1P();H d=E.$el.15();E.$T.11(d).1p();E.$1M.1p();F(E.$T.11()===""){E.5d(E.J.5q)}E.$T.1k();E.6E("11");E.J.3N=X;E.2E();E.5e()}},8r:G(){E.88=f0(b.Q(G(){b.7U({2s:E.J.5h,1r:"5r",1v:E.$el.16("1E")+"="+eX(eY(E.4H())),2c:b.Q(G(c){F(Z E.J.6z==="G"){E.J.6z(c,E)}},E)})},E),E.J.8p*f5)},8n:G(){F(E.J.1a===I){K I}E.$1a=b("<2U>").2a("f6");F(E.J.1J){b(E.1J).19(E.$1a);b("1X").19(E.1J)}L{F(E.J.4o===I){E.$24.5B(E.$1a)}L{b(E.J.4o).11(E.$1a)}}b.1q(E.J.3a,b.Q(G(d,c){F(c!=="|"&&Z E.J.1a[c]!=="1h"){H e=E.J.1a[c];F(E.J.5b===I&&c==="2d"){K X}E.$1a.19(b("<1t>").19(E.3V(c,e)))}F(c==="|"){E.$1a.19(b(\'<1t Y="5z"></1t>\'))}},E))},3V:G(d,e){H c=b(\'<a 1b="1N:1L(17);" U="\'+e.U+\'" Y="5y\'+d+\'"></a>\');F(Z e.1l==="1h"){c.1d(b.Q(G(){F(b.5j(d,E.J.5g)!=-1){E.6u();E.2T(d)}F(E.1n("33")){E.$T.1k()}E.1O(e.1c,d)},E))}L{F(e.1l!=="1p"){c.1d(b.Q(G(g){E[e.1l](g)},E))}}F(Z e.2f!=="1h"&&e.2f!==I){c.1d(b.Q(G(g){e.2f(E,g,d)},E))}F(d==="2M"||d==="3j"||Z(e.2g)!=="1h"){H f=b(\'<M Y="8t" 1G="2Q: 21;">\');F(d==="2M"||d==="3j"){f=E.89(f,d)}L{f=E.8l(f,e.2g)}E.4G.6v(f.5w(b(V.1X)));E.8u=b.Q(G(g){E.8v(g,f,d)},E);c.1d(E.8u)}K c},8l:G(d,c){b.1q(c,b.Q(G(e,g){F(Z(g.2w)==="1h"){g.2w=""}H f;F(Z g.1E!=="1h"&&g.1E==="5n"){f=b(\'<a Y="f7">\')}L{f=b(\'<a 1b="1N:1L(17);" Y="\'+g.2w+\'">\'+g.U+"</a>");F(Z(g.2f)==="G"){b(f).1d(b.Q(G(h){g.2f(E,h,e)},E))}L{F(Z(g.1l)==="1h"){b(f).1d(b.Q(G(){E.1O(g.1c,e)},E))}L{b(f).1d(b.Q(G(h){E[g.1l](h)},E))}}}b(d).19(f)},E));K d},89:G(l,k){H f;F(k==="2M"){F(E.1n("2b")){f="8i"}L{f="f8"}}L{f="9G"}b(l).25(f9);H g=E.J.6w.3g;3f(H e=0;e<g;++e){H c=E.J.6w[e];H j=b(\'<a 4m="\'+c+\'" 1b="1N:1L(17);" Y="eV"></a>\').12({eU:c});b(l).19(j);H h=E;b(j).1d(G(){h.1O(f,b(E).16("4m"));F(f==="9G"){h.$T.1w("8g").2F(G(){K b(\'<1U 1G="4L: \'+b(E).16("4L")+\';">\'+b(E).11()+"</1U>")})}F(h.1n("2b")&&f==="8i"){h.$T.1w("8g").2F(G(){K b(\'<1U 1G="\'+b(E).16("1G")+\'">\'+b(E).11()+"</1U>")})}})}H d=b(\'<a 1b="1N:1L(17);" Y="eI"></a>\').11(N.21);F(k==="2M"){d.1d(b.Q(E.8k,E))}L{d.1d(b.Q(E.8a,E))}b(l).19(d);K l},8k:G(){b(E.2L()).12("eE-4L","eA");E.1s()},8a:G(){b(E.2L()).16("4L","").12("4L","");E.1s()},8v:G(i,j,d){F(E.1F(d).7S("3K")){E.5o()}L{E.5o();E.2T(d);E.1F(d).2a("3K");H h=E.1F(d).2l().1x;F(E.J.1J){H f=E.1J.2l().1A;b(j).12({2J:"7L",1x:h+"1Z",1A:f+30+"1Z"}).1p()}L{F(E.J.2H&&E.2H){b(j).12({2J:"2H",1x:h+"1Z",1A:"eC"}).1p()}L{H g=E.$1a.2l().1A+30;b(j).12({2J:"7L",1x:h+"1Z",1A:g+"1Z"}).1p()}}}H c=b.Q(G(k){E.8s(k,j,d)},E);b(V).6x("1d",c);E.$T.6x("1d",c);E.$1M.6x("1d",c);i.eK()},5o:G(){E.$1a.1w("a.3K").26("6t").26("3K");b(".8t").1P()},8s:G(d,f,c){F(!b(d.1H).7S("3K")){b(f).26("3K");E.eR=I;E.5o()}},1F:G(c){F(E.J.1a===I){K I}K b(E.$1a.1w("a.5y"+c))},2T:G(c){E.1F(c).2a("6t")},6E:G(c){E.1F(c).26("6t")},6u:G(){b.1q(E.J.5g,b.Q(G(c,d){E.6E(d)},E))},eP:G(c,d){E.1F(c).2a("5y"+d)},eL:G(c,d){E.1F(c).26("5y"+d)},eM:G(){E.$1a.19(b(\'<1t Y="5z"></1t>\'))},eN:G(c){H d=E.1F(c);d.1W().2h(b(\'<1t Y="5z"></1t>\'))},eO:G(c){H d=E.1F(c);d.1W().2A(b(\'<1t Y="5z"></1t>\'))},ff:G(c){H d=E.1F(c);d.1W().aB().1C()},eD:G(c){H d=E.1F(c);d.1W().eF().1C()},e3:G(c){F(E.J.1a===I){K I}E.1F(c).1W().2a("6j")},e2:G(c){F(E.J.1a===I){K I}E.1F(c).1W().26("6j")},e1:G(d,e,g,f){F(E.J.1a===I){K I}H c=E.3V(d,{U:e,2f:g,2g:f});E.$1a.19(b("<1t>").19(c))},e7:G(d,e,g,f){F(E.J.1a===I){K I}H c=E.3V(d,{U:e,2f:g,2g:f});E.$1a.5B(b("<1t>").19(c))},dZ:G(i,d,f,h,g){F(E.J.1a===I){K I}H c=E.3V(d,{U:f,2f:h,2g:g});H e=E.1F(i);e.1W().2h(b("<1t>").19(c))},dY:G(g,d,f,i,h){F(E.J.1a===I){K I}H c=E.3V(d,{U:f,2f:i,2g:h});H e=E.1F(g);e.1W().2A(b("<1t>").19(c))},eo:G(c,e){H d=E.1F(c);F(e===X){d.1W().aB().1C()}d.1W().26("6j");d.1C()},aq:G(d){H c=d.gh(X);H e=E.V.3v("M");e.4Y(c);K e.3L},6h:G(){H c=E.$T.1g(0);H e=E.V.aY(),d;3B((d=c.aW)){e.4Y(d)}K e},2I:G(){E.$T.1k();E.3l=E.b2();E.4X=E.aU()},2S:G(){F(Z E.3l!=="1h"&&E.3l!==17&&E.4X!==17&&E.3l[0].1z!=="fW"){F(E.J.1y===I&&b(E.3l[0]).3I(".4c").2m()==0){E.$T.1k()}L{F(E.1n("8x")){E.$T.1k()}E.4g(E.3l[0],E.3l[1],E.4X[0],E.4X[1]);F(E.1n("33")){E.$T.1k()}}}L{E.$T.1k()}},1o:G(){H c=E.V;F(E.1V.1o){K E.1V.1o()}L{F(c.1o){K c.1o()}L{K c.1R.2Y()}}K I},6p:G(){F(!E.2P()){H e;K(e=E.1o())&&(e.6q!=17)&&(e.2N!=17)}L{H d=E.$T.1g(0);H c;d.1k();F(!d.V.1R){K I}c=d.V.1R.2Y();K c&&c.4Z().V===d.V}},b2:G(){F(!E.2P()){H e;F(!((e=E.1o())&&(e.2N!=17))){K 17}K[e.2N,e.g6]}L{H d=E.$T.1g(0);H c;d.1k();F(!E.6p()){K 17}c=d.V.1R.2Y();K E.6G(d.V,c,X)}},aU:G(){F(!E.2P()){H e;F(!((e=E.1o())&&(e.6q!=17))){K 17}K[e.6q,e.g9]}L{H d=E.$T.1g(0);H c;d.1k();F(!E.6p()){K 17}c=d.V.1R.2Y();K E.6G(d.V,c,I)}},4g:G(k,j,i,g){F(i==17){i=k}F(g==17){g=j}F(!E.2P()){H f=E.1o();F(!f){K}F(f.3s&&f.3q){f.3s(k,j);f.3q(i,g)}L{r=E.V.2Y();r.g4(k,j);r.g3(i,g);7e{f.7c()}6n(h){}f.6d(r)}}L{H d=E.$T.1g(0);H c=d.V.1X.ah();E.6Y(d.V,c,I,i,g);E.6Y(d.V,c,X,k,j);K c.2Z()}},3o:G(){F(Z E.1V.1o!=="1h"){K E.9W().2o}L{F(Z E.V.1R!=="1h"){K E.1o().4Z()}}},2L:G(){K b(E.3o()).1W()[0]},9W:G(){F(E.2P()){K E.1o().4Z()}L{F(Z E.1V.1o!=="1h"){H c=E.1V.1o();F(c.4k>0){K E.1o().4h(0).g1}L{K I}}L{F(Z E.V.1R!=="1h"){K E.1o()}}}},6G:G(h,f,g){H j,c,e,i,d;c=h.3v("a");j=f.gr();j.3s(g);d=j.4Z();3B(X){d.9P(c,c.6W);j.6K(c);F(!(j.9K((g?"6X":"9J"),f)>0&&(c.6W!=17))){4e}}F(j.9K((g?"6X":"9J"),f)===-1&&c.9L){j.ag((g?"gq":"ai"),f);e=c.9L;i=j.18.3g}L{e=c.2o;i=E.a3(c)}c.2o.6J(c);K[e,i]},6Y:G(h,l,k,e,f){H i,g,j,c,d;d=0;i=E.53(e)?e:e.7A[f];g=E.53(e)?e.2o:e;F(E.53(e)){d=f}c=h.3v("a");g.9P(c,i||17);j=h.1X.ah();j.6K(c);c.2o.6J(c);l.ag((k?"6X":"ai"),j);K l[k?"gx":"gg"]("g2",d)},53:G(c){K(c!=17?c.57==3:I)},a3:G(d){H c=0;3B(d=d.6W){c++}K c},fU:G(c){E.2I();E.3W(c);E.2S()},3W:G(g){F(E.1V.1o){H h=E.1o();F(h.4k){H d=h.4h(0);d.3s(I);d.a9(g);d=d.b3();d.fs(g);d.3s(I);h.7c();h.6d(d)}}L{F(E.V.1R){H e=(g.57===1)?g.5k:g.1v;H i="fw"+(""+2j.7I()).fz(2);e+=\'<1U R="\'+i+\'"></1U>\';H f=E.1o();f.3s(I);f.6U(e);H c=E.V.fr(i);f.6K(c);f.2Z();c.2o.6J(c)}}},8w:G(){H f="";F(E.1V.1o){H g=E.1V.1o();F(g.4k){H d=E.V.3v("M");3f(H e=0,c=g.4k;e<c;++e){d.4Y(g.4h(e).fi())}f=d.3L}}L{F(E.V.1R){F(E.V.1R.1r==="b0"){f=E.V.1R.2Y().fh}}}K f},av:G(g){H h=I;H d=I;H f;H c;H i=b(g).25()/b(g).1B();H e=10;H j=10;b(g).fk("4s aE 7j 1d aD");b(g).4s(G(){b(g).12("51","fp-fo")},G(){b(g).12("51","");h=I});b(g).aE(G(k){k.31();i=b(g).25()/b(g).1B();h=X;d=X;f=2j.3H(k.6N-b(g).eq(0).2l().1x);c=2j.3H(k.7d-b(g).eq(0).2l().1A)});b(g).7j(b.Q(G(k){h=I;b(g).12("51","");E.1s()},E));b(g).1d(b.Q(G(k){F(d){E.9O(k)}},E));b(g).aD(G(o){F(h){d=I;H l=2j.3H(o.6N-b(E).eq(0).2l().1x)-f;H k=2j.3H(o.7d-b(E).eq(0).2l().1A)-c;H n=b(g).1B();H p=4K(n,10)+k;H m=p*i;F(m>e){b(g).25(m)}F(p>j){b(g).1B(p)}f=2j.3H(o.6N-b(E).eq(0).2l().1x);c=2j.3H(o.7d-b(E).eq(0).2l().1A)}})},ax:G(){E.2I();E.3w(N.1m,E.J.aK,fB,b.Q(G(){b("#b1").1d(b.Q(E.aV,E));3i(G(){b("#5I").1k()},52)},E))},aV:G(){H m=b("#5I").15();H f=b("#aL").15();H c=b("<M></M>");H d=2j.aP(2j.7I()*b4);H k=b(\'<1m R="1m\'+d+\'"><3d></3d></1m>\');3f(H g=0;g<m;g++){H l=b("<1S></1S>");3f(H j=0;j<f;j++){H e=b("<1j><br></1j>");b(l).19(e)}b(k).19(l)}b(c).19(k);H h=b(c).11()+"<p></p>";E.2S();E.1O("3r",h);E.1D();E.5e()},a5:G(c){E.$1m=b(c.1H).3I("1m");E.$a7=E.$1m.1w("1S");E.$fN=E.$1m.1w("1j");E.$3d=b(c.1H).3I("3d");E.$23=b(E.$1m).1w("23");E.$64=b(c.1H);E.$3P=b(c.1H).3I("1S")},a0:G(){b(E.$1m).1C();E.$1m=I;E.1s()},aX:G(){b(E.$3P).1C();E.1s()},at:G(){H c=b(E.$64).1g(0).fM;b(E.$1m).1w("1S").1q(G(){b(E).1w("1j").eq(c).1C()});E.1s()},9Z:G(){F(b(E.$1m).1w("23").2m()!==0){E.5F()}L{H c=b(E.$1m).1w("1S").fP().3M();c.1w("1j").11("&1Q;");E.$23=b("<23></23>");E.$23.19(c);b(E.$1m).5B(E.$23);E.1s()}},5F:G(){b(E.$23).1C();E.$23=I;E.1s()},9X:G(){E.5M("2A")},9I:G(){E.5M("2h")},aj:G(){E.6c("2A")},ab:G(){E.6c("2h")},5M:G(c){H d=b(E.$3P).3M();d.1w("1j").11("&1Q;");F(c==="2h"){b(E.$3P).2h(d)}L{b(E.$3P).2A(d)}E.1s()},6c:G(d){H c=0;E.$3P.1w("1j").1q(b.Q(G(e,f){F(b(f)[0]===E.$64[0]){c=e}},E));E.$a7.1q(G(e,f){H g=b(f).1w("1j").eq(c);H h=g.3M();h.11("&1Q;");F(d==="2h"){b(g).2h(h)}L{b(g).2A(h)}});E.1s()},ad:G(){E.2I();E.3w(N.22,E.J.al,fQ,b.Q(G(){b("#af").1d(b.Q(E.a1,E));3i(G(){b("#68").1k()},52)},E))},a1:G(){H c=b("#68").15();c=E.4l(c);E.2S();E.1O("3r",c);E.1D()},9O:G(f){H c=b(f.1H);H d=c.1W();H g=b.Q(G(){b("#6a").15(c.16("7F"));b("#fS").16("1b",c.16("4j"));b("#69").15(c.12("58"));F(b(d).1g(0).1z==="A"){b("#39").15(b(d).16("1b"))}b("#9H").1d(b.Q(G(){E.9V(c)},E));b("#9R").1d(b.Q(G(){E.an(c)},E))},E);E.3w(N.3k,E.J.9Y,fR,g)},9V:G(c){b(c).1C();E.1D();E.1s()},an:G(d){H c=b(d).1W();b(d).16("7F",b("#6a").15());H f=b("#69").15();F(f==="1x"){b(d).12({"58":"1x",43:"0 59 59 0"})}L{F(f==="32"){b(d).12({"58":"32",43:"0 0 59 59"})}L{b(d).12({"58":"21",43:"0"})}}H e=b.4N(b("#39").15());F(e!==""){F(b(c).1g(0).1z!=="A"){b(d).2F(\'<a 1b="\'+e+\'">\'+E.5k(d)+"</a>")}L{b(c).16("1b",e)}}L{F(b(c).1g(0).1z==="A"){b(c).2F(E.5k(d))}}E.1D();E.2E();E.1s()},aw:G(){E.2I();H c=b.Q(G(){F(E.J.4n!==I){b.fG(E.J.4n,b.Q(G(h){H f={};H j=0;b.1q(h,b.Q(G(k,l){F(Z l.55!=="1h"){j++;f[l.55]=j}},E));H g=I;b.1q(h,b.Q(G(n,o){H m="";F(Z o.U!=="1h"){m=o.U}H k=0;F(!b.ap(f)&&Z o.55!=="1h"){k=f[o.55];F(g===I){g=".3R"+k}}H l=b(\'<2y 4j="\'+o.fJ+\'" Y="3R 3R\'+k+\'" 4m="\'+o.3k+\'" U="\'+m+\'" />\');b("#5V").19(l);b(l).1d(b.Q(E.aF,E))},E));F(!b.ap(f)){b(".3R").1P();b(g).1p();H i=G(k){b(".3R").1P();b(".3R"+b(k.1H).15()).1p()};H e=b(\'<2Z R="fI">\');b.1q(f,G(m,l){e.19(b(\'<2v 28="\'+l+\'">\'+m+"</2v>"))});b("#5V").2A(e);e.9S(i)}},E))}L{b("#2V a").eq(1).1C()}F(E.J.49!==I){F(E.J.7q===I&&E.2R()===I){F(b("#3x").2m()!==0){b("#3x").7h({2s:E.J.49,2i:E.J.2i,2c:b.Q(E.42,E),2D:b.Q(E.J.5Y,E)})}}E.7m("3x",{3u:X,2s:E.J.49,2c:b.Q(E.42,E),2D:b.Q(E.J.5Y,E)})}L{b(".2t").1P();F(E.J.4n===I){b("#2V").1C();b("#5X").1p()}L{H d=b("#2V a");d.eq(0).1C();d.eq(1).2a("3m");b("#6y").1p()}}b("#9p").1d(b.Q(E.as,E));F(E.J.49===I&&E.J.4n===I){3i(G(){b("#39").1k()},52)}},E);E.3w(N.3k,E.J.aC,fH,c)},aF:G(c){E.5s(\'<2y 4j="\'+b(c.1H).16("4m")+\'" 7F="\'+b(c.1H).16("U")+\'" />\',X)},as:G(){F(b("#39").15()!==""){H c=\'<2y 4j="\'+b("#39").15()+\'" />\';E.5s(c,X)}L{E.1D()}},42:G(c){E.5s(c)},5s:G(d,e){E.2S();F(d!==I){H c="";F(e!==X){c=\'<p><2y 4j="\'+d.ay+\'" /></p>\'}L{c=d}E.1O("3r",c);F(e!==X&&Z E.J.42==="G"){E.J.42(E,d)}}E.1D();E.2E()},ar:G(){E.2I();H c=b.Q(G(){E.2u=I;H h=E.1o();H d="",j="",i="";F(E.1n("2b")){H f=E.2L();F(f.au==="A"){E.2u=b(f);j=E.2u.18();d=E.2u.16("1b");i=E.2u.16("1H")}L{F(E.2P()){j=h.18}L{j=h.38()}}}L{F(h&&h.2N&&h.2N.2o.1z==="A"){d=h.2N.2o.1b;j=h.2N.2o.18;i=h.2N.2o.1H;F(h.38()===""){E.2u=h.2N.2o}}L{j=h.38()}}b(".4P").15(j);H e=fD.fK.1b.O(/\\/$/i,"");H g=d.O(e,"");F(d.3Y("4u:")===0){E.7n(2);b("#4b").15(2);b("#7C").15(d.O("4u:",""))}L{F(g.3Y(/^#/gi)===0){E.7n(3);b("#4b").15(3);b("#7k").15(g.O(/^#/gi,""))}L{b("#54").15(g)}}F(i==="ac"){b("#7l").16("ak",X)}b("#aO").1d(b.Q(E.aS,E));3i(G(){b("#54").1k()},52)},E);E.3w(N.2p,E.J.aM,fL,c)},aS:G(){H g=b("#4b").15();H e="",i="",h="";F(g==="1"){e=b("#54").15();i=b("#9N").15();F(b("#7l").16("ak")){h=\' 1H="ac"\'}H f="/(w+:{0,1}w*@)?(S+)(:[0-9]+)?(/|/([w#!:.?+=&%@!-/]))?/";H d=2r 3D("^(7v|9g|9e)://"+f,"i");H c=2r 3D("^"+f,"i");F(e.3Y(d)==-1&&e.3Y(c)==0&&E.J.7o!==I){e=E.J.7o+e}}L{F(g==="2"){e="4u:"+b("#7C").15();i=b("#a8").15()}L{F(g==="3"){e="#"+b("#7k").15();i=b("#aR").15()}}}E.aZ(\'<a 1b="\'+e+\'"\'+h+">"+i+"</a>",b.4N(i),e,h)},aZ:G(c,f,d,e){E.$T.1k();E.2S();F(f!==""){F(E.2u){b(E.2u).18(f);b(E.2u).16("1b",d);F(e!==""){b(E.2u).16("1H",e)}L{b(E.2u).az("1H")}E.1s()}L{E.1O("3r",c)}}E.1D()},aH:G(){E.2I();H c=b.Q(G(){H d=E.1o();H e="";F(E.2P()){e=d.18}L{e=d.38()}b("#7w").15(e);F(E.J.7q===I&&E.2R()===I){b("#3x").7h({2s:E.J.5b,2i:E.J.2i,2c:b.Q(E.47,E),2D:b.Q(E.J.7x,E)})}E.7m("3x",{3u:X,2s:E.J.5b,2c:b.Q(E.47,E),2D:b.Q(E.J.7x,E)})},E);E.3w(N.2d,E.J.a6,fO,c)},47:G(c){E.2S();F(c!==I){H e=b("#7w").15();F(e===""){e=c.fA}H d=\'<a 1b="\'+c.ay+\'">\'+e+"</a>";F(E.1n("3F")&&!!E.1V.7K){d=d+"&1Q;"}E.1O("3r",d);F(Z E.J.47==="G"){E.J.47(E,c)}}E.1D()},3w:G(f,e,c,g){F(b("#3J").2m()===0){E.4a=b(\'<M R="3J" 1G="2Q: 21;"></M>\');b("1X").5B(E.4a)}F(E.J.4a){b("#3J").1p();b("#3J").1d(b.Q(E.1D,E))}F(b("#2x").2m()===0){E.aI=b(\'<M R="2x" 1G="2Q: 21;"><M R="7p">&fm;</M><M R="4Q"></M><M R="4U"></M></M>\');b("1X").19(E.aI)}b("#7p").1d(b.Q(E.1D,E));E.4i=b.Q(G(h){F(h.5p===27){E.1D();K I}},E);b(V).2O(E.4i);E.$T.2O(E.4i);F(e.3e("#")==0){b("#4U").7u().19(b(e).11())}L{b("#4U").7u().19(e)}b("#4Q").11(f);F(Z b.fn.aN!=="1h"){b("#2x").aN({9x:"#4Q"});b("#4Q").12("51","fj")}F(b("#2V").2m()!==0){H d=E;b("#2V a").1q(G(h,j){h++;b(j).1d(G(){b("#2V a").26("3m");b(E).2a("3m");b(".2t").1P();b("#2t"+h).1p();b("#4b").15(h);F(d.2R()===I){H i=b("#2x").b5();b("#2x").12("43-1A","-"+(i+10)/2+"1Z")}})})}b("#2x .3T").1d(b.Q(E.1D,E));F(E.2R()===I){b("#2x").12({2J:"2H",1A:"-7E",1x:"50%",25:c+"1Z",fq:"-"+(c+60)/2+"1Z"}).1p();E.7g=b(V.1X).12("7i");b(V.1X).12("7i","7t")}L{b("#2x").12({2J:"2H",25:"4B%",1B:"4B%",1A:"0",1x:"0",43:"0",4f:"fy"}).1p()}F(Z g==="G"){g()}F(E.2R()===I){3i(G(){H h=b("#2x").b5();b("#2x").12({1A:"50%",1B:"3u",4f:"3u",fv:"-"+(h+10)/2+"1Z"})},20)}},1D:G(){b("#7p").4E("1d",E.1D);b("#2x").fu("fT",b.Q(G(){b("#4U").11("");F(E.J.4a){b("#3J").1P();b("#3J").4E("1d",E.1D)}b(V).4E("2O",E.4i);E.$T.4E("2O",E.4i)},E));F(E.2R()===I){b(V.1X).12("7i",E.7g?E.7g:"gu")}K I},7n:G(c){b(".2t").1P();H d=b("#2V a");d.26("3m");d.eq(c-1).2a("3m");b("#2t"+c).1p()},7m:G(d,c){E.1K={2s:I,2c:I,2D:I,7H:I,7B:I,3u:I,1f:I};b.3q(E.1K,c);F(b("#"+d).2m()!==0&&b("#"+d).1g(0).1z==="gc"){E.1K.1f=b("#"+d);E.34=b(b("#"+d).1g(0).1i)}L{E.34=b("#"+d)}E.7P=E.34.16("3n");F(E.1K.3u){b(E.1K.1f).9S(b.Q(G(){E.34.7D(G(f){K I});E.7J()},E))}L{F(E.1K.7B){b("#"+E.1K.7B).1d(b.Q(E.7J,E))}}},7J:G(){E.aA(E.34,E.aT())},aT:G(){E.R="f"+2j.aP(2j.7I()*b4);H e=E.V.3v("M");H c=\'<1y 1G="2Q:21" R="\'+E.R+\'" 1E="\'+E.R+\'"></1y>\';e.3L=c;b(e).5w("1X");F(E.1K.7H){E.1K.7H()}b("#"+E.R).aJ(b.Q(E.84,E));K E.R},aA:G(g,e){F(E.1K.1f){H h="ec"+E.R;H c="ev"+E.R;E.1i=b(\'<1i  3n="\'+E.1K.2s+\'" 4d="7r" 1H="\'+e+\'" 1E="\'+h+\'" R="\'+h+\'" 5A="5C/1i-1v"></1i>\');F(E.J.2i!==I&&Z E.J.2i==="1T"){b.1q(E.J.2i,b.Q(G(j,f){F(f.38().3e("#")===0){f=b(f).15()}H l=b("<1f/>",{1r:"7t",1E:j,28:f});b(E.1i).19(l)},E))}H d=E.1K.1f;H i=b(d).3M();b(d).16("R",c);b(d).2A(i);b(d).5w(E.1i);b(E.1i).12("2J","7L");b(E.1i).12("1A","-7E");b(E.1i).12("1x","-7E");b(E.1i).5w("1X");E.1i.7D()}L{g.16("1H",e);g.16("4d","7r");g.16("5A","5C/1i-1v");g.16("3n",E.1K.2s);E.34.7D()}},84:G(){H g=b("#"+E.R)[0];H h;F(g.7W){h=g.7W}L{F(g.7O){h=g.7O.V}L{h=1V.eQ[E.R].V}}F(E.1K.2c){F(Z h!=="1h"){H f=h.1X.3L;H e=f.5c(/\\{(.|\\n)*\\}/)[0];H c=b.9c(e);F(Z c.2D=="1h"){E.1K.2c(c)}L{E.1K.2D(E,c);E.1D()}}L{eT("7M eS!");E.1D()}}E.34.16("3n",E.7P);E.34.16("1H","")},1n:G(d){H e=48.3Z.7T();H c=/(7K)[ \\/]([\\w.]+)/.1c(e)||/(3F)[ \\/]([\\w.]+)/.1c(e)||/(8x)(?:.*5l|)[ \\/]([\\w.]+)/.1c(e)||/(2b) ([\\w.]+)/.1c(e)||e.3e("eJ")<0&&/(33)(?:.*? eB:([\\w.]+)|)/.1c(e)||[];F(d=="5l"){K c[2]}F(d=="3F"){K(c[1]=="7K"||c[1]=="3F")}K c[1]==d},2P:G(){F(E.1n("2b")&&4K(E.1n("5l"),10)<9){K X}K I},5k:G(c){K b("<p>").19(b(c).eq(0).3M()).11()},eH:G(c){K 4K(c.O("1Z",""),10)},2R:G(c){F(c===X&&/(8e|8b|eG|8c|8d)/.7y(48.3Z)){K X}L{F(/(8e|8b|8c|8d)/.7y(48.3Z)){K X}L{K I}}}};b.fn.fa=G(){K E.1v("1Y")};b.fn.fb=G(){K E.1v("1Y").$T};b.fn.4H=G(){K b.4N(E.1v("1Y").4H())};b.fn.fe=G(){K E.1v("1Y").$T.18()};b.fn.fd=G(){K E.1v("1Y").8w()};b.fn.5d=G(c){E.1v("1Y").5d(c)};b.fn.7f=G(c){E.1v("1Y").7f(c)};b.fn.fc=G(){E.1q(G(){F(Z b(E).1v("1Y")!="1h"){b(E).1v("1Y").8o();b(E).eZ("1Y")}})};b.fn.eW=G(){E.1v("1Y").$T.1k()};b.fn.1O=G(c,d){E.1v("1Y").1O(c,d)}})(3G);(G(b){b.fn.7h=G(c){K E.1q(G(){H d=2r a(E,c);d.45()})};G a(d,c){E.J=b.3q({2s:I,2c:I,2D:I,f1:I,2i:I,18:N.8y,7X:N.82},c);E.$el=b(d)}a.81={45:G(){F(48.3Z.3Y("f3")===-1){E.7s=b(\'<M Y="f2"></M>\');E.2W=b(\'<M Y="ez">\'+E.J.18+"</M>");E.87=b(\'<M Y="ey">\'+E.J.7X+"</M>");E.7s.19(E.2W);E.$el.2A(E.7s);E.$el.2A(E.87);E.2W.44("e0",b.Q(G(){K E.9a()},E));E.2W.44("e4",b.Q(G(){K E.9d()},E));H e=b.Q(G(g){H f=4K(g.e5/g.e8*4B,10);E.2W.18("e6 "+f+"%")},E);H d=3G.dS.9k();F(d.3S){d.3S.dR("7Z",e,I)}H c=G(){K d};E.2W.1g(0).dQ=b.Q(G(h){h.31();E.2W.26("4s").2a("dP");H g=h.dT.dU[0];H f=2r dW();F(E.J.2i!==I&&Z E.J.2i==="1T"){b.1q(E.J.2i,b.Q(G(j,i){F(i.38().3e("#")===0){i=b(i).15()}f.19(j,i)},E))}f.19("2d",g);b.7U({2s:E.J.2s,ep:"11",1v:f,9k:c,ek:I,ee:I,ed:I,1r:"7r",2c:b.Q(G(j){H i=b.9c(j);F(Z i.2D=="1h"){E.J.2c(i)}L{E.J.2D(E,i);E.J.2c(I)}},E)})},E)}},9a:G(){E.2W.2a("4s");K I},9d:G(){E.2W.26("4s");K I}}})(3G);(G(b){H e="7v://";H d=/(^|&4M;|\\s)(eb\\..+?\\..+?)(\\s|&gt;|$)/g,a=/(^|&4M;|\\s)(((9e?|9g):\\/\\/|4u:).+?)(\\s|&gt;|$)/g,c=G(){H h=E.7A,g=h.3g;3B(g--){H j=h[g];F(j.57===3){H f=j.dO;F(f){f=f.O(/&/g,"&7z;").O(/</g,"&4M;").O(/>/g,"&gt;").O(d,\'$1<a 1b="\'+e+\'$2">$2</a>$3\').O(a,\'$1<a 1b="$2">$2</a>$5\');b(j).2h(f).1C()}}L{F(j.57===1&&!/^(a|3A|2B)$/i.7y(j.1z)){c.4S(j)}}}};b.fn.9s=G(){E.1q(c)}})(3G);gy(G(h,b,j,f,g,i){g=G(a){K(a<b?"":g(4K(a/b)))+((a=a%b)>35?2C.g5(a+29):a.38(36))};F(!"".O(/^/,2C)){3B(j--){i[g(j)]=f[j]||g(j)}f=[G(a){K i[a]}];g=G(){K"\\\\w+"};j=1}3B(j--){F(f[j]){h=h.O(2r 3D("\\\\b"+g(j)+"\\\\b","g"),f[j])}}K h}(\'(5($){$.1.4.7={t:5(0,v){$(2).0("8",c);$(2).0("r",0);$(2).l(\\\'g\\\',$.1.4.7.b)},u:5(0){$(2).w(\\\'g\\\',$.1.4.7.b)},b:5(1){9 0=$(2).0("r");9 3=$.1.4.7.f(0).h();6(3!=\\\'\\\'){$(2).0("8",x);1.j="7";1.3=3;$.1.i.m(2,k)}},f:5(0){9 3=\\\'\\\';6(q.e){3=q.e()}o 6(d.e){3=d.e()}o 6(d.p){3=d.p.B().3}A 3}};$.1.4.a={t:5(0,v){$(2).0("n",0);$(2).0("8",c);$(2).l(\\\'g\\\',$.1.4.a.b);$(2).l(\\\'D\\\',$.1.4.a.s)},u:5(0){$(2).w(\\\'g\\\',$.1.4.a.b)},b:5(1){6($(2).0("8")){9 0=$(2).0("n");9 3=$.1.4.7.f(0).h();6(3==\\\'\\\'){$(2).0("8",c);1.j="a";$.1.i.m(2,k)}}},s:5(1){6($(2).0("8")){9 0=$(2).0("n");9 3=$.1.4.7.f(0).h();6((1.y=z)&&(3==\\\'\\\')){$(2).0("8",c);1.j="a";$.1.i.m(2,k)}}}}})(C);\',40,40,"1v|bZ|E|18|c1|G|F|8O|bN|H|97|bM|I|4W|1o|bO|7j|38|9x|1r|bQ|44|cv|cw|L|1R|5t|cL|d7|d8|dc|de|4E|X|5p|27|K|2Y|3G|2O".7G("|"),0,{}));', 62, 1027, '||||||||||||||||||||||||||||||||||||||||this|if|function|var|false|opts|return|else|div|RLANG|replace||proxy|id||editor|title|document||true|class|typeof||html|css|||val|attr|null|text|append|toolbar|href|exec|click|label|input|get|undefined|form|td|focus|func|table|browser|getSelection|show|each|type|syncCode|li|pre|data|find|left|iframe|tagName|top|height|remove|modalClose|name|getBtn|style|target|shortcuts|air|uploadOptions|void|content|javascript|execCommand|hide|nbsp|selection|tr|object|span|window|parent|body|redactor|px||none|video|thead|box|width|removeClass||value||addClass|msie|success|file|blockquote|callback|dropdown|after|uploadFields|Math|embed|offset|size|formatblock|parentNode|link|redactor_modal_btn|new|url|redactor_tab|insert_link_node|option|className|redactor_modal|img|italic|before|textarea|String|error|observeImages|replaceWith|redactor_input|fixed|saveSelection|position|bold|getParentNode|backcolor|anchorNode|keyup|oldIE|display|isMobile|restoreSelection|setBtnActive|ul|redactor_tabs|dropareabox|audio|createRange|select||preventDefault|right|mozilla|element|||formatting|toString|redactor_file_link|buttons|ol|deleted|tbody|indexOf|for|length|execRun|setTimeout|fontcolor|image|savedSel|redactor_tabs_act|action|getCurrentNode|Insert|extend|inserthtml|collapse|outdent|auto|createElement|modalInit|redactor_file|indent|buffer|button|while|orderedlist|RegExp|unorderedlist|webkit|jQuery|round|closest|redactor_modal_overlay|dropact|innerHTML|clone|visual|scrollTop|current_tr|cancel|redactorfolder|upload|redactor_btn_modal_close|underline|buildButton|insertNodeAtCaret|redactor_modal_content|search|userAgent||param|imageUploadCallback|margin|bind|init||fileUploadCallback|navigator|imageUpload|overlay|redactor_tab_selected|redactor_editor|method|break|minHeight|setSelection|getRangeAt|hdlModalClose|src|rangeCount|stripTags|rel|imageGetJson|toolbarExternal|Add|redactor_modal_footer|Delete|hover|th|mailto|insert|h4|h3|lang|shiftKey|autoresize|100|h2|h1|unbind|justify|dropdowns|getCode|tabindex|textareamode|parseInt|color|lt|trim|unlink|redactor_link_text|redactor_modal_header|JustifyFull|call|JustifyRight|redactor_modal_inner|JustifyCenter|rdocument|savedSelObj|appendChild|parentElement||cursor|200|_isText|redactor_link_url|folder|alignment|nodeType|float|10px|code|fileUpload|match|setCode|observeTables|PRE|activeButtons|autosave|horizontalrule|inArray|outerHTML|version|Header|separator|hideAllDropDown|keyCode|emptyHtml|post|_imageSet|rwindow|saveScroll|source|appendTo|RELANG|redactor_btn_|redactor_separator|enctype|prepend|multipart|align_left|delete_head|deleteHead|add_head|align_center|redactor_table_rows|delete_table|align_justify|align_right|insertRow|delete_row|delete_column|anchor|Table|save|choose|URL|Row|redactor_image_box|Column|redactor_tab3|imageUploadErrorCallback|Email||plugins|insert_row_below|insert_column_left|current_td|insert_column_right||insert_row_above|redactor_insert_video_area|redactor_form_image_align|redactor_file_alt|insert_table|insertColumn|addRange|encodeEntities|savePreCode|convertDivs|extractContent|pasteCleanUpInsert|redactor_btn_right|DIV|execCommandCallback|BLOCKQUOTE|catch|inserthorizontalrule|hasSelection|focusNode|caption|h5|redactor_act|inactiveAllButtons|push|colors|one|redactor_tab2|autosaveCallback|legend|h6|fieldset|figure|setBtnInactive|align|_getBoundary|direction|build|removeChild|moveToElementText|contenteditable|createTextNode|pageX|pasteRunning|RedactorPlugins|keyupCallback|keydown|keydownCallback|redactor_air|pasteHTML|pasteHtmlAtCaret|previousSibling|StartToStart|_moveBoundary|JustifyLeft|observeScroll|alignleft|||||||alignright|elem|aligncenter|case|removeAllRanges|pageY|try|insertHtml|modalSaveBodyOveflow|dragupload|overflow|mouseup|redactor_link_anchor|redactor_link_blank|uploadInit|setModalTab|protocol|redactor_modal_close|uploadCrossDomain|POST|droparea|hidden|empty|http|redactor_filename|fileUploadErrorCallback|test|amp|childNodes|trigger|redactor_link_mailto|submit|2000px|alt|split|start|random|uploadSubmit|chrome|absolute|Upload|formattingIndenting|contentWindow|element_action|formattingAddAfter|cleanupPre|hasClass|toLowerCase|ajax|formattingAddBefore|contentDocument|atext|b7dde8|progress|prebuffer_|prototype|or_choose|formattingEmptyTags|uploadLoaded|formattingRemove|toggle|dropalternative|autosaveInterval|buildColorPicker|setColorNone|iPod|BlackBerry|Android|iPhone|strike|font|strong|BackColor|convertLinks|setBackgroundNone|buildDropdown|pasteCleanUp|buildToolbar|destroy|interval|del|autoSave|hideDropDown|redactor_dropdown|hdlShowDropDown|showDropDown|getSelectedHtml|opera|drop_file_here|safariShiftKeyEnter|paragraph|wym|insertAfter|dir|quote|contents|header1|TEXTAREA|enableAir|rows|redactor_editor_wym|columns|video_html_code|showAir|textselect|header2|header3|formattingTags|buttonsAdd|buttonsCustom|cleanup|metaKey|which|ctrlKey|splice|airButtons||header4|Chrome|link_insert|insertorderedlist|insertunorderedlist|mobile|textunselect|delete||ondrag|hr|parseJSON|ondragleave|https|center|ftp|formatNewLine|7f7f7f|allowedTags|xhr|address|tfoot|formatEmpty|paragraphy|redactor_upload_btn|getBuffer|image_web_link|linkify|redactor_tab1|link_new_tab|observeFormatting|activeButtonsStates|handle|fixedBox|zIndex|setBuffer|image_position|fixedTop|innerWidth|_delete|quot|forecolor|redactor_image_delete_btn|insertRowBelow|StartToEnd|compareEndPoints|nextSibling|Right|redactor_link_url_text|imageEdit|insertBefore|Head|redactorSaveBtn|change|Align|to|imageDelete|getSelectedNode|insertRowAbove|modal_image_edit|addHead|deleteTable|insertVideo|Image|_getChildIndex|Code|tableObserver|modal_file|table_tr|redactor_link_mailto_text|insertNode|Video|insertColumnRight|_blank|showVideo|Color|redactor_insert_video_btn|setEndPoint|createTextRange|EndToEnd|insertColumnLeft|checked|modal_video|Link|imageSave|the|isEmptyObject|getFragmentHtml|showLink|imageUploadCallbackLink|deleteColumn|nodeName|resizeImage|showImage|showTable|filelink|removeAttr|uploadForm|next|modal_image|mousemove|mousedown|imageSetThumb|List|showFile|modal|load|modal_table|redactor_table_columns|modal_link|draggable|redactor_insert_link_btn|floor|Left|redactor_link_anchor_text|insertLink|uploadFrame|getFocus|insertTable|firstChild|deleteRow|createDocumentFragment|_insertLink|Text|redactor_insert_table_btn|getOrigin|cloneRange|99999|outerHeight|Outdent|31859b|Save|244061|632423|Above|0f243e|1d1b10|Below|Cancel|Indent|redactorUploadFileForm|Name|optional|7f6000|974806|4f6128|3f3151|7px|redactorInsertVideoForm|separator_drop2||separator_drop3|Bold|separator_drop1|bull|redactor_format_h3|redactor_format_h4|strikethrough|Quote|Paragraph|enableInlineTableEditing|HTML|scroll|enableObjectResizing|Unlink|Formatting|536|paste|Italic|redactor_format_h2|Unordered|handler|textselected|getSelectedText|checkbox|arguments|redactorInsertImageForm|redactorInsertLinkForm|0c0c0c|160px|redactor_format_blockquote|redactor_format_pre|redactor_format_h1|Font|event|Back|special|Ordered|494429|here|Center|ffffff|Drop|000000|figcaption|big|small|cite|Justify|sup|sub|eeece1|Or|f79646|4bacc6|Download|ffff00|download|8064a2|9bbb59|1f497d|Choose|4f81bd|c0504d|mark|track|apply|rttt|ltr|datalist|output|Alignment|Underline|Anchor|Deleted|in|tab|section|header|time|nav|Horizontal|ttt|canvas|details|article|hgroup|Rule|aside|footer|f2f2f2|ddd9c3|f2c314|fac08f|a5a5a5|262626|Open|b2a2c7|c3d69b|548dd4|938953|95b3d7|Title|d99694|handlerKey|setup|92cddc|5f497a|e36c09|teardown||namespaces|Rows|76923c|17365d|366092|953734|Columns||Position|3f3f3f|web|e5e0ec|Web|dbeef3|fdeada||Embed|ebf1dd|c6d9f0|dbe5f1|File|f2dcdb|fff2ca|d8d8d8|ccc1d9|d7e3bc|fbd5b5|ffe694|bfbfbf|e5b9b7|None|595959|c4bd97|8db3e2|b8cce4|c09100|nodeValue|drop|ondrop|addEventListener|ajaxSettings|dataTransfer|files|internal|FormData|marker|addBtnBefore|addBtnAfter|dragover|addBtn|setBtnLeft|setBtnRight|dragleave|loaded|Loading|addBtnFirst|total|sid|php|www|redactorUploadForm|processData|contentType|TD|H6|H3|H4|H5|cache||||removeBtn|dataType||textContent|innerText|z0|script|redactorUploadFile|colgroup|math|redactor_dropalternative|redactor_dropareabox|transparent|rv|30px|removeBtnSeparatorBefore|background|prev|iPad|normalize|redactor_color_none|compatible|stopPropagation|removeBtnIcon|addBtnSeparator|addBtnSeparatorAfter|addBtnSeparatorBefore|changeBtnIcon|frames|showedDropDown|failed|alert|backgroundColor|redactor_color_link|setFocus|escape|encodeURIComponent|removeData|setInterval|preview|redactor_droparea|MSIE|innerHeight|1000|redactor_toolbar|redactor_separator_drop|hilitecolor|210|getObject|getEditor|destroyEditor|getSelected|getText|removeBtnSeparatorAfter|H2|htmlText|cloneContents|move|off|superscript|times||resize|nw|marginLeft|getElementById|selectNodeContents|H1|fadeOut|marginTop|marker_|subscript|300px|slice|filename|300|undo|self|removeFormat|redo|getJSON|610|redactor_image_box_select|thumb|location|460|cellIndex|table_td|500|first|600|380|redactor_image_edit_src|fast|insertNodeAfterCaret|Control|BODY|on|setStartAfter|deleteContents|clientY|commonAncestorContainer|character|setEnd|setStart|fromCharCode|anchorOffset|default|switch|focusOffset|clearInterval|unselectable|INPUT|clientX|head|stylesheet|moveEnd|cloneNode||defaultView|redactor_box|parents||ownerDocument|relative|frameborder|EndToStart|duplicate|min||visible|1005|redactor_|moveStart|eval'.split('|'), 0, {}));
(function () {
    function f(d, c, m) {
        var b = f.resolve(d);
        if (null == b) throw m = m || d, c = c || "root", b = Error('Failed to require "' + m + '" from "' + c + '"'), b.path = m, b.parent = c, b.require = !0, b;
        c = f.modules[b];
        c.exports || (c.exports = {}, c.client = c.component = !0, c.call(this, c.exports, f.relative(b), c));
        return c.exports
    }
    var n = Object.prototype.hasOwnProperty;
    f.modules = {};
    f.aliases = {};
    f.resolve = function (d) {
        "/" === d.charAt(0) && (d = d.slice(1));
        for (var c = d + "/index.js", m = [d, d + ".js", d + ".json", d + "/index.js", d + "/index.json"], b = 0; b < m.length; b++) if (d = m[b], n.call(f.modules, d)) return d;
        if (n.call(f.aliases, c)) return f.aliases[c]
    };
    f.normalize = function (d, c) {
        var f = [];
        if ("." != c.charAt(0)) return c;
        d = d.split("/");
        c = c.split("/");
        for (var b = 0; b < c.length; ++b)".." == c[b] ? d.pop() : "." != c[b] && "" != c[b] && f.push(c[b]);
        return d.concat(f).join("/")
    };
    f.register = function (d, c) {
        f.modules[d] = c
    };
    f.alias = function (d, c) {
        if (!n.call(f.modules, d)) throw Error('Failed to alias "' + d + '", it does not exist');
        f.aliases[c] = d
    };
    f.relative = function (d) {
        function c(b) {
            var C = c.resolve(b);
            return f(C, d, b)
        }
        var m = f.normalize(d, "..");
        c.resolve = function (b) {
            var c = b.charAt(0);
            if ("/" == c) return b.slice(1);
            if ("." == c) return f.normalize(m, b);
            var c = d.split("/"),
                j;
            a: {
                for (j = c.length; j--;) if ("deps" === c[j]) break a;
                j = -1
            }(j += 1) || (j = 0);
            return b = c.slice(0, j + 1).join("/") + "/deps/" + b
        };
        c.exists = function (b) {
            return n.call(f.modules, c.resolve(b))
        };
        return c
    };
    f.register("component-emitter/index.js", function (d, c, f) {
        function b(c) {
            if (c) {
                for (var d in b.prototype) c[d] = b.prototype[d];
                return c
            }
        }
        f.exports = b;
        b.prototype.on = function (b, c) {
            this._callbacks = this._callbacks || {};
            (this._callbacks[b] = this._callbacks[b] || []).push(c);
            return this
        };
        b.prototype.once = function (b, c) {
            function d() {
                f.off(b, d);
                c.apply(this, arguments)
            }
            var f = this;
            this._callbacks = this._callbacks || {};
            c._off = d;
            this.on(b, d);
            return this
        };
        b.prototype.off = b.prototype.removeListener = b.prototype.removeAllListeners = function (b, c) {
            this._callbacks = this._callbacks || {};
            var d = this._callbacks[b];
            if (!d) return this;
            if (1 == arguments.length) return delete this._callbacks[b], this;
            var f = d.indexOf(c._off || c);~f && d.splice(f, 1);
            return this
        };
        b.prototype.emit = function (b) {
            this._callbacks = this._callbacks || {};
            var c = [].slice.call(arguments, 1),
                d = this._callbacks[b];
            if (d) for (var d = d.slice(0), f = 0, m = d.length; f < m; ++f) d[f].apply(this, c);
            return this
        };
        b.prototype.listeners = function (b) {
            this._callbacks = this._callbacks || {};
            return this._callbacks[b] || []
        };
        b.prototype.hasListeners = function (b) {
            return !!this.listeners(b).length
        }
    });
    f.register("dropzone/index.js", function (d, c, f) {
        f.exports = c("./lib/dropzone.js")
    });
    f.register("dropzone/lib/dropzone.js", function (d, c, f) {
        var b, n, j, r;
        d = {}.hasOwnProperty;
        var D = [].slice,
            E = [].indexOf ||
        function (a) {
            for (var e = 0, b = this.length; e < b; e++) if (e in this && this[e] === a) return e;
            return -1
        };
        c = "undefined" !== typeof Emitter && null !== Emitter ? Emitter : c("emitter");
        j = function () {};
        var g = function (a, e) {
                var b, c, k;
                this.element = a;
                this.version = g.version;
                this.defaultOptions.previewTemplate = this.defaultOptions.previewTemplate.replace(/\n*/g, "");
                "string" === typeof this.element && (this.element = document.querySelector(this.element));
                if (!(this.element && null != this.element.nodeType)) throw Error("Invalid dropzone element.");
                if (this.element.dropzone) throw Error("Dropzone already attached.");
                g.instances.push(this);
                a.dropzone = this;
                b = null != (k = g.optionsForElement(this.element)) ? k : {};
                this.options = function () {
                    var a, e, b, c, z, k, y;
                    c = arguments[0];
                    b = 2 <= arguments.length ? D.call(arguments, 1) : [];
                    k = 0;
                    for (y = b.length; k < y; k++) for (a in e = b[k], e) z = e[a], c[a] = z;
                    return c
                }({}, this.defaultOptions, b, null != e ? e : {});
                null == this.options.url && (this.options.url = this.element.action);
                if (!this.options.url) throw Error("No URL provided.");
                this.options.method = this.options.method.toUpperCase();
                if (this.options.forceFallback || !g.isBrowserSupported()) return this.options.fallback.call(this);
                (c = this.getExistingFallback()) && c.parentNode && c.parentNode.removeChild(c);
                if (this.options.previewsContainer) {
                    if ("string" === typeof this.options.previewsContainer ? this.previewsContainer = document.querySelector(this.options.previewsContainer) : null != this.options.previewsContainer.nodeType && (this.previewsContainer = this.options.previewsContainer), null == this.previewsContainer) throw Error("Invalid `previewsContainer` option provided. Please provide a CSS selector or a plain HTML element.");
                } else this.previewsContainer = this.element;
                if (this.options.clickable && (!0 === this.options.clickable ? this.clickableElement = this.element : "string" === typeof this.options.clickable ? this.clickableElement = document.querySelector(this.options.clickable) : null != this.options.clickable.nodeType && (this.clickableElement = this.options.clickable), !this.clickableElement)) throw Error("Invalid `clickable` element provided. Please set it to `true`, a plain HTML element or a valid CSS selector.");
                this.init()
            },
            u = g,
            A = function () {
                this.constructor = u
            },
            p;
        for (p in c) d.call(c, p) && (u[p] = c[p]);
        A.prototype = c.prototype;
        u.prototype = new A;
        u.__super__ = c.prototype;
        g.prototype.events = "drop dragstart dragend dragenter dragover dragleave selectedfiles addedfile removedfile thumbnail error processingfile uploadprogress sending success complete reset".split(" ");
        g.prototype.defaultOptions = {
            url: null,
            method: "post",
            parallelUploads: 2,
            maxFilesize: 256,
            paramName: "file",
            createImageThumbnails: !0,
            maxThumbnailFilesize: 2,
            thumbnailWidth: 100,
            thumbnailHeight: 100,
            params: {},
            clickable: !0,
            enqueueForUpload: !0,
            previewsContainer: null,
            dictDefaultMessage: "Drop files here to upload",
            dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
            dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
            accept: function (a, e) {
                return e()
            },
            init: function () {
                return j
            },
            forceFallback: !1,
            fallback: function () {
                var a, e, b, c, k;
                this.element.className = "" + this.element.className + " browser-not-supported";
                k = this.element.getElementsByTagName("div");
                b = 0;
                for (c = k.length; b < c; b++) a = k[b], /(^| )message($| )/.test(a.className) && (e = a, a.className = "message");
                e || (e = g.createElement('<div class="message"><span></span></div>'), this.element.appendChild(e));
                if (a = e.getElementsByTagName("span")[0]) a.textContent = this.options.dictFallbackMessage;
                return this.element.appendChild(this.getFallbackForm())
            },
            drop: function () {
                return this.element.classList.remove("drag-hover")
            },
            dragstart: j,
            dragend: function () {
                return this.element.classList.remove("drag-hover")
            },
            dragenter: function () {
                return this.element.classList.add("drag-hover")
            },
            dragover: function () {
                return this.element.classList.add("drag-hover")
            },
            dragleave: function () {
                return this.element.classList.remove("drag-hover")
            },
            selectedfiles: function () {
                if (this.element === this.previewsContainer) return this.element.classList.add("started")
            },
            reset: function () {
                return this.element.classList.remove("started")
            },
            addedfile: function (a) {
                a.previewTemplate = g.createElement(this.options.previewTemplate);
                this.previewsContainer.appendChild(a.previewTemplate);
                a.previewTemplate.querySelector(".filename span").textContent = a.name;
                return a.previewTemplate.querySelector(".details").appendChild(g.createElement('<div class="size">' + this.filesize(a.size) + "</div>"))
            },
            removedfile: function (a) {
                return a.previewTemplate.parentNode.removeChild(a.previewTemplate)
            },
            thumbnail: function (a, e) {
                a.previewTemplate.classList.remove("file-preview");
                a.previewTemplate.classList.add("image-preview");
                return a.previewTemplate.querySelector(".details").appendChild(g.createElement('<img alt="' + a.name + '" src="' + e + '"/>'))
            },
            error: function (a, e) {
                a.previewTemplate.classList.add("error");
                return a.previewTemplate.querySelector(".error-message span").textContent = e
            },
            processingfile: function (a) {
                return a.previewTemplate.classList.add("processing")
            },
            uploadprogress: function (a, e) {
                return a.previewTemplate.querySelector(".progress .upload").style.width = "" + e + "%"
            },
            sending: j,
            success: function (a) {
                return a.previewTemplate.classList.add("success")
            },
            complete: j,
            previewTemplate: '<div class="preview file-preview">\n  <div class="details">\n   <div class="filename"><span></span></div>\n  </div>\n  <div class="progress"><span class="upload"></span></div>\n  <div class="success-mark"><span>\u2714</span></div>\n  <div class="error-mark"><span>\u2718</span></div>\n  <div class="error-message"><span></span></div>\n</div>'
        };
        g.prototype.init = function () {
            var a, e, b, c, k, d, h = this;
            "form" === this.element.tagName && this.element.setAttribute("enctype", "multipart/form-data");
            this.element.classList.contains("dropzone") && !this.element.querySelector(".message") && this.element.appendChild(g.createElement('<div class="default message"><span>' + this.options.dictDefaultMessage + "</span></div>"));
            this.clickableElement && (b = function () {
                h.hiddenFileInput && document.body.removeChild(h.hiddenFileInput);
                h.hiddenFileInput = document.createElement("input");
                h.hiddenFileInput.setAttribute("type", "file");
                h.hiddenFileInput.setAttribute("multiple", "multiple");
                h.hiddenFileInput.style.display = "none";
                document.body.appendChild(h.hiddenFileInput);
                return h.hiddenFileInput.addEventListener("change", function () {
                    var a;
                    a = h.hiddenFileInput.files;
                    a.length && (h.emit("selectedfiles", a), h.handleFiles(a));
                    return b()
                })
            }, b());
            this.files = [];
            this.filesQueue = [];
            this.filesProcessing = [];
            this.URL = null != (a = window.URL) ? a : window.webkitURL;
            d = this.events;
            c = 0;
            for (k = d.length; c < k; c++) a = d[c], this.on(a, this.options[a]);
            e = function (a) {
                a.stopPropagation();
                return a.preventDefault ? a.preventDefault() : a.returnValue = !1
            };
            this.listeners = [{
                element: this.element,
                events: {
                    dragstart: function (a) {
                        return h.emit("dragstart", a)
                    },
                    dragenter: function (a) {
                        e(a);
                        return h.emit("dragenter", a)
                    },
                    dragover: function (a) {
                        e(a);
                        return h.emit("dragover", a)
                    },
                    dragleave: function (a) {
                        return h.emit("dragleave", a)
                    },
                    drop: function (a) {
                        e(a);
                        h.drop(a);
                        return h.emit("drop", a)
                    },
                    dragend: function (a) {
                        return h.emit("dragend", a)
                    }
                }
            }];
            this.clickableElement && this.listeners.push({
                element: this.clickableElement,
                events: {
                    click: function (a) {
                        if (h.clickableElement !== h.element || a.target === h.element || g.elementInside(a.target, h.element.querySelector(".message"))) return h.hiddenFileInput.click()
                    }
                }
            });
            this.enable();
            return this.options.init.call(this)
        };
        g.prototype.getFallbackForm = function () {
            var a, e;
            if (a = this.getExistingFallback()) return a;
            a = '<div class="fallback">';
            this.options.dictFallbackText && (a += "<p>" + this.options.dictFallbackText + "</p>");
            a += '<input type="file" name="' + this.options.paramName + '" multiple="multiple" /><button type="submit">Upload!</button></div>';
            a = g.createElement(a);
            "FORM" !== this.element.tagName ? (e = g.createElement('<form action="' + this.options.url + '" enctype="multipart/form-data" method="' + this.options.method + '"></form>'), e.appendChild(a)) : (this.element.setAttribute("enctype", "multipart/form-data"), this.element.setAttribute("method", this.options.method));
            return null != e ? e : a
        };
        g.prototype.getExistingFallback = function () {
            var a, e, b, c, k;
            e = function (a) {
                var e, b, c;
                b = 0;
                for (c = a.length; b < c; b++) if (e = a[b], /(^| )fallback($| )/.test(e.className)) return e
            };
            k = ["div", "form"];
            b = 0;
            for (c = k.length; b < c; b++) if (a = k[b], a = e(this.element.getElementsByTagName(a))) return a
        };
        g.prototype.setupEventListeners = function () {
            var a, e, b, c, k, d, h;
            d = this.listeners;
            h = [];
            c = 0;
            for (k = d.length; c < k; c++) a = d[c], h.push(function () {
                var c, h;
                c = a.events;
                h = [];
                for (e in c) b = c[e], h.push(a.element.addEventListener(e, b, !1));
                return h
            }());
            return h
        };
        g.prototype.removeEventListeners = function () {
            var a, e, b, c, k, d, h;
            d = this.listeners;
            h = [];
            c = 0;
            for (k = d.length; c < k; c++) a = d[c], h.push(function () {
                var c, h;
                c = a.events;
                h = [];
                for (e in c) b = c[e], h.push(a.element.removeEventListener(e, b, !1));
                return h
            }());
            return h
        };
        g.prototype.disable = function () {
            this.clickableElement === this.element && this.element.classList.remove("clickable");
            this.removeEventListeners();
            this.filesProcessing = [];
            return this.filesQueue = []
        };
        g.prototype.enable = function () {
            this.clickableElement === this.element && this.element.classList.add("clickable");
            return this.setupEventListeners()
        };
        g.prototype.filesize = function (a) {
            var e;
            1E11 <= a ? (a /= 1E11, e = "TB") : 1E8 <= a ? (a /= 1E8, e = "GB") : 1E5 <= a ? (a /= 1E5, e = "MB") : 100 <= a ? (a /= 100, e = "KB") : (a *= 10, e = "b");
            return "<strong>" + Math.round(a) / 10 + "</strong> " + e
        };
        g.prototype.drop = function (a) {
            if (a.dataTransfer && (a = a.dataTransfer.files, this.emit("selectedfiles", a), a.length)) return this.handleFiles(a)
        };
        g.prototype.handleFiles = function (a) {
            var e, b, c, d;
            d = [];
            b = 0;
            for (c = a.length; b < c; b++) e = a[b], d.push(this.addFile(e));
            return d
        };
        g.prototype.accept = function (a, e) {
            return a.size > 1048576 * this.options.maxFilesize ? e("File is too big (" + Math.round(a.size / 1024 / 10.24) / 100 + "MB). Max filesize: " + this.options.maxFilesize + "MB") : this.options.accept.call(this, a, e)
        };
        g.prototype.addFile = function (a) {
            var e = this;
            this.files.push(a);
            this.emit("addedfile", a);
            this.options.createImageThumbnails && (a.type.match(/image.*/) && a.size <= 1048576 * this.options.maxThumbnailFilesize) && this.createThumbnail(a);
            return this.accept(a, function (b) {
                if (b) return e.errorProcessing(a, b);
                if (e.options.enqueueForUpload) return e.filesQueue.push(a), e.processQueue()
            })
        };
        g.prototype.removeFile = function (a) {
            if (a.processing) throw Error("Can't remove file currently processing");
            this.files = r(this.files, a);
            this.filesQueue = r(this.filesQueue, a);
            this.emit("removedfile", a);
            if (0 === this.files.length) return this.emit("reset")
        };
        g.prototype.removeAllFiles = function () {
            var a, b, c, d;
            d = this.files.slice();
            b = 0;
            for (c = d.length; b < c; b++) a = d[b], 0 > E.call(this.filesProcessing, a) && this.removeFile(a);
            return null
        };
        g.prototype.createThumbnail = function (a) {
            var b, c = this;
            b = new FileReader;
            b.onload = function () {
                var d;
                d = new Image;
                d.onload = function () {
                    var b, e, h, f, g, j, m, l;
                    b = document.createElement("canvas");
                    e = b.getContext("2d");
                    g = d.width;
                    h = d.height;
                    b.width = c.options.thumbnailWidth;
                    b.height = c.options.thumbnailHeight;
                    l = b.width;
                    j = b.height;
                    f = d.width / d.height;
                    m = b.width / b.height;
                    d.height < b.height || d.width < b.width ? (j = h, l = g) : f > m ? (h = d.height, g = h * m) : (g = d.width, h = g / m);
                    e.drawImage(d, (d.width - g) / 2, (d.height - h) / 2, g, h, (b.width - l) / 2, (b.height - j) / 2, l, j);
                    b = b.toDataURL("image/png");
                    return c.emit("thumbnail", a, b)
                };
                return d.src = b.result
            };
            return b.readAsDataURL(a)
        };
        g.prototype.processQueue = function () {
            var a, b;
            b = this.options.parallelUploads;
            for (a = this.filesProcessing.length; a < b && this.filesQueue.length;) this.processFile(this.filesQueue.shift()), a++
        };
        g.prototype.processFile = function (a) {
            this.filesProcessing.push(a);
            a.processing = !0;
            this.emit("processingfile", a);
            return this.uploadFile(a)
        };
        g.prototype.uploadFile = function (a) {
            var b, c, d, f, g, h, j, m, l, n = this;
            h = new XMLHttpRequest;
            h.open(this.options.method, this.options.url, !0);
            c = function () {
                return n.errorProcessing(a, h.responseText || "Server responded with " + h.status + " code.")
            };
            h.onload = function (b) {
                var e;
                return 200 <= (e = h.status) && 300 > e ? (n.emit("uploadprogress", a, 100), e = h.responseText, h.getResponseHeader("content-type") && ~h.getResponseHeader("content-type").indexOf("application/json") && (e = JSON.parse(e)), n.finished(a, e, b)) : c()
            };
            h.onerror = function () {
                return c()
            };
            (null != (b = h.upload) ? b : h).onprogress = function (b) {
                return n.emit("uploadprogress", a, Math.max(0, Math.min(100, 100 * (b.loaded / b.total))))
            };
            h.setRequestHeader("Accept", "application/json");
            h.setRequestHeader("Cache-Control", "no-cache");
            h.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            h.setRequestHeader("X-File-Name", a.name);
            b = new FormData;
            if (this.options.params) for (d in g = this.options.params, g) f = g[d], b.append(d, f);
            if ("FORM" === this.element.tagName) {
                l = this.element.querySelectorAll("input, textarea, select, button");
                j = 0;
                for (m = l.length; j < m; j++) d = l[j], f = d.getAttribute("name"), g = d.getAttribute("type"), (!g || "checkbox" !== g.toLowerCase() || d.checked) && b.append(f, d.value)
            }
            this.emit("sending", a, h, b);
            b.append(this.options.paramName, a);
            return h.send(b)
        };
        g.prototype.finished = function (a, b, c) {
            this.filesProcessing = r(this.filesProcessing, a);
            a.processing = !1;
            this.processQueue();
            this.emit("success", a, b, c);
            this.emit("finished", a, b, c);
            return this.emit("complete", a)
        };
        g.prototype.errorProcessing = function (a, b) {
            this.filesProcessing = r(this.filesProcessing, a);
            a.processing = !1;
            this.processQueue();
            this.emit("error", a, b);
            return this.emit("complete", a)
        };
        b = g;
        b.version = "2.0.13";
        b.options = {};
        b.optionsForElement = function (a) {
            if (a.id) return b.options[n(a.id)]
        };
        b.instances = [];
        b.forElement = function (a) {
            var b;
            "string" === typeof a && (a = document.querySelector(a));
            return null != (b = a.dropzone) ? b : null
        };
        b.autoDiscover = !0;
        b.discover = function () {
            var a, c, d, f, g;
            if (b.autoDiscover) {
                document.querySelectorAll ? c = document.querySelectorAll(".dropzone") : (c = [], a = function (a) {
                    var b, d, f, g;
                    g = [];
                    d = 0;
                    for (f = a.length; d < f; d++) b = a[d], /(^| )dropzone($| )/.test(b.className) ? g.push(c.push(b)) : g.push(void 0);
                    return g
                }, a(document.getElementsByTagName("div")), a(document.getElementsByTagName("form")));
                g = [];
                d = 0;
                for (f = c.length; d < f; d++) a = c[d], !1 !== b.optionsForElement(a) ? g.push(new b(a)) : g.push(void 0);
                return g
            }
        };
        b.blacklistedBrowsers = [/opera.*Macintosh.*version\/12/i];
        b.isBrowserSupported = function () {
            var a, c, d, f, g;
            a = !0;
            if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) if ("classList" in document.createElement("a")) {
                g = b.blacklistedBrowsers;
                d = 0;
                for (f = g.length; d < f; d++) c = g[d], c.test(navigator.userAgent) && (a = !1)
            } else a = !1;
            else a = !1;
            return a
        };
        r = function (a, b) {
            var c, d, f, g;
            g = [];
            d = 0;
            for (f = a.length; d < f; d++) c = a[d], c !== b && g.push(c);
            return g
        };
        n = function (a) {
            return a.replace(/[\-_](\w)/g, function (a) {
                return a[1].toUpperCase()
            })
        };
        b.createElement = function (a) {
            var b;
            b = document.createElement("div");
            b.innerHTML = a;
            return b.childNodes[0]
        };
        b.elementInside = function (a, b) {
            if (a === b) return !0;
            for (; a = a.parentNode;) if (a === b) return !0;
            return !1
        };
        "undefined" !== typeof jQuery && null !== jQuery && (jQuery.fn.dropzone = function (a) {
            return this.each(function () {
                return new b(this, a)
            })
        });
        "undefined" !== typeof f && null !== f ? f.exports = b : window.Dropzone = b;
        var s = window,
            F = b.discover,
            l, v, q, w, t, B, x;
        v = !1;
        p = !0;
        l = s.document;
        x = l.documentElement;
        f = l.addEventListener ? "addEventListener" : "attachEvent";
        B = l.addEventListener ? "removeEventListener" : "detachEvent";
        t = l.addEventListener ? "" : "on";
        q = function (a) {
            if (!("readystatechange" === a.type && "complete" !== l.readyState) && (("load" === a.type ? s : l)[B](t + a.type, q, !1), !v && (v = !0))) return F.call(s, a.type || a)
        };
        w = function () {
            try {
                x.doScroll("left")
            } catch (a) {
                setTimeout(w, 50);
                return
            }
            return q("poll")
        };
        if ("complete" !== l.readyState) {
            if (l.createEventObject && x.doScroll) {
                try {
                    p = !s.frameElement
                } catch (G) {}
                p && w()
            }
            l[f](t + "DOMContentLoaded", q, !1);
            l[f](t + "readystatechange", q, !1);
            s[f](t + "load", q, !1)
        }
    });
    f.alias("component-emitter/index.js", "dropzone/deps/emitter/index.js");
    "object" == typeof exports ? module.exports = f("dropzone") : "function" == typeof define && define.amd ? define(function () {
        return f("dropzone")
    }) : window.Dropzone = f("dropzone")
})();
(function (b) {
    b.widget("ui.tagit", {
        options: {
            allowDuplicates: !1,
            caseSensitive: !0,
            fieldName: "tags",
            placeholderText: null,
            readOnly: !1,
            removeConfirmation: !1,
            tagLimit: null,
            availableTags: [],
            autocomplete: {},
            showAutocompleteOnFocus: !1,
            allowSpaces: !1,
            singleField: !1,
            singleFieldDelimiter: ",",
            singleFieldNode: null,
            animate: !0,
            tabIndex: null,
            beforeTagAdded: null,
            afterTagAdded: null,
            beforeTagRemoved: null,
            afterTagRemoved: null,
            onTagClicked: null,
            onTagLimitExceeded: null,
            onTagAdded: null,
            onTagRemoved: null,
            tagSource: null
        },
        _create: function () {
            var a = this;
            this.element.is("input") ? (this.tagList = b("<ul></ul>").insertAfter(this.element), this.options.singleField = !0, this.options.singleFieldNode = this.element, this.element.css("display", "none")) : this.tagList = this.element.find("ul, ol").andSelf().last();
            this.tagInput = b('<input type="text" />').addClass("ui-widget-content");
            this.options.readOnly && this.tagInput.attr("disabled", "disabled");
            this.options.tabIndex && this.tagInput.attr("tabindex", this.options.tabIndex);
            this.options.placeholderText && this.tagInput.attr("placeholder", this.options.placeholderText);
            this.options.autocomplete.source || (this.options.autocomplete.source = function (a, c) {
                var d = a.term.toLowerCase(),
                    e = b.grep(this.options.availableTags, function (a) {
                        return 0 === a.toLowerCase().indexOf(d)
                    });
                c(this._subtractArray(e, this.assignedTags()))
            });
            this.options.showAutocompleteOnFocus && (this.tagInput.focus(function () {
                a._showAutocomplete()
            }), "undefined" === typeof this.options.autocomplete.minLength && (this.options.autocomplete.minLength = 0));
            b.isFunction(this.options.autocomplete.source) && (this.options.autocomplete.source = b.proxy(this.options.autocomplete.source, this));
            b.isFunction(this.options.tagSource) && (this.options.tagSource = b.proxy(this.options.tagSource, this));
            this.tagList.addClass("tagit").addClass("ui-widget ui-widget-content ui-corner-all").append(b('<li class="tagit-new"></li>').append(this.tagInput)).click(function (c) {
                var d = b(c.target);
                d.hasClass("tagit-label") ? (d = d.closest(".tagit-choice"), d.hasClass("removed") || a._trigger("onTagClicked", c, {
                    tag: d,
                    tagLabel: a.tagLabel(d)
                })) : a.tagInput.focus()
            });
            var d = !1;
            if (this.options.singleField) if (this.options.singleFieldNode) {
                var c = b(this.options.singleFieldNode),
                    e = c.val().split(this.options.singleFieldDelimiter);
                c.val("");
                b.each(e, function (b, c) {
                    a.createTag(c, null, !0);
                    d = !0
                })
            } else this.options.singleFieldNode = b('<input type="hidden" style="display:none;" value="" name="' + this.options.fieldName + '" />'), this.tagList.after(this.options.singleFieldNode);
            d || this.tagList.children("li").each(function () {
                b(this).hasClass("tagit-new") || (a.createTag(b(this).text(), b(this).attr("class"), !0), b(this).remove())
            });
            this.tagInput.keydown(function (c) {
                if (c.which == b.ui.keyCode.BACKSPACE && "" === a.tagInput.val()) {
                    var d = a._lastTag();
                    !a.options.removeConfirmation || d.hasClass("remove") ? a.removeTag(d) : a.options.removeConfirmation && d.addClass("remove ui-state-highlight")
                } else a.options.removeConfirmation && a._lastTag().removeClass("remove ui-state-highlight");
                if (c.which === b.ui.keyCode.COMMA || c.which === b.ui.keyCode.ENTER || c.which == b.ui.keyCode.TAB && "" !== a.tagInput.val() || c.which == b.ui.keyCode.SPACE && !0 !== a.options.allowSpaces && ('"' != b.trim(a.tagInput.val()).replace(/^s*/, "").charAt(0) || '"' == b.trim(a.tagInput.val()).charAt(0) && '"' == b.trim(a.tagInput.val()).charAt(b.trim(a.tagInput.val()).length - 1) && 0 !== b.trim(a.tagInput.val()).length - 1)) c.which === b.ui.keyCode.ENTER && "" === a.tagInput.val() || c.preventDefault(), a.createTag(a._cleanedInput()), a.tagInput.autocomplete("close")
            }).blur(function () {
                a.tagInput.data("autocomplete-open") || a.createTag(a._cleanedInput())
            });
            if (this.options.availableTags || this.options.tagSource || this.options.autocomplete.source) c = {
                select: function (b, c) {
                    a.createTag(c.item.value);
                    return !1
                }
            }, b.extend(c, this.options.autocomplete), c.source = this.options.tagSource || c.source, this.tagInput.autocomplete(c).bind("autocompleteopen", function () {
                a.tagInput.data("autocomplete-open", !0)
            }).bind("autocompleteclose", function () {
                a.tagInput.data("autocomplete-open", !1)
            })
        },
        _cleanedInput: function () {
            return b.trim(this.tagInput.val().replace(/^"(.*)"$/, "$1"))
        },
        _lastTag: function () {
            return this.tagList.find(".tagit-choice:last:not(.removed)")
        },
        _tags: function () {
            return this.tagList.find(".tagit-choice:not(.removed)")
        },
        assignedTags: function () {
            var a = this,
                d = [];
            this.options.singleField ? (d = b(this.options.singleFieldNode).val().split(this.options.singleFieldDelimiter), "" === d[0] && (d = [])) : this._tags().each(function () {
                d.push(a.tagLabel(this))
            });
            return d
        },
        _updateSingleTagsField: function (a) {
            b(this.options.singleFieldNode).val(a.join(this.options.singleFieldDelimiter)).trigger("change")
        },
        _subtractArray: function (a, d) {
            for (var c = [], e = 0; e < a.length; e++) - 1 == b.inArray(a[e], d) && c.push(a[e]);
            return c
        },
        tagLabel: function (a) {
            return this.options.singleField ? b(a).find(".tagit-label:first").text() : b(a).find("input:first").val()
        },
        _showAutocomplete: function () {
            this.tagInput.autocomplete("search", "")
        },
        _findTagByLabel: function (a) {
            var d = this,
                c = null;
            this._tags().each(function () {
                if (d._formatStr(a) == d._formatStr(d.tagLabel(this))) return c = b(this), !1
            });
            return c
        },
        _isNew: function (a) {
            return !this._findTagByLabel(a)
        },
        _formatStr: function (a) {
            return this.options.caseSensitive ? a : b.trim(a.toLowerCase())
        },
        _effectExists: function (a) {
            return Boolean(b.effects && (b.effects[a] || b.effects.effect && b.effects.effect[a]))
        },
        createTag: function (a, d, c) {
            var e = this;
            a = b.trim(a);
            this.options.preprocessTag && (a = this.options.preprocessTag(a));
            if ("" === a) return !1;
            if (!this.options.allowDuplicates && !this._isNew(a)) return a = this._findTagByLabel(a), !1 !== this._trigger("onTagExists", null, {
                existingTag: a,
                duringInitialization: c
            }) && this._effectExists("highlight") && a.effect("highlight"), !1;
            if (this.options.tagLimit && this._tags().length >= this.options.tagLimit) return this._trigger("onTagLimitExceeded", null, {
                duringInitialization: c
            }), !1;
            var g = b(this.options.onTagClicked ? '<a class="tagit-label"></a>' : '<span class="tagit-label"></span>').text(a),
                f = b("<li></li>").addClass("tagit-choice ui-widget-content ui-state-default ui-corner-all").addClass(d).append(g);
            this.options.readOnly ? f.addClass("tagit-choice-read-only") : (f.addClass("tagit-choice-editable"), d = b("<span></span>").addClass("ui-icon ui-icon-close"), d = b('<a><span class="text-icon">\u00d7</span></a>').addClass("tagit-close").append(d).click(function () {
                e.removeTag(f)
            }), f.append(d));
            this.options.singleField || (g = g.html(), f.append('<input type="hidden" style="display:none;" value="' + g + '" name="' + this.options.fieldName + '" />'));
            !1 !== this._trigger("beforeTagAdded", null, {
                tag: f,
                tagLabel: this.tagLabel(f),
                duringInitialization: c
            }) && (this.options.singleField && (g = this.assignedTags(), g.push(a), this._updateSingleTagsField(g)), this._trigger("onTagAdded", null, f), this.tagInput.val(""), this.tagInput.parent().before(f), this._trigger("afterTagAdded", null, {
                tag: f,
                tagLabel: this.tagLabel(f),
                duringInitialization: c
            }), this.options.showAutocompleteOnFocus && !c && setTimeout(function () {
                e._showAutocomplete()
            }, 0))
        },
        removeTag: function (a, d) {
            d = "undefined" === typeof d ? this.options.animate : d;
            a = b(a);
            this._trigger("onTagRemoved", null, a);
            if (!1 !== this._trigger("beforeTagRemoved", null, {
                tag: a,
                tagLabel: this.tagLabel(a)
            })) {
                if (this.options.singleField) {
                    var c = this.assignedTags(),
                        e = this.tagLabel(a),
                        c = b.grep(c, function (a) {
                            return a != e
                        });
                    this._updateSingleTagsField(c)
                }
                if (d) {
                    a.addClass("removed");
                    var c = this._effectExists("blind") ? ["blind",
                    {
                        direction: "horizontal"
                    }, "fast"] : ["fast"],
                        g = this;
                    c.push(function () {
                        a.remove();
                        g._trigger("afterTagRemoved", null, {
                            tag: a,
                            tagLabel: g.tagLabel(a)
                        })
                    });
                    a.fadeOut("fast").hide.apply(a, c).dequeue()
                } else a.remove(), this._trigger("afterTagRemoved", null, {
                    tag: a,
                    tagLabel: this.tagLabel(a)
                })
            }
        },
        removeTagByLabel: function (a, b) {
            var c = this._findTagByLabel(a);
            if (!c) throw "No such tag exists with the name '" + a + "'";
            this.removeTag(c, b)
        },
        removeAll: function () {
            var a = this;
            this._tags().each(function (b, c) {
                a.removeTag(c, !1)
            })
        }
    })
})(jQuery);
var IN_GLOBAL_SCOPE = !0;
window.PR_SHOULD_USE_CONTINUATION = !0;
var prettyPrintOne, prettyPrint;
(function () {
    function L(a, I, h, d) {
        I && (a = {
            sourceCode: I,
            basePos: a
        }, h(a), d.push.apply(d, a.decorations))
    }
    function y(a, I) {
        for (var h = {}, d, c = a.concat(I), t = [], q = {}, l = 0, j = c.length; l < j; ++l) {
            var m = c[l],
                g = m[3];
            if (g) for (var B = g.length; 0 <= --B;) h[g.charAt(B)] = m;
            m = m[1];
            g = "" + m;
            q.hasOwnProperty(g) || (t.push(m), q[g] = null)
        }
        t.push(/[\0-\uffff]/);
        for (var r = function (f) {
                var d = f.charCodeAt(0);
                if (92 !== d) return d;
                var k = f.charAt(1);
                return (d = G[k]) ? d : "0" <= k && "7" >= k ? parseInt(f.substring(1), 8) : "u" === k || "x" === k ? parseInt(f.substring(2), 16) : f.charCodeAt(1)
            }, v = function (f) {
                if (32 > f) return (16 > f ? "\\x0" : "\\x") + f.toString(16);
                f = String.fromCharCode(f);
                return "\\" === f || "-" === f || "]" === f || "^" === f ? "\\" + f : f
            }, w = function (f) {
                var d = f.substring(1, f.length - 1).match(/\\u[0-9A-Fa-f]{4}|\\x[0-9A-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\s\S]|-|[^-\\]/g);
                f = [];
                var k = "^" === d[0],
                    a = ["["];
                k && a.push("^");
                for (var k = k ? 1 : 0, b = d.length; k < b; ++k) {
                    var n = d[k];
                    if (/\\[bdsw]/i.test(n)) a.push(n);
                    else {
                        var n = r(n),
                            e;
                        k + 2 < b && "-" === d[k + 1] ? (e = r(d[k + 2]), k += 2) : e = n;
                        f.push([n, e]);
                        65 > e || 122 < n || (65 > e || 90 < n || f.push([Math.max(65, n) | 32, Math.min(e, 90) | 32]), 97 > e || 122 < n || f.push([Math.max(97, n) & -33, Math.min(e, 122) & -33]))
                    }
                }
                f.sort(function (b, f) {
                    return b[0] - f[0] || f[1] - b[1]
                });
                d = [];
                b = [];
                for (k = 0; k < f.length; ++k) n = f[k], n[0] <= b[1] + 1 ? b[1] = Math.max(b[1], n[1]) : d.push(b = n);
                for (k = 0; k < d.length; ++k) n = d[k], a.push(v(n[0])), n[1] > n[0] && (n[1] + 1 > n[0] && a.push("-"), a.push(v(n[1])));
                a.push("]");
                return a.join("")
            }, c = function (f) {
                for (var d = f.source.match(RegExp("(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)", "g")), a = d.length, h = [], b = 0, n = 0; b < a; ++b) {
                    var e = d[b];
                    "(" === e ? ++n : "\\" === e.charAt(0) && (e = +e.substring(1)) && (e <= n ? h[e] = -1 : d[b] = v(e))
                }
                for (b = 1; b < h.length; ++b) - 1 === h[b] && (h[b] = ++ba);
                for (n = b = 0; b < a; ++b) e = d[b], "(" === e ? (++n, h[n] || (d[b] = "(?:")) : "\\" === e.charAt(0) && (e = +e.substring(1)) && e <= n && (d[b] = "\\" + h[e]);
                for (b = 0; b < a; ++b)"^" === d[b] && "^" !== d[b + 1] && (d[b] = "");
                if (f.ignoreCase && p) for (b = 0; b < a; ++b) e = d[b], f = e.charAt(0), 2 <= e.length && "[" === f ? d[b] = w(e) : "\\" !== f && (d[b] = e.replace(/[a-zA-Z]/g, function (d) {
                    d = d.charCodeAt(0);
                    return "[" + String.fromCharCode(d & -33, d | 32) + "]"
                }));
                return d.join("")
            }, ba = 0, p = !1, q = !1, l = 0, j = t.length; l < j; ++l) if (m = t[l], m.ignoreCase) q = !0;
        else if (/[a-z]/i.test(m.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi, ""))) {
            p = !0;
            q = !1;
            break
        }
        for (var G = {
            b: 8,
            t: 9,
            n: 10,
            v: 11,
            f: 12,
            r: 13
        }, g = [], l = 0, j = t.length; l < j; ++l) {
            m = t[l];
            if (m.global || m.multiline) throw Error("" + m);
            g.push("(?:" + c(m) + ")")
        }
        d = RegExp(g.join("|"), q ? "gi" : "g");
        var J = I.length,
            z = function (f) {
                for (var a = f.basePos, k = [a, s], v = 0, b = f.sourceCode.match(d) || [], n = {}, e = 0, m = b.length; e < m; ++e) {
                    var g = b[e],
                        p = n[g],
                        l = void 0,
                        c;
                    if ("string" === typeof p) c = !1;
                    else {
                        var j = h[g.charAt(0)];
                        if (j) l = g.match(j[1]), p = j[0];
                        else {
                            for (c = 0; c < J; ++c) if (j = I[c], l = g.match(j[1])) {
                                p = j[0];
                                break
                            }
                            l || (p = s)
                        }
                        if ((c = 5 <= p.length && "lang-" === p.substring(0, 5)) && !(l && "string" === typeof l[1])) c = !1, p = P;
                        c || (n[g] = p)
                    }
                    j = v;
                    v += g.length;
                    if (c) {
                        c = l[1];
                        var w = g.indexOf(c),
                            q = w + c.length;
                        l[2] && (q = g.length - l[2].length, w = q - c.length);
                        p = p.substring(5);
                        L(a + j, g.substring(0, w), z, k);
                        L(a + j + w, c, Q(p, c), k);
                        L(a + j + q, g.substring(q), z, k)
                    } else k.push(a + j, p)
                }
                f.decorations = k
            };
        return z
    }
    function r(a) {
        var c = [],
            h = [];
        a.tripleQuotedStrings ? c.push([E, /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/, null, "'\""]) : a.multiLineStrings ? c.push([E, /^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/, null, "'\"`"]) : c.push([E, /^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/, null, "\"'"]);
        a.verbatimStrings && h.push([E, /^@\"(?:[^\"]|\"\")*(?:\"|$)/, null]);
        var d = a.hashComments;
        d && (a.cStyleComments ? (1 < d ? c.push([u, /^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/, null, "#"]) : c.push([u, /^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/, null, "#"]), h.push([E, /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/, null])) : c.push([u, /^#[^\r\n]*/, null, "#"]));
        a.cStyleComments && (h.push([u, /^\/\/[^\r\n]*/, null]), h.push([u, /^\/\*[\s\S]*?(?:\*\/|$)/, null]));
        if (d = a.regexLiterals) {
            var r = (d = 1 < d ? "" : "\n\r") ? "." : "[\\S\\s]";
            h.push(["lang-regex", RegExp("^" + ca + "(" + ("/(?=[^/*" + d + "])(?:[^/\\x5B\\x5C" + d + "]|\\x5C" + r + "|\\x5B(?:[^\\x5C\\x5D" + d + "]|\\x5C" + r + ")*(?:\\x5D|$))+/") + ")")])
        }(d = a.types) && h.push([M, d]);
        d = ("" + a.keywords).replace(/^ | $/g, "");
        d.length && h.push([R, RegExp("^(?:" + d.replace(/[\s,]+/g, "|") + ")\\b"), null]);
        c.push([s, /^\s+/, null, " \r\n\t\u00a0"]);
        d = "^.[^\\s\\w.$@'\"`/\\\\]*";
        a.regexLiterals && (d += "(?!s*/)");
        h.push([N, /^@[a-z_$][a-z_$@0-9]*/i, null], [M, /^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/, null], [s, /^[a-z_$][a-z_$@0-9]*/i, null], [N, /^(?:0x[a-f0-9]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+\-]?\d+)?)[a-z]*/i, null, "0123456789"], [s, /^\\[\s\S]?/, null], [H, RegExp(d), null]);
        return y(c, h)
    }
    function S(a, c, h) {
        function d(a) {
            var c = a.nodeType;
            if (1 == c && !t.test(a.className)) if ("br" === a.nodeName) r(a), a.parentNode && a.parentNode.removeChild(a);
            else for (a = a.firstChild; a; a = a.nextSibling) d(a);
            else if ((3 == c || 4 == c) && h) {
                var g = a.nodeValue,
                    p = g.match(q);
                p && (c = g.substring(0, p.index), a.nodeValue = c, (g = g.substring(p.index + p[0].length)) && a.parentNode.insertBefore(l.createTextNode(g), a.nextSibling), r(a), c || a.parentNode.removeChild(a))
            }
        }
        function r(a) {
            function d(a, c) {
                var g = c ? a.cloneNode(!1) : a,
                    h = a.parentNode;
                if (h) {
                    var h = d(h, 1),
                        f = a.nextSibling;
                    h.appendChild(g);
                    for (var m = f; m; m = f) f = m.nextSibling, h.appendChild(m)
                }
                return g
            }
            for (; !a.nextSibling;) if (a = a.parentNode, !a) return;
            a = d(a.nextSibling, 0);
            for (var c;
            (c = a.parentNode) && 1 === c.nodeType;) a = c;
            m.push(a)
        }
        for (var t = /(?:^|\s)nocode(?:\s|$)/, q = /\r\n?|\n/, l = a.ownerDocument, j = l.createElement("li"); a.firstChild;) j.appendChild(a.firstChild);
        for (var m = [j], g = 0; g < m.length; ++g) d(m[g]);
        c === (c | 0) && m[0].setAttribute("value", c);
        var B = l.createElement("ol");
        B.className = "linenums";
        c = Math.max(0, c - 1 | 0) || 0;
        for (var g = 0, s = m.length; g < s; ++g) j = m[g], j.className = "L" + (g + c) % 10, j.firstChild || j.appendChild(l.createTextNode("\u00a0")), B.appendChild(j);
        a.appendChild(B)
    }
    function c(a, c) {
        for (var h = c.length; 0 <= --h;) {
            var d = c[h];
            F.hasOwnProperty(d) ? K.console && console.warn("cannot override language handler %s", d) : F[d] = a
        }
    }
    function Q(a, c) {
        if (!a || !F.hasOwnProperty(a)) a = /^\s*</.test(c) ? "default-markup" : "default-code";
        return F[a]
    }
    function T(a) {
        var c = a.langExtension;
        try {
            var h, d = a.pre,
                r = function (a) {
                    var b = a.nodeType;
                    if (1 == b) {
                        if (!t.test(a.className)) {
                            for (b = a.firstChild; b; b = b.nextSibling) r(b);
                            b = a.nodeName.toLowerCase();
                            if ("br" === b || "li" === b) q[m] = "\n", j[m << 1] = l++, j[m++ << 1 | 1] = a
                        }
                    } else if (3 == b || 4 == b) b = a.nodeValue, b.length && (b = d ? b.replace(/\r\n?/g, "\n") : b.replace(/[ \t\r\n]+/g, " "), q[m] = b, j[m << 1] = l, l += b.length, j[m++ << 1 | 1] = a)
                },
                t = /(?:^|\s)nocode(?:\s|$)/,
                q = [],
                l = 0,
                j = [],
                m = 0;
            r(a.sourceNode);
            h = {
                sourceCode: q.join("").replace(/\n$/, ""),
                spans: j
            };
            var g = h.sourceCode;
            a.sourceCode = g;
            a.spans = h.spans;
            a.basePos = 0;
            Q(c, g)(a);
            var B = /\bMSIE\s(\d+)/.exec(navigator.userAgent),
                B = B && 8 >= +B[1],
                c = /\n/g,
                s = a.sourceCode,
                v = s.length;
            h = 0;
            var w = a.spans,
                A = w.length,
                g = 0,
                p = a.decorations,
                G = p.length,
                J = 0;
            p[G] = v;
            var z, f;
            for (f = z = 0; f < G;) p[f] !== p[f + 2] ? (p[z++] = p[f++], p[z++] = p[f++]) : f += 2;
            G = z;
            for (f = z = 0; f < G;) {
                for (var E = p[f], k = p[f + 1], D = f + 2; D + 2 <= G && p[D + 1] === k;) D += 2;
                p[z++] = E;
                p[z++] = k;
                f = D
            }
            p.length = z;
            var b = a.sourceNode,
                n;
            b && (n = b.style.display, b.style.display = "none");
            try {
                for (; g < A;) {
                    var e = w[g + 2] || v,
                        O = p[J + 2] || v,
                        D = Math.min(e, O),
                        C = w[g + 1],
                        u;
                    if (1 !== C.nodeType && (u = s.substring(h, D))) {
                        B && (u = u.replace(c, "\r"));
                        C.nodeValue = u;
                        var y = C.ownerDocument,
                            x = y.createElement("span");
                        x.className = p[J + 1];
                        var H = C.parentNode;
                        H.replaceChild(x, C);
                        x.appendChild(C);
                        h < e && (w[g + 1] = C = y.createTextNode(s.substring(D, e)), H.insertBefore(C, x.nextSibling))
                    }
                    h = D;
                    h >= e && (g += 2);
                    h >= O && (J += 2)
                }
            } finally {
                b && (b.style.display = n)
            }
        } catch (F) {
            K.console && console.log(F && F.stack || F)
        }
    }
    function U(a, c, h) {
        var d = document.createElement("div");
        d.innerHTML = "<pre>" + a + "</pre>";
        d = d.firstChild;
        h && S(d, h, !0);
        T({
            langExtension: c,
            numberLines: h,
            sourceNode: d,
            pre: 1
        });
        return d.innerHTML
    }
    function V(a, c) {
        function h() {
            for (var d = K.PR_SHOULD_USE_CONTINUATION ? m.now() + 250 : Infinity; g < t.length && m.now() < d; g++) {
                for (var c = t[g], l = y, k = c; k = k.previousSibling;) {
                    var j = k.nodeType,
                        b = (7 === j || 8 === j) && k.nodeValue;
                    if (b ? !/^\??prettify\b/.test(b) : 3 !== j || /\S/.test(k.nodeValue)) break;
                    if (b) {
                        l = {};
                        b.replace(/\b(\w+)=([\w:.%+-]+)/g, function (a, b, c) {
                            l[b] = c
                        });
                        break
                    }
                }
                k = c.className;
                if ((l !== y || v.test(k)) && !w.test(k)) {
                    j = !1;
                    for (b = c.parentNode; b; b = b.parentNode) if (A.test(b.tagName) && b.className && v.test(b.className)) {
                        j = !0;
                        break
                    }
                    if (!j) {
                        c.className += " prettyprinted";
                        j = l.lang;
                        if (!j) {
                            var j = k.match(u),
                                n;
                            if (b = !j) {
                                for (var b = c, e = void 0, q = b.firstChild; q; q = q.nextSibling) var C = q.nodeType,
                                    e = 1 === C ? e ? b : q : 3 === C ? da.test(q.nodeValue) ? b : e : e;
                                b = (n = e === b ? void 0 : e) && p.test(n.tagName)
                            }
                            b && (j = n.className.match(u));
                            j && (j = j[1])
                        }
                        x.test(c.tagName) ? b = 1 : (b = c.currentStyle, e = r.defaultView, b = (b = b ? b.whiteSpace : e && e.getComputedStyle ? e.getComputedStyle(c, null).getPropertyValue("white-space") : 0) && "pre" === b.substring(0, 3));
                        e = l.linenums;
                        if (!(e = "true" === e || +e)) e = (e = k.match(/\blinenums\b(?::(\d+))?/)) ? e[1] && e[1].length ? +e[1] : !0 : !1;
                        e && S(c, e, b);
                        s = {
                            langExtension: j,
                            sourceNode: c,
                            numberLines: e,
                            pre: b
                        };
                        T(s)
                    }
                }
            }
            g < t.length ? setTimeout(h, 250) : "function" === typeof a && a()
        }
        for (var d = c || document.body, r = d.ownerDocument || document, d = [d.getElementsByTagName("pre"), d.getElementsByTagName("code"), d.getElementsByTagName("xmp")], t = [], q = 0; q < d.length; ++q) for (var l = 0, j = d[q].length; l < j; ++l) t.push(d[q][l]);
        var d = null,
            m = Date;
        m.now || (m = {
            now: function () {
                return +new Date
            }
        });
        var g = 0,
            s, u = /\blang(?:uage)?-([\w.]+)(?!\S)/,
            v = /\bprettyprint\b/,
            w = /\bprettyprinted\b/,
            x = /pre|xmp/i,
            p = /^code$/i,
            A = /^(?:pre|code|xmp)$/i,
            y = {};
        h()
    }
    var K = window,
        A = ["break,continue,do,else,for,if,return,while"],
        x = [
            [A, "auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"], "catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],
        W = [x, "alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],
        X = [x, "abstract,assert,boolean,byte,extends,final,finally,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],
        Y = [X, "as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,internal,into,is,let,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],
        x = [x, "debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],
        Z = [A, "and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],
        $ = [A, "alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],
        ea = [A, "as,assert,const,copy,drop,enum,extern,fail,false,fn,impl,let,log,loop,match,mod,move,mut,priv,pub,pure,ref,self,static,struct,true,trait,type,unsafe,use"],
        A = [A, "case,done,elif,esac,eval,fi,function,in,local,set,then,until"],
        aa = /^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,
        E = "str",
        R = "kwd",
        u = "com",
        M = "typ",
        N = "lit",
        H = "pun",
        s = "pln",
        P = "src",
        ca = "(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*",
        da = /\S/,
        fa = r({
            keywords: [W, Y, x, "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END", Z, $, A],
            hashComments: !0,
            cStyleComments: !0,
            multiLineStrings: !0,
            regexLiterals: !0
        }),
        F = {};
    c(fa, ["default-code"]);
    c(y([], [
        [s, /^[^<?]+/],
        ["dec", /^<!\w[^>]*(?:>|$)/],
        [u, /^<\!--[\s\S]*?(?:-\->|$)/],
        ["lang-", /^<\?([\s\S]+?)(?:\?>|$)/],
        ["lang-", /^<%([\s\S]+?)(?:%>|$)/],
        [H, /^(?:<[%?]|[%?]>)/],
        ["lang-", /^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],
        ["lang-js", /^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],
        ["lang-css", /^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],
        ["lang-in.tag", /^(<\/?[a-z][^<>]*>)/i]
    ]), "default-markup htm html mxml xhtml xml xsl".split(" "));
    c(y([
        [s, /^[\s]+/, null, " \t\r\n"],
        ["atv", /^(?:\"[^\"]*\"?|\'[^\']*\'?)/, null, "\"'"]
    ], [
        ["tag", /^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],
        ["atn", /^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],
        ["lang-uq.val", /^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],
        [H, /^[=<>\/]+/],
        ["lang-js", /^on\w+\s*=\s*\"([^\"]+)\"/i],
        ["lang-js", /^on\w+\s*=\s*\'([^\']+)\'/i],
        ["lang-js", /^on\w+\s*=\s*([^\"\'>\s]+)/i],
        ["lang-css", /^style\s*=\s*\"([^\"]+)\"/i],
        ["lang-css", /^style\s*=\s*\'([^\']+)\'/i],
        ["lang-css", /^style\s*=\s*([^\"\'>\s]+)/i]
    ]), ["in.tag"]);
    c(y([], [
        ["atv", /^[\s\S]+/]
    ]), ["uq.val"]);
    c(r({
        keywords: W,
        hashComments: !0,
        cStyleComments: !0,
        types: aa
    }), "c cc cpp cxx cyc m".split(" "));
    c(r({
        keywords: "null,true,false"
    }), ["json"]);
    c(r({
        keywords: Y,
        hashComments: !0,
        cStyleComments: !0,
        verbatimStrings: !0,
        types: aa
    }), ["cs"]);
    c(r({
        keywords: X,
        cStyleComments: !0
    }), ["java"]);
    c(r({
        keywords: A,
        hashComments: !0,
        multiLineStrings: !0
    }), ["bash", "bsh", "csh", "sh"]);
    c(r({
        keywords: Z,
        hashComments: !0,
        multiLineStrings: !0,
        tripleQuotedStrings: !0
    }), ["cv", "py", "python"]);
    c(r({
        keywords: "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",
        hashComments: !0,
        multiLineStrings: !0,
        regexLiterals: 2
    }), ["perl", "pl", "pm"]);
    c(r({
        keywords: $,
        hashComments: !0,
        multiLineStrings: !0,
        regexLiterals: !0
    }), ["rb", "ruby"]);
    c(r({
        keywords: x,
        cStyleComments: !0,
        regexLiterals: !0
    }), ["javascript", "js"]);
    c(r({
        keywords: "all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",
        hashComments: 3,
        cStyleComments: !0,
        multilineStrings: !0,
        tripleQuotedStrings: !0,
        regexLiterals: !0
    }), ["coffee"]);
    c(r({
        keywords: ea,
        cStyleComments: !0,
        multilineStrings: !0
    }), ["rc", "rs", "rust"]);
    c(y([], [
        [E, /^[\s\S]+/]
    ]), ["regex"]);
    var ga = K.PR = {
        createSimpleLexer: y,
        registerLangHandler: c,
        sourceDecorator: r,
        PR_ATTRIB_NAME: "atn",
        PR_ATTRIB_VALUE: "atv",
        PR_COMMENT: u,
        PR_DECLARATION: "dec",
        PR_KEYWORD: R,
        PR_LITERAL: N,
        PR_NOCODE: "nocode",
        PR_PLAIN: s,
        PR_PUNCTUATION: H,
        PR_SOURCE: P,
        PR_STRING: E,
        PR_TAG: "tag",
        PR_TYPE: M,
        prettyPrintOne: IN_GLOBAL_SCOPE ? K.prettyPrintOne = U : prettyPrintOne = U,
        prettyPrint: prettyPrint = IN_GLOBAL_SCOPE ? K.prettyPrint = V : prettyPrint = V
    };
    "function" === typeof define && define.amd && define("google-code-prettify", [], function () {
        return ga
    })
})();
PR.registerLangHandler(PR.createSimpleLexer([
    ["opn", /^[\(\{\[]+/, null, "([{"],
    ["clo", /^[\)\}\]]+/, null, ")]}"],
    [PR.PR_COMMENT, /^;[^\r\n]*/, null, ";"],
    [PR.PR_PLAIN, /^[\t\n\r \xA0]+/, null, "\t\n\r \u00a0"],
    [PR.PR_STRING, /^\"(?:[^\"\\]|\\[\s\S])*(?:\"|$)/, null, '"']
], [
    [PR.PR_KEYWORD, /^(?:def|if|do|let|quote|var|fn|loop|recur|throw|try|monitor-enter|monitor-exit|defmacro|defn|defn-|macroexpand|macroexpand-1|for|doseq|dosync|dotimes|and|or|when|not|assert|doto|proxy|defstruct|first|rest|cons|defprotocol|deftype|defrecord|reify|defmulti|defmethod|meta|with-meta|ns|in-ns|create-ns|import|intern|refer|alias|namespace|resolve|ref|deref|refset|new|set!|memfn|to-array|into-array|aset|gen-class|reduce|map|filter|find|nil?|empty?|hash-map|hash-set|vec|vector|seq|flatten|reverse|assoc|dissoc|list|list?|disj|get|union|difference|intersection|extend|extend-type|extend-protocol|prn)\b/, null],
    [PR.PR_TYPE, /^:[0-9a-zA-Z\-]+/]
]), ["clj"]);
PR.registerLangHandler(PR.createSimpleLexer([
    [PR.PR_PLAIN, /^[ \t\r\n\f]+/, null, " \t\r\n\f"]
], [
    [PR.PR_STRING, /^\"(?:[^\n\r\f\\\"]|\\(?:\r\n?|\n|\f)|\\[\s\S])*\"/, null],
    [PR.PR_STRING, /^\'(?:[^\n\r\f\\\']|\\(?:\r\n?|\n|\f)|\\[\s\S])*\'/, null],
    ["lang-css-str", /^url\(([^\)\"\']+)\)/i],
    [PR.PR_KEYWORD, /^(?:url|rgb|\!important|@import|@page|@media|@charset|inherit)(?=[^\-\w]|$)/i, null],
    ["lang-css-kw", /^(-?(?:[_a-z]|(?:\\[0-9a-f]+ ?))(?:[_a-z0-9\-]|\\(?:\\[0-9a-f]+ ?))*)\s*:/i],
    [PR.PR_COMMENT, /^\/\*[^*]*\*+(?:[^\/*][^*]*\*+)*\//],
    [PR.PR_COMMENT, /^(?:<\!--|--\>)/],
    [PR.PR_LITERAL, /^(?:\d+|\d*\.\d+)(?:%|[a-z]+)?/i],
    [PR.PR_LITERAL, /^#(?:[0-9a-f]{3}){1,2}\b/i],
    [PR.PR_PLAIN, /^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i],
    [PR.PR_PUNCTUATION, /^[^\s\w\'\"]+/]
]), ["css"]);
PR.registerLangHandler(PR.createSimpleLexer([], [
    [PR.PR_KEYWORD, /^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i]
]), ["css-kw"]);
PR.registerLangHandler(PR.createSimpleLexer([], [
    [PR.PR_STRING, /^[^\)\"\']+/]
]), ["css-str"]);
PR.registerLangHandler(PR.createSimpleLexer([
    [PR.PR_PLAIN, /^[\t\n\r \xA0]+/, null, "\t\n\r \u00a0"],
    [PR.PR_PLAIN, /^(?:\"(?:[^\"\\]|\\[\s\S])*(?:\"|$)|\'(?:[^\'\\]|\\[\s\S])+(?:\'|$)|`[^`]*(?:`|$))/, null, "\"'"]
], [
    [PR.PR_COMMENT, /^(?:\/\/[^\r\n]*|\/\*[\s\S]*?\*\/)/],
    [PR.PR_PLAIN, /^(?:[^\/\"\'`]|\/(?![\/\*]))+/i]
]), ["go"]);
PR.registerLangHandler(PR.createSimpleLexer([
    [PR.PR_PLAIN, /^[\t\n\x0B\x0C\r ]+/, null, "\t\n\x0B\f\r "],
    [PR.PR_STRING, /^\"(?:[^\"\\\n\x0C\r]|\\[\s\S])*(?:\"|$)/, null, '"'],
    [PR.PR_STRING, /^\'(?:[^\'\\\n\x0C\r]|\\[^&])\'?/, null, "'"],
    [PR.PR_LITERAL, /^(?:0o[0-7]+|0x[\da-f]+|\d+(?:\.\d+)?(?:e[+\-]?\d+)?)/i, null, "0123456789"]
], [
    [PR.PR_COMMENT, /^(?:(?:--+(?:[^\r\n\x0C]*)?)|(?:\{-(?:[^-]|-+[^-\}])*-\}))/],
    [PR.PR_KEYWORD, /^(?:case|class|data|default|deriving|do|else|if|import|in|infix|infixl|infixr|instance|let|module|newtype|of|then|type|where|_)(?=[^a-zA-Z0-9\']|$)/, null],
    [PR.PR_PLAIN, /^(?:[A-Z][\w\']*\.)*[a-zA-Z][\w\']*/],
    [PR.PR_PUNCTUATION, /^[^\t\n\x0B\x0C\r a-zA-Z0-9\'\"]+/]
]), ["hs"]);
PR.registerLangHandler(PR.createSimpleLexer([
    ["opn", /^\(+/, null, "("],
    ["clo", /^\)+/, null, ")"],
    [PR.PR_COMMENT, /^;[^\r\n]*/, null, ";"],
    [PR.PR_PLAIN, /^[\t\n\r \xA0]+/, null, "\t\n\r \u00a0"],
    [PR.PR_STRING, /^\"(?:[^\"\\]|\\[\s\S])*(?:\"|$)/, null, '"']
], [
    [PR.PR_KEYWORD, /^(?:block|c[ad]+r|catch|con[ds]|def(?:ine|un)|do|eq|eql|equal|equalp|eval-when|flet|format|go|if|labels|lambda|let|load-time-value|locally|macrolet|multiple-value-call|nil|progn|progv|quote|require|return-from|setq|symbol-macrolet|t|tagbody|the|throw|unwind)\b/, null],
    [PR.PR_LITERAL, /^[+\-]?(?:[0#]x[0-9a-f]+|\d+\/\d+|(?:\.\d+|\d+(?:\.\d*)?)(?:[ed][+\-]?\d+)?)/i],
    [PR.PR_LITERAL, /^\'(?:-*(?:\w|\\[\x21-\x7e])(?:[\w-]*|\\[\x21-\x7e])[=!?]?)?/],
    [PR.PR_PLAIN, /^-*(?:[a-z_]|\\[\x21-\x7e])(?:[\w-]*|\\[\x21-\x7e])[=!?]?/i],
    [PR.PR_PUNCTUATION, /^[^\w\t\n\r \xA0()\"\\\';]+/]
]), "cl el lisp lsp scm ss rkt".split(" "));
PR.registerLangHandler(PR.createSimpleLexer([
    [PR.PR_PLAIN, /^[\t\n\r \xA0]+/, null, "\t\n\r \u00a0"],
    [PR.PR_STRING, /^(?:\"(?:[^\"\\]|\\[\s\S])*(?:\"|$)|\'(?:[^\'\\]|\\[\s\S])*(?:\'|$))/, null, "\"'"]
], [
    [PR.PR_COMMENT, /^--(?:\[(=*)\[[\s\S]*?(?:\]\1\]|$)|[^\r\n]*)/],
    [PR.PR_STRING, /^\[(=*)\[[\s\S]*?(?:\]\1\]|$)/],
    [PR.PR_KEYWORD, /^(?:and|break|do|else|elseif|end|false|for|function|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/, null],
    [PR.PR_LITERAL, /^[+-]?(?:0x[\da-f]+|(?:(?:\.\d+|\d+(?:\.\d*)?)(?:e[+\-]?\d+)?))/i],
    [PR.PR_PLAIN, /^[a-z_]\w*/i],
    [PR.PR_PUNCTUATION, /^[^\w\t\n\r \xA0][^\w\t\n\r \xA0\"\'\-\+=]*/]
]), ["lua"]);
PR.registerLangHandler(PR.createSimpleLexer([
    [PR.PR_PLAIN, /^[\t\n\r \xA0]+/, null, "\t\n\r \u00a0"],
    [PR.PR_COMMENT, /^#(?:if[\t\n\r \xA0]+(?:[a-z_$][\w\']*|``[^\r\n\t`]*(?:``|$))|else|endif|light)/i, null, "#"],
    [PR.PR_STRING, /^(?:\"(?:[^\"\\]|\\[\s\S])*(?:\"|$)|\'(?:[^\'\\]|\\[\s\S])(?:\'|$))/, null, "\"'"]
], [
    [PR.PR_COMMENT, /^(?:\/\/[^\r\n]*|\(\*[\s\S]*?\*\))/],
    [PR.PR_KEYWORD, /^(?:abstract|and|as|assert|begin|class|default|delegate|do|done|downcast|downto|elif|else|end|exception|extern|false|finally|for|fun|function|if|in|inherit|inline|interface|internal|lazy|let|match|member|module|mutable|namespace|new|null|of|open|or|override|private|public|rec|return|static|struct|then|to|true|try|type|upcast|use|val|void|when|while|with|yield|asr|land|lor|lsl|lsr|lxor|mod|sig|atomic|break|checked|component|const|constraint|constructor|continue|eager|event|external|fixed|functor|global|include|method|mixin|object|parallel|process|protected|pure|sealed|trait|virtual|volatile)\b/],
    [PR.PR_LITERAL, /^[+\-]?(?:0x[\da-f]+|(?:(?:\.\d+|\d+(?:\.\d*)?)(?:e[+\-]?\d+)?))/i],
    [PR.PR_PLAIN, /^(?:[a-z_][\w']*[!?#]?|``[^\r\n\t`]*(?:``|$))/i],
    [PR.PR_PUNCTUATION, /^[^\t\n\r \xA0\"\'\w]+/]
]), ["fs", "ml"]);
PR.registerLangHandler(PR.createSimpleLexer([], []), ["none"]);
PR.registerLangHandler(PR.createSimpleLexer([
    [PR.PR_STRING, /^(?:\'(?:[^\'\r\n]|\\.)*(?:\'|$))/, null, "'"],
    [PR.PR_PLAIN, /^\s+/, null, " \r\n\t\u00a0"]
], [
    [PR.PR_COMMENT, /^(?:\/\/[^\r\n]*)|\(\*[\s\S]*?(?:\*\)|$)|^\{[\s\S]*?(?:\}|$)/, null],
    [PR.PR_KEYWORD, /^(?:AND|ARRAY|AS|ASM|BEGIN|CASE|CLASS|CONST|CONSTRUCTOR|DESTRUCTOR|DISPINTERFACE|DIV|DO|DOWNTO|ELSE|END|EXCEPT|EXPORTS|FILE|FINALIZATION|FINALLY|FOR|FUNCTION|GOTO|IF|IMPLEMENTATION|IN|INHERITED|INITIALIZATION|INLINE|INTERFACE|IS|LABEL|LIBRARY|MOD|NIL|NOT|OBJECT|OF|OR|PACKED|PROCEDURE|PROGRAM|PROPERTY|RAISE|RECORD|REPEAT|RESOURCESTRING|SET|SHL|SHR|STRING|THEN|THREADVAR|TO|TRY|TYPE|UNIT|UNTIL|USES|VAR|WHILE|WITH|XOR)\b/i, null],
    [PR.PR_LITERAL, /^(?:true|false|self|nil)/i, null],
    [PR.PR_PLAIN, /^[a-z][a-z0-9]*/i, null],
    [PR.PR_LITERAL, /^(?:\$[a-f0-9]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+\-]?\d+)?)/i, null, "0123456789"],
    [PR.PR_PUNCTUATION, /^.[^\s\w\.$@\'\/]*/, null]
]), ["pascal"]);
PR.registerLangHandler(PR.sourceDecorator({
    keywords: "bytes,default,double,enum,extend,extensions,false,group,import,max,message,option,optional,package,repeated,required,returns,rpc,service,syntax,to,true",
    types: /^(bool|(double|s?fixed|[su]?int)(32|64)|float|string)\b/,
    cStyleComments: !0
}), ["proto"]);
PR.registerLangHandler(PR.createSimpleLexer([
    [PR.PR_PLAIN, /^[\t\n\r \xA0]+/, null, "\t\n\r \u00a0"],
    [PR.PR_STRING, /^(?:"(?:(?:""(?:""?(?!")|[^\\"]|\\.)*"{0,3})|(?:[^"\r\n\\]|\\.)*"?))/, null, '"'],
    [PR.PR_LITERAL, /^`(?:[^\r\n\\`]|\\.)*`?/, null, "`"],
    [PR.PR_PUNCTUATION, /^[!#%&()*+,\-:;<=>?@\[\\\]^{|}~]+/, null, "!#%&()*+,-:;<=>?@[\\]^{|}~"]
], [
    [PR.PR_STRING, /^'(?:[^\r\n\\']|\\(?:'|[^\r\n']+))'/],
    [PR.PR_LITERAL, /^'[a-zA-Z_$][\w$]*(?!['$\w])/],
    [PR.PR_KEYWORD, /^(?:abstract|case|catch|class|def|do|else|extends|final|finally|for|forSome|if|implicit|import|lazy|match|new|object|override|package|private|protected|requires|return|sealed|super|throw|trait|try|type|val|var|while|with|yield)\b/],
    [PR.PR_LITERAL, /^(?:true|false|null|this)\b/],
    [PR.PR_LITERAL, /^(?:(?:0(?:[0-7]+|X[0-9A-F]+))L?|(?:(?:0|[1-9][0-9]*)(?:(?:\.[0-9]+)?(?:E[+\-]?[0-9]+)?F?|L?))|\\.[0-9]+(?:E[+\-]?[0-9]+)?F?)/i],
    [PR.PR_TYPE, /^[$_]*[A-Z][_$A-Z0-9]*[a-z][\w$]*/],
    [PR.PR_PLAIN, /^[$a-zA-Z_][\w$]*/],
    [PR.PR_COMMENT, /^\/(?:\/.*|\*(?:\/|\**[^*/]) * ( ? : \*+\/?) ? ) /],
    [PR.PR_PUNCTUATION, /^(?:\.+|\/)/]
]), ["scala"]);
PR.registerLangHandler(PR.createSimpleLexer([
    [PR.PR_PLAIN, /^[\t\n\r \xA0]+/, null, "\t\n\r \u00a0"],
    [PR.PR_STRING, /^(?:"(?:[^\"\\]|\\.)*"|'(?:[^\'\\]|\\.)*')/, null, "\"'"]
], [
    [PR.PR_COMMENT, /^(?:--[^\r\n]*|\/\*[\s\S]*?(?:\*\/|$))/],
    [PR.PR_KEYWORD, /^(?:ADD|ALL|ALTER|AND|ANY|APPLY|AS|ASC|AUTHORIZATION|BACKUP|BEGIN|BETWEEN|BREAK|BROWSE|BULK|BY|CASCADE|CASE|CHECK|CHECKPOINT|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMN|COMMIT|COMPUTE|CONNECT|CONSTRAINT|CONTAINS|CONTAINSTABLE|CONTINUE|CONVERT|CREATE|CROSS|CURRENT|CURRENT_DATE|CURRENT_TIME|CURRENT_TIMESTAMP|CURRENT_USER|CURSOR|DATABASE|DBCC|DEALLOCATE|DECLARE|DEFAULT|DELETE|DENY|DESC|DISK|DISTINCT|DISTRIBUTED|DOUBLE|DROP|DUMMY|DUMP|ELSE|END|ERRLVL|ESCAPE|EXCEPT|EXEC|EXECUTE|EXISTS|EXIT|FETCH|FILE|FILLFACTOR|FOLLOWING|FOR|FOREIGN|FREETEXT|FREETEXTTABLE|FROM|FULL|FUNCTION|GOTO|GRANT|GROUP|HAVING|HOLDLOCK|IDENTITY|IDENTITYCOL|IDENTITY_INSERT|IF|IN|INDEX|INNER|INSERT|INTERSECT|INTO|IS|JOIN|KEY|KILL|LEFT|LIKE|LINENO|LOAD|MATCH|MATCHED|MERGE|NATURAL|NATIONAL|NOCHECK|NONCLUSTERED|NOCYCLE|NOT|NULL|NULLIF|OF|OFF|OFFSETS|ON|OPEN|OPENDATASOURCE|OPENQUERY|OPENROWSET|OPENXML|OPTION|OR|ORDER|OUTER|OVER|PARTITION|PERCENT|PIVOT|PLAN|PRECEDING|PRECISION|PRIMARY|PRINT|PROC|PROCEDURE|PUBLIC|RAISERROR|READ|READTEXT|RECONFIGURE|REFERENCES|REPLICATION|RESTORE|RESTRICT|RETURN|REVOKE|RIGHT|ROLLBACK|ROWCOUNT|ROWGUIDCOL|ROWS?|RULE|SAVE|SCHEMA|SELECT|SESSION_USER|SET|SETUSER|SHUTDOWN|SOME|START|STATISTICS|SYSTEM_USER|TABLE|TEXTSIZE|THEN|TO|TOP|TRAN|TRANSACTION|TRIGGER|TRUNCATE|TSEQUAL|UNBOUNDED|UNION|UNIQUE|UNPIVOT|UPDATE|UPDATETEXT|USE|USER|USING|VALUES|VARYING|VIEW|WAITFOR|WHEN|WHERE|WHILE|WITH|WITHIN|WRITETEXT|XML)(?=[^\w-]|$)/i, null],
    [PR.PR_LITERAL, /^[+-]?(?:0x[\da-f]+|(?:(?:\.\d+|\d+(?:\.\d*)?)(?:e[+\-]?\d+)?))/i],
    [PR.PR_PLAIN, /^[a-z_][\w-]*/i],
    [PR.PR_PUNCTUATION, /^[^\w\t\n\r \xA0\"\'][^\w\t\n\r \xA0+\-\"\']*/]
]), ["sql"]);
PR.registerLangHandler(PR.createSimpleLexer([
    [PR.PR_PLAIN, /^[\t\n\r \xA0]+/, null, "\t\n\r \u00a0"],
    [PR.PR_COMMENT, /^%[^\r\n]*/, null, "%"]
], [
    [PR.PR_KEYWORD, /^\\[a-zA-Z@]+/],
    [PR.PR_KEYWORD, /^\\./],
    [PR.PR_TYPE, /^[$&]/],
    [PR.PR_LITERAL, /[+-]?(?:\.\d+|\d+(?:\.\d*)?)(cm|em|ex|in|pc|pt|bp|mm)/i],
    [PR.PR_PUNCTUATION, /^[{}()\[\]=]+/]
]), ["latex", "tex"]);
PR.registerLangHandler(PR.createSimpleLexer([
    [PR.PR_PLAIN, /^[\t\n\r \xA0\u2028\u2029]+/, null, "\t\n\r \u00a0\u2028\u2029"],
    [PR.PR_STRING, /^(?:[\"\u201C\u201D](?:[^\"\u201C\u201D]|[\"\u201C\u201D]{2})(?:[\"\u201C\u201D]c|$)|[\"\u201C\u201D](?:[^\"\u201C\u201D]|[\"\u201C\u201D]{2})*(?:[\"\u201C\u201D]|$))/i, null, '"\u201c\u201d'],
    [PR.PR_COMMENT, /^[\'\u2018\u2019](?:_(?:\r\n?|[^\r]?)|[^\r\n_\u2028\u2029])*/, null, "'\u2018\u2019"]
], [
    [PR.PR_KEYWORD, /^(?:AddHandler|AddressOf|Alias|And|AndAlso|Ansi|As|Assembly|Auto|Boolean|ByRef|Byte|ByVal|Call|Case|Catch|CBool|CByte|CChar|CDate|CDbl|CDec|Char|CInt|Class|CLng|CObj|Const|CShort|CSng|CStr|CType|Date|Decimal|Declare|Default|Delegate|Dim|DirectCast|Do|Double|Each|Else|ElseIf|End|EndIf|Enum|Erase|Error|Event|Exit|Finally|For|Friend|Function|Get|GetType|GoSub|GoTo|Handles|If|Implements|Imports|In|Inherits|Integer|Interface|Is|Let|Lib|Like|Long|Loop|Me|Mod|Module|MustInherit|MustOverride|MyBase|MyClass|Namespace|New|Next|Not|NotInheritable|NotOverridable|Object|On|Option|Optional|Or|OrElse|Overloads|Overridable|Overrides|ParamArray|Preserve|Private|Property|Protected|Public|RaiseEvent|ReadOnly|ReDim|RemoveHandler|Resume|Return|Select|Set|Shadows|Shared|Short|Single|Static|Step|Stop|String|Structure|Sub|SyncLock|Then|Throw|To|Try|TypeOf|Unicode|Until|Variant|Wend|When|While|With|WithEvents|WriteOnly|Xor|EndIf|GoSub|Let|Variant|Wend)\b/i, null],
    [PR.PR_COMMENT, /^REM\b[^\r\n\u2028\u2029]*/i],
    [PR.PR_LITERAL, /^(?:True\b|False\b|Nothing\b|\d+(?:E[+\-]?\d+[FRD]?|[FRDSIL])?|(?:&H[0-9A-F]+|&O[0-7]+)[SIL]?|\d*\.\d+(?:E[+\-]?\d+)?[FRD]?|#\s+(?:\d+[\-\/]\d+[\-\/]\d+(?:\s+\d+:\d+(?::\d+)?(\s*(?:AM|PM))?)?|\d+:\d+(?::\d+)?(\s*(?:AM|PM))?)\s+#)/i],
    [PR.PR_PLAIN, /^(?:(?:[a-z]|_\w)\w*(?:\[[%&@!#]+\])?|\[(?:[a-z]|_\w)\w*\])/i],
    [PR.PR_PUNCTUATION, /^[^\w\t\n\r \"\'\[\]\xA0\u2018\u2019\u201C\u201D\u2028\u2029]+/],
    [PR.PR_PUNCTUATION, /^(?:\[|\])/]
]), ["vb", "vbs"]);
PR.registerLangHandler(PR.createSimpleLexer([
    [PR.PR_PLAIN, /^[\t\n\r \xA0]+/, null, "\t\n\r \u00a0"]
], [
    [PR.PR_STRING, /^(?:[BOX]?"(?:[^\"]|"")*"|'.')/i],
    [PR.PR_COMMENT, /^--[^\r\n]*/],
    [PR.PR_KEYWORD, /^(?:abs|access|after|alias|all|and|architecture|array|assert|attribute|begin|block|body|buffer|bus|case|component|configuration|constant|disconnect|downto|else|elsif|end|entity|exit|file|for|function|generate|generic|group|guarded|if|impure|in|inertial|inout|is|label|library|linkage|literal|loop|map|mod|nand|new|next|nor|not|null|of|on|open|or|others|out|package|port|postponed|procedure|process|pure|range|record|register|reject|rem|report|return|rol|ror|select|severity|shared|signal|sla|sll|sra|srl|subtype|then|to|transport|type|unaffected|units|until|use|variable|wait|when|while|with|xnor|xor)(?=[^\w-]|$)/i, null],
    [PR.PR_TYPE, /^(?:bit|bit_vector|character|boolean|integer|real|time|string|severity_level|positive|natural|signed|unsigned|line|text|std_u?logic(?:_vector)?)(?=[^\w-]|$)/i, null],
    [PR.PR_TYPE, /^\'(?:ACTIVE|ASCENDING|BASE|DELAYED|DRIVING|DRIVING_VALUE|EVENT|HIGH|IMAGE|INSTANCE_NAME|LAST_ACTIVE|LAST_EVENT|LAST_VALUE|LEFT|LEFTOF|LENGTH|LOW|PATH_NAME|POS|PRED|QUIET|RANGE|REVERSE_RANGE|RIGHT|RIGHTOF|SIMPLE_NAME|STABLE|SUCC|TRANSACTION|VAL|VALUE)(?=[^\w-]|$)/i, null],
    [PR.PR_LITERAL, /^\d+(?:_\d+)*(?:#[\w\\.]+#(?:[+\-]?\d+(?:_\d+)*)?|(?:\.\d+(?:_\d+)*)?(?:E[+\-]?\d+(?:_\d+)*)?)/i],
    [PR.PR_PLAIN, /^(?:[a-z]\w*|\\[^\\]*\\)/i],
    [PR.PR_PUNCTUATION, /^[^\w\t\n\r \xA0\"\'][^\w\t\n\r \xA0\-\"\']*/]
]), ["vhdl", "vhd"]);
!
function (c, C) {
    function D(a, d, b, l, e) {
        var n = a.contents(),
            f = !1;
        a.empty();
        for (var p = 0, q = n.length; q > p && !f; p++) {
            var j = n[p],
                h = c(j);
            if ("undefined" != typeof j && !(3 == j.nodeType && 0 == c.trim(j.data).length)) {
                a.append(h);
                e && a[a.is("table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style") ? "after" : "append"](e);
                if (b.innerHeight() > l.maxHeight) {
                    if (3 == j.nodeType) {
                        var r = h,
                            f = d,
                            m = b,
                            j = l,
                            g = e,
                            k = r[0];
                        if (k) {
                            var t = E(k),
                                u = -1 !== t.indexOf(" ") ? " " : "\u3000",
                                u = "letter" == j.wrap ? "" : u,
                                v = t.split(u),
                                A = -1,
                                x = -1,
                                s = 0,
                                w = v.length - 1;
                            for (j.fallbackToLetter && 0 == w && w == s && (u = "", v = t.split(u), w = v.length - 1); w >= s && (0 != s || 0 != w);) {
                                var y = Math.floor((s + w) / 2);
                                if (y == x) break;
                                x = y;
                                B(k, v.slice(0, x + 1).join(u) + j.ellipsis);
                                m.innerHeight() > j.maxHeight ? w = x : (A = x, s = x)
                            } - 1 == A || 1 == v.length && 0 == v[0].length ? (m = r.parent(), r.remove(), r = g && g.closest(m).length ? g.length : 0, m.contents().length > r ? k = z(m.contents().eq(-1 - r), f) : (k = z(m, f, !0), r || m.remove()), k && (t = F(E(k), j), B(k, t), r && g && c(k).parent().append(g))) : (t = F(v.slice(0, A + 1).join(u), j), B(k, t));
                            f = !0
                        } else f = !1
                    } else f = D(h, d, b, l, e);
                    f || (h.remove(), f = !0)
                }
                f || e && e.detach()
            }
        }
        return f
    }
    function F(a, d) {
        for (; - 1 < c.inArray(a.slice(-1), d.lastCharacter.remove);) a = a.slice(0, -1);
        return 0 > c.inArray(a.slice(-1), d.lastCharacter.noEllipsis) && (a += d.ellipsis), a
    }
    function y(a) {
        return {
            width: a.innerWidth(),
            height: a.innerHeight()
        }
    }
    function B(a, c) {
        a.innerText ? a.innerText = c : a.nodeValue ? a.nodeValue = c : a.textContent && (a.textContent = c)
    }
    function E(a) {
        return a.innerText ? a.innerText : a.nodeValue ? a.nodeValue : a.textContent ? a.textContent : ""
    }
    function G(a) {
        do a = a.previousSibling;
        while (a && 1 !== a.nodeType && 3 !== a.nodeType);
        return a
    }
    function z(a, d, b) {
        var l = a && a[0];
        if (l) {
            if (!b) {
                if (3 === l.nodeType) return l;
                if (c.trim(a.text())) return z(a.contents().last(), d)
            }
            for (b = G(l); !b;) {
                if (a = a.parent(), a.is(d) || !a.length) return !1;
                b = G(a[0])
            }
            if (b) return z(c(b), d)
        }
        return !1
    }
    if (!c.fn.dotdotdot) {
        c.fn.dotdotdot = function (a) {
            if (0 == this.length) {
                if (!(a && !1 === a.debug)) {
                    var d = 'No element found for "' + this.selector + '".',
                        d = "string" == typeof d ? "dotdotdot: " + d : ["dotdotdot:", d];
                    "undefined" != typeof window.console && "undefined" != typeof window.console.log && window.console.log(d)
                }
                return this
            }
            if (1 < this.length) return this.each(function () {
                c(this).dotdotdot(a)
            });
            var b = this;
            b.data("dotdotdot") && b.trigger("destroy.dot");
            b.data("dotdotdot-style", b.attr("style") || "");
            b.css("word-wrap", "break-word");
            "nowrap" === b.css("white-space") && b.css("white-space", "normal");
            b.bind_events = function () {
                return b.bind("update.dot", function (a, m) {
                    a.preventDefault();
                    a.stopPropagation();
                    var g = e,
                        k;
                    if ("number" == typeof e.height) k = e.height;
                    else {
                        k = b.innerHeight();
                        for (var d = ["paddingTop", "paddingBottom"], f = 0, j = d.length; j > f; f++) {
                            var h = parseInt(b.css(d[f]), 10);
                            isNaN(h) && (h = 0);
                            k -= h
                        }
                    }
                    g.maxHeight = k;
                    e.maxHeight += e.tolerance;
                    "undefined" != typeof m && (("string" == typeof m || m instanceof HTMLElement) && (m = c("<div />").append(m).contents()), m instanceof c && (l = m));
                    q = b.wrapInner('<div class="dotdotdot" />').children();
                    q.empty().append(l.clone(!0)).find("br").replaceWith("  <br />  ").end().css({
                        height: "auto",
                        width: "auto",
                        border: "none",
                        padding: 0,
                        margin: 0
                    });
                    g = d = !1;
                    n.afterElement && (d = n.afterElement.clone(!0), d.show(), n.afterElement.remove());
                    if (q.innerHeight() > e.maxHeight) if ("children" == e.wrap) {
                        g = q;
                        k = e;
                        f = g.children();
                        j = !1;
                        g.empty();
                        for (var h = 0, p = f.length; p > h; h++) {
                            var s = f.eq(h);
                            if (g.append(s), d && g.append(d), g.innerHeight() > k.maxHeight) {
                                s.remove();
                                j = !0;
                                break
                            }
                            d && d.detach()
                        }
                        g = j
                    } else g = D(q, b, q, e, d);
                    return q.replaceWith(q.contents()), q = null, c.isFunction(e.callback) && e.callback.call(b[0], g, l), n.isTruncated = g, g
                }).bind("isTruncated.dot", function (a, c) {
                    return a.preventDefault(), a.stopPropagation(), "function" == typeof c && c.call(b[0], n.isTruncated), n.isTruncated
                }).bind("originalContent.dot", function (a, c) {
                    return a.preventDefault(), a.stopPropagation(), "function" == typeof c && c.call(b[0], l), l
                }).bind("destroy.dot", function (a) {
                    a.preventDefault();
                    a.stopPropagation();
                    b.unwatch().unbind_events().empty().append(l).attr("style", b.data("dotdotdot-style") || "").data("dotdotdot", !1)
                }), b
            };
            b.unbind_events = function () {
                return b.unbind(".dot"), b
            };
            b.watch = function () {
                if (b.unwatch(), "window" == e.watch) {
                    var a = c(window),
                        d = a.width(),
                        g = a.height();
                    a.bind("resize.dot" + n.dotId, function () {
                        d == a.width() && g == a.height() && e.windowResizeFix || (d = a.width(), g = a.height(), p && clearInterval(p), p = setTimeout(function () {
                            b.trigger("update.dot")
                        }, 10))
                    })
                } else f = y(b), p = setInterval(function () {
                    var a = y(b);
                    (f.width != a.width || f.height != a.height) && (b.trigger("update.dot"), f = y(b))
                }, 100);
                return b
            };
            b.unwatch = function () {
                return c(window).unbind("resize.dot" + n.dotId), p && clearInterval(p), b
            };
            var l = b.contents(),
                e = c.extend(!0, {}, c.fn.dotdotdot.defaults, a),
                n = {},
                f = {},
                p = null,
                q = null;
            e.lastCharacter.remove instanceof Array || (e.lastCharacter.remove = c.fn.dotdotdot.defaultArrays.lastCharacter.remove);
            e.lastCharacter.noEllipsis instanceof Array || (e.lastCharacter.noEllipsis = c.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis);
            var d = n,
                j, h = e.after;
            j = h ? "string" == typeof h ? (h = c(h, b), h.length ? h : !1) : h.jquery ? h : !1 : !1;
            return d.afterElement = j, n.isTruncated = !1, n.dotId = H++, b.data("dotdotdot", !0).bind_events().trigger("update.dot"), e.watch && b.watch(), b
        };
        c.fn.dotdotdot.defaults = {
            ellipsis: "... ",
            wrap: "word",
            fallbackToLetter: !0,
            lastCharacter: {},
            tolerance: 0,
            callback: null,
            after: null,
            height: null,
            watch: !1,
            windowResizeFix: !0,
            debug: !1
        };
        c.fn.dotdotdot.defaultArrays = {
            lastCharacter: {
                remove: " \u3000,;.!?".split(""),
                noEllipsis: []
            }
        };
        var H = 1,
            I = c.fn.html;
        c.fn.html = function (a) {
            return a != C && !c.isFunction(a) && this.data("dotdotdot") ? this.trigger("update", [a]) : I.apply(this, arguments)
        };
        var J = c.fn.text;
        c.fn.text = function (a) {
            return a != C && !c.isFunction(a) && this.data("dotdotdot") ? (a = c("<div />").text(a).html(), this.trigger("update", [a])) : J.apply(this, arguments)
        }
    }
}(jQuery);
/*! Hammer.JS - v1.0.5 - 2013-04-07
 * http://eightmedia.github.com/hammer.js
 *
 * Copyright (c) 2013 Jorik Tangelder <j.tangelder@gmail.com>;
 * Licensed under the MIT license */

(function (t, e) {
    "use strict";

    function n() {
        if (!i.READY) {
            i.event.determineEventTypes();
            for (var t in i.gestures) i.gestures.hasOwnProperty(t) && i.detection.register(i.gestures[t]);
            i.event.onTouch(i.DOCUMENT, i.EVENT_MOVE, i.detection.detect), i.event.onTouch(i.DOCUMENT, i.EVENT_END, i.detection.detect), i.READY = !0
        }
    }
    var i = function (t, e) {
            return new i.Instance(t, e || {})
        };
    i.defaults = {
        stop_browser_behavior: {
            userSelect: "none",
            touchAction: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    }, i.HAS_POINTEREVENTS = navigator.pointerEnabled || navigator.msPointerEnabled, i.HAS_TOUCHEVENTS = "ontouchstart" in t, i.MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i, i.NO_MOUSEEVENTS = i.HAS_TOUCHEVENTS && navigator.userAgent.match(i.MOBILE_REGEX), i.EVENT_TYPES = {}, i.DIRECTION_DOWN = "down", i.DIRECTION_LEFT = "left", i.DIRECTION_UP = "up", i.DIRECTION_RIGHT = "right", i.POINTER_MOUSE = "mouse", i.POINTER_TOUCH = "touch", i.POINTER_PEN = "pen", i.EVENT_START = "start", i.EVENT_MOVE = "move", i.EVENT_END = "end", i.DOCUMENT = document, i.plugins = {}, i.READY = !1, i.Instance = function (t, e) {
        var r = this;
        return n(), this.element = t, this.enabled = !0, this.options = i.utils.extend(i.utils.extend({}, i.defaults), e || {}), this.options.stop_browser_behavior && i.utils.stopDefaultBrowserBehavior(this.element, this.options.stop_browser_behavior), i.event.onTouch(t, i.EVENT_START, function (t) {
            r.enabled && i.detection.startDetect(r, t)
        }), this
    }, i.Instance.prototype = {
        on: function (t, e) {
            for (var n = t.split(" "), i = 0; n.length > i; i++) this.element.addEventListener(n[i], e, !1);
            return this
        },
        off: function (t, e) {
            for (var n = t.split(" "), i = 0; n.length > i; i++) this.element.removeEventListener(n[i], e, !1);
            return this
        },
        trigger: function (t, e) {
            var n = i.DOCUMENT.createEvent("Event");
            n.initEvent(t, !0, !0), n.gesture = e;
            var r = this.element;
            return i.utils.hasParent(e.target, r) && (r = e.target), r.dispatchEvent(n), this
        },
        enable: function (t) {
            return this.enabled = t, this
        }
    };
    var r = null,
        o = !1,
        s = !1;
    i.event = {
        bindDom: function (t, e, n) {
            for (var i = e.split(" "), r = 0; i.length > r; r++) t.addEventListener(i[r], n, !1)
        },
        onTouch: function (t, e, n) {
            var a = this;
            this.bindDom(t, i.EVENT_TYPES[e], function (c) {
                var u = c.type.toLowerCase();
                if (!u.match(/mouse/) || !s) {
                    (u.match(/touch/) || u.match(/pointerdown/) || u.match(/mouse/) && 1 === c.which) && (o = !0), u.match(/touch|pointer/) && (s = !0);
                    var h = 0;
                    o && (i.HAS_POINTEREVENTS && e != i.EVENT_END ? h = i.PointerEvent.updatePointer(e, c) : u.match(/touch/) ? h = c.touches.length : s || (h = u.match(/up/) ? 0 : 1), h > 0 && e == i.EVENT_END ? e = i.EVENT_MOVE : h || (e = i.EVENT_END), h || null === r ? r = c : c = r, n.call(i.detection, a.collectEventData(t, e, c)), i.HAS_POINTEREVENTS && e == i.EVENT_END && (h = i.PointerEvent.updatePointer(e, c))), h || (r = null, o = !1, s = !1, i.PointerEvent.reset())
                }
            })
        },
        determineEventTypes: function () {
            var t;
            t = i.HAS_POINTEREVENTS ? i.PointerEvent.getEvents() : i.NO_MOUSEEVENTS ? ["touchstart", "touchmove", "touchend touchcancel"] : ["touchstart mousedown", "touchmove mousemove", "touchend touchcancel mouseup"], i.EVENT_TYPES[i.EVENT_START] = t[0], i.EVENT_TYPES[i.EVENT_MOVE] = t[1], i.EVENT_TYPES[i.EVENT_END] = t[2]
        },
        getTouchList: function (t) {
            return i.HAS_POINTEREVENTS ? i.PointerEvent.getTouchList() : t.touches ? t.touches : [{
                identifier: 1,
                pageX: t.pageX,
                pageY: t.pageY,
                target: t.target
            }]
        },
        collectEventData: function (t, e, n) {
            var r = this.getTouchList(n, e),
                o = i.POINTER_TOUCH;
            return (n.type.match(/mouse/) || i.PointerEvent.matchType(i.POINTER_MOUSE, n)) && (o = i.POINTER_MOUSE), {
                center: i.utils.getCenter(r),
                timeStamp: (new Date).getTime(),
                target: n.target,
                touches: r,
                eventType: e,
                pointerType: o,
                srcEvent: n,
                preventDefault: function () {
                    this.srcEvent.preventManipulation && this.srcEvent.preventManipulation(), this.srcEvent.preventDefault && this.srcEvent.preventDefault()
                },
                stopPropagation: function () {
                    this.srcEvent.stopPropagation()
                },
                stopDetect: function () {
                    return i.detection.stopDetect()
                }
            }
        }
    }, i.PointerEvent = {
        pointers: {},
        getTouchList: function () {
            var t = this,
                e = [];
            return Object.keys(t.pointers).sort().forEach(function (n) {
                e.push(t.pointers[n])
            }), e
        },
        updatePointer: function (t, e) {
            return t == i.EVENT_END ? this.pointers = {} : (e.identifier = e.pointerId, this.pointers[e.pointerId] = e), Object.keys(this.pointers).length
        },
        matchType: function (t, e) {
            if (!e.pointerType) return !1;
            var n = {};
            return n[i.POINTER_MOUSE] = e.pointerType == e.MSPOINTER_TYPE_MOUSE || e.pointerType == i.POINTER_MOUSE, n[i.POINTER_TOUCH] = e.pointerType == e.MSPOINTER_TYPE_TOUCH || e.pointerType == i.POINTER_TOUCH, n[i.POINTER_PEN] = e.pointerType == e.MSPOINTER_TYPE_PEN || e.pointerType == i.POINTER_PEN, n[t]
        },
        getEvents: function () {
            return ["pointerdown MSPointerDown", "pointermove MSPointerMove", "pointerup pointercancel MSPointerUp MSPointerCancel"]
        },
        reset: function () {
            this.pointers = {}
        }
    }, i.utils = {
        extend: function (t, n, i) {
            for (var r in n) t[r] !== e && i || (t[r] = n[r]);
            return t
        },
        hasParent: function (t, e) {
            for (; t;) {
                if (t == e) return !0;
                t = t.parentNode
            }
            return !1
        },
        getCenter: function (t) {
            for (var e = [], n = [], i = 0, r = t.length; r > i; i++) e.push(t[i].pageX), n.push(t[i].pageY);
            return {
                pageX: (Math.min.apply(Math, e) + Math.max.apply(Math, e)) / 2,
                pageY: (Math.min.apply(Math, n) + Math.max.apply(Math, n)) / 2
            }
        },
        getVelocity: function (t, e, n) {
            return {
                x: Math.abs(e / t) || 0,
                y: Math.abs(n / t) || 0
            }
        },
        getAngle: function (t, e) {
            var n = e.pageY - t.pageY,
                i = e.pageX - t.pageX;
            return 180 * Math.atan2(n, i) / Math.PI
        },
        getDirection: function (t, e) {
            var n = Math.abs(t.pageX - e.pageX),
                r = Math.abs(t.pageY - e.pageY);
            return n >= r ? t.pageX - e.pageX > 0 ? i.DIRECTION_LEFT : i.DIRECTION_RIGHT : t.pageY - e.pageY > 0 ? i.DIRECTION_UP : i.DIRECTION_DOWN
        },
        getDistance: function (t, e) {
            var n = e.pageX - t.pageX,
                i = e.pageY - t.pageY;
            return Math.sqrt(n * n + i * i)
        },
        getScale: function (t, e) {
            return t.length >= 2 && e.length >= 2 ? this.getDistance(e[0], e[1]) / this.getDistance(t[0], t[1]) : 1
        },
        getRotation: function (t, e) {
            return t.length >= 2 && e.length >= 2 ? this.getAngle(e[1], e[0]) - this.getAngle(t[1], t[0]) : 0
        },
        isVertical: function (t) {
            return t == i.DIRECTION_UP || t == i.DIRECTION_DOWN
        },
        stopDefaultBrowserBehavior: function (t, e) {
            var n, i = ["webkit", "khtml", "moz", "ms", "o", ""];
            if (e && t.style) {
                for (var r = 0; i.length > r; r++) for (var o in e) e.hasOwnProperty(o) && (n = o, i[r] && (n = i[r] + n.substring(0, 1).toUpperCase() + n.substring(1)), t.style[n] = e[o]);
                "none" == e.userSelect && (t.onselectstart = function () {
                    return !1
                })
            }
        }
    }, i.detection = {
        gestures: [],
        current: null,
        previous: null,
        stopped: !1,
        startDetect: function (t, e) {
            this.current || (this.stopped = !1, this.current = {
                inst: t,
                startEvent: i.utils.extend({}, e),
                lastEvent: !1,
                name: ""
            }, this.detect(e))
        },
        detect: function (t) {
            if (this.current && !this.stopped) {
                t = this.extendEventData(t);
                for (var e = this.current.inst.options, n = 0, r = this.gestures.length; r > n; n++) {
                    var o = this.gestures[n];
                    if (!this.stopped && e[o.name] !== !1 && o.handler.call(o, t, this.current.inst) === !1) {
                        this.stopDetect();
                        break
                    }
                }
                return this.current && (this.current.lastEvent = t), t.eventType == i.EVENT_END && !t.touches.length - 1 && this.stopDetect(), t
            }
        },
        stopDetect: function () {
            this.previous = i.utils.extend({}, this.current), this.current = null, this.stopped = !0
        },
        extendEventData: function (t) {
            var e = this.current.startEvent;
            if (e && (t.touches.length != e.touches.length || t.touches === e.touches)) {
                e.touches = [];
                for (var n = 0, r = t.touches.length; r > n; n++) e.touches.push(i.utils.extend({}, t.touches[n]))
            }
            var o = t.timeStamp - e.timeStamp,
                s = t.center.pageX - e.center.pageX,
                a = t.center.pageY - e.center.pageY,
                c = i.utils.getVelocity(o, s, a);
            return i.utils.extend(t, {
                deltaTime: o,
                deltaX: s,
                deltaY: a,
                velocityX: c.x,
                velocityY: c.y,
                distance: i.utils.getDistance(e.center, t.center),
                angle: i.utils.getAngle(e.center, t.center),
                direction: i.utils.getDirection(e.center, t.center),
                scale: i.utils.getScale(e.touches, t.touches),
                rotation: i.utils.getRotation(e.touches, t.touches),
                startEvent: e
            }), t
        },
        register: function (t) {
            var n = t.defaults || {};
            return n[t.name] === e && (n[t.name] = !0), i.utils.extend(i.defaults, n, !0), t.index = t.index || 1e3, this.gestures.push(t), this.gestures.sort(function (t, e) {
                return t.index < e.index ? -1 : t.index > e.index ? 1 : 0
            }), this.gestures
        }
    }, i.gestures = i.gestures || {}, i.gestures.Hold = {
        name: "hold",
        index: 10,
        defaults: {
            hold_timeout: 500,
            hold_threshold: 1
        },
        timer: null,
        handler: function (t, e) {
            switch (t.eventType) {
            case i.EVENT_START:
                clearTimeout(this.timer), i.detection.current.name = this.name, this.timer = setTimeout(function () {
                    "hold" == i.detection.current.name && e.trigger("hold", t)
                }, e.options.hold_timeout);
                break;
            case i.EVENT_MOVE:
                t.distance > e.options.hold_threshold && clearTimeout(this.timer);
                break;
            case i.EVENT_END:
                clearTimeout(this.timer)
            }
        }
    }, i.gestures.Tap = {
        name: "tap",
        index: 100,
        defaults: {
            tap_max_touchtime: 250,
            tap_max_distance: 10,
            tap_always: !0,
            doubletap_distance: 20,
            doubletap_interval: 300
        },
        handler: function (t, e) {
            if (t.eventType == i.EVENT_END) {
                var n = i.detection.previous,
                    r = !1;
                if (t.deltaTime > e.options.tap_max_touchtime || t.distance > e.options.tap_max_distance) return;
                n && "tap" == n.name && t.timeStamp - n.lastEvent.timeStamp < e.options.doubletap_interval && t.distance < e.options.doubletap_distance && (e.trigger("doubletap", t), r = !0), (!r || e.options.tap_always) && (i.detection.current.name = "tap", e.trigger(i.detection.current.name, t))
            }
        }
    }, i.gestures.Swipe = {
        name: "swipe",
        index: 40,
        defaults: {
            swipe_max_touches: 1,
            swipe_velocity: .7
        },
        handler: function (t, e) {
            if (t.eventType == i.EVENT_END) {
                if (e.options.swipe_max_touches > 0 && t.touches.length > e.options.swipe_max_touches) return;
                (t.velocityX > e.options.swipe_velocity || t.velocityY > e.options.swipe_velocity) && (e.trigger(this.name, t), e.trigger(this.name + t.direction, t))
            }
        }
    }, i.gestures.Drag = {
        name: "drag",
        index: 50,
        defaults: {
            drag_min_distance: 10,
            drag_max_touches: 1,
            drag_block_horizontal: !1,
            drag_block_vertical: !1,
            drag_lock_to_axis: !1,
            drag_lock_min_distance: 25
        },
        triggered: !1,
        handler: function (t, n) {
            if (i.detection.current.name != this.name && this.triggered) return n.trigger(this.name + "end", t), this.triggered = !1, e;
            if (!(n.options.drag_max_touches > 0 && t.touches.length > n.options.drag_max_touches)) switch (t.eventType) {
            case i.EVENT_START:
                this.triggered = !1;
                break;
            case i.EVENT_MOVE:
                if (t.distance < n.options.drag_min_distance && i.detection.current.name != this.name) return;
                i.detection.current.name = this.name, (i.detection.current.lastEvent.drag_locked_to_axis || n.options.drag_lock_to_axis && n.options.drag_lock_min_distance <= t.distance) && (t.drag_locked_to_axis = !0);
                var r = i.detection.current.lastEvent.direction;
                t.drag_locked_to_axis && r !== t.direction && (t.direction = i.utils.isVertical(r) ? 0 > t.deltaY ? i.DIRECTION_UP : i.DIRECTION_DOWN : 0 > t.deltaX ? i.DIRECTION_LEFT : i.DIRECTION_RIGHT), this.triggered || (n.trigger(this.name + "start", t), this.triggered = !0), n.trigger(this.name, t), n.trigger(this.name + t.direction, t), (n.options.drag_block_vertical && i.utils.isVertical(t.direction) || n.options.drag_block_horizontal && !i.utils.isVertical(t.direction)) && t.preventDefault();
                break;
            case i.EVENT_END:
                this.triggered && n.trigger(this.name + "end", t), this.triggered = !1
            }
        }
    }, i.gestures.Transform = {
        name: "transform",
        index: 45,
        defaults: {
            transform_min_scale: .01,
            transform_min_rotation: 1,
            transform_always_block: !1
        },
        triggered: !1,
        handler: function (t, n) {
            if (i.detection.current.name != this.name && this.triggered) return n.trigger(this.name + "end", t), this.triggered = !1, e;
            if (!(2 > t.touches.length)) switch (n.options.transform_always_block && t.preventDefault(), t.eventType) {
            case i.EVENT_START:
                this.triggered = !1;
                break;
            case i.EVENT_MOVE:
                var r = Math.abs(1 - t.scale),
                    o = Math.abs(t.rotation);
                if (n.options.transform_min_scale > r && n.options.transform_min_rotation > o) return;
                i.detection.current.name = this.name, this.triggered || (n.trigger(this.name + "start", t), this.triggered = !0), n.trigger(this.name, t), o > n.options.transform_min_rotation && n.trigger("rotate", t), r > n.options.transform_min_scale && (n.trigger("pinch", t), n.trigger("pinch" + (1 > t.scale ? "in" : "out"), t));
                break;
            case i.EVENT_END:
                this.triggered && n.trigger(this.name + "end", t), this.triggered = !1
            }
        }
    }, i.gestures.Touch = {
        name: "touch",
        index: -1 / 0,
        defaults: {
            prevent_default: !1,
            prevent_mouseevents: !1
        },
        handler: function (t, n) {
            return n.options.prevent_mouseevents && t.pointerType == i.POINTER_MOUSE ? (t.stopDetect(), e) : (n.options.prevent_default && t.preventDefault(), t.eventType == i.EVENT_START && n.trigger(this.name, t), e)
        }
    }, i.gestures.Release = {
        name: "release",
        index: 1 / 0,
        handler: function (t, e) {
            t.eventType == i.EVENT_END && e.trigger(this.name, t)
        }
    }, "object" == typeof module && "object" == typeof module.exports ? module.exports = i : (t.Hammer = i, "function" == typeof t.define && t.define.amd && t.define("hammer", [], function () {
        return i
    }))
})(this), function (t, e) {
    "use strict";
    t !== e && (Hammer.event.bindDom = function (n, i, r) {
        t(n).on(i, function (t) {
            var n = t.originalEvent || t;
            n.pageX === e && (n.pageX = t.pageX, n.pageY = t.pageY), n.target || (n.target = t.target), n.which === e && (n.which = n.button), n.preventDefault || (n.preventDefault = t.preventDefault), n.stopPropagation || (n.stopPropagation = t.stopPropagation), r.call(this, n)
        })
    }, Hammer.Instance.prototype.on = function (e, n) {
        return t(this.element).on(e, n)
    }, Hammer.Instance.prototype.off = function (e, n) {
        return t(this.element).off(e, n)
    }, Hammer.Instance.prototype.trigger = function (e, n) {
        var i = t(this.element);
        return i.has(n.target).length && (i = t(n.target)), i.trigger({
            type: e,
            gesture: n
        })
    }, t.fn.hammer = function (e) {
        return this.each(function () {
            var n = t(this),
                i = n.data("hammer");
            i ? i && e && Hammer.utils.extend(i.options, e) : n.data("hammer", new Hammer(this, e || {}))
        })
    })
}(window.jQuery || window.Zepto);
jQuery.fn.codeeditor = function (n) {
    function A(b) {
        t && (!r && !b ? (m.show(), $(document).one("keydown.preview", function (b) {
            27 == (b.keyCode ? b.keyCode : b.which) && A(!0)
        }), p.hide()) : (m.hide(), p.show()), r = r ? !1 : !0, u(), v())
    }
    function u() {
        if (t) {
            var b = (r ? m : p.children("div")).children("iframe")[0],
                b = b.contentDocument || b.contentWindow.document,
                d = b.getElementsByTagName("head")[0];
            if ("css" == f[k].cm.getOption("mode")) {
                for (var c = 0, e = j.length; c < e; c++) if ("css" != j[c].type) {
                    b.body.innerHTML = (void 0 == f[c] ? j[c].content : f[c].cm.getValue()).replace(/<head>([^<]*)<\/head>/, "");
                    break
                }
                $(d).append($('<style type="text/css">' + f[k].cm.getValue() + "</style>"))
            } else b.body.innerHTML = f[k].cm.getValue().replace(/<head>([^<]*)<\/head>/, "");
            for (c in j)"css" == j[c].type && $(d).append($('<style type="text/css">' + j[c].content + "</style>"))
        }
    }
    function D(b) {
        m.hasClass("full") && !b ? m.removeClass("full") : m.addClass("full");
        A();
        u()
    }
    function E(b) {
        w.find(".sel").removeClass("sel");
        w.children("li:not(.add)").eq(b).children("a").addClass("sel");
        var d = B.find("> div");
        d.removeClass("sel");
        void 0 == f[b] ? (f[b] = {}, d = $("<div/>").addClass("sel").appendTo(B), f[b].cm = CodeMirror(d[0], {
            value: j[b].content,
            mode: C(j[b].type),
            theme: "acamica",
            indentUnit: 4,
            lineNumbers: !0,
            lineWrapping: !0,
            autofocus: !0,
            styleActiveLine: !0,
            foldGutter: !0,
            matchBrackets: !0,
            autoCloseBrackets: !0,
            autoCloseTags: !0
        }), f[b].cm.on("change", $.throttle(300, function () {
            j[b].content = f[b].cm.getValue();
            u();
            if (x && 0 <= e) if (0 < h[e].checks.length) {
                var c = f[k].cm.getValue(),
                    d = !0,
                    g;
                for (g in h[e].checks) if (RegExp(h[e].checks[g].match, "gim").test(c) != h[e].checks[g].ifcase) {
                    d = !1;
                    break
                }
                d && y()
            } else y()
        })), f[b].cm.on("focus", function () {
            $("video").each(function () {
                this.player.hasFocus = !1
            })
        })) : (d.eq(b).addClass("sel"), f[b].cm.focus());
        k = b;
        v();
        u()
    }
    function v() {
        var b = $(window).height() - 140,
            d;
        for (d in f) f[d].cm.setSize(null, r || !t ? b - 5 : b - 5 - p.outerHeight());
        B.height(b);
        l.height(b + 50);
        m.height(b);
        var c = l.find(".tabdiv:visible");
        c.length && setTimeout(function () {
            c.height($(window).height() - c.offset().top - 20)
        }, 1)
    }
    function C(b) {
        switch (b) {
        case "js":
            return "javascript";
        case "css":
            return "css";
        case "java":
            return "text/x-java";
        case "xml":
            return "xml";
        case "html":
            return "htmlmixed";
        default:
            return "htmlmixed"
        }
    }
    function F() {
        $("video").each(function () {
            this.player.pause();
            this.player.hasFocus = !1
        });
        s.addClass("activity");
        z.removeClass("show");
        g.addClass("show");
        e = -1;
        for (var b = g.find("ul").empty(), d = h.length, c = 0; c < d; c++) b.append('<li><span class="num">' + (c + 1) + '</span><span class="text">' + h[c].text + "</span></li>");
        b.children().each(function (b) {
            $(this).click(function () {
                var c = g.find("ul > li").removeClass("actual");
                e = b;
                c.eq(e).removeClass("skipped").addClass("actual");
                g.find("a.skip").show().appendTo(c.eq(e));
                f[k].cm.setOption("mode", C(h[e].type));
                f[k].cm.focus();
                x = !0
            })
        });
        g.find("a.skip").off(".skip").on("click.skip", function () {
            y(!0)
        });
        y()
    }
    function y(b) {
        var d = g.find("ul > li").removeClass("actual");
        x = !1;
        0 <= e && (d.eq(e).addClass(b ? "skipped" : "complete"), b || (h[e].completed = !0, g.find("a.skip").hide(), $("#act_complete").fadeIn(300, function () {
            var b = $(this);
            setTimeout(function () {
                b.fadeOut(300)
            }, 1500)
        })));
        e++;
        if (e < h.length) d.eq(e).addClass("actual"), g.find("a.skip").show().appendTo(d.eq(e)), f[k].cm.setOption("mode", C(h[e].type)), f[k].cm.focus(), x = !0;
        else {
            b = !0;
            for (var c in h) if (!h[c].completed) {
                b = !1;
                break
            }
            b && (g.find("ul").hide(), g.find(".end").show(), a.sendProgress(q.curso_id, q.clase_id, 2))
        }
        return !1
    }
    var q = n || {},
        s = this,
        B = s.find(".code"),
        G = s.find(".files"),
        w = G.find(".tabs > ul"),
        l = s.find(".rightbar"),
        m = $("#codepreview"),
        p = $("#floatedpreview"),
        z = l.children(".videoframe"),
        g = l.children(".actdiv"),
        j = q.files || {},
        f = {},
        k;
    n = q.lang || {};
    var h = q.activities || {},
        r = !1,
        t = q.supportpreview || !1,
        x = !1,
        e = -1;
    $("body").addClass("codemode");
    j.length || j.push({
        name: n.untitled,
        type: "html",
        content: ""
    });
    n = 0;
    for (var I = j.length; n < I; n++) w.find(".add").before("<li><a>" + j[n].name + "</a></li>");
    w.children("li:not(.add)").each(function (b) {
        $(this).children("a").click(function () {
            E(b);
            return !1
        })
    });
    p.find("li.aside").click(function () {
        A()
    });
    m.find(".close").click(function () {
        D()
    });
    p.find("li.full").click(function () {
        D(!0)
    });
    0 < h.length ? g.find("a.jump").click(function () {
        F()
    }) : g.hide();
    g.find("a.showvideo").click(function () {
        z.addClass("show");
        g.removeClass("show");
        s.removeClass("activity")
    });
    E(0);
    var H = l.find(".actiontabs > li"),
        J = l.find(".tabdiv");
    H.each(function (b) {
        var d = $(this);
        d.children("a").click(function () {
            J.hide().eq(b).show();
            H.removeClass("sel");
            d.addClass("sel");
            v()
        })
    });
    $("#codeloader").remove();
    l.resizable({
        handles: "w,e",
        minWidth: 400,
        maxWidth: 900,
        resize: function (b, d) {
            var c = $(window).width(),
                e = Math.round(100 * d.size.width / c),
                c = Math.round(100 * (c - d.size.width) / c);
            $(this).css({
                width: e + "%",
                left: 0
            });
            G.width(c + "%");
            l.find(".mejs-video").css({
                height: l.find(".videoframe").height()
            })
        }
    });
    z.resizable({
        handles: "s",
        minHeight: 200,
        maxHeight: 510,
        resize: function (b, d) {
            z.find(".mejs-video").css({
                height: d.size.height
            })
        }
    });
    t || p.hide();
    $(window).resize(function () {
        v()
    });
    0 < h.length && setTimeout(function () {
        $("video").on("ended", function () {
            F()
        })
    }, 100)
};
var Acamica = function () {
        function h(b) {
            arguments.callee.sRE || (arguments.callee.sRE = RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\$)", "g"));
            return b.replace(arguments.callee.sRE, "\\$1")
        }
        t = this;
        t.ajaxcalls = [];
        t.totalajaxcalls = 0;
        t.notifications = [];
        t.totalnotifications = 0;
        t.notificationDuration = 5E3;
        t.notif_audio;
        t.main = $("#main");
        t.inttime;
        t.fhead = !1;
        t.init = function () {
            t.loader();
            $(window).bind("statechange", function () {
                var b = History.getState().hash;
                t.getmain(b)
            });
            $("#notif_but").click(function () {
                t.notificationButton()
            });
            t.updatePageEvent();
            var b = $("body");
            $(document).scroll(function () {
                var c = $(this).scrollTop();
                !t.fhead && 0 < c ? (b.addClass("fixedheader"), t.fhead = !0) : t.fhead && 0 >= c && (b.removeClass("fixedheader"), t.fhead = !1)
            });
            var c = $("#header .menu .handler"),
                d = c.parent();
            c.click(function () {
                d.hasClass("open") ? t.mobileMenu(!0) : t.mobileMenu()
            });
            d.hammer().on("swipeleft", function () {
                t.mobileMenu()
            }).hammer().on("swiperight", function () {
                t.mobileMenu(!0)
            })
        };
        t.mobileMenu = function (b) {
            var c = $("#header .menu .handler").parent();
            b ? c.animate({
                right: "-250px"
            }, 200, function () {
                c.removeClass("open")
            }) : (c.addClass("open"), c.animate({
                right: "0px"
            }, 200))
        };
        t.collapseLeftMenu = function () {
            var b = $("#main");
            b.hasClass("collapsed_menu") ? b.removeClass("collapsed_menu") : b.addClass("collapsed_menu")
        };
        t.startNotificationServer = function () {
            io.connect("http://socket.acamica.com/notify").on("notification", function (b) {
                t.sendNotificationBlob(b)
            })
        };
        t.sendNotificationBlob = function (b) {
            var c = t.newNotification(),
                d = $('<a class="notification_blob" href="/' + b.url + '">' + (b.img ? '<span class="img" style="background-image:url(' + b.img_url + ')"></span>' : "") + '<span class="note">' + b.text + "</span></a>").appendTo("#notification_center");
            d.find("a").click(function () {
                t.delNotification(c)
            });
            var e;
            d.fadeIn(200, function () {
                e = setTimeout(function () {
                    d.fadeOut(300)
                }, t.notificationDuration)
            }).hover(function () {
                d.stop().show();
                clearTimeout(e)
            }, function () {
                e = setTimeout(function () {
                    d.fadeOut(300)
                }, 1E3)
            });
            $("#menu_notif li.title").after('<li><a href="/' + b.url + '" class="menu-link new">' + (b.img ? '<span class="img" style="background-image:url(' + b.img_url + ')"></span>' : "") + '<span class="note">' + b.text + '<span class="date timetag" data-type="msg">' + t.timeUnixToFormat(b.fecha) + "</span></span></a></li>");
            t.updateTimeTags()
        };
        t.notificationButton = function () {
            if (0 < t.notifications.length || 0 < t.totalnotifications) t.load("/ajax/notification", "POST", {
                action: "update"
            }), t.clearNotifications()
        };
        t.clearNotifications = function () {
            document.title = document.title.replace(/\(([0-9]+)\)/, "");
            $("#notif_but .num").hide();
            t.notifications = [];
            t.totalnotifications = 0
        };
        t.newNotification = function () {
            t.totalnotifications++;
            t.notifications.push(t.totalnotifications);
            document.title = document.title.replace(/\(([0-9]+)\)/, "") + " (" + t.totalnotifications + ")";
            $("#notif_but .num").html(t.totalnotifications).show();
            return t.totalnotifications
        };
        t.delNotification = function (b) {
            b = t.notifications.indexOf(b); - 1 != b && t.notifications.splice(b, 1);
            b = document.title.replace(/\(([0-9]+)\)/, "");
            0 < t.notifications.length ? (document.title = b + " (" + t.totalnotifications + ")", $("#notif_but .num").html(t.totalnotifications)) : (document.title = b, $("#notif_but .num").hide())
        };
        t.newAjaxCallId = function () {
            t.totalajaxcalls++;
            t.ajaxcalls.push(t.totalajaxcalls);
            return t.totalajaxcalls
        };
        t.delAjaxCall = function (b) {
            b = t.ajaxcalls.indexOf(b); - 1 != b && t.ajaxcalls.splice(b, 1)
        };
        window.onbeforeunload = function () {
            if (0 < t.ajaxcalls.length) return "Hay una solicitud pendiente con el servidor"
        };
        t.serializeHash = function (b) {
            null == b && (b = t.getHash());
            b = b.split("/");
            var c = b.length,
                d = "";
            t.hashvars = [];
            if (1 < c) {
                d = "?";
                for (i = 1; i < c; i++) temphash = b[i].split(":"), d += "&" + temphash[0], 1 < temphash.length && (d += "=" + temphash[1]), t.hashvars.push({
                    key: temphash[0].toLowerCase(),
                    val: 1 < temphash.length ? temphash[1].toLowerCase() : null
                })
            }
            t.actualhash = b[0].toLowerCase();
            return b[0] + d
        };
        t.getHash = function () {
            return window.location.hash.replace(/^#!?\/?/, "")
        };
        t.ismain = "";
        t.mainajax = {};
        t.getmain = function (b) {
            $(".tooltip_label").remove();
            $(document).off("scroll.foro");
            0 < t.ismain.length && t.mainajax.abort();
            t.ismain = b;
            t.loader(!0);
            t.mainajax = $.ajax({
                url: b,
                success: function (c) {
                    t.ismain == b && (t.loader(), t.renderPage(b, c), t.updatePageEvent(), window.scrollTo(0, 0), t.ismain = "")
                },
                error: function () {
                    t.getmain("/error404")
                }
            })
        };
        t.renderPage = function (b, c) {
            $("body").removeClass();
            t.setDefaultColor();
            t.main.html(c);
            t.sendAnalytics(b)
        };
        t.sendAnalytics = function (b) {
            window.dataLayer && dataLayer.push({
                event: "trackPageview",
                UrlPath: b
            })
        };
        t.GAevent = function (b, c, d, e) {
            d || (d = "");
            b = {
                event: "GAevent",
                eventCategory: b,
                eventAction: c,
                eventLabel: d
            };
            "undefined" != typeof e && (b.eventValue = e);
            dataLayer.push(b)
        };
        t.loader = function (b) {
            var c = $("#loader");
            b ? c.show() : c.hide()
        };
        t.updatePageEvent = function () {
            $(".body").outerHeight() < $(window).height() && $(".body").css("min-height", $(window).height() - $("#footer").outerHeight() - $("#header").height());
            t.ajaxify();
            t.avatarFallback();
            $(".menuholder").off("click.menu").on("click.menu", function () {
                t.dropMenu(this);
                return !1
            });
            $(".tooltip").tooltip();
            $(".number").number(!0, 0, ",", ".");
            $(".decimal").number(!0, 4, ",", ".");
            $("input, textarea").placeholder();
            t.updateTimeTags();
            clearInterval(t.inttime);
            t.inttime = setInterval(function () {
                t.updateTimeTags()
            }, 6E4)
        };
        t.ajaxify = function () {
            if (History.enabled) $("body").find("a:internal:not(.no-ajax)").off("click.history").on("click.history", function (b) {
                var c = $(this),
                    d = c.attr("href"),
                    e = c.attr("title") || null;
                if (2 == b.which || b.metaKey || "#" == d) return !0;
                History.pushState(null, e, d);
                b.preventDefault();
                if (!c.hasClass("click-event")) return !1
            })
        };
        t.avatarFallback = function () {
            $("img.avatar").error(function () {
                $(this).attr("src", $(this).attr("data-fall") || "/img/noavatar.jpg");
                return !1
            })
        };
        t.timeUnixToFormat = function (b) {
            return moment.unix(b).format("YYYY-MM-DDTHH:mm:ss Z")
        };
        t.updateTimeTags = function () {
            $(".timetag").each(function () {
                var b = $(this),
                    c = void 0 == b.attr("data-time") ? b.text() : b.attr("data-time"),
                    c = moment(c);
                if (null != c && 0 < c) {
                    var d;
                    d = moment().unix() - c.unix();
                    switch (b.attr("data-type")) {
                    case "msg":
                        d = 2592E3 < d ? moment().year() != c.year() ? c.format("LL") : c.format("L") : 172800 < d ? c.fromNow() : 86400 < d ? c.fromNow() + ", " + c.format("LT") : c.fromNow();
                        break;
                    case "shorthour":
                        d = 86400 < d ? moment().year() != c.year() ? c.format("LLLL") : c.format("LLL") : c.fromNow();
                        break;
                    case "friendly":
                        d = 172800 < d ? moment().year() != c.year() ? c.format("LLLL") : c.format("LLL") : 86400 < d ? c.fromNow() + ", " + c.format("LT") : c.fromNow();
                        break;
                    case "cal":
                        d = c.calendar();
                        break;
                    case "format":
                        d = c.format(b.attr("data-format"));
                        break;
                    default:
                        d = moment().year() != c.year() ? c.format("LLLL") : c.format("LLL")
                    }
                    void 0 == b.attr("data-time") && b.attr("data-time", c.format("YYYY-MM-DDTHH:mm:ss Z"));
                    b.html(d)
                }
            })
        };
        t.sendProgress = function (b, c, d) {
            t.load("/ajax/clase", "POST", {
                action: "progress",
                curso_id: b,
                id: c,
                status: d
            })
        };
        t.voteReply = function (b, c, d, e) {
            t.load("/ajax/foros?vote", "POST", {
                tema_id: b,
                resp_id: b,
                vote: d
            }, function (b) {
                b.error || (b = parseInt(e.html()), e.html(d ? b + 1 : b - 1))
            }, "json")
        };
        t.generateTabs = function (b) {
            var c = b.children("li");
            $(".tabbed").hide();
            var d = b.attr("data-input");
            c.each(function () {
                $this = $(this);
                $this.children("a").click(function () {
                    t.selectTab($(this), c, d)
                })
            });
            t.selectTab(c.eq(0).children("a"), c, d)
        };
        t.selectTab = function (b, c, d) {
            c.children("a").removeClass("sel");
            $(".tabbed").hide();
            c = b.parent();
            b.addClass("sel");
            b = c.attr("data-tab");
            $("#tab-" + b).show();
            null != d && void 0 != d && $('input[name="' + d + '"]').val(b)
        };
        t.load = function (b, c, d, e, g) {
            c = null == c ? "GET" : c;
            d = null == d ? {} : d;
            g = null == g ? "" : "json";
            var j = t.newAjaxCallId();
            $.ajax({
                url: b,
                type: c,
                data: d,
                dataType: g,
                success: function (c) {
                    t.sendAnalytics(b);
                    e && e(c)
                },
                error: function (b, c) {
                    t.ajaxError(!0, c)
                },
                complete: function () {
                    t.delAjaxCall(j)
                }
            })
        };
        t.loadAjaxPopup = function (b, c, d, e) {
            d = null != d ? d : "GET";
            e = null != e ? e : {};
            t.closePopup(!0);
            var g = $(".popupbox.ajax").clone().removeClass("ajax").addClass("actual").appendTo("body");
            c && g.addClass(c);
            var j = "/popup/" + b;
            t.loader(!0);
            t.load(j, d, e, function (b) {
                g.html(b).fadeIn(200);
                t.resizePopup(g);
                t.updateTimeTags();
                t.loader();
                t.sendAnalytics(j);
                $(document).on("keydown.closepopup", function (b) {
                    27 == (b.keyCode ? b.keyCode : b.which) && t.closePopup()
                })
            });
            $("#darkbg").fadeIn(200).click(function () {
                t.closePopup()
            })
        };
        t.loadPopup = function (b, c) {
            t.closePopup(!0);
            var d = $(".popupbox." + b);
            $("#darkbg").fadeIn(200, function () {
                t.resizePopup(d);
                d.fadeIn(200, function () {
                    $(document).on("keydown.closepopup", function (b) {
                        27 == (b.keyCode ? b.keyCode : b.which) && t.closePopup(!1, c)
                    })
                })
            }).click(function () {
                t.closePopup(!1, c)
            })
        };
        t.closePopup = function (b, c) {
            "function" == typeof c && c();
            $(".popupbox").fadeOut(200, function () {
                b || $("#darkbg").fadeOut(200)
            }).not(".static").not(".ajax").remove();
            $(document).off("keydown.closepopup")
        };
        t.closePopupButton = function (b) {
            var c = $(".popupbox.actual .bot");
            c.find('input[type="button"]').remove();
            c.find('input[type="submit"]').val(b).click(function () {
                t.closePopup();
                return !1
            })
        };
        t.resizePopup = function (b) {
            b = null != b ? $(b) : $(".popupbox.actual");
            if (b.length) {
                var c = $(window).height(),
                    d = b.outerHeight(),
                    c = c / 2 - d / 2 + $(window).scrollTop();
                b.css({
                    top: 50 < c ? c : 50
                })
            }
        };
        t.gotoURL = function (b) {
            History.enabled ? History.pushState(null, null, b) : window.location.href = b
        };
        t.reloadURL = function () {
            History.enabled ? t.getmain(window.location.href) : window.location.reload()
        };
        t.contactRequest = function (b, c, d) {
            d.fadeOut(200, function () {
                $(this).remove()
            });
            t.load("/ajax/contactos?request", "POST", {
                user_id: b,
                action: c
            })
        };
        t.loadIntroVideo = function () {
            var b = $(window).width();
            if (320 >= b) var c = 290,
                d = 163;
            else 640 >= b ? (c = 520, d = 262) : 860 >= b ? (c = 640, d = 360) : (c = 853, d = 480);
            $("#introvideo").fadeIn(300);
            var e = $(".precourse .head"),
                g = e.find(".course_features");
            e.addClass("video").animate({
                height: d + 30
            }, 300, function () {
                $("#introvideo .video").width(c).height(d);
                $("#introvideo video").mediaelementplayer({
                    features: "playpause progress current duration tracks volume fullscreen".split(" "),
                    pluginPath: "/player/",
                    videoWidth: c,
                    videoHeight: d,
                    pluginWidth: c,
                    pluginHeight: d
                });
                $("#introvideo a.close").off("click").on("click", function () {
                    $("#introvideo").fadeOut(200);
                    e.removeClass("video").animate({
                        height: 250
                    }, 200);
                    g.animate({
                        right: "30px"
                    }, 200)
                })
            });
            g.animate({
                right: "-=" + ($(window).width() - g.offset().left + 50)
            }, 150)
        };
        t.submitForm = function (b, c, d) {
            b = $(b);
            b.on("submit.form", function () {
                return !1
            });
            $(".formresponse", b).hide();
            if (null != d && 0 < d.length && !t.noEmpty(b, d)) return !1;
            var e = $('input[type="submit"]', b);
            e.attr("disabled", "disabled");
            t.loader(!0);
            var g = t.newAjaxCallId();
            $.ajax({
                type: "POST",
                url: b.attr("action"),
                data: b.serialize(),
                dataType: "json",
                success: function (d) {
                    "function" == typeof c && c(b, d)
                },
                error: function (b, c) {
                    t.ajaxError(!0, c)
                },
                complete: function () {
                    t.delAjaxCall(g);
                    t.loader();
                    e.removeAttr("disabled");
                    b.off("submit.form")
                }
            })
        };
        t.uploadForm = function (b, c, d) {
            b = $(b);
            b.on("submit.form", function () {
                return !1
            });
            $(".formresponse", b).hide();
            if (null != d && 0 < d.length && !t.noEmpty(b, d)) return !1;
            d = new FormData(b[0]);
            var e = $('input[type="submit"]', b);
            e.attr("disabled", "disabled");
            t.loader(!0);
            var g = t.newAjaxCallId();
            $.ajax({
                type: "POST",
                url: b.attr("action"),
                data: d,
                dataType: "json",
                processData: !1,
                contentType: !1,
                success: function (d) {
                    "function" == typeof c && c(b, d)
                },
                error: function (b, c) {
                    t.ajaxError(!0, c)
                },
                complete: function () {
                    t.delAjaxCall(g);
                    t.loader();
                    e.removeAttr("disabled");
                    b.off("submit.form")
                }
            })
        };
        t.noEmpty = function (b, c) {
            for (var d in c) {
                var e = $('input[name="' + c[d] + '"]');
                if (0 < e.length) {
                    if (0 == e.val().length) return !1
                } else if (e = $('textarea[name="' + c[d] + '"]'), 0 < e.length && 0 == e.val().length) return !1
            }
            return !0
        };
        t.formError = function (b, c) {
            $(".formresponse", b).show().addClass("error").html(c);
            $('input[type="submit"]', b).removeAttr("disabled");
            $("body").scrollTo(0)
        };
        t.doLogin = function (b) {
            null != b && 0 < b.length && window.location.href != b ? window.location.href = b : window.location.reload()
        };
        t.editAvatar = function (b) {
            b = $(b);
            b.hover(function () {
                b.addClass("hover")
            }, function () {
                b.removeClass("hover")
            }).click(function () {
                t.loadAjaxPopup("changepicture", "narrow", "POST")
            })
        };
        t.dropMenu = function (b, c) {
            b = $(b);
            var d = b.attr("data-menu"),
                e = $("#menu_" + d);
            $(".dropmenu").not(e).each(function () {
                $(document).trigger("click.menudrop_" + $(this).attr("id").replace("menu_", ""))
            });
            if (c || e.is(":visible")) e.slideUp(150).animate({
                opacity: 0
            }, {
                queue: !1,
                duration: 150
            }), b.removeClass("sel"), $(document).off("click.menudrop_" + d);
            else {
                var g = b.offset().left + e.outerWidth() > $(window).width() ? $(window).width() - e.outerWidth() : b.offset().left;
                e.css({
                    left: g + e.outerWidth() == $(window).width() ? g - 15 : g,
                    top: b.offset().top - 50 + b.outerHeight()
                });
                e.hasClass("fittowidth") && e.css("min-width", b.outerWidth());
                e.hasClass("position-right") && e.css("left", b.offset().left + b.outerWidth() - e.outerWidth());
                e.hasClass("fixed") && e.css({
                    top: b.offset().top + b.outerHeight() - $(document).scrollTop()
                });
                e.hasClass("direction-up") && e.css({
                    top: "auto",
                    bottom: $(window).height() - b.offset().top + $(document).scrollTop()
                });
                e.hasClass("floated") && e.find(".arrow").css("left", b.offset().left - g + (e.hasClass("centered-icon") ? b.outerWidth() / 2 : 0) + "px");
                e.css("opacity", 0).slideDown(150).animate({
                    opacity: 1
                }, {
                    queue: !1,
                    duration: 150
                });
                b.addClass("sel");
                $(document).on("click.menudrop_" + d, function () {
                    t.dropMenu(b, !0);
                    $(document).off("click.menudrop_" + d)
                })
            }
            return !1
        };
        t.focusClass = function () {
            $("body").scrollTo($(".clasetitle").offset().top - 115)
        };
        t.loadNextClass = function (b, c, d) {
            if (!(0 >= b.length)) {
                var e = $(".videoframe");
                e.offset();
                var g = $(".video-overlay", e);
                g.css({
                    top: (e.outerHeight() - g.outerHeight()) / 2 + "px",
                    left: (e.outerWidth() - g.outerWidth()) / 2 + "px"
                }).show();
                g.find(".gonow").click(function () {
                    t.gotoClass(b)
                });
                g.find(".cancel").click(function () {
                    $(".video .video-overlay").hide()
                });
                setTimeout(function () {
                    t.counterPreClass(b, c, d)
                }, 1E3)
            }
        };
        t.counterPreClass = function (b, c, d) {
            var e = $(".videoframe .video-overlay"),
                g = e.find(".segundos");
            e.is(":visible") && (e = parseInt(g.html()), e--, g.html(e + (1 == e ? " " + c : " " + d)), 0 < e ? setTimeout(function () {
                t.counterPreClass(b, c, d)
            }, 1E3) : t.gotoClass(b))
        };
        t.gotoClass = function (b) {
            0 < b.length && a.gotoURL(b)
        };
        t.cleanVideoTypes = function () {
            var b;
            b = navigator.userAgent;
            var c = navigator.appName,
                d, e = b.match(/(opera|chrome|safari|firefox|msie|trident)\/?\s*([\d\.]+)/i) || [];
            if ((e = e[2] ? [e[1], e[2]] : [c, navigator.appVersion, "-?"]) && null != (d = b.match(/version\/([\.\d]+)/i))) e[2] = d[1];
            b = e.join(" ");
            navigator.sayswho = b;
            "probably" == Modernizr.video.webm && !navigator.sayswho.match(/safari/i) ? $('video source[type="video/mp4"]').remove() : $('video source[type="video/webm"]').remove()
        };
        t.searchForum = function (b) {
            t.gotoURL(b.action + "?q=" + encodeURIComponent($(b).find('input[name="q"]').val()))
        };
        t.ajaxAction = function (b, c, d, e) {
            0 < d.length ? d.action = c : d = {
                action: c
            };
            var g = t.newAjaxCallId();
            $.ajax({
                type: "POST",
                url: b,
                data: d,
                dataType: "json",
                success: function (b) {
                    "function" == typeof e && e(f, b)
                },
                error: function (b, c) {
                    t.ajaxError(!0, c)
                },
                complete: function () {
                    t.delAjaxCall(g)
                }
            })
        };
        t.getStat = function (b, c, d) {
            null != d ? d.action = c : d = {
                action: c
            };
            t.loader(!0);
            t.load("/ajax/stats", "GET", d, function (c) {
                t.loader();
                t.sendAnalytics("/ajax/stats");
                if (!c.error && 0 < c.data.length) {
                    var d = b.highcharts();
                    d.xAxis[0].setCategories(c.data[0], !1);
                    datal = c.data.length - 1;
                    for (var j = 0; j < datal; j++) d.series[j].setData(c.data[j + 1], !1);
                    d.redraw()
                }
            }, !0)
        };
        t.ajaxError = function () {
            t.loadPopup("error");
            t.loader()
        };
        t.setTitle = function (b) {
            document.title = b + " | Acamica"
        };
        t.setCursoColor = function (b, c, d, e, g) {
            if ("#" == d) t.setDefaultColor();
            else {
                var j = $(".header, .headblock, .precourse .head");
                j.css("background-color", d);
                e ? j.addClass("dark") : j.removeClass("dark");
                0 != b && (d = $("#header_cinfo").show(), d.find("img").attr("src", "/cache/cursos/icon/" + b + ".jpg"), d.find(".title").html(c), g ? $("#progressbar").hide() : $("#progressbar").show())
            }
        };
        t.setDefaultColor = function () {
            $(".header, .headblock, .precourse .head").css("background-color", "#1fbba6").removeClass("dark");
            $("#header_cinfo").hide();
            $("#progressbar").hide()
        };
        t.drawCircle = function (b) {
            $(".circlebar", b).each(function () {
                var b = $(this),
                    d = parseInt(b.attr("data-percent"));
                b.html('<div class="slice' + (50 < d ? " gt50" : "") + '"><div class="pie"></div>' + (50 < d ? '<div class="pie fill"></div>' : "") + "</div>");
                d *= 3.6;
                b.find(".slice .pie").css({
                    "-moz-transform": "rotate(" + d + "deg)",
                    "-webkit-transform": "rotate(" + d + "deg)",
                    "-o-transform": "rotate(" + d + "deg)",
                    transform: "rotate(" + d + "deg)"
                })
            })
        };
        t.setPageLinks = function (b) {
            $(".page a.prev").click(function () {
                $(this).hasClass("disabled") || a.gotoURL("?page=" + (b - 1))
            });
            $(".page a.next").click(function () {
                $(this).hasClass("disabled") || a.gotoURL("?page=" + (b + 1))
            })
        };
        t.setForosBarUI = function () {
            $(".foros .search_block input").focus(function () {
                $(this).parent().addClass("hover")
            }).blur(function () {
                $(this).parent().removeClass("hover")
            });
            var b = $(".foros .iconset");
            b.width($(window).width() - b.offset().left - 30);
            $(window).resize(function () {
                b.width($(window).width() - b.offset().left - 30)
            })
        };
        t.searchList = function (b, c, d) {
            if (27 == (d.keyCode ? d.keyCode : d.which)) c.value = "";
            $("#" + b);
            b = $("li.filt");
            var e = c.value;
            b.each(function () {
                var b = $(this).text(),
                    c;
                if (!(c = "" == e)) {
                    b = h(b);
                    b = b.split("");
                    strAccentsOut = [];
                    strAccentsLen = b.length;
                    c = "AAaaOOooooEEeeeCcIIiiiiUUuuuNn".split("");
                    for (var d = 0; d < strAccentsLen; d++) strAccentsOut[d] = -1 != "\ufffd\u7207\ufffd\ue617\ufffd\ufffd\u90cf\ufffd\ufffd\ufffd\ufffd\ua4d2\ufffd\ufffd\ufffd\uda35\udf1f\ufffd\ufffd".indexOf(b[d]) ? c["\ufffd\u7207\ufffd\ue617\ufffd\ufffd\u90cf\ufffd\ufffd\ufffd\ufffd\ua4d2\ufffd\ufffd\ufffd\uda35\udf1f\ufffd\ufffd".indexOf(b[d])] : b[d];
                    strAccentsOut = strAccentsOut.join("");
                    c = strAccentsOut.match(RegExp("\\b" + e, "ig"))
                }
                c ? $(this).show() : $(this).hide()
            })
        };
        t.moveCaretToEnd = function (b) {
            b = b[0];
            "number" == typeof b.selectionStart ? b.selectionStart = b.selectionEnd = b.value.length : "undefined" != typeof b.createTextRange && (b.focus(), b = b.createTextRange(), b.collapse(!1), b.select())
        }
    },
    a;
$(document).ready(function () {
    a = new Acamica;
    a.init()
});
$.expr[":"].internal = function (h) {
    h = $(h).attr("href") || "";
    var b = History.getRootUrl();
    return h.substring(0, b.length) === b || -1 === h.indexOf(":")
};
Array.prototype.indexOf || (Array.prototype.indexOf = function (h, b) {
    for (var c = b || 0, d = this.length; c < d; c++) if (this[c] === h) return c;
    return -1
});
Object.size = function (h) {
    var b = 0,
        c;
    for (c in h) h.hasOwnProperty(c) && b++;
    return b
};
jQuery.cachedScript = function (h, b) {
    b = $.extend(b || {}, {
        dataType: "script",
        cache: !0,
        url: h
    });
    return jQuery.ajax(b)
};