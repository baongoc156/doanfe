! function(o) {
    var e = {
        init: function(e) {
            var t = { offset: !0, bgfixed: !0, invert: !0 };
            return this.each(function() {
                function r() {
                    var o, e, r;
                    a = n.outerHeight(), windowHeight = l.height(), i = n.offset().top, e = (o = c.scrollTop()) + windowHeight, r = o - a, e > i && i > r && (pixelScrolled = o - (i - windowHeight), percentScrolled = pixelScrolled / (e - r), t.invert ? (deltaTopScrollVal = 100 * percentScrolled, n.css({ "background-position": "50% " + deltaTopScrollVal + "%" })) : (deltaTopScrollVal = 100 * (1 - percentScrolled), n.css({ "background-position": "50% " + deltaTopScrollVal + "%" })))
                }
                e && o.extend(t, e);
                var i, n = o(this),
                    l = o(window),
                    c = o(document),
                    a = 0,
                    s = "";
                Boolean(navigator.userAgent.match(/MSIE ([8]+)\./)), s = n.data("source-url"), parseFloat(n.data("source-width")), parseFloat(n.data("source-height")), n.css({ "background-image": "url(" + s + ")" }), l.on("scroll", function() { t.offset && r() }).trigger("scroll"), l.on("resize", function() { n.css({}), t.offset && r() }).trigger("resize")
            })
        },
        destroy: function() {},
        reposition: function() {},
        update: function() {}
    };
    o.fn.sitManParallex = function(t) { return e[t] ? e[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void o.error("Method with name " + t + " is not exist for jQuery") : e.init.apply(this, arguments) }
}(jQuery);