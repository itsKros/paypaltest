/*
 Copyright (c) 2008 Yii Software LLC
 @license http://www.yiiframework.com/license/
 @author Qiang Xue <qiang.xue@gmail.com>
 @since 2.0
 jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license  jQuery UI - v1.12.1 - 2016-09-14
 http://jqueryui.com
 Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
 Copyright jQuery Foundation and other contributors; Licensed MIT  jQuery UI Widget 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Position 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license

 http://api.jqueryui.com/position/
 jQuery UI :data 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Disable Selection 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Effects 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery Color Animations v2.1.2
 https://github.com/jquery/jquery-color

 Copyright 2014 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license

 Date: Wed Jan 16 08:47:09 2013 -0600
 jQuery UI Effects Blind 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Effects Bounce 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Effects Clip 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Effects Drop 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Effects Explode 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Effects Fade 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Effects Fold 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Effects Highlight 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Effects Size 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Effects Scale 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Effects Puff 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Effects Pulsate 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Effects Shake 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Effects Slide 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Effects Transfer 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Focusable 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Form Reset Mixin 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Support for jQuery core 1.7.x 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license

 jQuery UI Keycode 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Labels 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Scroll Parent 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Tabbable 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Unique ID 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Accordion 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Menu 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Autocomplete 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Controlgroup 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Checkboxradio 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Button 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Datepicker 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Mouse 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Draggable 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Resizable 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Dialog 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Droppable 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Progressbar 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Selectable 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Selectmenu 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Slider 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Sortable 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Spinner 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Tabs 1.12.1
 http://jqueryui.com

 Copyright jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 jQuery UI Tooltip 1.12.1
 http://jqueryui.com

*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function(d, q, x) {
    d instanceof String && (d = String(d));
    for (var u = d.length, m = 0; m < u; m++) {
        var y = d[m];
        if (q.call(x, y, m, d)) return {
            i: m,
            v: y
        }
    }
    return {
        i: -1,
        v: void 0
    }
};
$jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function(d, q, x) {
    if (x.get || x.set) throw new TypeError("ES3 does not support getters and setters.");
    d != Array.prototype && d != Object.prototype && (d[q] = x.value)
};
$jscomp.getGlobal = function(d) {
    return "undefined" != typeof window && window === d ? d : "undefined" != typeof global && null != global ? global : d
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function(d, q, x, u) {
    if (q) {
        x = $jscomp.global;
        d = d.split(".");
        for (u = 0; u < d.length - 1; u++) {
            var m = d[u];
            m in x || (x[m] = {});
            x = x[m]
        }
        d = d[d.length - 1];
        u = x[d];
        q = q(u);
        q != u && null != q && $jscomp.defineProperty(x, d, {
            configurable: !0,
            writable: !0,
            value: q
        })
    }
};
$jscomp.polyfill("Array.prototype.find", function(d) {
    return d ? d : function(d, x) {
        return $jscomp.findInternal(this, d, x).v
    }
}, "es6-impl", "es3");
$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
$jscomp.initSymbol = function() {
    $jscomp.initSymbol = function() {};
    $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol)
};
$jscomp.symbolCounter_ = 0;
$jscomp.Symbol = function(d) {
    return $jscomp.SYMBOL_PREFIX + (d || "") + $jscomp.symbolCounter_++
};
$jscomp.initSymbolIterator = function() {
    $jscomp.initSymbol();
    var d = $jscomp.global.Symbol.iterator;
    d || (d = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator"));
    "function" != typeof Array.prototype[d] && $jscomp.defineProperty(Array.prototype, d, {
        configurable: !0,
        writable: !0,
        value: function() {
            return $jscomp.arrayIterator(this)
        }
    });
    $jscomp.initSymbolIterator = function() {}
};
$jscomp.arrayIterator = function(d) {
    var q = 0;
    return $jscomp.iteratorPrototype(function() {
        return q < d.length ? {
            done: !1,
            value: d[q++]
        } : {
            done: !0
        }
    })
};
$jscomp.iteratorPrototype = function(d) {
    $jscomp.initSymbolIterator();
    d = {
        next: d
    };
    d[$jscomp.global.Symbol.iterator] = function() {
        return this
    };
    return d
};
$jscomp.iteratorFromArray = function(d, q) {
    $jscomp.initSymbolIterator();
    d instanceof String && (d += "");
    var x = 0,
        u = {
            next: function() {
                if (x < d.length) {
                    var m = x++;
                    return {
                        value: q(m, d[m]),
                        done: !1
                    }
                }
                u.next = function() {
                    return {
                        done: !0,
                        value: void 0
                    }
                };
                return u.next()
            }
        };
    u[Symbol.iterator] = function() {
        return u
    };
    return u
};
$jscomp.polyfill("Array.prototype.values", function(d) {
    return d ? d : function() {
        return $jscomp.iteratorFromArray(this, function(d, x) {
            return x
        })
    }
}, "es6", "es3");
$jscomp.polyfill("Array.prototype.keys", function(d) {
    return d ? d : function() {
        return $jscomp.iteratorFromArray(this, function(d) {
            return d
        })
    }
}, "es6-impl", "es3");
! function(d, q) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = d.document ? q(d, !0) : function(d) {
        if (!d.document) throw Error("jQuery requires a window with a document");
        return q(d)
    } : q(d)
}("undefined" != typeof window ? window : this, function(d, q) {
    function x(a, b) {
        b = b || H;
        var c = b.createElement("script");
        c.text = a;
        b.head.appendChild(c).parentNode.removeChild(c)
    }

    function u(a) {
        var b = !!a && "length" in a && a.length,
            c = h.type(a);
        return "function" !== c && !h.isWindow(a) && ("array" === c || 0 === b || "number" ==
            typeof b && 0 < b && b - 1 in a)
    }

    function m(a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
    }

    function y(a, b, c) {
        return h.isFunction(b) ? h.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        }) : b.nodeType ? h.grep(a, function(a) {
            return a === b !== c
        }) : "string" != typeof b ? h.grep(a, function(a) {
            return -1 < Ba.call(b, a) !== c
        }) : tb.test(b) ? h.filter(b, a, c) : (b = h.filter(b, a), h.grep(a, function(a) {
            return -1 < Ba.call(b, a) !== c && 1 === a.nodeType
        }))
    }

    function l(a, b) {
        for (;
            (a = a[b]) && 1 !== a.nodeType;);
        return a
    }

    function I(a) {
        var b = {};
        return h.each(a.match(fa) || [], function(a, c) {
            b[c] = !0
        }), b
    }

    function t(a) {
        return a
    }

    function F(a) {
        throw a;
    }

    function K(a, b, c, d) {
        var p;
        try {
            a && h.isFunction(p = a.promise) ? p.call(a).done(b).fail(c) : a && h.isFunction(p = a.then) ? p.call(a, b, c) : b.apply(void 0, [a].slice(d))
        } catch (oa) {
            c.apply(void 0, [oa])
        }
    }

    function T() {
        H.removeEventListener("DOMContentLoaded", T);
        d.removeEventListener("load", T);
        h.ready()
    }

    function ca() {
        this.expando = h.expando + ca.uid++
    }

    function a(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" +
                b.replace(ub, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    d = c, c = "true" === d || "false" !== d && ("null" === d ? null : d === +d + "" ? +d : vb.test(d) ? JSON.parse(d) : d)
                } catch (P) {}
                V.set(a, b, c)
            } else c = void 0;
        return c
    }

    function b(a, b, c, d) {
        var p, e = 1,
            f = 20,
            v = d ? function() {
                return d.cur()
            } : function() {
                return h.css(a, b, "")
            },
            z = v(),
            g = c && c[3] || (h.cssNumber[b] ? "" : "px"),
            B = (h.cssNumber[b] || "px" !== g && +z) && ra.exec(h.css(a, b));
        if (B && B[3] !== g) {
            g = g || B[3];
            c = c || [];
            B = +z || 1;
            do e = e || ".5", B /= e, h.style(a, b, B + g); while (e !== (e = v() /
                    z) && 1 !== e && --f)
        }
        return c && (B = +B || +z || 0, p = c[1] ? B + (c[1] + 1) * c[2] : +c[2], d && (d.unit = g, d.start = B, d.end = p)), p
    }

    function c(a, b) {
        for (var c, d, p = [], e = 0, f = a.length; e < f; e++)
            if (d = a[e], d.style)
                if (c = d.style.display, b) {
                    if ("none" === c && (p[e] = E.get(d, "display") || null, p[e] || (d.style.display = "")), "" === d.style.display && Ca(d)) {
                        c = e;
                        var v, g = void 0;
                        v = d.ownerDocument;
                        var k = d.nodeName;
                        v = (d = Ua[k]) ? d : (g = v.body.appendChild(v.createElement(k)), d = h.css(g, "display"), g.parentNode.removeChild(g), "none" === d && (d = "block"), Ua[k] = d, d);
                        p[c] =
                            v
                    }
                } else "none" !== c && (p[e] = "none", E.set(d, "display", c));
        for (e = 0; e < f; e++) null != p[e] && (a[e].style.display = p[e]);
        return a
    }

    function e(a, b) {
        var c;
        return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && m(a, b) ? h.merge([a], c) : c
    }

    function f(a, b) {
        for (var c = 0, d = a.length; c < d; c++) E.set(a[c], "globalEval", !b || E.get(b[c], "globalEval"))
    }

    function g(a, b, c, d, g) {
        for (var p, v, z, B, P = b.createDocumentFragment(), k = [],
                n = 0, r = a.length; n < r; n++)
            if (p = a[n], p || 0 === p)
                if ("object" === h.type(p)) h.merge(k, p.nodeType ? [p] : p);
                else if (zb.test(p)) {
            v = v || P.appendChild(b.createElement("div"));
            z = (Va.exec(p) || ["", ""])[1].toLowerCase();
            z = aa[z] || aa._default;
            v.innerHTML = z[1] + h.htmlPrefilter(p) + z[2];
            for (z = z[0]; z--;) v = v.lastChild;
            h.merge(k, v.childNodes);
            v = P.firstChild;
            v.textContent = ""
        } else k.push(b.createTextNode(p));
        P.textContent = "";
        for (n = 0; p = k[n++];)
            if (d && -1 < h.inArray(p, d)) g && g.push(p);
            else if (B = h.contains(p.ownerDocument, p), v = e(P.appendChild(p),
                "script"), B && f(v), c)
            for (z = 0; p = v[z++];) Wa.test(p.type || "") && c.push(p);
        return P
    }

    function k() {
        return !0
    }

    function n() {
        return !1
    }

    function r() {
        try {
            return H.activeElement
        } catch (p) {}
    }

    function w(a, b, c, d, e, f) {
        var p, v;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (v in b) w(a, v, c, d, b[v], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), !1 === e) e = n;
        else if (!e) return a;
        return 1 === f && (p = e, e = function(a) {
                return h().off(a), p.apply(this, arguments)
            },
            e.guid = p.guid || (p.guid = h.guid++)), a.each(function() {
            h.event.add(this, b, e, d, c)
        })
    }

    function M(a, b) {
        return m(a, "table") && m(11 !== b.nodeType ? b : b.firstChild, "tr") ? h(">tbody", a)[0] || a : a
    }

    function G(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function ha(a) {
        var b = Ab.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function L(a, b) {
        var c, d, e, p, f, v;
        if (1 === b.nodeType) {
            if (E.hasData(a) && (c = E.access(a), d = E.set(b, c), v = c.events))
                for (e in delete d.handle, d.events = {}, v)
                    for (c = 0, d = v[e].length; c <
                        d; c++) h.event.add(b, e, v[e][c]);
            V.hasData(a) && (p = V.access(a), f = h.extend({}, p), V.set(b, f))
        }
    }

    function A(a, b, c, d) {
        b = Da.apply([], b);
        var p, f, v, z, B = 0,
            k = a.length,
            n = k - 1,
            r = b[0],
            w = h.isFunction(r);
        if (w || 1 < k && "string" == typeof r && !O.checkClone && Bb.test(r)) return a.each(function(e) {
            var p = a.eq(e);
            w && (b[0] = r.call(this, e, p.html()));
            A(p, b, c, d)
        });
        if (k && (p = g(b, a[0].ownerDocument, !1, a, d), f = p.firstChild, 1 === p.childNodes.length && (p = f), f || d)) {
            f = h.map(e(p, "script"), G);
            for (v = f.length; B < k; B++) z = p, B !== n && (z = h.clone(z, !0, !0),
                v && h.merge(f, e(z, "script"))), c.call(a[B], z, B);
            if (v)
                for (p = f[f.length - 1].ownerDocument, h.map(f, ha), B = 0; B < v; B++) z = f[B], Wa.test(z.type || "") && !E.access(z, "globalEval") && h.contains(p, z) && (z.src ? h._evalUrl && h._evalUrl(z.src) : x(z.textContent.replace(Cb, ""), p))
        }
        return a
    }

    function W(a, b, c) {
        for (var d = b ? h.filter(b, a) : a, p = 0; null != (b = d[p]); p++) c || 1 !== b.nodeType || h.cleanData(e(b)), b.parentNode && (c && h.contains(b.ownerDocument, b) && f(e(b, "script")), b.parentNode.removeChild(b));
        return a
    }

    function Y(a, b, c) {
        var d, e, p, f,
            v = a.style;
        return c = c || Ea(a), c && (f = c.getPropertyValue(b) || c[b], "" !== f || h.contains(a.ownerDocument, a) || (f = h.style(a, b)), !O.pixelMarginRight() && Ka.test(f) && Xa.test(b) && (d = v.width, e = v.minWidth, p = v.maxWidth, v.minWidth = v.maxWidth = v.width = f, f = c.width, v.width = d, v.minWidth = e, v.maxWidth = p)), void 0 !== f ? f + "" : f
    }

    function D(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    function J(a) {
        var b = h.cssProps[a];
        if (!b) {
            var b = h.cssProps,
                c;
            a: if (c = a, !(c in Ya)) {
                for (var d = c[0].toUpperCase() +
                        c.slice(1), e = Za.length; e--;)
                    if (c = Za[e] + d, c in Ya) break a;
                c = void 0
            }
            b = b[a] = c || a
        }
        return b
    }

    function Z(a, b, c) {
        return (a = ra.exec(b)) ? Math.max(0, a[2] - (c || 0)) + (a[3] || "px") : b
    }

    function da(a, b, c, d, e) {
        var p = 0;
        for (b = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; 4 > b; b += 2) "margin" === c && (p += h.css(a, c + sa[b], !0, e)), d ? ("content" === c && (p -= h.css(a, "padding" + sa[b], !0, e)), "margin" !== c && (p -= h.css(a, "border" + sa[b] + "Width", !0, e))) : (p += h.css(a, "padding" + sa[b], !0, e), "padding" !== c && (p += h.css(a, "border" + sa[b] + "Width", !0, e)));
        return p
    }

    function ja(a, b, c) {
        var d, e = Ea(a),
            p = Y(a, b, e),
            f = "border-box" === h.css(a, "boxSizing", !1, e);
        return Ka.test(p) ? p : (d = f && (O.boxSizingReliable() || p === a.style[b]), "auto" === p && (p = a["offset" + b[0].toUpperCase() + b.slice(1)]), p = parseFloat(p) || 0, p + da(a, b, c || (f ? "border" : "content"), d, e) + "px")
    }

    function C(a, b, c, d, e) {
        return new C.prototype.init(a, b, c, d, e)
    }

    function U() {
        Fa && (!1 === H.hidden && d.requestAnimationFrame ? d.requestAnimationFrame(U) : d.setTimeout(U, h.fx.interval), h.fx.tick())
    }

    function ka() {
        return d.setTimeout(function() {
            wa =
                void 0
        }), wa = h.now()
    }

    function ea(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = sa[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function la(a, b, c) {
        for (var d, e = (Q.tweeners[b] || []).concat(Q.tweeners["*"]), p = 0, f = e.length; p < f; p++)
            if (d = e[p].call(c, b, a)) return d
    }

    function La(a, b) {
        var c, d, e, p, f;
        for (c in a)
            if (d = h.camelCase(c), e = b[d], p = a[c], Array.isArray(p) && (e = p[1], p = a[c] = p[0]), c !== d && (a[d] = p, delete a[c]), f = h.cssHooks[d], f && "expand" in f)
                for (c in p = f.expand(p), delete a[d], p) c in
                    a || (a[c] = p[c], b[c] = e);
            else b[d] = e
    }

    function Q(a, b, c) {
        var d, e = 0,
            p = Q.prefilters.length,
            f = h.Deferred().always(function() {
                delete v.elem
            }),
            v = function() {
                if (d) return !1;
                for (var b = wa || ka(), b = Math.max(0, g.startTime + g.duration - b), c = 1 - (b / g.duration || 0), e = 0, p = g.tweens.length; e < p; e++) g.tweens[e].run(c);
                return f.notifyWith(a, [g, c, b]), 1 > c && p ? b : (p || f.notifyWith(a, [g, 1, 0]), f.resolveWith(a, [g]), !1)
            },
            g = f.promise({
                elem: a,
                props: h.extend({}, b),
                opts: h.extend(!0, {
                    specialEasing: {},
                    easing: h.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: wa || ka(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = h.Tween(a, g.opts, b, c, g.opts.specialEasing[b] || g.opts.easing);
                    return g.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        e = b ? g.tweens.length : 0;
                    if (d) return this;
                    for (d = !0; c < e; c++) g.tweens[c].run(1);
                    return b ? (f.notifyWith(a, [g, 1, 0]), f.resolveWith(a, [g, b])) : f.rejectWith(a, [g, b]), this
                }
            });
        c = g.props;
        for (La(c, g.opts.specialEasing); e < p; e++)
            if (b = Q.prefilters[e].call(g, a, c, g.opts)) return h.isFunction(b.stop) && (h._queueHooks(g.elem,
                g.opts.queue).stop = h.proxy(b.stop, b)), b;
        return h.map(c, la, g), h.isFunction(g.opts.start) && g.opts.start.call(a, g), g.progress(g.opts.progress).done(g.opts.done, g.opts.complete).fail(g.opts.fail).always(g.opts.always), h.fx.timer(h.extend(v, {
            elem: a,
            anim: g,
            queue: g.opts.queue
        })), g
    }

    function X(a) {
        return (a.match(fa) || []).join(" ")
    }

    function R(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }

    function N(a, b, c, d) {
        var e;
        if (Array.isArray(b)) h.each(b, function(b, e) {
            c || Db.test(a) ? d(a, e) : N(a + "[" + ("object" == typeof e &&
                null != e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== h.type(b)) d(a, b);
        else
            for (e in b) N(a + "[" + e + "]", b[e], c, d)
    }

    function qa(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                p = b.toLowerCase().match(fa) || [];
            if (h.isFunction(c))
                for (; d = p[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function xa(a, b, c, d) {
        function e(v) {
            var g;
            return p[v] = !0, h.each(a[v] || [], function(a, v) {
                var h = v(b, c, d);
                return "string" != typeof h || f || p[h] ? f ? !(g = h) : void 0 : (b.dataTypes.unshift(h),
                    e(h), !1)
            }), g
        }
        var p = {},
            f = a === Ma;
        return e(b.dataTypes[0]) || !p["*"] && e("*")
    }

    function ia(a, b) {
        var c, d, e = h.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && h.extend(!0, a, d), a
    }
    var ba = [],
        H = d.document,
        Na = Object.getPrototypeOf,
        ta = ba.slice,
        Da = ba.concat,
        Oa = ba.push,
        Ba = ba.indexOf,
        Ga = {},
        $a = Ga.toString,
        Ha = Ga.hasOwnProperty,
        ab = Ha.toString,
        Eb = ab.call(Object),
        O = {},
        h = function(a, b) {
            return new h.fn.init(a, b)
        },
        Fb = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        Gb = /^-ms-/,
        Hb = /-([a-z])/g,
        Ib = function(a, b) {
            return b.toUpperCase()
        };
    h.fn = h.prototype = {
        jquery: "3.2.1",
        constructor: h,
        length: 0,
        toArray: function() {
            return ta.call(this)
        },
        get: function(a) {
            return null == a ? ta.call(this) : 0 > a ? this[a + this.length] : this[a]
        },
        pushStack: function(a) {
            a = h.merge(this.constructor(), a);
            return a.prevObject = this, a
        },
        each: function(a) {
            return h.each(this, a)
        },
        map: function(a) {
            return this.pushStack(h.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(ta.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length;
            a = +a + (0 > a ? b : 0);
            return this.pushStack(0 <= a && a < b ? [this[a]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: Oa,
        sort: ba.sort,
        splice: ba.splice
    };
    h.extend = h.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            k = 1,
            n = arguments.length,
            r = !1;
        "boolean" == typeof g && (r = g, g = arguments[k] || {}, k++);
        "object" == typeof g || h.isFunction(g) || (g = {});
        for (k === n && (g = this, k--); k < n; k++)
            if (null != (a = arguments[k]))
                for (b in a) c = g[b], d = a[b],
                    g !== d && (r && d && (h.isPlainObject(d) || (e = Array.isArray(d))) ? (e ? (e = !1, f = c && Array.isArray(c) ? c : []) : f = c && h.isPlainObject(c) ? c : {}, g[b] = h.extend(r, f, d)) : void 0 !== d && (g[b] = d));
        return g
    };
    h.extend({
        expando: "jQuery" + ("3.2.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw Error(a);
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === h.type(a)
        },
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            var b = h.type(a);
            return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a))
        },
        isPlainObject: function(a) {
            var b, c;
            return !(!a || "[object Object]" !== $a.call(a)) && (!(b = Na(a)) || (c = Ha.call(b, "constructor") && b.constructor, "function" == typeof c && ab.call(c) === Eb))
        },
        isEmptyObject: function(a) {
            for (var b in a) return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? Ga[$a.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            x(a)
        },
        camelCase: function(a) {
            return a.replace(Gb, "ms-").replace(Hb, Ib)
        },
        each: function(a, b) {
            var c, d = 0;
            if (u(a))
                for (c = a.length; d < c && !1 !==
                    b.call(a[d], d, a[d]); d++);
            else
                for (d in a)
                    if (!1 === b.call(a[d], d, a[d])) break; return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(Fb, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (u(Object(a)) ? h.merge(c, "string" == typeof a ? [a] : a) : Oa.call(c, a)), c
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : Ba.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d = [], e = 0, p = a.length, f = !c; e < p; e++) c = !b(a[e], e), c !== f && d.push(a[e]);
            return d
        },
        map: function(a, b, c) {
            var d, e, p = 0,
                f = [];
            if (u(a))
                for (d = a.length; p < d; p++) e = b(a[p], p, c), null != e && f.push(e);
            else
                for (p in a) e = b(a[p], p, c), null != e && f.push(e);
            return Da.apply([], f)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            if ("string" == typeof b && (c = a[b], b = a, a = c), h.isFunction(a)) return d = ta.call(arguments, 2), e = function() {
                return a.apply(b || this, d.concat(ta.call(arguments)))
            }, e.guid = a.guid = a.guid || h.guid++, e
        },
        now: Date.now,
        support: O
    });
    "function" == typeof Symbol && (h.fn[Symbol.iterator] = ba[Symbol.iterator]);
    h.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        Ga["[object " + b + "]"] = b.toLowerCase()
    });
    var ma = function(a) {
        function b(a, b, c, d) {
            var e, p, f, v, g, h = b && b.ownerDocument,
                z = b ? b.nodeType : 9;
            if (c = c || [], "string" != typeof a || !a || 1 !== z && 9 !== z && 11 !== z) return c;
            if (!d && ((b ? b.ownerDocument || b : T) !== C && I(b), b = b || C, x)) {
                if (11 !== z && (v = Ba.exec(a)))
                    if (e = v[1])
                        if (9 === z) {
                            if (!(p = b.getElementById(e))) return c;
                            if (p.id === e) return c.push(p), c
                        } else {
                            if (h && (p = h.getElementById(e)) &&
                                ea(b, p) && p.id === e) return c.push(p), c
                        } else {
                    if (v[2]) return R.apply(c, b.getElementsByTagName(a)), c;
                    if ((e = v[3]) && M.getElementsByClassName && b.getElementsByClassName) return R.apply(c, b.getElementsByClassName(e)), c
                }
                if (!(!M.qsa || O[a + " "] || U && U.test(a))) {
                    if (1 !== z) h = b, g = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (f = b.getAttribute("id")) ? f = f.replace(ya, za): b.setAttribute("id", f = E);
                        p = F(a);
                        for (e = p.length; e--;) p[e] = "#" + f + " " + G(p[e]);
                        g = p.join(",");
                        h = ra.test(a) && r(b.parentNode) || b
                    }
                    if (g) try {
                        return R.apply(c, h.querySelectorAll(g)),
                            c
                    } catch (lc) {} finally {
                        f === E && b.removeAttribute("id")
                    }
                }
            }
            return Z(a.replace(aa, "$1"), b, c, d)
        }

        function c() {
            function a(c, d) {
                return b.push(c + " ") > t.cacheLength && delete a[b.shift()], a[c + " "] = d
            }
            var b = [];
            return a
        }

        function d(a) {
            return a[E] = !0, a
        }

        function e(a) {
            var b = C.createElement("fieldset");
            try {
                return !!a(b)
            } catch (jc) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b)
            }
        }

        function p(a, b) {
            for (var c = a.split("|"), d = c.length; d--;) t.attrHandle[c[d]] = b
        }

        function f(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType &&
                a.sourceIndex - b.sourceIndex;
            if (d) return d;
            if (c)
                for (; c = c.nextSibling;)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function g(a) {
            return function(b) {
                return "input" === b.nodeName.toLowerCase() && b.type === a
            }
        }

        function h(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function k(a) {
            return function(b) {
                return "form" in b ? b.parentNode && !1 === b.disabled ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && Ca(b) === a :
                    b.disabled === a : "label" in b && b.disabled === a
            }
        }

        function n(a) {
            return d(function(b) {
                return b = +b, d(function(c, d) {
                    for (var e, p = a([], c.length, b), f = p.length; f--;) c[e = p[f]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function r(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }

        function A() {}

        function G(a) {
            for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
            return d
        }

        function w(a, b, c) {
            var d = b.dir,
                e = b.next,
                p = e || d,
                f = c && "parentNode" === p,
                v = ca++;
            return b.first ? function(b, c, e) {
                    for (; b = b[d];)
                        if (1 === b.nodeType || f) return a(b, c, e);
                    return !1
                } :
                function(b, c, g) {
                    var h, z, k, B = [ka, v];
                    if (g)
                        for (; b = b[d];) {
                            if ((1 === b.nodeType || f) && a(b, c, g)) return !0
                        } else
                            for (; b = b[d];)
                                if (1 === b.nodeType || f)
                                    if (k = b[E] || (b[E] = {}), z = k[b.uniqueID] || (k[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;
                                    else {
                                        if ((h = z[p]) && h[0] === ka && h[1] === v) return B[2] = h[2];
                                        if (z[p] = B, B[2] = a(b, c, g)) return !0
                                    }
                    return !1
                }
        }

        function m(a) {
            return 1 < a.length ? function(b, c, d) {
                for (var e = a.length; e--;)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function l(a, b, c, d, e) {
            for (var p, f = [], v = 0, g = a.length, h = null !=
                    b; v < g; v++)(p = a[v]) && (c && !c(p, d, e) || (f.push(p), h && b.push(v)));
            return f
        }

        function ha(a, c, e, p, f, v) {
            return p && !p[E] && (p = ha(p)), f && !f[E] && (f = ha(f, v)), d(function(d, v, g, h) {
                var z, k, B = [],
                    n = [],
                    P = v.length,
                    r;
                if (!(r = d)) {
                    r = c || "*";
                    for (var S = g.nodeType ? [g] : g, oa = [], A = 0, G = S.length; A < G; A++) b(r, S[A], oa);
                    r = oa
                }
                r = !a || !d && c ? r : l(r, B, a, g, h);
                S = e ? f || (d ? a : P || p) ? [] : v : r;
                if (e && e(r, S, g, h), p)
                    for (z = l(S, n), p(z, [], g, h), g = z.length; g--;)(k = z[g]) && (S[n[g]] = !(r[n[g]] = k));
                if (d) {
                    if (f || a) {
                        if (f) {
                            z = [];
                            for (g = S.length; g--;)(k = S[g]) && z.push(r[g] =
                                k);
                            f(null, S = [], z, h)
                        }
                        for (g = S.length; g--;)(k = S[g]) && -1 < (z = f ? V(d, k) : B[g]) && (d[z] = !(v[z] = k))
                    }
                } else S = l(S === v ? S.splice(P, S.length) : S), f ? f(null, v, S, h) : R.apply(v, S)
            })
        }

        function W(a) {
            var b, c, d, e = a.length,
                p = t.relative[a[0].type];
            c = p || t.relative[" "];
            for (var f = p ? 1 : 0, v = w(function(a) {
                    return a === b
                }, c, !0), g = w(function(a) {
                    return -1 < V(b, a)
                }, c, !0), h = [function(a, c, d) {
                    a = !p && (d || c !== J) || ((b = c).nodeType ? v(a, c, d) : g(a, c, d));
                    return b = null, a
                }]; f < e; f++)
                if (c = t.relative[a[f].type]) h = [w(m(h), c)];
                else {
                    if (c = t.filter[a[f].type].apply(null,
                            a[f].matches), c[E]) {
                        for (d = ++f; d < e && !t.relative[a[d].type]; d++);
                        return ha(1 < f && m(h), 1 < f && G(a.slice(0, f - 1).concat({
                            value: " " === a[f - 2].type ? "*" : ""
                        })).replace(aa, "$1"), c, f < d && W(a.slice(f, d)), d < e && W(a = a.slice(d)), d < e && G(a))
                    }
                    h.push(c)
                }
            return m(h)
        }

        function Y(a, c) {
            var e = 0 < c.length,
                f = 0 < a.length,
                p = function(d, p, v, g, h) {
                    var z, k, B, n = 0,
                        P = "0",
                        r = d && [],
                        S = [],
                        oa = J,
                        A = d || f && t.find.TAG("*", h),
                        G = ka += null == oa ? 1 : Math.random() || .1,
                        wb = A.length;
                    for (h && (J = p === C || p || h); P !== wb && null != (z = A[P]); P++) {
                        if (f && z) {
                            k = 0;
                            for (p || z.ownerDocument ===
                                C || (I(z), v = !x); B = a[k++];)
                                if (B(z, p || C, v)) {
                                    g.push(z);
                                    break
                                }
                            h && (ka = G)
                        }
                        e && ((z = !B && z) && n--, d && r.push(z))
                    }
                    if (n += P, e && P !== n) {
                        for (k = 0; B = c[k++];) B(r, S, p, v);
                        if (d) {
                            if (0 < n)
                                for (; P--;) r[P] || S[P] || (S[P] = ba.call(g));
                            S = l(S)
                        }
                        R.apply(g, S);
                        h && !d && 0 < S.length && 1 < n + c.length && b.uniqueSort(g)
                    }
                    return h && (ka = G, J = oa), r
                };
            return e ? d(p) : p
        }
        var L, M, t, D, q, F, y, Z, J, u, da, I, C, K, x, U, ja, H, ea, E = "sizzle" + 1 * new Date,
            T = a.document,
            ka = 0,
            ca = 0,
            la = c(),
            N = c(),
            O = c(),
            qa = function(a, b) {
                return a === b && (da = !0), 0
            },
            La = {}.hasOwnProperty,
            Q = [],
            ba = Q.pop,
            X = Q.push,
            R = Q.push,
            ia = Q.slice,
            V = function(a, b) {
                for (var c = 0, d = a.length; c < d; c++)
                    if (a[c] === b) return c;
                return -1
            },
            fa = RegExp("[\\x20\\t\\r\\n\\f]+", "g"),
            aa = RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"),
            xa = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
            ta = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
            pa = RegExp("=[\\x20\\t\\r\\n\\f]*([^\\]'\"]*?)[\\x20\\t\\r\\n\\f]*\\]", "g"),
            Da = /:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
            sa = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/,
            ma = {
                ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                TAG: /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/,
                ATTR: /^\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\]/,
                PSEUDO: /^:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
                CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
                bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
                needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
            },
            wa = /^(?:input|select|textarea|button)$/i,
            Na = /^h\d$/i,
            na =
            /^[^{]+\{\s*\[native \w/,
            Ba = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ra = /[+~]/,
            ua = RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)", "ig"),
            va = function(a, b, c) {
                a = "0x" + b - 65536;
                return a !== a || c ? b : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, 1023 & a | 56320)
            },
            ya = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            za = function(a, b) {
                return b ? "\x00" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a
            },
            Aa = function() {
                I()
            },
            Ca = w(function(a) {
                return !0 ===
                    a.disabled && ("form" in a || "label" in a)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            R.apply(Q = ia.call(T.childNodes), T.childNodes), Q[T.childNodes.length].nodeType
        } catch (S) {
            R = {
                apply: Q.length ? function(a, b) {
                    X.apply(a, ia.call(b))
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }
        M = b.support = {};
        q = b.isXML = function(a) {
            a = a && (a.ownerDocument || a).documentElement;
            return !!a && "HTML" !== a.nodeName
        };
        I = b.setDocument = function(a) {
            var b, c;
            a = a ? a.ownerDocument || a : T;
            return a !== C && 9 === a.nodeType && a.documentElement ?
                (C = a, K = C.documentElement, x = !q(C), T !== C && (c = C.defaultView) && c.top !== c && (c.addEventListener ? c.addEventListener("unload", Aa, !1) : c.attachEvent && c.attachEvent("onunload", Aa)), M.attributes = e(function(a) {
                        return a.className = "i", !a.getAttribute("className")
                    }), M.getElementsByTagName = e(function(a) {
                        return a.appendChild(C.createComment("")), !a.getElementsByTagName("*").length
                    }), M.getElementsByClassName = na.test(C.getElementsByClassName), M.getById = e(function(a) {
                        return K.appendChild(a).id = E, !C.getElementsByName ||
                            !C.getElementsByName(E).length
                    }), M.getById ? (t.filter.ID = function(a) {
                        var b = a.replace(ua, va);
                        return function(a) {
                            return a.getAttribute("id") === b
                        }
                    }, t.find.ID = function(a, b) {
                        if ("undefined" != typeof b.getElementById && x) {
                            var c = b.getElementById(a);
                            return c ? [c] : []
                        }
                    }) : (t.filter.ID = function(a) {
                        var b = a.replace(ua, va);
                        return function(a) {
                            return (a = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id")) && a.value === b
                        }
                    }, t.find.ID = function(a, b) {
                        if ("undefined" != typeof b.getElementById && x) {
                            var c, d, e, p = b.getElementById(a);
                            if (p) {
                                if (c = p.getAttributeNode("id"), c && c.value === a) return [p];
                                e = b.getElementsByName(a);
                                for (d = 0; p = e[d++];)
                                    if (c = p.getAttributeNode("id"), c && c.value === a) return [p]
                            }
                            return []
                        }
                    }), t.find.TAG = M.getElementsByTagName ? function(a, b) {
                        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : M.qsa ? b.querySelectorAll(a) : void 0
                    } : function(a, b) {
                        var c, d = [],
                            e = 0,
                            p = b.getElementsByTagName(a);
                        if ("*" === a) {
                            for (; c = p[e++];) 1 === c.nodeType && d.push(c);
                            return d
                        }
                        return p
                    }, t.find.CLASS = M.getElementsByClassName && function(a,
                        b) {
                        if ("undefined" != typeof b.getElementsByClassName && x) return b.getElementsByClassName(a)
                    }, ja = [], U = [], (M.qsa = na.test(C.querySelectorAll)) && (e(function(a) {
                        K.appendChild(a).innerHTML = "<a id='" + E + "'></a><select id='" + E + "-\r\\' msallowcapture=''><option selected=''></option></select>";
                        a.querySelectorAll("[msallowcapture^='']").length && U.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                        a.querySelectorAll("[selected]").length || U.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                        a.querySelectorAll("[id~=" + E + "-]").length || U.push("~=");
                        a.querySelectorAll(":checked").length || U.push(":checked");
                        a.querySelectorAll("a#" + E + "+*").length || U.push(".#.+[+~]")
                    }), e(function(a) {
                        a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var b = C.createElement("input");
                        b.setAttribute("type", "hidden");
                        a.appendChild(b).setAttribute("name", "D");
                        a.querySelectorAll("[name=d]").length && U.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
                        2 !== a.querySelectorAll(":enabled").length &&
                            U.push(":enabled", ":disabled");
                        K.appendChild(a).disabled = !0;
                        2 !== a.querySelectorAll(":disabled").length && U.push(":enabled", ":disabled");
                        a.querySelectorAll("*,:x");
                        U.push(",.*:")
                    })), (M.matchesSelector = na.test(H = K.matches || K.webkitMatchesSelector || K.mozMatchesSelector || K.oMatchesSelector || K.msMatchesSelector)) && e(function(a) {
                        M.disconnectedMatch = H.call(a, "*");
                        H.call(a, "[s!='']:x");
                        ja.push("!=", ":((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)")
                    }),
                    U = U.length && new RegExp(U.join("|")), ja = ja.length && new RegExp(ja.join("|")), b = na.test(K.compareDocumentPosition), ea = b || na.test(K.contains) ? function(a, b) {
                        var c = 9 === a.nodeType ? a.documentElement : a,
                            d = b && b.parentNode;
                        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                    } : function(a, b) {
                        if (b)
                            for (; b = b.parentNode;)
                                if (b === a) return !0;
                        return !1
                    }, qa = b ? function(a, b) {
                        if (a === b) return da = !0, 0;
                        var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                        return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !M.sortDetached && b.compareDocumentPosition(a) === c ? a === C || a.ownerDocument === T && ea(T, a) ? -1 : b === C || b.ownerDocument === T && ea(T, b) ? 1 : u ? V(u, a) - V(u, b) : 0 : 4 & c ? -1 : 1)
                    } : function(a, b) {
                        if (a === b) return da = !0, 0;
                        var c, d = 0;
                        c = a.parentNode;
                        var e = b.parentNode,
                            p = [a],
                            g = [b];
                        if (!c || !e) return a === C ? -1 : b === C ? 1 : c ? -1 : e ? 1 : u ? V(u, a) - V(u, b) : 0;
                        if (c === e) return f(a, b);
                        for (c = a; c = c.parentNode;) p.unshift(c);
                        for (c = b; c = c.parentNode;) g.unshift(c);
                        for (; p[d] === g[d];) d++;
                        return d ? f(p[d], g[d]) : p[d] === T ? -1 : g[d] === T ? 1 : 0
                    }, C) : C
        };
        b.matches = function(a, c) {
            return b(a, null, null, c)
        };
        b.matchesSelector = function(a, c) {
            if ((a.ownerDocument || a) !== C && I(a), c = c.replace(pa, "='$1']"), !(!M.matchesSelector || !x || O[c + " "] || ja && ja.test(c) || U && U.test(c))) try {
                var d = H.call(a, c);
                if (d || M.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (kc) {}
            return 0 < b(c, C, null, [a]).length
        };
        b.contains = function(a, b) {
            return (a.ownerDocument || a) !== C && I(a), ea(a, b)
        };
        b.attr = function(a,
            b) {
            (a.ownerDocument || a) !== C && I(a);
            var c = t.attrHandle[b.toLowerCase()],
                c = c && La.call(t.attrHandle, b.toLowerCase()) ? c(a, b, !x) : void 0;
            return void 0 !== c ? c : M.attributes || !x ? a.getAttribute(b) : (c = a.getAttributeNode(b)) && c.specified ? c.value : null
        };
        b.escape = function(a) {
            return (a + "").replace(ya, za)
        };
        b.error = function(a) {
            throw Error("Syntax error, unrecognized expression: " + a);
        };
        b.uniqueSort = function(a) {
            var b, c = [],
                d = 0,
                e = 0;
            if (da = !M.detectDuplicates, u = !M.sortStable && a.slice(0), a.sort(qa), da) {
                for (; b = a[e++];) b === a[e] &&
                    (d = c.push(e));
                for (; d--;) a.splice(c[d], 1)
            }
            return u = null, a
        };
        D = b.getText = function(a) {
            var b, c = "",
                d = 0;
            if (b = a.nodeType)
                if (1 === b || 9 === b || 11 === b) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += D(a)
                } else {
                    if (3 === b || 4 === b) return a.nodeValue
                } else
                for (; b = a[d++];) c += D(b);
            return c
        };
        t = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: ma,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ua, va), a[3] = (a[3] || a[4] || a[5] || "").replace(ua, va), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return ma.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && Da.test(c) && (b = F(c, !0)) && (b = c.indexOf(")",
                        c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ua, va).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = la[a + " "];
                    return b || (b = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)"), la(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    }))
                },
                ATTR: function(a,
                    c, d) {
                    return function(e) {
                        e = b.attr(e, a);
                        return null == e ? "!=" === c : !c || (e += "", "=" === c ? e === d : "!=" === c ? e !== d : "^=" === c ? d && 0 === e.indexOf(d) : "*=" === c ? d && -1 < e.indexOf(d) : "$=" === c ? d && e.slice(-d.length) === d : "~=" === c ? -1 < (" " + e.replace(fa, " ") + " ").indexOf(d) : "|=" === c && (e === d || e.slice(0, d.length + 1) === d + "-"))
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var p = "nth" !== a.slice(0, 3),
                        f = "last" !== a.slice(-4),
                        g = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, v) {
                        var h, z, k, B, n, P;
                        c = p !== f ? "nextSibling" : "previousSibling";
                        var r = b.parentNode,
                            oa = g && b.nodeName.toLowerCase();
                        v = !v && !g;
                        var A = !1;
                        if (r) {
                            if (p) {
                                for (; c;) {
                                    for (B = b; B = B[c];)
                                        if (g ? B.nodeName.toLowerCase() === oa : 1 === B.nodeType) return !1;
                                    P = c = "only" === a && !P && "nextSibling"
                                }
                                return !0
                            }
                            if (P = [f ? r.firstChild : r.lastChild], f && v)
                                for (B = r, k = B[E] || (B[E] = {}), z = k[B.uniqueID] || (k[B.uniqueID] = {}), h = z[a] || [], A = (n = h[0] === ka && h[1]) && h[2], B = n && r.childNodes[n]; B = ++n && B && B[c] || (A = n = 0) || P.pop();) {
                                    if (1 === B.nodeType && ++A && B === b) {
                                        z[a] = [ka, n, A];
                                        break
                                    }
                                } else if (v && (B = b, k = B[E] || (B[E] = {}), z = k[B.uniqueID] ||
                                        (k[B.uniqueID] = {}), h = z[a] || [], n = h[0] === ka && h[1], A = n), !1 === A)
                                    for (;
                                        (B = ++n && B && B[c] || (A = n = 0) || P.pop()) && ((g ? B.nodeName.toLowerCase() !== oa : 1 !== B.nodeType) || !++A || (v && (k = B[E] || (B[E] = {}), z = k[B.uniqueID] || (k[B.uniqueID] = {}), z[a] = [ka, A]), B !== b)););
                            return A -= e, A === d || 0 === A % d && 0 <= A / d
                        }
                    }
                },
                PSEUDO: function(a, c) {
                    var e, p = t.pseudos[a] || t.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return p[E] ? p(c) : 1 < p.length ? (e = [a, a, "", c], t.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                        for (var d, e =
                                p(a, c), f = e.length; f--;) d = V(a, e[f]), a[d] = !(b[d] = e[f])
                    }) : function(a) {
                        return p(a, 0, e)
                    }) : p
                }
            },
            pseudos: {
                not: d(function(a) {
                    var b = [],
                        c = [],
                        e = y(a.replace(aa, "$1"));
                    return e[E] ? d(function(a, b, c, d) {
                        var p;
                        c = e(a, null, d, []);
                        for (d = a.length; d--;)(p = c[d]) && (a[d] = !(b[d] = p))
                    }) : function(a, d, p) {
                        return b[0] = a, e(b, null, p, c), b[0] = null, !c.pop()
                    }
                }),
                has: d(function(a) {
                    return function(c) {
                        return 0 < b(a, c).length
                    }
                }),
                contains: d(function(a) {
                    return a = a.replace(ua, va),
                        function(b) {
                            return -1 < (b.textContent || b.innerText || D(b)).indexOf(a)
                        }
                }),
                lang: d(function(a) {
                    return sa.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(ua, va).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = x ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                            while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === K
                },
                focus: function(a) {
                    return a === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(a.type || a.href ||
                        ~a.tabIndex)
                },
                enabled: k(!1),
                disabled: k(!0),
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (6 > a.nodeType) return !1;
                    return !0
                },
                parent: function(a) {
                    return !t.pseudos.empty(a)
                },
                header: function(a) {
                    return Na.test(a.nodeName)
                },
                input: function(a) {
                    return wa.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: n(function() {
                    return [0]
                }),
                last: n(function(a, b) {
                    return [b - 1]
                }),
                eq: n(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: n(function(a, b) {
                    for (var c = 0; c < b; c += 2) a.push(c);
                    return a
                }),
                odd: n(function(a, b) {
                    for (var c = 1; c < b; c += 2) a.push(c);
                    return a
                }),
                lt: n(function(a, b, c) {
                    for (b = 0 > c ? c + b : c; 0 <= --b;) a.push(b);
                    return a
                }),
                gt: n(function(a,
                    b, c) {
                    for (c = 0 > c ? c + b : c; ++c < b;) a.push(c);
                    return a
                })
            }
        };
        t.pseudos.nth = t.pseudos.eq;
        for (L in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) t.pseudos[L] = g(L);
        for (L in {
                submit: !0,
                reset: !0
            }) t.pseudos[L] = h(L);
        A.prototype = t.filters = t.pseudos;
        t.setFilters = new A;
        F = b.tokenize = function(a, c) {
            var d, e, p, f, g, v, h;
            if (g = N[a + " "]) return c ? 0 : g.slice(0);
            g = a;
            v = [];
            for (h = t.preFilter; g;) {
                d && !(e = xa.exec(g)) || (e && (g = g.slice(e[0].length) || g), v.push(p = []));
                d = !1;
                (e = ta.exec(g)) && (d = e.shift(), p.push({
                    value: d,
                    type: e[0].replace(aa,
                        " ")
                }), g = g.slice(d.length));
                for (f in t.filter) !(e = ma[f].exec(g)) || h[f] && !(e = h[f](e)) || (d = e.shift(), p.push({
                    value: d,
                    type: f,
                    matches: e
                }), g = g.slice(d.length));
                if (!d) break
            }
            return c ? g.length : g ? b.error(a) : N(a, v).slice(0)
        };
        return y = b.compile = function(a, b) {
                var c, d = [],
                    e = [],
                    p = O[a + " "];
                if (!p) {
                    b || (b = F(a));
                    for (c = b.length; c--;) p = W(b[c]), p[E] ? d.push(p) : e.push(p);
                    p = O(a, Y(e, d));
                    p.selector = a
                }
                return p
            }, Z = b.select = function(a, b, c, d) {
                var e, p, f, g, v, h = "function" == typeof a && a,
                    z = !d && F(a = h.selector || a);
                if (c = c || [], 1 === z.length) {
                    if (p =
                        z[0] = z[0].slice(0), 2 < p.length && "ID" === (f = p[0]).type && 9 === b.nodeType && x && t.relative[p[1].type]) {
                        if (b = (t.find.ID(f.matches[0].replace(ua, va), b) || [])[0], !b) return c;
                        h && (b = b.parentNode);
                        a = a.slice(p.shift().value.length)
                    }
                    for (e = ma.needsContext.test(a) ? 0 : p.length; e-- && (f = p[e], !t.relative[g = f.type]);)
                        if ((v = t.find[g]) && (d = v(f.matches[0].replace(ua, va), ra.test(p[0].type) && r(b.parentNode) || b))) {
                            if (p.splice(e, 1), a = d.length && G(p), !a) return R.apply(c, d), c;
                            break
                        }
                }
                return (h || y(a, z))(d, b, !x, c, !b || ra.test(a) && r(b.parentNode) ||
                    b), c
            }, M.sortStable = E.split("").sort(qa).join("") === E, M.detectDuplicates = !!da, I(), M.sortDetached = e(function(a) {
                return 1 & a.compareDocumentPosition(C.createElement("fieldset"))
            }), e(function(a) {
                return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
            }) || p("type|href|height|width", function(a, b, c) {
                if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
            }), M.attributes && e(function(a) {
                return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
            }) ||
            p("value", function(a, b, c) {
                if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue
            }), e(function(a) {
                return null == a.getAttribute("disabled")
            }) || p("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function(a, b, c) {
                var d;
                if (!c) return !0 === a[b] ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            }), b
    }(d);
    h.find = ma;
    h.expr = ma.selectors;
    h.expr[":"] = h.expr.pseudos;
    h.uniqueSort = h.unique = ma.uniqueSort;
    h.text = ma.getText;
    h.isXMLDoc = ma.isXML;
    h.contains = ma.contains;
    h.escapeSelector = ma.escape;
    var na = function(a, b, c) {
            for (var d = [], e = void 0 !== c;
                (a = a[b]) && 9 !== a.nodeType;)
                if (1 === a.nodeType) {
                    if (e && h(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        cb = function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        },
        db = h.expr.match.needsContext,
        eb = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        tb = /^.[^:#\[\.,]*$/;
    h.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ?
            h.find.matchesSelector(d, a) ? [d] : [] : h.find.matches(a, h.grep(b, function(a) {
                return 1 === a.nodeType
            }))
    };
    h.fn.extend({
        find: function(a) {
            var b, c, d = this.length,
                e = this;
            if ("string" != typeof a) return this.pushStack(h(a).filter(function() {
                for (b = 0; b < d; b++)
                    if (h.contains(e[b], this)) return !0
            }));
            c = this.pushStack([]);
            for (b = 0; b < d; b++) h.find(a, e[b], c);
            return 1 < d ? h.uniqueSort(c) : c
        },
        filter: function(a) {
            return this.pushStack(y(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(y(this, a || [], !0))
        },
        is: function(a) {
            return !!y(this,
                "string" == typeof a && db.test(a) ? h(a) : a || [], !1).length
        }
    });
    var fb, Kb = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (h.fn.init = function(a, b, c) {
        var d, e;
        if (!a) return this;
        if (c = c || fb, "string" == typeof a) {
            if (d = "<" === a[0] && ">" === a[a.length - 1] && 3 <= a.length ? [null, a, null] : Kb.exec(a), !d || !d[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
            if (d[1]) {
                if (b = b instanceof h ? b[0] : b, h.merge(this, h.parseHTML(d[1], b && b.nodeType ? b.ownerDocument || b : H, !0)), eb.test(d[1]) && h.isPlainObject(b))
                    for (d in b) h.isFunction(this[d]) ?
                        this[d](b[d]) : this.attr(d, b[d]);
                return this
            }
            return e = H.getElementById(d[2]), e && (this[0] = e, this.length = 1), this
        }
        return a.nodeType ? (this[0] = a, this.length = 1, this) : h.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(h) : h.makeArray(a, this)
    }).prototype = h.fn;
    fb = h(H);
    var Lb = /^(?:parents|prev(?:Until|All))/,
        Mb = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    h.fn.extend({
        has: function(a) {
            var b = h(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; a < c; a++)
                    if (h.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            var c,
                d = 0,
                e = this.length,
                f = [],
                p = "string" != typeof a && h(a);
            if (!db.test(a))
                for (; d < e; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (11 > c.nodeType && (p ? -1 < p.index(c) : 1 === c.nodeType && h.find.matchesSelector(c, a))) {
                            f.push(c);
                            break
                        }
            return this.pushStack(1 < f.length ? h.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? Ba.call(h(a), this[0]) : Ba.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(h.uniqueSort(h.merge(this.get(), h(a,
                b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    h.each({
        parent: function(a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null
        },
        parents: function(a) {
            return na(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return na(a, "parentNode", c)
        },
        next: function(a) {
            return l(a, "nextSibling")
        },
        prev: function(a) {
            return l(a, "previousSibling")
        },
        nextAll: function(a) {
            return na(a, "nextSibling")
        },
        prevAll: function(a) {
            return na(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return na(a,
                "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return na(a, "previousSibling", c)
        },
        siblings: function(a) {
            return cb((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return cb(a.firstChild)
        },
        contents: function(a) {
            return m(a, "iframe") ? a.contentDocument : (m(a, "template") && (a = a.content || a), h.merge([], a.childNodes))
        }
    }, function(a, b) {
        h.fn[a] = function(c, d) {
            var e = h.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = h.filter(d, e)), 1 < this.length && (Mb[a] || h.uniqueSort(e), Lb.test(a) && e.reverse()),
                this.pushStack(e)
        }
    });
    var fa = /[^\x20\t\r\n\f]+/g;
    h.Callbacks = function(a) {
        a = "string" == typeof a ? I(a) : h.extend({}, a);
        var b, c, d, e, f = [],
            p = [],
            g = -1,
            k = function() {
                e = e || a.once;
                for (d = b = !0; p.length; g = -1)
                    for (c = p.shift(); ++g < f.length;) !1 === f[g].apply(c[0], c[1]) && a.stopOnFalse && (g = f.length, c = !1);
                a.memory || (c = !1);
                b = !1;
                e && (f = c ? [] : "")
            },
            n = {
                add: function() {
                    return f && (c && !b && (g = f.length - 1, p.push(c)), function yb(b) {
                            h.each(b, function(b, c) {
                                h.isFunction(c) ? a.unique && n.has(c) || f.push(c) : c && c.length && "string" !== h.type(c) && yb(c)
                            })
                        }(arguments),
                        c && !b && k()), this
                },
                remove: function() {
                    return h.each(arguments, function(a, b) {
                        for (var c; - 1 < (c = h.inArray(b, f, c));) f.splice(c, 1), c <= g && g--
                    }), this
                },
                has: function(a) {
                    return a ? -1 < h.inArray(a, f) : 0 < f.length
                },
                empty: function() {
                    return f && (f = []), this
                },
                disable: function() {
                    return e = p = [], f = c = "", this
                },
                disabled: function() {
                    return !f
                },
                lock: function() {
                    return e = p = [], c || b || (f = c = ""), this
                },
                locked: function() {
                    return !!e
                },
                fireWith: function(a, c) {
                    return e || (c = c || [], c = [a, c.slice ? c.slice() : c], p.push(c), b || k()), this
                },
                fire: function() {
                    return n.fireWith(this,
                        arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return n
    };
    h.extend({
        Deferred: function(a) {
            var b = [
                    ["notify", "progress", h.Callbacks("memory"), h.Callbacks("memory"), 2],
                    ["resolve", "done", h.Callbacks("once memory"), h.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", h.Callbacks("once memory"), h.Callbacks("once memory"), 1, "rejected"]
                ],
                c = "pending",
                e = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return f.done(arguments).fail(arguments), this
                    },
                    "catch": function(a) {
                        return e.then(null, a)
                    },
                    pipe: function() {
                        var a =
                            arguments;
                        return h.Deferred(function(c) {
                            h.each(b, function(b, d) {
                                var e = h.isFunction(a[d[4]]) && a[d[4]];
                                f[d[1]](function() {
                                    var a = e && e.apply(this, arguments);
                                    a && h.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[d[0] + "With"](this, e ? [a] : arguments)
                                })
                            });
                            a = null
                        }).promise()
                    },
                    then: function(a, c, e) {
                        function f(a, b, c, e) {
                            return function() {
                                var g = this,
                                    v = arguments,
                                    z = function() {
                                        var d, z;
                                        if (!(a < p)) {
                                            if (d = c.apply(g, v), d === b.promise()) throw new TypeError("Thenable self-resolution");
                                            z = d &&
                                                ("object" == typeof d || "function" == typeof d) && d.then;
                                            h.isFunction(z) ? e ? z.call(d, f(p, b, t, e), f(p, b, F, e)) : (p++, z.call(d, f(p, b, t, e), f(p, b, F, e), f(p, b, t, b.notifyWith))) : (c !== t && (g = void 0, v = [d]), (e || b.resolveWith)(g, v))
                                        }
                                    },
                                    k = e ? z : function() {
                                        try {
                                            z()
                                        } catch (bb) {
                                            h.Deferred.exceptionHook && h.Deferred.exceptionHook(bb, k.stackTrace), a + 1 >= p && (c !== F && (g = void 0, v = [bb]), b.rejectWith(g, v))
                                        }
                                    };
                                a ? k() : (h.Deferred.getStackHook && (k.stackTrace = h.Deferred.getStackHook()), d.setTimeout(k))
                            }
                        }
                        var p = 0;
                        return h.Deferred(function(d) {
                            b[0][3].add(f(0,
                                d, h.isFunction(e) ? e : t, d.notifyWith));
                            b[1][3].add(f(0, d, h.isFunction(a) ? a : t));
                            b[2][3].add(f(0, d, h.isFunction(c) ? c : F))
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? h.extend(a, e) : e
                    }
                },
                f = {};
            return h.each(b, function(a, d) {
                var p = d[2],
                    g = d[5];
                e[d[1]] = p.add;
                g && p.add(function() {
                    c = g
                }, b[3 - a][2].disable, b[0][2].lock);
                p.add(d[3].fire);
                f[d[0]] = function() {
                    return f[d[0] + "With"](this === f ? void 0 : this, arguments), this
                };
                f[d[0] + "With"] = p.fireWith
            }), e.promise(f), a && a.call(f, f), f
        },
        when: function(a) {
            var b = arguments.length,
                c = b,
                d = Array(c),
                e = ta.call(arguments),
                f = h.Deferred(),
                p = function(a) {
                    return function(c) {
                        d[a] = this;
                        e[a] = 1 < arguments.length ? ta.call(arguments) : c;
                        --b || f.resolveWith(d, e)
                    }
                };
            if (1 >= b && (K(a, f.done(p(c)).resolve, f.reject, !b), "pending" === f.state() || h.isFunction(e[c] && e[c].then))) return f.then();
            for (; c--;) K(e[c], p(c), f.reject);
            return f.promise()
        }
    });
    var Nb = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    h.Deferred.exceptionHook = function(a, b) {
        d.console && d.console.warn && a && Nb.test(a.name) && d.console.warn("jQuery.Deferred exception: " +
            a.message, a.stack, b)
    };
    h.readyException = function(a) {
        d.setTimeout(function() {
            throw a;
        })
    };
    var Qa = h.Deferred();
    h.fn.ready = function(a) {
        return Qa.then(a)["catch"](function(a) {
            h.readyException(a)
        }), this
    };
    h.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(a) {
            (!0 === a ? --h.readyWait : h.isReady) || (h.isReady = !0, !0 !== a && 0 < --h.readyWait || Qa.resolveWith(H, [h]))
        }
    });
    h.ready.then = Qa.then;
    "complete" === H.readyState || "loading" !== H.readyState && !H.documentElement.doScroll ? d.setTimeout(h.ready) : (H.addEventListener("DOMContentLoaded",
        T), d.addEventListener("load", T));
    var pa = function(a, b, c, d, e, f, g) {
            var p = 0,
                v = a.length,
                k = null == c;
            if ("object" === h.type(c))
                for (p in e = !0, c) pa(a, b, p, c[p], !0, f, g);
            else if (void 0 !== d && (e = !0, h.isFunction(d) || (g = !0), k && (g ? (b.call(a, d), b = null) : (k = b, b = function(a, b, c) {
                    return k.call(h(a), c)
                })), b))
                for (; p < v; p++) b(a[p], c, g ? d : d.call(a[p], p, b(a[p], c)));
            return e ? a : k ? b.call(a) : v ? b(a[0], c) : f
        },
        Ia = function(a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
        };
    ca.uid = 1;
    ca.prototype = {
        cache: function(a) {
            var b = a[this.expando];
            return b || (b = {}, Ia(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))), b
        },
        set: function(a, b, c) {
            var d;
            a = this.cache(a);
            if ("string" == typeof b) a[h.camelCase(b)] = c;
            else
                for (d in b) a[h.camelCase(d)] = b[d];
            return a
        },
        get: function(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][h.camelCase(b)]
        },
        access: function(a, b, c) {
            return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c,
                d = a[this.expando];
            if (void 0 !== d) {
                if (void 0 !== b)
                    for (Array.isArray(b) ? b = b.map(h.camelCase) : (b = h.camelCase(b), b = b in d ? [b] : b.match(fa) || []), c = b.length; c--;) delete d[b[c]];
                (void 0 === b || h.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
            }
        },
        hasData: function(a) {
            a = a[this.expando];
            return void 0 !== a && !h.isEmptyObject(a)
        }
    };
    var E = new ca,
        V = new ca,
        vb = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ub = /[A-Z]/g;
    h.extend({
        hasData: function(a) {
            return V.hasData(a) || E.hasData(a)
        },
        data: function(a, b, c) {
            return V.access(a,
                b, c)
        },
        removeData: function(a, b) {
            V.remove(a, b)
        },
        _data: function(a, b, c) {
            return E.access(a, b, c)
        },
        _removeData: function(a, b) {
            E.remove(a, b)
        }
    });
    h.fn.extend({
        data: function(b, c) {
            var d, e, f, p = this[0],
                g = p && p.attributes;
            if (void 0 === b) {
                if (this.length && (f = V.get(p), 1 === p.nodeType && !E.get(p, "hasDataAttrs"))) {
                    for (d = g.length; d--;) g[d] && (e = g[d].name, 0 === e.indexOf("data-") && (e = h.camelCase(e.slice(5)), a(p, e, f[e])));
                    E.set(p, "hasDataAttrs", !0)
                }
                return f
            }
            return "object" == typeof b ? this.each(function() {
                V.set(this, b)
            }) : pa(this,
                function(c) {
                    var d;
                    if (p && void 0 === c) {
                        if ((d = V.get(p, b), void 0 !== d) || (d = a(p, b), void 0 !== d)) return d
                    } else this.each(function() {
                        V.set(this, b, c)
                    })
                }, null, c, 1 < arguments.length, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                V.remove(this, a)
            })
        }
    });
    h.extend({
        queue: function(a, b, c) {
            var d;
            if (a) return b = (b || "fx") + "queue", d = E.get(a, b), c && (!d || Array.isArray(c) ? d = E.access(a, b, h.makeArray(c)) : d.push(c)), d || []
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = h.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = h._queueHooks(a, b),
                p = function() {
                    h.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--);
            e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, p, f));
            !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return E.get(a, c) || E.access(a, c, {
                empty: h.Callbacks("once memory").add(function() {
                    E.remove(a, [b + "queue", c])
                })
            })
        }
    });
    h.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? h.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = h.queue(this, a, b);
                h._queueHooks(this,
                    a);
                "fx" === a && "inprogress" !== c[0] && h.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                h.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = h.Deferred(),
                f = this,
                p = this.length,
                g = function() {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0);
            for (a = a || "fx"; p--;)(c = E.get(f[p], a + "queueHooks")) && c.empty && (d++, c.empty.add(g));
            return g(), e.promise(b)
        }
    });
    var gb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ra = new RegExp("^(?:([+-])=|)(" +
            gb + ")([a-z%]*)$", "i"),
        sa = ["Top", "Right", "Bottom", "Left"],
        Ca = function(a, b) {
            return a = b || a, "none" === a.style.display || "" === a.style.display && h.contains(a.ownerDocument, a) && "none" === h.css(a, "display")
        },
        hb = function(a, b, c, d) {
            var e, f = {};
            for (e in b) f[e] = a.style[e], a.style[e] = b[e];
            c = c.apply(a, d || []);
            for (e in b) a.style[e] = f[e];
            return c
        },
        Ua = {};
    h.fn.extend({
        show: function() {
            return c(this, !0)
        },
        hide: function() {
            return c(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                Ca(this) ?
                    h(this).show() : h(this).hide()
            })
        }
    });
    var ib = /^(?:checkbox|radio)$/i,
        Va = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Wa = /^$|\/(?:java|ecma)script/i,
        aa = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    aa.optgroup = aa.option;
    aa.tbody = aa.tfoot = aa.colgroup = aa.caption = aa.thead;
    aa.th = aa.td;
    var zb = /<|&#?\w+;/;
    ! function() {
        var a =
            H.createDocumentFragment().appendChild(H.createElement("div")),
            b = H.createElement("input");
        b.setAttribute("type", "radio");
        b.setAttribute("checked", "checked");
        b.setAttribute("name", "t");
        a.appendChild(b);
        O.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked;
        a.innerHTML = "<textarea>x</textarea>";
        O.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue
    }();
    var Ja = H.documentElement,
        Ob = /^key/,
        Pb = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        jb = /^([^.]*)(?:\.(.+)|)/;
    h.event = {
        global: {},
        add: function(a,
            b, c, d, e) {
            var f, p, g, v, k, z, n, B, r, A;
            if (k = E.get(a))
                for (c.handler && (f = c, c = f.handler, e = f.selector), e && h.find.matchesSelector(Ja, e), c.guid || (c.guid = h.guid++), (v = k.events) || (v = k.events = {}), (p = k.handle) || (p = k.handle = function(b) {
                        return "undefined" != typeof h && h.event.triggered !== b.type ? h.event.dispatch.apply(a, arguments) : void 0
                    }), b = (b || "").match(fa) || [""], k = b.length; k--;) g = jb.exec(b[k]) || [], r = A = g[1], g = (g[2] || "").split(".").sort(), r && (n = h.event.special[r] || {}, r = (e ? n.delegateType : n.bindType) || r, n = h.event.special[r] || {}, z = h.extend({
                    type: r,
                    origType: A,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && h.expr.match.needsContext.test(e),
                    namespace: g.join(".")
                }, f), (B = v[r]) || (B = v[r] = [], B.delegateCount = 0, n.setup && !1 !== n.setup.call(a, d, g, p) || a.addEventListener && a.addEventListener(r, p)), n.add && (n.add.call(a, z), z.handler.guid || (z.handler.guid = c.guid)), e ? B.splice(B.delegateCount++, 0, z) : B.push(z), h.event.global[r] = !0)
        },
        remove: function(a, b, c, d, e) {
            var f, p, g, v, k, z, n, B, r, A, P, G = E.hasData(a) && E.get(a);
            if (G && (v = G.events)) {
                b =
                    (b || "").match(fa) || [""];
                for (k = b.length; k--;)
                    if (g = jb.exec(b[k]) || [], r = P = g[1], A = (g[2] || "").split(".").sort(), r) {
                        n = h.event.special[r] || {};
                        r = (d ? n.delegateType : n.bindType) || r;
                        B = v[r] || [];
                        g = g[2] && new RegExp("(^|\\.)" + A.join("\\.(?:.*\\.|)") + "(\\.|$)");
                        for (p = f = B.length; f--;) z = B[f], !e && P !== z.origType || c && c.guid !== z.guid || g && !g.test(z.namespace) || d && d !== z.selector && ("**" !== d || !z.selector) || (B.splice(f, 1), z.selector && B.delegateCount--, n.remove && n.remove.call(a, z));
                        p && !B.length && (n.teardown && !1 !== n.teardown.call(a,
                            A, G.handle) || h.removeEvent(a, r, G.handle), delete v[r])
                    } else
                        for (r in v) h.event.remove(a, r + b[k], c, d, !0);
                h.isEmptyObject(v) && E.remove(a, "handle events")
            }
        },
        dispatch: function(a) {
            var b = h.event.fix(a),
                c, d, e, f, p, g, k = Array(arguments.length);
            d = (E.get(this, "events") || {})[b.type] || [];
            var n = h.event.special[b.type] || {};
            k[0] = b;
            for (c = 1; c < arguments.length; c++) k[c] = arguments[c];
            if (b.delegateTarget = this, !n.preDispatch || !1 !== n.preDispatch.call(this, b)) {
                g = h.event.handlers.call(this, b, d);
                for (c = 0;
                    (f = g[c++]) && !b.isPropagationStopped();)
                    for (b.currentTarget =
                        f.elem, d = 0;
                        (p = f.handlers[d++]) && !b.isImmediatePropagationStopped();) b.rnamespace && !b.rnamespace.test(p.namespace) || (b.handleObj = p, b.data = p.data, e = ((h.event.special[p.origType] || {}).handle || p.handler).apply(f.elem, k), void 0 !== e && !1 === (b.result = e) && (b.preventDefault(), b.stopPropagation()));
                return n.postDispatch && n.postDispatch.call(this, b), b.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, p, g = [],
                v = b.delegateCount,
                k = a.target;
            if (v && k.nodeType && !("click" === a.type && 1 <= a.button))
                for (; k !== this; k = k.parentNode ||
                    this)
                    if (1 === k.nodeType && ("click" !== a.type || !0 !== k.disabled)) {
                        f = [];
                        p = {};
                        for (c = 0; c < v; c++) d = b[c], e = d.selector + " ", void 0 === p[e] && (p[e] = d.needsContext ? -1 < h(e, this).index(k) : h.find(e, this, null, [k]).length), p[e] && f.push(d);
                        f.length && g.push({
                            elem: k,
                            handlers: f
                        })
                    }
            return k = this, v < b.length && g.push({
                elem: k,
                handlers: b.slice(v)
            }), g
        },
        addProp: function(a, b) {
            Object.defineProperty(h.Event.prototype, a, {
                enumerable: !0,
                configurable: !0,
                get: h.isFunction(b) ? function() {
                    if (this.originalEvent) return b(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[a]
                },
                set: function(b) {
                    Object.defineProperty(this, a, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: b
                    })
                }
            })
        },
        fix: function(a) {
            return a[h.expando] ? a : new h.Event(a)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== r() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === r() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && m(this, "input")) return this.click(), !1
                },
                _default: function(a) {
                    return m(a.target,
                        "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    };
    h.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    };
    h.Event = function(a, b) {
        return this instanceof h.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? k : n, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget,
            this.relatedTarget = a.relatedTarget) : this.type = a, b && h.extend(this, b), this.timeStamp = a && a.timeStamp || h.now(), void(this[h.expando] = !0)) : new h.Event(a, b)
    };
    h.Event.prototype = {
        constructor: h.Event,
        isDefaultPrevented: n,
        isPropagationStopped: n,
        isImmediatePropagationStopped: n,
        isSimulated: !1,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = k;
            a && !this.isSimulated && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = k;
            a && !this.isSimulated &&
                a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = k;
            a && !this.isSimulated && a.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    h.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(a) {
            var b = a.button;
            return null == a.which && Ob.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && Pb.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which
        }
    }, h.event.addProp);
    h.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        h.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = a.relatedTarget,
                    e = a.handleObj;
                return d && (d === this || h.contains(this, d)) || (a.type = e.origType,
                    c = e.handler.apply(this, arguments), a.type = b), c
            }
        }
    });
    h.fn.extend({
        on: function(a, b, c, d) {
            return w(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return w(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, h(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return !1 !== b && "function" != typeof b || (c = b, b = void 0), !1 === c && (c = n), this.each(function() {
                h.event.remove(this,
                    a, c, b)
            })
        }
    });
    var Qb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Rb = /<script|<style|<link/i,
        Bb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ab = /^true\/(.*)/,
        Cb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    h.extend({
        htmlPrefilter: function(a) {
            return a.replace(Qb, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, p, g, k, v = a.cloneNode(!0),
                n = h.contains(a.ownerDocument, a);
            if (!(O.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || h.isXMLDoc(a)))
                for (k = e(v), g = e(a), d = 0, p = g.length; d <
                    p; d++) {
                    var z = g[d],
                        r = k[d],
                        A = r.nodeName.toLowerCase();
                    "input" === A && ib.test(z.type) ? r.checked = z.checked : "input" !== A && "textarea" !== A || (r.defaultValue = z.defaultValue)
                }
            if (b)
                if (c)
                    for (g = g || e(a), k = k || e(v), d = 0, p = g.length; d < p; d++) L(g[d], k[d]);
                else L(a, v);
            return k = e(v, "script"), 0 < k.length && f(k, !n && e(a, "script")), v
        },
        cleanData: function(a) {
            for (var b, c, d, e = h.event.special, f = 0; void 0 !== (c = a[f]); f++)
                if (Ia(c)) {
                    if (b = c[E.expando]) {
                        if (b.events)
                            for (d in b.events) e[d] ? h.event.remove(c, d) : h.removeEvent(c, d, b.handle);
                        c[E.expando] =
                            void 0
                    }
                    c[V.expando] && (c[V.expando] = void 0)
                }
        }
    });
    h.fn.extend({
        detach: function(a) {
            return W(this, a, !0)
        },
        remove: function(a) {
            return W(this, a)
        },
        text: function(a) {
            return pa(this, function(a) {
                return void 0 === a ? h.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return A(this, arguments, function(a) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || M(this, a).appendChild(a)
            })
        },
        prepend: function() {
            return A(this,
                arguments,
                function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = M(this, a);
                        b.insertBefore(a, b.firstChild)
                    }
                })
        },
        before: function() {
            return A(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return A(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (h.cleanData(e(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a,
            b) {
            return a = null != a && a, b = null == b ? a : b, this.map(function() {
                return h.clone(this, a, b)
            })
        },
        html: function(a) {
            return pa(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !Rb.test(a) && !aa[(Va.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = h.htmlPrefilter(a);
                    try {
                        for (; c < d; c++) b = this[c] || {}, 1 === b.nodeType && (h.cleanData(e(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (oa) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return A(this, arguments, function(b) {
                var c = this.parentNode;
                0 > h.inArray(this, a) && (h.cleanData(e(this)), c && c.replaceChild(b, this))
            }, a)
        }
    });
    h.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        h.fn[a] = function(a) {
            for (var c = [], d = h(a), e = d.length - 1, f = 0; f <= e; f++) a = f === e ? this : this.clone(!0), h(d[f])[b](a), Oa.apply(c, a.get());
            return this.pushStack(c)
        }
    });
    var Xa = /^margin/,
        Ka = new RegExp("^(" + gb + ")(?!px)[a-z%]+$", "i"),
        Ea = function(a) {
            var b =
                a.ownerDocument.defaultView;
            return b && b.opener || (b = d), b.getComputedStyle(a)
        };
    ! function() {
        function a() {
            if (k) {
                k.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
                k.innerHTML = "";
                Ja.appendChild(g);
                var a = d.getComputedStyle(k);
                b = "1%" !== a.top;
                f = "2px" === a.marginLeft;
                c = "4px" === a.width;
                k.style.marginRight = "50%";
                e = "4px" === a.marginRight;
                Ja.removeChild(g);
                k = null
            }
        }
        var b, c, e, f, g = H.createElement("div"),
            k = H.createElement("div");
        k.style && (k.style.backgroundClip =
            "content-box", k.cloneNode(!0).style.backgroundClip = "", O.clearCloneStyle = "content-box" === k.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(k), h.extend(O, {
                pixelPosition: function() {
                    return a(), b
                },
                boxSizingReliable: function() {
                    return a(), c
                },
                pixelMarginRight: function() {
                    return a(), e
                },
                reliableMarginLeft: function() {
                    return a(), f
                }
            }))
    }();
    var Sb = /^(none|table(?!-c[ea]).+)/,
        kb = /^--/,
        Tb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        lb = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Za = ["Webkit", "Moz", "ms"],
        Ya = H.createElement("div").style;
    h.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Y(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, c, d, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var f, g,
                    p, k = h.camelCase(c),
                    v = kb.test(c),
                    n = a.style;
                return v || (c = J(k)), p = h.cssHooks[c] || h.cssHooks[k], void 0 === d ? p && "get" in p && void 0 !== (f = p.get(a, !1, e)) ? f : n[c] : (g = typeof d, "string" === g && (f = ra.exec(d)) && f[1] && (d = b(a, c, f), g = "number"), null != d && d === d && ("number" === g && (d += f && f[3] || (h.cssNumber[k] ? "" : "px")), O.clearCloneStyle || "" !== d || 0 !== c.indexOf("background") || (n[c] = "inherit"), p && "set" in p && void 0 === (d = p.set(a, d, e)) || (v ? n.setProperty(c, d) : n[c] = d)), void 0)
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, p = h.camelCase(b);
            return kb.test(b) ||
                (b = J(p)), g = h.cssHooks[b] || h.cssHooks[p], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Y(a, b, d)), "normal" === e && b in lb && (e = lb[b]), "" === c || c ? (f = parseFloat(e), !0 === c || isFinite(f) ? f || 0 : e) : e
        }
    });
    h.each(["height", "width"], function(a, b) {
        h.cssHooks[b] = {
            get: function(a, c, d) {
                if (c) return !Sb.test(h.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? ja(a, b, d) : hb(a, Tb, function() {
                    return ja(a, b, d)
                })
            },
            set: function(a, c, d) {
                var e, f = d && Ea(a);
                d = d && da(a, b, d, "border-box" === h.css(a, "boxSizing", !1,
                    f), f);
                return d && (e = ra.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = h.css(a, b)), Z(a, c, d)
            }
        }
    });
    h.cssHooks.marginLeft = D(O.reliableMarginLeft, function(a, b) {
        if (b) return (parseFloat(Y(a, "marginLeft")) || a.getBoundingClientRect().left - hb(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        })) + "px"
    });
    h.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        h.cssHooks[a + b] = {
            expand: function(c) {
                var d = 0,
                    e = {};
                for (c = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + sa[d] + b] = c[d] || c[d - 2] || c[0];
                return e
            }
        };
        Xa.test(a) || (h.cssHooks[a + b].set = Z)
    });
    h.fn.extend({
        css: function(a, b) {
            return pa(this, function(a, b, c) {
                var d, e = {},
                    f = 0;
                if (Array.isArray(b)) {
                    c = Ea(a);
                    for (d = b.length; f < d; f++) e[b[f]] = h.css(a, b[f], !1, c);
                    return e
                }
                return void 0 !== c ? h.style(a, b, c) : h.css(a, b)
            }, a, b, 1 < arguments.length)
        }
    });
    h.Tween = C;
    C.prototype = {
        constructor: C,
        init: function(a, b, c, d, e, f) {
            this.elem = a;
            this.prop = c;
            this.easing = e || h.easing._default;
            this.options = b;
            this.start = this.now = this.cur();
            this.end = d;
            this.unit = f || (h.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a =
                C.propHooks[this.prop];
            return a && a.get ? a.get(this) : C.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = C.propHooks[this.prop];
            return this.options.duration ? this.pos = b = h.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : C.propHooks._default.set(this), this
        }
    };
    C.prototype.init.prototype = C.prototype;
    C.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = h.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                h.fx.step[a.prop] ? h.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[h.cssProps[a.prop]] && !h.cssHooks[a.prop] ? a.elem[a.prop] = a.now : h.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    };
    C.propHooks.scrollTop = C.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    };
    h.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 -
                Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    };
    h.fx = C.prototype.init;
    h.fx.step = {};
    var wa, Fa, Ub = /^(?:toggle|show|hide)$/,
        Vb = /queueHooks$/;
    h.Animation = h.extend(Q, {
        tweeners: {
            "*": [function(a, c) {
                var d = this.createTween(a, c);
                return b(d.elem, a, ra.exec(c), d), d
            }]
        },
        tweener: function(a, b) {
            h.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(fa);
            for (var c, d = 0, e = a.length; d < e; d++) c = a[d], Q.tweeners[c] = Q.tweeners[c] || [], Q.tweeners[c].unshift(b)
        },
        prefilters: [function(a, b, d) {
            var e, f, g, p, k, n, v, r, z = "width" in b || "height" in b,
                A = this,
                G = {},
                w = a.style,
                m = a.nodeType && Ca(a),
                l = E.get(a, "fxshow");
            d.queue || (p = h._queueHooks(a, "fx"), null == p.unqueued && (p.unqueued = 0, k = p.empty.fire, p.empty.fire = function() {
                p.unqueued || k()
            }), p.unqueued++, A.always(function() {
                A.always(function() {
                    p.unqueued--;
                    h.queue(a, "fx").length || p.empty.fire()
                })
            }));
            for (e in b)
                if (f = b[e], Ub.test(f)) {
                    if (delete b[e], g = g || "toggle" === f, f === (m ? "hide" : "show")) {
                        if ("show" !== f || !l || void 0 === l[e]) continue;
                        m = !0
                    }
                    G[e] = l && l[e] || h.style(a, e)
                }
            if (n = !h.isEmptyObject(b), n || !h.isEmptyObject(G))
                for (e in z &&
                    1 === a.nodeType && (d.overflow = [w.overflow, w.overflowX, w.overflowY], v = l && l.display, null == v && (v = E.get(a, "display")), r = h.css(a, "display"), "none" === r && (v ? r = v : (c([a], !0), v = a.style.display || v, r = h.css(a, "display"), c([a]))), ("inline" === r || "inline-block" === r && null != v) && "none" === h.css(a, "float") && (n || (A.done(function() {
                        w.display = v
                    }), null == v && (r = w.display, v = "none" === r ? "" : r)), w.display = "inline-block")), d.overflow && (w.overflow = "hidden", A.always(function() {
                        w.overflow = d.overflow[0];
                        w.overflowX = d.overflow[1];
                        w.overflowY =
                            d.overflow[2]
                    })), n = !1, G) n || (l ? "hidden" in l && (m = l.hidden) : l = E.access(a, "fxshow", {
                    display: v
                }), g && (l.hidden = !m), m && c([a], !0), A.done(function() {
                    m || c([a]);
                    E.remove(a, "fxshow");
                    for (e in G) h.style(a, e, G[e])
                })), n = la(m ? l[e] : 0, e, A), e in l || (l[e] = n.start, m && (n.end = n.start, n.start = 0))
        }],
        prefilter: function(a, b) {
            b ? Q.prefilters.unshift(a) : Q.prefilters.push(a)
        }
    });
    h.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? h.extend({}, a) : {
            complete: c || !c && b || h.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !h.isFunction(b) &&
                b
        };
        return h.fx.off ? d.duration = 0 : "number" != typeof d.duration && (d.duration in h.fx.speeds ? d.duration = h.fx.speeds[d.duration] : d.duration = h.fx.speeds._default), null != d.queue && !0 !== d.queue || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            h.isFunction(d.old) && d.old.call(this);
            d.queue && h.dequeue(this, d.queue)
        }, d
    };
    h.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(Ca).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = h.isEmptyObject(a),
                f = h.speed(b, c, d);
            b = function() {
                var b = Q(this, h.extend({}, a), f);
                (e || E.get(this, "finish")) && b.stop(!0)
            };
            return b.finish = b, e || !1 === f.queue ? this.each(b) : this.queue(f.queue, b)
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop;
                b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && !1 !== a && this.queue(a || "fx", []), this.each(function() {
                var b = !0,
                    e = null != a && a + "queueHooks",
                    f = h.timers,
                    g = E.get(this);
                if (e) g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g) g[e] && g[e].stop && Vb.test(e) && d(g[e]);
                for (e = f.length; e--;) f[e].elem !== this ||
                    null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                !b && c || h.dequeue(this, a)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var b, c = E.get(this),
                    d = c[a + "queue"];
                b = c[a + "queueHooks"];
                var e = h.timers,
                    f = d ? d.length : 0;
                c.finish = !0;
                h.queue(this, a, []);
                b && b.stop && b.stop.call(this, !0);
                for (b = e.length; b--;) e[b].elem === this && e[b].queue === a && (e[b].anim.stop(!0), e.splice(b, 1));
                for (b = 0; b < f; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    });
    h.each(["toggle", "show", "hide"],
        function(a, b) {
            var c = h.fn[b];
            h.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(ea(b, !0), a, d, e)
            }
        });
    h.each({
        slideDown: ea("show"),
        slideUp: ea("hide"),
        slideToggle: ea("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        h.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    });
    h.timers = [];
    h.fx.tick = function() {
        var a, b = 0,
            c = h.timers;
        for (wa = h.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || h.fx.stop();
        wa = void 0
    };
    h.fx.timer = function(a) {
        h.timers.push(a);
        h.fx.start()
    };
    h.fx.interval = 13;
    h.fx.start = function() {
        Fa || (Fa = !0, U())
    };
    h.fx.stop = function() {
        Fa = null
    };
    h.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    h.fn.delay = function(a, b) {
        return a = h.fx ? h.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
            var e = d.setTimeout(b, a);
            c.stop = function() {
                d.clearTimeout(e)
            }
        })
    };
    (function() {
        var a = H.createElement("input"),
            b = H.createElement("select").appendChild(H.createElement("option"));
        a.type = "checkbox";
        O.checkOn = "" !== a.value;
        O.optSelected = b.selected;
        a = H.createElement("input");
        a.value = "t";
        a.type = "radio";
        O.radioValue = "t" === a.value
    })();
    var mb, ya = h.expr.attrHandle;
    h.fn.extend({
        attr: function(a, b) {
            return pa(this, h.attr, a, b, 1 < arguments.length)
        },
        removeAttr: function(a) {
            return this.each(function() {
                h.removeAttr(this, a)
            })
        }
    });
    h.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? h.prop(a, b, c) : (1 === f && h.isXMLDoc(a) || (e = h.attrHooks[b.toLowerCase()] || (h.expr.match.bool.test(b) ?
                mb : void 0)), void 0 !== c ? null === c ? void h.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = h.find.attr(a, b), null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!O.radioValue && "radio" === b && m(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d = 0,
                e = b && b.match(fa);
            if (e && 1 === a.nodeType)
                for (; c = e[d++];) a.removeAttribute(c)
        }
    });
    mb = {
        set: function(a, b, c) {
            return !1 === b ? h.removeAttr(a,
                c) : a.setAttribute(c, c), c
        }
    };
    h.each(h.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = ya[b] || h.find.attr;
        ya[b] = function(a, b, d) {
            var e, f, g = b.toLowerCase();
            return d || (f = ya[g], ya[g] = e, e = null != c(a, b, d) ? g : null, ya[g] = f), e
        }
    });
    var Wb = /^(?:input|select|textarea|button)$/i,
        Xb = /^(?:a|area)$/i;
    h.fn.extend({
        prop: function(a, b) {
            return pa(this, h.prop, a, b, 1 < arguments.length)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[h.propFix[a] || a]
            })
        }
    });
    h.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && h.isXMLDoc(a) || (b = h.propFix[b] || b, e = h.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = h.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : Wb.test(a.nodeName) || Xb.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });
    O.optSelected || (h.propHooks.selected = {
        get: function(a) {
            a = a.parentNode;
            return a && a.parentNode && a.parentNode.selectedIndex,
                null
        },
        set: function(a) {
            a = a.parentNode;
            a && (a.selectedIndex, a.parentNode && a.parentNode.selectedIndex)
        }
    });
    h.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function() {
        h.propFix[this.toLowerCase()] = this
    });
    h.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, p = 0;
            if (h.isFunction(a)) return this.each(function(b) {
                h(this).addClass(a.call(this, b, R(this)))
            });
            if ("string" == typeof a && a)
                for (b = a.match(fa) || []; c = this[p++];)
                    if (e = R(c), d = 1 === c.nodeType &&
                        " " + X(e) + " ") {
                        for (g = 0; f = b[g++];) 0 > d.indexOf(" " + f + " ") && (d += f + " ");
                        d = X(d);
                        e !== d && c.setAttribute("class", d)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, p = 0;
            if (h.isFunction(a)) return this.each(function(b) {
                h(this).removeClass(a.call(this, b, R(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a)
                for (b = a.match(fa) || []; c = this[p++];)
                    if (e = R(c), d = 1 === c.nodeType && " " + X(e) + " ") {
                        for (g = 0; f = b[g++];)
                            for (; - 1 < d.indexOf(" " + f + " ");) d = d.replace(" " + f + " ", " ");
                        d = X(d);
                        e !== d && c.setAttribute("class",
                            d)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : h.isFunction(a) ? this.each(function(c) {
                h(this).toggleClass(a.call(this, c, R(this), b), b)
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c)
                    for (d = 0, e = h(this), f = a.match(fa) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else void 0 !== a && "boolean" !== c || (b = R(this), b && E.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || !1 === a ? "" : E.get(this,
                    "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c = 0;
            for (a = " " + a + " "; b = this[c++];)
                if (1 === b.nodeType && -1 < (" " + X(R(b)) + " ").indexOf(a)) return !0;
            return !1
        }
    });
    var Yb = /\r/g;
    h.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            if (arguments.length) return d = h.isFunction(a), this.each(function(c) {
                var e;
                1 === this.nodeType && (e = d ? a.call(this, c, h(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = h.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = h.valHooks[this.type] || h.valHooks[this.nodeName.toLowerCase()],
                    b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
            });
            if (e) return b = h.valHooks[e.type] || h.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(Yb, "") : null == c ? "" : c)
        }
    });
    h.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = h.find.attr(a, "value");
                    return null != b ? b : X(h.text(a))
                }
            },
            select: {
                get: function(a) {
                    var b, c, d = a.options,
                        e = a.selectedIndex,
                        f = "select-one" === a.type,
                        g = f ? null : [],
                        p = f ? e + 1 : d.length;
                    for (c = 0 > e ? p : f ? e : 0; c < p; c++)
                        if (b = d[c], !(!b.selected && c !== e || b.disabled || b.parentNode.disabled && m(b.parentNode, "optgroup"))) {
                            if (a = h(b).val(), f) return a;
                            g.push(a)
                        }
                    return g
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = h.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = -1 < h.inArray(h.valHooks.option.get(d), f)) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    });
    h.each(["radio", "checkbox"], function() {
        h.valHooks[this] = {
            set: function(a, b) {
                if (Array.isArray(b)) return a.checked = -1 < h.inArray(h(a).val(), b)
            }
        };
        O.checkOn || (h.valHooks[this].get = function(a) {
            return null ===
                a.getAttribute("value") ? "on" : a.value
        })
    });
    var nb = /^(?:focusinfocus|focusoutblur)$/;
    h.extend(h.event, {
        trigger: function(a, b, c, e) {
            var f, g, k, p, n, r, A, v = [c || H],
                G = Ha.call(a, "type") ? a.type : a;
            f = Ha.call(a, "namespace") ? a.namespace.split(".") : [];
            if (g = k = c = c || H, 3 !== c.nodeType && 8 !== c.nodeType && !nb.test(G + h.event.triggered) && (-1 < G.indexOf(".") && (f = G.split("."), G = f.shift(), f.sort()), n = 0 > G.indexOf(":") && "on" + G, a = a[h.expando] ? a : new h.Event(G, "object" == typeof a && a), a.isTrigger = e ? 2 : 3, a.namespace = f.join("."), a.rnamespace =
                    a.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, a.result = void 0, a.target || (a.target = c), b = null == b ? [a] : h.makeArray(b, [a]), A = h.event.special[G] || {}, e || !A.trigger || !1 !== A.trigger.apply(c, b))) {
                if (!e && !A.noBubble && !h.isWindow(c)) {
                    p = A.delegateType || G;
                    for (nb.test(p + G) || (g = g.parentNode); g; g = g.parentNode) v.push(g), k = g;
                    k === (c.ownerDocument || H) && v.push(k.defaultView || k.parentWindow || d)
                }
                for (f = 0;
                    (g = v[f++]) && !a.isPropagationStopped();) a.type = 1 < f ? p : A.bindType || G, (r = (E.get(g, "events") || {})[a.type] &&
                    E.get(g, "handle")) && r.apply(g, b), (r = n && g[n]) && r.apply && Ia(g) && (a.result = r.apply(g, b), !1 === a.result && a.preventDefault());
                return a.type = G, e || a.isDefaultPrevented() || A._default && !1 !== A._default.apply(v.pop(), b) || !Ia(c) || n && h.isFunction(c[G]) && !h.isWindow(c) && (k = c[n], k && (c[n] = null), h.event.triggered = G, c[G](), h.event.triggered = void 0, k && (c[n] = k)), a.result
            }
        },
        simulate: function(a, b, c) {
            a = h.extend(new h.Event, c, {
                type: a,
                isSimulated: !0
            });
            h.event.trigger(a, null, b)
        }
    });
    h.fn.extend({
        trigger: function(a, b) {
            return this.each(function() {
                h.event.trigger(a,
                    b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            if (c) return h.event.trigger(a, b, c, !0)
        }
    });
    h.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(a, b) {
        h.fn[b] = function(a, c) {
            return 0 < arguments.length ? this.on(b, null, a, c) : this.trigger(b)
        }
    });
    h.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    O.focusin = "onfocusin" in d;
    O.focusin || h.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            h.event.simulate(b, a.target, h.event.fix(a))
        };
        h.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = E.access(d, b);
                e || d.addEventListener(a, c, !0);
                E.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = E.access(d, b) - 1;
                e ? E.access(d, b, e) : (d.removeEventListener(a, c, !0), E.remove(d, b))
            }
        }
    });
    var za = d.location,
        ob = h.now(),
        Ra = /\?/;
    h.parseXML = function(a) {
        var b;
        if (!a || "string" != typeof a) return null;
        try {
            b = (new d.DOMParser).parseFromString(a, "text/xml")
        } catch (z) {
            b = void 0
        }
        return b && !b.getElementsByTagName("parsererror").length || h.error("Invalid XML: " + a), b
    };
    var Db = /\[\]$/,
        pb = /\r?\n/g,
        Zb = /^(?:submit|button|image|reset|file)$/i,
        $b = /^(?:input|select|textarea|keygen)/i;
    h.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                var c = h.isFunction(b) ? b() : b;
                d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c)
            };
        if (Array.isArray(a) || a.jquery && !h.isPlainObject(a)) h.each(a, function() {
            e(this.name,
                this.value)
        });
        else
            for (c in a) N(c, a[c], b, e);
        return d.join("&")
    };
    h.fn.extend({
        serialize: function() {
            return h.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = h.prop(this, "elements");
                return a ? h.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !h(this).is(":disabled") && $b.test(this.nodeName) && !Zb.test(a) && (this.checked || !ib.test(a))
            }).map(function(a, b) {
                var c = h(this).val();
                return null == c ? null : Array.isArray(c) ? h.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(pb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(pb, "\r\n")
                }
            }).get()
        }
    });
    var ac = /%20/g,
        bc = /#.*$/,
        cc = /([?&])_=[^&]*/,
        dc = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        ec = /^(?:GET|HEAD)$/,
        fc = /^\/\//,
        qb = {},
        Ma = {},
        rb = "*/".concat("*"),
        Sa = H.createElement("a");
    Sa.href = za.href;
    h.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: za.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(za.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": rb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": h.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? ia(ia(a, h.ajaxSettings), b) : ia(h.ajaxSettings, a)
        },
        ajaxPrefilter: qa(qb),
        ajaxTransport: qa(Ma),
        ajax: function(a, b) {
            function c(a, b, c, k) {
                var n, G, v, L, W = b;
                if (!r) {
                    r = !0;
                    p && d.clearTimeout(p);
                    e = void 0;
                    g = k || "";
                    D.readyState = 0 < a ? 4 : 0;
                    k = 200 <= a && 300 > a || 304 === a;
                    if (c) {
                        v = w;
                        for (var Y = D, z, B, C, F, q = v.contents, y = v.dataTypes;
                            "*" === y[0];) y.shift(), void 0 === z && (z = v.mimeType || Y.getResponseHeader("Content-Type"));
                        if (z)
                            for (B in q)
                                if (q[B] && q[B].test(z)) {
                                    y.unshift(B);
                                    break
                                }
                        if (y[0] in c) C = y[0];
                        else {
                            for (B in c) {
                                if (!y[0] || v.converters[B + " " + y[0]]) {
                                    C = B;
                                    break
                                }
                                F || (F = B)
                            }
                            C = C || F
                        }
                        c = C ? (C !== y[0] && y.unshift(C), c[C]) : void 0;
                        v = c
                    }
                    var u;
                    a: {
                        c = w;
                        z = v;
                        B = D;
                        C = k;
                        var Z, da, J;
                        v = {};
                        Y = c.dataTypes.slice();
                        if (Y[1])
                            for (Z in c.converters) v[Z.toLowerCase()] = c.converters[Z];
                        for (F = Y.shift(); F;)
                            if (c.responseFields[F] && (B[c.responseFields[F]] = z), !J && C && c.dataFilter && (z = c.dataFilter(z, c.dataType)), J = F, F = Y.shift())
                                if ("*" === F) F = J;
                                else if ("*" !== J && J !== F) {
                            if (Z = v[J + " " + F] || v["* " + F], !Z)
                                for (u in v)
                                    if (da = u.split(" "), da[1] === F && (Z = v[J + " " + da[0]] || v["* " + da[0]])) {
                                        !0 === Z ? Z = v[u] : !0 !== v[u] && (F = da[0], Y.unshift(da[1]));
                                        break
                                    }
                            if (!0 !== Z)
                                if (Z && c["throws"]) z = Z(z);
                                else try {
                                    z =
                                        Z(z)
                                } catch (Jb) {
                                    u = {
                                        state: "parsererror",
                                        error: Z ? Jb : "No conversion from " + J + " to " + F
                                    };
                                    break a
                                }
                        }
                        u = {
                            state: "success",
                            data: z
                        }
                    }
                    v = u;
                    k ? (w.ifModified && (L = D.getResponseHeader("Last-Modified"), L && (h.lastModified[f] = L), L = D.getResponseHeader("etag"), L && (h.etag[f] = L)), 204 === a || "HEAD" === w.type ? W = "nocontent" : 304 === a ? W = "notmodified" : (W = v.state, n = v.data, G = v.error, k = !G)) : (G = W, !a && W || (W = "error", 0 > a && (a = 0)));
                    D.status = a;
                    D.statusText = (b || W) + "";
                    k ? t.resolveWith(l, [n, W, D]) : t.rejectWith(l, [D, W, G]);
                    D.statusCode(M);
                    M = void 0;
                    A &&
                        m.trigger(k ? "ajaxSuccess" : "ajaxError", [D, w, k ? n : G]);
                    ha.fireWith(l, [D, W]);
                    A && (m.trigger("ajaxComplete", [D, w]), --h.active || h.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof a && (b = a, a = void 0);
            b = b || {};
            var e, f, g, k, p, n, r, A, G, v, w = h.ajaxSetup({}, b),
                l = w.context || w,
                m = w.context && (l.nodeType || l.jquery) ? h(l) : h.event,
                t = h.Deferred(),
                ha = h.Callbacks("once memory"),
                M = w.statusCode || {},
                L = {},
                W = {},
                Y = "canceled",
                D = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (r) {
                            if (!k)
                                for (k = {}; b = dc.exec(g);) k[b[1].toLowerCase()] = b[2];
                            b = k[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return r ? g : null
                    },
                    setRequestHeader: function(a, b) {
                        return null == r && (a = W[a.toLowerCase()] = W[a.toLowerCase()] || a, L[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return null == r && (w.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (r) D.always(a[D.status]);
                            else
                                for (b in a) M[b] = [M[b], a[b]];
                        return this
                    },
                    abort: function(a) {
                        a = a || Y;
                        return e && e.abort(a), c(0, a), this
                    }
                };
            if (t.promise(D), w.url = ((a || w.url || za.href) + "").replace(fc, za.protocol +
                    "//"), w.type = b.method || b.type || w.method || w.type, w.dataTypes = (w.dataType || "*").toLowerCase().match(fa) || [""], null == w.crossDomain) {
                n = H.createElement("a");
                try {
                    n.href = w.url, n.href = n.href, w.crossDomain = Sa.protocol + "//" + Sa.host != n.protocol + "//" + n.host
                } catch (Pa) {
                    w.crossDomain = !0
                }
            }
            if (w.data && w.processData && "string" != typeof w.data && (w.data = h.param(w.data, w.traditional)), xa(qb, w, b, D), r) return D;
            (A = h.event && w.global) && 0 === h.active++ && h.event.trigger("ajaxStart");
            w.type = w.type.toUpperCase();
            w.hasContent = !ec.test(w.type);
            f = w.url.replace(bc, "");
            w.hasContent ? w.data && w.processData && 0 === (w.contentType || "").indexOf("application/x-www-form-urlencoded") && (w.data = w.data.replace(ac, "+")) : (v = w.url.slice(f.length), w.data && (f += (Ra.test(f) ? "&" : "?") + w.data, delete w.data), !1 === w.cache && (f = f.replace(cc, "$1"), v = (Ra.test(f) ? "&" : "?") + "_=" + ob++ + v), w.url = f + v);
            w.ifModified && (h.lastModified[f] && D.setRequestHeader("If-Modified-Since", h.lastModified[f]), h.etag[f] && D.setRequestHeader("If-None-Match", h.etag[f]));
            (w.data && w.hasContent && !1 !==
                w.contentType || b.contentType) && D.setRequestHeader("Content-Type", w.contentType);
            D.setRequestHeader("Accept", w.dataTypes[0] && w.accepts[w.dataTypes[0]] ? w.accepts[w.dataTypes[0]] + ("*" !== w.dataTypes[0] ? ", " + rb + "; q=0.01" : "") : w.accepts["*"]);
            for (G in w.headers) D.setRequestHeader(G, w.headers[G]);
            if (w.beforeSend && (!1 === w.beforeSend.call(l, D, w) || r)) return D.abort();
            if (Y = "abort", ha.add(w.complete), D.done(w.success), D.fail(w.error), e = xa(Ma, w, b, D)) {
                if (D.readyState = 1, A && m.trigger("ajaxSend", [D, w]), r) return D;
                w.async && 0 < w.timeout && (p = d.setTimeout(function() {
                    D.abort("timeout")
                }, w.timeout));
                try {
                    r = !1, e.send(L, c)
                } catch (Pa) {
                    if (r) throw Pa;
                    c(-1, Pa)
                }
            } else c(-1, "No Transport");
            return D
        },
        getJSON: function(a, b, c) {
            return h.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return h.get(a, void 0, b, "script")
        }
    });
    h.each(["get", "post"], function(a, b) {
        h[b] = function(a, c, d, e) {
            return h.isFunction(c) && (e = e || d, d = c, c = void 0), h.ajax(h.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, h.isPlainObject(a) && a))
        }
    });
    h._evalUrl = function(a) {
        return h.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    };
    h.fn.extend({
        wrapAll: function(a) {
            var b;
            return this[0] && (h.isFunction(a) && (a = a.call(this[0])), b = h(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                return a
            }).append(this)), this
        },
        wrapInner: function(a) {
            return h.isFunction(a) ? this.each(function(b) {
                h(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = h(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = h.isFunction(a);
            return this.each(function(c) {
                h(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function(a) {
            return this.parent(a).not("body").each(function() {
                h(this).replaceWith(this.childNodes)
            }), this
        }
    });
    h.expr.pseudos.hidden = function(a) {
        return !h.expr.pseudos.visible(a)
    };
    h.expr.pseudos.visible = function(a) {
        return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
    };
    h.ajaxSettings.xhr = function() {
        try {
            return new d.XMLHttpRequest
        } catch (p) {}
    };
    var gc = {
            0: 200,
            1223: 204
        },
        Aa = h.ajaxSettings.xhr();
    O.cors = !!Aa && "withCredentials" in Aa;
    O.ajax = Aa = !!Aa;
    h.ajaxTransport(function(a) {
        var b, c;
        if (O.cors || Aa && !a.crossDomain) return {
            send: function(e, f) {
                var g, h = a.xhr();
                if (h.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                    for (g in a.xhrFields) h[g] = a.xhrFields[g];
                a.mimeType && h.overrideMimeType && h.overrideMimeType(a.mimeType);
                a.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e) h.setRequestHeader(g, e[g]);
                b = function(a) {
                    return function() {
                        b &&
                            (b = c = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(gc[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                                binary: h.response
                            } : {
                                text: h.responseText
                            }, h.getAllResponseHeaders()))
                    }
                };
                h.onload = b();
                c = h.onerror = b("error");
                void 0 !== h.onabort ? h.onabort = c : h.onreadystatechange = function() {
                    4 === h.readyState && d.setTimeout(function() {
                        b && c()
                    })
                };
                b = b("abort");
                try {
                    h.send(a.hasContent &&
                        a.data || null)
                } catch (xb) {
                    if (b) throw xb;
                }
            },
            abort: function() {
                b && b()
            }
        }
    });
    h.ajaxPrefilter(function(a) {
        a.crossDomain && (a.contents.script = !1)
    });
    h.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return h.globalEval(a), a
            }
        }
    });
    h.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1);
        a.crossDomain && (a.type = "GET")
    });
    h.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b,
                c;
            return {
                send: function(d, e) {
                    b = h("<script>").prop({
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove();
                        c = null;
                        a && e("error" === a.type ? 404 : 200, a.type)
                    });
                    H.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var sb = [],
        Ta = /(=)\?(?=&|$)|\?\?/;
    h.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = sb.pop() || h.expando + "_" + ob++;
            return this[a] = !0, a
        }
    });
    h.ajaxPrefilter("json jsonp", function(a, b, c) {
        var e, f, g, k = !1 !== a.jsonp && (Ta.test(a.url) ? "url" : "string" == typeof a.data && 0 === (a.contentType ||
            "").indexOf("application/x-www-form-urlencoded") && Ta.test(a.data) && "data");
        if (k || "jsonp" === a.dataTypes[0]) return e = a.jsonpCallback = h.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback, k ? a[k] = a[k].replace(Ta, "$1" + e) : !1 !== a.jsonp && (a.url += (Ra.test(a.url) ? "&" : "?") + a.jsonp + "=" + e), a.converters["script json"] = function() {
            return g || h.error(e + " was not called"), g[0]
        }, a.dataTypes[0] = "json", f = d[e], d[e] = function() {
            g = arguments
        }, c.always(function() {
            void 0 === f ? h(d).removeProp(e) : d[e] = f;
            a[e] && (a.jsonpCallback =
                b.jsonpCallback, sb.push(e));
            g && h.isFunction(f) && f(g[0]);
            g = f = void 0
        }), "script"
    });
    O.createHTMLDocument = function() {
        var a = H.implementation.createHTMLDocument("").body;
        return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length
    }();
    h.parseHTML = function(a, b, c) {
        if ("string" != typeof a) return [];
        "boolean" == typeof b && (c = b, b = !1);
        var d, e, f;
        return b || (O.createHTMLDocument ? (b = H.implementation.createHTMLDocument(""), d = b.createElement("base"), d.href = H.location.href, b.head.appendChild(d)) : b = H), e = eb.exec(a),
            f = !c && [], e ? [b.createElement(e[1])] : (e = g([a], b, f), f && f.length && h(f).remove(), h.merge([], e.childNodes))
    };
    h.fn.load = function(a, b, c) {
        var d, e, f, g = this,
            k = a.indexOf(" ");
        return -1 < k && (d = X(a.slice(k)), a = a.slice(0, k)), h.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), 0 < g.length && h.ajax({
                url: a,
                type: e || "GET",
                dataType: "html",
                data: b
            }).done(function(a) {
                f = arguments;
                g.html(d ? h("<div>").append(h.parseHTML(a)).find(d) : a)
            }).always(c && function(a, b) {
                g.each(function() {
                    c.apply(this, f || [a.responseText, b, a])
                })
            }),
            this
    };
    h.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
        h.fn[b] = function(a) {
            return this.on(b, a)
        }
    });
    h.expr.pseudos.animated = function(a) {
        return h.grep(h.timers, function(b) {
            return a === b.elem
        }).length
    };
    h.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, k, n, p = h.css(a, "position"),
                r = h(a),
                A = {};
            "static" === p && (a.style.position = "relative");
            k = r.offset();
            f = h.css(a, "top");
            n = h.css(a, "left");
            ("absolute" === p || "fixed" === p) && -1 < (f + n).indexOf("auto") ? (d = r.position(), g = d.top,
                e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(n) || 0);
            h.isFunction(b) && (b = b.call(a, c, h.extend({}, k)));
            null != b.top && (A.top = b.top - k.top + g);
            null != b.left && (A.left = b.left - k.left + e);
            "using" in b ? b.using.call(a, A) : r.css(A)
        }
    };
    h.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                h.offset.setOffset(this, a, b)
            });
            var b, c, d, e, f = this[0];
            if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), b = f.ownerDocument, c = b.documentElement, e = b.defaultView, {
                top: d.top + e.pageYOffset -
                    c.clientTop,
                left: d.left + e.pageXOffset - c.clientLeft
            }) : {
                top: 0,
                left: 0
            }
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === h.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), m(a[0], "html") || (d = a.offset()), d = {
                    top: d.top + h.css(a[0], "borderTopWidth", !0),
                    left: d.left + h.css(a[0], "borderLeftWidth", !0)
                }), {
                    top: b.top - d.top - h.css(c, "marginTop", !0),
                    left: b.left - d.left - h.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a =
                        this.offsetParent; a && "static" === h.css(a, "position");) a = a.offsetParent;
                return a || Ja
            })
        }
    });
    h.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = "pageYOffset" === b;
        h.fn[a] = function(d) {
            return pa(this, function(a, d, e) {
                var f;
                return h.isWindow(a) ? f = a : 9 === a.nodeType && (f = a.defaultView), void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
            }, a, d, arguments.length)
        }
    });
    h.each(["top", "left"], function(a, b) {
        h.cssHooks[b] = D(O.pixelPosition, function(a, c) {
            if (c) return c =
                Y(a, b), Ka.test(c) ? h(a).position()[b] + "px" : c
        })
    });
    h.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        h.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            h.fn[d] = function(e, f) {
                var g = arguments.length && (c || "boolean" != typeof e),
                    k = c || (!0 === e || !0 === f ? "margin" : "border");
                return pa(this, function(b, c, e) {
                    var f;
                    return h.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" +
                        a], f["offset" + a], f["client" + a])) : void 0 === e ? h.css(b, c, k) : h.style(b, c, e, k)
                }, b, g ? e : void 0, g)
            }
        })
    });
    h.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    h.holdReady = function(a) {
        a ? h.readyWait++ : h.ready(!0)
    };
    h.isArray = Array.isArray;
    h.parseJSON = JSON.parse;
    h.nodeName = m;
    "function" == typeof define && define.amd &&
        define("jquery", [], function() {
            return h
        });
    var hc = d.jQuery,
        ic = d.$;
    return h.noConflict = function(a) {
        return d.$ === h && (d.$ = ic), a && d.jQuery === h && (d.jQuery = hc), h
    }, q || (d.jQuery = d.$ = h), h
});
window.yii = function(d) {
    function q() {
        d.ajaxPrefilter(function(d, l, m) {
            !d.crossDomain && I.getCsrfParam() && m.setRequestHeader("X-CSRF-Token", I.getCsrfToken())
        });
        I.refreshCsrfToken()
    }

    function x() {
        d(document).ajaxComplete(function(d, l) {
            var m = l && l.getResponseHeader("X-Redirect");
            m && window.location.assign(m)
        })
    }

    function u() {
        var m = {};
        d("script[src]").each(function() {
            var d = l(this.src);
            m[d] = !0
        });
        d.ajaxPrefilter("script", function(d, t, q) {
            if ("jsonp" != d.dataType) {
                d = l(d.url);
                t = !0 === m[d] && !y(d);
                var F = void 0 !== m[d] &&
                    !0 === m[d].xhrDone;
                if (t || F) q.abort();
                else {
                    if (void 0 === m[d] || !0 === m[d]) m[d] = {
                        xhrList: [],
                        xhrDone: !1
                    };
                    q.done(function(a, b, c) {
                        if (!0 !== m[c.yiiUrl].xhrDone) {
                            m[c.yiiUrl].xhrDone = !0;
                            a = 0;
                            for (b = m[c.yiiUrl].xhrList.length; a < b; a++) {
                                var d = m[c.yiiUrl].xhrList[a];
                                d && d.readyState !== XMLHttpRequest.DONE && d.abort()
                            }
                            m[c.yiiUrl] = !0
                        }
                    }).fail(function(a, b) {
                        if ("abort" !== b) {
                            delete m[a.yiiUrl].xhrList[a.yiiIndex];
                            for (var c = !0, d = 0, f = m[a.yiiUrl].xhrList.length; d < f; d++) m[a.yiiUrl].xhrList[d] && (c = !1);
                            c && delete m[a.yiiUrl]
                        }
                    });
                    q.yiiIndex =
                        m[d].xhrList.length;
                    q.yiiUrl = d;
                    m[d].xhrList[q.yiiIndex] = q
                }
            }
        });
        d(document).ajaxComplete(function() {
            var m = [];
            d("link[rel=stylesheet]").each(function() {
                var t = l(this.href);
                y(t) || (-1 === d.inArray(t, m) ? m.push(t) : d(this).remove())
            })
        })
    }

    function m() {
        var m = function(m) {
            var l = d(this),
                t = l.data("method"),
                q = l.data("confirm"),
                a = l.data("form");
            if (void 0 === t && void 0 === q && void 0 === a) return !0;
            void 0 !== q ? d.proxy(I.confirm, this)(q, function() {
                I.handleAction(l, m)
            }) : I.handleAction(l, m);
            m.stopImmediatePropagation();
            return !1
        };
        d(document).on("click.yii", I.clickableSelector, m).on("change.yii", I.changeableSelector, m)
    }

    function y(d) {
        for (var m = 0; m < I.reloadableScripts.length; m++) {
            var t = l(I.reloadableScripts[m]);
            if (!0 === (new RegExp("^" + t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&").split("\\*").join(".+") + "$")).test(d)) return !0
        }
        return !1
    }

    function l(d) {
        return "/" === d.charAt(0) ? I.getBaseCurrentUrl() + d : d
    }
    var I = {
        reloadableScripts: [],
        clickableSelector: 'a, button, input[type="submit"], input[type="button"], input[type="reset"], input[type="image"]',
        changeableSelector: "select, input, textarea",
        getCsrfParam: function() {
            return d("meta[name=csrf-param]").attr("content")
        },
        getCsrfToken: function() {
            return d("meta[name=csrf-token]").attr("content")
        },
        setCsrfToken: function(m, l) {
            d("meta[name=csrf-param]").attr("content", m);
            d("meta[name=csrf-token]").attr("content", l)
        },
        refreshCsrfToken: function() {
            var m = I.getCsrfToken();
            m && d('form input[name="' + I.getCsrfParam() + '"]').val(m)
        },
        confirm: function(d, m, l) {
            window.confirm(d) ? !m || m() : !l || l()
        },
        handleAction: function(m,
            l) {
            var t = m.attr("data-form") ? d("#" + m.attr("data-form")) : m.closest("form"),
                q = !m.data("method") && t ? t.attr("method") : m.data("method"),
                y = m.attr("href"),
                a = y && "#" !== y,
                b = m.data("params"),
                c = b && d.isPlainObject(b),
                e = m.data("pjax"),
                e = void 0 !== e && 0 !== e && d.support.pjax,
                f, g = {};
            e && (f = m.data("pjax-container"), void 0 !== f && f.length || (f = m.closest("[data-pjax-container]").attr("id") ? "#" + m.closest("[data-pjax-container]").attr("id") : ""), f.length || (f = "body"), g = {
                container: f,
                push: !!m.data("pjax-push-state"),
                replace: !!m.data("pjax-replace-state"),
                scrollTo: m.data("pjax-scrollto"),
                pushRedirect: m.data("pjax-push-redirect"),
                replaceRedirect: m.data("pjax-replace-redirect"),
                skipOuterContainers: m.data("pjax-skip-outer-containers"),
                timeout: m.data("pjax-timeout"),
                originalEvent: l,
                originalTarget: m
            });
            if (void 0 === q)
                if (a) e ? d.pjax.click(l, g) : window.location.assign(y);
                else {
                    if (m.is(":submit") && t.length) {
                        if (e) t.on("submit", function(a) {
                            d.pjax.submit(a, g)
                        });
                        t.trigger("submit")
                    }
                } else {
                var k, n, r = !t.length;
                r ? (a || (y = I.getCurrentUrl()), t = d("<form/>", {
                    method: q,
                    action: y
                }), (y = m.attr("target")) && t.attr("target", y), /(get|post)/i.test(q) || (t.append(d("<input/>", {
                    name: "_method",
                    value: q,
                    type: "hidden"
                })), q = "post", t.attr("method", q)), /post/i.test(q) && (q = I.getCsrfParam()) && t.append(d("<input/>", {
                    name: q,
                    value: I.getCsrfToken(),
                    type: "hidden"
                })), t.hide().appendTo("body")) : (k = t.attr("method"), t.attr("method", q), a && (n = t.attr("action"), t.attr("action", y)));
                if (q = t.data("yiiActiveForm")) q.submitObject = m;
                c && d.each(b, function(a, b) {
                    t.append(d("<input/>").attr({
                        name: a,
                        value: b,
                        type: "hidden"
                    }))
                });
                if (e) t.on("submit", function(a) {
                    d.pjax.submit(a, g)
                });
                t.trigger("submit");
                d.when(t.data("yiiSubmitFinalizePromise")).done(function() {
                    r ? t.remove() : (void 0 !== n && t.attr("action", n), t.attr("method", k), c && d.each(b, function(a) {
                        d('input[name="' + a + '"]', t).remove()
                    }))
                })
            }
        },
        getQueryParams: function(m) {
            var l = m.indexOf("?");
            if (0 > l) return {};
            m = d.grep(m.substring(l + 1).split("#")[0].split("&"), function(a) {
                return "" !== a
            });
            for (var l = {}, t = 0, q = m.length; t < q; t++) {
                var y = m[t].split("="),
                    a = decodeURIComponent(y[0].replace(/\+/g,
                        "%20")),
                    y = decodeURIComponent(y[1].replace(/\+/g, "%20"));
                a.length && (void 0 === l[a] ? l[a] = y || "" : (d.isArray(l[a]) || (l[a] = [l[a]]), l[a].push(y || "")))
            }
            return l
        },
        initModule: function(m) {
            if (void 0 === m.isActive || m.isActive) d.isFunction(m.init) && m.init(), d.each(m, function() {
                d.isPlainObject(this) && I.initModule(this)
            })
        },
        init: function() {
            q();
            x();
            u();
            m()
        },
        getBaseCurrentUrl: function() {
            return window.location.protocol + "//" + window.location.host
        },
        getCurrentUrl: function() {
            return window.location.href
        }
    };
    return I
}(window.jQuery);
window.jQuery(function() {
    window.yii.initModule(window.yii)
});
yii.validation = function(d) {
    function q(m, q, l) {
        if ("undefined" === typeof File) return [];
        m = d(m.input, m.$form).get(0).files;
        return m ? 0 === m.length ? (l.skipOnEmpty || q.push(l.uploadRequired), []) : l.maxFiles && l.maxFiles < m.length ? (q.push(l.tooMany), []) : m : (q.push(l.message), [])
    }

    function x(d, q, l) {
        if (l.extensions && 0 < l.extensions.length) {
            var m = d.name.lastIndexOf("."),
                m = ~m ? d.name.substr(m + 1, d.name.length).toLowerCase() : "";
            ~l.extensions.indexOf(m) || q.push(l.wrongExtension.replace(/\{file\}/g, d.name))
        }
        if (l.mimeTypes &&
            0 < l.mimeTypes.length) {
            a: {
                for (var m = l.mimeTypes, t = d.type, y = 0, u = m.length; y < u; y++)
                    if ((new RegExp(m[y])).test(t)) {
                        m = !0;
                        break a
                    }
                m = !1
            }
            m || q.push(l.wrongMimeType.replace(/\{file\}/g, d.name))
        }
        l.maxSize && l.maxSize < d.size && q.push(l.tooBig.replace(/\{file\}/g, d.name));
        l.minSize && l.minSize > d.size && q.push(l.tooSmall.replace(/\{file\}/g, d.name))
    }
    var u = {
        isEmpty: function(m) {
            return null === m || void 0 === m || d.isArray(m) && 0 === m.length || "" === m
        },
        addMessage: function(d, q, l) {
            d.push(q.replace(/\{value\}/g, l))
        },
        required: function(m,
            q, l) {
            var y = !1;
            if (void 0 === l.requiredValue) {
                var t = "string" == typeof m || m instanceof String;
                if (l.strict && void 0 !== m || !l.strict && !u.isEmpty(t ? d.trim(m) : m)) y = !0
            } else if (!l.strict && m == l.requiredValue || l.strict && m === l.requiredValue) y = !0;
            y || u.addMessage(q, l.message, m)
        },
        "boolean": function(d, q, l) {
            l.skipOnEmpty && u.isEmpty(d) || (l.strict || d != l.trueValue && d != l.falseValue) && (!l.strict || d !== l.trueValue && d !== l.falseValue) && u.addMessage(q, l.message, d)
        },
        string: function(d, q, l) {
            l.skipOnEmpty && u.isEmpty(d) || ("string" !==
                typeof d ? u.addMessage(q, l.message, d) : void 0 !== l.is && d.length != l.is ? u.addMessage(q, l.notEqual, d) : (void 0 !== l.min && d.length < l.min && u.addMessage(q, l.tooShort, d), void 0 !== l.max && d.length > l.max && u.addMessage(q, l.tooLong, d)))
        },
        file: function(m, y, l) {
            m = q(m, y, l);
            d.each(m, function(d, m) {
                x(m, y, l)
            })
        },
        image: function(m, y, l, I) {
            m = q(m, y, l);
            d.each(m, function(m, q) {
                x(q, y, l);
                if ("undefined" !== typeof FileReader) {
                    var t = d.Deferred();
                    u.validateImage(q, y, l, t, new FileReader, new Image);
                    I.push(t)
                }
            })
        },
        validateImage: function(d, q,
            l, u, t, x) {
            x.onload = function() {
                l.minWidth && x.width < l.minWidth && q.push(l.underWidth.replace(/\{file\}/g, d.name));
                l.maxWidth && x.width > l.maxWidth && q.push(l.overWidth.replace(/\{file\}/g, d.name));
                l.minHeight && x.height < l.minHeight && q.push(l.underHeight.replace(/\{file\}/g, d.name));
                l.maxHeight && x.height > l.maxHeight && q.push(l.overHeight.replace(/\{file\}/g, d.name));
                u.resolve()
            };
            x.onerror = function() {
                q.push(l.notImage.replace(/\{file\}/g, d.name));
                u.resolve()
            };
            t.onload = function() {
                x.src = this.result
            };
            t.onerror =
                function() {
                    u.resolve()
                };
            t.readAsDataURL(d)
        },
        number: function(d, q, l) {
            l.skipOnEmpty && u.isEmpty(d) || ("string" !== typeof d || l.pattern.test(d) ? (void 0 !== l.min && d < l.min && u.addMessage(q, l.tooSmall, d), void 0 !== l.max && d > l.max && u.addMessage(q, l.tooBig, d)) : u.addMessage(q, l.message, d))
        },
        range: function(m, q, l) {
            if (!l.skipOnEmpty || !u.isEmpty(m))
                if (!l.allowArray && d.isArray(m)) u.addMessage(q, l.message, m);
                else {
                    var y = !0;
                    d.each(d.isArray(m) ? m : [m], function(m, q) {
                        return -1 == d.inArray(q, l.range) ? y = !1 : !0
                    });
                    void 0 === l.not && (l.not = !1);
                    l.not === y && u.addMessage(q, l.message, m)
                }
        },
        regularExpression: function(d, q, l) {
            l.skipOnEmpty && u.isEmpty(d) || (!l.not && !l.pattern.test(d) || l.not && l.pattern.test(d)) && u.addMessage(q, l.message, d)
        },
        email: function(d, q, l) {
            if (!l.skipOnEmpty || !u.isEmpty(d)) {
                var m;
                m = /^((?:"?([^"]*)"?\s)?)(?:\s+)?(?:(<?)((.+)@([^>]+))(>?))$/.exec(d);
                if (null === m) m = !1;
                else {
                    var t = m[5],
                        y = m[6];
                    l.enableIDN && (t = punycode.toASCII(t), y = punycode.toASCII(y), d = m[1] + m[3] + t + "@" + y + m[7]);
                    m = 64 < t.length ? !1 : 254 < (t + "@" + y).length ? !1 : l.pattern.test(d) ||
                        l.allowName && l.fullPattern.test(d)
                }
                m || u.addMessage(q, l.message, d)
            }
        },
        url: function(d, q, l) {
            if (!l.skipOnEmpty || !u.isEmpty(d)) {
                l.defaultScheme && !/:\/\//.test(d) && (d = l.defaultScheme + "://" + d);
                var m = !0;
                if (l.enableIDN) {
                    var t = /^([^:]+):\/\/([^\/]+)(.*)$/.exec(d);
                    null === t ? m = !1 : d = t[1] + "://" + punycode.toASCII(t[2]) + t[3]
                }
                m && l.pattern.test(d) || u.addMessage(q, l.message, d)
            }
        },
        trim: function(m, q, l) {
            m = m.find(q.input);
            q = m.val();
            l.skipOnEmpty && u.isEmpty(q) || (q = d.trim(q), m.val(q));
            return q
        },
        captcha: function(m, q, l) {
            if (!l.skipOnEmpty ||
                !u.isEmpty(m)) {
                for (var y = d("body").data(l.hashKey), y = null == y ? l.hash : y[l.caseSensitive ? 0 : 1], t = l.caseSensitive ? m : m.toLowerCase(), x = t.length - 1, K = 0; 0 <= x; --x) K += t.charCodeAt(x);
                K != y && u.addMessage(q, l.message, m)
            }
        },
        compare: function(m, q, l, x) {
            if (!l.skipOnEmpty || !u.isEmpty(m)) {
                var t;
                if (void 0 === l.compareAttribute) t = l.compareValue;
                else {
                    x = x.data("yiiActiveForm").attributes;
                    for (var y = x.length - 1; 0 <= y; y--) x[y].id === l.compareAttribute && (t = d(x[y].input).val())
                }
                "number" === l.type && (m = parseFloat(m), t = parseFloat(t));
                switch (l.operator) {
                    case "==":
                        t = m == t;
                        break;
                    case "===":
                        t = m === t;
                        break;
                    case "!=":
                        t = m != t;
                        break;
                    case "!==":
                        t = m !== t;
                        break;
                    case ">":
                        t = m > t;
                        break;
                    case ">=":
                        t = m >= t;
                        break;
                    case "<":
                        t = m < t;
                        break;
                    case "<=":
                        t = m <= t;
                        break;
                    default:
                        t = !1
                }
                t || u.addMessage(q, l.message, m)
            }
        },
        ip: function(d, q, l) {
            if (!l.skipOnEmpty || !u.isEmpty(d)) {
                var m = null,
                    t = null,
                    x = (new RegExp(l.ipParsePattern)).exec(d);
                x && (m = x[1] || null, d = x[2], t = x[4] || null);
                !0 === l.subnet && null === t ? u.addMessage(q, l.messages.noSubnet, d) : !1 === l.subnet && null !== t ? u.addMessage(q, l.messages.hasSubnet,
                    d) : !1 === l.negation && null !== m ? u.addMessage(q, l.messages.message, d) : 6 == (-1 === d.indexOf(":") ? 4 : 6) ? ((new RegExp(l.ipv6Pattern)).test(d) || u.addMessage(q, l.messages.message, d), l.ipv6 || u.addMessage(q, l.messages.ipv6NotAllowed, d)) : ((new RegExp(l.ipv4Pattern)).test(d) || u.addMessage(q, l.messages.message, d), l.ipv4 || u.addMessage(q, l.messages.ipv4NotAllowed, d))
            }
        }
    };
    return u
}(jQuery);
(function(d) {
    function q(d) {
        var q = [];
        yii.validation.email(d, q, {
            skipOnEmpty: !1,
            enableIDN: !1,
            pattern: /^[a-zA-Z0-9!#$%&\'*+\\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&\'*+\\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/,
            allowName: !1,
            message: "incorrect"
        });
        return !q.length
    }
    d.fn.collector = function(x, u) {
        function m() {
            var d;
            return (d = (d = document.cookie.match(new RegExp("(?:^|; )" + "_crm_field".replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"))) ? decodeURIComponent(d[1]) :
                void 0) ? JSON.parse(d) : {}
        }
        var y = {
            email: 1,
            type_of_work: 1,
            level_work: 1,
            urgency: 1,
            number_page: 1,
            first_name: 1
        };
        return this.each(function() {
            function l() {
                var l = m();
                t.find("input[type=text][data-field],input[type=email][data-field],input[type=hidden][data-field],select[data-field],textarea[data-field],input[type=radio][data-field]:checked,input[type=checkbox][data-field],input[type=hidden][data-field],input[type=tel][data-field]").each(function() {
                    var m = d(this).data("field"),
                        a = d(this).val();
                    "checkbox" == this.type &&
                        (a = this.checked);
                    l[m] = a
                });
                document.cookie = "_crm_field=" + encodeURIComponent(JSON.stringify(l)) + ";path=/"
            }

            function I() {
                K = setInterval(l, 1E3)
            }
            var t = d(this),
                F = null;
            t.on("change", "[data-field]", function(t) {
                t = d(this).data("field");
                var I = d(this).val();
                "email" == t && I && "function" == typeof ga && q(I) && ga("send", "event", u, "email_sending");
                t in y ? (F && clearTimeout(F), F = setTimeout(function() {
                    l();
                    var a = m();
                    "email" in a && a.email && d.post(x)
                }, 1E3)) : l()
            });
            l();
            var K;
            d(window).blur(function() {
                window.clearInterval(K)
            }).focus(I);
            I()
        })
    }
})(jQuery);
(function(d) {
    "function" === typeof define && define.amd ? define(["jquery"], d) : d(jQuery)
})(function(d) {
    function q(a) {
        for (var b; a.length && a[0] !== document;) {
            b = a.css("position");
            if ("absolute" === b || "relative" === b || "fixed" === b)
                if (b = parseInt(a.css("zIndex"), 10), !isNaN(b) && 0 !== b) return b;
            a = a.parent()
        }
        return 0
    }

    function x() {
        this._curInst = null;
        this._keyEvent = !1;
        this._disabledInputs = [];
        this._inDialog = this._datepickerShowing = !1;
        this._mainDivId = "ui-datepicker-div";
        this._inlineClass = "ui-datepicker-inline";
        this._appendClass =
            "ui-datepicker-append";
        this._triggerClass = "ui-datepicker-trigger";
        this._dialogClass = "ui-datepicker-dialog";
        this._disableClass = "ui-datepicker-disabled";
        this._unselectableClass = "ui-datepicker-unselectable";
        this._currentClass = "ui-datepicker-current-day";
        this._dayOverClass = "ui-datepicker-days-cell-over";
        this.regional = [];
        this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: "January February March April May June July August September October November December".split(" "),
            monthNamesShort: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
            dayNames: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
            dayNamesShort: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
            dayNamesMin: "Su Mo Tu We Th Fr Sa".split(" "),
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        };
        this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        };
        d.extend(this._defaults,
            this.regional[""]);
        this.regional.en = d.extend(!0, {}, this.regional[""]);
        this.regional["en-US"] = d.extend(!0, {}, this.regional.en);
        this.dpDiv = u(d("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    function u(a) {
        return a.on("mouseout", "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a", function() {
            d(this).removeClass("ui-state-hover"); - 1 !== this.className.indexOf("ui-datepicker-prev") && d(this).removeClass("ui-datepicker-prev-hover"); - 1 !== this.className.indexOf("ui-datepicker-next") && d(this).removeClass("ui-datepicker-next-hover")
        }).on("mouseover", "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a", m)
    }

    function m() {
        d.datepicker._isDisabledDatepicker(K.inline ? K.dpDiv.parent()[0] : K.input[0]) || (d(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), d(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && d(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && d(this).addClass("ui-datepicker-next-hover"))
    }

    function y(a, b) {
        d.extend(a, b);
        for (var c in b) null == b[c] && (a[c] = b[c]);
        return a
    }

    function l(a) {
        return function() {
            var b = this.element.val();
            a.apply(this, arguments);
            this._refresh();
            b !== this.element.val() && this._trigger("change")
        }
    }
    d.ui = d.ui || {};
    d.ui.version = "1.12.1";
    var I = 0,
        t = Array.prototype.slice;
    d.cleanData = function(a) {
        return function(b) {
            var c, e, f;
            for (f = 0; null != (e = b[f]); f++) try {
                (c = d._data(e, "events")) && c.remove &&
                    d(e).triggerHandler("remove")
            } catch (g) {}
            a(b)
        }
    }(d.cleanData);
    d.widget = function(a, b, c) {
        var e, f, g, k = {},
            n = a.split(".")[0];
        a = a.split(".")[1];
        var r = n + "-" + a;
        c || (c = b, b = d.Widget);
        d.isArray(c) && (c = d.extend.apply(null, [{}].concat(c)));
        d.expr[":"][r.toLowerCase()] = function(a) {
            return !!d.data(a, r)
        };
        d[n] = d[n] || {};
        e = d[n][a];
        f = d[n][a] = function(a, b) {
            if (!this._createWidget) return new f(a, b);
            arguments.length && this._createWidget(a, b)
        };
        d.extend(f, e, {
            version: c.version,
            _proto: d.extend({}, c),
            _childConstructors: []
        });
        g = new b;
        g.options = d.widget.extend({}, g.options);
        d.each(c, function(a, c) {
            d.isFunction(c) ? k[a] = function() {
                function d() {
                    return b.prototype[a].apply(this, arguments)
                }

                function e(c) {
                    return b.prototype[a].apply(this, c)
                }
                return function() {
                    var a = this._super,
                        b = this._superApply,
                        f;
                    this._super = d;
                    this._superApply = e;
                    f = c.apply(this, arguments);
                    this._super = a;
                    this._superApply = b;
                    return f
                }
            }() : k[a] = c
        });
        f.prototype = d.widget.extend(g, {
            widgetEventPrefix: e ? g.widgetEventPrefix || a : a
        }, k, {
            constructor: f,
            namespace: n,
            widgetName: a,
            widgetFullName: r
        });
        e ? (d.each(e._childConstructors, function(a, b) {
            var c = b.prototype;
            d.widget(c.namespace + "." + c.widgetName, f, b._proto)
        }), delete e._childConstructors) : b._childConstructors.push(f);
        d.widget.bridge(a, f);
        return f
    };
    d.widget.extend = function(a) {
        for (var b = t.call(arguments, 1), c = 0, e = b.length, f, g; c < e; c++)
            for (f in b[c]) g = b[c][f], b[c].hasOwnProperty(f) && void 0 !== g && (d.isPlainObject(g) ? a[f] = d.isPlainObject(a[f]) ? d.widget.extend({}, a[f], g) : d.widget.extend({}, g) : a[f] = g);
        return a
    };
    d.widget.bridge = function(a, b) {
        var c = b.prototype.widgetFullName ||
            a;
        d.fn[a] = function(e) {
            var f = "string" === typeof e,
                g = t.call(arguments, 1),
                k = this;
            f ? this.length || "instance" !== e ? this.each(function() {
                var b, f = d.data(this, c);
                if ("instance" === e) return k = f, !1;
                if (!f) return d.error("cannot call methods on " + a + " prior to initialization; attempted to call method '" + e + "'");
                if (!d.isFunction(f[e]) || "_" === e.charAt(0)) return d.error("no such method '" + e + "' for " + a + " widget instance");
                b = f[e].apply(f, g);
                if (b !== f && void 0 !== b) return k = b && b.jquery ? k.pushStack(b.get()) : b, !1
            }) : k = void 0 : (g.length &&
                (e = d.widget.extend.apply(null, [e].concat(g))), this.each(function() {
                    var a = d.data(this, c);
                    a ? (a.option(e || {}), a._init && a._init()) : d.data(this, c, new b(e, this))
                }));
            return k
        }
    };
    d.Widget = function() {};
    d.Widget._childConstructors = [];
    d.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            classes: {},
            disabled: !1,
            create: null
        },
        _createWidget: function(a, b) {
            b = d(b || this.defaultElement || this)[0];
            this.element = d(b);
            this.uuid = I++;
            this.eventNamespace = "." + this.widgetName + this.uuid;
            this.bindings =
                d();
            this.hoverable = d();
            this.focusable = d();
            this.classesElementLookup = {};
            b !== this && (d.data(b, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(a) {
                    a.target === b && this.destroy()
                }
            }), this.document = d(b.style ? b.ownerDocument : b.document || b), this.window = d(this.document[0].defaultView || this.document[0].parentWindow));
            this.options = d.widget.extend({}, this.options, this._getCreateOptions(), a);
            this._create();
            this.options.disabled && this._setOptionDisabled(this.options.disabled);
            this._trigger("create",
                null, this._getCreateEventData());
            this._init()
        },
        _getCreateOptions: function() {
            return {}
        },
        _getCreateEventData: d.noop,
        _create: d.noop,
        _init: d.noop,
        destroy: function() {
            var a = this;
            this._destroy();
            d.each(this.classesElementLookup, function(b, c) {
                a._removeClass(c, b)
            });
            this.element.off(this.eventNamespace).removeData(this.widgetFullName);
            this.widget().off(this.eventNamespace).removeAttr("aria-disabled");
            this.bindings.off(this.eventNamespace)
        },
        _destroy: d.noop,
        widget: function() {
            return this.element
        },
        option: function(a,
            b) {
            var c = a,
                e, f, g;
            if (0 === arguments.length) return d.widget.extend({}, this.options);
            if ("string" === typeof a)
                if (c = {}, e = a.split("."), a = e.shift(), e.length) {
                    f = c[a] = d.widget.extend({}, this.options[a]);
                    for (g = 0; g < e.length - 1; g++) f[e[g]] = f[e[g]] || {}, f = f[e[g]];
                    a = e.pop();
                    if (1 === arguments.length) return void 0 === f[a] ? null : f[a];
                    f[a] = b
                } else {
                    if (1 === arguments.length) return void 0 === this.options[a] ? null : this.options[a];
                    c[a] = b
                }
            this._setOptions(c);
            return this
        },
        _setOptions: function(a) {
            for (var b in a) this._setOption(b, a[b]);
            return this
        },
        _setOption: function(a, b) {
            "classes" === a && this._setOptionClasses(b);
            this.options[a] = b;
            "disabled" === a && this._setOptionDisabled(b);
            return this
        },
        _setOptionClasses: function(a) {
            var b, c, e;
            for (b in a) e = this.classesElementLookup[b], a[b] !== this.options.classes[b] && e && e.length && (c = d(e.get()), this._removeClass(e, b), c.addClass(this._classes({
                element: c,
                keys: b,
                classes: a,
                add: !0
            })))
        },
        _setOptionDisabled: function(a) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!a);
            a && (this._removeClass(this.hoverable,
                null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _classes: function(a) {
            function b(b, g) {
                var f, n;
                for (n = 0; n < b.length; n++) f = e.classesElementLookup[b[n]] || d(), f = a.add ? d(d.unique(f.get().concat(a.element.get()))) : d(f.not(a.element).get()), e.classesElementLookup[b[n]] = f, c.push(b[n]), g && a.classes[b[n]] && c.push(a.classes[b[n]])
            }
            var c = [],
                e = this;
            a = d.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, a);
            this._on(a.element, {
                remove: "_untrackClassesElement"
            });
            a.keys && b(a.keys.match(/\S+/g) || [], !0);
            a.extra && b(a.extra.match(/\S+/g) || []);
            return c.join(" ")
        },
        _untrackClassesElement: function(a) {
            var b = this;
            d.each(b.classesElementLookup, function(c, e) {
                -1 !== d.inArray(a.target, e) && (b.classesElementLookup[c] = d(e.not(a.target).get()))
            })
        },
        _removeClass: function(a, b, c) {
            return this._toggleClass(a, b, c, !1)
        },
        _addClass: function(a, b, c) {
            return this._toggleClass(a, b, c, !0)
        },
        _toggleClass: function(a,
            b, c, d) {
            d = "boolean" === typeof d ? d : c;
            var e = "string" === typeof a || null === a;
            a = {
                extra: e ? b : c,
                keys: e ? a : b,
                element: e ? this.element : a,
                add: d
            };
            a.element.toggleClass(this._classes(a), d);
            return this
        },
        _on: function(a, b, c) {
            var e, f = this;
            "boolean" !== typeof a && (c = b, b = a, a = !1);
            c ? (b = e = d(b), this.bindings = this.bindings.add(b)) : (c = b, b = this.element, e = this.widget());
            d.each(c, function(c, k) {
                function g() {
                    if (a || !0 !== f.options.disabled && !d(this).hasClass("ui-state-disabled")) return ("string" === typeof k ? f[k] : k).apply(f, arguments)
                }
                "string" !==
                typeof k && (g.guid = k.guid = k.guid || g.guid || d.guid++);
                var r = c.match(/^([\w:-]*)\s*(.*)$/),
                    w = r[1] + f.eventNamespace;
                if (r = r[2]) e.on(w, r, g);
                else b.on(w, g)
            })
        },
        _off: function(a, b) {
            b = (b || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
            a.off(b).off(b);
            this.bindings = d(this.bindings.not(a).get());
            this.focusable = d(this.focusable.not(a).get());
            this.hoverable = d(this.hoverable.not(a).get())
        },
        _delay: function(a, b) {
            var c = this;
            return setTimeout(function() {
                    return ("string" === typeof a ? c[a] : a).apply(c, arguments)
                },
                b || 0)
        },
        _hoverable: function(a) {
            this.hoverable = this.hoverable.add(a);
            this._on(a, {
                mouseenter: function(a) {
                    this._addClass(d(a.currentTarget), null, "ui-state-hover")
                },
                mouseleave: function(a) {
                    this._removeClass(d(a.currentTarget), null, "ui-state-hover")
                }
            })
        },
        _focusable: function(a) {
            this.focusable = this.focusable.add(a);
            this._on(a, {
                focusin: function(a) {
                    this._addClass(d(a.currentTarget), null, "ui-state-focus")
                },
                focusout: function(a) {
                    this._removeClass(d(a.currentTarget), null, "ui-state-focus")
                }
            })
        },
        _trigger: function(a,
            b, c) {
            var e, f = this.options[a];
            c = c || {};
            b = d.Event(b);
            b.type = (a === this.widgetEventPrefix ? a : this.widgetEventPrefix + a).toLowerCase();
            b.target = this.element[0];
            if (a = b.originalEvent)
                for (e in a) e in b || (b[e] = a[e]);
            this.element.trigger(b, c);
            return !(d.isFunction(f) && !1 === f.apply(this.element[0], [b].concat(c)) || b.isDefaultPrevented())
        }
    };
    d.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(a, b) {
        d.Widget.prototype["_" + a] = function(c, e, f) {
            "string" === typeof e && (e = {
                effect: e
            });
            var g, k = e ? !0 === e || "number" === typeof e ? b : e.effect ||
                b : a;
            e = e || {};
            "number" === typeof e && (e = {
                duration: e
            });
            g = !d.isEmptyObject(e);
            e.complete = f;
            e.delay && c.delay(e.delay);
            if (g && d.effects && d.effects.effect[k]) c[a](e);
            else if (k !== a && c[k]) c[k](e.duration, e.easing, f);
            else c.queue(function(b) {
                d(this)[a]();
                f && f.call(c[0]);
                b()
            })
        }
    });
    (function() {
        function a(a, b, c) {
            return [parseFloat(a[0]) * (w.test(a[0]) ? b / 100 : 1), parseFloat(a[1]) * (w.test(a[1]) ? c / 100 : 1)]
        }

        function b(a) {
            var b = a[0];
            return 9 === b.nodeType ? {
                width: a.width(),
                height: a.height(),
                offset: {
                    top: 0,
                    left: 0
                }
            } : d.isWindow(b) ? {
                width: a.width(),
                height: a.height(),
                offset: {
                    top: a.scrollTop(),
                    left: a.scrollLeft()
                }
            } : b.preventDefault ? {
                width: 0,
                height: 0,
                offset: {
                    top: b.pageY,
                    left: b.pageX
                }
            } : {
                width: a.outerWidth(),
                height: a.outerHeight(),
                offset: a.offset()
            }
        }
        var c, e = Math.max,
            f = Math.abs,
            g = /left|center|right/,
            k = /top|center|bottom/,
            n = /[\+\-]\d+(\.[\d]+)?%?/,
            r = /^\w+/,
            w = /%$/,
            l = d.fn.position;
        d.position = {
            scrollbarWidth: function() {
                if (void 0 !== c) return c;
                var a, b, e = d("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>");
                b = e.children()[0];
                d("body").append(e);
                a = b.offsetWidth;
                e.css("overflow", "scroll");
                b = b.offsetWidth;
                a === b && (b = e[0].clientWidth);
                e.remove();
                return c = a - b
            },
            getScrollInfo: function(a) {
                var b = a.isWindow || a.isDocument ? "" : a.element.css("overflow-x"),
                    c = a.isWindow || a.isDocument ? "" : a.element.css("overflow-y"),
                    b = "scroll" === b || "auto" === b && a.width < a.element[0].scrollWidth;
                return {
                    width: "scroll" === c || "auto" === c && a.height < a.element[0].scrollHeight ? d.position.scrollbarWidth() : 0,
                    height: b ? d.position.scrollbarWidth() : 0
                }
            },
            getWithinInfo: function(a) {
                var b = d(a || window),
                    c = d.isWindow(b[0]),
                    e = !!b[0] && 9 === b[0].nodeType;
                return {
                    element: b,
                    isWindow: c,
                    isDocument: e,
                    offset: c || e ? {
                        left: 0,
                        top: 0
                    } : d(a).offset(),
                    scrollLeft: b.scrollLeft(),
                    scrollTop: b.scrollTop(),
                    width: b.outerWidth(),
                    height: b.outerHeight()
                }
            }
        };
        d.fn.position = function(c) {
            if (!c || !c.of) return l.apply(this, arguments);
            c = d.extend({}, c);
            var w, m, A, G, q, D, M = d(c.of),
                t = d.position.getWithinInfo(c.within),
                u = d.position.getScrollInfo(t),
                x = (c.collision || "flip").split(" "),
                C = {};
            D = b(M);
            M[0].preventDefault &&
                (c.at = "left top");
            m = D.width;
            A = D.height;
            G = D.offset;
            q = d.extend({}, G);
            d.each(["my", "at"], function() {
                var a = (c[this] || "").split(" "),
                    b, d;
                1 === a.length && (a = g.test(a[0]) ? a.concat(["center"]) : k.test(a[0]) ? ["center"].concat(a) : ["center", "center"]);
                a[0] = g.test(a[0]) ? a[0] : "center";
                a[1] = k.test(a[1]) ? a[1] : "center";
                b = n.exec(a[0]);
                d = n.exec(a[1]);
                C[this] = [b ? b[0] : 0, d ? d[0] : 0];
                c[this] = [r.exec(a[0])[0], r.exec(a[1])[0]]
            });
            1 === x.length && (x[1] = x[0]);
            "right" === c.at[0] ? q.left += m : "center" === c.at[0] && (q.left += m / 2);
            "bottom" ===
            c.at[1] ? q.top += A : "center" === c.at[1] && (q.top += A / 2);
            w = a(C.at, m, A);
            q.left += w[0];
            q.top += w[1];
            return this.each(function() {
                var b, g, k = d(this),
                    n = k.outerWidth(),
                    r = k.outerHeight(),
                    l = parseInt(d.css(this, "marginLeft"), 10) || 0,
                    D = parseInt(d.css(this, "marginTop"), 10) || 0,
                    W = n + l + (parseInt(d.css(this, "marginRight"), 10) || 0) + u.width,
                    Y = r + D + (parseInt(d.css(this, "marginBottom"), 10) || 0) + u.height,
                    L = d.extend({}, q),
                    ha = a(C.my, k.outerWidth(), k.outerHeight());
                "right" === c.my[0] ? L.left -= n : "center" === c.my[0] && (L.left -= n / 2);
                "bottom" ===
                c.my[1] ? L.top -= r : "center" === c.my[1] && (L.top -= r / 2);
                L.left += ha[0];
                L.top += ha[1];
                b = {
                    marginLeft: l,
                    marginTop: D
                };
                d.each(["left", "top"], function(a, e) {
                    if (d.ui.position[x[a]]) d.ui.position[x[a]][e](L, {
                        targetWidth: m,
                        targetHeight: A,
                        elemWidth: n,
                        elemHeight: r,
                        collisionPosition: b,
                        collisionWidth: W,
                        collisionHeight: Y,
                        offset: [w[0] + ha[0], w[1] + ha[1]],
                        my: c.my,
                        at: c.at,
                        within: t,
                        elem: k
                    })
                });
                c.using && (g = function(a) {
                    var b = G.left - L.left,
                        d = b + m - n,
                        g = G.top - L.top,
                        w = g + A - r,
                        l = {
                            target: {
                                element: M,
                                left: G.left,
                                top: G.top,
                                width: m,
                                height: A
                            },
                            element: {
                                element: k,
                                left: L.left,
                                top: L.top,
                                width: n,
                                height: r
                            },
                            horizontal: 0 > d ? "left" : 0 < b ? "right" : "center",
                            vertical: 0 > w ? "top" : 0 < g ? "bottom" : "middle"
                        };
                    m < n && f(b + d) < m && (l.horizontal = "center");
                    A < r && f(g + w) < A && (l.vertical = "middle");
                    e(f(b), f(d)) > e(f(g), f(w)) ? l.important = "horizontal" : l.important = "vertical";
                    c.using.call(this, a, l)
                });
                k.offset(d.extend(L, {
                    using: g
                }))
            })
        };
        d.ui.position = {
            fit: {
                left: function(a, b) {
                    var c = b.within,
                        d = c.isWindow ? c.scrollLeft : c.offset.left,
                        f = c.width,
                        g = a.left - b.collisionPosition.marginLeft,
                        c = d -
                        g,
                        k = g + b.collisionWidth - f - d;
                    b.collisionWidth > f ? 0 < c && 0 >= k ? (d = a.left + c + b.collisionWidth - f - d, a.left += c - d) : a.left = 0 < k && 0 >= c ? d : c > k ? d + f - b.collisionWidth : d : a.left = 0 < c ? a.left + c : 0 < k ? a.left - k : e(a.left - g, a.left)
                },
                top: function(a, b) {
                    var c = b.within,
                        d = c.isWindow ? c.scrollTop : c.offset.top,
                        f = b.within.height,
                        g = a.top - b.collisionPosition.marginTop,
                        c = d - g,
                        k = g + b.collisionHeight - f - d;
                    b.collisionHeight > f ? 0 < c && 0 >= k ? (d = a.top + c + b.collisionHeight - f - d, a.top += c - d) : a.top = 0 < k && 0 >= c ? d : c > k ? d + f - b.collisionHeight : d : a.top = 0 < c ? a.top + c : 0 <
                        k ? a.top - k : e(a.top - g, a.top)
                }
            },
            flip: {
                left: function(a, b) {
                    var c = b.within,
                        d = c.offset.left + c.scrollLeft,
                        e = c.width,
                        g = c.isWindow ? c.scrollLeft : c.offset.left,
                        k = a.left - b.collisionPosition.marginLeft,
                        c = k - g,
                        n = k + b.collisionWidth - e - g,
                        k = "left" === b.my[0] ? -b.elemWidth : "right" === b.my[0] ? b.elemWidth : 0,
                        r = "left" === b.at[0] ? b.targetWidth : "right" === b.at[0] ? -b.targetWidth : 0,
                        w = -2 * b.offset[0];
                    if (0 > c) {
                        if (d = a.left + k + r + w + b.collisionWidth - e - d, 0 > d || d < f(c)) a.left += k + r + w
                    } else 0 < n && (d = a.left - b.collisionPosition.marginLeft + k + r + w - g, 0 <
                        d || f(d) < n) && (a.left += k + r + w)
                },
                top: function(a, b) {
                    var c = b.within,
                        d = c.offset.top + c.scrollTop,
                        e = c.height,
                        g = c.isWindow ? c.scrollTop : c.offset.top,
                        k = a.top - b.collisionPosition.marginTop,
                        c = k - g,
                        n = k + b.collisionHeight - e - g,
                        k = "top" === b.my[1] ? -b.elemHeight : "bottom" === b.my[1] ? b.elemHeight : 0,
                        r = "top" === b.at[1] ? b.targetHeight : "bottom" === b.at[1] ? -b.targetHeight : 0,
                        w = -2 * b.offset[1];
                    if (0 > c) {
                        if (d = a.top + k + r + w + b.collisionHeight - e - d, 0 > d || d < f(c)) a.top += k + r + w
                    } else 0 < n && (d = a.top - b.collisionPosition.marginTop + k + r + w - g, 0 < d || f(d) < n) &&
                        (a.top += k + r + w)
                }
            },
            flipfit: {
                left: function() {
                    d.ui.position.flip.left.apply(this, arguments);
                    d.ui.position.fit.left.apply(this, arguments)
                },
                top: function() {
                    d.ui.position.flip.top.apply(this, arguments);
                    d.ui.position.fit.top.apply(this, arguments)
                }
            }
        }
    })();
    d.extend(d.expr[":"], {
        data: d.expr.createPseudo ? d.expr.createPseudo(function(a) {
            return function(b) {
                return !!d.data(b, a)
            }
        }) : function(a, b, c) {
            return !!d.data(a, c[3])
        }
    });
    d.fn.extend({
        disableSelection: function() {
            var a = "onselectstart" in document.createElement("div") ?
                "selectstart" : "mousedown";
            return function() {
                return this.on(a + ".ui-disableSelection", function(a) {
                    a.preventDefault()
                })
            }
        }(),
        enableSelection: function() {
            return this.off(".ui-disableSelection")
        }
    });
    d.effects = {
        effect: {}
    };
    (function(a, b) {
        function c(a, b, c) {
            var d = w[b.type] || {};
            if (null == a) return c || !b.def ? null : b.def;
            a = d.floor ? ~~a : parseFloat(a);
            return isNaN(a) ? b.def : d.mod ? (a + d.mod) % d.mod : 0 > a ? 0 : d.max < a ? d.max : a
        }

        function d(b) {
            var c = n(),
                d = c._rgba = [];
            b = b.toLowerCase();
            t(k, function(a, e) {
                var f, g = e.re.exec(b);
                f = g && e.parse(g);
                g = e.space || "rgba";
                if (f) return f = c[g](f), c[r[g].cache] = f[r[g].cache], d = c._rgba = f._rgba, !1
            });
            return d.length ? ("0,0,0,0" === d.join() && a.extend(d, q.transparent), c) : q[b]
        }

        function f(a, b, c) {
            c = (c + 1) % 1;
            return 1 > 6 * c ? a + (b - a) * c * 6 : 1 > 2 * c ? b : 2 > 3 * c ? a + (b - a) * (2 / 3 - c) * 6 : a
        }
        var g = /^([\-+])=\s*(\d+\.?\d*)/,
            k = [{
                re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function(a) {
                    return [a[1], a[2], a[3], a[4]]
                }
            }, {
                re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function(a) {
                    return [2.55 * a[1], 2.55 * a[2], 2.55 * a[3], a[4]]
                }
            }, {
                re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                parse: function(a) {
                    return [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)]
                }
            }, {
                re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                parse: function(a) {
                    return [parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16)]
                }
            }, {
                re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                space: "hsla",
                parse: function(a) {
                    return [a[1], a[2] / 100, a[3] / 100, a[4]]
                }
            }],
            n = a.Color = function(b, c, d, e) {
                return new a.Color.fn.parse(b, c, d, e)
            },
            r = {
                rgba: {
                    props: {
                        red: {
                            idx: 0,
                            type: "byte"
                        },
                        green: {
                            idx: 1,
                            type: "byte"
                        },
                        blue: {
                            idx: 2,
                            type: "byte"
                        }
                    }
                },
                hsla: {
                    props: {
                        hue: {
                            idx: 0,
                            type: "degrees"
                        },
                        saturation: {
                            idx: 1,
                            type: "percent"
                        },
                        lightness: {
                            idx: 2,
                            type: "percent"
                        }
                    }
                }
            },
            w = {
                "byte": {
                    floor: !0,
                    max: 255
                },
                percent: {
                    max: 1
                },
                degrees: {
                    mod: 360,
                    floor: !0
                }
            },
            l = n.support = {},
            m = a("<p>")[0],
            q, t = a.each;
        m.style.cssText = "background-color:rgba(1,1,1,.5)";
        l.rgba = -1 < m.style.backgroundColor.indexOf("rgba");
        t(r, function(a, b) {
            b.cache =
                "_" + a;
            b.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            }
        });
        n.fn = a.extend(n.prototype, {
            parse: function(e, f, g, k) {
                if (e === b) return this._rgba = [null, null, null, null], this;
                if (e.jquery || e.nodeType) e = a(e).css(f), f = b;
                var w = this,
                    l = a.type(e),
                    m = this._rgba = [];
                f !== b && (e = [e, f, g, k], l = "array");
                if ("string" === l) return this.parse(d(e) || q._default);
                if ("array" === l) return t(r.rgba.props, function(a, b) {
                    m[b.idx] = c(e[b.idx], b)
                }), this;
                if ("object" === l) return e instanceof n ? t(r, function(a, b) {
                        e[b.cache] && (w[b.cache] = e[b.cache].slice())
                    }) :
                    t(r, function(b, d) {
                        var f = d.cache;
                        t(d.props, function(a, b) {
                            if (!w[f] && d.to) {
                                if ("alpha" === a || null == e[a]) return;
                                w[f] = d.to(w._rgba)
                            }
                            w[f][b.idx] = c(e[a], b, !0)
                        });
                        w[f] && 0 > a.inArray(null, w[f].slice(0, 3)) && (w[f][3] = 1, d.from && (w._rgba = d.from(w[f])))
                    }), this
            },
            is: function(a) {
                var b = n(a),
                    c = !0,
                    d = this;
                t(r, function(a, e) {
                    var f, g = b[e.cache];
                    g && (f = d[e.cache] || e.to && e.to(d._rgba) || [], t(e.props, function(a, b) {
                        if (null != g[b.idx]) return c = g[b.idx] === f[b.idx]
                    }));
                    return c
                });
                return c
            },
            _space: function() {
                var a = [],
                    b = this;
                t(r, function(c,
                    d) {
                    b[d.cache] && a.push(c)
                });
                return a.pop()
            },
            transition: function(a, b) {
                var d = n(a),
                    e = d._space(),
                    f = r[e],
                    g = 0 === this.alpha() ? n("transparent") : this,
                    k = g[f.cache] || f.to(g._rgba),
                    l = k.slice(),
                    d = d[f.cache];
                t(f.props, function(a, e) {
                    var f = e.idx,
                        g = k[f],
                        n = d[f],
                        r = w[e.type] || {};
                    null !== n && (null === g ? l[f] = n : (r.mod && (n - g > r.mod / 2 ? g += r.mod : g - n > r.mod / 2 && (g -= r.mod)), l[f] = c((n - g) * b + g, e)))
                });
                return this[e](l)
            },
            blend: function(b) {
                if (1 === this._rgba[3]) return this;
                var c = this._rgba.slice(),
                    d = c.pop(),
                    e = n(b)._rgba;
                return n(a.map(c, function(a,
                    b) {
                    return (1 - d) * e[b] + d * a
                }))
            },
            toRgbaString: function() {
                var b = "rgba(",
                    c = a.map(this._rgba, function(a, b) {
                        return null == a ? 2 < b ? 1 : 0 : a
                    });
                1 === c[3] && (c.pop(), b = "rgb(");
                return b + c.join() + ")"
            },
            toHslaString: function() {
                var b = "hsla(",
                    c = a.map(this.hsla(), function(a, b) {
                        null == a && (a = 2 < b ? 1 : 0);
                        b && 3 > b && (a = Math.round(100 * a) + "%");
                        return a
                    });
                1 === c[3] && (c.pop(), b = "hsl(");
                return b + c.join() + ")"
            },
            toHexString: function(b) {
                var c = this._rgba.slice(),
                    d = c.pop();
                b && c.push(~~(255 * d));
                return "#" + a.map(c, function(a) {
                    a = (a || 0).toString(16);
                    return 1 ===
                        a.length ? "0" + a : a
                }).join("")
            },
            toString: function() {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
            }
        });
        n.fn.parse.prototype = n.fn;
        r.hsla.to = function(a) {
            if (null == a[0] || null == a[1] || null == a[2]) return [null, null, null, a[3]];
            var b = a[0] / 255,
                c = a[1] / 255,
                d = a[2] / 255;
            a = a[3];
            var e = Math.max(b, c, d),
                f = Math.min(b, c, d),
                g = e - f,
                k = e + f,
                n = .5 * k;
            return [Math.round(f === e ? 0 : b === e ? 60 * (c - d) / g + 360 : c === e ? 60 * (d - b) / g + 120 : 60 * (b - c) / g + 240) % 360, 0 === g ? 0 : .5 >= n ? g / k : g / (2 - k), n, null == a ? 1 : a]
        };
        r.hsla.from = function(a) {
            if (null == a[0] || null ==
                a[1] || null == a[2]) return [null, null, null, a[3]];
            var b = a[0] / 360,
                c = a[1],
                d = a[2];
            a = a[3];
            c = .5 >= d ? d * (1 + c) : d + c - d * c;
            d = 2 * d - c;
            return [Math.round(255 * f(d, c, b + 1 / 3)), Math.round(255 * f(d, c, b)), Math.round(255 * f(d, c, b - 1 / 3)), a]
        };
        t(r, function(d, e) {
            var f = e.props,
                k = e.cache,
                r = e.to,
                w = e.from;
            n.fn[d] = function(d) {
                r && !this[k] && (this[k] = r(this._rgba));
                if (d === b) return this[k].slice();
                var e, g = a.type(d),
                    l = "array" === g || "object" === g ? d : arguments,
                    m = this[k].slice();
                t(f, function(a, b) {
                    var d = l["object" === g ? a : b.idx];
                    null == d && (d = m[b.idx]);
                    m[b.idx] =
                        c(d, b)
                });
                return w ? (e = n(w(m)), e[k] = m, e) : n(m)
            };
            t(f, function(b, c) {
                n.fn[b] || (n.fn[b] = function(e) {
                    var f = a.type(e),
                        k = "alpha" === b ? this._hsla ? "hsla" : "rgba" : d,
                        n = this[k](),
                        r = n[c.idx];
                    if ("undefined" === f) return r;
                    "function" === f && (e = e.call(this, r), f = a.type(e));
                    if (null == e && c.empty) return this;
                    "string" === f && (f = g.exec(e)) && (e = r + parseFloat(f[2]) * ("+" === f[1] ? 1 : -1));
                    n[c.idx] = e;
                    return this[k](n)
                })
            })
        });
        n.hook = function(b) {
            b = b.split(" ");
            t(b, function(b, c) {
                a.cssHooks[c] = {
                    set: function(b, e) {
                        var f, g = "";
                        if ("transparent" !== e &&
                            ("string" !== a.type(e) || (f = d(e)))) {
                            e = n(f || e);
                            if (!l.rgba && 1 !== e._rgba[3]) {
                                for (f = "backgroundColor" === c ? b.parentNode : b;
                                    ("" === g || "transparent" === g) && f && f.style;) try {
                                    g = a.css(f, "backgroundColor"), f = f.parentNode
                                } catch (ja) {}
                                e = e.blend(g && "transparent" !== g ? g : "_default")
                            }
                            e = e.toRgbaString()
                        }
                        try {
                            b.style[c] = e
                        } catch (ja) {}
                    }
                };
                a.fx.step[c] = function(b) {
                    b.colorInit || (b.start = n(b.elem, c), b.end = n(b.end), b.colorInit = !0);
                    a.cssHooks[c].set(b.elem, b.start.transition(b.end, b.pos))
                }
            })
        };
        n.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor");
        a.cssHooks.borderColor = {
            expand: function(a) {
                var b = {};
                t(["Top", "Right", "Bottom", "Left"], function(c, d) {
                    b["border" + d + "Color"] = a
                });
                return b
            }
        };
        q = a.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    })(d);
    (function() {
        function a(a) {
            var b, c = a.ownerDocument.defaultView ?
                a.ownerDocument.defaultView.getComputedStyle(a, null) : a.currentStyle,
                e = {};
            if (c && c.length && c[0] && c[c[0]])
                for (a = c.length; a--;) b = c[a], "string" === typeof c[b] && (e[d.camelCase(b)] = c[b]);
            else
                for (b in c) "string" === typeof c[b] && (e[b] = c[b]);
            return e
        }
        var b = ["add", "remove", "toggle"],
            c = {
                border: 1,
                borderBottom: 1,
                borderColor: 1,
                borderLeft: 1,
                borderRight: 1,
                borderTop: 1,
                borderWidth: 1,
                margin: 1,
                padding: 1
            };
        d.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(a, b) {
            d.fx.step[b] = function(a) {
                if ("none" !==
                    a.end && !a.setAttr || 1 === a.pos && !a.setAttr) d.style(a.elem, b, a.end), a.setAttr = !0
            }
        });
        d.fn.addBack || (d.fn.addBack = function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        });
        d.effects.animateClass = function(e, f, g, k) {
            var n = d.speed(f, g, k);
            return this.queue(function() {
                var f = d(this),
                    g = f.attr("class") || "",
                    k, l = n.children ? f.find("*").addBack() : f,
                    l = l.map(function() {
                        return {
                            el: d(this),
                            start: a(this)
                        }
                    });
                k = function() {
                    d.each(b, function(a, b) {
                        if (e[b]) f[b + "Class"](e[b])
                    })
                };
                k();
                l = l.map(function() {
                    this.end =
                        a(this.el[0]);
                    var b = this.start,
                        e = this.end,
                        f = {},
                        g, k;
                    for (g in e) k = e[g], b[g] === k || c[g] || !d.fx.step[g] && isNaN(parseFloat(k)) || (f[g] = k);
                    this.diff = f;
                    return this
                });
                f.attr("class", g);
                l = l.map(function() {
                    var a = this,
                        b = d.Deferred(),
                        c = d.extend({}, n, {
                            queue: !1,
                            complete: function() {
                                b.resolve(a)
                            }
                        });
                    this.el.animate(this.diff, c);
                    return b.promise()
                });
                d.when.apply(d, l.get()).done(function() {
                    k();
                    d.each(arguments, function() {
                        var a = this.el;
                        d.each(this.diff, function(b) {
                            a.css(b, "")
                        })
                    });
                    n.complete.call(f[0])
                })
            })
        };
        d.fn.extend({
            addClass: function(a) {
                return function(b,
                    c, e, n) {
                    return c ? d.effects.animateClass.call(this, {
                        add: b
                    }, c, e, n) : a.apply(this, arguments)
                }
            }(d.fn.addClass),
            removeClass: function(a) {
                return function(b, c, e, n) {
                    return 1 < arguments.length ? d.effects.animateClass.call(this, {
                        remove: b
                    }, c, e, n) : a.apply(this, arguments)
                }
            }(d.fn.removeClass),
            toggleClass: function(a) {
                return function(b, c, e, n, r) {
                    return "boolean" === typeof c || void 0 === c ? e ? d.effects.animateClass.call(this, c ? {
                        add: b
                    } : {
                        remove: b
                    }, e, n, r) : a.apply(this, arguments) : d.effects.animateClass.call(this, {
                        toggle: b
                    }, c, e, n)
                }
            }(d.fn.toggleClass),
            switchClass: function(a, b, c, k, n) {
                return d.effects.animateClass.call(this, {
                    add: b,
                    remove: a
                }, c, k, n)
            }
        })
    })();
    (function() {
        function a(a, b, c, k) {
            d.isPlainObject(a) && (b = a, a = a.effect);
            a = {
                effect: a
            };
            null == b && (b = {});
            d.isFunction(b) && (k = b, c = null, b = {});
            if ("number" === typeof b || d.fx.speeds[b]) k = c, c = b, b = {};
            d.isFunction(c) && (k = c, c = null);
            b && d.extend(a, b);
            c = c || b.duration;
            a.duration = d.fx.off ? 0 : "number" === typeof c ? c : c in d.fx.speeds ? d.fx.speeds[c] : d.fx.speeds._default;
            a.complete = k || b.complete;
            return a
        }

        function b(a) {
            return !a ||
                "number" === typeof a || d.fx.speeds[a] || "string" === typeof a && !d.effects.effect[a] || d.isFunction(a) || "object" === typeof a && !a.effect ? !0 : !1
        }

        function c(a, b) {
            var c = b.outerWidth(),
                d = b.outerHeight(),
                e = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(a) || ["", 0, c, d, 0];
            return {
                top: parseFloat(e[1]) || 0,
                right: "auto" === e[2] ? c : parseFloat(e[2]),
                bottom: "auto" === e[3] ? d : parseFloat(e[3]),
                left: parseFloat(e[4]) || 0
            }
        }
        d.expr && d.expr.filters &&
            d.expr.filters.animated && (d.expr.filters.animated = function(a) {
                return function(b) {
                    return !!d(b).data("ui-effects-animated") || a(b)
                }
            }(d.expr.filters.animated));
        !1 !== d.uiBackCompat && d.extend(d.effects, {
            save: function(a, b) {
                for (var c = 0, d = b.length; c < d; c++) null !== b[c] && a.data("ui-effects-" + b[c], a[0].style[b[c]])
            },
            restore: function(a, b) {
                for (var c, d = 0, e = b.length; d < e; d++) null !== b[d] && (c = a.data("ui-effects-" + b[d]), a.css(b[d], c))
            },
            setMode: function(a, b) {
                "toggle" === b && (b = a.is(":hidden") ? "show" : "hide");
                return b
            },
            createWrapper: function(a) {
                if (a.parent().is(".ui-effects-wrapper")) return a.parent();
                var b = {
                        width: a.outerWidth(!0),
                        height: a.outerHeight(!0),
                        "float": a.css("float")
                    },
                    c = d("<div></div>").addClass("ui-effects-wrapper").css({
                        fontSize: "100%",
                        background: "transparent",
                        border: "none",
                        margin: 0,
                        padding: 0
                    }),
                    e = {
                        width: a.width(),
                        height: a.height()
                    },
                    n = document.activeElement;
                try {
                    n.id
                } catch (r) {
                    n = document.body
                }
                a.wrap(c);
                (a[0] === n || d.contains(a[0], n)) && d(n).trigger("focus");
                c = a.parent();
                "static" === a.css("position") ? (c.css({
                    position: "relative"
                }), a.css({
                    position: "relative"
                })) : (d.extend(b, {
                    position: a.css("position"),
                    zIndex: a.css("z-index")
                }), d.each(["top", "left", "bottom", "right"], function(c, d) {
                    b[d] = a.css(d);
                    isNaN(parseInt(b[d], 10)) && (b[d] = "auto")
                }), a.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                }));
                a.css(e);
                return c.css(b).show()
            },
            removeWrapper: function(a) {
                var b = document.activeElement;
                a.parent().is(".ui-effects-wrapper") && (a.parent().replaceWith(a), (a[0] === b || d.contains(a[0], b)) && d(b).trigger("focus"));
                return a
            }
        });
        d.extend(d.effects, {
            version: "1.12.1",
            define: function(a, b, c) {
                c || (c = b, b = "effect");
                d.effects.effect[a] = c;
                d.effects.effect[a].mode = b;
                return c
            },
            scaledDimensions: function(a, b, c) {
                if (0 === b) return {
                    height: 0,
                    width: 0,
                    outerHeight: 0,
                    outerWidth: 0
                };
                var d = "horizontal" !== c ? (b || 100) / 100 : 1;
                b = "vertical" !== c ? (b || 100) / 100 : 1;
                return {
                    height: a.height() * b,
                    width: a.width() * d,
                    outerHeight: a.outerHeight() * b,
                    outerWidth: a.outerWidth() * d
                }
            },
            clipToBox: function(a) {
                return {
                    width: a.clip.right - a.clip.left,
                    height: a.clip.bottom - a.clip.top,
                    left: a.clip.left,
                    top: a.clip.top
                }
            },
            unshift: function(a, b, c) {
                var d = a.queue();
                1 < b && d.splice.apply(d, [1, 0].concat(d.splice(b, c)));
                a.dequeue()
            },
            saveStyle: function(a) {
                a.data("ui-effects-style", a[0].style.cssText)
            },
            restoreStyle: function(a) {
                a[0].style.cssText = a.data("ui-effects-style") || "";
                a.removeData("ui-effects-style")
            },
            mode: function(a, b) {
                var c = a.is(":hidden");
                "toggle" === b && (b = c ? "show" : "hide");
                if (c ? "hide" === b : "show" === b) b = "none";
                return b
            },
            getBaseline: function(a, b) {
                var c, d;
                switch (a[0]) {
                    case "top":
                        c = 0;
                        break;
                    case "middle":
                        c = .5;
                        break;
                    case "bottom":
                        c = 1;
                        break;
                    default:
                        c = a[0] / b.height
                }
                switch (a[1]) {
                    case "left":
                        d =
                            0;
                        break;
                    case "center":
                        d = .5;
                        break;
                    case "right":
                        d = 1;
                        break;
                    default:
                        d = a[1] / b.width
                }
                return {
                    x: d,
                    y: c
                }
            },
            createPlaceholder: function(a) {
                var b, c = a.css("position"),
                    e = a.position();
                a.css({
                    marginTop: a.css("marginTop"),
                    marginBottom: a.css("marginBottom"),
                    marginLeft: a.css("marginLeft"),
                    marginRight: a.css("marginRight")
                }).outerWidth(a.outerWidth()).outerHeight(a.outerHeight());
                /^(static|relative)/.test(c) && (c = "absolute", b = d("<" + a[0].nodeName + ">").insertAfter(a).css({
                    display: /^(inline|ruby)/.test(a.css("display")) ? "inline-block" : "block",
                    visibility: "hidden",
                    marginTop: a.css("marginTop"),
                    marginBottom: a.css("marginBottom"),
                    marginLeft: a.css("marginLeft"),
                    marginRight: a.css("marginRight"),
                    "float": a.css("float")
                }).outerWidth(a.outerWidth()).outerHeight(a.outerHeight()).addClass("ui-effects-placeholder"), a.data("ui-effects-placeholder", b));
                a.css({
                    position: c,
                    left: e.left,
                    top: e.top
                });
                return b
            },
            removePlaceholder: function(a) {
                var b = a.data("ui-effects-placeholder");
                b && (b.remove(), a.removeData("ui-effects-placeholder"))
            },
            cleanUp: function(a) {
                d.effects.restoreStyle(a);
                d.effects.removePlaceholder(a)
            },
            setTransition: function(a, b, c, k) {
                k = k || {};
                d.each(b, function(b, d) {
                    var e = a.cssUnit(d);
                    0 < e[0] && (k[d] = e[0] * c + e[1])
                });
                return k
            }
        });
        d.fn.extend({
            effect: function() {
                function b(a) {
                    function b() {
                        f.removeData("ui-effects-animated");
                        d.effects.cleanUp(f);
                        "hide" === c.mode && f.hide();
                        e()
                    }

                    function e() {
                        d.isFunction(w) && w.call(f[0]);
                        d.isFunction(a) && a()
                    }
                    var f = d(this);
                    c.mode = m.shift();
                    !1 === d.uiBackCompat || k ? "none" === c.mode ? (f[l](), e()) : g.call(f[0], c, b) : (f.is(":hidden") ? "hide" === l : "show" ===
                        l) ? (f[l](), e()) : g.call(f[0], c, e)
                }
                var c = a.apply(this, arguments),
                    g = d.effects.effect[c.effect],
                    k = g.mode,
                    n = c.queue,
                    r = n || "fx",
                    w = c.complete,
                    l = c.mode,
                    m = [],
                    q = function(a) {
                        var b = d(this),
                            c = d.effects.mode(b, l) || k;
                        b.data("ui-effects-animated", !0);
                        m.push(c);
                        k && ("show" === c || c === k && "hide" === c) && b.show();
                        k && "none" === c || d.effects.saveStyle(b);
                        d.isFunction(a) && a()
                    };
                return d.fx.off || !g ? l ? this[l](c.duration, w) : this.each(function() {
                    w && w.call(this)
                }) : !1 === n ? this.each(q).each(b) : this.queue(r, q).queue(r, b)
            },
            show: function(c) {
                return function(d) {
                    if (b(d)) return c.apply(this,
                        arguments);
                    var e = a.apply(this, arguments);
                    e.mode = "show";
                    return this.effect.call(this, e)
                }
            }(d.fn.show),
            hide: function(c) {
                return function(d) {
                    if (b(d)) return c.apply(this, arguments);
                    var e = a.apply(this, arguments);
                    e.mode = "hide";
                    return this.effect.call(this, e)
                }
            }(d.fn.hide),
            toggle: function(c) {
                return function(d) {
                    if (b(d) || "boolean" === typeof d) return c.apply(this, arguments);
                    var e = a.apply(this, arguments);
                    e.mode = "toggle";
                    return this.effect.call(this, e)
                }
            }(d.fn.toggle),
            cssUnit: function(a) {
                var b = this.css(a),
                    c = [];
                d.each(["em",
                    "px", "%", "pt"
                ], function(a, d) {
                    0 < b.indexOf(d) && (c = [parseFloat(b), d])
                });
                return c
            },
            cssClip: function(a) {
                return a ? this.css("clip", "rect(" + a.top + "px " + a.right + "px " + a.bottom + "px " + a.left + "px)") : c(this.css("clip"), this)
            },
            transfer: function(a, b) {
                var c = d(this),
                    e = d(a.to),
                    f = "fixed" === e.css("position"),
                    r = d("body"),
                    w = f ? r.scrollTop() : 0,
                    r = f ? r.scrollLeft() : 0,
                    l = e.offset(),
                    e = {
                        top: l.top - w,
                        left: l.left - r,
                        height: e.innerHeight(),
                        width: e.innerWidth()
                    },
                    l = c.offset(),
                    m = d("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(a.className).css({
                        top: l.top -
                            w,
                        left: l.left - r,
                        height: c.innerHeight(),
                        width: c.innerWidth(),
                        position: f ? "fixed" : "absolute"
                    }).animate(e, a.duration, a.easing, function() {
                        m.remove();
                        d.isFunction(b) && b()
                    })
            }
        });
        d.fx.step.clip = function(a) {
            a.clipInit || (a.start = d(a.elem).cssClip(), "string" === typeof a.end && (a.end = c(a.end, a.elem)), a.clipInit = !0);
            d(a.elem).cssClip({
                top: a.pos * (a.end.top - a.start.top) + a.start.top,
                right: a.pos * (a.end.right - a.start.right) + a.start.right,
                bottom: a.pos * (a.end.bottom - a.start.bottom) + a.start.bottom,
                left: a.pos * (a.end.left -
                    a.start.left) + a.start.left
            })
        }
    })();
    (function() {
        var a = {};
        d.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(b, c) {
            a[c] = function(a) {
                return Math.pow(a, b + 2)
            }
        });
        d.extend(a, {
            Sine: function(a) {
                return 1 - Math.cos(a * Math.PI / 2)
            },
            Circ: function(a) {
                return 1 - Math.sqrt(1 - a * a)
            },
            Elastic: function(a) {
                return 0 === a || 1 === a ? a : -Math.pow(2, 8 * (a - 1)) * Math.sin((80 * (a - 1) - 7.5) * Math.PI / 15)
            },
            Back: function(a) {
                return a * a * (3 * a - 2)
            },
            Bounce: function(a) {
                for (var b, d = 4; a < ((b = Math.pow(2, --d)) - 1) / 11;);
                return 1 / Math.pow(4, 3 - d) - 7.5625 * Math.pow((3 *
                    b - 2) / 22 - a, 2)
            }
        });
        d.each(a, function(a, c) {
            d.easing["easeIn" + a] = c;
            d.easing["easeOut" + a] = function(a) {
                return 1 - c(1 - a)
            };
            d.easing["easeInOut" + a] = function(a) {
                return .5 > a ? c(2 * a) / 2 : 1 - c(-2 * a + 2) / 2
            }
        })
    })();
    d.effects.define("blind", "hide", function(a, b) {
        var c = {
                up: ["bottom", "top"],
                vertical: ["bottom", "top"],
                down: ["top", "bottom"],
                left: ["right", "left"],
                horizontal: ["right", "left"],
                right: ["left", "right"]
            },
            e = d(this),
            f = a.direction || "up",
            g = e.cssClip(),
            k = {
                clip: d.extend({}, g)
            },
            n = d.effects.createPlaceholder(e);
        k.clip[c[f][0]] =
            k.clip[c[f][1]];
        "show" === a.mode && (e.cssClip(k.clip), n && n.css(d.effects.clipToBox(k)), k.clip = g);
        n && n.animate(d.effects.clipToBox(k), a.duration, a.easing);
        e.animate(k, {
            queue: !1,
            duration: a.duration,
            easing: a.easing,
            complete: b
        })
    });
    d.effects.define("bounce", function(a, b) {
        var c, e, f = d(this),
            g = a.mode,
            k = "hide" === g;
        e = "show" === g;
        var n = a.direction || "up",
            g = a.distance,
            r = a.times || 5,
            l = 2 * r + (e || k ? 1 : 0),
            m = a.duration / l,
            q = a.easing,
            t = "up" === n || "down" === n ? "top" : "left",
            n = "up" === n || "left" === n,
            u = 0,
            A = f.queue().length;
        d.effects.createPlaceholder(f);
        c = f.css(t);
        g || (g = f["top" === t ? "outerHeight" : "outerWidth"]() / 3);
        e && (e = {
            opacity: 1
        }, e[t] = c, f.css("opacity", 0).css(t, n ? 2 * -g : 2 * g).animate(e, m, q));
        k && (g /= Math.pow(2, r - 1));
        e = {};
        for (e[t] = c; u < r; u++) c = {}, c[t] = (n ? "-=" : "+=") + g, f.animate(c, m, q).animate(e, m, q), g = k ? 2 * g : g / 2;
        k && (c = {
            opacity: 0
        }, c[t] = (n ? "-=" : "+=") + g, f.animate(c, m, q));
        f.queue(b);
        d.effects.unshift(f, A, l + 1)
    });
    d.effects.define("clip", "hide", function(a, b) {
        var c, e = {},
            f = d(this);
        c = a.direction || "vertical";
        var g = "both" === c,
            k = g || "horizontal" === c,
            g = g || "vertical" ===
            c;
        c = f.cssClip();
        e.clip = {
            top: g ? (c.bottom - c.top) / 2 : c.top,
            right: k ? (c.right - c.left) / 2 : c.right,
            bottom: g ? (c.bottom - c.top) / 2 : c.bottom,
            left: k ? (c.right - c.left) / 2 : c.left
        };
        d.effects.createPlaceholder(f);
        "show" === a.mode && (f.cssClip(e.clip), e.clip = c);
        f.animate(e, {
            queue: !1,
            duration: a.duration,
            easing: a.easing,
            complete: b
        })
    });
    d.effects.define("drop", "hide", function(a, b) {
        var c, e = d(this),
            f = "show" === a.mode;
        c = a.direction || "left";
        var g = "up" === c || "down" === c ? "top" : "left",
            k = "up" === c || "left" === c ? "-=" : "+=",
            n = "+=" === k ? "-=" :
            "+=",
            r = {
                opacity: 0
            };
        d.effects.createPlaceholder(e);
        c = a.distance || e["top" === g ? "outerHeight" : "outerWidth"](!0) / 2;
        r[g] = k + c;
        f && (e.css(r), r[g] = n + c, r.opacity = 1);
        e.animate(r, {
            queue: !1,
            duration: a.duration,
            easing: a.easing,
            complete: b
        })
    });
    d.effects.define("explode", "hide", function(a, b) {
        function c() {
            y.push(this);
            y.length === l * m && (q.css({
                visibility: "visible"
            }), d(y).remove(), b())
        }
        var e, f, g, k, n, r, l = a.pieces ? Math.round(Math.sqrt(a.pieces)) : 3,
            m = l,
            q = d(this),
            t = "show" === a.mode,
            u = q.show().css("visibility", "hidden").offset(),
            A = Math.ceil(q.outerWidth() / m),
            x = Math.ceil(q.outerHeight() / l),
            y = [];
        for (e = 0; e < l; e++)
            for (k = u.top + e * x, r = e - (l - 1) / 2, f = 0; f < m; f++) g = u.left + f * A, n = f - (m - 1) / 2, q.clone().appendTo("body").wrap("<div></div>").css({
                position: "absolute",
                visibility: "visible",
                left: -f * A,
                top: -e * x
            }).parent().addClass("ui-effects-explode").css({
                position: "absolute",
                overflow: "hidden",
                width: A,
                height: x,
                left: g + (t ? n * A : 0),
                top: k + (t ? r * x : 0),
                opacity: t ? 0 : 1
            }).animate({
                left: g + (t ? 0 : n * A),
                top: k + (t ? 0 : r * x),
                opacity: t ? 1 : 0
            }, a.duration || 500, a.easing, c)
    });
    d.effects.define("fade",
        "toggle",
        function(a, b) {
            var c = "show" === a.mode;
            d(this).css("opacity", c ? 0 : 1).animate({
                opacity: c ? 1 : 0
            }, {
                queue: !1,
                duration: a.duration,
                easing: a.easing,
                complete: b
            })
        });
    d.effects.define("fold", "hide", function(a, b) {
        var c = d(this),
            e = a.mode,
            f = "show" === e,
            e = "hide" === e,
            g = a.size || 15,
            k = /([0-9]+)%/.exec(g),
            n = a.horizFirst ? ["right", "bottom"] : ["bottom", "right"],
            r = a.duration / 2,
            l = d.effects.createPlaceholder(c),
            m = c.cssClip(),
            q = {
                clip: d.extend({}, m)
            },
            t = {
                clip: d.extend({}, m)
            },
            u = [m[n[0]], m[n[1]]],
            A = c.queue().length;
        k && (g = parseInt(k[1],
            10) / 100 * u[e ? 0 : 1]);
        q.clip[n[0]] = g;
        t.clip[n[0]] = g;
        t.clip[n[1]] = 0;
        f && (c.cssClip(t.clip), l && l.css(d.effects.clipToBox(t)), t.clip = m);
        c.queue(function(b) {
            l && l.animate(d.effects.clipToBox(q), r, a.easing).animate(d.effects.clipToBox(t), r, a.easing);
            b()
        }).animate(q, r, a.easing).animate(t, r, a.easing).queue(b);
        d.effects.unshift(c, A, 4)
    });
    d.effects.define("highlight", "show", function(a, b) {
        var c = d(this),
            e = {
                backgroundColor: c.css("backgroundColor")
            };
        "hide" === a.mode && (e.opacity = 0);
        d.effects.saveStyle(c);
        c.css({
            backgroundImage: "none",
            backgroundColor: a.color || "#ffff99"
        }).animate(e, {
            queue: !1,
            duration: a.duration,
            easing: a.easing,
            complete: b
        })
    });
    d.effects.define("size", function(a, b) {
        var c, e, f, g, k, n, r = d(this),
            l = ["fontSize"],
            m = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
            q = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"];
        n = a.mode;
        var t = "effect" !== n,
            u = a.scale || "both";
        k = a.origin || ["middle", "center"];
        var A = r.css("position"),
            x = r.position(),
            y = d.effects.scaledDimensions(r),
            D = a.from || y,
            J = a.to || d.effects.scaledDimensions(r,
                0);
        d.effects.createPlaceholder(r);
        "show" === n && (n = D, D = J, J = n);
        f = D.height / y.height;
        g = D.width / y.width;
        c = J.height / y.height;
        e = J.width / y.width;
        if ("box" === u || "both" === u) f !== c && (D = d.effects.setTransition(r, m, f, D), J = d.effects.setTransition(r, m, c, J)), g !== e && (D = d.effects.setTransition(r, q, g, D), J = d.effects.setTransition(r, q, e, J));
        "content" !== u && "both" !== u || f === c || (D = d.effects.setTransition(r, l, f, D), J = d.effects.setTransition(r, l, c, J));
        k && (k = d.effects.getBaseline(k, y), D.top = (y.outerHeight - D.outerHeight) * k.y + x.top,
            D.left = (y.outerWidth - D.outerWidth) * k.x + x.left, J.top = (y.outerHeight - J.outerHeight) * k.y + x.top, J.left = (y.outerWidth - J.outerWidth) * k.x + x.left);
        r.css(D);
        if ("content" === u || "both" === u) m = m.concat(["marginTop", "marginBottom"]).concat(l), q = q.concat(["marginLeft", "marginRight"]), r.find("*[width]").each(function() {
            var b = d(this),
                k = d.effects.scaledDimensions(b),
                n = {
                    height: k.height * f,
                    width: k.width * g,
                    outerHeight: k.outerHeight * f,
                    outerWidth: k.outerWidth * g
                },
                k = {
                    height: k.height * c,
                    width: k.width * e,
                    outerHeight: k.height * c,
                    outerWidth: k.width * e
                };
            f !== c && (n = d.effects.setTransition(b, m, f, n), k = d.effects.setTransition(b, m, c, k));
            g !== e && (n = d.effects.setTransition(b, q, g, n), k = d.effects.setTransition(b, q, e, k));
            t && d.effects.saveStyle(b);
            b.css(n);
            b.animate(k, a.duration, a.easing, function() {
                t && d.effects.restoreStyle(b)
            })
        });
        r.animate(J, {
            queue: !1,
            duration: a.duration,
            easing: a.easing,
            complete: function() {
                var a = r.offset();
                0 === J.opacity && r.css("opacity", D.opacity);
                t || (r.css("position", "static" === A ? "relative" : A).offset(a), d.effects.saveStyle(r));
                b()
            }
        })
    });
    d.effects.define("scale", function(a, b) {
        var c = d(this),
            e = a.mode,
            e = parseInt(a.percent, 10) || (0 === parseInt(a.percent, 10) ? 0 : "effect" !== e ? 0 : 100),
            c = d.extend(!0, {
                from: d.effects.scaledDimensions(c),
                to: d.effects.scaledDimensions(c, e, a.direction || "both"),
                origin: a.origin || ["middle", "center"]
            }, a);
        a.fade && (c.from.opacity = 1, c.to.opacity = 0);
        d.effects.effect.size.call(this, c, b)
    });
    d.effects.define("puff", "hide", function(a, b) {
        var c = d.extend(!0, {}, a, {
            fade: !0,
            percent: parseInt(a.percent, 10) || 150
        });
        d.effects.effect.scale.call(this,
            c, b)
    });
    d.effects.define("pulsate", "show", function(a, b) {
        var c = d(this),
            e = a.mode,
            f = "show" === e,
            e = 2 * (a.times || 5) + (f || "hide" === e ? 1 : 0),
            g = a.duration / e,
            k = 0,
            n = 1,
            r = c.queue().length;
        if (f || !c.is(":visible")) c.css("opacity", 0).show(), k = 1;
        for (; n < e; n++) c.animate({
            opacity: k
        }, g, a.easing), k = 1 - k;
        c.animate({
            opacity: k
        }, g, a.easing);
        c.queue(b);
        d.effects.unshift(c, r, e + 1)
    });
    d.effects.define("shake", function(a, b) {
        var c = 1,
            e = d(this),
            f = a.direction || "left",
            g = a.distance || 20,
            k = a.times || 3,
            n = 2 * k + 1,
            r = Math.round(a.duration / n),
            l = "up" ===
            f || "down" === f ? "top" : "left",
            f = "up" === f || "left" === f,
            m = {},
            q = {},
            t = {},
            u = e.queue().length;
        d.effects.createPlaceholder(e);
        m[l] = (f ? "-=" : "+=") + g;
        q[l] = (f ? "+=" : "-=") + 2 * g;
        t[l] = (f ? "-=" : "+=") + 2 * g;
        for (e.animate(m, r, a.easing); c < k; c++) e.animate(q, r, a.easing).animate(t, r, a.easing);
        e.animate(q, r, a.easing).animate(m, r / 2, a.easing).queue(b);
        d.effects.unshift(e, u, n + 1)
    });
    d.effects.define("slide", "show", function(a, b) {
        var c, e, f = d(this),
            g = {
                up: ["bottom", "top"],
                down: ["top", "bottom"],
                left: ["right", "left"],
                right: ["left", "right"]
            },
            k = a.mode,
            n = a.direction || "left",
            r = "up" === n || "down" === n ? "top" : "left",
            l = "up" === n || "left" === n,
            m = a.distance || f["top" === r ? "outerHeight" : "outerWidth"](!0),
            q = {};
        d.effects.createPlaceholder(f);
        c = f.cssClip();
        e = f.position()[r];
        q[r] = (l ? -1 : 1) * m + e;
        q.clip = f.cssClip();
        q.clip[g[n][1]] = q.clip[g[n][0]];
        "show" === k && (f.cssClip(q.clip), f.css(r, q[r]), q.clip = c, q[r] = e);
        f.animate(q, {
            queue: !1,
            duration: a.duration,
            easing: a.easing,
            complete: b
        })
    });
    !1 !== d.uiBackCompat && d.effects.define("transfer", function(a, b) {
        d(this).transfer(a,
            b)
    });
    d.ui.focusable = function(a, b) {
        var c, e;
        c = a.nodeName.toLowerCase();
        if ("area" === c) {
            c = a.parentNode;
            e = c.name;
            if (!a.href || !e || "map" !== c.nodeName.toLowerCase()) return !1;
            c = d("img[usemap='#" + e + "']");
            return 0 < c.length && c.is(":visible")
        }
        /^(input|select|textarea|button|object)$/.test(c) ? (c = !a.disabled) && (e = d(a).closest("fieldset")[0]) && (c = !e.disabled) : c = "a" === c ? a.href || b : b;
        if (c = c && d(a).is(":visible")) {
            c = d(a);
            for (e = c.css("visibility");
                "inherit" === e;) c = c.parent(), e = c.css("visibility");
            c = "hidden" !== e
        }
        return c
    };
    d.extend(d.expr[":"], {
        focusable: function(a) {
            return d.ui.focusable(a, null != d.attr(a, "tabindex"))
        }
    });
    d.fn.form = function() {
        return "string" === typeof this[0].form ? this.closest("form") : d(this[0].form)
    };
    d.ui.formResetMixin = {
        _formResetHandler: function() {
            var a = d(this);
            setTimeout(function() {
                var b = a.data("ui-form-reset-instances");
                d.each(b, function() {
                    this.refresh()
                })
            })
        },
        _bindFormResetHandler: function() {
            this.form = this.element.form();
            if (this.form.length) {
                var a = this.form.data("ui-form-reset-instances") || [];
                if (!a.length) this.form.on("reset.ui-form-reset",
                    this._formResetHandler);
                a.push(this);
                this.form.data("ui-form-reset-instances", a)
            }
        },
        _unbindFormResetHandler: function() {
            if (this.form.length) {
                var a = this.form.data("ui-form-reset-instances");
                a.splice(d.inArray(this, a), 1);
                a.length ? this.form.data("ui-form-reset-instances", a) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
            }
        }
    };
    "1.7" === d.fn.jquery.substring(0, 3) && (d.each(["Width", "Height"], function(a, b) {
        function c(a, b, c, f) {
            d.each(e, function() {
                b -= parseFloat(d.css(a, "padding" + this)) ||
                    0;
                c && (b -= parseFloat(d.css(a, "border" + this + "Width")) || 0);
                f && (b -= parseFloat(d.css(a, "margin" + this)) || 0)
            });
            return b
        }
        var e = "Width" === b ? ["Left", "Right"] : ["Top", "Bottom"],
            f = b.toLowerCase(),
            g = {
                innerWidth: d.fn.innerWidth,
                innerHeight: d.fn.innerHeight,
                outerWidth: d.fn.outerWidth,
                outerHeight: d.fn.outerHeight
            };
        d.fn["inner" + b] = function(a) {
            return void 0 === a ? g["inner" + b].call(this) : this.each(function() {
                d(this).css(f, c(this, a) + "px")
            })
        };
        d.fn["outer" + b] = function(a, e) {
            return "number" !== typeof a ? g["outer" + b].call(this,
                a) : this.each(function() {
                d(this).css(f, c(this, a, !0, e) + "px")
            })
        }
    }), d.fn.addBack = function(a) {
        return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    });
    d.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    };
    d.ui.escapeSelector = function() {
        var a = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;
        return function(b) {
            return b.replace(a, "\\$1")
        }
    }();
    d.fn.labels = function() {
        var a, b, c;
        if (this[0].labels && this[0].labels.length) return this.pushStack(this[0].labels);
        c = this.eq(0).parents("label");
        if (b = this.attr("id")) a = this.eq(0).parents().last(), a = a.add(a.length ? a.siblings() : this.siblings()), b = "label[for='" + d.ui.escapeSelector(b) + "']", c = c.add(a.find(b).addBack(b));
        return this.pushStack(c)
    };
    d.fn.scrollParent = function(a) {
        var b = this.css("position"),
            c = "absolute" === b,
            e = a ? /(auto|scroll|hidden)/ : /(auto|scroll)/;
        a = this.parents().filter(function() {
            var a = d(this);
            return c && "static" === a.css("position") ? !1 : e.test(a.css("overflow") + a.css("overflow-y") + a.css("overflow-x"))
        }).eq(0);
        return "fixed" !== b && a.length ? a : d(this[0].ownerDocument || document)
    };
    d.extend(d.expr[":"], {
        tabbable: function(a) {
            var b = d.attr(a, "tabindex"),
                c = null != b;
            return (!c || 0 <= b) && d.ui.focusable(a, c)
        }
    });
    d.fn.extend({
        uniqueId: function() {
            var a = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++a)
                })
            }
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && d(this).removeAttr("id")
            })
        }
    });
    d.widget("ui.accordion", {
        version: "1.12.1",
        options: {
            active: 0,
            animate: {},
            classes: {
                "ui-accordion-header": "ui-corner-top",
                "ui-accordion-header-collapsed": "ui-corner-all",
                "ui-accordion-content": "ui-corner-bottom"
            },
            collapsible: !1,
            event: "click",
            header: "> li > :first-child, > :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },
            activate: null,
            beforeActivate: null
        },
        hideProps: {
            borderTopWidth: "hide",
            borderBottomWidth: "hide",
            paddingTop: "hide",
            paddingBottom: "hide",
            height: "hide"
        },
        showProps: {
            borderTopWidth: "show",
            borderBottomWidth: "show",
            paddingTop: "show",
            paddingBottom: "show",
            height: "show"
        },
        _create: function() {
            var a = this.options;
            this.prevShow = this.prevHide = d();
            this._addClass("ui-accordion", "ui-widget ui-helper-reset");
            this.element.attr("role", "tablist");
            a.collapsible || !1 !== a.active && null != a.active || (a.active = 0);
            this._processPanels();
            0 > a.active && (a.active += this.headers.length);
            this._refresh()
        },
        _getCreateEventData: function() {
            return {
                header: this.active,
                panel: this.active.length ? this.active.next() : d()
            }
        },
        _createIcons: function() {
            var a, b = this.options.icons;
            b && (a = d("<span>"), this._addClass(a,
                "ui-accordion-header-icon", "ui-icon " + b.header), a.prependTo(this.headers), a = this.active.children(".ui-accordion-header-icon"), this._removeClass(a, b.header)._addClass(a, null, b.activeHeader)._addClass(this.headers, "ui-accordion-icons"))
        },
        _destroyIcons: function() {
            this._removeClass(this.headers, "ui-accordion-icons");
            this.headers.children(".ui-accordion-header-icon").remove()
        },
        _destroy: function() {
            var a;
            this.element.removeAttr("role");
            this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId();
            this._destroyIcons();
            a = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId();
            "content" !== this.options.heightStyle && a.css("height", "")
        },
        _setOption: function(a, b) {
            "active" === a ? this._activate(b) : ("event" === a && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(b)), this._super(a, b), "collapsible" !== a || b || !1 !== this.options.active || this._activate(0), "icons" === a && (this._destroyIcons(), b && this._createIcons()))
        },
        _setOptionDisabled: function(a) {
            this._super(a);
            this.element.attr("aria-disabled", a);
            this._toggleClass(null, "ui-state-disabled", !!a);
            this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!a)
        },
        _keydown: function(a) {
            if (!a.altKey && !a.ctrlKey) {
                var b = d.ui.keyCode,
                    c = this.headers.length,
                    e = this.headers.index(a.target),
                    f = !1;
                switch (a.keyCode) {
                    case b.RIGHT:
                    case b.DOWN:
                        f = this.headers[(e + 1) % c];
                        break;
                    case b.LEFT:
                    case b.UP:
                        f = this.headers[(e - 1 + c) % c];
                        break;
                    case b.SPACE:
                    case b.ENTER:
                        this._eventHandler(a);
                        break;
                    case b.HOME:
                        f = this.headers[0];
                        break;
                    case b.END:
                        f = this.headers[c - 1]
                }
                f && (d(a.target).attr("tabIndex", -1), d(f).attr("tabIndex", 0), d(f).trigger("focus"), a.preventDefault())
            }
        },
        _panelKeyDown: function(a) {
            a.keyCode === d.ui.keyCode.UP && a.ctrlKey && d(a.currentTarget).prev().trigger("focus")
        },
        refresh: function() {
            var a = this.options;
            this._processPanels();
            !1 === a.active && !0 === a.collapsible || !this.headers.length ? (a.active = !1, this.active = d()) : !1 === a.active ? this._activate(0) : this.active.length && !d.contains(this.element[0], this.active[0]) ? this.headers.length ===
                this.headers.find(".ui-state-disabled").length ? (a.active = !1, this.active = d()) : this._activate(Math.max(0, a.active - 1)) : a.active = this.headers.index(this.active);
            this._destroyIcons();
            this._refresh()
        },
        _processPanels: function() {
            var a = this.headers,
                b = this.panels;
            this.headers = this.element.find(this.options.header);
            this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default");
            this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide();
            this._addClass(this.panels,
                "ui-accordion-content", "ui-helper-reset ui-widget-content");
            b && (this._off(a.not(this.headers)), this._off(b.not(this.panels)))
        },
        _refresh: function() {
            var a, b = this.options,
                c = b.heightStyle,
                e = this.element.parent();
            this.active = this._findActive(b.active);
            this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed");
            this._addClass(this.active.next(), "ui-accordion-content-active");
            this.active.next().show();
            this.headers.attr("role", "tab").each(function() {
                var a =
                    d(this),
                    b = a.uniqueId().attr("id"),
                    c = a.next(),
                    e = c.uniqueId().attr("id");
                a.attr("aria-controls", e);
                c.attr("aria-labelledby", b)
            }).next().attr("role", "tabpanel");
            this.headers.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }).next().attr({
                "aria-hidden": "true"
            }).hide();
            this.active.length ? this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }).next().attr({
                "aria-hidden": "false"
            }) : this.headers.eq(0).attr("tabIndex", 0);
            this._createIcons();
            this._setupEvents(b.event);
            "fill" === c ? (a = e.height(), this.element.siblings(":visible").each(function() {
                var b = d(this),
                    c = b.css("position");
                "absolute" !== c && "fixed" !== c && (a -= b.outerHeight(!0))
            }), this.headers.each(function() {
                a -= d(this).outerHeight(!0)
            }), this.headers.next().each(function() {
                d(this).height(Math.max(0, a - d(this).innerHeight() + d(this).height()))
            }).css("overflow", "auto")) : "auto" === c && (a = 0, this.headers.next().each(function() {
                var b = d(this).is(":visible");
                b || d(this).show();
                a = Math.max(a, d(this).css("height", "").height());
                b ||
                    d(this).hide()
            }).height(a))
        },
        _activate: function(a) {
            a = this._findActive(a)[0];
            a !== this.active[0] && (a = a || this.active[0], this._eventHandler({
                target: a,
                currentTarget: a,
                preventDefault: d.noop
            }))
        },
        _findActive: function(a) {
            return "number" === typeof a ? this.headers.eq(a) : d()
        },
        _setupEvents: function(a) {
            var b = {
                keydown: "_keydown"
            };
            a && d.each(a.split(" "), function(a, d) {
                b[d] = "_eventHandler"
            });
            this._off(this.headers.add(this.headers.next()));
            this._on(this.headers, b);
            this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            });
            this._hoverable(this.headers);
            this._focusable(this.headers)
        },
        _eventHandler: function(a) {
            var b, c = this.options,
                e = this.active,
                f = d(a.currentTarget),
                g = (b = f[0] === e[0]) && c.collapsible,
                k = g ? d() : f.next(),
                n = e.next(),
                k = {
                    oldHeader: e,
                    oldPanel: n,
                    newHeader: g ? d() : f,
                    newPanel: k
                };
            a.preventDefault();
            b && !c.collapsible || !1 === this._trigger("beforeActivate", a, k) || (c.active = g ? !1 : this.headers.index(f), this.active = b ? d() : f, this._toggle(k), this._removeClass(e, "ui-accordion-header-active", "ui-state-active"), c.icons && (a = e.children(".ui-accordion-header-icon"),
                this._removeClass(a, null, c.icons.activeHeader)._addClass(a, null, c.icons.header)), b || (this._removeClass(f, "ui-accordion-header-collapsed")._addClass(f, "ui-accordion-header-active", "ui-state-active"), c.icons && (b = f.children(".ui-accordion-header-icon"), this._removeClass(b, null, c.icons.header)._addClass(b, null, c.icons.activeHeader)), this._addClass(f.next(), "ui-accordion-content-active")))
        },
        _toggle: function(a) {
            var b = a.newPanel,
                c = this.prevShow.length ? this.prevShow : a.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0);
            this.prevShow = b;
            this.prevHide = c;
            this.options.animate ? this._animate(b, c, a) : (c.hide(), b.show(), this._toggleComplete(a));
            c.attr({
                "aria-hidden": "true"
            });
            c.prev().attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            });
            b.length && c.length ? c.prev().attr({
                tabIndex: -1,
                "aria-expanded": "false"
            }) : b.length && this.headers.filter(function() {
                return 0 === parseInt(d(this).attr("tabIndex"), 10)
            }).attr("tabIndex", -1);
            b.attr("aria-hidden", "false").prev().attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _animate: function(a, b, c) {
            var d, f, g, k = this,
                n = 0,
                r = a.css("box-sizing"),
                l = a.length && (!b.length || a.index() < b.index()),
                m = this.options.animate || {},
                l = l && m.down || m,
                q = function() {
                    k._toggleComplete(c)
                };
            "number" === typeof l && (g = l);
            "string" === typeof l && (f = l);
            f = f || l.easing || m.easing;
            g = g || l.duration || m.duration;
            if (!b.length) return a.animate(this.showProps, g, f, q);
            if (!a.length) return b.animate(this.hideProps, g, f, q);
            d = a.show().outerHeight();
            b.animate(this.hideProps, {
                duration: g,
                easing: f,
                step: function(a, b) {
                    b.now = Math.round(a)
                }
            });
            a.hide().animate(this.showProps, {
                duration: g,
                easing: f,
                complete: q,
                step: function(a, c) {
                    c.now = Math.round(a);
                    "height" !== c.prop ? "content-box" === r && (n += c.now) : "content" !== k.options.heightStyle && (c.now = Math.round(d - b.outerHeight() - n), n = 0)
                }
            })
        },
        _toggleComplete: function(a) {
            var b = a.oldPanel,
                c = b.prev();
            this._removeClass(b, "ui-accordion-content-active");
            this._removeClass(c, "ui-accordion-header-active")._addClass(c, "ui-accordion-header-collapsed");
            b.length && (b.parent()[0].className = b.parent()[0].className);
            this._trigger("activate",
                null, a)
        }
    });
    d.ui.safeActiveElement = function(a) {
        var b;
        try {
            b = a.activeElement
        } catch (c) {
            b = a.body
        }
        b || (b = a.body);
        b.nodeName || (b = a.body);
        return b
    };
    d.widget("ui.menu", {
        version: "1.12.1",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-caret-1-e"
            },
            items: "> *",
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element;
            this.mouseHandled = !1;
            this.element.uniqueId().attr({
                role: this.options.role,
                tabIndex: 0
            });
            this._addClass("ui-menu",
                "ui-widget ui-widget-content");
            this._on({
                "mousedown .ui-menu-item": function(a) {
                    a.preventDefault()
                },
                "click .ui-menu-item": function(a) {
                    var b = d(a.target),
                        c = d(d.ui.safeActiveElement(this.document[0]));
                    !this.mouseHandled && b.not(".ui-state-disabled").length && (this.select(a), a.isPropagationStopped() || (this.mouseHandled = !0), b.has(".ui-menu").length ? this.expand(a) : !this.element.is(":focus") && c.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length &&
                        clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function(a) {
                    if (!this.previousFilter) {
                        var b = d(a.target).closest(".ui-menu-item"),
                            c = d(a.currentTarget);
                        b[0] === c[0] && (this._removeClass(c.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(a, c))
                    }
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(a, b) {
                    var c = this.active || this.element.find(this.options.items).eq(0);
                    b || this.focus(a, c)
                },
                blur: function(a) {
                    this._delay(function() {
                        d.contains(this.element[0],
                            d.ui.safeActiveElement(this.document[0])) || this.collapseAll(a)
                    })
                },
                keydown: "_keydown"
            });
            this.refresh();
            this._on(this.document, {
                click: function(a) {
                    this._closeOnDocumentClick(a) && this.collapseAll(a);
                    this.mouseHandled = !1
                }
            })
        },
        _destroy: function() {
            var a = this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show();
            a.children().each(function() {
                var a = d(this);
                a.data("ui-menu-submenu-caret") && a.remove()
            })
        },
        _keydown: function(a) {
            var b, c, e, f = !0;
            switch (a.keyCode) {
                case d.ui.keyCode.PAGE_UP:
                    this.previousPage(a);
                    break;
                case d.ui.keyCode.PAGE_DOWN:
                    this.nextPage(a);
                    break;
                case d.ui.keyCode.HOME:
                    this._move("first", "first", a);
                    break;
                case d.ui.keyCode.END:
                    this._move("last", "last", a);
                    break;
                case d.ui.keyCode.UP:
                    this.previous(a);
                    break;
                case d.ui.keyCode.DOWN:
                    this.next(a);
                    break;
                case d.ui.keyCode.LEFT:
                    this.collapse(a);
                    break;
                case d.ui.keyCode.RIGHT:
                    this.active &&
                        !this.active.is(".ui-state-disabled") && this.expand(a);
                    break;
                case d.ui.keyCode.ENTER:
                case d.ui.keyCode.SPACE:
                    this._activate(a);
                    break;
                case d.ui.keyCode.ESCAPE:
                    this.collapse(a);
                    break;
                default:
                    f = !1, b = this.previousFilter || "", e = !1, c = 96 <= a.keyCode && 105 >= a.keyCode ? (a.keyCode - 96).toString() : String.fromCharCode(a.keyCode), clearTimeout(this.filterTimer), c === b ? e = !0 : c = b + c, b = this._filterMenuItems(c), b = e && -1 !== b.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : b, b.length || (c = String.fromCharCode(a.keyCode),
                        b = this._filterMenuItems(c)), b.length ? (this.focus(a, b), this.previousFilter = c, this.filterTimer = this._delay(function() {
                        delete this.previousFilter
                    }, 1E3)) : delete this.previousFilter
            }
            f && a.preventDefault()
        },
        _activate: function(a) {
            this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(a) : this.select(a))
        },
        refresh: function() {
            var a, b, c, e = this,
                f = this.options.icons.submenu;
            b = this.element.find(this.options.menus);
            this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length);
            a = b.filter(":not(.ui-menu)").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var a = d(this),
                    b = a.prev(),
                    c = d("<span>").data("ui-menu-submenu-caret", !0);
                e._addClass(c, "ui-menu-icon", "ui-icon " + f);
                b.attr("aria-haspopup", "true").prepend(c);
                a.attr("aria-labelledby", b.attr("id"))
            });
            this._addClass(a, "ui-menu", "ui-widget ui-widget-content ui-front");
            a = b.add(this.element).find(this.options.items);
            a.not(".ui-menu-item").each(function() {
                var a =
                    d(this);
                e._isDivider(a) && e._addClass(a, "ui-menu-divider", "ui-widget-content")
            });
            b = a.not(".ui-menu-item, .ui-menu-divider");
            c = b.children().not(".ui-menu").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            });
            this._addClass(b, "ui-menu-item")._addClass(c, "ui-menu-item-wrapper");
            a.filter(".ui-state-disabled").attr("aria-disabled", "true");
            this.active && !d.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role]
        },
        _setOption: function(a,
            b) {
            if ("icons" === a) {
                var c = this.element.find(".ui-menu-icon");
                this._removeClass(c, null, this.options.icons.submenu)._addClass(c, null, b.submenu)
            }
            this._super(a, b)
        },
        _setOptionDisabled: function(a) {
            this._super(a);
            this.element.attr("aria-disabled", String(a));
            this._toggleClass(null, "ui-state-disabled", !!a)
        },
        focus: function(a, b) {
            var c;
            this.blur(a, a && "focus" === a.type);
            this._scrollIntoView(b);
            this.active = b.first();
            c = this.active.children(".ui-menu-item-wrapper");
            this._addClass(c, null, "ui-state-active");
            this.options.role &&
                this.element.attr("aria-activedescendant", c.attr("id"));
            c = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper");
            this._addClass(c, null, "ui-state-active");
            a && "keydown" === a.type ? this._close() : this.timer = this._delay(function() {
                this._close()
            }, this.delay);
            c = b.children(".ui-menu");
            c.length && a && /^mouse/.test(a.type) && this._startOpening(c);
            this.activeMenu = b.parent();
            this._trigger("focus", a, {
                item: b
            })
        },
        _scrollIntoView: function(a) {
            var b, c, e;
            this._hasScroll() && (b = parseFloat(d.css(this.activeMenu[0],
                "borderTopWidth")) || 0, c = parseFloat(d.css(this.activeMenu[0], "paddingTop")) || 0, b = a.offset().top - this.activeMenu.offset().top - b - c, c = this.activeMenu.scrollTop(), e = this.activeMenu.height(), a = a.outerHeight(), 0 > b ? this.activeMenu.scrollTop(c + b) : b + a > e && this.activeMenu.scrollTop(c + b - e + a))
        },
        blur: function(a, b) {
            b || clearTimeout(this.timer);
            this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", a, {
                item: this.active
            }), this.active = null)
        },
        _startOpening: function(a) {
            clearTimeout(this.timer);
            "true" === a.attr("aria-hidden") && (this.timer = this._delay(function() {
                this._close();
                this._open(a)
            }, this.delay))
        },
        _open: function(a) {
            var b = d.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer);
            this.element.find(".ui-menu").not(a.parents(".ui-menu")).hide().attr("aria-hidden", "true");
            a.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(b)
        },
        collapseAll: function(a, b) {
            clearTimeout(this.timer);
            this.timer = this._delay(function() {
                var c = b ? this.element : d(a && a.target).closest(this.element.find(".ui-menu"));
                c.length || (c = this.element);
                this._close(c);
                this.blur(a);
                this._removeClass(c.find(".ui-state-active"), null, "ui-state-active");
                this.activeMenu = c
            }, this.delay)
        },
        _close: function(a) {
            a || (a = this.active ? this.active.parent() : this.element);
            a.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
        },
        _closeOnDocumentClick: function(a) {
            return !d(a.target).closest(".ui-menu").length
        },
        _isDivider: function(a) {
            return !/[^\-\u2014\u2013\s]/.test(a.text())
        },
        collapse: function(a) {
            var b = this.active &&
                this.active.parent().closest(".ui-menu-item", this.element);
            b && b.length && (this._close(), this.focus(a, b))
        },
        expand: function(a) {
            var b = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            b && b.length && (this._open(b.parent()), this._delay(function() {
                this.focus(a, b)
            }))
        },
        next: function(a) {
            this._move("next", "first", a)
        },
        previous: function(a) {
            this._move("prev", "last", a)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active &&
                !this.active.nextAll(".ui-menu-item").length
        },
        _move: function(a, b, c) {
            var d;
            this.active && (d = "first" === a || "last" === a ? this.active["first" === a ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[a + "All"](".ui-menu-item").eq(0));
            d && d.length && this.active || (d = this.activeMenu.find(this.options.items)[b]());
            this.focus(c, d)
        },
        nextPage: function(a) {
            var b, c, e;
            this.active ? this.isLastItem() || (this._hasScroll() ? (c = this.active.offset().top, e = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                b =
                    d(this);
                return 0 > b.offset().top - c - e
            }), this.focus(a, b)) : this.focus(a, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())) : this.next(a)
        },
        previousPage: function(a) {
            var b, c, e;
            this.active ? this.isFirstItem() || (this._hasScroll() ? (c = this.active.offset().top, e = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                b = d(this);
                return 0 < b.offset().top - c + e
            }), this.focus(a, b)) : this.focus(a, this.activeMenu.find(this.options.items).first())) : this.next(a)
        },
        _hasScroll: function() {
            return this.element.outerHeight() <
                this.element.prop("scrollHeight")
        },
        select: function(a) {
            this.active = this.active || d(a.target).closest(".ui-menu-item");
            var b = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(a, !0);
            this._trigger("select", a, b)
        },
        _filterMenuItems: function(a) {
            a = a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
            var b = new RegExp("^" + a, "i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                return b.test(d.trim(d(this).children(".ui-menu-item-wrapper").text()))
            })
        }
    });
    d.widget("ui.autocomplete", {
        version: "1.12.1",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function() {
            var a, b, c, e = this.element[0].nodeName.toLowerCase(),
                f = "textarea" === e,
                e = "input" === e;
            this.isMultiLine = f || !e && this._isContentEditable(this.element);
            this.valueMethod = this.element[f ||
                e ? "val" : "text"];
            this.isNewMenu = !0;
            this._addClass("ui-autocomplete-input");
            this.element.attr("autocomplete", "off");
            this._on(this.element, {
                keydown: function(e) {
                    if (this.element.prop("readOnly")) b = c = a = !0;
                    else {
                        b = c = a = !1;
                        var f = d.ui.keyCode;
                        switch (e.keyCode) {
                            case f.PAGE_UP:
                                a = !0;
                                this._move("previousPage", e);
                                break;
                            case f.PAGE_DOWN:
                                a = !0;
                                this._move("nextPage", e);
                                break;
                            case f.UP:
                                a = !0;
                                this._keyEvent("previous", e);
                                break;
                            case f.DOWN:
                                a = !0;
                                this._keyEvent("next", e);
                                break;
                            case f.ENTER:
                                this.menu.active && (a = !0, e.preventDefault(),
                                    this.menu.select(e));
                                break;
                            case f.TAB:
                                this.menu.active && this.menu.select(e);
                                break;
                            case f.ESCAPE:
                                this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(e), e.preventDefault());
                                break;
                            default:
                                b = !0, this._searchTimeout(e)
                        }
                    }
                },
                keypress: function(c) {
                    if (a) a = !1, this.isMultiLine && !this.menu.element.is(":visible") || c.preventDefault();
                    else if (!b) {
                        var e = d.ui.keyCode;
                        switch (c.keyCode) {
                            case e.PAGE_UP:
                                this._move("previousPage", c);
                                break;
                            case e.PAGE_DOWN:
                                this._move("nextPage", c);
                                break;
                            case e.UP:
                                this._keyEvent("previous", c);
                                break;
                            case e.DOWN:
                                this._keyEvent("next", c)
                        }
                    }
                },
                input: function(a) {
                    c ? (c = !1, a.preventDefault()) : this._searchTimeout(a)
                },
                focus: function() {
                    this.selectedItem = null;
                    this.previous = this._value()
                },
                blur: function(a) {
                    this.cancelBlur ? delete this.cancelBlur : (clearTimeout(this.searching), this.close(a), this._change(a))
                }
            });
            this._initSource();
            this.menu = d("<ul>").appendTo(this._appendTo()).menu({
                role: null
            }).hide().menu("instance");
            this._addClass(this.menu.element, "ui-autocomplete",
                "ui-front");
            this._on(this.menu.element, {
                mousedown: function(a) {
                    a.preventDefault();
                    this.cancelBlur = !0;
                    this._delay(function() {
                        delete this.cancelBlur;
                        this.element[0] !== d.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus")
                    })
                },
                menufocus: function(a, b) {
                    var c;
                    if (this.isNewMenu && (this.isNewMenu = !1, a.originalEvent && /^mouse/.test(a.originalEvent.type))) {
                        this.menu.blur();
                        this.document.one("mousemove", function() {
                            d(a.target).trigger(a.originalEvent)
                        });
                        return
                    }
                    c = b.item.data("ui-autocomplete-item");
                    !1 !== this._trigger("focus", a, {
                        item: c
                    }) && a.originalEvent && /^key/.test(a.originalEvent.type) && this._value(c.value);
                    (c = b.item.attr("aria-label") || c.value) && d.trim(c).length && (this.liveRegion.children().hide(), d("<div>").text(c).appendTo(this.liveRegion))
                },
                menuselect: function(a, b) {
                    var c = b.item.data("ui-autocomplete-item"),
                        e = this.previous;
                    this.element[0] !== d.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = e, this._delay(function() {
                        this.previous = e;
                        this.selectedItem = c
                    }));
                    !1 !== this._trigger("select", a, {
                        item: c
                    }) && this._value(c.value);
                    this.term = this._value();
                    this.close(a);
                    this.selectedItem = c
                }
            });
            this.liveRegion = d("<div>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body);
            this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible");
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching);
            this.element.removeAttr("autocomplete");
            this.menu.element.remove();
            this.liveRegion.remove()
        },
        _setOption: function(a, b) {
            this._super(a, b);
            "source" === a && this._initSource();
            "appendTo" === a && this.menu.element.appendTo(this._appendTo());
            "disabled" === a && b && this.xhr && this.xhr.abort()
        },
        _isEventTargetInWidget: function(a) {
            var b = this.menu.element[0];
            return a.target === this.element[0] || a.target === b || d.contains(b, a.target)
        },
        _closeOnClickOutside: function(a) {
            this._isEventTargetInWidget(a) || this.close()
        },
        _appendTo: function() {
            var a = this.options.appendTo;
            a && (a = a.jquery || a.nodeType ? d(a) :
                this.document.find(a).eq(0));
            a && a[0] || (a = this.element.closest(".ui-front, dialog"));
            a.length || (a = this.document[0].body);
            return a
        },
        _initSource: function() {
            var a, b, c = this;
            d.isArray(this.options.source) ? (a = this.options.source, this.source = function(b, c) {
                    c(d.ui.autocomplete.filter(a, b.term))
                }) : "string" === typeof this.options.source ? (b = this.options.source, this.source = function(a, f) {
                    c.xhr && c.xhr.abort();
                    c.xhr = d.ajax({
                        url: b,
                        data: a,
                        dataType: "json",
                        success: function(a) {
                            f(a)
                        },
                        error: function() {
                            f([])
                        }
                    })
                }) : this.source =
                this.options.source
        },
        _searchTimeout: function(a) {
            clearTimeout(this.searching);
            this.searching = this._delay(function() {
                var b = this.term === this._value(),
                    c = this.menu.element.is(":visible"),
                    d = a.altKey || a.ctrlKey || a.metaKey || a.shiftKey;
                if (!b || b && !c && !d) this.selectedItem = null, this.search(null, a)
            }, this.options.delay)
        },
        search: function(a, b) {
            a = null != a ? a : this._value();
            this.term = this._value();
            if (a.length < this.options.minLength) return this.close(b);
            if (!1 !== this._trigger("search", b)) return this._search(a)
        },
        _search: function(a) {
            this.pending++;
            this._addClass("ui-autocomplete-loading");
            this.cancelSearch = !1;
            this.source({
                term: a
            }, this._response())
        },
        _response: function() {
            var a = ++this.requestIndex;
            return d.proxy(function(b) {
                a === this.requestIndex && this.__response(b);
                this.pending--;
                this.pending || this._removeClass("ui-autocomplete-loading")
            }, this)
        },
        __response: function(a) {
            a && (a = this._normalize(a));
            this._trigger("response", null, {
                content: a
            });
            !this.options.disabled && a && a.length && !this.cancelSearch ? (this._suggest(a), this._trigger("open")) : this._close()
        },
        close: function(a) {
            this.cancelSearch = !0;
            this._close(a)
        },
        _close: function(a) {
            this._off(this.document, "mousedown");
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", a))
        },
        _change: function(a) {
            this.previous !== this._value() && this._trigger("change", a, {
                item: this.selectedItem
            })
        },
        _normalize: function(a) {
            return a.length && a[0].label && a[0].value ? a : d.map(a, function(a) {
                return "string" === typeof a ? {
                    label: a,
                    value: a
                } : d.extend({}, a, {
                    label: a.label || a.value,
                    value: a.value || a.label
                })
            })
        },
        _suggest: function(a) {
            var b = this.menu.element.empty();
            this._renderMenu(b, a);
            this.isNewMenu = !0;
            this.menu.refresh();
            b.show();
            this._resizeMenu();
            b.position(d.extend({
                of: this.element
            }, this.options.position));
            this.options.autoFocus && this.menu.next();
            this._on(this.document, {
                mousedown: "_closeOnClickOutside"
            })
        },
        _resizeMenu: function() {
            var a = this.menu.element;
            a.outerWidth(Math.max(a.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(a, b) {
            var c = this;
            d.each(b,
                function(b, d) {
                    c._renderItemData(a, d)
                })
        },
        _renderItemData: function(a, b) {
            return this._renderItem(a, b).data("ui-autocomplete-item", b)
        },
        _renderItem: function(a, b) {
            return d("<li>").append(d("<div>").text(b.label)).appendTo(a)
        },
        _move: function(a, b) {
            if (this.menu.element.is(":visible"))
                if (this.menu.isFirstItem() && /^previous/.test(a) || this.menu.isLastItem() && /^next/.test(a)) this.isMultiLine || this._value(this.term), this.menu.blur();
                else this.menu[a](b);
            else this.search(null, b)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(a, b) {
            if (!this.isMultiLine || this.menu.element.is(":visible")) this._move(a, b), b.preventDefault()
        },
        _isContentEditable: function(a) {
            if (!a.length) return !1;
            var b = a.prop("contentEditable");
            return "inherit" === b ? this._isContentEditable(a.parent()) : "true" === b
        }
    });
    d.extend(d.ui.autocomplete, {
        escapeRegex: function(a) {
            return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(a, b) {
            var c = new RegExp(d.ui.autocomplete.escapeRegex(b),
                "i");
            return d.grep(a, function(a) {
                return c.test(a.label || a.value || a)
            })
        }
    });
    d.widget("ui.autocomplete", d.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(a) {
                    return a + (1 < a ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(a) {
            var b;
            this._superApply(arguments);
            this.options.disabled || this.cancelSearch || (b = a && a.length ? this.options.messages.results(a.length) : this.options.messages.noResults, this.liveRegion.children().hide(),
                d("<div>").text(b).appendTo(this.liveRegion))
        }
    });
    var F = /ui-corner-([a-z]){2,6}/g;
    d.widget("ui.controlgroup", {
        version: "1.12.1",
        defaultElement: "<div>",
        options: {
            direction: "horizontal",
            disabled: null,
            onlyVisible: !0,
            items: {
                button: "input[type=button], input[type=submit], input[type=reset], button, a",
                controlgroupLabel: ".ui-controlgroup-label",
                checkboxradio: "input[type='checkbox'], input[type='radio']",
                selectmenu: "select",
                spinner: ".ui-spinner-input"
            }
        },
        _create: function() {
            this._enhance()
        },
        _enhance: function() {
            this.element.attr("role",
                "toolbar");
            this.refresh()
        },
        _destroy: function() {
            this._callChildMethod("destroy");
            this.childWidgets.removeData("ui-controlgroup-data");
            this.element.removeAttr("role");
            this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()
        },
        _initWidgets: function() {
            var a = this,
                b = [];
            d.each(this.options.items, function(c, e) {
                var f, g = {};
                e && ("controlgroupLabel" === c ? (f = a.element.find(e), f.each(function() {
                    var a = d(this);
                    a.children(".ui-controlgroup-label-contents").length ||
                        a.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
                }), a._addClass(f, null, "ui-widget ui-widget-content ui-state-default"), b = b.concat(f.get())) : d.fn[c] && (g = a["_" + c + "Options"] ? a["_" + c + "Options"]("middle") : {
                    classes: {}
                }, a.element.find(e).each(function() {
                    var e = d(this),
                        f = e[c]("instance"),
                        r = d.widget.extend({}, g);
                    "button" === c && e.parent(".ui-spinner").length || (f || (f = e[c]()[c]("instance")), f && (r.classes = a._resolveClassesValues(r.classes, f)), e[c](r), r = e[c]("widget"), d.data(r[0], "ui-controlgroup-data",
                        f ? f : e[c]("instance")), b.push(r[0]))
                })))
            });
            this.childWidgets = d(d.unique(b));
            this._addClass(this.childWidgets, "ui-controlgroup-item")
        },
        _callChildMethod: function(a) {
            this.childWidgets.each(function() {
                var b = d(this).data("ui-controlgroup-data");
                if (b && b[a]) b[a]()
            })
        },
        _updateCornerClass: function(a, b) {
            var c = this._buildSimpleOptions(b, "label").classes.label;
            this._removeClass(a, null, "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all");
            this._addClass(a, null, c)
        },
        _buildSimpleOptions: function(a,
            b) {
            var c = "vertical" === this.options.direction,
                d = {
                    classes: {}
                };
            d.classes[b] = {
                middle: "",
                first: "ui-corner-" + (c ? "top" : "left"),
                last: "ui-corner-" + (c ? "bottom" : "right"),
                only: "ui-corner-all"
            }[a];
            return d
        },
        _spinnerOptions: function(a) {
            a = this._buildSimpleOptions(a, "ui-spinner");
            a.classes["ui-spinner-up"] = "";
            a.classes["ui-spinner-down"] = "";
            return a
        },
        _buttonOptions: function(a) {
            return this._buildSimpleOptions(a, "ui-button")
        },
        _checkboxradioOptions: function(a) {
            return this._buildSimpleOptions(a, "ui-checkboxradio-label")
        },
        _selectmenuOptions: function(a) {
            var b = "vertical" === this.options.direction;
            return {
                width: b ? "auto" : !1,
                classes: {
                    middle: {
                        "ui-selectmenu-button-open": "",
                        "ui-selectmenu-button-closed": ""
                    },
                    first: {
                        "ui-selectmenu-button-open": "ui-corner-" + (b ? "top" : "tl"),
                        "ui-selectmenu-button-closed": "ui-corner-" + (b ? "top" : "left")
                    },
                    last: {
                        "ui-selectmenu-button-open": b ? "" : "ui-corner-tr",
                        "ui-selectmenu-button-closed": "ui-corner-" + (b ? "bottom" : "right")
                    },
                    only: {
                        "ui-selectmenu-button-open": "ui-corner-top",
                        "ui-selectmenu-button-closed": "ui-corner-all"
                    }
                }[a]
            }
        },
        _resolveClassesValues: function(a, b) {
            var c = {};
            d.each(a, function(e) {
                var f = b.options.classes[e] || "",
                    f = d.trim(f.replace(F, ""));
                c[e] = (f + " " + a[e]).replace(/\s+/g, " ")
            });
            return c
        },
        _setOption: function(a, b) {
            "direction" === a && this._removeClass("ui-controlgroup-" + this.options.direction);
            this._super(a, b);
            "disabled" === a ? this._callChildMethod(b ? "disable" : "enable") : this.refresh()
        },
        refresh: function() {
            var a, b = this;
            this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction);
            "horizontal" === this.options.direction &&
                this._addClass(null, "ui-helper-clearfix");
            this._initWidgets();
            a = this.childWidgets;
            this.options.onlyVisible && (a = a.filter(":visible"));
            a.length && (d.each(["first", "last"], function(c, d) {
                var e = a[d]().data("ui-controlgroup-data");
                if (e && b["_" + e.widgetName + "Options"]) {
                    var g = b["_" + e.widgetName + "Options"](1 === a.length ? "only" : d);
                    g.classes = b._resolveClassesValues(g.classes, e);
                    e.element[e.widgetName](g)
                } else b._updateCornerClass(a[d](), d)
            }), this._callChildMethod("refresh"))
        }
    });
    d.widget("ui.checkboxradio", [d.ui.formResetMixin, {
        version: "1.12.1",
        options: {
            disabled: null,
            label: null,
            icon: !0,
            classes: {
                "ui-checkboxradio-label": "ui-corner-all",
                "ui-checkboxradio-icon": "ui-corner-all"
            }
        },
        _getCreateOptions: function() {
            var a, b = this,
                c = this._super() || {};
            this._readType();
            a = this.element.labels();
            this.label = d(a[a.length - 1]);
            this.label.length || d.error("No label found for checkboxradio widget");
            this.originalLabel = "";
            this.label.contents().not(this.element[0]).each(function() {
                b.originalLabel += 3 === this.nodeType ? d(this).text() : this.outerHTML
            });
            this.originalLabel && (c.label = this.originalLabel);
            a = this.element[0].disabled;
            null != a && (c.disabled = a);
            return c
        },
        _create: function() {
            var a = this.element[0].checked;
            this._bindFormResetHandler();
            null == this.options.disabled && (this.options.disabled = this.element[0].disabled);
            this._setOption("disabled", this.options.disabled);
            this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible");
            this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget");
            "radio" === this.type && this._addClass(this.label,
                "ui-checkboxradio-radio-label");
            this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel);
            this._enhance();
            a && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), this.icon && this._addClass(this.icon, null, "ui-state-hover"));
            this._on({
                change: "_toggleClasses",
                focus: function() {
                    this._addClass(this.label, null, "ui-state-focus ui-visual-focus")
                },
                blur: function() {
                    this._removeClass(this.label, null, "ui-state-focus ui-visual-focus")
                }
            })
        },
        _readType: function() {
            var a = this.element[0].nodeName.toLowerCase();
            this.type = this.element[0].type;
            "input" === a && /radio|checkbox/.test(this.type) || d.error("Can't create checkboxradio on element.nodeName=" + a + " and element.type=" + this.type)
        },
        _enhance: function() {
            this._updateIcon(this.element[0].checked)
        },
        widget: function() {
            return this.label
        },
        _getRadioGroup: function() {
            var a = this.element[0].name,
                b = "input[name='" + d.ui.escapeSelector(a) + "']";
            return a ? (this.form.length ? d(this.form[0].elements).filter(b) : d(b).filter(function() {
                return 0 ===
                    d(this).form().length
            })).not(this.element) : d([])
        },
        _toggleClasses: function() {
            var a = this.element[0].checked;
            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", a);
            this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", a)._toggleClass(this.icon, null, "ui-icon-blank", !a);
            "radio" === this.type && this._getRadioGroup().each(function() {
                var a = d(this).checkboxradio("instance");
                a && a._removeClass(a.label, "ui-checkboxradio-checked", "ui-state-active")
            })
        },
        _destroy: function() {
            this._unbindFormResetHandler();
            this.icon && (this.icon.remove(), this.iconSpace.remove())
        },
        _setOption: function(a, b) {
            if ("label" !== a || b) this._super(a, b), "disabled" === a ? (this._toggleClass(this.label, null, "ui-state-disabled", b), this.element[0].disabled = b) : this.refresh()
        },
        _updateIcon: function(a) {
            var b = "ui-icon ui-icon-background ";
            this.options.icon ? (this.icon || (this.icon = d("<span>"), this.iconSpace = d("<span> </span>"), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" ===
                this.type ? (b += a ? "ui-icon-check ui-state-checked" : "ui-icon-blank", this._removeClass(this.icon, null, a ? "ui-icon-blank" : "ui-icon-check")) : b += "ui-icon-blank", this._addClass(this.icon, "ui-checkboxradio-icon", b), a || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon)
        },
        _updateLabel: function() {
            var a = this.label.contents().not(this.element[0]);
            this.icon && (a = a.not(this.icon[0]));
            this.iconSpace && (a = a.not(this.iconSpace[0]));
            a.remove();
            this.label.append(this.options.label)
        },
        refresh: function() {
            var a = this.element[0].checked,
                b = this.element[0].disabled;
            this._updateIcon(a);
            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", a);
            null !== this.options.label && this._updateLabel();
            b !== this.options.disabled && this._setOptions({
                disabled: b
            })
        }
    }]);
    d.widget("ui.button", {
        version: "1.12.1",
        defaultElement: "<button>",
        options: {
            classes: {
                "ui-button": "ui-corner-all"
            },
            disabled: null,
            icon: null,
            iconPosition: "beginning",
            label: null,
            showLabel: !0
        },
        _getCreateOptions: function() {
            var a, b = this._super() || {};
            this.isInput = this.element.is("input");
            a = this.element[0].disabled;
            null != a && (b.disabled = a);
            if (this.originalLabel = this.isInput ? this.element.val() : this.element.html()) b.label = this.originalLabel;
            return b
        },
        _create: function() {
            !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0);
            null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1);
            this.hasTitle = !!this.element.attr("title");
            this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label));
            this._addClass("ui-button", "ui-widget");
            this._setOption("disabled", this.options.disabled);
            this._enhance();
            this.element.is("a") && this._on({
                keyup: function(a) {
                    a.keyCode === d.ui.keyCode.SPACE && (a.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click"))
                }
            })
        },
        _enhance: function() {
            this.element.is("button") ||
                this.element.attr("role", "button");
            this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip())
        },
        _updateTooltip: function() {
            this.title = this.element.attr("title");
            this.options.showLabel || this.title || this.element.attr("title", this.options.label)
        },
        _updateIcon: function(a, b) {
            var c = "iconPosition" !== a,
                e = c ? this.options.iconPosition : b,
                f = "top" === e || "bottom" === e;
            this.icon ? c && this._removeClass(this.icon, null, this.options.icon) : (this.icon = d("<span>"), this._addClass(this.icon, "ui-button-icon",
                "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only"));
            c && this._addClass(this.icon, null, b);
            this._attachIcon(e);
            f ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = d("<span> </span>"), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(e))
        },
        _destroy: function() {
            this.element.removeAttr("role");
            this.icon && this.icon.remove();
            this.iconSpace && this.iconSpace.remove();
            this.hasTitle || this.element.removeAttr("title")
        },
        _attachIconSpace: function(a) {
            this.icon[/^(?:end|bottom)/.test(a) ? "before" : "after"](this.iconSpace)
        },
        _attachIcon: function(a) {
            this.element[/^(?:end|bottom)/.test(a) ? "append" : "prepend"](this.icon)
        },
        _setOptions: function(a) {
            var b = void 0 === a.icon ? this.options.icon : a.icon;
            (void 0 === a.showLabel ? this.options.showLabel : a.showLabel) || b || (a.showLabel = !0);
            this._super(a)
        },
        _setOption: function(a, b) {
            "icon" === a && (b ? this._updateIcon(a,
                b) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove()));
            "iconPosition" === a && this._updateIcon(a, b);
            "showLabel" === a && (this._toggleClass("ui-button-icon-only", null, !b), this._updateTooltip());
            "label" === a && (this.isInput ? this.element.val(b) : (this.element.html(b), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition))));
            this._super(a, b);
            "disabled" === a && (this._toggleClass(null, "ui-state-disabled", b), (this.element[0].disabled = b) && this.element.blur())
        },
        refresh: function() {
            var a = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
            a !== this.options.disabled && this._setOptions({
                disabled: a
            });
            this._updateTooltip()
        }
    });
    !1 !== d.uiBackCompat && (d.widget("ui.button", d.ui.button, {
        options: {
            text: !0,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text);
            !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel);
            this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, this.options.iconPosition = "end");
            this._super()
        },
        _setOption: function(a, b) {
            "text" === a ? this._super("showLabel", b) : ("showLabel" === a && (this.options.text = b), "icon" === a && (this.options.icons.primary = b), "icons" === a && (b.primary ? (this._super("icon",
                b.primary), this._super("iconPosition", "beginning")) : b.secondary && (this._super("icon", b.secondary), this._super("iconPosition", "end"))), this._superApply(arguments))
        }
    }), d.fn.button = function(a) {
        return function() {
            if (!this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type")) return a.apply(this, arguments);
            d.ui.checkboxradio || d.error("Checkboxradio widget missing");
            return 0 === arguments.length ? this.checkboxradio({
                    icon: !1
                }) :
                this.checkboxradio.apply(this, arguments)
        }
    }(d.fn.button), d.fn.buttonset = function() {
        d.ui.controlgroup || d.error("Controlgroup widget missing");
        if ("option" === arguments[0] && "items" === arguments[1] && arguments[2]) return this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]);
        if ("option" === arguments[0] && "items" === arguments[1]) return this.controlgroup.apply(this, [arguments[0], "items.button"]);
        "object" === typeof arguments[0] && arguments[0].items && (arguments[0].items = {
            button: arguments[0].items
        });
        return this.controlgroup.apply(this, arguments)
    });
    d.extend(d.ui, {
        datepicker: {
            version: "1.12.1"
        }
    });
    var K;
    d.extend(x.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(a) {
            y(this._defaults, a || {});
            return this
        },
        _attachDatepicker: function(a, b) {
            var c, e, f;
            c = a.nodeName.toLowerCase();
            e = "div" === c || "span" === c;
            a.id || (this.uuid += 1, a.id = "dp" + this.uuid);
            f = this._newInst(d(a), e);
            f.settings = d.extend({}, b || {});
            "input" === c ? this._connectDatepicker(a,
                f) : e && this._inlineDatepicker(a, f)
        },
        _newInst: function(a, b) {
            return {
                id: a[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
                input: a,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: b,
                dpDiv: b ? u(d("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function(a, b) {
            var c = d(a);
            b.append = d([]);
            b.trigger = d([]);
            c.hasClass(this.markerClassName) || (this._attachments(c, b), c.addClass(this.markerClassName).on("keydown",
                this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(b), d.data(a, "datepicker", b), b.settings.disabled && this._disableDatepicker(a))
        },
        _attachments: function(a, b) {
            var c, e;
            c = this._get(b, "appendText");
            var f = this._get(b, "isRTL");
            b.append && b.append.remove();
            c && (b.append = d("<span class='" + this._appendClass + "'>" + c + "</span>"), a[f ? "before" : "after"](b.append));
            a.off("focus", this._showDatepicker);
            b.trigger && b.trigger.remove();
            c = this._get(b, "showOn");
            if ("focus" === c || "both" ===
                c) a.on("focus", this._showDatepicker);
            if ("button" === c || "both" === c) c = this._get(b, "buttonText"), e = this._get(b, "buttonImage"), b.trigger = d(this._get(b, "buttonImageOnly") ? d("<img/>").addClass(this._triggerClass).attr({
                src: e,
                alt: c,
                title: c
            }) : d("<button type='button'></button>").addClass(this._triggerClass).html(e ? d("<img/>").attr({
                src: e,
                alt: c,
                title: c
            }) : c)), a[f ? "before" : "after"](b.trigger), b.trigger.on("click", function() {
                d.datepicker._datepickerShowing && d.datepicker._lastInput === a[0] ? d.datepicker._hideDatepicker() :
                    (d.datepicker._datepickerShowing && d.datepicker._lastInput !== a[0] && d.datepicker._hideDatepicker(), d.datepicker._showDatepicker(a[0]));
                return !1
            })
        },
        _autoSize: function(a) {
            if (this._get(a, "autoSize") && !a.inline) {
                var b, c, d, f, g = new Date(2009, 11, 20),
                    k = this._get(a, "dateFormat");
                k.match(/[DM]/) && (b = function(a) {
                    for (f = d = c = 0; f < a.length; f++) a[f].length > c && (c = a[f].length, d = f);
                    return d
                }, g.setMonth(b(this._get(a, k.match(/MM/) ? "monthNames" : "monthNamesShort"))), g.setDate(b(this._get(a, k.match(/DD/) ? "dayNames" : "dayNamesShort")) +
                    20 - g.getDay()));
                a.input.attr("size", this._formatDate(a, g).length)
            }
        },
        _inlineDatepicker: function(a, b) {
            var c = d(a);
            c.hasClass(this.markerClassName) || (c.addClass(this.markerClassName).append(b.dpDiv), d.data(a, "datepicker", b), this._setDate(b, this._getDefaultDate(b), !0), this._updateDatepicker(b), this._updateAlternate(b), b.settings.disabled && this._disableDatepicker(a), b.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(a, b, c, e, f) {
            var g;
            a = this._dialogInst;
            a || (this.uuid += 1, a = "dp" + this.uuid, this._dialogInput =
                d("<input type='text' id='" + a + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), d("body").append(this._dialogInput), a = this._dialogInst = this._newInst(this._dialogInput, !1), a.settings = {}, d.data(this._dialogInput[0], "datepicker", a));
            y(a.settings, e || {});
            b = b && b.constructor === Date ? this._formatDate(a, b) : b;
            this._dialogInput.val(b);
            this._pos = f ? f.length ? f : [f.pageX, f.pageY] : null;
            this._pos || (b = document.documentElement.clientWidth, e = document.documentElement.clientHeight,
                f = document.documentElement.scrollLeft || document.body.scrollLeft, g = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [b / 2 - 100 + f, e / 2 - 150 + g]);
            this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px");
            a.settings.onSelect = c;
            this._inDialog = !0;
            this.dpDiv.addClass(this._dialogClass);
            this._showDatepicker(this._dialogInput[0]);
            d.blockUI && d.blockUI(this.dpDiv);
            d.data(this._dialogInput[0], "datepicker", a);
            return this
        },
        _destroyDatepicker: function(a) {
            var b, c = d(a),
                e = d.data(a,
                    "datepicker");
            c.hasClass(this.markerClassName) && (b = a.nodeName.toLowerCase(), d.removeData(a, "datepicker"), "input" === b ? (e.append.remove(), e.trigger.remove(), c.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : "div" !== b && "span" !== b || c.removeClass(this.markerClassName).empty(), K === e && (K = null))
        },
        _enableDatepicker: function(a) {
            var b, c = d(a),
                e = d.data(a, "datepicker");
            if (c.hasClass(this.markerClassName)) {
                b =
                    a.nodeName.toLowerCase();
                if ("input" === b) a.disabled = !1, e.trigger.filter("button").each(function() {
                    this.disabled = !1
                }).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                });
                else if ("div" === b || "span" === b) b = c.children("." + this._inlineClass), b.children().removeClass("ui-state-disabled"), b.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1);
                this._disabledInputs = d.map(this._disabledInputs, function(b) {
                    return b === a ? null : b
                })
            }
        },
        _disableDatepicker: function(a) {
            var b, c = d(a),
                e = d.data(a,
                    "datepicker");
            if (c.hasClass(this.markerClassName)) {
                b = a.nodeName.toLowerCase();
                if ("input" === b) a.disabled = !0, e.trigger.filter("button").each(function() {
                    this.disabled = !0
                }).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                });
                else if ("div" === b || "span" === b) b = c.children("." + this._inlineClass), b.children().addClass("ui-state-disabled"), b.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0);
                this._disabledInputs = d.map(this._disabledInputs, function(b) {
                    return b === a ? null : b
                });
                this._disabledInputs[this._disabledInputs.length] = a
            }
        },
        _isDisabledDatepicker: function(a) {
            if (!a) return !1;
            for (var b = 0; b < this._disabledInputs.length; b++)
                if (this._disabledInputs[b] === a) return !0;
            return !1
        },
        _getInst: function(a) {
            try {
                return d.data(a, "datepicker")
            } catch (b) {
                throw "Missing instance data for this datepicker";
            }
        },
        _optionDatepicker: function(a, b, c) {
            var e, f, g, k, n = this._getInst(a);
            if (2 === arguments.length && "string" === typeof b) return "defaults" === b ? d.extend({}, d.datepicker._defaults) : n ? "all" === b ? d.extend({},
                n.settings) : this._get(n, b) : null;
            e = b || {};
            "string" === typeof b && (e = {}, e[b] = c);
            n && (this._curInst === n && this._hideDatepicker(), f = this._getDateDatepicker(a, !0), g = this._getMinMaxDate(n, "min"), k = this._getMinMaxDate(n, "max"), y(n.settings, e), null !== g && void 0 !== e.dateFormat && void 0 === e.minDate && (n.settings.minDate = this._formatDate(n, g)), null !== k && void 0 !== e.dateFormat && void 0 === e.maxDate && (n.settings.maxDate = this._formatDate(n, k)), "disabled" in e && (e.disabled ? this._disableDatepicker(a) : this._enableDatepicker(a)),
                this._attachments(d(a), n), this._autoSize(n), this._setDate(n, f), this._updateAlternate(n), this._updateDatepicker(n))
        },
        _changeDatepicker: function(a, b, c) {
            this._optionDatepicker(a, b, c)
        },
        _refreshDatepicker: function(a) {
            (a = this._getInst(a)) && this._updateDatepicker(a)
        },
        _setDateDatepicker: function(a, b) {
            var c = this._getInst(a);
            c && (this._setDate(c, b), this._updateDatepicker(c), this._updateAlternate(c))
        },
        _getDateDatepicker: function(a, b) {
            var c = this._getInst(a);
            c && !c.inline && this._setDateFromField(c, b);
            return c ? this._getDate(c) :
                null
        },
        _doKeyDown: function(a) {
            var b, c = d.datepicker._getInst(a.target);
            b = !0;
            var e = c.dpDiv.is(".ui-datepicker-rtl");
            c._keyEvent = !0;
            if (d.datepicker._datepickerShowing) switch (a.keyCode) {
                case 9:
                    d.datepicker._hideDatepicker();
                    b = !1;
                    break;
                case 13:
                    return b = d("td." + d.datepicker._dayOverClass + ":not(." + d.datepicker._currentClass + ")", c.dpDiv), b[0] && d.datepicker._selectDay(a.target, c.selectedMonth, c.selectedYear, b[0]), (a = d.datepicker._get(c, "onSelect")) ? (b = d.datepicker._formatDate(c), a.apply(c.input ? c.input[0] :
                        null, [b, c])) : d.datepicker._hideDatepicker(), !1;
                case 27:
                    d.datepicker._hideDatepicker();
                    break;
                case 33:
                    d.datepicker._adjustDate(a.target, a.ctrlKey ? -d.datepicker._get(c, "stepBigMonths") : -d.datepicker._get(c, "stepMonths"), "M");
                    break;
                case 34:
                    d.datepicker._adjustDate(a.target, a.ctrlKey ? +d.datepicker._get(c, "stepBigMonths") : +d.datepicker._get(c, "stepMonths"), "M");
                    break;
                case 35:
                    (a.ctrlKey || a.metaKey) && d.datepicker._clearDate(a.target);
                    b = a.ctrlKey || a.metaKey;
                    break;
                case 36:
                    (a.ctrlKey || a.metaKey) && d.datepicker._gotoToday(a.target);
                    b = a.ctrlKey || a.metaKey;
                    break;
                case 37:
                    (a.ctrlKey || a.metaKey) && d.datepicker._adjustDate(a.target, e ? 1 : -1, "D");
                    b = a.ctrlKey || a.metaKey;
                    a.originalEvent.altKey && d.datepicker._adjustDate(a.target, a.ctrlKey ? -d.datepicker._get(c, "stepBigMonths") : -d.datepicker._get(c, "stepMonths"), "M");
                    break;
                case 38:
                    (a.ctrlKey || a.metaKey) && d.datepicker._adjustDate(a.target, -7, "D");
                    b = a.ctrlKey || a.metaKey;
                    break;
                case 39:
                    (a.ctrlKey || a.metaKey) && d.datepicker._adjustDate(a.target, e ? -1 : 1, "D");
                    b = a.ctrlKey || a.metaKey;
                    a.originalEvent.altKey &&
                        d.datepicker._adjustDate(a.target, a.ctrlKey ? +d.datepicker._get(c, "stepBigMonths") : +d.datepicker._get(c, "stepMonths"), "M");
                    break;
                case 40:
                    (a.ctrlKey || a.metaKey) && d.datepicker._adjustDate(a.target, 7, "D");
                    b = a.ctrlKey || a.metaKey;
                    break;
                default:
                    b = !1
            } else 36 === a.keyCode && a.ctrlKey ? d.datepicker._showDatepicker(this) : b = !1;
            b && (a.preventDefault(), a.stopPropagation())
        },
        _doKeyPress: function(a) {
            var b, c;
            b = d.datepicker._getInst(a.target);
            if (d.datepicker._get(b, "constrainInput")) return b = d.datepicker._possibleChars(d.datepicker._get(b,
                "dateFormat")), c = String.fromCharCode(null == a.charCode ? a.keyCode : a.charCode), a.ctrlKey || a.metaKey || " " > c || !b || -1 < b.indexOf(c)
        },
        _doKeyUp: function(a) {
            var b;
            a = d.datepicker._getInst(a.target);
            if (a.input.val() !== a.lastVal) try {
                if (b = d.datepicker.parseDate(d.datepicker._get(a, "dateFormat"), a.input ? a.input.val() : null, d.datepicker._getFormatConfig(a))) d.datepicker._setDateFromField(a), d.datepicker._updateAlternate(a), d.datepicker._updateDatepicker(a)
            } catch (c) {}
            return !0
        },
        _showDatepicker: function(a) {
            a = a.target ||
                a;
            "input" !== a.nodeName.toLowerCase() && (a = d("input", a.parentNode)[0]);
            if (!d.datepicker._isDisabledDatepicker(a) && d.datepicker._lastInput !== a) {
                var b, c, e, f;
                b = d.datepicker._getInst(a);
                d.datepicker._curInst && d.datepicker._curInst !== b && (d.datepicker._curInst.dpDiv.stop(!0, !0), b && d.datepicker._datepickerShowing && d.datepicker._hideDatepicker(d.datepicker._curInst.input[0]));
                c = (c = d.datepicker._get(b, "beforeShow")) ? c.apply(a, [a, b]) : {};
                if (!1 !== c && (y(b.settings, c), b.lastVal = null, d.datepicker._lastInput = a, d.datepicker._setDateFromField(b),
                        d.datepicker._inDialog && (a.value = ""), d.datepicker._pos || (d.datepicker._pos = d.datepicker._findPos(a), d.datepicker._pos[1] += a.offsetHeight), e = !1, d(a).parents().each(function() {
                            e |= "fixed" === d(this).css("position");
                            return !e
                        }), c = {
                            left: d.datepicker._pos[0],
                            top: d.datepicker._pos[1]
                        }, d.datepicker._pos = null, b.dpDiv.empty(), b.dpDiv.css({
                            position: "absolute",
                            display: "block",
                            top: "-1000px"
                        }), d.datepicker._updateDatepicker(b), c = d.datepicker._checkOffset(b, c, e), b.dpDiv.css({
                            position: d.datepicker._inDialog && d.blockUI ?
                                "static" : e ? "fixed" : "absolute",
                            display: "none",
                            left: c.left + "px",
                            top: c.top + "px"
                        }), !b.inline)) {
                    c = d.datepicker._get(b, "showAnim");
                    f = d.datepicker._get(b, "duration");
                    b.dpDiv.css("z-index", q(d(a)) + 1);
                    d.datepicker._datepickerShowing = !0;
                    if (d.effects && d.effects.effect[c]) b.dpDiv.show(c, d.datepicker._get(b, "showOptions"), f);
                    else b.dpDiv[c || "show"](c ? f : null);
                    d.datepicker._shouldFocusInput(b) && b.input.trigger("focus");
                    d.datepicker._curInst = b
                }
            }
        },
        _updateDatepicker: function(a) {
            this.maxRows = 4;
            K = a;
            a.dpDiv.empty().append(this._generateHTML(a));
            this._attachHandlers(a);
            var b, c = this._getNumberOfMonths(a),
                e = c[1],
                f = a.dpDiv.find("." + this._dayOverClass + " a");
            0 < f.length && m.apply(f.get(0));
            a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
            1 < e && a.dpDiv.addClass("ui-datepicker-multi-" + e).css("width", 17 * e + "em");
            a.dpDiv[(1 !== c[0] || 1 !== c[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi");
            a.dpDiv[(this._get(a, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
            a === d.datepicker._curInst && d.datepicker._datepickerShowing &&
                d.datepicker._shouldFocusInput(a) && a.input.trigger("focus");
            a.yearshtml && (b = a.yearshtml, setTimeout(function() {
                b === a.yearshtml && a.yearshtml && a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml);
                b = a.yearshtml = null
            }, 0))
        },
        _shouldFocusInput: function(a) {
            return a.input && a.input.is(":visible") && !a.input.is(":disabled") && !a.input.is(":focus")
        },
        _checkOffset: function(a, b, c) {
            var e = a.dpDiv.outerWidth(),
                f = a.dpDiv.outerHeight(),
                g = a.input ? a.input.outerWidth() : 0,
                k = a.input ? a.input.outerHeight() :
                0,
                n = document.documentElement.clientWidth + (c ? 0 : d(document).scrollLeft()),
                r = document.documentElement.clientHeight + (c ? 0 : d(document).scrollTop());
            b.left -= this._get(a, "isRTL") ? e - g : 0;
            b.left -= c && b.left === a.input.offset().left ? d(document).scrollLeft() : 0;
            b.top -= c && b.top === a.input.offset().top + k ? d(document).scrollTop() : 0;
            b.left -= Math.min(b.left, b.left + e > n && n > e ? Math.abs(b.left + e - n) : 0);
            b.top -= Math.min(b.top, b.top + f > r && r > f ? Math.abs(f + k) : 0);
            return b
        },
        _findPos: function(a) {
            for (var b = this._getInst(a), b = this._get(b,
                    "isRTL"); a && ("hidden" === a.type || 1 !== a.nodeType || d.expr.filters.hidden(a));) a = a[b ? "previousSibling" : "nextSibling"];
            a = d(a).offset();
            return [a.left, a.top]
        },
        _hideDatepicker: function(a) {
            var b, c, e = this._curInst;
            if (e && (!a || e === d.data(a, "datepicker")) && this._datepickerShowing) {
                a = this._get(e, "showAnim");
                b = this._get(e, "duration");
                c = function() {
                    d.datepicker._tidyDialog(e)
                };
                if (d.effects && (d.effects.effect[a] || d.effects[a])) e.dpDiv.hide(a, d.datepicker._get(e, "showOptions"), b, c);
                else e.dpDiv["slideDown" === a ? "slideUp" :
                    "fadeIn" === a ? "fadeOut" : "hide"](a ? b : null, c);
                a || c();
                this._datepickerShowing = !1;
                (a = this._get(e, "onClose")) && a.apply(e.input ? e.input[0] : null, [e.input ? e.input.val() : "", e]);
                this._lastInput = null;
                this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }), d.blockUI && (d.unblockUI(), d("body").append(this.dpDiv)));
                this._inDialog = !1
            }
        },
        _tidyDialog: function(a) {
            a.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(a) {
            if (d.datepicker._curInst) {
                a =
                    d(a.target);
                var b = d.datepicker._getInst(a[0]);
                (!(a[0].id === d.datepicker._mainDivId || 0 !== a.parents("#" + d.datepicker._mainDivId).length || a.hasClass(d.datepicker.markerClassName) || a.closest("." + d.datepicker._triggerClass).length || !d.datepicker._datepickerShowing || d.datepicker._inDialog && d.blockUI) || a.hasClass(d.datepicker.markerClassName) && d.datepicker._curInst !== b) && d.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(a, b, c) {
            a = d(a);
            var e = this._getInst(a[0]);
            this._isDisabledDatepicker(a[0]) || (this._adjustInstDate(e,
                b + ("M" === c ? this._get(e, "showCurrentAtPos") : 0), c), this._updateDatepicker(e))
        },
        _gotoToday: function(a) {
            var b = d(a),
                c = this._getInst(b[0]);
            this._get(c, "gotoCurrent") && c.currentDay ? (c.selectedDay = c.currentDay, c.drawMonth = c.selectedMonth = c.currentMonth, c.drawYear = c.selectedYear = c.currentYear) : (a = new Date, c.selectedDay = a.getDate(), c.drawMonth = c.selectedMonth = a.getMonth(), c.drawYear = c.selectedYear = a.getFullYear());
            this._notifyChange(c);
            this._adjustDate(b)
        },
        _selectMonthYear: function(a, b, c) {
            a = d(a);
            var e = this._getInst(a[0]);
            e["selected" + ("M" === c ? "Month" : "Year")] = e["draw" + ("M" === c ? "Month" : "Year")] = parseInt(b.options[b.selectedIndex].value, 10);
            this._notifyChange(e);
            this._adjustDate(a)
        },
        _selectDay: function(a, b, c, e) {
            var f;
            f = d(a);
            d(e).hasClass(this._unselectableClass) || this._isDisabledDatepicker(f[0]) || (f = this._getInst(f[0]), f.selectedDay = f.currentDay = d("a", e).html(), f.selectedMonth = f.currentMonth = b, f.selectedYear = f.currentYear = c, this._selectDate(a, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear)))
        },
        _clearDate: function(a) {
            a =
                d(a);
            this._selectDate(a, "")
        },
        _selectDate: function(a, b) {
            var c;
            c = d(a);
            var e = this._getInst(c[0]);
            b = null != b ? b : this._formatDate(e);
            e.input && e.input.val(b);
            this._updateAlternate(e);
            (c = this._get(e, "onSelect")) ? c.apply(e.input ? e.input[0] : null, [b, e]): e.input && e.input.trigger("change");
            e.inline ? this._updateDatepicker(e) : (this._hideDatepicker(), this._lastInput = e.input[0], "object" !== typeof e.input[0] && e.input.trigger("focus"), this._lastInput = null)
        },
        _updateAlternate: function(a) {
            var b, c, e = this._get(a, "altField");
            e && (b = this._get(a, "altFormat") || this._get(a, "dateFormat"), c = this._getDate(a), a = this.formatDate(b, c, this._getFormatConfig(a)), d(e).val(a))
        },
        noWeekends: function(a) {
            a = a.getDay();
            return [0 < a && 6 > a, ""]
        },
        iso8601Week: function(a) {
            var b = new Date(a.getTime());
            b.setDate(b.getDate() + 4 - (b.getDay() || 7));
            a = b.getTime();
            b.setMonth(0);
            b.setDate(1);
            return Math.floor(Math.round((a - b) / 864E5) / 7) + 1
        },
        parseDate: function(a, b, c) {
            if (null == a || null == b) throw "Invalid arguments";
            b = "object" === typeof b ? b.toString() : b + "";
            if ("" === b) return null;
            var e, f, g, k = 0;
            f = (c ? c.shortYearCutoff : null) || this._defaults.shortYearCutoff;
            f = "string" !== typeof f ? f : (new Date).getFullYear() % 100 + parseInt(f, 10);
            g = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort;
            var n = (c ? c.dayNames : null) || this._defaults.dayNames,
                r = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort,
                l = (c ? c.monthNames : null) || this._defaults.monthNames,
                m = c = -1,
                q = -1,
                t = -1,
                u = !1,
                A, x = function(b) {
                    (b = e + 1 < a.length && a.charAt(e + 1) === b) && e++;
                    return b
                },
                y = function(a) {
                    var c = x(a),
                        c = "@" === a ? 14 : "!" === a ? 20 :
                        "y" === a && c ? 4 : "o" === a ? 3 : 2;
                    a = new RegExp("^\\d{" + ("y" === a ? c : 1) + "," + c + "}");
                    a = b.substring(k).match(a);
                    if (!a) throw "Missing number at position " + k;
                    k += a[0].length;
                    return parseInt(a[0], 10)
                },
                D = function(a, c, e) {
                    var f = -1;
                    a = d.map(x(a) ? e : c, function(a, b) {
                        return [
                            [b, a]
                        ]
                    }).sort(function(a, b) {
                        return -(a[1].length - b[1].length)
                    });
                    d.each(a, function(a, c) {
                        var d = c[1];
                        if (b.substr(k, d.length).toLowerCase() === d.toLowerCase()) return f = c[0], k += d.length, !1
                    });
                    if (-1 !== f) return f + 1;
                    throw "Unknown name at position " + k;
                },
                J = function() {
                    if (b.charAt(k) !==
                        a.charAt(e)) throw "Unexpected literal at position " + k;
                    k++
                };
            for (e = 0; e < a.length; e++)
                if (u) "'" !== a.charAt(e) || x("'") ? J() : u = !1;
                else switch (a.charAt(e)) {
                    case "d":
                        q = y("d");
                        break;
                    case "D":
                        D("D", g, n);
                        break;
                    case "o":
                        t = y("o");
                        break;
                    case "m":
                        m = y("m");
                        break;
                    case "M":
                        m = D("M", r, l);
                        break;
                    case "y":
                        c = y("y");
                        break;
                    case "@":
                        A = new Date(y("@"));
                        c = A.getFullYear();
                        m = A.getMonth() + 1;
                        q = A.getDate();
                        break;
                    case "!":
                        A = new Date((y("!") - this._ticksTo1970) / 1E4);
                        c = A.getFullYear();
                        m = A.getMonth() + 1;
                        q = A.getDate();
                        break;
                    case "'":
                        x("'") ?
                            J() : u = !0;
                        break;
                    default:
                        J()
                }
                if (k < b.length && (g = b.substr(k), !/^\s+/.test(g))) throw "Extra/unparsed characters found in date: " + g; - 1 === c ? c = (new Date).getFullYear() : 100 > c && (c += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (c <= f ? 0 : -100));
            if (-1 < t) {
                m = 1;
                q = t;
                do {
                    f = this._getDaysInMonth(c, m - 1);
                    if (q <= f) break;
                    m++;
                    q -= f
                } while (1)
            }
            A = this._daylightSavingAdjust(new Date(c, m - 1, q));
            if (A.getFullYear() !== c || A.getMonth() + 1 !== m || A.getDate() !== q) throw "Invalid date";
            return A
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 864E9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function(a, b, c) {
            if (!b) return "";
            var d, f = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort,
                g = (c ? c.dayNames : null) || this._defaults.dayNames,
                k = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort;
            c = (c ? c.monthNames : null) || this._defaults.monthNames;
            var n = function(b) {
                    (b = d + 1 < a.length && a.charAt(d + 1) === b) && d++;
                    return b
                },
                r = function(a, b, c) {
                    b = "" + b;
                    if (n(a))
                        for (; b.length < c;) b = "0" + b;
                    return b
                },
                l = function(a, b, c, d) {
                    return n(a) ? d[b] : c[b]
                },
                m = "",
                q = !1;
            if (b)
                for (d = 0; d < a.length; d++)
                    if (q) "'" !== a.charAt(d) || n("'") ? m += a.charAt(d) : q = !1;
                    else switch (a.charAt(d)) {
                        case "d":
                            m += r("d", b.getDate(), 2);
                            break;
                        case "D":
                            m += l("D", b.getDay(), f, g);
                            break;
                        case "o":
                            m += r("o", Math.round(((new Date(b.getFullYear(), b.getMonth(), b.getDate())).getTime() - (new Date(b.getFullYear(), 0, 0)).getTime()) /
                                864E5), 3);
                            break;
                        case "m":
                            m += r("m", b.getMonth() + 1, 2);
                            break;
                        case "M":
                            m += l("M", b.getMonth(), k, c);
                            break;
                        case "y":
                            m += n("y") ? b.getFullYear() : (10 > b.getFullYear() % 100 ? "0" : "") + b.getFullYear() % 100;
                            break;
                        case "@":
                            m += b.getTime();
                            break;
                        case "!":
                            m += 1E4 * b.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            n("'") ? m += "'" : q = !0;
                            break;
                        default:
                            m += a.charAt(d)
                    }
                    return m
        },
        _possibleChars: function(a) {
            var b, c = "",
                d = !1,
                f = function(c) {
                    (c = b + 1 < a.length && a.charAt(b + 1) === c) && b++;
                    return c
                };
            for (b = 0; b < a.length; b++)
                if (d) "'" !== a.charAt(b) || f("'") ?
                    c += a.charAt(b) : d = !1;
                else switch (a.charAt(b)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        c += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        f("'") ? c += "'" : d = !0;
                        break;
                    default:
                        c += a.charAt(b)
                }
                return c
        },
        _get: function(a, b) {
            return void 0 !== a.settings[b] ? a.settings[b] : this._defaults[b]
        },
        _setDateFromField: function(a, b) {
            if (a.input.val() !== a.lastVal) {
                var c = this._get(a, "dateFormat"),
                    d = a.lastVal = a.input ? a.input.val() : null,
                    f = this._getDefaultDate(a),
                    g = f,
                    k = this._getFormatConfig(a);
                try {
                    g = this.parseDate(c, d, k) ||
                        f
                } catch (n) {
                    d = b ? "" : d
                }
                a.selectedDay = g.getDate();
                a.drawMonth = a.selectedMonth = g.getMonth();
                a.drawYear = a.selectedYear = g.getFullYear();
                a.currentDay = d ? g.getDate() : 0;
                a.currentMonth = d ? g.getMonth() : 0;
                a.currentYear = d ? g.getFullYear() : 0;
                this._adjustInstDate(a)
            }
        },
        _getDefaultDate: function(a) {
            return this._restrictMinMax(a, this._determineDate(a, this._get(a, "defaultDate"), new Date))
        },
        _determineDate: function(a, b, c) {
            var e = function(a) {
                    var b = new Date;
                    b.setDate(b.getDate() + a);
                    return b
                },
                f = function(b) {
                    try {
                        return d.datepicker.parseDate(d.datepicker._get(a,
                            "dateFormat"), b, d.datepicker._getFormatConfig(a))
                    } catch (G) {}
                    for (var c = (b.toLowerCase().match(/^c/) ? d.datepicker._getDate(a) : null) || new Date, e = c.getFullYear(), f = c.getMonth(), c = c.getDate(), g = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = g.exec(b); l;) {
                        switch (l[2] || "d") {
                            case "d":
                            case "D":
                                c += parseInt(l[1], 10);
                                break;
                            case "w":
                            case "W":
                                c += 7 * parseInt(l[1], 10);
                                break;
                            case "m":
                            case "M":
                                f += parseInt(l[1], 10);
                                c = Math.min(c, d.datepicker._getDaysInMonth(e, f));
                                break;
                            case "y":
                            case "Y":
                                e += parseInt(l[1], 10), c = Math.min(c, d.datepicker._getDaysInMonth(e,
                                    f))
                        }
                        l = g.exec(b)
                    }
                    return new Date(e, f, c)
                };
            if (b = (b = null == b || "" === b ? c : "string" === typeof b ? f(b) : "number" === typeof b ? isNaN(b) ? c : e(b) : new Date(b.getTime())) && "Invalid Date" === b.toString() ? c : b) b.setHours(0), b.setMinutes(0), b.setSeconds(0), b.setMilliseconds(0);
            return this._daylightSavingAdjust(b)
        },
        _daylightSavingAdjust: function(a) {
            if (!a) return null;
            a.setHours(12 < a.getHours() ? a.getHours() + 2 : 0);
            return a
        },
        _setDate: function(a, b, c) {
            var d = !b,
                f = a.selectedMonth,
                g = a.selectedYear;
            b = this._restrictMinMax(a, this._determineDate(a,
                b, new Date));
            a.selectedDay = a.currentDay = b.getDate();
            a.drawMonth = a.selectedMonth = a.currentMonth = b.getMonth();
            a.drawYear = a.selectedYear = a.currentYear = b.getFullYear();
            f === a.selectedMonth && g === a.selectedYear || c || this._notifyChange(a);
            this._adjustInstDate(a);
            a.input && a.input.val(d ? "" : this._formatDate(a))
        },
        _getDate: function(a) {
            return !a.currentYear || a.input && "" === a.input.val() ? null : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay))
        },
        _attachHandlers: function(a) {
            var b = this._get(a,
                    "stepMonths"),
                c = "#" + a.id.replace(/\\\\/g, "\\");
            a.dpDiv.find("[data-handler]").map(function() {
                d(this).on(this.getAttribute("data-event"), {
                    prev: function() {
                        d.datepicker._adjustDate(c, -b, "M")
                    },
                    next: function() {
                        d.datepicker._adjustDate(c, +b, "M")
                    },
                    hide: function() {
                        d.datepicker._hideDatepicker()
                    },
                    today: function() {
                        d.datepicker._gotoToday(c)
                    },
                    selectDay: function() {
                        d.datepicker._selectDay(c, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this);
                        return !1
                    },
                    selectMonth: function() {
                        d.datepicker._selectMonthYear(c,
                            this, "M");
                        return !1
                    },
                    selectYear: function() {
                        d.datepicker._selectMonthYear(c, this, "Y");
                        return !1
                    }
                }[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(a) {
            var b, c, d, f, g, k, n, r, l, m, q, t, u, A, x, y, D, J, I, F, K, C, U, T, ea, la, ca, Q = new Date,
                Q = this._daylightSavingAdjust(new Date(Q.getFullYear(), Q.getMonth(), Q.getDate())),
                X = this._get(a, "isRTL");
            k = this._get(a, "showButtonPanel");
            d = this._get(a, "hideIfNoPrevNext");
            g = this._get(a, "navigationAsDateFormat");
            var R = this._getNumberOfMonths(a),
                N = this._get(a, "showCurrentAtPos");
            f = this._get(a, "stepMonths");
            var qa = 1 !== R[0] || 1 !== R[1],
                xa = this._daylightSavingAdjust(a.currentDay ? new Date(a.currentYear, a.currentMonth, a.currentDay) : new Date(9999, 9, 9)),
                ia = this._getMinMaxDate(a, "min"),
                ba = this._getMinMaxDate(a, "max"),
                N = a.drawMonth - N,
                H = a.drawYear;
            0 > N && (N += 12, H--);
            if (ba)
                for (b = this._daylightSavingAdjust(new Date(ba.getFullYear(), ba.getMonth() - R[0] * R[1] + 1, ba.getDate())), b = ia && b < ia ? ia : b; this._daylightSavingAdjust(new Date(H, N, 1)) > b;) N--, 0 > N && (N = 11, H--);
            a.drawMonth = N;
            a.drawYear = H;
            b = this._get(a,
                "prevText");
            b = g ? this.formatDate(b, this._daylightSavingAdjust(new Date(H, N - f, 1)), this._getFormatConfig(a)) : b;
            b = this._canAdjustMonth(a, -1, H, N) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + b + "'><span class='ui-icon ui-icon-circle-triangle-" + (X ? "e" : "w") + "'>" + b + "</span></a>" : d ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + b + "'><span class='ui-icon ui-icon-circle-triangle-" + (X ? "e" : "w") + "'>" + b + "</span></a>";
            c = this._get(a, "nextText");
            c = g ? this.formatDate(c, this._daylightSavingAdjust(new Date(H, N + f, 1)), this._getFormatConfig(a)) : c;
            d = this._canAdjustMonth(a, 1, H, N) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + c + "'><span class='ui-icon ui-icon-circle-triangle-" + (X ? "w" : "e") + "'>" + c + "</span></a>" : d ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + c + "'><span class='ui-icon ui-icon-circle-triangle-" + (X ? "w" : "e") + "'>" + c + "</span></a>";
            f = this._get(a, "currentText");
            c = this._get(a,
                "gotoCurrent") && a.currentDay ? xa : Q;
            f = g ? this.formatDate(f, c, this._getFormatConfig(a)) : f;
            g = a.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(a, "closeText") + "</button>";
            k = k ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (X ? g : "") + (this._isInRange(a, c) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" +
                f + "</button>" : "") + (X ? "" : g) + "</div>" : "";
            g = parseInt(this._get(a, "firstDay"), 10);
            g = isNaN(g) ? 0 : g;
            f = this._get(a, "showWeek");
            c = this._get(a, "dayNames");
            n = this._get(a, "dayNamesMin");
            r = this._get(a, "monthNames");
            l = this._get(a, "monthNamesShort");
            m = this._get(a, "beforeShowDay");
            q = this._get(a, "showOtherMonths");
            t = this._get(a, "selectOtherMonths");
            u = this._getDefaultDate(a);
            A = "";
            for (y = 0; y < R[0]; y++) {
                D = "";
                this.maxRows = 4;
                for (J = 0; J < R[1]; J++) {
                    I = this._daylightSavingAdjust(new Date(H, N, a.selectedDay));
                    x = " ui-corner-all";
                    F = "";
                    if (qa) {
                        F += "<div class='ui-datepicker-group";
                        if (1 < R[1]) switch (J) {
                            case 0:
                                F += " ui-datepicker-group-first";
                                x = " ui-corner-" + (X ? "right" : "left");
                                break;
                            case R[1] - 1:
                                F += " ui-datepicker-group-last";
                                x = " ui-corner-" + (X ? "left" : "right");
                                break;
                            default:
                                F += " ui-datepicker-group-middle", x = ""
                        }
                        F += "'>"
                    }
                    F += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + x + "'>" + (/all|left/.test(x) && 0 === y ? X ? d : b : "") + (/all|right/.test(x) && 0 === y ? X ? b : d : "") + this._generateMonthYearHeader(a, N, H, ia, ba, 0 < y || 0 < J, r, l) + "</div><table class='ui-datepicker-calendar'><thead><tr>";
                    K = f ? "<th class='ui-datepicker-week-col'>" + this._get(a, "weekHeader") + "</th>" : "";
                    for (x = 0; 7 > x; x++) C = (x + g) % 7, K += "<th scope='col'" + (5 <= (x + g + 6) % 7 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + c[C] + "'>" + n[C] + "</span></th>";
                    F += K + "</tr></thead><tbody>";
                    K = this._getDaysInMonth(H, N);
                    H === a.selectedYear && N === a.selectedMonth && (a.selectedDay = Math.min(a.selectedDay, K));
                    x = (this._getFirstDayOfMonth(H, N) - g + 7) % 7;
                    K = Math.ceil((x + K) / 7);
                    this.maxRows = K = qa ? this.maxRows > K ? this.maxRows : K : K;
                    C = this._daylightSavingAdjust(new Date(H,
                        N, 1 - x));
                    for (U = 0; U < K; U++) {
                        F += "<tr>";
                        T = f ? "<td class='ui-datepicker-week-col'>" + this._get(a, "calculateWeek")(C) + "</td>" : "";
                        for (x = 0; 7 > x; x++) ea = m ? m.apply(a.input ? a.input[0] : null, [C]) : [!0, ""], ca = (la = C.getMonth() !== N) && !t || !ea[0] || ia && C < ia || ba && C > ba, T += "<td class='" + (5 <= (x + g + 6) % 7 ? " ui-datepicker-week-end" : "") + (la ? " ui-datepicker-other-month" : "") + (C.getTime() === I.getTime() && N === a.selectedMonth && a._keyEvent || u.getTime() === C.getTime() && u.getTime() === I.getTime() ? " " + this._dayOverClass : "") + (ca ? " " + this._unselectableClass +
                            " ui-state-disabled" : "") + (la && !q ? "" : " " + ea[1] + (C.getTime() === xa.getTime() ? " " + this._currentClass : "") + (C.getTime() === Q.getTime() ? " ui-datepicker-today" : "")) + "'" + (la && !q || !ea[2] ? "" : " title='" + ea[2].replace(/'/g, "&#39;") + "'") + (ca ? "" : " data-handler='selectDay' data-event='click' data-month='" + C.getMonth() + "' data-year='" + C.getFullYear() + "'") + ">" + (la && !q ? "&#xa0;" : ca ? "<span class='ui-state-default'>" + C.getDate() + "</span>" : "<a class='ui-state-default" + (C.getTime() === Q.getTime() ? " ui-state-highlight" : "") +
                            (C.getTime() === xa.getTime() ? " ui-state-active" : "") + (la ? " ui-priority-secondary" : "") + "' href='#'>" + C.getDate() + "</a>") + "</td>", C.setDate(C.getDate() + 1), C = this._daylightSavingAdjust(C);
                        F += T + "</tr>"
                    }
                    N++;
                    11 < N && (N = 0, H++);
                    F += "</tbody></table>" + (qa ? "</div>" + (0 < R[0] && J === R[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "");
                    D += F
                }
                A += D
            }
            a._keyEvent = !1;
            return A + k
        },
        _generateMonthYearHeader: function(a, b, c, d, f, g, k, n) {
            var e, l, m, q = this._get(a, "changeMonth"),
                t = this._get(a, "changeYear"),
                x = this._get(a, "showMonthAfterYear"),
                u = "<div class='ui-datepicker-title'>",
                y = "";
            if (g || !q) y += "<span class='ui-datepicker-month'>" + k[b] + "</span>";
            else {
                k = d && d.getFullYear() === c;
                e = f && f.getFullYear() === c;
                y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
                for (l = 0; 12 > l; l++)(!k || l >= d.getMonth()) && (!e || l <= f.getMonth()) && (y += "<option value='" + l + "'" + (l === b ? " selected='selected'" : "") + ">" + n[l] + "</option>");
                y += "</select>"
            }
            x || (u += y + (!g && q && t ? "" : "&#xa0;"));
            if (!a.yearshtml)
                if (a.yearshtml = "", g || !t) u += "<span class='ui-datepicker-year'>" +
                    c + "</span>";
                else {
                    n = this._get(a, "yearRange").split(":");
                    m = (new Date).getFullYear();
                    k = function(a) {
                        a = a.match(/c[+\-].*/) ? c + parseInt(a.substring(1), 10) : a.match(/[+\-].*/) ? m + parseInt(a, 10) : parseInt(a, 10);
                        return isNaN(a) ? m : a
                    };
                    b = k(n[0]);
                    n = Math.max(b, k(n[1] || ""));
                    b = d ? Math.max(b, d.getFullYear()) : b;
                    n = f ? Math.min(n, f.getFullYear()) : n;
                    for (a.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; b <= n; b++) a.yearshtml += "<option value='" + b + "'" + (b === c ? " selected='selected'" :
                        "") + ">" + b + "</option>";
                    a.yearshtml += "</select>";
                    u += a.yearshtml;
                    a.yearshtml = null
                }
            u += this._get(a, "yearSuffix");
            x && (u += (!g && q && t ? "" : "&#xa0;") + y);
            return u + "</div>"
        },
        _adjustInstDate: function(a, b, c) {
            var d = a.selectedYear + ("Y" === c ? b : 0),
                f = a.selectedMonth + ("M" === c ? b : 0);
            b = Math.min(a.selectedDay, this._getDaysInMonth(d, f)) + ("D" === c ? b : 0);
            d = this._restrictMinMax(a, this._daylightSavingAdjust(new Date(d, f, b)));
            a.selectedDay = d.getDate();
            a.drawMonth = a.selectedMonth = d.getMonth();
            a.drawYear = a.selectedYear = d.getFullYear();
            "M" !== c && "Y" !== c || this._notifyChange(a)
        },
        _restrictMinMax: function(a, b) {
            var c = this._getMinMaxDate(a, "min"),
                d = this._getMinMaxDate(a, "max"),
                c = c && b < c ? c : b;
            return d && c > d ? d : c
        },
        _notifyChange: function(a) {
            var b = this._get(a, "onChangeMonthYear");
            b && b.apply(a.input ? a.input[0] : null, [a.selectedYear, a.selectedMonth + 1, a])
        },
        _getNumberOfMonths: function(a) {
            a = this._get(a, "numberOfMonths");
            return null == a ? [1, 1] : "number" === typeof a ? [1, a] : a
        },
        _getMinMaxDate: function(a, b) {
            return this._determineDate(a, this._get(a, b + "Date"),
                null)
        },
        _getDaysInMonth: function(a, b) {
            return 32 - this._daylightSavingAdjust(new Date(a, b, 32)).getDate()
        },
        _getFirstDayOfMonth: function(a, b) {
            return (new Date(a, b, 1)).getDay()
        },
        _canAdjustMonth: function(a, b, c, d) {
            var e = this._getNumberOfMonths(a);
            c = this._daylightSavingAdjust(new Date(c, d + (0 > b ? b : e[0] * e[1]), 1));
            0 > b && c.setDate(this._getDaysInMonth(c.getFullYear(), c.getMonth()));
            return this._isInRange(a, c)
        },
        _isInRange: function(a, b) {
            var c, d, f = this._getMinMaxDate(a, "min"),
                g = this._getMinMaxDate(a, "max"),
                k = null,
                n =
                null;
            if (c = this._get(a, "yearRange")) c = c.split(":"), d = (new Date).getFullYear(), k = parseInt(c[0], 10), n = parseInt(c[1], 10), c[0].match(/[+\-].*/) && (k += d), c[1].match(/[+\-].*/) && (n += d);
            return (!f || b.getTime() >= f.getTime()) && (!g || b.getTime() <= g.getTime()) && (!k || b.getFullYear() >= k) && (!n || b.getFullYear() <= n)
        },
        _getFormatConfig: function(a) {
            var b = this._get(a, "shortYearCutoff"),
                b = "string" !== typeof b ? b : (new Date).getFullYear() % 100 + parseInt(b, 10);
            return {
                shortYearCutoff: b,
                dayNamesShort: this._get(a, "dayNamesShort"),
                dayNames: this._get(a, "dayNames"),
                monthNamesShort: this._get(a, "monthNamesShort"),
                monthNames: this._get(a, "monthNames")
            }
        },
        _formatDate: function(a, b, c, d) {
            b || (a.currentDay = a.selectedDay, a.currentMonth = a.selectedMonth, a.currentYear = a.selectedYear);
            b = b ? "object" === typeof b ? b : this._daylightSavingAdjust(new Date(d, c, b)) : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
            return this.formatDate(this._get(a, "dateFormat"), b, this._getFormatConfig(a))
        }
    });
    d.fn.datepicker = function(a) {
        if (!this.length) return this;
        d.datepicker.initialized || (d(document).on("mousedown", d.datepicker._checkExternalClick), d.datepicker.initialized = !0);
        0 === d("#" + d.datepicker._mainDivId).length && d("body").append(d.datepicker.dpDiv);
        var b = Array.prototype.slice.call(arguments, 1);
        return "string" === typeof a && ("isDisabled" === a || "getDate" === a || "widget" === a) || "option" === a && 2 === arguments.length && "string" === typeof arguments[1] ? d.datepicker["_" + a + "Datepicker"].apply(d.datepicker, [this[0]].concat(b)) : this.each(function() {
            "string" === typeof a ? d.datepicker["_" +
                a + "Datepicker"].apply(d.datepicker, [this].concat(b)) : d.datepicker._attachDatepicker(this, a)
        })
    };
    d.datepicker = new x;
    d.datepicker.initialized = !1;
    d.datepicker.uuid = (new Date).getTime();
    d.datepicker.version = "1.12.1";
    d.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    var T = !1;
    d(document).on("mouseup", function() {
        T = !1
    });
    d.widget("ui.mouse", {
        version: "1.12.1",
        options: {
            cancel: "input, textarea, button, select, option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var a = this;
            this.element.on("mousedown." +
                this.widgetName,
                function(b) {
                    return a._mouseDown(b)
                }).on("click." + this.widgetName, function(b) {
                if (!0 === d.data(b.target, a.widgetName + ".preventClickEvent")) return d.removeData(b.target, a.widgetName + ".preventClickEvent"), b.stopImmediatePropagation(), !1
            });
            this.started = !1
        },
        _mouseDestroy: function() {
            this.element.off("." + this.widgetName);
            this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(a) {
            if (!T) {
                this._mouseMoved = !1;
                this._mouseStarted && this._mouseUp(a);
                this._mouseDownEvent = a;
                var b = this,
                    c = 1 === a.which,
                    e = "string" === typeof this.options.cancel && a.target.nodeName ? d(a.target).closest(this.options.cancel).length : !1;
                if (!c || e || !this._mouseCapture(a)) return !0;
                this.mouseDelayMet = !this.options.delay;
                this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    b.mouseDelayMet = !0
                }, this.options.delay));
                if (this._mouseDistanceMet(a) && this._mouseDelayMet(a) && (this._mouseStarted = !1 !== this._mouseStart(a), !this._mouseStarted)) return a.preventDefault(), !0;
                !0 === d.data(a.target, this.widgetName + ".preventClickEvent") && d.removeData(a.target, this.widgetName + ".preventClickEvent");
                this._mouseMoveDelegate = function(a) {
                    return b._mouseMove(a)
                };
                this._mouseUpDelegate = function(a) {
                    return b._mouseUp(a)
                };
                this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate);
                a.preventDefault();
                return T = !0
            }
        },
        _mouseMove: function(a) {
            if (this._mouseMoved) {
                if (d.ui.ie && (!document.documentMode || 9 > document.documentMode) &&
                    !a.button) return this._mouseUp(a);
                if (!a.which)
                    if (a.originalEvent.altKey || a.originalEvent.ctrlKey || a.originalEvent.metaKey || a.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
                    else if (!this.ignoreMissingWhich) return this._mouseUp(a)
            }
            if (a.which || a.button) this._mouseMoved = !0;
            if (this._mouseStarted) return this._mouseDrag(a), a.preventDefault();
            this._mouseDistanceMet(a) && this._mouseDelayMet(a) && ((this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, a)) ? this._mouseDrag(a) : this._mouseUp(a));
            return !this._mouseStarted
        },
        _mouseUp: function(a) {
            this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate);
            this._mouseStarted && (this._mouseStarted = !1, a.target === this._mouseDownEvent.target && d.data(a.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(a));
            this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer);
            T = this.ignoreMissingWhich = !1;
            a.preventDefault()
        },
        _mouseDistanceMet: function(a) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX -
                a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    });
    d.ui.plugin = {
        add: function(a, b, c) {
            var e;
            a = d.ui[a].prototype;
            for (e in c) a.plugins[e] = a.plugins[e] || [], a.plugins[e].push([b, c[e]])
        },
        call: function(a, b, c, d) {
            if ((b = a.plugins[b]) && (d || a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType))
                for (d = 0; d < b.length; d++) a.options[b[d][0]] &&
                    b[d][1].apply(a.element, c)
        }
    };
    d.ui.safeBlur = function(a) {
        a && "body" !== a.nodeName.toLowerCase() && d(a).trigger("blur")
    };
    d.widget("ui.draggable", d.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            "original" === this.options.helper && this._setPositionRelative();
            this.options.addClasses && this._addClass("ui-draggable");
            this._setHandleClassName();
            this._mouseInit()
        },
        _setOption: function(a, b) {
            this._super(a, b);
            "handle" === a && (this._removeHandleClassName(), this._setHandleClassName())
        },
        _destroy: function() {
            (this.helper || this.element).is(".ui-draggable-dragging") ? this.destroyOnClear = !0 : (this._removeHandleClassName(), this._mouseDestroy())
        },
        _mouseCapture: function(a) {
            var b = this.options;
            if (this.helper || b.disabled || 0 < d(a.target).closest(".ui-resizable-handle").length) return !1;
            this.handle = this._getHandle(a);
            if (!this.handle) return !1;
            this._blurActiveElement(a);
            this._blockFrames(!0 === b.iframeFix ? "iframe" : b.iframeFix);
            return !0
        },
        _blockFrames: function(a) {
            this.iframeBlocks = this.document.find(a).map(function() {
                var a = d(this);
                return d("<div>").css("position", "absolute").appendTo(a.parent()).outerWidth(a.outerWidth()).outerHeight(a.outerHeight()).offset(a.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _blurActiveElement: function(a) {
            var b = d.ui.safeActiveElement(this.document[0]);
            d(a.target).closest(b).length || d.ui.safeBlur(b)
        },
        _mouseStart: function(a) {
            var b = this.options;
            this.helper = this._createHelper(a);
            this._addClass(this.helper, "ui-draggable-dragging");
            this._cacheHelperProportions();
            d.ui.ddmanager && (d.ui.ddmanager.current = this);
            this._cacheMargins();
            this.cssPosition = this.helper.css("position");
            this.scrollParent =
                this.helper.scrollParent(!0);
            this.offsetParent = this.helper.offsetParent();
            this.hasFixedAncestor = 0 < this.helper.parents().filter(function() {
                return "fixed" === d(this).css("position")
            }).length;
            this.positionAbs = this.element.offset();
            this._refreshOffsets(a);
            this.originalPosition = this.position = this._generatePosition(a, !1);
            this.originalPageX = a.pageX;
            this.originalPageY = a.pageY;
            b.cursorAt && this._adjustOffsetFromHelper(b.cursorAt);
            this._setContainment();
            if (!1 === this._trigger("start", a)) return this._clear(), !1;
            this._cacheHelperProportions();
            d.ui.ddmanager && !b.dropBehaviour && d.ui.ddmanager.prepareOffsets(this, a);
            this._mouseDrag(a, !0);
            d.ui.ddmanager && d.ui.ddmanager.dragStart(this, a);
            return !0
        },
        _refreshOffsets: function(a) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: !1,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            };
            this.offset.click = {
                left: a.pageX - this.offset.left,
                top: a.pageY - this.offset.top
            }
        },
        _mouseDrag: function(a, b) {
            this.hasFixedAncestor &&
                (this.offset.parent = this._getParentOffset());
            this.position = this._generatePosition(a, !0);
            this.positionAbs = this._convertPositionTo("absolute");
            if (!b) {
                var c = this._uiHash();
                if (!1 === this._trigger("drag", a, c)) return this._mouseUp(new d.Event("mouseup", a)), !1;
                this.position = c.position
            }
            this.helper[0].style.left = this.position.left + "px";
            this.helper[0].style.top = this.position.top + "px";
            d.ui.ddmanager && d.ui.ddmanager.drag(this, a);
            return !1
        },
        _mouseStop: function(a) {
            var b = this,
                c = !1;
            d.ui.ddmanager && !this.options.dropBehaviour &&
                (c = d.ui.ddmanager.drop(this, a));
            this.dropped && (c = this.dropped, this.dropped = !1);
            "invalid" === this.options.revert && !c || "valid" === this.options.revert && c || !0 === this.options.revert || d.isFunction(this.options.revert) && this.options.revert.call(this.element, c) ? d(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                !1 !== b._trigger("stop", a) && b._clear()
            }) : !1 !== this._trigger("stop", a) && this._clear();
            return !1
        },
        _mouseUp: function(a) {
            this._unblockFrames();
            d.ui.ddmanager &&
                d.ui.ddmanager.dragStop(this, a);
            this.handleElement.is(a.target) && this.element.trigger("focus");
            return d.ui.mouse.prototype._mouseUp.call(this, a)
        },
        cancel: function() {
            this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new d.Event("mouseup", {
                target: this.element[0]
            })) : this._clear();
            return this
        },
        _getHandle: function(a) {
            return this.options.handle ? !!d(a.target).closest(this.element.find(this.options.handle)).length : !0
        },
        _setHandleClassName: function() {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) :
                this.element;
            this._addClass(this.handleElement, "ui-draggable-handle")
        },
        _removeHandleClassName: function() {
            this._removeClass(this.handleElement, "ui-draggable-handle")
        },
        _createHelper: function(a) {
            var b = this.options,
                c = d.isFunction(b.helper);
            a = c ? d(b.helper.apply(this.element[0], [a])) : "clone" === b.helper ? this.element.clone().removeAttr("id") : this.element;
            a.parents("body").length || a.appendTo("parent" === b.appendTo ? this.element[0].parentNode : b.appendTo);
            c && a[0] === this.element[0] && this._setPositionRelative();
            a[0] === this.element[0] || /(fixed|absolute)/.test(a.css("position")) || a.css("position", "absolute");
            return a
        },
        _setPositionRelative: function() {
            /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
        },
        _adjustOffsetFromHelper: function(a) {
            "string" === typeof a && (a = a.split(" "));
            d.isArray(a) && (a = {
                left: +a[0],
                top: +a[1] || 0
            });
            "left" in a && (this.offset.click.left = a.left + this.margins.left);
            "right" in a && (this.offset.click.left = this.helperProportions.width - a.right + this.margins.left);
            "top" in a && (this.offset.click.top = a.top + this.margins.top);
            "bottom" in a && (this.offset.click.top = this.helperProportions.height - a.bottom + this.margins.top)
        },
        _isRootNode: function(a) {
            return /(html|body)/i.test(a.tagName) || a === this.document[0]
        },
        _getParentOffset: function() {
            var a = this.offsetParent.offset(),
                b = this.document[0];
            "absolute" === this.cssPosition && this.scrollParent[0] !== b && d.contains(this.scrollParent[0], this.offsetParent[0]) && (a.left += this.scrollParent.scrollLeft(), a.top += this.scrollParent.scrollTop());
            this._isRootNode(this.offsetParent[0]) && (a = {
                top: 0,
                left: 0
            });
            return {
                top: a.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: a.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" !== this.cssPosition) return {
                top: 0,
                left: 0
            };
            var a = this.element.position(),
                b = this._isRootNode(this.scrollParent[0]);
            return {
                top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + (b ? 0 : this.scrollParent.scrollTop()),
                left: a.left - (parseInt(this.helper.css("left"),
                    10) || 0) + (b ? 0 : this.scrollParent.scrollLeft())
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var a, b, c;
            a = this.options;
            b = this.document[0];
            this.relativeContainer =
                null;
            if (a.containment)
                if ("window" === a.containment) this.containment = [d(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, d(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, d(window).scrollLeft() + d(window).width() - this.helperProportions.width - this.margins.left, d(window).scrollTop() + (d(window).height() || b.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
                else if ("document" === a.containment) this.containment = [0, 0, d(b).width() - this.helperProportions.width -
                this.margins.left, (d(b).height() || b.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top
            ];
            else if (a.containment.constructor === Array) this.containment = a.containment;
            else {
                if ("parent" === a.containment && (a.containment = this.helper[0].parentNode), b = d(a.containment), c = b[0]) a = /(scroll|auto)/.test(b.css("overflow")), this.containment = [(parseInt(b.css("borderLeftWidth"), 10) || 0) + (parseInt(b.css("paddingLeft"), 10) || 0), (parseInt(b.css("borderTopWidth"), 10) || 0) + (parseInt(b.css("paddingTop"),
                    10) || 0), (a ? Math.max(c.scrollWidth, c.offsetWidth) : c.offsetWidth) - (parseInt(b.css("borderRightWidth"), 10) || 0) - (parseInt(b.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (a ? Math.max(c.scrollHeight, c.offsetHeight) : c.offsetHeight) - (parseInt(b.css("borderBottomWidth"), 10) || 0) - (parseInt(b.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = b
            } else this.containment = null
        },
        _convertPositionTo: function(a,
            b) {
            b || (b = this.position);
            var c = "absolute" === a ? 1 : -1,
                d = this._isRootNode(this.scrollParent[0]);
            return {
                top: b.top + this.offset.relative.top * c + this.offset.parent.top * c - ("fixed" === this.cssPosition ? -this.offset.scroll.top : d ? 0 : this.offset.scroll.top) * c,
                left: b.left + this.offset.relative.left * c + this.offset.parent.left * c - ("fixed" === this.cssPosition ? -this.offset.scroll.left : d ? 0 : this.offset.scroll.left) * c
            }
        },
        _generatePosition: function(a, b) {
            var c, d, f, g = this.options,
                k = this._isRootNode(this.scrollParent[0]);
            f = a.pageX;
            d = a.pageY;
            k && this.offset.scroll || (this.offset.scroll = {
                top: this.scrollParent.scrollTop(),
                left: this.scrollParent.scrollLeft()
            });
            b && (this.containment && (this.relativeContainer ? (c = this.relativeContainer.offset(), c = [this.containment[0] + c.left, this.containment[1] + c.top, this.containment[2] + c.left, this.containment[3] + c.top]) : c = this.containment, a.pageX - this.offset.click.left < c[0] && (f = c[0] + this.offset.click.left), a.pageY - this.offset.click.top < c[1] && (d = c[1] + this.offset.click.top), a.pageX - this.offset.click.left >
                c[2] && (f = c[2] + this.offset.click.left), a.pageY - this.offset.click.top > c[3] && (d = c[3] + this.offset.click.top)), g.grid && (d = g.grid[1] ? this.originalPageY + Math.round((d - this.originalPageY) / g.grid[1]) * g.grid[1] : this.originalPageY, d = c ? d - this.offset.click.top >= c[1] || d - this.offset.click.top > c[3] ? d : d - this.offset.click.top >= c[1] ? d - g.grid[1] : d + g.grid[1] : d, f = g.grid[0] ? this.originalPageX + Math.round((f - this.originalPageX) / g.grid[0]) * g.grid[0] : this.originalPageX, f = c ? f - this.offset.click.left >= c[0] || f - this.offset.click.left >
                c[2] ? f : f - this.offset.click.left >= c[0] ? f - g.grid[0] : f + g.grid[0] : f), "y" === g.axis && (f = this.originalPageX), "x" === g.axis && (d = this.originalPageY));
            return {
                top: d - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : k ? 0 : this.offset.scroll.top),
                left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : k ? 0 : this.offset.scroll.left)
            }
        },
        _clear: function() {
            this._removeClass(this.helper,
                "ui-draggable-dragging");
            this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove();
            this.helper = null;
            this.cancelHelperRemoval = !1;
            this.destroyOnClear && this.destroy()
        },
        _trigger: function(a, b, c) {
            c = c || this._uiHash();
            d.ui.plugin.call(this, a, [b, c, this], !0);
            /^(drag|start|stop)/.test(a) && (this.positionAbs = this._convertPositionTo("absolute"), c.offset = this.positionAbs);
            return d.Widget.prototype._trigger.call(this, a, b, c)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    });
    d.ui.plugin.add("draggable", "connectToSortable", {
        start: function(a, b, c) {
            var e = d.extend({}, b, {
                item: c.element
            });
            c.sortables = [];
            d(c.options.connectToSortable).each(function() {
                var b = d(this).sortable("instance");
                b && !b.options.disabled && (c.sortables.push(b), b.refreshPositions(), b._trigger("activate", a, e))
            })
        },
        stop: function(a, b, c) {
            var e = d.extend({}, b, {
                item: c.element
            });
            c.cancelHelperRemoval = !1;
            d.each(c.sortables, function() {
                this.isOver ? (this.isOver =
                    0, c.cancelHelperRemoval = !0, this.cancelHelperRemoval = !1, this._storedCSS = {
                        position: this.placeholder.css("position"),
                        top: this.placeholder.css("top"),
                        left: this.placeholder.css("left")
                    }, this._mouseStop(a), this.options.helper = this.options._helper) : (this.cancelHelperRemoval = !0, this._trigger("deactivate", a, e))
            })
        },
        drag: function(a, b, c) {
            d.each(c.sortables, function() {
                var e = !1,
                    f = this;
                f.positionAbs = c.positionAbs;
                f.helperProportions = c.helperProportions;
                f.offset.click = c.offset.click;
                f._intersectsWith(f.containerCache) &&
                    (e = !0, d.each(c.sortables, function() {
                        this.positionAbs = c.positionAbs;
                        this.helperProportions = c.helperProportions;
                        this.offset.click = c.offset.click;
                        this !== f && this._intersectsWith(this.containerCache) && d.contains(f.element[0], this.element[0]) && (e = !1);
                        return e
                    }));
                e ? (f.isOver || (f.isOver = 1, c._parent = b.helper.parent(), f.currentItem = b.helper.appendTo(f.element).data("ui-sortable-item", !0), f.options._helper = f.options.helper, f.options.helper = function() {
                    return b.helper[0]
                }, a.target = f.currentItem[0], f._mouseCapture(a, !0), f._mouseStart(a, !0, !0), f.offset.click.top = c.offset.click.top, f.offset.click.left = c.offset.click.left, f.offset.parent.left -= c.offset.parent.left - f.offset.parent.left, f.offset.parent.top -= c.offset.parent.top - f.offset.parent.top, c._trigger("toSortable", a), c.dropped = f.element, d.each(c.sortables, function() {
                    this.refreshPositions()
                }), c.currentItem = c.element, f.fromOutside = c), f.currentItem && (f._mouseDrag(a), b.position = f.position)) : f.isOver && (f.isOver = 0, f.cancelHelperRemoval = !0, f.options._revert = f.options.revert,
                    f.options.revert = !1, f._trigger("out", a, f._uiHash(f)), f._mouseStop(a, !0), f.options.revert = f.options._revert, f.options.helper = f.options._helper, f.placeholder && f.placeholder.remove(), b.helper.appendTo(c._parent), c._refreshOffsets(a), b.position = c._generatePosition(a, !0), c._trigger("fromSortable", a), c.dropped = !1, d.each(c.sortables, function() {
                        this.refreshPositions()
                    }))
            })
        }
    });
    d.ui.plugin.add("draggable", "cursor", {
        start: function(a, b, c) {
            a = d("body");
            c = c.options;
            a.css("cursor") && (c._cursor = a.css("cursor"));
            a.css("cursor",
                c.cursor)
        },
        stop: function(a, b, c) {
            a = c.options;
            a._cursor && d("body").css("cursor", a._cursor)
        }
    });
    d.ui.plugin.add("draggable", "opacity", {
        start: function(a, b, c) {
            a = d(b.helper);
            c = c.options;
            a.css("opacity") && (c._opacity = a.css("opacity"));
            a.css("opacity", c.opacity)
        },
        stop: function(a, b, c) {
            a = c.options;
            a._opacity && d(b.helper).css("opacity", a._opacity)
        }
    });
    d.ui.plugin.add("draggable", "scroll", {
        start: function(a, b, c) {
            c.scrollParentNotHidden || (c.scrollParentNotHidden = c.helper.scrollParent(!1));
            c.scrollParentNotHidden[0] !==
                c.document[0] && "HTML" !== c.scrollParentNotHidden[0].tagName && (c.overflowOffset = c.scrollParentNotHidden.offset())
        },
        drag: function(a, b, c) {
            b = c.options;
            var e = !1,
                f = c.scrollParentNotHidden[0],
                g = c.document[0];
            f !== g && "HTML" !== f.tagName ? (b.axis && "x" === b.axis || (c.overflowOffset.top + f.offsetHeight - a.pageY < b.scrollSensitivity ? f.scrollTop = e = f.scrollTop + b.scrollSpeed : a.pageY - c.overflowOffset.top < b.scrollSensitivity && (f.scrollTop = e = f.scrollTop - b.scrollSpeed)), b.axis && "y" === b.axis || (c.overflowOffset.left + f.offsetWidth -
                a.pageX < b.scrollSensitivity ? f.scrollLeft = e = f.scrollLeft + b.scrollSpeed : a.pageX - c.overflowOffset.left < b.scrollSensitivity && (f.scrollLeft = e = f.scrollLeft - b.scrollSpeed))) : (b.axis && "x" === b.axis || (a.pageY - d(g).scrollTop() < b.scrollSensitivity ? e = d(g).scrollTop(d(g).scrollTop() - b.scrollSpeed) : d(window).height() - (a.pageY - d(g).scrollTop()) < b.scrollSensitivity && (e = d(g).scrollTop(d(g).scrollTop() + b.scrollSpeed))), b.axis && "y" === b.axis || (a.pageX - d(g).scrollLeft() < b.scrollSensitivity ? e = d(g).scrollLeft(d(g).scrollLeft() -
                b.scrollSpeed) : d(window).width() - (a.pageX - d(g).scrollLeft()) < b.scrollSensitivity && (e = d(g).scrollLeft(d(g).scrollLeft() + b.scrollSpeed))));
            !1 !== e && d.ui.ddmanager && !b.dropBehaviour && d.ui.ddmanager.prepareOffsets(c, a)
        }
    });
    d.ui.plugin.add("draggable", "snap", {
        start: function(a, b, c) {
            a = c.options;
            c.snapElements = [];
            d(a.snap.constructor !== String ? a.snap.items || ":data(ui-draggable)" : a.snap).each(function() {
                var a = d(this),
                    b = a.offset();
                this !== c.element[0] && c.snapElements.push({
                    item: this,
                    width: a.outerWidth(),
                    height: a.outerHeight(),
                    top: b.top,
                    left: b.left
                })
            })
        },
        drag: function(a, b, c) {
            var e, f, g, k, n, r, l, m, q, t, x = c.options,
                u = x.snapTolerance,
                y = b.offset.left,
                F = y + c.helperProportions.width,
                D = b.offset.top,
                I = D + c.helperProportions.height;
            for (q = c.snapElements.length - 1; 0 <= q; q--) n = c.snapElements[q].left - c.margins.left, r = n + c.snapElements[q].width, l = c.snapElements[q].top - c.margins.top, m = l + c.snapElements[q].height, F < n - u || y > r + u || I < l - u || D > m + u || !d.contains(c.snapElements[q].item.ownerDocument, c.snapElements[q].item) ? (c.snapElements[q].snapping && c.options.snap.release &&
                c.options.snap.release.call(c.element, a, d.extend(c._uiHash(), {
                    snapItem: c.snapElements[q].item
                })), c.snapElements[q].snapping = !1) : ("inner" !== x.snapMode && (e = Math.abs(l - I) <= u, f = Math.abs(m - D) <= u, g = Math.abs(n - F) <= u, k = Math.abs(r - y) <= u, e && (b.position.top = c._convertPositionTo("relative", {
                    top: l - c.helperProportions.height,
                    left: 0
                }).top), f && (b.position.top = c._convertPositionTo("relative", {
                    top: m,
                    left: 0
                }).top), g && (b.position.left = c._convertPositionTo("relative", {
                    top: 0,
                    left: n - c.helperProportions.width
                }).left), k &&
                (b.position.left = c._convertPositionTo("relative", {
                    top: 0,
                    left: r
                }).left)), t = e || f || g || k, "outer" !== x.snapMode && (e = Math.abs(l - D) <= u, f = Math.abs(m - I) <= u, g = Math.abs(n - y) <= u, k = Math.abs(r - F) <= u, e && (b.position.top = c._convertPositionTo("relative", {
                top: l,
                left: 0
            }).top), f && (b.position.top = c._convertPositionTo("relative", {
                top: m - c.helperProportions.height,
                left: 0
            }).top), g && (b.position.left = c._convertPositionTo("relative", {
                top: 0,
                left: n
            }).left), k && (b.position.left = c._convertPositionTo("relative", {
                top: 0,
                left: r - c.helperProportions.width
            }).left)), !c.snapElements[q].snapping && (e || f || g || k || t) && c.options.snap.snap && c.options.snap.snap.call(c.element, a, d.extend(c._uiHash(), {
                snapItem: c.snapElements[q].item
            })), c.snapElements[q].snapping = e || f || g || k || t)
        }
    });
    d.ui.plugin.add("draggable", "stack", {
        start: function(a, b, c) {
            var e;
            a = d.makeArray(d(c.options.stack)).sort(function(a, b) {
                return (parseInt(d(a).css("zIndex"), 10) || 0) - (parseInt(d(b).css("zIndex"), 10) || 0)
            });
            a.length && (e = parseInt(d(a[0]).css("zIndex"), 10) || 0, d(a).each(function(a) {
                d(this).css("zIndex", e +
                    a)
            }), this.css("zIndex", e + a.length))
        }
    });
    d.ui.plugin.add("draggable", "zIndex", {
        start: function(a, b, c) {
            a = d(b.helper);
            c = c.options;
            a.css("zIndex") && (c._zIndex = a.css("zIndex"));
            a.css("zIndex", c.zIndex)
        },
        stop: function(a, b, c) {
            a = c.options;
            a._zIndex && d(b.helper).css("zIndex", a._zIndex)
        }
    });
    d.widget("ui.resizable", d.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            classes: {
                "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
            },
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _num: function(a) {
            return parseFloat(a) || 0
        },
        _isNumber: function(a) {
            return !isNaN(parseFloat(a))
        },
        _hasScroll: function(a, b) {
            if ("hidden" === d(a).css("overflow")) return !1;
            var c = b && "left" === b ? "scrollLeft" : "scrollTop",
                e;
            if (0 < a[c]) return !0;
            a[c] = 1;
            e = 0 < a[c];
            a[c] = 0;
            return e
        },
        _create: function() {
            var a, b = this.options,
                c = this;
            this._addClass("ui-resizable");
            d.extend(this, {
                _aspectRatio: !!b.aspectRatio,
                aspectRatio: b.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: b.helper || b.ghost || b.animate ? b.helper || "ui-resizable-helper" : null
            });
            this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(d("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                })),
                this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, a = {
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom"),
                    marginLeft: this.originalElement.css("marginLeft")
                }, this.element.css(a), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                })), this.originalElement.css(a), this._proportionallyResize());
            this._setupHandles();
            if (b.autoHide) d(this.element).on("mouseenter", function() {
                b.disabled || (c._removeClass("ui-resizable-autohide"), c._handles.show())
            }).on("mouseleave", function() {
                b.disabled || c.resizing || (c._addClass("ui-resizable-autohide"), c._handles.hide())
            });
            this._mouseInit()
        },
        _destroy: function() {
            this._mouseDestroy();
            var a, b = function(a) {
                d(a).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()
            };
            this.elementIsWrapper && (b(this.element), a = this.element, this.originalElement.css({
                position: a.css("position"),
                width: a.outerWidth(),
                height: a.outerHeight(),
                top: a.css("top"),
                left: a.css("left")
            }).insertAfter(a), a.remove());
            this.originalElement.css("resize", this.originalResizeStyle);
            b(this.originalElement);
            return this
        },
        _setOption: function(a, b) {
            this._super(a, b);
            switch (a) {
                case "handles":
                    this._removeHandles(), this._setupHandles()
            }
        },
        _setupHandles: function() {
            var a = this.options,
                b, c, e, f, g, k = this;
            this.handles = a.handles ||
                (d(".ui-resizable-handle", this.element).length ? {
                    n: ".ui-resizable-n",
                    e: ".ui-resizable-e",
                    s: ".ui-resizable-s",
                    w: ".ui-resizable-w",
                    se: ".ui-resizable-se",
                    sw: ".ui-resizable-sw",
                    ne: ".ui-resizable-ne",
                    nw: ".ui-resizable-nw"
                } : "e,s,se");
            this._handles = d();
            if (this.handles.constructor === String)
                for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), e = this.handles.split(","), this.handles = {}, c = 0; c < e.length; c++) b = d.trim(e[c]), f = "ui-resizable-" + b, g = d("<div>"), this._addClass(g, "ui-resizable-handle " + f), g.css({
                        zIndex: a.zIndex
                    }),
                    this.handles[b] = ".ui-resizable-" + b, this.element.append(g);
            this._renderAxis = function(a) {
                var b, c, e;
                a = a || this.element;
                for (b in this.handles) {
                    if (this.handles[b].constructor === String) this.handles[b] = this.element.children(this.handles[b]).first().show();
                    else if (this.handles[b].jquery || this.handles[b].nodeType) this.handles[b] = d(this.handles[b]), this._on(this.handles[b], {
                        mousedown: k._mouseDown
                    });
                    this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (c = d(this.handles[b],
                        this.element), e = /sw|ne|nw|se|n|s/.test(b) ? c.outerHeight() : c.outerWidth(), c = ["padding", /ne|nw|n/.test(b) ? "Top" : /se|sw|s/.test(b) ? "Bottom" : /^e$/.test(b) ? "Right" : "Left"].join(""), a.css(c, e), this._proportionallyResize());
                    this._handles = this._handles.add(this.handles[b])
                }
            };
            this._renderAxis(this.element);
            this._handles = this._handles.add(this.element.find(".ui-resizable-handle"));
            this._handles.disableSelection();
            this._handles.on("mouseover", function() {
                k.resizing || (this.className && (g = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),
                    k.axis = g && g[1] ? g[1] : "se")
            });
            a.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"))
        },
        _removeHandles: function() {
            this._handles.remove()
        },
        _mouseCapture: function(a) {
            var b, c, e = !1;
            for (b in this.handles)
                if (c = d(this.handles[b])[0], c === a.target || d.contains(c, a.target)) e = !0;
            return !this.options.disabled && e
        },
        _mouseStart: function(a) {
            var b, c, e = this.options,
                f = this.element;
            this.resizing = !0;
            this._renderProxy();
            b = this._num(this.helper.css("left"));
            c = this._num(this.helper.css("top"));
            e.containment &&
                (b += d(e.containment).scrollLeft() || 0, c += d(e.containment).scrollTop() || 0);
            this.offset = this.helper.offset();
            this.position = {
                left: b,
                top: c
            };
            this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {
                width: f.width(),
                height: f.height()
            };
            this.originalSize = this._helper ? {
                width: f.outerWidth(),
                height: f.outerHeight()
            } : {
                width: f.width(),
                height: f.height()
            };
            this.sizeDiff = {
                width: f.outerWidth() - f.width(),
                height: f.outerHeight() - f.height()
            };
            this.originalPosition = {
                left: b,
                top: c
            };
            this.originalMousePosition = {
                left: a.pageX,
                top: a.pageY
            };
            this.aspectRatio = "number" === typeof e.aspectRatio ? e.aspectRatio : this.originalSize.width / this.originalSize.height || 1;
            b = d(".ui-resizable-" + this.axis).css("cursor");
            d("body").css("cursor", "auto" === b ? this.axis + "-resize" : b);
            this._addClass("ui-resizable-resizing");
            this._propagate("start", a);
            return !0
        },
        _mouseDrag: function(a) {
            var b, c = this.originalMousePosition;
            b = a.pageX - c.left || 0;
            var c = a.pageY - c.top || 0,
                e = this._change[this.axis];
            this._updatePrevProperties();
            if (!e) return !1;
            b = e.apply(this, [a, b, c]);
            this._updateVirtualBoundaries(a.shiftKey);
            if (this._aspectRatio || a.shiftKey) b = this._updateRatio(b, a);
            b = this._respectSize(b, a);
            this._updateCache(b);
            this._propagate("resize", a);
            b = this._applyChanges();
            !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize();
            d.isEmptyObject(b) || (this._updatePrevProperties(), this._trigger("resize", a, this.ui()), this._applyChanges());
            return !1
        },
        _mouseStop: function(a) {
            this.resizing = !1;
            var b, c, e, f = this.options;
            this._helper && (b = this._proportionallyResizeElements,
                b = (c = b.length && /textarea/i.test(b[0].nodeName)) && this._hasScroll(b[0], "left") ? 0 : this.sizeDiff.height, c = c ? 0 : this.sizeDiff.width, c = {
                    width: this.helper.width() - c,
                    height: this.helper.height() - b
                }, b = parseFloat(this.element.css("left")) + (this.position.left - this.originalPosition.left) || null, e = parseFloat(this.element.css("top")) + (this.position.top - this.originalPosition.top) || null, f.animate || this.element.css(d.extend(c, {
                    top: e,
                    left: b
                })), this.helper.height(this.size.height), this.helper.width(this.size.width), this._helper &&
                !f.animate && this._proportionallyResize());
            d("body").css("cursor", "auto");
            this._removeClass("ui-resizable-resizing");
            this._propagate("stop", a);
            this._helper && this.helper.remove();
            return !1
        },
        _updatePrevProperties: function() {
            this.prevPosition = {
                top: this.position.top,
                left: this.position.left
            };
            this.prevSize = {
                width: this.size.width,
                height: this.size.height
            }
        },
        _applyChanges: function() {
            var a = {};
            this.position.top !== this.prevPosition.top && (a.top = this.position.top + "px");
            this.position.left !== this.prevPosition.left &&
                (a.left = this.position.left + "px");
            this.size.width !== this.prevSize.width && (a.width = this.size.width + "px");
            this.size.height !== this.prevSize.height && (a.height = this.size.height + "px");
            this.helper.css(a);
            return a
        },
        _updateVirtualBoundaries: function(a) {
            var b, c, d, f;
            f = this.options;
            f = {
                minWidth: this._isNumber(f.minWidth) ? f.minWidth : 0,
                maxWidth: this._isNumber(f.maxWidth) ? f.maxWidth : Infinity,
                minHeight: this._isNumber(f.minHeight) ? f.minHeight : 0,
                maxHeight: this._isNumber(f.maxHeight) ? f.maxHeight : Infinity
            };
            if (this._aspectRatio ||
                a) a = f.minHeight * this.aspectRatio, c = f.minWidth / this.aspectRatio, b = f.maxHeight * this.aspectRatio, d = f.maxWidth / this.aspectRatio, a > f.minWidth && (f.minWidth = a), c > f.minHeight && (f.minHeight = c), b < f.maxWidth && (f.maxWidth = b), d < f.maxHeight && (f.maxHeight = d);
            this._vBoundaries = f
        },
        _updateCache: function(a) {
            this.offset = this.helper.offset();
            this._isNumber(a.left) && (this.position.left = a.left);
            this._isNumber(a.top) && (this.position.top = a.top);
            this._isNumber(a.height) && (this.size.height = a.height);
            this._isNumber(a.width) &&
                (this.size.width = a.width)
        },
        _updateRatio: function(a) {
            var b = this.position,
                c = this.size,
                d = this.axis;
            this._isNumber(a.height) ? a.width = a.height * this.aspectRatio : this._isNumber(a.width) && (a.height = a.width / this.aspectRatio);
            "sw" === d && (a.left = b.left + (c.width - a.width), a.top = null);
            "nw" === d && (a.top = b.top + (c.height - a.height), a.left = b.left + (c.width - a.width));
            return a
        },
        _respectSize: function(a) {
            var b = this._vBoundaries,
                c = this.axis,
                d = this._isNumber(a.width) && b.maxWidth && b.maxWidth < a.width,
                f = this._isNumber(a.height) &&
                b.maxHeight && b.maxHeight < a.height,
                g = this._isNumber(a.width) && b.minWidth && b.minWidth > a.width,
                k = this._isNumber(a.height) && b.minHeight && b.minHeight > a.height,
                n = this.originalPosition.left + this.originalSize.width,
                r = this.originalPosition.top + this.originalSize.height,
                l = /sw|nw|w/.test(c),
                c = /nw|ne|n/.test(c);
            g && (a.width = b.minWidth);
            k && (a.height = b.minHeight);
            d && (a.width = b.maxWidth);
            f && (a.height = b.maxHeight);
            g && l && (a.left = n - b.minWidth);
            d && l && (a.left = n - b.maxWidth);
            k && c && (a.top = r - b.minHeight);
            f && c && (a.top = r - b.maxHeight);
            a.width || a.height || a.left || !a.top ? a.width || a.height || a.top || !a.left || (a.left = null) : a.top = null;
            return a
        },
        _getPaddingPlusBorderDimensions: function(a) {
            var b = 0,
                c = [],
                d = [a.css("borderTopWidth"), a.css("borderRightWidth"), a.css("borderBottomWidth"), a.css("borderLeftWidth")];
            for (a = [a.css("paddingTop"), a.css("paddingRight"), a.css("paddingBottom"), a.css("paddingLeft")]; 4 > b; b++) c[b] = parseFloat(d[b]) || 0, c[b] += parseFloat(a[b]) || 0;
            return {
                height: c[0] + c[2],
                width: c[1] + c[3]
            }
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length)
                for (var a,
                        b = 0, c = this.helper || this.element; b < this._proportionallyResizeElements.length; b++) a = this._proportionallyResizeElements[b], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(a)), a.css({
                    height: c.height() - this.outerDimensions.height || 0,
                    width: c.width() - this.outerDimensions.width || 0
                })
        },
        _renderProxy: function() {
            var a = this.options;
            this.elementOffset = this.element.offset();
            this._helper ? (this.helper = this.helper || d("<div style='overflow:hidden;'></div>"), this._addClass(this.helper,
                this._helper), this.helper.css({
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++a.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function(a, b) {
                return {
                    width: this.originalSize.width + b
                }
            },
            w: function(a, b) {
                return {
                    left: this.originalPosition.left + b,
                    width: this.originalSize.width - b
                }
            },
            n: function(a, b, c) {
                return {
                    top: this.originalPosition.top + c,
                    height: this.originalSize.height -
                        c
                }
            },
            s: function(a, b, c) {
                return {
                    height: this.originalSize.height + c
                }
            },
            se: function(a, b, c) {
                return d.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [a, b, c]))
            },
            sw: function(a, b, c) {
                return d.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [a, b, c]))
            },
            ne: function(a, b, c) {
                return d.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [a, b, c]))
            },
            nw: function(a, b, c) {
                return d.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [a, b, c]))
            }
        },
        _propagate: function(a, b) {
            d.ui.plugin.call(this, a, [b, this.ui()]);
            "resize" !== a && this._trigger(a, b, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    });
    d.ui.plugin.add("resizable", "animate", {
        stop: function(a) {
            var b = d(this).resizable("instance"),
                c = b.options,
                e = b._proportionallyResizeElements,
                f = e.length && /textarea/i.test(e[0].nodeName),
                g = f && b._hasScroll(e[0], "left") ? 0 : b.sizeDiff.height,
                f = {
                    width: b.size.width - (f ? 0 : b.sizeDiff.width),
                    height: b.size.height - g
                },
                g = parseFloat(b.element.css("left")) + (b.position.left - b.originalPosition.left) || null,
                k = parseFloat(b.element.css("top")) + (b.position.top - b.originalPosition.top) || null;
            b.element.animate(d.extend(f, k && g ? {
                top: k,
                left: g
            } : {}), {
                duration: c.animateDuration,
                easing: c.animateEasing,
                step: function() {
                    var c = {
                        width: parseFloat(b.element.css("width")),
                        height: parseFloat(b.element.css("height")),
                        top: parseFloat(b.element.css("top")),
                        left: parseFloat(b.element.css("left"))
                    };
                    e && e.length && d(e[0]).css({
                        width: c.width,
                        height: c.height
                    });
                    b._updateCache(c);
                    b._propagate("resize", a)
                }
            })
        }
    });
    d.ui.plugin.add("resizable", "containment", {
        start: function() {
            var a, b, c, e, f, g = d(this).resizable("instance"),
                k = g.element;
            c = g.options.containment;
            if (k = c instanceof d ? c.get(0) : /parent/.test(c) ? k.parent().get(0) : c) g.containerElement = d(k), /document/.test(c) || c === document ? (g.containerOffset = {
                left: 0,
                top: 0
            }, g.containerPosition = {
                left: 0,
                top: 0
            }, g.parentData = {
                element: d(document),
                left: 0,
                top: 0,
                width: d(document).width(),
                height: d(document).height() || document.body.parentNode.scrollHeight
            }) : (a = d(k), b = [], d(["Top", "Right", "Left", "Bottom"]).each(function(c, d) {
                b[c] = g._num(a.css("padding" + d))
            }), g.containerOffset = a.offset(), g.containerPosition = a.position(), g.containerSize = {
                height: a.innerHeight() - b[3],
                width: a.innerWidth() - b[1]
            }, c = g.containerOffset, e = g.containerSize.height, f = g.containerSize.width, f = g._hasScroll(k, "left") ? k.scrollWidth : f, e = g._hasScroll(k) ? k.scrollHeight : e, g.parentData = {
                element: k,
                left: c.left,
                top: c.top,
                width: f,
                height: e
            })
        },
        resize: function(a) {
            var b, c, e, f = d(this).resizable("instance");
            b = f.options;
            c = f.containerOffset;
            e = f.position;
            a = f._aspectRatio || a.shiftKey;
            var g = {
                    top: 0,
                    left: 0
                },
                k = f.containerElement,
                n = !0;
            k[0] !== document && /static/.test(k.css("position")) && (g = c);
            e.left < (f._helper ? c.left : 0) && (f.size.width += f._helper ? f.position.left - c.left : f.position.left - g.left, a && (f.size.height = f.size.width / f.aspectRatio, n = !1), f.position.left = b.helper ? c.left : 0);
            e.top < (f._helper ? c.top :
                0) && (f.size.height += f._helper ? f.position.top - c.top : f.position.top, a && (f.size.width = f.size.height * f.aspectRatio, n = !1), f.position.top = f._helper ? c.top : 0);
            b = f.containerElement.get(0) === f.element.parent().get(0);
            e = /relative|absolute/.test(f.containerElement.css("position"));
            b && e ? (f.offset.left = f.parentData.left + f.position.left, f.offset.top = f.parentData.top + f.position.top) : (f.offset.left = f.element.offset().left, f.offset.top = f.element.offset().top);
            b = Math.abs(f.sizeDiff.width + (f._helper ? f.offset.left - g.left :
                f.offset.left - c.left));
            c = Math.abs(f.sizeDiff.height + (f._helper ? f.offset.top - g.top : f.offset.top - c.top));
            b + f.size.width >= f.parentData.width && (f.size.width = f.parentData.width - b, a && (f.size.height = f.size.width / f.aspectRatio, n = !1));
            c + f.size.height >= f.parentData.height && (f.size.height = f.parentData.height - c, a && (f.size.width = f.size.height * f.aspectRatio, n = !1));
            n || (f.position.left = f.prevPosition.left, f.position.top = f.prevPosition.top, f.size.width = f.prevSize.width, f.size.height = f.prevSize.height)
        },
        stop: function() {
            var a =
                d(this).resizable("instance"),
                b = a.options,
                c = a.containerOffset,
                e = a.containerPosition,
                f = a.containerElement,
                g = d(a.helper),
                k = g.offset(),
                n = g.outerWidth() - a.sizeDiff.width,
                g = g.outerHeight() - a.sizeDiff.height;
            a._helper && !b.animate && /relative/.test(f.css("position")) && d(this).css({
                left: k.left - e.left - c.left,
                width: n,
                height: g
            });
            a._helper && !b.animate && /static/.test(f.css("position")) && d(this).css({
                left: k.left - e.left - c.left,
                width: n,
                height: g
            })
        }
    });
    d.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var a =
                d(this).resizable("instance").options;
            d(a.alsoResize).each(function() {
                var a = d(this);
                a.data("ui-resizable-alsoresize", {
                    width: parseFloat(a.width()),
                    height: parseFloat(a.height()),
                    left: parseFloat(a.css("left")),
                    top: parseFloat(a.css("top"))
                })
            })
        },
        resize: function(a, b) {
            var c = d(this).resizable("instance"),
                e = c.originalSize,
                f = c.originalPosition,
                g = {
                    height: c.size.height - e.height || 0,
                    width: c.size.width - e.width || 0,
                    top: c.position.top - f.top || 0,
                    left: c.position.left - f.left || 0
                };
            d(c.options.alsoResize).each(function() {
                var a =
                    d(this),
                    c = d(this).data("ui-resizable-alsoresize"),
                    e = {},
                    f = a.parents(b.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                d.each(f, function(a, b) {
                    var d = (c[b] || 0) + (g[b] || 0);
                    d && 0 <= d && (e[b] = d || null)
                });
                a.css(e)
            })
        },
        stop: function() {
            d(this).removeData("ui-resizable-alsoresize")
        }
    });
    d.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var a = d(this).resizable("instance"),
                b = a.size;
            a.ghost = a.originalElement.clone();
            a.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: b.height,
                width: b.width,
                margin: 0,
                left: 0,
                top: 0
            });
            a._addClass(a.ghost, "ui-resizable-ghost");
            !1 !== d.uiBackCompat && "string" === typeof a.options.ghost && a.ghost.addClass(this.options.ghost);
            a.ghost.appendTo(a.helper)
        },
        resize: function() {
            var a = d(this).resizable("instance");
            a.ghost && a.ghost.css({
                position: "relative",
                height: a.size.height,
                width: a.size.width
            })
        },
        stop: function() {
            var a = d(this).resizable("instance");
            a.ghost && a.helper && a.helper.get(0).removeChild(a.ghost.get(0))
        }
    });
    d.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var a,
                b = d(this).resizable("instance"),
                c = b.options,
                e = b.size,
                f = b.originalSize,
                g = b.originalPosition,
                k = b.axis,
                n = "number" === typeof c.grid ? [c.grid, c.grid] : c.grid,
                l = n[0] || 1,
                m = n[1] || 1,
                q = Math.round((e.width - f.width) / l) * l,
                e = Math.round((e.height - f.height) / m) * m,
                t = f.width + q,
                u = f.height + e,
                x = c.maxWidth && c.maxWidth < t,
                y = c.maxHeight && c.maxHeight < u,
                F = c.minWidth && c.minWidth > t,
                I = c.minHeight && c.minHeight > u;
            c.grid = n;
            F && (t += l);
            I && (u += m);
            x && (t -= l);
            y && (u -= m);
            if (/^(se|s|e)$/.test(k)) b.size.width = t, b.size.height = u;
            else if (/^(ne)$/.test(k)) b.size.width =
                t, b.size.height = u, b.position.top = g.top - e;
            else if (/^(sw)$/.test(k)) b.size.width = t, b.size.height = u, b.position.left = g.left - q;
            else {
                if (0 >= u - m || 0 >= t - l) a = b._getPaddingPlusBorderDimensions(this);
                0 < u - m ? (b.size.height = u, b.position.top = g.top - e) : (u = m - a.height, b.size.height = u, b.position.top = g.top + f.height - u);
                0 < t - l ? (b.size.width = t, b.position.left = g.left - q) : (t = l - a.width, b.size.width = t, b.position.left = g.left + f.width - t)
            }
        }
    });
    d.widget("ui.dialog", {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            classes: {
                "ui-dialog": "ui-corner-all",
                "ui-dialog-titlebar": "ui-corner-all"
            },
            closeOnEscape: !0,
            closeText: "Close",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(a) {
                    var b = d(this).css(a).offset().top;
                    0 > b && d(this).css("top", a.top - b)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        sizeRelatedOptions: {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        resizableRelatedOptions: {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        },
        _create: function() {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            };
            this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            };
            this.originalTitle =
                this.element.attr("title");
            null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle);
            this.options.disabled && (this.options.disabled = !1);
            this._createWrapper();
            this.element.show().removeAttr("title").appendTo(this.uiDialog);
            this._addClass("ui-dialog-content", "ui-widget-content");
            this._createTitlebar();
            this._createButtonPane();
            this.options.draggable && d.fn.draggable && this._makeDraggable();
            this.options.resizable && d.fn.resizable && this._makeResizable();
            this._isOpen = !1;
            this._trackFocus()
        },
        _init: function() {
            this.options.autoOpen && this.open()
        },
        _appendTo: function() {
            var a = this.options.appendTo;
            return a && (a.jquery || a.nodeType) ? d(a) : this.document.find(a || "body").eq(0)
        },
        _destroy: function() {
            var a, b = this.originalPosition;
            this._untrackInstance();
            this._destroyOverlay();
            this.element.removeUniqueId().css(this.originalCss).detach();
            this.uiDialog.remove();
            this.originalTitle && this.element.attr("title", this.originalTitle);
            a = b.parent.children().eq(b.index);
            a.length && a[0] !== this.element[0] ? a.before(this.element) :
                b.parent.append(this.element)
        },
        widget: function() {
            return this.uiDialog
        },
        disable: d.noop,
        enable: d.noop,
        close: function(a) {
            var b = this;
            this._isOpen && !1 !== this._trigger("beforeClose", a) && (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || d.ui.safeBlur(d.ui.safeActiveElement(this.document[0])), this._hide(this.uiDialog, this.options.hide, function() {
                b._trigger("close", a)
            }))
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function() {
            this._moveToTop()
        },
        _moveToTop: function(a, b) {
            var c = !1,
                e = this.uiDialog.siblings(".ui-front:visible").map(function() {
                    return +d(this).css("z-index")
                }).get(),
                e = Math.max.apply(null, e);
            e >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", e + 1), c = !0);
            c && !b && this._trigger("focus", a);
            return c
        },
        open: function() {
            var a = this;
            this._isOpen ? this._moveToTop() && this._focusTabbable() : (this._isOpen = !0, this.opener = d(d.ui.safeActiveElement(this.document[0])), this._size(), this._position(), this._createOverlay(),
                this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function() {
                    a._focusTabbable();
                    a._trigger("focus")
                }), this._makeFocusTarget(), this._trigger("open"))
        },
        _focusTabbable: function() {
            var a = this._focusedElement;
            a || (a = this.element.find("[autofocus]"));
            a.length || (a = this.element.find(":tabbable"));
            a.length || (a = this.uiDialogButtonPane.find(":tabbable"));
            a.length || (a = this.uiDialogTitlebarClose.filter(":tabbable"));
            a.length ||
                (a = this.uiDialog);
            a.eq(0).trigger("focus")
        },
        _keepFocus: function(a) {
            function b() {
                var a = d.ui.safeActiveElement(this.document[0]);
                this.uiDialog[0] === a || d.contains(this.uiDialog[0], a) || this._focusTabbable()
            }
            a.preventDefault();
            b.call(this);
            this._delay(b)
        },
        _createWrapper: function() {
            this.uiDialog = d("<div>").hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo());
            this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front");
            this._on(this.uiDialog, {
                keydown: function(a) {
                    if (this.options.closeOnEscape &&
                        !a.isDefaultPrevented() && a.keyCode && a.keyCode === d.ui.keyCode.ESCAPE) a.preventDefault(), this.close(a);
                    else if (a.keyCode === d.ui.keyCode.TAB && !a.isDefaultPrevented()) {
                        var b = this.uiDialog.find(":tabbable"),
                            c = b.filter(":first"),
                            e = b.filter(":last");
                        a.target !== e[0] && a.target !== this.uiDialog[0] || a.shiftKey ? a.target !== c[0] && a.target !== this.uiDialog[0] || !a.shiftKey || (this._delay(function() {
                            e.trigger("focus")
                        }), a.preventDefault()) : (this._delay(function() {
                            c.trigger("focus")
                        }), a.preventDefault())
                    }
                },
                mousedown: function(a) {
                    this._moveToTop(a) &&
                        this._focusTabbable()
                }
            });
            this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id")
            })
        },
        _createTitlebar: function() {
            var a;
            this.uiDialogTitlebar = d("<div>");
            this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix");
            this._on(this.uiDialogTitlebar, {
                mousedown: function(a) {
                    d(a.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus")
                }
            });
            this.uiDialogTitlebarClose = d("<button type='button'></button>").button({
                label: d("<a>").text(this.options.closeText).html(),
                icon: "ui-icon-closethick",
                showLabel: !1
            }).appendTo(this.uiDialogTitlebar);
            this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close");
            this._on(this.uiDialogTitlebarClose, {
                click: function(a) {
                    a.preventDefault();
                    this.close(a)
                }
            });
            a = d("<span>").uniqueId().prependTo(this.uiDialogTitlebar);
            this._addClass(a, "ui-dialog-title");
            this._title(a);
            this.uiDialogTitlebar.prependTo(this.uiDialog);
            this.uiDialog.attr({
                "aria-labelledby": a.attr("id")
            })
        },
        _title: function(a) {
            this.options.title ? a.text(this.options.title) :
                a.html("&#160;")
        },
        _createButtonPane: function() {
            this.uiDialogButtonPane = d("<div>");
            this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix");
            this.uiButtonSet = d("<div>").appendTo(this.uiDialogButtonPane);
            this._addClass(this.uiButtonSet, "ui-dialog-buttonset");
            this._createButtons()
        },
        _createButtons: function() {
            var a = this,
                b = this.options.buttons;
            this.uiDialogButtonPane.remove();
            this.uiButtonSet.empty();
            d.isEmptyObject(b) || d.isArray(b) && !b.length ? this._removeClass(this.uiDialog,
                "ui-dialog-buttons") : (d.each(b, function(b, e) {
                    var c, g;
                    e = d.isFunction(e) ? {
                        click: e,
                        text: b
                    } : e;
                    e = d.extend({
                        type: "button"
                    }, e);
                    c = e.click;
                    g = {
                        icon: e.icon,
                        iconPosition: e.iconPosition,
                        showLabel: e.showLabel,
                        icons: e.icons,
                        text: e.text
                    };
                    delete e.click;
                    delete e.icon;
                    delete e.iconPosition;
                    delete e.showLabel;
                    delete e.icons;
                    "boolean" === typeof e.text && delete e.text;
                    d("<button></button>", e).button(g).appendTo(a.uiButtonSet).on("click", function() {
                        c.apply(a.element[0], arguments)
                    })
                }), this._addClass(this.uiDialog, "ui-dialog-buttons"),
                this.uiDialogButtonPane.appendTo(this.uiDialog))
        },
        _makeDraggable: function() {
            function a(a) {
                return {
                    position: a.position,
                    offset: a.offset
                }
            }
            var b = this,
                c = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(c, f) {
                    b._addClass(d(this), "ui-dialog-dragging");
                    b._blockFrames();
                    b._trigger("dragStart", c, a(f))
                },
                drag: function(c, d) {
                    b._trigger("drag", c, a(d))
                },
                stop: function(e, f) {
                    var g = f.offset.left - b.document.scrollLeft(),
                        k = f.offset.top - b.document.scrollTop();
                    c.position = {
                        my: "left top",
                        at: "left" + (0 <= g ? "+" : "") + g + " top" + (0 <= k ? "+" : "") + k,
                        of: b.window
                    };
                    b._removeClass(d(this), "ui-dialog-dragging");
                    b._unblockFrames();
                    b._trigger("dragStop", e, a(f))
                }
            })
        },
        _makeResizable: function() {
            function a(a) {
                return {
                    originalPosition: a.originalPosition,
                    originalSize: a.originalSize,
                    position: a.position,
                    size: a.size
                }
            }
            var b = this,
                c = this.options,
                e = c.resizable,
                f = this.uiDialog.css("position"),
                e = "string" === typeof e ? e : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: c.maxWidth,
                maxHeight: c.maxHeight,
                minWidth: c.minWidth,
                minHeight: this._minHeight(),
                handles: e,
                start: function(c, e) {
                    b._addClass(d(this), "ui-dialog-resizing");
                    b._blockFrames();
                    b._trigger("resizeStart", c, a(e))
                },
                resize: function(c, d) {
                    b._trigger("resize", c, a(d))
                },
                stop: function(e, f) {
                    var g = b.uiDialog.offset(),
                        k = g.left - b.document.scrollLeft(),
                        g = g.top - b.document.scrollTop();
                    c.height = b.uiDialog.height();
                    c.width = b.uiDialog.width();
                    c.position = {
                        my: "left top",
                        at: "left" + (0 <= k ? "+" : "") + k + " top" + (0 <= g ? "+" : "") + g,
                        of: b.window
                    };
                    b._removeClass(d(this), "ui-dialog-resizing");
                    b._unblockFrames();
                    b._trigger("resizeStop", e, a(f))
                }
            }).css("position", f)
        },
        _trackFocus: function() {
            this._on(this.widget(), {
                focusin: function(a) {
                    this._makeFocusTarget();
                    this._focusedElement = d(a.target)
                }
            })
        },
        _makeFocusTarget: function() {
            this._untrackInstance();
            this._trackingInstances().unshift(this)
        },
        _untrackInstance: function() {
            var a = this._trackingInstances(),
                b = d.inArray(this, a); - 1 !== b && a.splice(b, 1)
        },
        _trackingInstances: function() {
            var a = this.document.data("ui-dialog-instances");
            a || (a = [], this.document.data("ui-dialog-instances", a));
            return a
        },
        _minHeight: function() {
            var a = this.options;
            return "auto" === a.height ? a.minHeight : Math.min(a.minHeight, a.height)
        },
        _position: function() {
            var a = this.uiDialog.is(":visible");
            a || this.uiDialog.show();
            this.uiDialog.position(this.options.position);
            a || this.uiDialog.hide()
        },
        _setOptions: function(a) {
            var b = this,
                c = !1,
                e = {};
            d.each(a, function(a, d) {
                b._setOption(a, d);
                a in b.sizeRelatedOptions &&
                    (c = !0);
                a in b.resizableRelatedOptions && (e[a] = d)
            });
            c && (this._size(), this._position());
            this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", e)
        },
        _setOption: function(a, b) {
            var c, e = this.uiDialog;
            "disabled" !== a && (this._super(a, b), "appendTo" === a && this.uiDialog.appendTo(this._appendTo()), "buttons" === a && this._createButtons(), "closeText" === a && this.uiDialogTitlebarClose.button({
                label: d("<a>").text("" + this.options.closeText).html()
            }), "draggable" === a && ((c = e.is(":data(ui-draggable)")) && !b &&
                e.draggable("destroy"), !c && b && this._makeDraggable()), "position" === a && this._position(), "resizable" === a && ((c = e.is(":data(ui-resizable)")) && !b && e.resizable("destroy"), c && "string" === typeof b && e.resizable("option", "handles", b), c || !1 === b || this._makeResizable()), "title" === a && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },
        _size: function() {
            var a, b, c, d = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            });
            d.minWidth > d.width && (d.width = d.minWidth);
            a = this.uiDialog.css({
                height: "auto",
                width: d.width
            }).outerHeight();
            b = Math.max(0, d.minHeight - a);
            c = "number" === typeof d.maxHeight ? Math.max(0, d.maxHeight - a) : "none";
            "auto" === d.height ? this.element.css({
                minHeight: b,
                maxHeight: c,
                height: "auto"
            }) : this.element.height(Math.max(0, d.height - a));
            this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function() {
            this.iframeBlocks = this.document.find("iframe").map(function() {
                var a = d(this);
                return d("<div>").css({
                    position: "absolute",
                    width: a.outerWidth(),
                    height: a.outerHeight()
                }).appendTo(a.parent()).offset(a.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _allowInteraction: function(a) {
            return d(a.target).closest(".ui-dialog").length ? !0 : !!d(a.target).closest(".ui-datepicker").length
        },
        _createOverlay: function() {
            if (this.options.modal) {
                var a = !0;
                this._delay(function() {
                    a = !1
                });
                this.document.data("ui-dialog-overlays") || this._on(this.document, {
                    focusin: function(b) {
                        a || this._allowInteraction(b) ||
                            (b.preventDefault(), this._trackingInstances()[0]._focusTabbable())
                    }
                });
                this.overlay = d("<div>").appendTo(this._appendTo());
                this._addClass(this.overlay, null, "ui-widget-overlay ui-front");
                this._on(this.overlay, {
                    mousedown: "_keepFocus"
                });
                this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
            }
        },
        _destroyOverlay: function() {
            if (this.options.modal && this.overlay) {
                var a = this.document.data("ui-dialog-overlays") - 1;
                a ? this.document.data("ui-dialog-overlays", a) : (this._off(this.document,
                    "focusin"), this.document.removeData("ui-dialog-overlays"));
                this.overlay.remove();
                this.overlay = null
            }
        }
    });
    !1 !== d.uiBackCompat && d.widget("ui.dialog", d.ui.dialog, {
        options: {
            dialogClass: ""
        },
        _createWrapper: function() {
            this._super();
            this.uiDialog.addClass(this.options.dialogClass)
        },
        _setOption: function(a, b) {
            "dialogClass" === a && this.uiDialog.removeClass(this.options.dialogClass).addClass(b);
            this._superApply(arguments)
        }
    });
    d.widget("ui.droppable", {
        version: "1.12.1",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            addClasses: !0,
            greedy: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {
            var a, b = this.options,
                c = b.accept;
            this.isover = !1;
            this.isout = !0;
            this.accept = d.isFunction(c) ? c : function(a) {
                return a.is(c)
            };
            this.proportions = function() {
                if (arguments.length) a = arguments[0];
                else return a ? a : a = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight
                }
            };
            this._addToManager(b.scope);
            b.addClasses && this._addClass("ui-droppable")
        },
        _addToManager: function(a) {
            d.ui.ddmanager.droppables[a] =
                d.ui.ddmanager.droppables[a] || [];
            d.ui.ddmanager.droppables[a].push(this)
        },
        _splice: function(a) {
            for (var b = 0; b < a.length; b++) a[b] === this && a.splice(b, 1)
        },
        _destroy: function() {
            this._splice(d.ui.ddmanager.droppables[this.options.scope])
        },
        _setOption: function(a, b) {
            "accept" === a ? this.accept = d.isFunction(b) ? b : function(a) {
                return a.is(b)
            } : "scope" === a && (this._splice(d.ui.ddmanager.droppables[this.options.scope]), this._addToManager(b));
            this._super(a, b)
        },
        _activate: function(a) {
            var b = d.ui.ddmanager.current;
            this._addActiveClass();
            b && this._trigger("activate", a, this.ui(b))
        },
        _deactivate: function(a) {
            var b = d.ui.ddmanager.current;
            this._removeActiveClass();
            b && this._trigger("deactivate", a, this.ui(b))
        },
        _over: function(a) {
            var b = d.ui.ddmanager.current;
            b && (b.currentItem || b.element)[0] !== this.element[0] && this.accept.call(this.element[0], b.currentItem || b.element) && (this._addHoverClass(), this._trigger("over", a, this.ui(b)))
        },
        _out: function(a) {
            var b = d.ui.ddmanager.current;
            b && (b.currentItem || b.element)[0] !== this.element[0] && this.accept.call(this.element[0],
                b.currentItem || b.element) && (this._removeHoverClass(), this._trigger("out", a, this.ui(b)))
        },
        _drop: function(a, b) {
            var c = b || d.ui.ddmanager.current,
                e = !1;
            if (!c || (c.currentItem || c.element)[0] === this.element[0]) return !1;
            this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var b = d(this).droppable("instance");
                if (b.options.greedy && !b.options.disabled && b.options.scope === c.options.scope && b.accept.call(b.element[0], c.currentItem || c.element) && ca(c, d.extend(b, {
                            offset: b.element.offset()
                        }),
                        b.options.tolerance, a)) return e = !0, !1
            });
            return e ? !1 : this.accept.call(this.element[0], c.currentItem || c.element) ? (this._removeActiveClass(), this._removeHoverClass(), this._trigger("drop", a, this.ui(c)), this.element) : !1
        },
        ui: function(a) {
            return {
                draggable: a.currentItem || a.element,
                helper: a.helper,
                position: a.position,
                offset: a.positionAbs
            }
        },
        _addHoverClass: function() {
            this._addClass("ui-droppable-hover")
        },
        _removeHoverClass: function() {
            this._removeClass("ui-droppable-hover")
        },
        _addActiveClass: function() {
            this._addClass("ui-droppable-active")
        },
        _removeActiveClass: function() {
            this._removeClass("ui-droppable-active")
        }
    });
    var ca = d.ui.intersect = function() {
        return function(a, b, c, d) {
            if (!b.offset) return !1;
            var e = (a.positionAbs || a.position.absolute).left + a.margins.left,
                g = (a.positionAbs || a.position.absolute).top + a.margins.top,
                k = e + a.helperProportions.width,
                n = g + a.helperProportions.height,
                l = b.offset.left,
                m = b.offset.top,
                q = l + b.proportions().width,
                t = m + b.proportions().height;
            switch (c) {
                case "fit":
                    return l <= e && k <= q && m <= g && n <= t;
                case "intersect":
                    return l < e + a.helperProportions.width /
                        2 && k - a.helperProportions.width / 2 < q && m < g + a.helperProportions.height / 2 && n - a.helperProportions.height / 2 < t;
                case "pointer":
                    a = d.pageY;
                    c = b.proportions().height;
                    if (m = a >= m && a < m + c) d = d.pageX, b = b.proportions().width, m = d >= l && d < l + b;
                    return m;
                case "touch":
                    return (g >= m && g <= t || n >= m && n <= t || g < m && n > t) && (e >= l && e <= q || k >= l && k <= q || e < l && k > q);
                default:
                    return !1
            }
        }
    }();
    d.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function(a, b) {
            var c, e, f = d.ui.ddmanager.droppables[a.options.scope] || [],
                g = b ? b.type : null,
                k = (a.currentItem ||
                    a.element).find(":data(ui-droppable)").addBack();
            c = 0;
            a: for (; c < f.length; c++)
                if (!(f[c].options.disabled || a && !f[c].accept.call(f[c].element[0], a.currentItem || a.element))) {
                    for (e = 0; e < k.length; e++)
                        if (k[e] === f[c].element[0]) {
                            f[c].proportions().height = 0;
                            continue a
                        }
                    f[c].visible = "none" !== f[c].element.css("display");
                    f[c].visible && ("mousedown" === g && f[c]._activate.call(f[c], b), f[c].offset = f[c].element.offset(), f[c].proportions({
                        width: f[c].element[0].offsetWidth,
                        height: f[c].element[0].offsetHeight
                    }))
                }
        },
        drop: function(a,
            b) {
            var c = !1;
            d.each((d.ui.ddmanager.droppables[a.options.scope] || []).slice(), function() {
                this.options && (!this.options.disabled && this.visible && ca(a, this, this.options.tolerance, b) && (c = this._drop.call(this, b) || c), !this.options.disabled && this.visible && this.accept.call(this.element[0], a.currentItem || a.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, b)))
            });
            return c
        },
        dragStart: function(a, b) {
            a.element.parentsUntil("body").on("scroll.droppable", function() {
                a.options.refreshPositions || d.ui.ddmanager.prepareOffsets(a,
                    b)
            })
        },
        drag: function(a, b) {
            a.options.refreshPositions && d.ui.ddmanager.prepareOffsets(a, b);
            d.each(d.ui.ddmanager.droppables[a.options.scope] || [], function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var c, e, f;
                    f = ca(a, this, this.options.tolerance, b);
                    var g = !f && this.isover ? "isout" : f && !this.isover ? "isover" : null;
                    g && (this.options.greedy && (e = this.options.scope, f = this.element.parents(":data(ui-droppable)").filter(function() {
                        return d(this).droppable("instance").options.scope === e
                    }), f.length && (c =
                        d(f[0]).droppable("instance"), c.greedyChild = "isover" === g)), c && "isover" === g && (c.isover = !1, c.isout = !0, c._out.call(c, b)), this[g] = !0, this["isout" === g ? "isover" : "isout"] = !1, this["isover" === g ? "_over" : "_out"].call(this, b), c && "isout" === g && (c.isout = !1, c.isover = !0, c._over.call(c, b)))
                }
            })
        },
        dragStop: function(a, b) {
            a.element.parentsUntil("body").off("scroll.droppable");
            a.options.refreshPositions || d.ui.ddmanager.prepareOffsets(a, b)
        }
    };
    !1 !== d.uiBackCompat && d.widget("ui.droppable", d.ui.droppable, {
        options: {
            hoverClass: !1,
            activeClass: !1
        },
        _addActiveClass: function() {
            this._super();
            this.options.activeClass && this.element.addClass(this.options.activeClass)
        },
        _removeActiveClass: function() {
            this._super();
            this.options.activeClass && this.element.removeClass(this.options.activeClass)
        },
        _addHoverClass: function() {
            this._super();
            this.options.hoverClass && this.element.addClass(this.options.hoverClass)
        },
        _removeHoverClass: function() {
            this._super();
            this.options.hoverClass && this.element.removeClass(this.options.hoverClass)
        }
    });
    d.widget("ui.progressbar", {
        version: "1.12.1",
        options: {
            classes: {
                "ui-progressbar": "ui-corner-all",
                "ui-progressbar-value": "ui-corner-left",
                "ui-progressbar-complete": "ui-corner-right"
            },
            max: 100,
            value: 0,
            change: null,
            complete: null
        },
        min: 0,
        _create: function() {
            this.oldValue = this.options.value = this._constrainedValue();
            this.element.attr({
                role: "progressbar",
                "aria-valuemin": this.min
            });
            this._addClass("ui-progressbar", "ui-widget ui-widget-content");
            this.valueDiv = d("<div>").appendTo(this.element);
            this._addClass(this.valueDiv, "ui-progressbar-value",
                "ui-widget-header");
            this._refreshValue()
        },
        _destroy: function() {
            this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow");
            this.valueDiv.remove()
        },
        value: function(a) {
            if (void 0 === a) return this.options.value;
            this.options.value = this._constrainedValue(a);
            this._refreshValue()
        },
        _constrainedValue: function(a) {
            void 0 === a && (a = this.options.value);
            this.indeterminate = !1 === a;
            "number" !== typeof a && (a = 0);
            return this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, a))
        },
        _setOptions: function(a) {
            var b =
                a.value;
            delete a.value;
            this._super(a);
            this.options.value = this._constrainedValue(b);
            this._refreshValue()
        },
        _setOption: function(a, b) {
            "max" === a && (b = Math.max(this.min, b));
            this._super(a, b)
        },
        _setOptionDisabled: function(a) {
            this._super(a);
            this.element.attr("aria-disabled", a);
            this._toggleClass(null, "ui-state-disabled", !!a)
        },
        _percentage: function() {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
        },
        _refreshValue: function() {
            var a = this.options.value,
                b = this._percentage();
            this.valueDiv.toggle(this.indeterminate || a > this.min).width(b.toFixed(0) + "%");
            this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, a === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate);
            this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = d("<div>").appendTo(this.valueDiv), this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": a
                }), this.overlayDiv &&
                (this.overlayDiv.remove(), this.overlayDiv = null));
            this.oldValue !== a && (this.oldValue = a, this._trigger("change"));
            a === this.options.max && this._trigger("complete")
        }
    });
    d.widget("ui.selectable", d.ui.mouse, {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function() {
            var a = this;
            this._addClass("ui-selectable");
            this.dragged = !1;
            this.refresh = function() {
                a.elementPos = d(a.element[0]).offset();
                a.selectees = d(a.options.filter, a.element[0]);
                a._addClass(a.selectees, "ui-selectee");
                a.selectees.each(function() {
                    var b = d(this),
                        c = b.offset(),
                        e = c.left - a.elementPos.left,
                        c = c.top - a.elementPos.top;
                    d.data(this, "selectable-item", {
                        element: this,
                        $element: b,
                        left: e,
                        top: c,
                        right: e + b.outerWidth(),
                        bottom: c + b.outerHeight(),
                        startselected: !1,
                        selected: b.hasClass("ui-selected"),
                        selecting: b.hasClass("ui-selecting"),
                        unselecting: b.hasClass("ui-unselecting")
                    })
                })
            };
            this.refresh();
            this._mouseInit();
            this.helper = d("<div>");
            this._addClass(this.helper,
                "ui-selectable-helper")
        },
        _destroy: function() {
            this.selectees.removeData("selectable-item");
            this._mouseDestroy()
        },
        _mouseStart: function(a) {
            var b = this,
                c = this.options;
            this.opos = [a.pageX, a.pageY];
            this.elementPos = d(this.element[0]).offset();
            this.options.disabled || (this.selectees = d(c.filter, this.element[0]), this._trigger("start", a), d(c.appendTo).append(this.helper), this.helper.css({
                left: a.pageX,
                top: a.pageY,
                width: 0,
                height: 0
            }), c.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                var c =
                    d.data(this, "selectable-item");
                c.startselected = !0;
                a.metaKey || a.ctrlKey || (b._removeClass(c.$element, "ui-selected"), c.selected = !1, b._addClass(c.$element, "ui-unselecting"), c.unselecting = !0, b._trigger("unselecting", a, {
                    unselecting: c.element
                }))
            }), d(a.target).parents().addBack().each(function() {
                var c, f = d.data(this, "selectable-item");
                if (f) return c = !a.metaKey && !a.ctrlKey || !f.$element.hasClass("ui-selected"), b._removeClass(f.$element, c ? "ui-unselecting" : "ui-selected")._addClass(f.$element, c ? "ui-selecting" : "ui-unselecting"),
                    f.unselecting = !c, f.selecting = c, (f.selected = c) ? b._trigger("selecting", a, {
                        selecting: f.element
                    }) : b._trigger("unselecting", a, {
                        unselecting: f.element
                    }), !1
            }))
        },
        _mouseDrag: function(a) {
            this.dragged = !0;
            if (!this.options.disabled) {
                var b, c = this,
                    e = this.options,
                    f = this.opos[0],
                    g = this.opos[1],
                    k = a.pageX,
                    n = a.pageY;
                f > k && (b = k, k = f, f = b);
                g > n && (b = n, n = g, g = b);
                this.helper.css({
                    left: f,
                    top: g,
                    width: k - f,
                    height: n - g
                });
                this.selectees.each(function() {
                    var b = d.data(this, "selectable-item"),
                        l = !1,
                        m, q, t, u;
                    b && b.element !== c.element[0] && (m =
                        b.left + c.elementPos.left, q = b.right + c.elementPos.left, t = b.top + c.elementPos.top, u = b.bottom + c.elementPos.top, "touch" === e.tolerance ? l = !(m > k || q < f || t > n || u < g) : "fit" === e.tolerance && (l = m > f && q < k && t > g && u < n), l ? (b.selected && (c._removeClass(b.$element, "ui-selected"), b.selected = !1), b.unselecting && (c._removeClass(b.$element, "ui-unselecting"), b.unselecting = !1), b.selecting || (c._addClass(b.$element, "ui-selecting"), b.selecting = !0, c._trigger("selecting", a, {
                            selecting: b.element
                        }))) : (b.selecting && ((a.metaKey || a.ctrlKey) &&
                            b.startselected ? (c._removeClass(b.$element, "ui-selecting"), b.selecting = !1, c._addClass(b.$element, "ui-selected"), b.selected = !0) : (c._removeClass(b.$element, "ui-selecting"), b.selecting = !1, b.startselected && (c._addClass(b.$element, "ui-unselecting"), b.unselecting = !0), c._trigger("unselecting", a, {
                                unselecting: b.element
                            }))), !b.selected || a.metaKey || a.ctrlKey || b.startselected || (c._removeClass(b.$element, "ui-selected"), b.selected = !1, c._addClass(b.$element, "ui-unselecting"), b.unselecting = !0, c._trigger("unselecting",
                            a, {
                                unselecting: b.element
                            }))))
                });
                return !1
            }
        },
        _mouseStop: function(a) {
            var b = this;
            this.dragged = !1;
            d(".ui-unselecting", this.element[0]).each(function() {
                var c = d.data(this, "selectable-item");
                b._removeClass(c.$element, "ui-unselecting");
                c.unselecting = !1;
                c.startselected = !1;
                b._trigger("unselected", a, {
                    unselected: c.element
                })
            });
            d(".ui-selecting", this.element[0]).each(function() {
                var c = d.data(this, "selectable-item");
                b._removeClass(c.$element, "ui-selecting")._addClass(c.$element, "ui-selected");
                c.selecting = !1;
                c.selected = !0;
                c.startselected = !0;
                b._trigger("selected", a, {
                    selected: c.element
                })
            });
            this._trigger("stop", a);
            this.helper.remove();
            return !1
        }
    });
    d.widget("ui.selectmenu", [d.ui.formResetMixin, {
        version: "1.12.1",
        defaultElement: "<select>",
        options: {
            appendTo: null,
            classes: {
                "ui-selectmenu-button-open": "ui-corner-top",
                "ui-selectmenu-button-closed": "ui-corner-all"
            },
            disabled: null,
            icons: {
                button: "ui-icon-triangle-1-s"
            },
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            width: !1,
            change: null,
            close: null,
            focus: null,
            open: null,
            select: null
        },
        _create: function() {
            var a = this.element.uniqueId().attr("id");
            this.ids = {
                element: a,
                button: a + "-button",
                menu: a + "-menu"
            };
            this._drawButton();
            this._drawMenu();
            this._bindFormResetHandler();
            this._rendered = !1;
            this.menuItems = d()
        },
        _drawButton: function() {
            var a, b = this,
                c = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
            this.labels = this.element.labels().attr("for", this.ids.button);
            this._on(this.labels, {
                click: function(a) {
                    this.button.focus();
                    a.preventDefault()
                }
            });
            this.element.hide();
            this.button = d("<span>", {
                tabindex: this.options.disabled ? -1 : 0,
                id: this.ids.button,
                role: "combobox",
                "aria-expanded": "false",
                "aria-autocomplete": "list",
                "aria-owns": this.ids.menu,
                "aria-haspopup": "true",
                title: this.element.attr("title")
            }).insertAfter(this.element);
            this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget");
            a = d("<span>").appendTo(this.button);
            this._addClass(a, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button);
            this.buttonItem = this._renderButtonItem(c).appendTo(this.button);
            !1 !== this.options.width && this._resizeButton();
            this._on(this.button, this._buttonEvents);
            this.button.one("focusin", function() {
                b._rendered || b._refreshMenu()
            })
        },
        _drawMenu: function() {
            var a = this;
            this.menu = d("<ul>", {
                "aria-hidden": "true",
                "aria-labelledby": this.ids.button,
                id: this.ids.menu
            });
            this.menuWrap = d("<div>").append(this.menu);
            this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front");
            this.menuWrap.appendTo(this._appendTo());
            this.menuInstance = this.menu.menu({
                classes: {
                    "ui-menu": "ui-corner-bottom"
                },
                role: "listbox",
                select: function(b, c) {
                    b.preventDefault();
                    a._setSelection();
                    a._select(c.item.data("ui-selectmenu-item"), b)
                },
                focus: function(b, c) {
                    var d = c.item.data("ui-selectmenu-item");
                    null != a.focusIndex && d.index !== a.focusIndex && (a._trigger("focus", b, {
                        item: d
                    }), a.isOpen || a._select(d, b));
                    a.focusIndex = d.index;
                    a.button.attr("aria-activedescendant", a.menuItems.eq(d.index).attr("id"))
                }
            }).menu("instance");
            this.menuInstance._off(this.menu, "mouseleave");
            this.menuInstance._closeOnDocumentClick = function() {
                return !1
            };
            this.menuInstance._isDivider = function() {
                return !1
            }
        },
        refresh: function() {
            this._refreshMenu();
            this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {}));
            null === this.options.width && this._resizeButton()
        },
        _refreshMenu: function() {
            var a;
            a = this.element.find("option");
            this.menu.empty();
            this._parseOptions(a);
            this._renderMenu(this.menu, this.items);
            this.menuInstance.refresh();
            this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper");
            this._rendered = !0;
            a.length && (a = this._getSelectedItem(), this.menuInstance.focus(null, a), this._setAria(a.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
        },
        open: function(a) {
            this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document,
                this._documentClick), this._trigger("open", a)))
        },
        _position: function() {
            this.menuWrap.position(d.extend({
                of: this.button
            }, this.options.position))
        },
        close: function(a) {
            this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", a))
        },
        widget: function() {
            return this.button
        },
        menuWidget: function() {
            return this.menu
        },
        _renderButtonItem: function(a) {
            var b = d("<span>");
            this._setText(b, a.label);
            this._addClass(b, "ui-selectmenu-text");
            return b
        },
        _renderMenu: function(a, b) {
            var c =
                this,
                e = "";
            d.each(b, function(b, g) {
                var f;
                g.optgroup !== e && (f = d("<li>", {
                    text: g.optgroup
                }), c._addClass(f, "ui-selectmenu-optgroup", "ui-menu-divider" + (g.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), f.appendTo(a), e = g.optgroup);
                c._renderItemData(a, g)
            })
        },
        _renderItemData: function(a, b) {
            return this._renderItem(a, b).data("ui-selectmenu-item", b)
        },
        _renderItem: function(a, b) {
            var c = d("<li>"),
                e = d("<div>", {
                    title: b.element.attr("title")
                });
            b.disabled && this._addClass(c, null, "ui-state-disabled");
            this._setText(e, b.label);
            return c.append(e).appendTo(a)
        },
        _setText: function(a, b) {
            b ? a.text(b) : a.html("&#160;")
        },
        _move: function(a, b) {
            var c, d = ".ui-menu-item";
            this.isOpen ? c = this.menuItems.eq(this.focusIndex).parent("li") : (c = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), d += ":not(.ui-state-disabled)");
            c = "first" === a || "last" === a ? c["first" === a ? "prevAll" : "nextAll"](d).eq(-1) : c[a + "All"](d).eq(0);
            c.length && this.menuInstance.focus(b, c)
        },
        _getSelectedItem: function() {
            return this.menuItems.eq(this.element[0].selectedIndex).parent("li")
        },
        _toggle: function(a) {
            this[this.isOpen ? "close" : "open"](a)
        },
        _setSelection: function() {
            var a;
            this.range && (window.getSelection ? (a = window.getSelection(), a.removeAllRanges(), a.addRange(this.range)) : this.range.select(), this.button.focus())
        },
        _documentClick: {
            mousedown: function(a) {
                this.isOpen && (d(a.target).closest(".ui-selectmenu-menu, #" + d.ui.escapeSelector(this.ids.button)).length || this.close(a))
            }
        },
        _buttonEvents: {
            mousedown: function() {
                var a;
                window.getSelection ? (a = window.getSelection(), a.rangeCount && (this.range =
                    a.getRangeAt(0))) : this.range = document.selection.createRange()
            },
            click: function(a) {
                this._setSelection();
                this._toggle(a)
            },
            keydown: function(a) {
                var b = !0;
                switch (a.keyCode) {
                    case d.ui.keyCode.TAB:
                    case d.ui.keyCode.ESCAPE:
                        this.close(a);
                        b = !1;
                        break;
                    case d.ui.keyCode.ENTER:
                        this.isOpen && this._selectFocusedItem(a);
                        break;
                    case d.ui.keyCode.UP:
                        a.altKey ? this._toggle(a) : this._move("prev", a);
                        break;
                    case d.ui.keyCode.DOWN:
                        a.altKey ? this._toggle(a) : this._move("next", a);
                        break;
                    case d.ui.keyCode.SPACE:
                        this.isOpen ? this._selectFocusedItem(a) :
                            this._toggle(a);
                        break;
                    case d.ui.keyCode.LEFT:
                        this._move("prev", a);
                        break;
                    case d.ui.keyCode.RIGHT:
                        this._move("next", a);
                        break;
                    case d.ui.keyCode.HOME:
                    case d.ui.keyCode.PAGE_UP:
                        this._move("first", a);
                        break;
                    case d.ui.keyCode.END:
                    case d.ui.keyCode.PAGE_DOWN:
                        this._move("last", a);
                        break;
                    default:
                        this.menu.trigger(a), b = !1
                }
                b && a.preventDefault()
            }
        },
        _selectFocusedItem: function(a) {
            var b = this.menuItems.eq(this.focusIndex).parent("li");
            b.hasClass("ui-state-disabled") || this._select(b.data("ui-selectmenu-item"), a)
        },
        _select: function(a,
            b) {
            var c = this.element[0].selectedIndex;
            this.element[0].selectedIndex = a.index;
            this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(a));
            this._setAria(a);
            this._trigger("select", b, {
                item: a
            });
            a.index !== c && this._trigger("change", b, {
                item: a
            });
            this.close(b)
        },
        _setAria: function(a) {
            a = this.menuItems.eq(a.index).attr("id");
            this.button.attr({
                "aria-labelledby": a,
                "aria-activedescendant": a
            });
            this.menu.attr("aria-activedescendant", a)
        },
        _setOption: function(a, b) {
            if ("icons" === a) {
                var c = this.button.find("span.ui-icon");
                this._removeClass(c, null, this.options.icons.button)._addClass(c, null, b.button)
            }
            this._super(a, b);
            "appendTo" === a && this.menuWrap.appendTo(this._appendTo());
            "width" === a && this._resizeButton()
        },
        _setOptionDisabled: function(a) {
            this._super(a);
            this.menuInstance.option("disabled", a);
            this.button.attr("aria-disabled", a);
            this._toggleClass(this.button, null, "ui-state-disabled", a);
            this.element.prop("disabled", a);
            a ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)
        },
        _appendTo: function() {
            var a =
                this.options.appendTo;
            a && (a = a.jquery || a.nodeType ? d(a) : this.document.find(a).eq(0));
            a && a[0] || (a = this.element.closest(".ui-front, dialog"));
            a.length || (a = this.document[0].body);
            return a
        },
        _toggleAttr: function() {
            this.button.attr("aria-expanded", this.isOpen);
            this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen);
            this.menu.attr("aria-hidden", !this.isOpen)
        },
        _resizeButton: function() {
            var a = this.options.width;
            !1 === a ? this.button.css("width", "") : (null === a && (a = this.element.show().outerWidth(), this.element.hide()), this.button.outerWidth(a))
        },
        _resizeMenu: function() {
            this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
        },
        _getCreateOptions: function() {
            var a = this._super();
            a.disabled = this.element.prop("disabled");
            return a
        },
        _parseOptions: function(a) {
            var b = this,
                c = [];
            a.each(function(a, f) {
                c.push(b._parseOption(d(f),
                    a))
            });
            this.items = c
        },
        _parseOption: function(a, b) {
            var c = a.parent("optgroup");
            return {
                element: a,
                index: b,
                value: a.val(),
                label: a.text(),
                optgroup: c.attr("label") || "",
                disabled: c.prop("disabled") || a.prop("disabled")
            }
        },
        _destroy: function() {
            this._unbindFormResetHandler();
            this.menuWrap.remove();
            this.button.remove();
            this.element.show();
            this.element.removeUniqueId();
            this.labels.attr("for", this.ids.element)
        }
    }]);
    d.widget("ui.slider", d.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            classes: {
                "ui-slider": "ui-corner-all",
                "ui-slider-handle": "ui-corner-all",
                "ui-slider-range": "ui-corner-all ui-widget-header"
            },
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function() {
            this._mouseSliding = this._keySliding = !1;
            this._animateOff = !0;
            this._handleIndex = null;
            this._detectOrientation();
            this._mouseInit();
            this._calculateNewMax();
            this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content");
            this._refresh();
            this._animateOff = !1
        },
        _refresh: function() {
            this._createRange();
            this._createHandles();
            this._setupEvents();
            this._refreshValue()
        },
        _createHandles: function() {
            var a, b;
            a = this.options;
            var c = this.element.find(".ui-slider-handle"),
                e = [];
            b = a.values && a.values.length || 1;
            c.length > b && (c.slice(b).remove(), c = c.slice(0, b));
            for (a = c.length; a < b; a++) e.push("<span tabindex='0'></span>");
            this.handles = c.add(d(e.join("")).appendTo(this.element));
            this._addClass(this.handles, "ui-slider-handle", "ui-state-default");
            this.handle = this.handles.eq(0);
            this.handles.each(function(a) {
                d(this).data("ui-slider-handle-index", a).attr("tabIndex", 0)
            })
        },
        _createRange: function() {
            var a = this.options;
            a.range ? (!0 === a.range && (a.values ? a.values.length && 2 !== a.values.length ? a.values = [a.values[0], a.values[0]] : d.isArray(a.values) && (a.values = a.values.slice(0)) : a.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({
                left: "",
                bottom: ""
            })) : (this.range = d("<div>").appendTo(this.element),
                this._addClass(this.range, "ui-slider-range")), "min" !== a.range && "max" !== a.range || this._addClass(this.range, "ui-slider-range-" + a.range)) : (this.range && this.range.remove(), this.range = null)
        },
        _setupEvents: function() {
            this._off(this.handles);
            this._on(this.handles, this._handleEvents);
            this._hoverable(this.handles);
            this._focusable(this.handles)
        },
        _destroy: function() {
            this.handles.remove();
            this.range && this.range.remove();
            this._mouseDestroy()
        },
        _mouseCapture: function(a) {
            var b, c, e, f, g, k = this,
                n = this.options;
            if (n.disabled) return !1;
            this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            };
            this.elementOffset = this.element.offset();
            b = this._normValueFromMouse({
                x: a.pageX,
                y: a.pageY
            });
            c = this._valueMax() - this._valueMin() + 1;
            this.handles.each(function(a) {
                var g = Math.abs(b - k.values(a));
                if (c > g || c === g && (a === k._lastChangedValue || k.values(a) === n.min)) c = g, e = d(this), f = a
            });
            if (!1 === this._start(a, f)) return !1;
            this._mouseSliding = !0;
            this._handleIndex = f;
            this._addClass(e, null, "ui-state-active");
            e.trigger("focus");
            g = e.offset();
            this._clickOffset = d(a.target).parents().addBack().is(".ui-slider-handle") ? {
                left: a.pageX - g.left - e.width() / 2,
                top: a.pageY - g.top - e.height() / 2 - (parseInt(e.css("borderTopWidth"), 10) || 0) - (parseInt(e.css("borderBottomWidth"), 10) || 0) + (parseInt(e.css("marginTop"), 10) || 0)
            } : {
                left: 0,
                top: 0
            };
            this.handles.hasClass("ui-state-hover") || this._slide(a, f, b);
            return this._animateOff = !0
        },
        _mouseStart: function() {
            return !0
        },
        _mouseDrag: function(a) {
            var b = this._normValueFromMouse({
                x: a.pageX,
                y: a.pageY
            });
            this._slide(a, this._handleIndex,
                b);
            return !1
        },
        _mouseStop: function(a) {
            this._removeClass(this.handles, null, "ui-state-active");
            this._mouseSliding = !1;
            this._stop(a, this._handleIndex);
            this._change(a, this._handleIndex);
            this._clickOffset = this._handleIndex = null;
            return this._animateOff = !1
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(a) {
            var b;
            "horizontal" === this.orientation ? (b = this.elementSize.width, a = a.x - this.elementOffset.left - (this._clickOffset ?
                this._clickOffset.left : 0)) : (b = this.elementSize.height, a = a.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0));
            b = a / b;
            1 < b && (b = 1);
            0 > b && (b = 0);
            "vertical" === this.orientation && (b = 1 - b);
            a = this._valueMax() - this._valueMin();
            b = this._valueMin() + b * a;
            return this._trimAlignValue(b)
        },
        _uiHash: function(a, b, c) {
            var d = {
                handle: this.handles[a],
                handleIndex: a,
                value: void 0 !== b ? b : this.value()
            };
            this._hasMultipleValues() && (d.value = void 0 !== b ? b : this.values(a), d.values = c || this.values());
            return d
        },
        _hasMultipleValues: function() {
            return this.options.values &&
                this.options.values.length
        },
        _start: function(a, b) {
            return this._trigger("start", a, this._uiHash(b))
        },
        _slide: function(a, b, c) {
            var d, f = this.value(),
                g = this.values();
            this._hasMultipleValues() && (d = this.values(b ? 0 : 1), f = this.values(b), 2 === this.options.values.length && !0 === this.options.range && (c = 0 === b ? Math.min(d, c) : Math.max(d, c)), g[b] = c);
            c !== f && !1 !== this._trigger("slide", a, this._uiHash(b, c, g)) && (this._hasMultipleValues() ? this.values(b, c) : this.value(c))
        },
        _stop: function(a, b) {
            this._trigger("stop", a, this._uiHash(b))
        },
        _change: function(a, b) {
            this._keySliding || this._mouseSliding || (this._lastChangedValue = b, this._trigger("change", a, this._uiHash(b)))
        },
        value: function(a) {
            if (arguments.length) this.options.value = this._trimAlignValue(a), this._refreshValue(), this._change(null, 0);
            else return this._value()
        },
        values: function(a, b) {
            var c, e, f;
            if (1 < arguments.length) this.options.values[a] = this._trimAlignValue(b), this._refreshValue(), this._change(null, a);
            else if (arguments.length)
                if (d.isArray(arguments[0])) {
                    c = this.options.values;
                    e = arguments[0];
                    for (f = 0; f < c.length; f += 1) c[f] = this._trimAlignValue(e[f]), this._change(null, f);
                    this._refreshValue()
                } else return this._hasMultipleValues() ? this._values(a) : this.value();
            else return this._values()
        },
        _setOption: function(a, b) {
            var c;
            c = 0;
            "range" === a && !0 === this.options.range && ("min" === b ? (this.options.value = this._values(0), this.options.values = null) : "max" === b && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null));
            d.isArray(this.options.values) && (c = this.options.values.length);
            this._super(a, b);
            switch (a) {
                case "orientation":
                    this._detectOrientation();
                    this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation);
                    this._refreshValue();
                    this.options.range && this._refreshRange(b);
                    this.handles.css("horizontal" === b ? "bottom" : "left", "");
                    break;
                case "value":
                    this._animateOff = !0;
                    this._refreshValue();
                    this._change(null, 0);
                    this._animateOff = !1;
                    break;
                case "values":
                    this._animateOff = !0;
                    this._refreshValue();
                    for (--c; 0 <= c; c--) this._change(null, c);
                    this._animateOff = !1;
                    break;
                case "step":
                case "min":
                case "max":
                    this._animateOff = !0;
                    this._calculateNewMax();
                    this._refreshValue();
                    this._animateOff = !1;
                    break;
                case "range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },
        _setOptionDisabled: function(a) {
            this._super(a);
            this._toggleClass(null, "ui-state-disabled", !!a)
        },
        _value: function() {
            var a = this.options.value;
            return a = this._trimAlignValue(a)
        },
        _values: function(a) {
            var b, c;
            if (arguments.length) return b = this.options.values[a], b = this._trimAlignValue(b);
            if (this._hasMultipleValues()) {
                b =
                    this.options.values.slice();
                for (c = 0; c < b.length; c += 1) b[c] = this._trimAlignValue(b[c]);
                return b
            }
            return []
        },
        _trimAlignValue: function(a) {
            if (a <= this._valueMin()) return this._valueMin();
            if (a >= this._valueMax()) return this._valueMax();
            var b = 0 < this.options.step ? this.options.step : 1,
                c = (a - this._valueMin()) % b;
            a -= c;
            2 * Math.abs(c) >= b && (a += 0 < c ? b : -b);
            return parseFloat(a.toFixed(5))
        },
        _calculateNewMax: function() {
            var a = this.options.max,
                b = this._valueMin(),
                c = this.options.step,
                a = Math.round((a - b) / c) * c + b;
            a > this.options.max &&
                (a -= c);
            this.max = parseFloat(a.toFixed(this._precision()))
        },
        _precision: function() {
            var a = this._precisionOf(this.options.step);
            null !== this.options.min && (a = Math.max(a, this._precisionOf(this.options.min)));
            return a
        },
        _precisionOf: function(a) {
            a = a.toString();
            var b = a.indexOf(".");
            return -1 === b ? 0 : a.length - b - 1
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.max
        },
        _refreshRange: function(a) {
            "vertical" === a && this.range.css({
                width: "",
                left: ""
            });
            "horizontal" === a && this.range.css({
                height: "",
                bottom: ""
            })
        },
        _refreshValue: function() {
            var a, b, c, e, f, g = this.options.range,
                k = this.options,
                n = this,
                l = this._animateOff ? !1 : k.animate,
                m = {};
            if (this._hasMultipleValues()) this.handles.each(function(c) {
                b = (n.values(c) - n._valueMin()) / (n._valueMax() - n._valueMin()) * 100;
                m["horizontal" === n.orientation ? "left" : "bottom"] = b + "%";
                d(this).stop(1, 1)[l ? "animate" : "css"](m, k.animate);
                if (!0 === n.options.range)
                    if ("horizontal" === n.orientation) {
                        if (0 === c) n.range.stop(1, 1)[l ? "animate" : "css"]({
                            left: b + "%"
                        }, k.animate);
                        if (1 === c) n.range[l ?
                            "animate" : "css"]({
                            width: b - a + "%"
                        }, {
                            queue: !1,
                            duration: k.animate
                        })
                    } else {
                        if (0 === c) n.range.stop(1, 1)[l ? "animate" : "css"]({
                            bottom: b + "%"
                        }, k.animate);
                        if (1 === c) n.range[l ? "animate" : "css"]({
                            height: b - a + "%"
                        }, {
                            queue: !1,
                            duration: k.animate
                        })
                    }
                a = b
            });
            else {
                c = this.value();
                e = this._valueMin();
                f = this._valueMax();
                b = f !== e ? (c - e) / (f - e) * 100 : 0;
                m["horizontal" === this.orientation ? "left" : "bottom"] = b + "%";
                this.handle.stop(1, 1)[l ? "animate" : "css"](m, k.animate);
                if ("min" === g && "horizontal" === this.orientation) this.range.stop(1, 1)[l ? "animate" :
                    "css"]({
                    width: b + "%"
                }, k.animate);
                if ("max" === g && "horizontal" === this.orientation) this.range.stop(1, 1)[l ? "animate" : "css"]({
                    width: 100 - b + "%"
                }, k.animate);
                if ("min" === g && "vertical" === this.orientation) this.range.stop(1, 1)[l ? "animate" : "css"]({
                    height: b + "%"
                }, k.animate);
                if ("max" === g && "vertical" === this.orientation) this.range.stop(1, 1)[l ? "animate" : "css"]({
                    height: 100 - b + "%"
                }, k.animate)
            }
        },
        _handleEvents: {
            keydown: function(a) {
                var b, c, e, f = d(a.target).data("ui-slider-handle-index");
                switch (a.keyCode) {
                    case d.ui.keyCode.HOME:
                    case d.ui.keyCode.END:
                    case d.ui.keyCode.PAGE_UP:
                    case d.ui.keyCode.PAGE_DOWN:
                    case d.ui.keyCode.UP:
                    case d.ui.keyCode.RIGHT:
                    case d.ui.keyCode.DOWN:
                    case d.ui.keyCode.LEFT:
                        if (a.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(d(a.target), null, "ui-state-active"), b = this._start(a, f), !1 === b)) return
                }
                e = this.options.step;
                b = this._hasMultipleValues() ? c = this.values(f) : c = this.value();
                switch (a.keyCode) {
                    case d.ui.keyCode.HOME:
                        c = this._valueMin();
                        break;
                    case d.ui.keyCode.END:
                        c = this._valueMax();
                        break;
                    case d.ui.keyCode.PAGE_UP:
                        c = this._trimAlignValue(b + (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case d.ui.keyCode.PAGE_DOWN:
                        c = this._trimAlignValue(b - (this._valueMax() - this._valueMin()) /
                            this.numPages);
                        break;
                    case d.ui.keyCode.UP:
                    case d.ui.keyCode.RIGHT:
                        if (b === this._valueMax()) return;
                        c = this._trimAlignValue(b + e);
                        break;
                    case d.ui.keyCode.DOWN:
                    case d.ui.keyCode.LEFT:
                        if (b === this._valueMin()) return;
                        c = this._trimAlignValue(b - e)
                }
                this._slide(a, f, c)
            },
            keyup: function(a) {
                var b = d(a.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(a, b), this._change(a, b), this._removeClass(d(a.target), null, "ui-state-active"))
            }
        }
    });
    d.widget("ui.sortable", d.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1E3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _isOverAxis: function(a, b, c) {
            return a >= b && a < b + c
        },
        _isFloating: function(a) {
            return /left|right/.test(a.css("float")) || /inline|table-cell/.test(a.css("display"))
        },
        _create: function() {
            this.containerCache = {};
            this._addClass("ui-sortable");
            this.refresh();
            this.offset = this.element.offset();
            this._mouseInit();
            this._setHandleClassName();
            this.ready = !0
        },
        _setOption: function(a, b) {
            this._super(a, b);
            "handle" === a && this._setHandleClassName()
        },
        _setHandleClassName: function() {
            var a = this;
            this._removeClass(this.element.find(".ui-sortable-handle"),
                "ui-sortable-handle");
            d.each(this.items, function() {
                a._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle")
            })
        },
        _destroy: function() {
            this._mouseDestroy();
            for (var a = this.items.length - 1; 0 <= a; a--) this.items[a].item.removeData(this.widgetName + "-item");
            return this
        },
        _mouseCapture: function(a, b) {
            var c = null,
                e = !1,
                f = this;
            if (this.reverting || this.options.disabled || "static" === this.options.type) return !1;
            this._refreshItems(a);
            d(a.target).parents().each(function() {
                if (d.data(this,
                        f.widgetName + "-item") === f) return c = d(this), !1
            });
            d.data(a.target, f.widgetName + "-item") === f && (c = d(a.target));
            if (!c || this.options.handle && !b && (d(this.options.handle, c).find("*").addBack().each(function() {
                    this === a.target && (e = !0)
                }), !e)) return !1;
            this.currentItem = c;
            this._removeCurrentsFromItems();
            return !0
        },
        _mouseStart: function(a, b, c) {
            var e;
            b = this.options;
            this.currentContainer = this;
            this.refreshPositions();
            this.helper = this._createHelper(a);
            this._cacheHelperProportions();
            this._cacheMargins();
            this.scrollParent =
                this.helper.scrollParent();
            this.offset = this.currentItem.offset();
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            };
            d.extend(this.offset, {
                click: {
                    left: a.pageX - this.offset.left,
                    top: a.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            });
            this.helper.css("position", "absolute");
            this.cssPosition = this.helper.css("position");
            this.originalPosition = this._generatePosition(a);
            this.originalPageX = a.pageX;
            this.originalPageY = a.pageY;
            b.cursorAt &&
                this._adjustOffsetFromHelper(b.cursorAt);
            this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            };
            this.helper[0] !== this.currentItem[0] && this.currentItem.hide();
            this._createPlaceholder();
            b.containment && this._setContainment();
            b.cursor && "auto" !== b.cursor && (e = this.document.find("body"), this.storedCursor = e.css("cursor"), e.css("cursor", b.cursor), this.storedStylesheet = d("<style>*{ cursor: " + b.cursor + " !important; }</style>").appendTo(e));
            b.opacity && (this.helper.css("opacity") &&
                (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", b.opacity));
            b.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", b.zIndex));
            this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset());
            this._trigger("start", a, this._uiHash());
            this._preserveHelperProportions || this._cacheHelperProportions();
            if (!c)
                for (c = this.containers.length - 1; 0 <= c; c--) this.containers[c]._trigger("activate",
                    a, this._uiHash(this));
            d.ui.ddmanager && (d.ui.ddmanager.current = this);
            d.ui.ddmanager && !b.dropBehaviour && d.ui.ddmanager.prepareOffsets(this, a);
            this.dragging = !0;
            this._addClass(this.helper, "ui-sortable-helper");
            this._mouseDrag(a);
            return !0
        },
        _mouseDrag: function(a) {
            var b, c, e, f;
            b = this.options;
            c = !1;
            this.position = this._generatePosition(a);
            this.positionAbs = this._convertPositionTo("absolute");
            this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs);
            this.options.scroll && (this.scrollParent[0] !== this.document[0] &&
                "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - a.pageY < b.scrollSensitivity ? this.scrollParent[0].scrollTop = c = this.scrollParent[0].scrollTop + b.scrollSpeed : a.pageY - this.overflowOffset.top < b.scrollSensitivity && (this.scrollParent[0].scrollTop = c = this.scrollParent[0].scrollTop - b.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - a.pageX < b.scrollSensitivity ? this.scrollParent[0].scrollLeft = c = this.scrollParent[0].scrollLeft + b.scrollSpeed :
                    a.pageX - this.overflowOffset.left < b.scrollSensitivity && (this.scrollParent[0].scrollLeft = c = this.scrollParent[0].scrollLeft - b.scrollSpeed)) : (a.pageY - this.document.scrollTop() < b.scrollSensitivity ? c = this.document.scrollTop(this.document.scrollTop() - b.scrollSpeed) : this.window.height() - (a.pageY - this.document.scrollTop()) < b.scrollSensitivity && (c = this.document.scrollTop(this.document.scrollTop() + b.scrollSpeed)), a.pageX - this.document.scrollLeft() < b.scrollSensitivity ? c = this.document.scrollLeft(this.document.scrollLeft() -
                    b.scrollSpeed) : this.window.width() - (a.pageX - this.document.scrollLeft()) < b.scrollSensitivity && (c = this.document.scrollLeft(this.document.scrollLeft() + b.scrollSpeed))), !1 !== c && d.ui.ddmanager && !b.dropBehaviour && d.ui.ddmanager.prepareOffsets(this, a));
            this.positionAbs = this._convertPositionTo("absolute");
            this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px");
            this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px");
            for (b = this.items.length -
                1; 0 <= b; b--)
                if (c = this.items[b], e = c.item[0], (f = this._intersectsWithPointer(c)) && c.instance === this.currentContainer && e !== this.currentItem[0] && this.placeholder[1 === f ? "next" : "prev"]()[0] !== e && !d.contains(this.placeholder[0], e) && ("semi-dynamic" === this.options.type ? !d.contains(this.element[0], e) : 1)) {
                    this.direction = 1 === f ? "down" : "up";
                    if ("pointer" === this.options.tolerance || this._intersectsWithSides(c)) this._rearrange(a, c);
                    else break;
                    this._trigger("change", a, this._uiHash());
                    break
                }
            this._contactContainers(a);
            d.ui.ddmanager && d.ui.ddmanager.drag(this, a);
            this._trigger("sort", a, this._uiHash());
            this.lastPositionAbs = this.positionAbs;
            return !1
        },
        _mouseStop: function(a, b) {
            if (a) {
                d.ui.ddmanager && !this.options.dropBehaviour && d.ui.ddmanager.drop(this, a);
                if (this.options.revert) {
                    var c = this,
                        e = this.placeholder.offset(),
                        f = this.options.axis,
                        g = {};
                    f && "x" !== f || (g.left = e.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft));
                    f && "y" !== f || (g.top = e.top - this.offset.parent.top -
                        this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop));
                    this.reverting = !0;
                    d(this.helper).animate(g, parseInt(this.options.revert, 10) || 500, function() {
                        c._clear(a)
                    })
                } else this._clear(a, b);
                return !1
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp(new d.Event("mouseup", {
                    target: null
                }));
                "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
                for (var a = this.containers.length -
                        1; 0 <= a; a--) this.containers[a]._trigger("deactivate", null, this._uiHash(this)), this.containers[a].containerCache.over && (this.containers[a]._trigger("out", null, this._uiHash(this)), this.containers[a].containerCache.over = 0)
            }
            this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), d.extend(this, {
                    helper: null,
                    dragging: !1,
                    reverting: !1,
                    _noFinalSort: null
                }),
                this.domPosition.prev ? d(this.domPosition.prev).after(this.currentItem) : d(this.domPosition.parent).prepend(this.currentItem));
            return this
        },
        serialize: function(a) {
            var b = this._getItemsAsjQuery(a && a.connected),
                c = [];
            a = a || {};
            d(b).each(function() {
                var b = (d(a.item || this).attr(a.attribute || "id") || "").match(a.expression || /(.+)[\-=_](.+)/);
                b && c.push((a.key || b[1] + "[]") + "=" + (a.key && a.expression ? b[1] : b[2]))
            });
            !c.length && a.key && c.push(a.key + "=");
            return c.join("&")
        },
        toArray: function(a) {
            var b = this._getItemsAsjQuery(a &&
                    a.connected),
                c = [];
            a = a || {};
            b.each(function() {
                c.push(d(a.item || this).attr(a.attribute || "id") || "")
            });
            return c
        },
        _intersectsWith: function(a) {
            var b = this.positionAbs.left,
                c = b + this.helperProportions.width,
                d = this.positionAbs.top,
                f = d + this.helperProportions.height,
                g = a.left,
                k = g + a.width,
                n = a.top,
                l = n + a.height,
                m = this.offset.click.top,
                q = this.offset.click.left,
                m = "x" === this.options.axis || d + m > n && d + m < l,
                q = "y" === this.options.axis || b + q > g && b + q < k;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers ||
                "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > a[this.floating ? "width" : "height"] ? m && q : g < b + this.helperProportions.width / 2 && c - this.helperProportions.width / 2 < k && n < d + this.helperProportions.height / 2 && f - this.helperProportions.height / 2 < l
        },
        _intersectsWithPointer: function(a) {
            var b;
            b = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, a.top, a.height);
            a = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left,
                a.left, a.width);
            if (!b || !a) return !1;
            b = this._getDragVerticalDirection();
            a = this._getDragHorizontalDirection();
            return this.floating ? "right" === a || "down" === b ? 2 : 1 : b && ("down" === b ? 2 : 1)
        },
        _intersectsWithSides: function(a) {
            var b = this._isOverAxis(this.positionAbs.top + this.offset.click.top, a.top + a.height / 2, a.height);
            a = this._isOverAxis(this.positionAbs.left + this.offset.click.left, a.left + a.width / 2, a.width);
            var c = this._getDragVerticalDirection(),
                d = this._getDragHorizontalDirection();
            return this.floating && d ? "right" ===
                d && a || "left" === d && !a : c && ("down" === c && b || "up" === c && !b)
        },
        _getDragVerticalDirection: function() {
            var a = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== a && (0 < a ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var a = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== a && (0 < a ? "right" : "left")
        },
        refresh: function(a) {
            this._refreshItems(a);
            this._setHandleClassName();
            this.refreshPositions();
            return this
        },
        _connectWith: function() {
            var a = this.options;
            return a.connectWith.constructor === String ? [a.connectWith] :
                a.connectWith
        },
        _getItemsAsjQuery: function(a) {
            function b() {
                g.push(this)
            }
            var c, e, f, g = [],
                k = [],
                n = this._connectWith();
            if (n && a)
                for (a = n.length - 1; 0 <= a; a--)
                    for (e = d(n[a], this.document[0]), c = e.length - 1; 0 <= c; c--)(f = d.data(e[c], this.widgetFullName)) && f !== this && !f.options.disabled && k.push([d.isFunction(f.options.items) ? f.options.items.call(f.element) : d(f.options.items, f.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), f]);
            k.push([d.isFunction(this.options.items) ? this.options.items.call(this.element,
                null, {
                    options: this.options,
                    item: this.currentItem
                }) : d(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
            for (a = k.length - 1; 0 <= a; a--) k[a][0].each(b);
            return d(g)
        },
        _removeCurrentsFromItems: function() {
            var a = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = d.grep(this.items, function(b) {
                for (var c = 0; c < a.length; c++)
                    if (a[c] === b.item[0]) return !1;
                return !0
            })
        },
        _refreshItems: function(a) {
            this.items = [];
            this.containers = [this];
            var b, c, e, f, g, k = this.items,
                n = [
                    [d.isFunction(this.options.items) ? this.options.items.call(this.element[0], a, {
                        item: this.currentItem
                    }) : d(this.options.items, this.element), this]
                ];
            if ((g = this._connectWith()) && this.ready)
                for (b = g.length - 1; 0 <= b; b--)
                    for (e = d(g[b], this.document[0]), c = e.length - 1; 0 <= c; c--)(f = d.data(e[c], this.widgetFullName)) && f !== this && !f.options.disabled && (n.push([d.isFunction(f.options.items) ? f.options.items.call(f.element[0], a, {
                        item: this.currentItem
                    }) : d(f.options.items, f.element), f]), this.containers.push(f));
            for (b = n.length -
                1; 0 <= b; b--)
                for (a = n[b][1], e = n[b][0], c = 0, g = e.length; c < g; c++) f = d(e[c]), f.data(this.widgetName + "-item", a), k.push({
                    item: f,
                    instance: a,
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0
                })
        },
        refreshPositions: function(a) {
            this.floating = this.items.length ? "x" === this.options.axis || this._isFloating(this.items[0].item) : !1;
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var b, c, e;
            for (b = this.items.length - 1; 0 <= b; b--) c = this.items[b], c.instance !== this.currentContainer && this.currentContainer && c.item[0] !== this.currentItem[0] ||
                (e = this.options.toleranceElement ? d(this.options.toleranceElement, c.item) : c.item, a || (c.width = e.outerWidth(), c.height = e.outerHeight()), e = e.offset(), c.left = e.left, c.top = e.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else
                for (b = this.containers.length - 1; 0 <= b; b--) e = this.containers[b].element.offset(), this.containers[b].containerCache.left = e.left, this.containers[b].containerCache.top = e.top, this.containers[b].containerCache.width = this.containers[b].element.outerWidth(),
                    this.containers[b].containerCache.height = this.containers[b].element.outerHeight();
            return this
        },
        _createPlaceholder: function(a) {
            a = a || this;
            var b, c = a.options;
            c.placeholder && c.placeholder.constructor !== String || (b = c.placeholder, c.placeholder = {
                element: function() {
                    var c = a.currentItem[0].nodeName.toLowerCase(),
                        f = d("<" + c + ">", a.document[0]);
                    a._addClass(f, "ui-sortable-placeholder", b || a.currentItem[0].className)._removeClass(f, "ui-sortable-helper");
                    "tbody" === c ? a._createTrPlaceholder(a.currentItem.find("tr").eq(0),
                        d("<tr>", a.document[0]).appendTo(f)) : "tr" === c ? a._createTrPlaceholder(a.currentItem, f) : "img" === c && f.attr("src", a.currentItem.attr("src"));
                    b || f.css("visibility", "hidden");
                    return f
                },
                update: function(d, f) {
                    if (!b || c.forcePlaceholderSize) f.height() || f.height(a.currentItem.innerHeight() - parseInt(a.currentItem.css("paddingTop") || 0, 10) - parseInt(a.currentItem.css("paddingBottom") || 0, 10)), f.width() || f.width(a.currentItem.innerWidth() - parseInt(a.currentItem.css("paddingLeft") || 0, 10) - parseInt(a.currentItem.css("paddingRight") ||
                        0, 10))
                }
            });
            a.placeholder = d(c.placeholder.element.call(a.element, a.currentItem));
            a.currentItem.after(a.placeholder);
            c.placeholder.update(a, a.placeholder)
        },
        _createTrPlaceholder: function(a, b) {
            var c = this;
            a.children().each(function() {
                d("<td>&#160;</td>", c.document[0]).attr("colspan", d(this).attr("colspan") || 1).appendTo(b)
            })
        },
        _contactContainers: function(a) {
            var b, c, e, f, g, k, n, l, m = f = null;
            for (b = this.containers.length - 1; 0 <= b; b--) d.contains(this.currentItem[0], this.containers[b].element[0]) || (this._intersectsWith(this.containers[b].containerCache) ?
                f && d.contains(this.containers[b].element[0], f.element[0]) || (f = this.containers[b], m = b) : this.containers[b].containerCache.over && (this.containers[b]._trigger("out", a, this._uiHash(this)), this.containers[b].containerCache.over = 0));
            if (f)
                if (1 === this.containers.length) this.containers[m].containerCache.over || (this.containers[m]._trigger("over", a, this._uiHash(this)), this.containers[m].containerCache.over = 1);
                else {
                    b = 1E4;
                    e = null;
                    f = (c = f.floating || this._isFloating(this.currentItem)) ? "left" : "top";
                    g = c ? "width" : "height";
                    l = c ? "pageX" : "pageY";
                    for (c = this.items.length - 1; 0 <= c; c--) d.contains(this.containers[m].element[0], this.items[c].item[0]) && this.items[c].item[0] !== this.currentItem[0] && (k = this.items[c].item.offset()[f], n = !1, a[l] - k > this.items[c][g] / 2 && (n = !0), Math.abs(a[l] - k) < b && (b = Math.abs(a[l] - k), e = this.items[c], this.direction = n ? "up" : "down"));
                    if (e || this.options.dropOnEmpty) this.currentContainer === this.containers[m] ? this.currentContainer.containerCache.over || (this.containers[m]._trigger("over", a, this._uiHash()), this.currentContainer.containerCache.over =
                        1) : (e ? this._rearrange(a, e, null, !0) : this._rearrange(a, null, this.containers[m].element, !0), this._trigger("change", a, this._uiHash()), this.containers[m]._trigger("change", a, this._uiHash(this)), this.currentContainer = this.containers[m], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[m]._trigger("over", a, this._uiHash(this)), this.containers[m].containerCache.over = 1)
                }
        },
        _createHelper: function(a) {
            var b = this.options;
            a = d.isFunction(b.helper) ? d(b.helper.apply(this.element[0], [a, this.currentItem])) : "clone" === b.helper ? this.currentItem.clone() : this.currentItem;
            a.parents("body").length || d("parent" !== b.appendTo ? b.appendTo : this.currentItem[0].parentNode)[0].appendChild(a[0]);
            a[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            });
            a[0].style.width && !b.forceHelperSize || a.width(this.currentItem.width());
            a[0].style.height && !b.forceHelperSize || a.height(this.currentItem.height());
            return a
        },
        _adjustOffsetFromHelper: function(a) {
            "string" === typeof a && (a = a.split(" "));
            d.isArray(a) && (a = {
                left: +a[0],
                top: +a[1] || 0
            });
            "left" in a && (this.offset.click.left = a.left + this.margins.left);
            "right" in a && (this.offset.click.left = this.helperProportions.width - a.right + this.margins.left);
            "top" in a && (this.offset.click.top = a.top + this.margins.top);
            "bottom" in a && (this.offset.click.top = this.helperProportions.height - a.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var a = this.offsetParent.offset();
            "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && d.contains(this.scrollParent[0], this.offsetParent[0]) && (a.left += this.scrollParent.scrollLeft(), a.top += this.scrollParent.scrollTop());
            if (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && d.ui.ie) a = {
                top: 0,
                left: 0
            };
            return {
                top: a.top + (parseInt(this.offsetParent.css("borderTopWidth"),
                    10) || 0),
                left: a.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var a = this.currentItem.position();
                return {
                    top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"),
                    10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var a, b, c;
            b = this.options;
            "parent" === b.containment && (b.containment = this.helper[0].parentNode);
            if ("document" === b.containment || "window" === b.containment) this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === b.containment ? this.document.width() : this.window.width() - this.helperProportions.width -
                this.margins.left, ("document" === b.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top
            ];
            /^(document|window|parent)$/.test(b.containment) || (a = d(b.containment)[0], b = d(b.containment).offset(), c = "hidden" !== d(a).css("overflow"), this.containment = [b.left + (parseInt(d(a).css("borderLeftWidth"), 10) || 0) + (parseInt(d(a).css("paddingLeft"), 10) || 0) - this.margins.left, b.top + (parseInt(d(a).css("borderTopWidth"),
                10) || 0) + (parseInt(d(a).css("paddingTop"), 10) || 0) - this.margins.top, b.left + (c ? Math.max(a.scrollWidth, a.offsetWidth) : a.offsetWidth) - (parseInt(d(a).css("borderLeftWidth"), 10) || 0) - (parseInt(d(a).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, b.top + (c ? Math.max(a.scrollHeight, a.offsetHeight) : a.offsetHeight) - (parseInt(d(a).css("borderTopWidth"), 10) || 0) - (parseInt(d(a).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function(a, b) {
            b ||
                (b = this.position);
            var c = "absolute" === a ? 1 : -1,
                e = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && d.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                f = /(html|body)/i.test(e[0].tagName);
            return {
                top: b.top + this.offset.relative.top * c + this.offset.parent.top * c - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : f ? 0 : e.scrollTop()) * c,
                left: b.left + this.offset.relative.left * c + this.offset.parent.left * c - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() :
                    f ? 0 : e.scrollLeft()) * c
            }
        },
        _generatePosition: function(a) {
            var b, c, e = this.options;
            c = a.pageX;
            b = a.pageY;
            var f = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && d.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                g = /(html|body)/i.test(f[0].tagName);
            "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset());
            this.originalPosition && (this.containment &&
                (a.pageX - this.offset.click.left < this.containment[0] && (c = this.containment[0] + this.offset.click.left), a.pageY - this.offset.click.top < this.containment[1] && (b = this.containment[1] + this.offset.click.top), a.pageX - this.offset.click.left > this.containment[2] && (c = this.containment[2] + this.offset.click.left), a.pageY - this.offset.click.top > this.containment[3] && (b = this.containment[3] + this.offset.click.top)), e.grid && (b = this.originalPageY + Math.round((b - this.originalPageY) / e.grid[1]) * e.grid[1], b = this.containment ? b - this.offset.click.top >=
                    this.containment[1] && b - this.offset.click.top <= this.containment[3] ? b : b - this.offset.click.top >= this.containment[1] ? b - e.grid[1] : b + e.grid[1] : b, c = this.originalPageX + Math.round((c - this.originalPageX) / e.grid[0]) * e.grid[0], c = this.containment ? c - this.offset.click.left >= this.containment[0] && c - this.offset.click.left <= this.containment[2] ? c : c - this.offset.click.left >= this.containment[0] ? c - e.grid[0] : c + e.grid[0] : c));
            return {
                top: b - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ?
                    -this.scrollParent.scrollTop() : g ? 0 : f.scrollTop()),
                left: c - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : g ? 0 : f.scrollLeft())
            }
        },
        _rearrange: function(a, b, c, d) {
            c ? c[0].appendChild(this.placeholder[0]) : b.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? b.item[0] : b.item[0].nextSibling);
            var e = this.counter = this.counter ? ++this.counter : 1;
            this._delay(function() {
                e === this.counter && this.refreshPositions(!d)
            })
        },
        _clear: function(a, b) {
            function c(a, b, c) {
                return function(d) {
                    c._trigger(a, d, b._uiHash(b))
                }
            }
            this.reverting = !1;
            var d, f = [];
            !this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem);
            this._noFinalSort = null;
            if (this.helper[0] === this.currentItem[0]) {
                for (d in this._storedCSS)
                    if ("auto" === this._storedCSS[d] || "static" === this._storedCSS[d]) this._storedCSS[d] = "";
                this.currentItem.css(this._storedCSS);
                this._removeClass(this.currentItem, "ui-sortable-helper")
            } else this.currentItem.show();
            this.fromOutside && !b && f.push(function(a) {
                this._trigger("receive", a, this._uiHash(this.fromOutside))
            });
            !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || b || f.push(function(a) {
                this._trigger("update", a, this._uiHash())
            });
            this === this.currentContainer || b || (f.push(function(a) {
                this._trigger("remove", a, this._uiHash())
            }), f.push(function(a) {
                return function(b) {
                    a._trigger("receive", b, this._uiHash(this))
                }
            }.call(this,
                this.currentContainer)), f.push(function(a) {
                return function(b) {
                    a._trigger("update", b, this._uiHash(this))
                }
            }.call(this, this.currentContainer)));
            for (d = this.containers.length - 1; 0 <= d; d--) b || f.push(c("deactivate", this, this.containers[d])), this.containers[d].containerCache.over && (f.push(c("out", this, this.containers[d])), this.containers[d].containerCache.over = 0);
            this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove());
            this._storedOpacity && this.helper.css("opacity",
                this._storedOpacity);
            this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex);
            this.dragging = !1;
            b || this._trigger("beforeStop", a, this._uiHash());
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
            this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null);
            if (!b) {
                for (d = 0; d < f.length; d++) f[d].call(this, a);
                this._trigger("stop", a, this._uiHash())
            }
            this.fromOutside = !1;
            return !this.cancelHelperRemoval
        },
        _trigger: function() {
            !1 ===
                d.Widget.prototype._trigger.apply(this, arguments) && this.cancel()
        },
        _uiHash: function(a) {
            var b = a || this;
            return {
                helper: b.helper,
                placeholder: b.placeholder || d([]),
                position: b.position,
                originalPosition: b.originalPosition,
                offset: b.positionAbs,
                item: b.currentItem,
                sender: a ? a.element : null
            }
        }
    });
    d.widget("ui.spinner", {
        version: "1.12.1",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            classes: {
                "ui-spinner": "ui-corner-all",
                "ui-spinner-down": "ui-corner-br",
                "ui-spinner-up": "ui-corner-tr"
            },
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._setOption("max", this.options.max);
            this._setOption("min", this.options.min);
            this._setOption("step", this.options.step);
            "" !== this.value() && this._value(this.element.val(), !0);
            this._draw();
            this._on(this._events);
            this._refresh();
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _getCreateOptions: function() {
            var a =
                this._super(),
                b = this.element;
            d.each(["min", "max", "step"], function(c, d) {
                var e = b.attr(d);
                null != e && e.length && (a[d] = e)
            });
            return a
        },
        _events: {
            keydown: function(a) {
                this._start(a) && this._keydown(a) && a.preventDefault()
            },
            keyup: "_stop",
            focus: function() {
                this.previous = this.element.val()
            },
            blur: function(a) {
                this.cancelBlur ? delete this.cancelBlur : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", a))
            },
            mousewheel: function(a, b) {
                if (b) {
                    if (!this.spinning && !this._start(a)) return !1;
                    this._spin((0 <
                        b ? 1 : -1) * this.options.step, a);
                    clearTimeout(this.mousewheelTimer);
                    this.mousewheelTimer = this._delay(function() {
                        this.spinning && this._stop(a)
                    }, 100);
                    a.preventDefault()
                }
            },
            "mousedown .ui-spinner-button": function(a) {
                function b() {
                    this.element[0] !== d.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = c, this._delay(function() {
                        this.previous = c
                    }))
                }
                var c;
                c = this.element[0] === d.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val();
                a.preventDefault();
                b.call(this);
                this.cancelBlur = !0;
                this._delay(function() {
                    delete this.cancelBlur;
                    b.call(this)
                });
                !1 !== this._start(a) && this._repeat(null, d(a.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, a)
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function(a) {
                if (d(a.currentTarget).hasClass("ui-state-active")) {
                    if (!1 === this._start(a)) return !1;
                    this._repeat(null, d(a.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, a)
                }
            },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _enhance: function() {
            this.uiSpinner = this.element.attr("autocomplete",
                "off").wrap("<span>").parent().append("<a></a><a></a>")
        },
        _draw: function() {
            this._enhance();
            this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content");
            this._addClass("ui-spinner-input");
            this.element.attr("role", "spinbutton");
            this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({
                classes: {
                    "ui-button": ""
                }
            });
            this._removeClass(this.buttons, "ui-corner-all");
            this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up");
            this._addClass(this.buttons.last(),
                "ui-spinner-button ui-spinner-down");
            this.buttons.first().button({
                icon: this.options.icons.up,
                showLabel: !1
            });
            this.buttons.last().button({
                icon: this.options.icons.down,
                showLabel: !1
            });
            this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && 0 < this.uiSpinner.height() && this.uiSpinner.height(this.uiSpinner.height())
        },
        _keydown: function(a) {
            var b = this.options,
                c = d.ui.keyCode;
            switch (a.keyCode) {
                case c.UP:
                    return this._repeat(null, 1, a), !0;
                case c.DOWN:
                    return this._repeat(null, -1, a), !0;
                case c.PAGE_UP:
                    return this._repeat(null,
                        b.page, a), !0;
                case c.PAGE_DOWN:
                    return this._repeat(null, -b.page, a), !0
            }
            return !1
        },
        _start: function(a) {
            if (!this.spinning && !1 === this._trigger("start", a)) return !1;
            this.counter || (this.counter = 1);
            return this.spinning = !0
        },
        _repeat: function(a, b, c) {
            a = a || 500;
            clearTimeout(this.timer);
            this.timer = this._delay(function() {
                this._repeat(40, b, c)
            }, a);
            this._spin(b * this.options.step, c)
        },
        _spin: function(a, b) {
            var c = this.value() || 0;
            this.counter || (this.counter = 1);
            c = this._adjustValue(c + a * this._increment(this.counter));
            this.spinning &&
                !1 === this._trigger("spin", b, {
                    value: c
                }) || (this._value(c), this.counter++)
        },
        _increment: function(a) {
            var b = this.options.incremental;
            return b ? d.isFunction(b) ? b(a) : Math.floor(a * a * a / 5E4 - a * a / 500 + 17 * a / 200 + 1) : 1
        },
        _precision: function() {
            var a = this._precisionOf(this.options.step);
            null !== this.options.min && (a = Math.max(a, this._precisionOf(this.options.min)));
            return a
        },
        _precisionOf: function(a) {
            a = a.toString();
            var b = a.indexOf(".");
            return -1 === b ? 0 : a.length - b - 1
        },
        _adjustValue: function(a) {
            var b, c = this.options;
            b = null !== c.min ?
                c.min : 0;
            a = b + Math.round((a - b) / c.step) * c.step;
            a = parseFloat(a.toFixed(this._precision()));
            return null !== c.max && a > c.max ? c.max : null !== c.min && a < c.min ? c.min : a
        },
        _stop: function(a) {
            this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", a))
        },
        _setOption: function(a, b) {
            var c;
            "culture" === a || "numberFormat" === a ? (c = this._parse(this.element.val()), this.options[a] = b, this.element.val(this._format(c))) : ("max" !== a && "min" !== a && "step" !== a || "string" !==
                typeof b || (b = this._parse(b)), "icons" === a && (c = this.buttons.first().find(".ui-icon"), this._removeClass(c, null, this.options.icons.up), this._addClass(c, null, b.up), c = this.buttons.last().find(".ui-icon"), this._removeClass(c, null, this.options.icons.down), this._addClass(c, null, b.down)), this._super(a, b))
        },
        _setOptionDisabled: function(a) {
            this._super(a);
            this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!a);
            this.element.prop("disabled", !!a);
            this.buttons.button(a ? "disable" : "enable")
        },
        _setOptions: l(function(a) {
            this._super(a)
        }),
        _parse: function(a) {
            "string" === typeof a && "" !== a && (a = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(a, 10, this.options.culture) : +a);
            return "" === a || isNaN(a) ? null : a
        },
        _format: function(a) {
            return "" === a ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(a, this.options.numberFormat, this.options.culture) : a
        },
        _refresh: function() {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            })
        },
        isValid: function() {
            var a =
                this.value();
            return null === a ? !1 : a === this._adjustValue(a)
        },
        _value: function(a, b) {
            var c;
            "" !== a && (c = this._parse(a), null !== c && (b || (c = this._adjustValue(c)), a = this._format(c)));
            this.element.val(a);
            this._refresh()
        },
        _destroy: function() {
            this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow");
            this.uiSpinner.replaceWith(this.element)
        },
        stepUp: l(function(a) {
            this._stepUp(a)
        }),
        _stepUp: function(a) {
            this._start() && (this._spin((a || 1) * this.options.step), this._stop())
        },
        stepDown: l(function(a) {
            this._stepDown(a)
        }),
        _stepDown: function(a) {
            this._start() && (this._spin((a || 1) * -this.options.step), this._stop())
        },
        pageUp: l(function(a) {
            this._stepUp((a || 1) * this.options.page)
        }),
        pageDown: l(function(a) {
            this._stepDown((a || 1) * this.options.page)
        }),
        value: function(a) {
            if (!arguments.length) return this._parse(this.element.val());
            l(this._value).call(this, a)
        },
        widget: function() {
            return this.uiSpinner
        }
    });
    !1 !== d.uiBackCompat && d.widget("ui.spinner", d.ui.spinner, {
        _enhance: function() {
            this.uiSpinner =
                this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())
        },
        _uiSpinnerHtml: function() {
            return "<span>"
        },
        _buttonHtml: function() {
            return "<a></a><a></a>"
        }
    });
    d.widget("ui.tabs", {
        version: "1.12.1",
        delay: 300,
        options: {
            active: null,
            classes: {
                "ui-tabs": "ui-corner-all",
                "ui-tabs-nav": "ui-corner-all",
                "ui-tabs-panel": "ui-corner-bottom",
                "ui-tabs-tab": "ui-corner-top"
            },
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _isLocal: function() {
            var a = /#.*$/;
            return function(b) {
                var c, d;
                c = b.href.replace(a, "");
                d = location.href.replace(a, "");
                try {
                    c = decodeURIComponent(c)
                } catch (f) {}
                try {
                    d = decodeURIComponent(d)
                } catch (f) {}
                return 1 < b.hash.length && c === d
            }
        }(),
        _create: function() {
            var a = this,
                b = this.options;
            this.running = !1;
            this._addClass("ui-tabs", "ui-widget ui-widget-content");
            this._toggleClass("ui-tabs-collapsible", null, b.collapsible);
            this._processTabs();
            b.active = this._initialActive();
            d.isArray(b.disabled) && (b.disabled = d.unique(b.disabled.concat(d.map(this.tabs.filter(".ui-state-disabled"),
                function(b) {
                    return a.tabs.index(b)
                }))).sort());
            this.active = !1 !== this.options.active && this.anchors.length ? this._findActive(b.active) : d();
            this._refresh();
            this.active.length && this.load(b.active)
        },
        _initialActive: function() {
            var a = this.options.active,
                b = this.options.collapsible,
                c = location.hash.substring(1);
            null === a && (c && this.tabs.each(function(b, f) {
                if (d(f).attr("aria-controls") === c) return a = b, !1
            }), null === a && (a = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), null === a || -1 === a) && (a = this.tabs.length ? 0 :
                !1);
            !1 !== a && (a = this.tabs.index(this.tabs.eq(a)), -1 === a && (a = b ? !1 : 0));
            !b && !1 === a && this.anchors.length && (a = 0);
            return a
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : d()
            }
        },
        _tabKeydown: function(a) {
            var b = d(d.ui.safeActiveElement(this.document[0])).closest("li"),
                c = this.tabs.index(b),
                e = !0;
            if (!this._handlePageNav(a)) {
                switch (a.keyCode) {
                    case d.ui.keyCode.RIGHT:
                    case d.ui.keyCode.DOWN:
                        c++;
                        break;
                    case d.ui.keyCode.UP:
                    case d.ui.keyCode.LEFT:
                        e = !1;
                        c--;
                        break;
                    case d.ui.keyCode.END:
                        c = this.anchors.length - 1;
                        break;
                    case d.ui.keyCode.HOME:
                        c = 0;
                        break;
                    case d.ui.keyCode.SPACE:
                        a.preventDefault();
                        clearTimeout(this.activating);
                        this._activate(c);
                        return;
                    case d.ui.keyCode.ENTER:
                        a.preventDefault();
                        clearTimeout(this.activating);
                        this._activate(c === this.options.active ? !1 : c);
                        return;
                    default:
                        return
                }
                a.preventDefault();
                clearTimeout(this.activating);
                c = this._focusNextTab(c, e);
                a.ctrlKey || a.metaKey || (b.attr("aria-selected", "false"), this.tabs.eq(c).attr("aria-selected", "true"),
                    this.activating = this._delay(function() {
                        this.option("active", c)
                    }, this.delay))
            }
        },
        _panelKeydown: function(a) {
            !this._handlePageNav(a) && a.ctrlKey && a.keyCode === d.ui.keyCode.UP && (a.preventDefault(), this.active.trigger("focus"))
        },
        _handlePageNav: function(a) {
            if (a.altKey && a.keyCode === d.ui.keyCode.PAGE_UP) return this._activate(this._focusNextTab(this.options.active - 1, !1)), !0;
            if (a.altKey && a.keyCode === d.ui.keyCode.PAGE_DOWN) return this._activate(this._focusNextTab(this.options.active + 1, !0)), !0
        },
        _findNextTab: function(a,
            b) {
            function c() {
                a > e && (a = 0);
                0 > a && (a = e);
                return a
            }
            for (var e = this.tabs.length - 1; - 1 !== d.inArray(c(), this.options.disabled);) a = b ? a + 1 : a - 1;
            return a
        },
        _focusNextTab: function(a, b) {
            a = this._findNextTab(a, b);
            this.tabs.eq(a).trigger("focus");
            return a
        },
        _setOption: function(a, b) {
            "active" === a ? this._activate(b) : (this._super(a, b), "collapsible" === a && (this._toggleClass("ui-tabs-collapsible", null, b), b || !1 !== this.options.active || this._activate(0)), "event" === a && this._setupEvents(b), "heightStyle" === a && this._setupHeightStyle(b))
        },
        _sanitizeSelector: function(a) {
            return a ? a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function() {
            var a = this.options,
                b = this.tablist.children(":has(a[href])");
            a.disabled = d.map(b.filter(".ui-state-disabled"), function(a) {
                return b.index(a)
            });
            this._processTabs();
            !1 !== a.active && this.anchors.length ? this.active.length && !d.contains(this.tablist[0], this.active[0]) ? this.tabs.length === a.disabled.length ? (a.active = !1, this.active = d()) : this._activate(this._findNextTab(Math.max(0, a.active - 1), !1)) :
                a.active = this.tabs.index(this.active) : (a.active = !1, this.active = d());
            this._refresh()
        },
        _refresh: function() {
            this._setOptionDisabled(this.options.disabled);
            this._setupEvents(this.options.event);
            this._setupHeightStyle(this.options.heightStyle);
            this.tabs.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            });
            this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-hidden": "true"
            });
            this.active.length ? (this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function() {
            var a = this,
                b = this.tabs,
                c = this.anchors,
                e = this.panels;
            this.tablist = this._getList().attr("role", "tablist");
            this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header");
            this.tablist.on("mousedown" + this.eventNamespace, "> li", function(a) {
                d(this).is(".ui-state-disabled") &&
                    a.preventDefault()
            }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function() {
                d(this).closest("li").is(".ui-state-disabled") && this.blur()
            });
            this.tabs = this.tablist.find("> li:has(a[href])").attr({
                role: "tab",
                tabIndex: -1
            });
            this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default");
            this.anchors = this.tabs.map(function() {
                return d("a", this)[0]
            }).attr({
                role: "presentation",
                tabIndex: -1
            });
            this._addClass(this.anchors, "ui-tabs-anchor");
            this.panels = d();
            this.anchors.each(function(b, c) {
                var e, f, g = d(c).uniqueId().attr("id"),
                    l = d(c).closest("li"),
                    m = l.attr("aria-controls");
                a._isLocal(c) ? (e = c.hash, f = e.substring(1), e = a.element.find(a._sanitizeSelector(e))) : (f = l.attr("aria-controls") || d({}).uniqueId()[0].id, e = a.element.find("#" + f), e.length || (e = a._createPanel(f), e.insertAfter(a.panels[b - 1] || a.tablist)), e.attr("aria-live", "polite"));
                e.length && (a.panels = a.panels.add(e));
                m && l.data("ui-tabs-aria-controls", m);
                l.attr({
                    "aria-controls": f,
                    "aria-labelledby": g
                });
                e.attr("aria-labelledby", g)
            });
            this.panels.attr("role", "tabpanel");
            this._addClass(this.panels,
                "ui-tabs-panel", "ui-widget-content");
            b && (this._off(b.not(this.tabs)), this._off(c.not(this.anchors)), this._off(e.not(this.panels)))
        },
        _getList: function() {
            return this.tablist || this.element.find("ol, ul").eq(0)
        },
        _createPanel: function(a) {
            return d("<div>").attr("id", a).data("ui-tabs-destroy", !0)
        },
        _setOptionDisabled: function(a) {
            var b, c;
            d.isArray(a) && (a.length ? a.length === this.anchors.length && (a = !0) : a = !1);
            for (c = 0; b = this.tabs[c]; c++) b = d(b), !0 === a || -1 !== d.inArray(c, a) ? (b.attr("aria-disabled", "true"), this._addClass(b,
                null, "ui-state-disabled")) : (b.removeAttr("aria-disabled"), this._removeClass(b, null, "ui-state-disabled"));
            this.options.disabled = a;
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !0 === a)
        },
        _setupEvents: function(a) {
            var b = {};
            a && d.each(a.split(" "), function(a, d) {
                b[d] = "_eventHandler"
            });
            this._off(this.anchors.add(this.tabs).add(this.panels));
            this._on(!0, this.anchors, {
                click: function(a) {
                    a.preventDefault()
                }
            });
            this._on(this.anchors, b);
            this._on(this.tabs, {
                keydown: "_tabKeydown"
            });
            this._on(this.panels, {
                keydown: "_panelKeydown"
            });
            this._focusable(this.tabs);
            this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(a) {
            var b, c = this.element.parent();
            "fill" === a ? (b = c.height(), b -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                var a = d(this),
                    c = a.css("position");
                "absolute" !== c && "fixed" !== c && (b -= a.outerHeight(!0))
            }), this.element.children().not(this.panels).each(function() {
                b -= d(this).outerHeight(!0)
            }), this.panels.each(function() {
                d(this).height(Math.max(0, b - d(this).innerHeight() +
                    d(this).height()))
            }).css("overflow", "auto")) : "auto" === a && (b = 0, this.panels.each(function() {
                b = Math.max(b, d(this).height("").height())
            }).height(b))
        },
        _eventHandler: function(a) {
            var b = this.options,
                c = this.active,
                e = d(a.currentTarget).closest("li"),
                f = e[0] === c[0],
                g = f && b.collapsible,
                k = g ? d() : this._getPanelForTab(e),
                l = c.length ? this._getPanelForTab(c) : d(),
                c = {
                    oldTab: c,
                    oldPanel: l,
                    newTab: g ? d() : e,
                    newPanel: k
                };
            a.preventDefault();
            e.hasClass("ui-state-disabled") || e.hasClass("ui-tabs-loading") || this.running || f && !b.collapsible ||
                !1 === this._trigger("beforeActivate", a, c) || (b.active = g ? !1 : this.tabs.index(e), this.active = f ? d() : e, this.xhr && this.xhr.abort(), l.length || k.length || d.error("jQuery UI Tabs: Mismatching fragment identifier."), k.length && this.load(this.tabs.index(e), a), this._toggle(a, c))
        },
        _toggle: function(a, b) {
            function c() {
                f.running = !1;
                f._trigger("activate", a, b)
            }

            function e() {
                f._addClass(b.newTab.closest("li"), "ui-tabs-active", "ui-state-active");
                g.length && f.options.show ? f._show(g, f.options.show, c) : (g.show(), c())
            }
            var f = this,
                g = b.newPanel,
                k = b.oldPanel;
            this.running = !0;
            k.length && this.options.hide ? this._hide(k, this.options.hide, function() {
                f._removeClass(b.oldTab.closest("li"), "ui-tabs-active", "ui-state-active");
                e()
            }) : (this._removeClass(b.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), k.hide(), e());
            k.attr("aria-hidden", "true");
            b.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            });
            g.length && k.length ? b.oldTab.attr("tabIndex", -1) : g.length && this.tabs.filter(function() {
                return 0 === d(this).attr("tabIndex")
            }).attr("tabIndex", -1);
            g.attr("aria-hidden", "false");
            b.newTab.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _activate: function(a) {
            a = this._findActive(a);
            a[0] !== this.active[0] && (a.length || (a = this.active), a = a.find(".ui-tabs-anchor")[0], this._eventHandler({
                target: a,
                currentTarget: a,
                preventDefault: d.noop
            }))
        },
        _findActive: function(a) {
            return !1 === a ? d() : this.tabs.eq(a)
        },
        _getIndex: function(a) {
            "string" === typeof a && (a = this.anchors.index(this.anchors.filter("[href$='" + d.ui.escapeSelector(a) + "']")));
            return a
        },
        _destroy: function() {
            this.xhr &&
                this.xhr.abort();
            this.tablist.removeAttr("role").off(this.eventNamespace);
            this.anchors.removeAttr("role tabIndex").removeUniqueId();
            this.tabs.add(this.panels).each(function() {
                d.data(this, "ui-tabs-destroy") ? d(this).remove() : d(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
            });
            this.tabs.each(function() {
                var a = d(this),
                    b = a.data("ui-tabs-aria-controls");
                b ? a.attr("aria-controls", b).removeData("ui-tabs-aria-controls") : a.removeAttr("aria-controls")
            });
            this.panels.show();
            "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function(a) {
            var b = this.options.disabled;
            !1 !== b && (void 0 === a ? b = !1 : (a = this._getIndex(a), b = d.isArray(b) ? d.map(b, function(b) {
                return b !== a ? b : null
            }) : d.map(this.tabs, function(b, d) {
                return d !== a ? d : null
            })), this._setOptionDisabled(b))
        },
        disable: function(a) {
            var b = this.options.disabled;
            if (!0 !== b) {
                if (void 0 === a) b = !0;
                else {
                    a = this._getIndex(a);
                    if (-1 !== d.inArray(a, b)) return;
                    b = d.isArray(b) ? d.merge([a], b).sort() : [a]
                }
                this._setOptionDisabled(b)
            }
        },
        load: function(a, b) {
            a = this._getIndex(a);
            var c = this,
                e = this.tabs.eq(a),
                f = e.find(".ui-tabs-anchor"),
                g = this._getPanelForTab(e),
                k = {
                    tab: e,
                    panel: g
                },
                l = function(a, b) {
                    "abort" === b && c.panels.stop(!1, !0);
                    c._removeClass(e, "ui-tabs-loading");
                    g.removeAttr("aria-busy");
                    a === c.xhr && delete c.xhr
                };
            this._isLocal(f[0]) || (this.xhr = d.ajax(this._ajaxSettings(f, b, k))) && "canceled" !== this.xhr.statusText && (this._addClass(e, "ui-tabs-loading"), g.attr("aria-busy", "true"), this.xhr.done(function(a, d, e) {
                setTimeout(function() {
                    g.html(a);
                    c._trigger("load", b, k);
                    l(e, d)
                }, 1)
            }).fail(function(a, b) {
                setTimeout(function() {
                    l(a, b)
                }, 1)
            }))
        },
        _ajaxSettings: function(a, b, c) {
            var e = this;
            return {
                url: a.attr("href").replace(/#.*$/, ""),
                beforeSend: function(a, g) {
                    return e._trigger("beforeLoad", b, d.extend({
                        jqXHR: a,
                        ajaxSettings: g
                    }, c))
                }
            }
        },
        _getPanelForTab: function(a) {
            a = d(a).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + a))
        }
    });
    !1 !== d.uiBackCompat && d.widget("ui.tabs", d.ui.tabs, {
        _processTabs: function() {
            this._superApply(arguments);
            this._addClass(this.tabs,
                "ui-tab")
        }
    });
    d.widget("ui.tooltip", {
        version: "1.12.1",
        options: {
            classes: {
                "ui-tooltip": "ui-corner-all ui-widget-shadow"
            },
            content: function() {
                var a = d(this).attr("title") || "";
                return d("<a>").text(a).html()
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: !0,
            track: !1,
            close: null,
            open: null
        },
        _addDescribedBy: function(a, b) {
            var c = (a.attr("aria-describedby") || "").split(/\s+/);
            c.push(b);
            a.data("ui-tooltip-id", b).attr("aria-describedby", d.trim(c.join(" ")))
        },
        _removeDescribedBy: function(a) {
            var b = a.data("ui-tooltip-id"),
                c = (a.attr("aria-describedby") || "").split(/\s+/),
                b = d.inArray(b, c); - 1 !== b && c.splice(b, 1);
            a.removeData("ui-tooltip-id");
            (c = d.trim(c.join(" "))) ? a.attr("aria-describedby", c): a.removeAttr("aria-describedby")
        },
        _create: function() {
            this._on({
                mouseover: "open",
                focusin: "open"
            });
            this.tooltips = {};
            this.parents = {};
            this.liveRegion = d("<div>").attr({
                role: "log",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body);
            this._addClass(this.liveRegion,
                null, "ui-helper-hidden-accessible");
            this.disabledTitles = d([])
        },
        _setOption: function(a, b) {
            var c = this;
            this._super(a, b);
            "content" === a && d.each(this.tooltips, function(a, b) {
                c._updateContent(b.element)
            })
        },
        _setOptionDisabled: function(a) {
            this[a ? "_disable" : "_enable"]()
        },
        _disable: function() {
            var a = this;
            d.each(this.tooltips, function(b, c) {
                var e = d.Event("blur");
                e.target = e.currentTarget = c.element[0];
                a.close(e, !0)
            });
            this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function() {
                var a =
                    d(this);
                if (a.is("[title]")) return a.data("ui-tooltip-title", a.attr("title")).removeAttr("title")
            }))
        },
        _enable: function() {
            this.disabledTitles.each(function() {
                var a = d(this);
                a.data("ui-tooltip-title") && a.attr("title", a.data("ui-tooltip-title"))
            });
            this.disabledTitles = d([])
        },
        open: function(a) {
            var b = this,
                c = d(a ? a.target : this.element).closest(this.options.items);
            c.length && !c.data("ui-tooltip-id") && (c.attr("title") && c.data("ui-tooltip-title", c.attr("title")), c.data("ui-tooltip-open", !0), a && "mouseover" === a.type &&
                c.parents().each(function() {
                    var a = d(this),
                        c;
                    a.data("ui-tooltip-open") && (c = d.Event("blur"), c.target = c.currentTarget = this, b.close(c, !0));
                    a.attr("title") && (a.uniqueId(), b.parents[this.id] = {
                        element: this,
                        title: a.attr("title")
                    }, a.attr("title", ""))
                }), this._registerCloseHandlers(a, c), this._updateContent(c, a))
        },
        _updateContent: function(a, b) {
            var c;
            c = this.options.content;
            var d = this,
                f = b ? b.type : null;
            if ("string" === typeof c || c.nodeType || c.jquery) return this._open(b, a, c);
            (c = c.call(a[0], function(c) {
                d._delay(function() {
                    a.data("ui-tooltip-open") &&
                        (b && (b.type = f), this._open(b, a, c))
                })
            })) && this._open(b, a, c)
        },
        _open: function(a, b, c) {
            function e(a) {
                l.of = a;
                g.is(":hidden") || g.position(l)
            }
            var f, g, k, l = d.extend({}, this.options.position);
            c && ((f = this._find(b)) ? f.tooltip.find(".ui-tooltip-content").html(c) : (b.is("[title]") && (a && "mouseover" === a.type ? b.attr("title", "") : b.removeAttr("title")), f = this._tooltip(b), g = f.tooltip, this._addDescribedBy(b, g.attr("id")), g.find(".ui-tooltip-content").html(c), this.liveRegion.children().hide(), c = d("<div>").html(g.find(".ui-tooltip-content").html()),
                c.removeAttr("name").find("[name]").removeAttr("name"), c.removeAttr("id").find("[id]").removeAttr("id"), c.appendTo(this.liveRegion), this.options.track && a && /^mouse/.test(a.type) ? (this._on(this.document, {
                    mousemove: e
                }), e(a)) : g.position(d.extend({
                    of: b
                }, this.options.position)), g.hide(), this._show(g, this.options.show), this.options.track && this.options.show && this.options.show.delay && (k = this.delayedShow = setInterval(function() {
                    g.is(":visible") && (e(l.of), clearInterval(k))
                }, d.fx.interval)), this._trigger("open",
                    a, {
                        tooltip: g
                    })))
        },
        _registerCloseHandlers: function(a, b) {
            var c = {
                keyup: function(a) {
                    a.keyCode === d.ui.keyCode.ESCAPE && (a = d.Event(a), a.currentTarget = b[0], this.close(a, !0))
                }
            };
            b[0] !== this.element[0] && (c.remove = function() {
                this._removeTooltip(this._find(b).tooltip)
            });
            a && "mouseover" !== a.type || (c.mouseleave = "close");
            a && "focusin" !== a.type || (c.focusout = "close");
            this._on(!0, b, c)
        },
        close: function(a) {
            var b, c = this,
                e = d(a ? a.currentTarget : this.element),
                f = this._find(e);
            f ? (b = f.tooltip, f.closing || (clearInterval(this.delayedShow),
                e.data("ui-tooltip-title") && !e.attr("title") && e.attr("title", e.data("ui-tooltip-title")), this._removeDescribedBy(e), f.hiding = !0, b.stop(!0), this._hide(b, this.options.hide, function() {
                    c._removeTooltip(d(this))
                }), e.removeData("ui-tooltip-open"), this._off(e, "mouseleave focusout keyup"), e[0] !== this.element[0] && this._off(e, "remove"), this._off(this.document, "mousemove"), a && "mouseleave" === a.type && d.each(this.parents, function(a, b) {
                    d(b.element).attr("title", b.title);
                    delete c.parents[a]
                }), f.closing = !0, this._trigger("close",
                    a, {
                        tooltip: b
                    }), f.hiding || (f.closing = !1))) : e.removeData("ui-tooltip-open")
        },
        _tooltip: function(a) {
            var b = d("<div>").attr("role", "tooltip"),
                c = d("<div>").appendTo(b),
                e = b.uniqueId().attr("id");
            this._addClass(c, "ui-tooltip-content");
            this._addClass(b, "ui-tooltip", "ui-widget ui-widget-content");
            b.appendTo(this._appendTo(a));
            return this.tooltips[e] = {
                element: a,
                tooltip: b
            }
        },
        _find: function(a) {
            return (a = a.data("ui-tooltip-id")) ? this.tooltips[a] : null
        },
        _removeTooltip: function(a) {
            a.remove();
            delete this.tooltips[a.attr("id")]
        },
        _appendTo: function(a) {
            a = a.closest(".ui-front, dialog");
            a.length || (a = this.document[0].body);
            return a
        },
        _destroy: function() {
            var a = this;
            d.each(this.tooltips, function(b, c) {
                var e = d.Event("blur"),
                    f = c.element;
                e.target = e.currentTarget = f[0];
                a.close(e, !0);
                d("#" + b).remove();
                f.data("ui-tooltip-title") && (f.attr("title") || f.attr("title", f.data("ui-tooltip-title")), f.removeData("ui-tooltip-title"))
            });
            this.liveRegion.remove()
        }
    });
    !1 !== d.uiBackCompat && d.widget("ui.tooltip", d.ui.tooltip, {
        options: {
            tooltipClass: null
        },
        _tooltip: function() {
            var a = this._superApply(arguments);
            this.options.tooltipClass && a.tooltip.addClass(this.options.tooltipClass);
            return a
        }
    })
});
(function(d) {
    d.widget("crm.prices", {
        options: {
            typeOfWorkSel: null,
            levelWorkSel: null,
            selectedLevelWork: null,
            pagesSel: null,
            urgencyItems: null,
            levelWorkItems: null,
            orderFormUrl: null,
            selectedOrderUrl: null,
            pricesLink: null,
            urgency: null,
            selectedUrgency: null,
            calcTimeout: null,
            currencyItemSel: "div.prices-currency-item",
            currencyMenuItemSel: "div.prices-currency-menu-item",
            currencyMenuSel: "div.prices-currency-menu",
            currencyMenuBtnSel: "div.prices-currency-menu-btn",
            priceLabel: "[data-label=price]",
            toFormButton: "[data-role=go-to-form]",
            priceTableSel: ".price-table-content #table-body",
            pricesWrapper: "[data-crm-widget=prices]"
        },
        _create: function() {
            var q = this;
            this.$pricesWrapper = d(this.options.pricesWrapper);
            this.$form = this.$pricesWrapper.find("form");
            this.$typeOfWork = this.$pricesWrapper.find(this.options.typeOfWorkSel);
            this.$priceTable = this.$pricesWrapper.find(this.options.priceTableSel);
            this.$levelWork = this.$pricesWrapper.find(this.options.levelWorkSel);
            this.$pages = this.$pricesWrapper.find(this.options.pagesSel);
            this.$currencyItem =
                this.$pricesWrapper.find(this.options.currencyItemSel);
            this.$currencyMenuItem = this.$pricesWrapper.find(this.options.currencyMenuItemSel);
            this.$currencyMenuBtn = this.$pricesWrapper.find(this.options.currencyMenuBtnSel);
            this.$button = this.$pricesWrapper.find(this.options.toFormButton);
            this.$priceLabel = this.$pricesWrapper.find(this.options.priceLabel);
            this.$headHtml = this.$pricesWrapper.find("tr#table-head");
            this.$bodyHtml = this.$pricesWrapper.find("tbody#table-body");
            this.$levelWork.data("options", this.$levelWork.find("option"));
            this.$typeOfWork.on("change", function() {
                q._loadData()
            });
            this.$pages.on("change", function() {
                d(this).val(q._numPageFilter(d(this).val()));
                q._loadData()
            });
            this.$pages.on("keydown", function(d) {
                d.key.match(/[^\d]/g) && d.preventDefault()
            });
            this.$button.on("click", function(d) {
                d.preventDefault();
                window.location = q.options.selectedOrderUrl
            });
            this.$form.on("submit", function(d) {
                d.preventDefault();
                q._loadData()
            });
            this.$currencyItem.on("click", function() {
                d(this).find("input[type=radio]").prop("checked", !0).trigger("change");
                q.$currencyItem.removeClass("active");
                q.$currencyMenuItem.removeClass("active");
                q.$currencyMenuBtn.removeClass("active");
                d(this).addClass("active");
                q._loadData()
            });
            this.$currencyMenuItem.on("click", function() {
                d(this).find("input[type=radio]").prop("checked", !0).trigger("change");
                q.$currencyItem.removeClass("active");
                q.$currencyMenuItem.removeClass("active");
                q.$currencyMenuBtn.addClass("active");
                d(this).addClass("active");
                q._loadData()
            });
            this.$levelWork.on("change", function() {
                var x = d(this).val(),
                    u =
                    q.$pricesWrapper.find('.price-table-content td[level-work="' + x + '"]'),
                    x = q.$pricesWrapper.find('.price-table-content td[level-work][level-work!="' + x + '"]');
                u.show();
                x.hide()
            });
            this.$pricesWrapper.on("click", ".prices-btn-spinner-left, .prices-btn-spinner-right", function() {
                var x = d(this),
                    u = parseInt(q.$pages.val().trim()),
                    u = q._numPageFilter(u);
                "up" === x.attr("data-dir") ? 200 > u && u++ : 1 < u && u--;
                q.$pages.val(u);
                q._loadData()
            });
            this.$priceTable.on("click", "td[level-work] a", function(d) {
                d.preventDefault()
            });
            this.$priceTable.on("click",
                "td[level-work]",
                function() {
                    q.$priceTable.find("td.urgency-cell").removeClass("selected-urgency");
                    q.$priceTable.find("td[level-work]").removeClass("selected-price");
                    q.options.selectedLevelWork = d(this).attr("level-work");
                    q.options.selectedUrgency = d(this).attr("urgency");
                    q._removeTableHover();
                    q._selectWork()
                });
            this.$priceTable.on("mouseleave", "td[level-work]", function() {
                q._removeTableHover()
            });
            this.$priceTable.on("mouseenter", "td[level-work]", function() {
                var x = d(this);
                x.addClass("active-price");
                x.prevAll("td.urgency-cell").addClass("active-price");
                x.prevAll("td[level-work]").addClass("hover-price");
                x.parent().prevAll().find("td[level-work=" + x.attr("level-work") + "]").addClass("hover-price");
                q.$headHtml.find("td[level-work=" + x.attr("level-work") + "]").addClass("hover-price")
            });
            this._loadData();
            this.$currencyItem.find(":checked").parent().addClass("active");
            this.$currencyMenuItem.find(":checked").parent().addClass("active")
        },
        _selectWork: function() {
            var q = d("td[level-work=" + this.options.selectedLevelWork + "][urgency=" + this.options.selectedUrgency +
                "]");
            0 < q.length ? (q.addClass("selected-price"), q.removeClass("hover-price"), d(".urgency-cell[urgency=" + this.options.selectedUrgency + "]").addClass("selected-urgency"), this.$priceLabel.html(q.find("a").text()), this.options.selectedOrderUrl = q.find("a").attr("href")) : this.$priceLabel.html("")
        },
        _updateLevelWorkList: function(q, x) {
            var u = q.data("options"),
                m = q.val();
            q.empty();
            for (var y = 0; y < u.length; y++) 0 <= d.inArray(u[y].getAttribute("value"), x) && (q.append(u[y]), this.$headHtml.append(d('<td level-work="' + u[y].value +
                '">').html(u[y].text)));
            q.find("option[value=" + m + "]").length && q.find("option[value=" + m + "]").prop("selected", !0)
        },
        _numPageFilter: function(d) {
            1 > d && (d = 1);
            200 < d && (d = 200);
            return d
        },
        _loadData: function() {
            var q = this;
            clearTimeout(q.calcTimeout);
            q.calcTimeout = setTimeout(function() {
                d.ajax({
                    url: q.$form.prop("action"),
                    method: q.$form.prop("method"),
                    data: q.$form.serialize(),
                    dataType: "json",
                    success: function(x) {
                        q.$pricesWrapper.find(".price-table-title").text(q.$typeOfWork.find("option:selected").text());
                        q.$headHtml.empty();
                        q.$headHtml.append(d("<td>").html(q.options.urgency));
                        var u = Object.keys(x.prices);
                        q._updateLevelWorkList(q.$levelWork, u);
                        var m = q.$levelWork.data("options");
                        q.$bodyHtml.empty();
                        for (var y = Object.keys(x.prices[u[0]]), l = y.length - 1; 0 <= l; l--) {
                            var I = d("<tr>");
                            1 === l && I.attr("class", "price-table-content-last-row");
                            var t = d("<td>").html(q.options.urgencyItems[y[l]]);
                            t.attr("class", "urgency-cell");
                            t.attr("urgency", y[l]);
                            I.append(t);
                            for (t = 0; t < m.length; t++)
                                if (0 <= d.inArray(m[t].getAttribute("value"), u)) {
                                    var F = x.prices[m[t].value][y[l]],
                                        K = q.options.orderFormUrl + "?doctype=" + q.$typeOfWork.val() + "&urgency=" + y[l] + "&level=" + m[t].value + "&numpages=" + q.$pages.val(),
                                        F = d("<td>").html(d("<a>").attr("href", K).html(F));
                                    F.attr("level-work", m[t].value);
                                    F.attr("urgency", y[l]);
                                    I.append(F)
                                }
                            q.$bodyHtml.append(I)
                        }
                        500 > d(window).width() && q.$levelWork.trigger("change");
                        q.$pricesWrapper.find(".prices-total-pages").html(x.pagesLabel);
                        q._selectWork();
                        q.$pricesWrapper.find(".prices-spinner-words").html(x.words)
                    }
                })
            }, 500)
        },
        _removeTableHover: function() {
            var q =
                d("td[level-work]");
            q.removeClass("hover-price");
            q.removeClass("active-price");
            this.$headHtml.find("td").removeClass("hover-price");
            d("td[urgency]").removeClass("active-price")
        }
    })
})(jQuery);