(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [182],
  {
    4587: (t, e, i) => {
      "use strict";
      i.d(e, { p: () => o });
      var n = i(1653);
      let r = ({
        color: t = "currentColor",
        direction: e = "left",
        distance: i = "md",
        duration: r = 0.4,
        easing: s = "cubic-bezier(0, 0, 0, 1)",
        hideOutline: o = !0,
        label: a,
        lines: l = 3,
        onToggle: u,
        render: h,
        rounded: c = !1,
        size: d = 32,
        toggle: p,
        toggled: f,
        disabled: m = !1,
        animateOnMount: v = !1,
      }) => {
        let [g, y] = (0, n.useState)(!1),
          [x, b] = (0, n.useState)(!1);
        (0, n.useEffect)(() => {
          b(!0);
        }, []);
        let w = Math.max(12, Math.min(48, d)),
          P = Math.round((48 - w) / 2),
          S = w / 12,
          T = Math.round(S),
          A =
            w /
            (l *
              (("lg" === i ? 0.25 : "sm" === i ? 0.75 : 0.5) +
                (3 === l ? 1 : 1.25))),
          E = Math.round(A),
          C = Math.round((48 - (T * l + E * (l - 1))) / 2),
          M = (S - T + (A - E)) / (3 === l ? 1 : 2),
          V = parseFloat(
            (
              w /
                (3 === l
                  ? "lg" === i
                    ? 4.0425
                    : "sm" === i
                    ? 5.1625
                    : 4.6325
                  : "lg" === i
                  ? 6.7875
                  : "sm" === i
                  ? 8.4875
                  : 7.6675) -
              M / (4 / 3)
            ).toFixed(2)
          ),
          j = Math.max(0, r),
          k = {
            cursor: m ? "not-allowed" : "pointer",
            height: "48px",
            position: "relative",
            transition: `${j}s ${s}`,
            userSelect: "none",
            width: "48px",
          },
          R = {
            background: t,
            height: `${T}px`,
            left: `${P}px`,
            position: "absolute",
          };
        o && (k.outline = "none"), c && (R.borderRadius = "9em");
        let D = p || y,
          O = (() => {
            let t = void 0 !== f ? f : g;
            return v && !x ? !t : t;
          })();
        return h({
          barHeight: T,
          barStyles: R,
          burgerStyles: k,
          easing: s,
          handler: () => {
            D(!O), "function" == typeof u && u(!O);
          },
          isLeft: "left" === e,
          isToggled: O,
          label: a,
          margin: E,
          move: V,
          time: j,
          topOffset: C,
          width: w,
        });
      };
      function s() {
        return (s =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var i = arguments[e];
              for (var n in i)
                Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
            }
            return t;
          }).apply(this, arguments);
      }
      let o = (t) =>
        n.createElement(
          r,
          s({}, t, {
            render: (e) =>
              n.createElement(
                "div",
                {
                  className: "hamburger-react",
                  "aria-label": e.label,
                  "aria-expanded": e.isToggled,
                  onClick: t.disabled ? void 0 : e.handler,
                  onKeyUp: t.disabled
                    ? void 0
                    : (t) => "Enter" === t.key && e.handler(),
                  role: "button",
                  style: e.burgerStyles,
                  tabIndex: 0,
                },
                n.createElement("div", {
                  style: {
                    ...e.barStyles,
                    width: `${e.width}px`,
                    top: `${e.topOffset}px`,
                    transition: `${e.time}s ${e.easing}`,
                    transform: `${
                      e.isToggled
                        ? `rotate(${45 * (e.isLeft ? -1 : 1)}deg) translate(${
                            e.move * (e.isLeft ? -1 : 1)
                          }px, ${e.move}px)`
                        : "none"
                    }`,
                  },
                }),
                n.createElement("div", {
                  style: {
                    ...e.barStyles,
                    width: `${e.width}px`,
                    top: `${e.topOffset + e.barHeight + e.margin}px`,
                    transition: `${e.time}s ${e.easing}`,
                    opacity: `${e.isToggled ? "0" : "1"}`,
                  },
                }),
                n.createElement("div", {
                  style: {
                    ...e.barStyles,
                    width: `${e.width}px`,
                    top: `${e.topOffset + 2 * e.barHeight + 2 * e.margin}px`,
                    transition: `${e.time}s ${e.easing}`,
                    transform: `${
                      e.isToggled
                        ? `rotate(${45 * (e.isLeft ? 1 : -1)}deg) translate(${
                            e.move * (e.isLeft ? -1 : 1)
                          }px, ${-1 * e.move}px)`
                        : "none"
                    }`,
                  },
                })
              ),
          })
        );
    },
    4812: (t, e, i) => {
      var n = "Expected a function",
        r = 0 / 0,
        s = /^\s+|\s+$/g,
        o = /^[-+]0x[0-9a-f]+$/i,
        a = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        u = parseInt,
        h = "object" == typeof i.g && i.g && i.g.Object === Object && i.g,
        c = "object" == typeof self && self && self.Object === Object && self,
        d = h || c || Function("return this")(),
        p = Object.prototype.toString,
        f = Math.max,
        m = Math.min,
        v = function () {
          return d.Date.now();
        };
      function g(t) {
        var e = typeof t;
        return !!t && ("object" == e || "function" == e);
      }
      function y(t) {
        if ("number" == typeof t) return t;
        if (
          "symbol" == typeof (e = t) ||
          (e && "object" == typeof e && "[object Symbol]" == p.call(e))
        )
          return r;
        if (g(t)) {
          var e,
            i = "function" == typeof t.valueOf ? t.valueOf() : t;
          t = g(i) ? i + "" : i;
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(s, "");
        var n = a.test(t);
        return n || l.test(t) ? u(t.slice(2), n ? 2 : 8) : o.test(t) ? r : +t;
      }
      t.exports = function (t, e, i) {
        var r = !0,
          s = !0;
        if ("function" != typeof t) throw TypeError(n);
        return (
          g(i) &&
            ((r = "leading" in i ? !!i.leading : r),
            (s = "trailing" in i ? !!i.trailing : s)),
          (function (t, e, i) {
            var r,
              s,
              o,
              a,
              l,
              u,
              h = 0,
              c = !1,
              d = !1,
              p = !0;
            if ("function" != typeof t) throw TypeError(n);
            function x(e) {
              var i = r,
                n = s;
              return (r = s = void 0), (h = e), (a = t.apply(n, i));
            }
            function b(t) {
              var i = t - u,
                n = t - h;
              return void 0 === u || i >= e || i < 0 || (d && n >= o);
            }
            function w() {
              var t,
                i,
                n,
                r = v();
              if (b(r)) return P(r);
              l = setTimeout(
                w,
                ((t = r - u), (i = r - h), (n = e - t), d ? m(n, o - i) : n)
              );
            }
            function P(t) {
              return ((l = void 0), p && r) ? x(t) : ((r = s = void 0), a);
            }
            function S() {
              var t,
                i = v(),
                n = b(i);
              if (((r = arguments), (s = this), (u = i), n)) {
                if (void 0 === l)
                  return (h = t = u), (l = setTimeout(w, e)), c ? x(t) : a;
                if (d) return (l = setTimeout(w, e)), x(u);
              }
              return void 0 === l && (l = setTimeout(w, e)), a;
            }
            return (
              (e = y(e) || 0),
              g(i) &&
                ((c = !!i.leading),
                (o = (d = "maxWait" in i) ? f(y(i.maxWait) || 0, e) : o),
                (p = "trailing" in i ? !!i.trailing : p)),
              (S.cancel = function () {
                void 0 !== l && clearTimeout(l),
                  (h = 0),
                  (r = u = s = l = void 0);
              }),
              (S.flush = function () {
                return void 0 === l ? a : P(v());
              }),
              S
            );
          })(t, e, { leading: r, maxWait: e, trailing: s })
        );
      };
    },
    7788: (t, e, i) => {
      "use strict";
      i.d(e, { default: () => r.a });
      var n = i(8180),
        r = i.n(n);
    },
    6344: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "Image", {
          enumerable: !0,
          get: function () {
            return x;
          },
        });
      let n = i(4347),
        r = i(7873),
        s = i(1790),
        o = r._(i(1653)),
        a = n._(i(6589)),
        l = n._(i(9832)),
        u = i(4244),
        h = i(1619),
        c = i(2857);
      i(940);
      let d = i(2688),
        p = n._(i(4390)),
        f = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function m(t, e, i, n, r, s, o) {
        let a = null == t ? void 0 : t.src;
        t &&
          t["data-loaded-src"] !== a &&
          ((t["data-loaded-src"] = a),
          ("decode" in t ? t.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (t.parentElement && t.isConnected) {
                if (("empty" !== e && r(!0), null == i ? void 0 : i.current)) {
                  let e = new Event("load");
                  Object.defineProperty(e, "target", {
                    writable: !1,
                    value: t,
                  });
                  let n = !1,
                    r = !1;
                  i.current({
                    ...e,
                    nativeEvent: e,
                    currentTarget: t,
                    target: t,
                    isDefaultPrevented: () => n,
                    isPropagationStopped: () => r,
                    persist: () => {},
                    preventDefault: () => {
                      (n = !0), e.preventDefault();
                    },
                    stopPropagation: () => {
                      (r = !0), e.stopPropagation();
                    },
                  });
                }
                (null == n ? void 0 : n.current) && n.current(t);
              }
            }));
      }
      function v(t) {
        return o.use ? { fetchPriority: t } : { fetchpriority: t };
      }
      "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
      let g = (0, o.forwardRef)((t, e) => {
        let {
          src: i,
          srcSet: n,
          sizes: r,
          height: a,
          width: l,
          decoding: u,
          className: h,
          style: c,
          fetchPriority: d,
          placeholder: p,
          loading: f,
          unoptimized: g,
          fill: y,
          onLoadRef: x,
          onLoadingCompleteRef: b,
          setBlurComplete: w,
          setShowAltText: P,
          sizesInput: S,
          onLoad: T,
          onError: A,
          ...E
        } = t;
        return (0, s.jsx)("img", {
          ...E,
          ...v(d),
          loading: f,
          width: l,
          height: a,
          decoding: u,
          "data-nimg": y ? "fill" : "1",
          className: h,
          style: c,
          sizes: r,
          srcSet: n,
          src: i,
          ref: (0, o.useCallback)(
            (t) => {
              e &&
                ("function" == typeof e
                  ? e(t)
                  : "object" == typeof e && (e.current = t)),
                t &&
                  (A && (t.src = t.src), t.complete && m(t, p, x, b, w, g, S));
            },
            [i, p, x, b, w, A, g, S, e]
          ),
          onLoad: (t) => {
            m(t.currentTarget, p, x, b, w, g, S);
          },
          onError: (t) => {
            P(!0), "empty" !== p && w(!0), A && A(t);
          },
        });
      });
      function y(t) {
        let { isAppRouter: e, imgAttributes: i } = t,
          n = {
            as: "image",
            imageSrcSet: i.srcSet,
            imageSizes: i.sizes,
            crossOrigin: i.crossOrigin,
            referrerPolicy: i.referrerPolicy,
            ...v(i.fetchPriority),
          };
        return e && a.default.preload
          ? (a.default.preload(i.src, n), null)
          : (0, s.jsx)(l.default, {
              children: (0, s.jsx)(
                "link",
                { rel: "preload", href: i.srcSet ? void 0 : i.src, ...n },
                "__nimg-" + i.src + i.srcSet + i.sizes
              ),
            });
      }
      let x = (0, o.forwardRef)((t, e) => {
        let i = (0, o.useContext)(d.RouterContext),
          n = (0, o.useContext)(c.ImageConfigContext),
          r = (0, o.useMemo)(() => {
            let t = f || n || h.imageConfigDefault,
              e = [...t.deviceSizes, ...t.imageSizes].sort((t, e) => t - e),
              i = t.deviceSizes.sort((t, e) => t - e);
            return { ...t, allSizes: e, deviceSizes: i };
          }, [n]),
          { onLoad: a, onLoadingComplete: l } = t,
          m = (0, o.useRef)(a);
        (0, o.useEffect)(() => {
          m.current = a;
        }, [a]);
        let v = (0, o.useRef)(l);
        (0, o.useEffect)(() => {
          v.current = l;
        }, [l]);
        let [x, b] = (0, o.useState)(!1),
          [w, P] = (0, o.useState)(!1),
          { props: S, meta: T } = (0, u.getImgProps)(t, {
            defaultLoader: p.default,
            imgConf: r,
            blurComplete: x,
            showAltText: w,
          });
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(g, {
              ...S,
              unoptimized: T.unoptimized,
              placeholder: T.placeholder,
              fill: T.fill,
              onLoadRef: m,
              onLoadingCompleteRef: v,
              setBlurComplete: b,
              setShowAltText: P,
              sizesInput: t.sizes,
              ref: e,
            }),
            T.priority
              ? (0, s.jsx)(y, { isAppRouter: !i, imgAttributes: S })
              : null,
          ],
        });
      });
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    1407: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = i(4347)._(i(1653)).default.createContext({});
    },
    1263: (t, e) => {
      "use strict";
      function i(t) {
        let {
          ampFirst: e = !1,
          hybrid: i = !1,
          hasQuery: n = !1,
        } = void 0 === t ? {} : t;
        return e || (i && n);
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
    },
    4244: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getImgProps", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }),
        i(940);
      let n = i(1678),
        r = i(1619);
      function s(t) {
        return void 0 !== t.default;
      }
      function o(t) {
        return void 0 === t
          ? t
          : "number" == typeof t
          ? Number.isFinite(t)
            ? t
            : NaN
          : "string" == typeof t && /^[0-9]+$/.test(t)
          ? parseInt(t, 10)
          : NaN;
      }
      function a(t, e) {
        var i;
        let a,
          l,
          u,
          {
            src: h,
            sizes: c,
            unoptimized: d = !1,
            priority: p = !1,
            loading: f,
            className: m,
            quality: v,
            width: g,
            height: y,
            fill: x = !1,
            style: b,
            overrideSrc: w,
            onLoad: P,
            onLoadingComplete: S,
            placeholder: T = "empty",
            blurDataURL: A,
            fetchPriority: E,
            layout: C,
            objectFit: M,
            objectPosition: V,
            lazyBoundary: j,
            lazyRoot: k,
            ...R
          } = t,
          { imgConf: D, showAltText: O, blurComplete: L, defaultLoader: F } = e,
          B = D || r.imageConfigDefault;
        if ("allSizes" in B) a = B;
        else {
          let t = [...B.deviceSizes, ...B.imageSizes].sort((t, e) => t - e),
            e = B.deviceSizes.sort((t, e) => t - e);
          a = { ...B, allSizes: t, deviceSizes: e };
        }
        if (void 0 === F)
          throw Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://maxims-organization-22.gitbook.io/dialogxai"
          );
        let W = R.loader || F;
        delete R.loader, delete R.srcSet;
        let I = "__next_img_default" in W;
        if (I) {
          if ("custom" === a.loader)
            throw Error(
              'Image with src "' +
                h +
                '" is missing "loader" prop.\nRead more: https://maxims-organization-22.gitbook.io/dialogxai'
            );
        } else {
          let t = W;
          W = (e) => {
            let { config: i, ...n } = e;
            return t(n);
          };
        }
        if (C) {
          "fill" === C && (x = !0);
          let t = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[C];
          t && (b = { ...b, ...t });
          let e = { responsive: "100vw", fill: "100vw" }[C];
          e && !c && (c = e);
        }
        let $ = "",
          _ = o(g),
          N = o(y);
        if ("object" == typeof (i = h) && (s(i) || void 0 !== i.src)) {
          let t = s(h) ? h.default : h;
          if (!t.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(t)
            );
          if (!t.height || !t.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(t)
            );
          if (
            ((l = t.blurWidth),
            (u = t.blurHeight),
            (A = A || t.blurDataURL),
            ($ = t.src),
            !x)
          ) {
            if (_ || N) {
              if (_ && !N) {
                let e = _ / t.width;
                N = Math.round(t.height * e);
              } else if (!_ && N) {
                let e = N / t.height;
                _ = Math.round(t.width * e);
              }
            } else (_ = t.width), (N = t.height);
          }
        }
        let U = !p && ("lazy" === f || void 0 === f);
        (!(h = "string" == typeof h ? h : $) ||
          h.startsWith("data:") ||
          h.startsWith("blob:")) &&
          ((d = !0), (U = !1)),
          a.unoptimized && (d = !0),
          I && h.endsWith(".svg") && !a.dangerouslyAllowSVG && (d = !0),
          p && (E = "high");
        let z = o(v),
          H = Object.assign(
            x
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: M,
                  objectPosition: V,
                }
              : {},
            O ? {} : { color: "transparent" },
            b
          ),
          X =
            L || "empty" === T
              ? null
              : "blur" === T
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, n.getImageBlurSvg)({
                  widthInt: _,
                  heightInt: N,
                  blurWidth: l,
                  blurHeight: u,
                  blurDataURL: A || "",
                  objectFit: H.objectFit,
                }) +
                '")'
              : 'url("' + T + '")',
          Y = X
            ? {
                backgroundSize: H.objectFit || "cover",
                backgroundPosition: H.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: X,
              }
            : {},
          K = (function (t) {
            let {
              config: e,
              src: i,
              unoptimized: n,
              width: r,
              quality: s,
              sizes: o,
              loader: a,
            } = t;
            if (n) return { src: i, srcSet: void 0, sizes: void 0 };
            let { widths: l, kind: u } = (function (t, e, i) {
                let { deviceSizes: n, allSizes: r } = t;
                if (i) {
                  let t = /(^|\s)(1?\d?\d)vw/g,
                    e = [];
                  for (let n; (n = t.exec(i)); n) e.push(parseInt(n[2]));
                  if (e.length) {
                    let t = 0.01 * Math.min(...e);
                    return {
                      widths: r.filter((e) => e >= n[0] * t),
                      kind: "w",
                    };
                  }
                  return { widths: r, kind: "w" };
                }
                return "number" != typeof e
                  ? { widths: n, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [e, 2 * e].map(
                            (t) => r.find((e) => e >= t) || r[r.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(e, r, o),
              h = l.length - 1;
            return {
              sizes: o || "w" !== u ? o : "100vw",
              srcSet: l
                .map(
                  (t, n) =>
                    a({ config: e, src: i, quality: s, width: t }) +
                    " " +
                    ("w" === u ? t : n + 1) +
                    u
                )
                .join(", "),
              src: a({ config: e, src: i, quality: s, width: l[h] }),
            };
          })({
            config: a,
            src: h,
            unoptimized: d,
            width: _,
            quality: z,
            sizes: c,
            loader: W,
          });
        return {
          props: {
            ...R,
            loading: U ? "lazy" : f,
            fetchPriority: E,
            width: _,
            height: N,
            decoding: "async",
            className: m,
            style: { ...H, ...Y },
            sizes: K.sizes,
            srcSet: K.srcSet,
            src: w || K.src,
          },
          meta: { unoptimized: d, priority: p, placeholder: T, fill: x },
        };
      }
    },
    9832: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          default: function () {
            return m;
          },
          defaultHead: function () {
            return c;
          },
        });
      let n = i(4347),
        r = i(7873),
        s = i(1790),
        o = r._(i(1653)),
        a = n._(i(9709)),
        l = i(1407),
        u = i(4960),
        h = i(1263);
      function c(t) {
        void 0 === t && (t = !1);
        let e = [(0, s.jsx)("meta", { charSet: "utf-8" })];
        return (
          t ||
            e.push(
              (0, s.jsx)("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          e
        );
      }
      function d(t, e) {
        return "string" == typeof e || "number" == typeof e
          ? t
          : e.type === o.default.Fragment
          ? t.concat(
              o.default.Children.toArray(e.props.children).reduce(
                (t, e) =>
                  "string" == typeof e || "number" == typeof e
                    ? t
                    : t.concat(e),
                []
              )
            )
          : t.concat(e);
      }
      i(940);
      let p = ["name", "httpEquiv", "charSet", "itemProp"];
      function f(t, e) {
        let { inAmpMode: i } = e;
        return t
          .reduce(d, [])
          .reverse()
          .concat(c(i).reverse())
          .filter(
            (function () {
              let t = new Set(),
                e = new Set(),
                i = new Set(),
                n = {};
              return (r) => {
                let s = !0,
                  o = !1;
                if (
                  r.key &&
                  "number" != typeof r.key &&
                  r.key.indexOf("$") > 0
                ) {
                  o = !0;
                  let e = r.key.slice(r.key.indexOf("$") + 1);
                  t.has(e) ? (s = !1) : t.add(e);
                }
                switch (r.type) {
                  case "title":
                  case "base":
                    e.has(r.type) ? (s = !1) : e.add(r.type);
                    break;
                  case "meta":
                    for (let t = 0, e = p.length; t < e; t++) {
                      let e = p[t];
                      if (r.props.hasOwnProperty(e)) {
                        if ("charSet" === e) i.has(e) ? (s = !1) : i.add(e);
                        else {
                          let t = r.props[e],
                            i = n[e] || new Set();
                          ("name" !== e || !o) && i.has(t)
                            ? (s = !1)
                            : (i.add(t), (n[e] = i));
                        }
                      }
                    }
                }
                return s;
              };
            })()
          )
          .reverse()
          .map((t, e) => {
            let n = t.key || e;
            if (
              !i &&
              "link" === t.type &&
              t.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some((e) => t.props.href.startsWith(e))
            ) {
              let e = { ...(t.props || {}) };
              return (
                (e["data-href"] = e.href),
                (e.href = void 0),
                (e["data-optimized-fonts"] = !0),
                o.default.cloneElement(t, e)
              );
            }
            return o.default.cloneElement(t, { key: n });
          });
      }
      let m = function (t) {
        let { children: e } = t,
          i = (0, o.useContext)(l.AmpStateContext),
          n = (0, o.useContext)(u.HeadManagerContext);
        return (0, s.jsx)(a.default, {
          reduceComponentsToState: f,
          headManager: n,
          inAmpMode: (0, h.isInAmpMode)(i),
          children: e,
        });
      };
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    1678: (t, e) => {
      "use strict";
      function i(t) {
        let {
            widthInt: e,
            heightInt: i,
            blurWidth: n,
            blurHeight: r,
            blurDataURL: s,
            objectFit: o,
          } = t,
          a = n ? 40 * n : e,
          l = r ? 40 * r : i,
          u = a && l ? "viewBox='0 0 " + a + " " + l + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          u +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (u
            ? "none"
            : "contain" === o
            ? "xMidYMid"
            : "cover" === o
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          s +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
    },
    2857: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "ImageConfigContext", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let n = i(4347)._(i(1653)),
        r = i(1619),
        s = n.default.createContext(r.imageConfigDefault);
    },
    1619: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          VALID_LOADERS: function () {
            return i;
          },
          imageConfigDefault: function () {
            return n;
          },
        });
      let i = ["default", "imgix", "cloudinary", "akamai", "custom"],
        n = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ["image/webp"],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy:
            "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "attachment",
          remotePatterns: [],
          unoptimized: !1,
        };
    },
    8180: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          default: function () {
            return l;
          },
          getImageProps: function () {
            return a;
          },
        });
      let n = i(4347),
        r = i(4244),
        s = i(6344),
        o = n._(i(4390));
      function a(t) {
        let { props: e } = (0, r.getImgProps)(t, {
          defaultLoader: o.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [t, i] of Object.entries(e)) void 0 === i && delete e[t];
        return { props: e };
      }
      let l = s.Image;
    },
    4390: (t, e) => {
      "use strict";
      function i(t) {
        let { config: e, src: i, width: n, quality: r } = t;
        return i
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        (i.__next_img_default = !0);
      let n = i;
    },
    2688: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "RouterContext", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = i(4347)._(i(1653)).default.createContext(null);
    },
    9709: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let n = i(1653),
        r = "undefined" == typeof window,
        s = r ? () => {} : n.useLayoutEffect,
        o = r ? () => {} : n.useEffect;
      function a(t) {
        let { headManager: e, reduceComponentsToState: i } = t;
        function a() {
          if (e && e.mountedInstances) {
            let r = n.Children.toArray(
              Array.from(e.mountedInstances).filter(Boolean)
            );
            e.updateHead(i(r, t));
          }
        }
        if (r) {
          var l;
          null == e || null == (l = e.mountedInstances) || l.add(t.children),
            a();
        }
        return (
          s(() => {
            var i;
            return (
              null == e ||
                null == (i = e.mountedInstances) ||
                i.add(t.children),
              () => {
                var i;
                null == e ||
                  null == (i = e.mountedInstances) ||
                  i.delete(t.children);
              }
            );
          }),
          s(
            () => (
              e && (e._pendingUpdate = a),
              () => {
                e && (e._pendingUpdate = a);
              }
            )
          ),
          o(
            () => (
              e &&
                e._pendingUpdate &&
                (e._pendingUpdate(), (e._pendingUpdate = null)),
              () => {
                e &&
                  e._pendingUpdate &&
                  (e._pendingUpdate(), (e._pendingUpdate = null));
              }
            )
          ),
          null
        );
      }
    },
    5714: (t, e, i) => {
      "use strict";
      var n = i(7240);
      function r() {}
      function s() {}
      (s.resetWarningCache = r),
        (t.exports = function () {
          function t(t, e, i, r, s, o) {
            if (o !== n) {
              var a = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((a.name = "Invariant Violation"), a);
            }
          }
          function e() {
            return t;
          }
          t.isRequired = t;
          var i = {
            array: t,
            bigint: t,
            bool: t,
            func: t,
            number: t,
            object: t,
            string: t,
            symbol: t,
            any: t,
            arrayOf: e,
            element: t,
            elementType: t,
            instanceOf: e,
            node: t,
            objectOf: e,
            oneOf: e,
            oneOfType: e,
            shape: e,
            exact: e,
            checkPropTypes: s,
            resetWarningCache: r,
          };
          return (i.PropTypes = i), i;
        });
    },
    334: (t, e, i) => {
      t.exports = i(5714)();
    },
    7240: (t) => {
      "use strict";
      t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    7870: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var n = (function () {
          function t(t, e) {
            for (var i = 0; i < e.length; i++) {
              var n = e[i];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }
          return function (e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e;
          };
        })(),
        r = function (t, e, i) {
          for (var n = !0; n; ) {
            var r = t,
              s = e,
              o = i;
            (n = !1), null === r && (r = Function.prototype);
            var a = Object.getOwnPropertyDescriptor(r, s);
            if (void 0 === a) {
              var l = Object.getPrototypeOf(r);
              if (null === l) return;
              (t = l), (e = s), (i = o), (n = !0), (a = l = void 0);
              continue;
            }
            if ("value" in a) return a.value;
            var u = a.get;
            if (void 0 === u) return;
            return u.call(o);
          }
        };
      function s(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var o = i(1653),
        a = s(o),
        l = s(i(4812)),
        u = s(i(334)),
        h = (function (t) {
          function e(t) {
            !(function (t, e) {
              if (!(t instanceof e))
                throw TypeError("Cannot call a class as a function");
            })(this, e),
              r(Object.getPrototypeOf(e.prototype), "constructor", this).call(
                this,
                t
              ),
              (this.serverSide = "undefined" == typeof window),
              (this.listener = (0, l.default)(
                this.handleScroll.bind(this),
                50
              )),
              (this.visibility = { onScreen: !1, inViewport: !1 }),
              (this.state = {
                classes: "animated",
                style: {
                  animationDuration: this.props.duration + "s",
                  opacity: this.props.initiallyVisible ? 1 : 0,
                },
              });
          }
          return (
            !(function (t, e) {
              if ("function" != typeof e && null !== e)
                throw TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof e
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                e &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(t, e)
                    : (t.__proto__ = e));
            })(e, t),
            n(e, [
              {
                key: "getElementTop",
                value: function (t) {
                  for (
                    var e = 0;
                    t && void 0 !== t.offsetTop && void 0 !== t.clientTop;

                  )
                    (e += t.offsetTop + t.clientTop), (t = t.offsetParent);
                  return e;
                },
              },
              {
                key: "getScrollPos",
                value: function () {
                  return void 0 !== this.scrollableParent.pageYOffset
                    ? this.scrollableParent.pageYOffset
                    : this.scrollableParent.scrollTop;
                },
              },
              {
                key: "getScrollableParentHeight",
                value: function () {
                  return void 0 !== this.scrollableParent.innerHeight
                    ? this.scrollableParent.innerHeight
                    : this.scrollableParent.clientHeight;
                },
              },
              {
                key: "getViewportTop",
                value: function () {
                  return this.getScrollPos() + this.props.offset;
                },
              },
              {
                key: "getViewportBottom",
                value: function () {
                  return (
                    this.getScrollPos() +
                    this.getScrollableParentHeight() -
                    this.props.offset
                  );
                },
              },
              {
                key: "isInViewport",
                value: function (t) {
                  return (
                    t >= this.getViewportTop() && t <= this.getViewportBottom()
                  );
                },
              },
              {
                key: "isAboveViewport",
                value: function (t) {
                  return t < this.getViewportTop();
                },
              },
              {
                key: "isBelowViewport",
                value: function (t) {
                  return t > this.getViewportBottom();
                },
              },
              {
                key: "inViewport",
                value: function (t, e) {
                  return (
                    this.isInViewport(t) ||
                    this.isInViewport(e) ||
                    (this.isAboveViewport(t) && this.isBelowViewport(e))
                  );
                },
              },
              {
                key: "onScreen",
                value: function (t, e) {
                  return !this.isAboveScreen(e) && !this.isBelowScreen(t);
                },
              },
              {
                key: "isAboveScreen",
                value: function (t) {
                  return t < this.getScrollPos();
                },
              },
              {
                key: "isBelowScreen",
                value: function (t) {
                  return (
                    t > this.getScrollPos() + this.getScrollableParentHeight()
                  );
                },
              },
              {
                key: "getVisibility",
                value: function () {
                  var t =
                      this.getElementTop(this.node) -
                      this.getElementTop(this.scrollableParent),
                    e = t + this.node.clientHeight;
                  return {
                    inViewport: this.inViewport(t, e),
                    onScreen: this.onScreen(t, e),
                  };
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  if (!this.serverSide) {
                    var t = this.props.scrollableParentSelector;
                    (this.scrollableParent = t
                      ? document.querySelector(t)
                      : window),
                      this.scrollableParent &&
                      this.scrollableParent.addEventListener
                        ? this.scrollableParent.addEventListener(
                            "scroll",
                            this.listener
                          )
                        : console.warn(
                            "Cannot find element by locator: " +
                              this.props.scrollableParentSelector
                          ),
                      this.props.animatePreScroll && this.handleScroll();
                  }
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  clearTimeout(this.delayedAnimationTimeout),
                    clearTimeout(this.callbackTimeout),
                    this.listener.cancel(),
                    window &&
                      window.removeEventListener &&
                      window.removeEventListener("scroll", this.listener);
                },
              },
              {
                key: "visibilityHasChanged",
                value: function (t, e) {
                  return (
                    t.inViewport !== e.inViewport || t.onScreen !== e.onScreen
                  );
                },
              },
              {
                key: "animate",
                value: function (t, e) {
                  var i = this;
                  this.delayedAnimationTimeout = setTimeout(function () {
                    (i.animating = !0),
                      i.setState({
                        classes: "animated " + t,
                        style: { animationDuration: i.props.duration + "s" },
                      }),
                      (i.callbackTimeout = setTimeout(
                        e,
                        1e3 * i.props.duration
                      ));
                  }, this.props.delay);
                },
              },
              {
                key: "animateIn",
                value: function (t) {
                  var e = this;
                  this.animate(this.props.animateIn, function () {
                    e.props.animateOnce ||
                      (e.setState({
                        style: {
                          animationDuration: e.props.duration + "s",
                          opacity: 1,
                        },
                      }),
                      (e.animating = !1));
                    var i = e.getVisibility();
                    t && t(i);
                  });
                },
              },
              {
                key: "animateOut",
                value: function (t) {
                  var e = this;
                  this.animate(this.props.animateOut, function () {
                    e.setState({
                      classes: "animated",
                      style: {
                        animationDuration: e.props.duration + "s",
                        opacity: 0,
                      },
                    });
                    var i = e.getVisibility();
                    i.inViewport && e.props.animateIn
                      ? e.animateIn(e.props.afterAnimatedIn)
                      : (e.animating = !1),
                      t && t(i);
                  });
                },
              },
              {
                key: "handleScroll",
                value: function () {
                  if (!this.animating) {
                    var t = this.getVisibility();
                    this.visibilityHasChanged(this.visibility, t) &&
                      (clearTimeout(this.delayedAnimationTimeout),
                      t.onScreen
                        ? t.inViewport && this.props.animateIn
                          ? this.animateIn(this.props.afterAnimatedIn)
                          : t.onScreen &&
                            this.visibility.inViewport &&
                            this.props.animateOut &&
                            1 === this.state.style.opacity &&
                            this.animateOut(this.props.afterAnimatedOut)
                        : this.setState({
                            classes: "animated",
                            style: {
                              animationDuration: this.props.duration + "s",
                              opacity: this.props.initiallyVisible ? 1 : 0,
                            },
                          }),
                      (this.visibility = t));
                  }
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this,
                    e = this.props.className
                      ? this.props.className + " " + this.state.classes
                      : this.state.classes;
                  return a.default.createElement(
                    "div",
                    {
                      ref: function (e) {
                        t.node = e;
                      },
                      className: e,
                      style: Object.assign(
                        {},
                        this.state.style,
                        this.props.style
                      ),
                    },
                    this.props.children
                  );
                },
              },
            ]),
            e
          );
        })(o.Component);
      (e.default = h),
        (h.defaultProps = {
          offset: 150,
          duration: 1,
          initiallyVisible: !1,
          delay: 0,
          animateOnce: !1,
          animatePreScroll: !0,
        }),
        (h.propTypes = {
          animateIn: u.default.string,
          animateOut: u.default.string,
          offset: u.default.number,
          duration: u.default.number,
          delay: u.default.number,
          initiallyVisible: u.default.bool,
          animateOnce: u.default.bool,
          style: u.default.object,
          scrollableParentSelector: u.default.string,
          className: u.default.string,
          animatePreScroll: u.default.bool,
        }),
        (t.exports = e.default);
    },
    1659: (t, e, i) => {
      "use strict";
      i.d(e, { Z: () => d });
      var n = i(6589),
        r = i(1653),
        s = i(334),
        o = i.n(s),
        a = !!(
          "undefined" != typeof window &&
          window.document &&
          window.document.createElement
        ),
        l = (function () {
          function t(t, e) {
            for (var i = 0; i < e.length; i++) {
              var n = e[i];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }
          return function (e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e;
          };
        })(),
        u = (function (t) {
          function e() {
            return (
              !(function (t, e) {
                if (!(t instanceof e))
                  throw TypeError("Cannot call a class as a function");
              })(this, e),
              (function (t, e) {
                if (!t)
                  throw ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return e && ("object" == typeof e || "function" == typeof e)
                  ? e
                  : t;
              })(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
              )
            );
          }
          return (
            !(function (t, e) {
              if ("function" != typeof e && null !== e)
                throw TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof e
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                e &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(t, e)
                    : (t.__proto__ = e));
            })(e, t),
            l(e, [
              {
                key: "componentWillUnmount",
                value: function () {
                  this.defaultNode &&
                    document.body.removeChild(this.defaultNode),
                    (this.defaultNode = null);
                },
              },
              {
                key: "render",
                value: function () {
                  return a
                    ? (this.props.node ||
                        this.defaultNode ||
                        ((this.defaultNode = document.createElement("div")),
                        document.body.appendChild(this.defaultNode)),
                      n.createPortal(
                        this.props.children,
                        this.props.node || this.defaultNode
                      ))
                    : null;
                },
              },
            ]),
            e
          );
        })(r.Component);
      u.propTypes = { children: o().node.isRequired, node: o().any };
      var h = (function () {
          function t(t, e) {
            for (var i = 0; i < e.length; i++) {
              var n = e[i];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }
          return function (e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e;
          };
        })(),
        c = (function (t) {
          function e() {
            return (
              !(function (t, e) {
                if (!(t instanceof e))
                  throw TypeError("Cannot call a class as a function");
              })(this, e),
              (function (t, e) {
                if (!t)
                  throw ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return e && ("object" == typeof e || "function" == typeof e)
                  ? e
                  : t;
              })(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
              )
            );
          }
          return (
            !(function (t, e) {
              if ("function" != typeof e && null !== e)
                throw TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof e
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                e &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(t, e)
                    : (t.__proto__ = e));
            })(e, t),
            h(e, [
              {
                key: "componentDidMount",
                value: function () {
                  this.renderPortal();
                },
              },
              {
                key: "componentDidUpdate",
                value: function (t) {
                  this.renderPortal();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  n.unmountComponentAtNode(this.defaultNode || this.props.node),
                    this.defaultNode &&
                      document.body.removeChild(this.defaultNode),
                    (this.defaultNode = null),
                    (this.portal = null);
                },
              },
              {
                key: "renderPortal",
                value: function (t) {
                  this.props.node ||
                    this.defaultNode ||
                    ((this.defaultNode = document.createElement("div")),
                    document.body.appendChild(this.defaultNode));
                  var e = this.props.children;
                  "function" == typeof this.props.children.type &&
                    (e = r.cloneElement(this.props.children)),
                    (this.portal = n.unstable_renderSubtreeIntoContainer(
                      this,
                      e,
                      this.props.node || this.defaultNode
                    ));
                },
              },
              {
                key: "render",
                value: function () {
                  return null;
                },
              },
            ]),
            e
          );
        })(r.Component);
      c.propTypes = { children: o().node.isRequired, node: o().any };
      let d = n.createPortal ? u : c;
    },
    9820: (t, e, i) => {
      "use strict";
      i.d(e, { M: () => g });
      var n = i(1790),
        r = i(1653),
        s = i(9340),
        o = i(6161),
        a = i(4909);
      class l extends r.Component {
        getSnapshotBeforeUpdate(t) {
          let e = this.props.childRef.current;
          if (e && t.isPresent && !this.props.isPresent) {
            let t = this.props.sizeRef.current;
            (t.height = e.offsetHeight || 0),
              (t.width = e.offsetWidth || 0),
              (t.top = e.offsetTop),
              (t.left = e.offsetLeft);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function u(t) {
        let { children: e, isPresent: i } = t,
          s = (0, r.useId)(),
          o = (0, r.useRef)(null),
          u = (0, r.useRef)({ width: 0, height: 0, top: 0, left: 0 }),
          { nonce: h } = (0, r.useContext)(a._);
        return (
          (0, r.useInsertionEffect)(() => {
            let { width: t, height: e, top: n, left: r } = u.current;
            if (i || !o.current || !t || !e) return;
            o.current.dataset.motionPopId = s;
            let a = document.createElement("style");
            return (
              h && (a.nonce = h),
              document.head.appendChild(a),
              a.sheet &&
                a.sheet.insertRule(
                  '\n          [data-motion-pop-id="'
                    .concat(
                      s,
                      '"] {\n            position: absolute !important;\n            width: '
                    )
                    .concat(t, "px !important;\n            height: ")
                    .concat(e, "px !important;\n            top: ")
                    .concat(n, "px !important;\n            left: ")
                    .concat(r, "px !important;\n          }\n        ")
                ),
              () => {
                document.head.removeChild(a);
              }
            );
          }, [i]),
          (0, n.jsx)(l, {
            isPresent: i,
            childRef: o,
            sizeRef: u,
            children: r.cloneElement(e, { ref: o }),
          })
        );
      }
      let h = (t) => {
        let {
            children: e,
            initial: i,
            isPresent: a,
            onExitComplete: l,
            custom: h,
            presenceAffectsLayout: d,
            mode: p,
          } = t,
          f = (0, o.h)(c),
          m = (0, r.useId)(),
          v = (0, r.useMemo)(
            () => ({
              id: m,
              initial: i,
              isPresent: a,
              custom: h,
              onExitComplete: (t) => {
                for (let e of (f.set(t, !0), f.values())) if (!e) return;
                l && l();
              },
              register: (t) => (f.set(t, !1), () => f.delete(t)),
            }),
            d ? [Math.random()] : [a]
          );
        return (
          (0, r.useMemo)(() => {
            f.forEach((t, e) => f.set(e, !1));
          }, [a]),
          r.useEffect(() => {
            a || f.size || !l || l();
          }, [a]),
          "popLayout" === p &&
            (e = (0, n.jsx)(u, { isPresent: a, children: e })),
          (0, n.jsx)(s.O.Provider, { value: v, children: e })
        );
      };
      function c() {
        return new Map();
      }
      var d = i(4886),
        p = i(1975);
      let f = (t) => t.key || "";
      function m(t) {
        let e = [];
        return (
          r.Children.forEach(t, (t) => {
            (0, r.isValidElement)(t) && e.push(t);
          }),
          e
        );
      }
      var v = i(5138);
      let g = (t) => {
        let {
          children: e,
          exitBeforeEnter: i,
          custom: s,
          initial: a = !0,
          onExitComplete: l,
          presenceAffectsLayout: u = !0,
          mode: c = "sync",
        } = t;
        (0, p.k)(!i, "Replace exitBeforeEnter with mode='wait'");
        let g = (0, r.useMemo)(() => m(e), [e]),
          y = g.map(f),
          x = (0, r.useRef)(!0),
          b = (0, r.useRef)(g),
          w = (0, o.h)(() => new Map()),
          [P, S] = (0, r.useState)(g),
          [T, A] = (0, r.useState)(g);
        (0, v.L)(() => {
          (x.current = !1), (b.current = g);
          for (let t = 0; t < T.length; t++) {
            let e = f(T[t]);
            y.includes(e) ? w.delete(e) : !0 !== w.get(e) && w.set(e, !1);
          }
        }, [T, y.length, y.join("-")]);
        let E = [];
        if (g !== P) {
          let t = [...g];
          for (let e = 0; e < T.length; e++) {
            let i = T[e],
              n = f(i);
            y.includes(n) || (t.splice(e, 0, i), E.push(i));
          }
          "wait" === c && E.length && (t = E), A(m(t)), S(g);
          return;
        }
        let { forceRender: C } = (0, r.useContext)(d.p);
        return (0, n.jsx)(n.Fragment, {
          children: T.map((t) => {
            let e = f(t),
              i = g === T || y.includes(e);
            return (0, n.jsx)(
              h,
              {
                isPresent: i,
                initial: (!x.current || !!a) && void 0,
                custom: i ? void 0 : s,
                presenceAffectsLayout: u,
                mode: c,
                onExitComplete: i
                  ? void 0
                  : () => {
                      if (!w.has(e)) return;
                      w.set(e, !0);
                      let t = !0;
                      w.forEach((e) => {
                        e || (t = !1);
                      }),
                        t && (null == C || C(), A(b.current), l && l());
                    },
                children: t,
              },
              e
            );
          }),
        });
      };
    },
    4886: (t, e, i) => {
      "use strict";
      i.d(e, { p: () => n });
      let n = (0, i(1653).createContext)({});
    },
    4909: (t, e, i) => {
      "use strict";
      i.d(e, { _: () => n });
      let n = (0, i(1653).createContext)({
        transformPagePoint: (t) => t,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    9340: (t, e, i) => {
      "use strict";
      i.d(e, { O: () => n });
      let n = (0, i(1653).createContext)(null);
    },
    8511: (t, e, i) => {
      "use strict";
      i.d(e, { Z: () => s });
      var n = i(1498);
      let r = [
        "read",
        "resolveKeyframes",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
      function s(t, e) {
        let i = !1,
          s = !0,
          o = { delta: 0, timestamp: 0, isProcessing: !1 },
          a = () => (i = !0),
          l = r.reduce(
            (t, e) => (
              (t[e] = (function (t) {
                let e = new Set(),
                  i = new Set(),
                  n = !1,
                  r = !1,
                  s = new WeakSet(),
                  o = { delta: 0, timestamp: 0, isProcessing: !1 };
                function a(e) {
                  s.has(e) && (l.schedule(e), t()), e(o);
                }
                let l = {
                  schedule: (t, r = !1, o = !1) => {
                    let a = o && n ? e : i;
                    return r && s.add(t), a.has(t) || a.add(t), t;
                  },
                  cancel: (t) => {
                    i.delete(t), s.delete(t);
                  },
                  process: (t) => {
                    if (((o = t), n)) {
                      r = !0;
                      return;
                    }
                    (n = !0),
                      ([e, i] = [i, e]),
                      i.clear(),
                      e.forEach(a),
                      (n = !1),
                      r && ((r = !1), l.process(t));
                  },
                };
                return l;
              })(a)),
              t
            ),
            {}
          ),
          {
            read: u,
            resolveKeyframes: h,
            update: c,
            preRender: d,
            render: p,
            postRender: f,
          } = l,
          m = () => {
            let r = n.c.useManualTiming ? o.timestamp : performance.now();
            (i = !1),
              (o.delta = s
                ? 1e3 / 60
                : Math.max(Math.min(r - o.timestamp, 40), 1)),
              (o.timestamp = r),
              (o.isProcessing = !0),
              u.process(o),
              h.process(o),
              c.process(o),
              d.process(o),
              p.process(o),
              f.process(o),
              (o.isProcessing = !1),
              i && e && ((s = !1), t(m));
          },
          v = () => {
            (i = !0), (s = !0), o.isProcessing || t(m);
          };
        return {
          schedule: r.reduce((t, e) => {
            let n = l[e];
            return (
              (t[e] = (t, e = !1, r = !1) => (i || v(), n.schedule(t, e, r))), t
            );
          }, {}),
          cancel: (t) => {
            for (let e = 0; e < r.length; e++) l[r[e]].cancel(t);
          },
          state: o,
          steps: l,
        };
      }
    },
    4822: (t, e, i) => {
      "use strict";
      i.d(e, { Pn: () => s, Wi: () => r, frameData: () => o, yL: () => a });
      var n = i(925);
      let {
        schedule: r,
        cancel: s,
        state: o,
        steps: a,
      } = (0, i(8511).Z)(
        "undefined" != typeof requestAnimationFrame
          ? requestAnimationFrame
          : n.Z,
        !0
      );
    },
    4862: (t, e, i) => {
      "use strict";
      let n;
      i.d(e, { X: () => a });
      var r = i(1498),
        s = i(4822);
      function o() {
        n = void 0;
      }
      let a = {
        now: () => (
          void 0 === n &&
            a.set(
              s.frameData.isProcessing || r.c.useManualTiming
                ? s.frameData.timestamp
                : performance.now()
            ),
          n
        ),
        set: (t) => {
          (n = t), queueMicrotask(o);
        },
      };
    },
    7640: (t, e, i) => {
      "use strict";
      function n(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
      i.d(e, { E: () => rC });
      let r = (t) => Array.isArray(t);
      function s(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let n = 0; n < i; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      function o(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      function a(t) {
        let e = [{}, {}];
        return (
          null == t ||
            t.values.forEach((t, i) => {
              (e[0][i] = t.get()), (e[1][i] = t.getVelocity());
            }),
          e
        );
      }
      function l(t, e, i, n) {
        if ("function" == typeof e) {
          let [r, s] = a(n);
          e = e(void 0 !== i ? i : t.custom, r, s);
        }
        if (
          ("string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e)
        ) {
          let [r, s] = a(n);
          e = e(void 0 !== i ? i : t.custom, r, s);
        }
        return e;
      }
      function u(t, e, i) {
        let n = t.getProps();
        return l(n, e, void 0 !== i ? i : n.custom, t);
      }
      let h = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        c = ["initial", ...h],
        d = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        p = new Set(d),
        f = (t) => 1e3 * t,
        m = (t) => t / 1e3,
        v = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        g = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        y = { type: "keyframes", duration: 0.8 },
        x = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        b = (t, { keyframes: e }) =>
          e.length > 2
            ? y
            : p.has(t)
            ? t.startsWith("scale")
              ? g(e[1])
              : v
            : x;
      function w(t, e) {
        return t[e] || t.default || t;
      }
      var P,
        S,
        T = i(1498);
      let A = { current: !1 },
        E = (t) => null !== t;
      function C(t, { repeat: e, repeatType: i = "loop" }, n) {
        let r = t.filter(E),
          s = e && "loop" !== i && e % 2 == 1 ? 0 : r.length - 1;
        return s && void 0 !== n ? n : r[s];
      }
      var M = i(4822),
        V = i(925);
      let j = (t, e, i) =>
        (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function k(t, e, i, n) {
        if (t === e && i === n) return V.Z;
        let r = (e) =>
          (function (t, e, i, n, r) {
            let s, o;
            let a = 0;
            do (s = j((o = e + (i - e) / 2), n, r) - t) > 0 ? (i = o) : (e = o);
            while (Math.abs(s) > 1e-7 && ++a < 12);
            return o;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : j(r(t), e, n));
      }
      let R = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        D = (t) => (e) => 1 - t(1 - e),
        O = k(0.33, 1.53, 0.69, 0.99),
        L = D(O),
        F = R(L),
        B = (t) =>
          (t *= 2) < 1 ? 0.5 * L(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        W = (t) => 1 - Math.sin(Math.acos(t)),
        I = D(W),
        $ = R(W),
        _ = (t) => /^0[^.\s]+$/u.test(t);
      var N = i(1975);
      let U = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
      var z = i(4490);
      let H = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
      var X = i(8332),
        Y = i(7670);
      let K = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        G = (t) => t === X.Rx || t === Y.px,
        q = (t, e) => parseFloat(t.split(", ")[e]),
        Z =
          (t, e) =>
          (i, { transform: n }) => {
            if ("none" === n || !n) return 0;
            let r = n.match(/^matrix3d\((.+)\)$/u);
            if (r) return q(r[1], e);
            {
              let e = n.match(/^matrix\((.+)\)$/u);
              return e ? q(e[1], t) : 0;
            }
          },
        J = new Set(["x", "y", "z"]),
        Q = d.filter((t) => !J.has(t)),
        tt = {
          width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          top: (t, { top: e }) => parseFloat(e),
          left: (t, { left: e }) => parseFloat(e),
          bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
          right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
          x: Z(4, 13),
          y: Z(5, 14),
        };
      (tt.translateX = tt.x), (tt.translateY = tt.y);
      let te = (t) => (e) => e.test(t),
        ti = [
          X.Rx,
          Y.px,
          Y.aQ,
          Y.RW,
          Y.vw,
          Y.vh,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        tn = (t) => ti.find(te(t)),
        tr = new Set(),
        ts = !1,
        to = !1;
      function ta() {
        if (to) {
          let t = Array.from(tr).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            i = new Map();
          e.forEach((t) => {
            let e = (function (t) {
              let e = [];
              return (
                Q.forEach((i) => {
                  let n = t.getValue(i);
                  void 0 !== n &&
                    (e.push([i, n.get()]),
                    n.set(i.startsWith("scale") ? 1 : 0));
                }),
                e
              );
            })(t);
            e.length && (i.set(t, e), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = i.get(t);
              e &&
                e.forEach(([e, i]) => {
                  var n;
                  null === (n = t.getValue(e)) || void 0 === n || n.set(i);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            });
        }
        (to = !1), (ts = !1), tr.forEach((t) => t.complete()), tr.clear();
      }
      function tl() {
        tr.forEach((t) => {
          t.readKeyframes(), t.needsMeasurement && (to = !0);
        });
      }
      class tu {
        constructor(t, e, i, n, r, s = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = i),
            (this.motionValue = n),
            (this.element = r),
            (this.isAsync = s);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (tr.add(this),
                ts || ((ts = !0), M.Wi.read(tl), M.Wi.resolveKeyframes(ta)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: i,
            motionValue: n,
          } = this;
          for (let r = 0; r < t.length; r++)
            if (null === t[r]) {
              if (0 === r) {
                let r = null == n ? void 0 : n.get(),
                  s = t[t.length - 1];
                if (void 0 !== r) t[0] = r;
                else if (i && e) {
                  let n = i.readValue(e, s);
                  null != n && (t[0] = n);
                }
                void 0 === t[0] && (t[0] = s), n && void 0 === r && n.set(t[0]);
              } else t[r] = t[r - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            tr.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), tr.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
      var th = i(6460),
        tc = i(3619);
      let td = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function tp(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [n] = i.match(tc.K) || [];
        if (!n) return t;
        let r = i.replace(n, ""),
          s = td.has(e) ? 1 : 0;
        return n !== i && (s *= 100), e + "(" + s + r + ")";
      }
      let tf = /\b([a-z-]*)\(.*?\)/gu,
        tm = {
          ...th.P,
          getAnimatableNone: (t) => {
            let e = t.match(tf);
            return e ? e.map(tp).join(" ") : t;
          },
        };
      var tv = i(4539);
      let tg = {
          borderWidth: Y.px,
          borderTopWidth: Y.px,
          borderRightWidth: Y.px,
          borderBottomWidth: Y.px,
          borderLeftWidth: Y.px,
          borderRadius: Y.px,
          radius: Y.px,
          borderTopLeftRadius: Y.px,
          borderTopRightRadius: Y.px,
          borderBottomRightRadius: Y.px,
          borderBottomLeftRadius: Y.px,
          width: Y.px,
          maxWidth: Y.px,
          height: Y.px,
          maxHeight: Y.px,
          top: Y.px,
          right: Y.px,
          bottom: Y.px,
          left: Y.px,
          padding: Y.px,
          paddingTop: Y.px,
          paddingRight: Y.px,
          paddingBottom: Y.px,
          paddingLeft: Y.px,
          margin: Y.px,
          marginTop: Y.px,
          marginRight: Y.px,
          marginBottom: Y.px,
          marginLeft: Y.px,
          backgroundPositionX: Y.px,
          backgroundPositionY: Y.px,
        },
        ty = {
          rotate: Y.RW,
          rotateX: Y.RW,
          rotateY: Y.RW,
          rotateZ: Y.RW,
          scale: X.bA,
          scaleX: X.bA,
          scaleY: X.bA,
          scaleZ: X.bA,
          skew: Y.RW,
          skewX: Y.RW,
          skewY: Y.RW,
          distance: Y.px,
          translateX: Y.px,
          translateY: Y.px,
          translateZ: Y.px,
          x: Y.px,
          y: Y.px,
          z: Y.px,
          perspective: Y.px,
          transformPerspective: Y.px,
          opacity: X.Fq,
          originX: Y.$C,
          originY: Y.$C,
          originZ: Y.px,
        },
        tx = { ...X.Rx, transform: Math.round },
        tb = {
          ...tg,
          ...ty,
          zIndex: tx,
          size: Y.px,
          fillOpacity: X.Fq,
          strokeOpacity: X.Fq,
          numOctaves: tx,
        },
        tw = {
          ...tb,
          color: tv.$,
          backgroundColor: tv.$,
          outlineColor: tv.$,
          fill: tv.$,
          stroke: tv.$,
          borderColor: tv.$,
          borderTopColor: tv.$,
          borderRightColor: tv.$,
          borderBottomColor: tv.$,
          borderLeftColor: tv.$,
          filter: tm,
          WebkitFilter: tm,
        },
        tP = (t) => tw[t];
      function tS(t, e) {
        let i = tP(t);
        return (
          i !== tm && (i = th.P),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
      let tT = new Set(["auto", "none", "0"]);
      class tA extends tu {
        constructor(t, e, i, n, r) {
          super(t, e, i, n, r, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: i } = this;
          if (!e || !e.current) return;
          super.readKeyframes();
          for (let i = 0; i < t.length; i++) {
            let n = t[i];
            if ("string" == typeof n && ((n = n.trim()), (0, z.t)(n))) {
              let r = (function t(e, i, n = 1) {
                (0, N.k)(
                  n <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
                );
                let [r, s] = (function (t) {
                  let e = H.exec(t);
                  if (!e) return [,];
                  let [, i, n, r] = e;
                  return [`--${null != i ? i : n}`, r];
                })(e);
                if (!r) return;
                let o = window.getComputedStyle(i).getPropertyValue(r);
                if (o) {
                  let t = o.trim();
                  return U(t) ? parseFloat(t) : t;
                }
                return (0, z.t)(s) ? t(s, i, n + 1) : s;
              })(n, e.current);
              void 0 !== r && (t[i] = r),
                i === t.length - 1 && (this.finalKeyframe = n);
            }
          }
          if ((this.resolveNoneKeyframes(), !K.has(i) || 2 !== t.length))
            return;
          let [n, r] = t,
            s = tn(n),
            o = tn(r);
          if (s !== o) {
            if (G(s) && G(o))
              for (let e = 0; e < t.length; e++) {
                let i = t[e];
                "string" == typeof i && (t[e] = parseFloat(i));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            i = [];
          for (let e = 0; e < t.length; e++) {
            var n;
            ("number" == typeof (n = t[e])
              ? 0 === n
              : null === n || "none" === n || "0" === n || _(n)) && i.push(e);
          }
          i.length &&
            (function (t, e, i) {
              let n,
                r = 0;
              for (; r < t.length && !n; ) {
                let e = t[r];
                "string" == typeof e &&
                  !tT.has(e) &&
                  (0, th.V)(e).values.length &&
                  (n = t[r]),
                  r++;
              }
              if (n && i) for (let r of e) t[r] = tS(i, n);
            })(t, i, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: i } = this;
          if (!t || !t.current) return;
          "height" === i && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = tt[i](
              t.measureViewportBox(),
              window.getComputedStyle(t.current)
            )),
            (e[0] = this.measuredOrigin);
          let n = e[e.length - 1];
          void 0 !== n && t.getValue(i, n).jump(n, !1);
        }
        measureEndState() {
          var t;
          let { element: e, name: i, unresolvedKeyframes: n } = this;
          if (!e || !e.current) return;
          let r = e.getValue(i);
          r && r.jump(this.measuredOrigin, !1);
          let s = n.length - 1,
            o = n[s];
          (n[s] = tt[i](
            e.measureViewportBox(),
            window.getComputedStyle(e.current)
          )),
            null !== o &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = o),
            (null === (t = this.removedTransforms) || void 0 === t
              ? void 0
              : t.length) &&
              this.removedTransforms.forEach(([t, i]) => {
                e.getValue(t).set(i);
              }),
            this.resolveNoneKeyframes();
        }
      }
      function tE(t) {
        return "function" == typeof t;
      }
      var tC = i(4862);
      let tM = (t, e) =>
        "zIndex" !== e &&
        !!(
          "number" == typeof t ||
          Array.isArray(t) ||
          ("string" == typeof t &&
            (th.P.test(t) || "0" === t) &&
            !t.startsWith("url("))
        );
      class tV {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: i = "keyframes",
          repeat: n = 0,
          repeatDelay: r = 0,
          repeatType: s = "loop",
          ...o
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.createdAt = tC.X.now()),
            (this.options = {
              autoplay: t,
              delay: e,
              type: i,
              repeat: n,
              repeatDelay: r,
              repeatType: s,
              ...o,
            }),
            this.updateFinishedPromise();
        }
        calcStartTime() {
          return this.resolvedAt && this.resolvedAt - this.createdAt > 40
            ? this.resolvedAt
            : this.createdAt;
        }
        get resolved() {
          return (
            this._resolved || this.hasAttemptedResolve || (tl(), ta()),
            this._resolved
          );
        }
        onKeyframesResolved(t, e) {
          (this.resolvedAt = tC.X.now()), (this.hasAttemptedResolve = !0);
          let {
            name: i,
            type: n,
            velocity: r,
            delay: s,
            onComplete: o,
            onUpdate: a,
            isGenerator: l,
          } = this.options;
          if (
            !l &&
            !(function (t, e, i, n) {
              let r = t[0];
              if (null === r) return !1;
              if ("display" === e || "visibility" === e) return !0;
              let s = t[t.length - 1],
                o = tM(r, e),
                a = tM(s, e);
              return (
                (0, N.K)(
                  o === a,
                  `You are trying to animate ${e} from "${r}" to "${s}". ${r} is not an animatable value - to enable this animation set ${r} to a value animatable to ${s} via the \`style\` property.`
                ),
                !!o &&
                  !!a &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let i = 0; i < t.length; i++)
                      if (t[i] !== e) return !0;
                  })(t) ||
                    (("spring" === i || tE(i)) && n))
              );
            })(t, i, n, r)
          ) {
            if (A.current || !s) {
              null == a || a(C(t, this.options, e)),
                null == o || o(),
                this.resolveFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          let u = this.initPlayback(t, e);
          !1 !== u &&
            ((this._resolved = { keyframes: t, finalKeyframe: e, ...u }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(t, e) {
          return this.currentFinishedPromise.then(t, e);
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((t) => {
            this.resolveFinishedPromise = t;
          });
        }
      }
      var tj = i(3212);
      function tk(t, e, i) {
        let n = Math.max(e - 5, 0);
        return (0, tj.R)(i - t(n), e - n);
      }
      var tR = i(9218);
      function tD(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let tO = ["duration", "bounce"],
        tL = ["stiffness", "damping", "mass"];
      function tF(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function tB({ keyframes: t, restDelta: e, restSpeed: i, ...n }) {
        let r;
        let s = t[0],
          o = t[t.length - 1],
          a = { done: !1, value: s },
          {
            stiffness: l,
            damping: u,
            mass: h,
            duration: c,
            velocity: d,
            isResolvedFromDuration: p,
          } = (function (t) {
            let e = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!tF(t, tL) && tF(t, tO)) {
              let i = (function ({
                duration: t = 800,
                bounce: e = 0.25,
                velocity: i = 0,
                mass: n = 1,
              }) {
                let r, s;
                (0, N.K)(
                  t <= f(10),
                  "Spring duration must be 10 seconds or less"
                );
                let o = 1 - e;
                (o = (0, tR.u)(0.05, 1, o)),
                  (t = (0, tR.u)(0.01, 10, m(t))),
                  o < 1
                    ? ((r = (e) => {
                        let n = e * o,
                          r = n * t;
                        return 0.001 - ((n - i) / tD(e, o)) * Math.exp(-r);
                      }),
                      (s = (e) => {
                        let n = e * o * t,
                          s = Math.pow(o, 2) * Math.pow(e, 2) * t,
                          a = Math.exp(-n),
                          l = tD(Math.pow(e, 2), o);
                        return (
                          ((n * i + i - s) * a * (-r(e) + 0.001 > 0 ? -1 : 1)) /
                          l
                        );
                      }))
                    : ((r = (e) =>
                        -0.001 + Math.exp(-e * t) * ((e - i) * t + 1)),
                      (s = (e) => t * t * (i - e) * Math.exp(-e * t)));
                let a = (function (t, e, i) {
                  let n = i;
                  for (let i = 1; i < 12; i++) n -= t(n) / e(n);
                  return n;
                })(r, s, 5 / t);
                if (((t = f(t)), isNaN(a)))
                  return { stiffness: 100, damping: 10, duration: t };
                {
                  let e = Math.pow(a, 2) * n;
                  return {
                    stiffness: e,
                    damping: 2 * o * Math.sqrt(n * e),
                    duration: t,
                  };
                }
              })(t);
              (e = { ...e, ...i, mass: 1 }).isResolvedFromDuration = !0;
            }
            return e;
          })({ ...n, velocity: -m(n.velocity || 0) }),
          v = d || 0,
          g = u / (2 * Math.sqrt(l * h)),
          y = o - s,
          x = m(Math.sqrt(l / h)),
          b = 5 > Math.abs(y);
        if ((i || (i = b ? 0.01 : 2), e || (e = b ? 0.005 : 0.5), g < 1)) {
          let t = tD(x, g);
          r = (e) =>
            o -
            Math.exp(-g * x * e) *
              (((v + g * x * y) / t) * Math.sin(t * e) + y * Math.cos(t * e));
        } else if (1 === g)
          r = (t) => o - Math.exp(-x * t) * (y + (v + x * y) * t);
        else {
          let t = x * Math.sqrt(g * g - 1);
          r = (e) => {
            let i = Math.exp(-g * x * e),
              n = Math.min(t * e, 300);
            return (
              o -
              (i * ((v + g * x * y) * Math.sinh(n) + t * y * Math.cosh(n))) / t
            );
          };
        }
        return {
          calculatedDuration: (p && c) || null,
          next: (t) => {
            let n = r(t);
            if (p) a.done = t >= c;
            else {
              let s = 0;
              g < 1 && (s = 0 === t ? f(v) : tk(r, t, n));
              let l = Math.abs(s) <= i,
                u = Math.abs(o - n) <= e;
              a.done = l && u;
            }
            return (a.value = a.done ? o : n), a;
          },
        };
      }
      function tW({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: n = 325,
        bounceDamping: r = 10,
        bounceStiffness: s = 500,
        modifyTarget: o,
        min: a,
        max: l,
        restDelta: u = 0.5,
        restSpeed: h,
      }) {
        let c, d;
        let p = t[0],
          f = { done: !1, value: p },
          m = (t) => (void 0 !== a && t < a) || (void 0 !== l && t > l),
          v = (t) =>
            void 0 === a
              ? l
              : void 0 === l
              ? a
              : Math.abs(a - t) < Math.abs(l - t)
              ? a
              : l,
          g = i * e,
          y = p + g,
          x = void 0 === o ? y : o(y);
        x !== y && (g = x - p);
        let b = (t) => -g * Math.exp(-t / n),
          w = (t) => x + b(t),
          P = (t) => {
            let e = b(t),
              i = w(t);
            (f.done = Math.abs(e) <= u), (f.value = f.done ? x : i);
          },
          S = (t) => {
            m(f.value) &&
              ((c = t),
              (d = tB({
                keyframes: [f.value, v(f.value)],
                velocity: tk(w, t, f.value),
                damping: r,
                stiffness: s,
                restDelta: u,
                restSpeed: h,
              })));
          };
        return (
          S(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (d || void 0 !== c || ((e = !0), P(t), S(t)),
              void 0 !== c && t >= c)
                ? d.next(t - c)
                : (e || P(t), f);
            },
          }
        );
      }
      let tI = k(0.42, 0, 1, 1),
        t$ = k(0, 0, 0.58, 1),
        t_ = k(0.42, 0, 0.58, 1),
        tN = (t) => Array.isArray(t) && "number" != typeof t[0],
        tU = {
          linear: V.Z,
          easeIn: tI,
          easeInOut: t_,
          easeOut: t$,
          circIn: W,
          circInOut: $,
          circOut: I,
          backIn: L,
          backInOut: F,
          backOut: O,
          anticipate: B,
        },
        tz = (t) => {
          if (Array.isArray(t)) {
            (0, N.k)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, i, n, r] = t;
            return k(e, i, n, r);
          }
          return "string" == typeof t
            ? ((0, N.k)(void 0 !== tU[t], `Invalid easing type '${t}'`), tU[t])
            : t;
        };
      var tH = i(6509),
        tX = i(9988);
      function tY({
        duration: t = 300,
        keyframes: e,
        times: i,
        ease: n = "easeInOut",
      }) {
        let r = tN(n) ? n.map(tz) : tz(n),
          s = { done: !1, value: e[0] },
          o = (i && i.length === e.length ? i : (0, tX.Y)(e)).map((e) => e * t),
          a = (0, tH.s)(o, e, {
            ease: Array.isArray(r)
              ? r
              : e.map(() => r || t_).splice(0, e.length - 1),
          });
        return {
          calculatedDuration: t,
          next: (e) => ((s.value = a(e)), (s.done = e >= t), s),
        };
      }
      var tK = i(1854),
        tG = i(4621);
      let tq = (t) => {
          let e = ({ timestamp: e }) => t(e);
          return {
            start: () => M.Wi.update(e, !0),
            stop: () => (0, M.Pn)(e),
            now: () =>
              M.frameData.isProcessing ? M.frameData.timestamp : tC.X.now(),
          };
        },
        tZ = { decay: tW, inertia: tW, tween: tY, keyframes: tY, spring: tB },
        tJ = (t) => t / 100;
      class tQ extends tV {
        constructor(t) {
          super(t),
            (this.holdTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.startTime = null),
            (this.state = "idle"),
            (this.stop = () => {
              if (
                (this.resolver.cancel(),
                (this.isStopped = !0),
                "idle" === this.state)
              )
                return;
              this.teardown();
              let { onStop: t } = this.options;
              t && t();
            });
          let {
              name: e,
              motionValue: i,
              element: n,
              keyframes: r,
            } = this.options,
            s = (null == n ? void 0 : n.KeyframeResolver) || tu;
          (this.resolver = new s(
            r,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i,
            n
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(t) {
          let e, i;
          let {
              type: n = "keyframes",
              repeat: r = 0,
              repeatDelay: s = 0,
              repeatType: o,
              velocity: a = 0,
            } = this.options,
            l = tE(n) ? n : tZ[n] || tY;
          l !== tY &&
            "number" != typeof t[0] &&
            ((e = (0, tK.z)(tJ, (0, tG.C)(t[0], t[1]))), (t = [0, 100]));
          let u = l({ ...this.options, keyframes: t });
          "mirror" === o &&
            (i = l({
              ...this.options,
              keyframes: [...t].reverse(),
              velocity: -a,
            })),
            null === u.calculatedDuration &&
              (u.calculatedDuration = (function (t) {
                let e = 0,
                  i = t.next(e);
                for (; !i.done && e < 2e4; ) (e += 50), (i = t.next(e));
                return e >= 2e4 ? 1 / 0 : e;
              })(u));
          let { calculatedDuration: h } = u,
            c = h + s;
          return {
            generator: u,
            mirroredGenerator: i,
            mapPercentToKeyframes: e,
            calculatedDuration: h,
            resolvedDuration: c,
            totalDuration: c * (r + 1) - s,
          };
        }
        onPostResolved() {
          let { autoplay: t = !0 } = this.options;
          this.play(),
            "paused" !== this.pendingPlayState && t
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(t, e = !1) {
          let { resolved: i } = this;
          if (!i) {
            let { keyframes: t } = this.options;
            return { done: !0, value: t[t.length - 1] };
          }
          let {
            finalKeyframe: n,
            generator: r,
            mirroredGenerator: s,
            mapPercentToKeyframes: o,
            keyframes: a,
            calculatedDuration: l,
            totalDuration: u,
            resolvedDuration: h,
          } = i;
          if (null === this.startTime) return r.next(0);
          let {
            delay: c,
            repeat: d,
            repeatType: p,
            repeatDelay: f,
            onUpdate: m,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - u / this.speed, this.startTime)),
            e
              ? (this.currentTime = t)
              : null !== this.holdTime
              ? (this.currentTime = this.holdTime)
              : (this.currentTime =
                  Math.round(t - this.startTime) * this.speed);
          let v = this.currentTime - c * (this.speed >= 0 ? 1 : -1),
            g = this.speed >= 0 ? v < 0 : v > u;
          (this.currentTime = Math.max(v, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = u);
          let y = this.currentTime,
            x = r;
          if (d) {
            let t = Math.min(this.currentTime, u) / h,
              e = Math.floor(t),
              i = t % 1;
            !i && t >= 1 && (i = 1),
              1 === i && e--,
              (e = Math.min(e, d + 1)) % 2 &&
                ("reverse" === p
                  ? ((i = 1 - i), f && (i -= f / h))
                  : "mirror" === p && (x = s)),
              (y = (0, tR.u)(0, 1, i) * h);
          }
          let b = g ? { done: !1, value: a[0] } : x.next(y);
          o && (b.value = o(b.value));
          let { done: w } = b;
          g ||
            null === l ||
            (w =
              this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
          let P =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && w));
          return (
            P && void 0 !== n && (b.value = C(a, this.options, n)),
            m && m(b.value),
            P && this.finish(),
            b
          );
        }
        get duration() {
          let { resolved: t } = this;
          return t ? m(t.calculatedDuration) : 0;
        }
        get time() {
          return m(this.currentTime);
        }
        set time(t) {
          (t = f(t)),
            (this.currentTime = t),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          let e = this.playbackSpeed !== t;
          (this.playbackSpeed = t), e && (this.time = m(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = "running";
            return;
          }
          if (this.isStopped) return;
          let { driver: t = tq, onPlay: e, startTime: i } = this.options;
          this.driver || (this.driver = t((t) => this.tick(t))), e && e();
          let n = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = n - this.holdTime)
            : this.startTime
            ? "finished" === this.state && (this.startTime = n)
            : (this.startTime = null != i ? i : this.calcStartTime()),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          var t;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          (this.state = "paused"),
            (this.holdTime =
              null !== (t = this.currentTime) && void 0 !== t ? t : 0);
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = "finished");
          let { onComplete: t } = this.options;
          t && t();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel();
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return (this.startTime = 0), this.tick(t, !0);
        }
      }
      let t0 = new Set(["opacity", "clipPath", "filter", "transform"]),
        t1 = (t) => Array.isArray(t) && "number" == typeof t[0];
      var t2 = i(2320);
      let t3 = (t, e) => {
        let i = "",
          n = Math.max(Math.round(e / 10), 2);
        for (let e = 0; e < n; e++) i += t((0, t2.Y)(0, n - 1, e)) + ", ";
        return `linear(${i.substring(0, i.length - 2)})`;
      };
      var t5 = i(7307);
      let t4 = { linearEasing: void 0 },
        t9 = (function (t, e) {
          let i = (0, t5.X)(t);
          return () => {
            var t;
            return null !== (t = t4[e]) && void 0 !== t ? t : i();
          };
        })(() => {
          try {
            document
              .createElement("div")
              .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
          } catch (t) {
            return !1;
          }
          return !0;
        }, "linearEasing"),
        t6 = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
        t8 = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: t6([0, 0.65, 0.55, 1]),
          circOut: t6([0.55, 0, 1, 0.45]),
          backIn: t6([0.31, 0.01, 0.66, -0.59]),
          backOut: t6([0.33, 1.53, 0.69, 0.99]),
        };
      function t7(t, e) {
        (t.timeline = e), (t.onfinish = null);
      }
      let et = (0, t5.X)(() =>
          Object.hasOwnProperty.call(Element.prototype, "animate")
        ),
        ee = { anticipate: B, backInOut: F, circInOut: $ };
      class ei extends tV {
        constructor(t) {
          super(t);
          let {
            name: e,
            motionValue: i,
            element: n,
            keyframes: r,
          } = this.options;
          (this.resolver = new tA(
            r,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i,
            n
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(t, e) {
          var i, n;
          let {
            duration: r = 300,
            times: s,
            ease: o,
            type: a,
            motionValue: l,
            name: u,
            startTime: h,
          } = this.options;
          if (!(null === (i = l.owner) || void 0 === i ? void 0 : i.current))
            return !1;
          if (
            ("string" == typeof o && t9() && o in ee && (o = ee[o]),
            tE((n = this.options).type) ||
              "spring" === n.type ||
              !(function t(e) {
                return !!(
                  ("function" == typeof e && t9()) ||
                  !e ||
                  ("string" == typeof e && (e in t8 || t9())) ||
                  t1(e) ||
                  (Array.isArray(e) && e.every(t))
                );
              })(n.ease))
          ) {
            let {
                onComplete: e,
                onUpdate: i,
                motionValue: n,
                element: l,
                ...u
              } = this.options,
              h = (function (t, e) {
                let i = new tQ({
                    ...e,
                    keyframes: t,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  n = { done: !1, value: t[0] },
                  r = [],
                  s = 0;
                for (; !n.done && s < 2e4; )
                  r.push((n = i.sample(s)).value), (s += 10);
                return {
                  times: void 0,
                  keyframes: r,
                  duration: s - 10,
                  ease: "linear",
                };
              })(t, u);
            1 === (t = h.keyframes).length && (t[1] = t[0]),
              (r = h.duration),
              (s = h.times),
              (o = h.ease),
              (a = "keyframes");
          }
          let c = (function (
            t,
            e,
            i,
            {
              delay: n = 0,
              duration: r = 300,
              repeat: s = 0,
              repeatType: o = "loop",
              ease: a,
              times: l,
            } = {}
          ) {
            let u = { [e]: i };
            l && (u.offset = l);
            let h = (function t(e, i) {
              if (e)
                return "function" == typeof e && t9()
                  ? t3(e, i)
                  : t1(e)
                  ? t6(e)
                  : Array.isArray(e)
                  ? e.map((e) => t(e, i) || t8.easeOut)
                  : t8[e];
            })(a, r);
            return (
              Array.isArray(h) && (u.easing = h),
              t.animate(u, {
                delay: n,
                duration: r,
                easing: Array.isArray(h) ? "linear" : h,
                fill: "both",
                iterations: s + 1,
                direction: "reverse" === o ? "alternate" : "normal",
              })
            );
          })(l.owner.current, u, t, {
            ...this.options,
            duration: r,
            times: s,
            ease: o,
          });
          return (
            (c.startTime = null != h ? h : this.calcStartTime()),
            this.pendingTimeline
              ? (t7(c, this.pendingTimeline), (this.pendingTimeline = void 0))
              : (c.onfinish = () => {
                  let { onComplete: i } = this.options;
                  l.set(C(t, this.options, e)),
                    i && i(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            {
              animation: c,
              duration: r,
              times: s,
              type: a,
              ease: o,
              keyframes: t,
            }
          );
        }
        get duration() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { duration: e } = t;
          return m(e);
        }
        get time() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { animation: e } = t;
          return m(e.currentTime || 0);
        }
        set time(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.currentTime = f(t);
        }
        get speed() {
          let { resolved: t } = this;
          if (!t) return 1;
          let { animation: e } = t;
          return e.playbackRate;
        }
        set speed(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.playbackRate = t;
        }
        get state() {
          let { resolved: t } = this;
          if (!t) return "idle";
          let { animation: e } = t;
          return e.playState;
        }
        get startTime() {
          let { resolved: t } = this;
          if (!t) return null;
          let { animation: e } = t;
          return e.startTime;
        }
        attachTimeline(t) {
          if (this._resolved) {
            let { resolved: e } = this;
            if (!e) return V.Z;
            let { animation: i } = e;
            t7(i, t);
          } else this.pendingTimeline = t;
          return V.Z;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          "finished" === e.playState && this.updateFinishedPromise(), e.play();
        }
        pause() {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          e.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          this.resolveFinishedPromise(), this.updateFinishedPromise();
          let { resolved: t } = this;
          if (!t) return;
          let {
            animation: e,
            keyframes: i,
            duration: n,
            type: r,
            ease: s,
            times: o,
          } = t;
          if ("idle" === e.playState || "finished" === e.playState) return;
          if (this.time) {
            let {
                motionValue: t,
                onUpdate: e,
                onComplete: a,
                element: l,
                ...u
              } = this.options,
              h = new tQ({
                ...u,
                keyframes: i,
                duration: n,
                type: r,
                ease: s,
                times: o,
                isGenerator: !0,
              }),
              c = f(this.time);
            t.setWithVelocity(h.sample(c - 10).value, h.sample(c).value, 10);
          }
          let { onStop: a } = this.options;
          a && a(), this.cancel();
        }
        complete() {
          let { resolved: t } = this;
          t && t.animation.finish();
        }
        cancel() {
          let { resolved: t } = this;
          t && t.animation.cancel();
        }
        static supports(t) {
          let {
            motionValue: e,
            name: i,
            repeatDelay: n,
            repeatType: r,
            damping: s,
            type: o,
          } = t;
          return (
            et() &&
            i &&
            t0.has(i) &&
            e &&
            e.owner &&
            e.owner.current instanceof HTMLElement &&
            !e.owner.getProps().onUpdate &&
            !n &&
            "mirror" !== r &&
            0 !== s &&
            "inertia" !== o
          );
        }
      }
      var en = i(1728);
      class er {
        constructor(t) {
          (this.stop = () => this.runAll("stop")),
            (this.animations = t.filter(Boolean));
        }
        then(t, e) {
          return Promise.all(this.animations).then(t).catch(e);
        }
        getAll(t) {
          return this.animations[0][t];
        }
        setAll(t, e) {
          for (let i = 0; i < this.animations.length; i++)
            this.animations[i][t] = e;
        }
        attachTimeline(t, e) {
          let i = this.animations.map((i) =>
            (0, en.t)() && i.attachTimeline ? i.attachTimeline(t) : e(i)
          );
          return () => {
            i.forEach((t, e) => {
              t && t(), this.animations[e].stop();
            });
          };
        }
        get time() {
          return this.getAll("time");
        }
        set time(t) {
          this.setAll("time", t);
        }
        get speed() {
          return this.getAll("speed");
        }
        set speed(t) {
          this.setAll("speed", t);
        }
        get startTime() {
          return this.getAll("startTime");
        }
        get duration() {
          let t = 0;
          for (let e = 0; e < this.animations.length; e++)
            t = Math.max(t, this.animations[e].duration);
          return t;
        }
        runAll(t) {
          this.animations.forEach((e) => e[t]());
        }
        play() {
          this.runAll("play");
        }
        pause() {
          this.runAll("pause");
        }
        cancel() {
          this.runAll("cancel");
        }
        complete() {
          this.runAll("complete");
        }
      }
      let es =
          (t, e, i, n = {}, r, s) =>
          (o) => {
            let a = w(n, t) || {},
              l = a.delay || n.delay || 0,
              { elapsed: u = 0 } = n;
            u -= f(l);
            let h = {
              keyframes: Array.isArray(i) ? i : [null, i],
              ease: "easeOut",
              velocity: e.getVelocity(),
              ...a,
              delay: -u,
              onUpdate: (t) => {
                e.set(t), a.onUpdate && a.onUpdate(t);
              },
              onComplete: () => {
                o(), a.onComplete && a.onComplete();
              },
              name: t,
              motionValue: e,
              element: s ? void 0 : r,
            };
            !(function ({
              when: t,
              delay: e,
              delayChildren: i,
              staggerChildren: n,
              staggerDirection: r,
              repeat: s,
              repeatType: o,
              repeatDelay: a,
              from: l,
              elapsed: u,
              ...h
            }) {
              return !!Object.keys(h).length;
            })(a) && (h = { ...h, ...b(t, h) }),
              h.duration && (h.duration = f(h.duration)),
              h.repeatDelay && (h.repeatDelay = f(h.repeatDelay)),
              void 0 !== h.from && (h.keyframes[0] = h.from);
            let c = !1;
            if (
              ((!1 !== h.type && (0 !== h.duration || h.repeatDelay)) ||
                ((h.duration = 0), 0 !== h.delay || (c = !0)),
              (A.current || T.c.skipAnimations) &&
                ((c = !0), (h.duration = 0), (h.delay = 0)),
              c && !s && void 0 !== e.get())
            ) {
              let t = C(h.keyframes, a);
              if (void 0 !== t)
                return (
                  M.Wi.update(() => {
                    h.onUpdate(t), h.onComplete();
                  }),
                  new er([])
                );
            }
            return !s && ei.supports(h) ? new ei(h) : new tQ(h);
          },
        eo = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
        ea = (t) => (r(t) ? t[t.length - 1] || 0 : t);
      var el = i(3955);
      let eu = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
        eh = "data-" + eu("framerAppearId");
      function ec(t) {
        return p.has(t) ? "transform" : t0.has(t) ? eu(t) : void 0;
      }
      var ed = i(4922);
      class ep extends el.Hg {
        constructor() {
          super(...arguments), (this.values = []);
        }
        add(t) {
          let e = ec(t);
          e && ((0, ed.y4)(this.values, e), this.update());
        }
        update() {
          this.set(this.values.length ? this.values.join(", ") : "auto");
        }
      }
      let ef = (t) => !!(t && t.getVelocity);
      function em(t, e) {
        var i, n;
        if (!t.applyWillChange) return;
        let r = t.getValue("willChange");
        if (
          (r ||
            (null === (i = t.props.style) || void 0 === i
              ? void 0
              : i.willChange) ||
            ((r = new ep("auto")), t.addValue("willChange", r)),
          ef((n = r)) && n.add)
        )
          return r.add(e);
      }
      function ev(t, e, { delay: i = 0, transitionOverride: n, type: r } = {}) {
        var s;
        let {
          transition: o = t.getDefaultTransition(),
          transitionEnd: a,
          ...l
        } = e;
        n && (o = n);
        let h = [],
          c = r && t.animationState && t.animationState.getState()[r];
        for (let e in l) {
          let n = t.getValue(
              e,
              null !== (s = t.latestValues[e]) && void 0 !== s ? s : null
            ),
            r = l[e];
          if (
            void 0 === r ||
            (c &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let n = t.hasOwnProperty(i) && !0 !== e[i];
                return (e[i] = !1), n;
              })(c, e))
          )
            continue;
          let a = { delay: i, ...w(o || {}, e) },
            u = !1;
          if (window.MotionHandoffAnimation) {
            let i = t.props[eh];
            if (i) {
              let t = window.MotionHandoffAnimation(i, e, M.Wi);
              null !== t && ((a.startTime = t), (u = !0));
            }
          }
          em(t, e),
            n.start(
              es(
                e,
                n,
                r,
                t.shouldReduceMotion && p.has(e) ? { type: !1 } : a,
                t,
                u
              )
            );
          let d = n.animation;
          d && h.push(d);
        }
        return (
          a &&
            Promise.all(h).then(() => {
              M.Wi.update(() => {
                a &&
                  (function (t, e) {
                    let {
                      transitionEnd: i = {},
                      transition: n = {},
                      ...r
                    } = u(t, e) || {};
                    for (let e in (r = { ...r, ...i })) {
                      let i = ea(r[e]);
                      t.hasValue(e)
                        ? t.getValue(e).set(i)
                        : t.addValue(e, (0, el.BX)(i));
                    }
                  })(t, a);
              });
            }),
          h
        );
      }
      function eg(t, e, i = {}) {
        var n;
        let r = u(
            t,
            e,
            "exit" === i.type
              ? null === (n = t.presenceContext) || void 0 === n
                ? void 0
                : n.custom
              : void 0
          ),
          { transition: s = t.getDefaultTransition() || {} } = r || {};
        i.transitionOverride && (s = i.transitionOverride);
        let o = r ? () => Promise.all(ev(t, r, i)) : () => Promise.resolve(),
          a =
            t.variantChildren && t.variantChildren.size
              ? (n = 0) => {
                  let {
                    delayChildren: r = 0,
                    staggerChildren: o,
                    staggerDirection: a,
                  } = s;
                  return (function (t, e, i = 0, n = 0, r = 1, s) {
                    let o = [],
                      a = (t.variantChildren.size - 1) * n,
                      l = 1 === r ? (t = 0) => t * n : (t = 0) => a - t * n;
                    return (
                      Array.from(t.variantChildren)
                        .sort(ey)
                        .forEach((t, n) => {
                          t.notify("AnimationStart", e),
                            o.push(
                              eg(t, e, { ...s, delay: i + l(n) }).then(() =>
                                t.notify("AnimationComplete", e)
                              )
                            );
                        }),
                      Promise.all(o)
                    );
                  })(t, e, r + n, o, a, i);
                }
              : () => Promise.resolve(),
          { when: l } = s;
        if (!l) return Promise.all([o(), a(i.delay)]);
        {
          let [t, e] = "beforeChildren" === l ? [o, a] : [a, o];
          return t().then(() => e());
        }
      }
      function ey(t, e) {
        return t.sortNodePosition(e);
      }
      let ex = c.length,
        eb = [...h].reverse(),
        ew = h.length;
      function eP(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function eS() {
        return {
          animate: eP(!0),
          whileInView: eP(),
          whileHover: eP(),
          whileTap: eP(),
          whileDrag: eP(),
          whileFocus: eP(),
          exit: eP(),
        };
      }
      class eT {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      class eA extends eT {
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: i }) =>
                        (function (t, e, i = {}) {
                          let n;
                          if ((t.notify("AnimationStart", e), Array.isArray(e)))
                            n = Promise.all(e.map((e) => eg(t, e, i)));
                          else if ("string" == typeof e) n = eg(t, e, i);
                          else {
                            let r =
                              "function" == typeof e ? u(t, e, i.custom) : e;
                            n = Promise.all(ev(t, r, i));
                          }
                          return n.then(() => {
                            t.notify("AnimationComplete", e);
                          });
                        })(t, e, i)
                      )
                    ),
                  i = eS(),
                  a = !0,
                  l = (e) => (i, n) => {
                    var r;
                    let s = u(
                      t,
                      n,
                      "exit" === e
                        ? null === (r = t.presenceContext) || void 0 === r
                          ? void 0
                          : r.custom
                        : void 0
                    );
                    if (s) {
                      let { transition: t, transitionEnd: e, ...n } = s;
                      i = { ...i, ...n, ...e };
                    }
                    return i;
                  };
                function h(u) {
                  let { props: h } = t,
                    d =
                      (function t(e) {
                        if (!e) return;
                        if (!e.isControllingVariants) {
                          let i = (e.parent && t(e.parent)) || {};
                          return (
                            void 0 !== e.props.initial &&
                              (i.initial = e.props.initial),
                            i
                          );
                        }
                        let i = {};
                        for (let t = 0; t < ex; t++) {
                          let n = c[t],
                            r = e.props[n];
                          (o(r) || !1 === r) && (i[n] = r);
                        }
                        return i;
                      })(t.parent) || {},
                    p = [],
                    f = new Set(),
                    m = {},
                    v = 1 / 0;
                  for (let e = 0; e < ew; e++) {
                    var g;
                    let c = eb[e],
                      y = i[c],
                      x = void 0 !== h[c] ? h[c] : d[c],
                      b = o(x),
                      w = c === u ? y.isActive : null;
                    !1 === w && (v = e);
                    let P = x === d[c] && x !== h[c] && b;
                    if (
                      (P && a && t.manuallyAnimateOnMount && (P = !1),
                      (y.protectedKeys = { ...m }),
                      (!y.isActive && null === w) ||
                        (!x && !y.prevProp) ||
                        n(x) ||
                        "boolean" == typeof x)
                    )
                      continue;
                    let S =
                        ((g = y.prevProp),
                        "string" == typeof x
                          ? x !== g
                          : !!Array.isArray(x) && !s(x, g)),
                      T =
                        S || (c === u && y.isActive && !P && b) || (e > v && b),
                      A = !1,
                      E = Array.isArray(x) ? x : [x],
                      C = E.reduce(l(c), {});
                    !1 === w && (C = {});
                    let { prevResolvedValues: M = {} } = y,
                      V = { ...M, ...C },
                      j = (e) => {
                        (T = !0),
                          f.has(e) && ((A = !0), f.delete(e)),
                          (y.needsAnimating[e] = !0);
                        let i = t.getValue(e);
                        i && (i.liveStyle = !1);
                      };
                    for (let t in V) {
                      let e = C[t],
                        i = M[t];
                      if (!m.hasOwnProperty(t))
                        (r(e) && r(i) ? s(e, i) : e === i)
                          ? void 0 !== e && f.has(t)
                            ? j(t)
                            : (y.protectedKeys[t] = !0)
                          : null != e
                          ? j(t)
                          : f.add(t);
                    }
                    (y.prevProp = x),
                      (y.prevResolvedValues = C),
                      y.isActive && (m = { ...m, ...C }),
                      a && t.blockInitialAnimation && (T = !1);
                    let k = !(P && S) || A;
                    T &&
                      k &&
                      p.push(
                        ...E.map((t) => ({
                          animation: t,
                          options: { type: c },
                        }))
                      );
                  }
                  if (f.size) {
                    let e = {};
                    f.forEach((i) => {
                      let n = t.getBaseTarget(i),
                        r = t.getValue(i);
                      r && (r.liveStyle = !0), (e[i] = null != n ? n : null);
                    }),
                      p.push({ animation: e });
                  }
                  let y = !!p.length;
                  return (
                    a &&
                      (!1 === h.initial || h.initial === h.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (y = !1),
                    (a = !1),
                    y ? e(p) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: h,
                  setActive: function (e, n) {
                    var r;
                    if (i[e].isActive === n) return Promise.resolve();
                    null === (r = t.variantChildren) ||
                      void 0 === r ||
                      r.forEach((t) => {
                        var i;
                        return null === (i = t.animationState) || void 0 === i
                          ? void 0
                          : i.setActive(e, n);
                      }),
                      (i[e].isActive = n);
                    let s = h(e);
                    for (let t in i) i[t].protectedKeys = {};
                    return s;
                  },
                  setAnimateFunction: function (i) {
                    e = i(t);
                  },
                  getState: () => i,
                  reset: () => {
                    (i = eS()), (a = !0);
                  },
                };
              })(t));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          n(t) && (this.unmountControls = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {
          var t;
          this.node.animationState.reset(),
            null === (t = this.unmountControls) || void 0 === t || t.call(this);
        }
      }
      let eE = 0;
      class eC extends eT {
        constructor() {
          super(...arguments), (this.id = eE++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: i } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === i) return;
          let n = this.node.animationState.setActive("exit", !t);
          e && !t && n.then(() => e(this.id));
        }
        mount() {
          let { register: t } = this.node.presenceContext || {};
          t && (this.unmount = t(this.id));
        }
        unmount() {}
      }
      let eM = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
      function eV(t, e = "page") {
        return { point: { x: t[`${e}X`], y: t[`${e}Y`] } };
      }
      let ej = (t) => (e) => eM(e) && t(e, eV(e));
      function ek(t, e, i, n = { passive: !0 }) {
        return t.addEventListener(e, i, n), () => t.removeEventListener(e, i);
      }
      function eR(t, e, i, n) {
        return ek(t, e, ej(i), n);
      }
      let eD = (t, e) => Math.abs(t - e);
      class eO {
        constructor(
          t,
          e,
          {
            transformPagePoint: i,
            contextWindow: n,
            dragSnapToOrigin: r = !1,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let t = eB(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                i =
                  (function (t, e) {
                    return Math.sqrt(eD(t.x, e.x) ** 2 + eD(t.y, e.y) ** 2);
                  })(t.offset, { x: 0, y: 0 }) >= 3;
              if (!e && !i) return;
              let { point: n } = t,
                { timestamp: r } = M.frameData;
              this.history.push({ ...n, timestamp: r });
              let { onStart: s, onMove: o } = this.handlers;
              e ||
                (s && s(this.lastMoveEvent, t),
                (this.startEvent = this.lastMoveEvent)),
                o && o(this.lastMoveEvent, t);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = eL(e, this.transformPagePoint)),
                M.Wi.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: i,
                onSessionEnd: n,
                resumeAnimation: r,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && r && r(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let s = eB(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : eL(e, this.transformPagePoint),
                this.history
              );
              this.startEvent && i && i(t, s), n && n(t, s);
            }),
            !eM(t))
          )
            return;
          (this.dragSnapToOrigin = r),
            (this.handlers = e),
            (this.transformPagePoint = i),
            (this.contextWindow = n || window);
          let s = eL(eV(t), this.transformPagePoint),
            { point: o } = s,
            { timestamp: a } = M.frameData;
          this.history = [{ ...o, timestamp: a }];
          let { onSessionStart: l } = e;
          l && l(t, eB(s, this.history)),
            (this.removeListeners = (0, tK.z)(
              eR(this.contextWindow, "pointermove", this.handlePointerMove),
              eR(this.contextWindow, "pointerup", this.handlePointerUp),
              eR(this.contextWindow, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            (0, M.Pn)(this.updatePoint);
        }
      }
      function eL(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function eF(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function eB({ point: t }, e) {
        return {
          point: t,
          delta: eF(t, eW(e)),
          offset: eF(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              n = null,
              r = eW(t);
            for (
              ;
              i >= 0 && ((n = t[i]), !(r.timestamp - n.timestamp > f(0.1)));

            )
              i--;
            if (!n) return { x: 0, y: 0 };
            let s = m(r.timestamp - n.timestamp);
            if (0 === s) return { x: 0, y: 0 };
            let o = { x: (r.x - n.x) / s, y: (r.y - n.y) / s };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0),
        };
      }
      function eW(t) {
        return t[t.length - 1];
      }
      function eI(t) {
        let e = null;
        return () =>
          null === e &&
          ((e = t),
          () => {
            e = null;
          });
      }
      let e$ = eI("dragHorizontal"),
        e_ = eI("dragVertical");
      function eN(t) {
        let e = !1;
        if ("y" === t) e = e_();
        else if ("x" === t) e = e$();
        else {
          let t = e$(),
            i = e_();
          t && i
            ? (e = () => {
                t(), i();
              })
            : (t && t(), i && i());
        }
        return e;
      }
      function eU() {
        let t = eN(!0);
        return !t || (t(), !1);
      }
      function ez(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      var eH = i(4498);
      function eX(t) {
        return t.max - t.min;
      }
      function eY(t, e, i, n = 0.5) {
        (t.origin = n),
          (t.originPoint = (0, eH.t)(e.min, e.max, t.origin)),
          (t.scale = eX(i) / eX(e)),
          (t.translate = (0, eH.t)(i.min, i.max, t.origin) - t.originPoint),
          ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) &&
            (t.scale = 1),
          ((t.translate >= -0.01 && t.translate <= 0.01) ||
            isNaN(t.translate)) &&
            (t.translate = 0);
      }
      function eK(t, e, i, n) {
        eY(t.x, e.x, i.x, n ? n.originX : void 0),
          eY(t.y, e.y, i.y, n ? n.originY : void 0);
      }
      function eG(t, e, i) {
        (t.min = i.min + e.min), (t.max = t.min + eX(e));
      }
      function eq(t, e, i) {
        (t.min = e.min - i.min), (t.max = t.min + eX(e));
      }
      function eZ(t, e, i) {
        eq(t.x, e.x, i.x), eq(t.y, e.y, i.y);
      }
      function eJ(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function eQ(t, e) {
        let i = e.min - t.min,
          n = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, n] = [n, i]), { min: i, max: n }
        );
      }
      function e0(t, e, i) {
        return { min: e1(t, e), max: e1(t, i) };
      }
      function e1(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let e2 = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        e3 = () => ({ x: e2(), y: e2() }),
        e5 = () => ({ min: 0, max: 0 }),
        e4 = () => ({ x: e5(), y: e5() });
      function e9(t) {
        return [t("x"), t("y")];
      }
      function e6({ top: t, left: e, right: i, bottom: n }) {
        return { x: { min: e, max: i }, y: { min: t, max: n } };
      }
      function e8(t) {
        return void 0 === t || 1 === t;
      }
      function e7({ scale: t, scaleX: e, scaleY: i }) {
        return !e8(t) || !e8(e) || !e8(i);
      }
      function it(t) {
        return (
          e7(t) ||
          ie(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function ie(t) {
        var e, i;
        return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
      }
      function ii(t, e, i, n, r) {
        return void 0 !== r && (t = n + r * (t - n)), n + i * (t - n) + e;
      }
      function ir(t, e = 0, i = 1, n, r) {
        (t.min = ii(t.min, e, i, n, r)), (t.max = ii(t.max, e, i, n, r));
      }
      function is(t, { x: e, y: i }) {
        ir(t.x, e.translate, e.scale, e.originPoint),
          ir(t.y, i.translate, i.scale, i.originPoint);
      }
      function io(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function ia(t, e, i, n, r = 0.5) {
        let s = (0, eH.t)(t.min, t.max, r);
        ir(t, e, i, s, n);
      }
      function il(t, e) {
        ia(t.x, e.x, e.scaleX, e.scale, e.originX),
          ia(t.y, e.y, e.scaleY, e.scale, e.originY);
      }
      function iu(t, e) {
        return e6(
          (function (t, e) {
            if (!e) return t;
            let i = e({ x: t.left, y: t.top }),
              n = e({ x: t.right, y: t.bottom });
            return { top: i.y, left: i.x, bottom: n.y, right: n.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      let ih = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
        ic = new WeakMap();
      class id {
        constructor(t) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = e4()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: i } = this.visualElement;
          if (i && !1 === i.isPresent) return;
          let { dragSnapToOrigin: n } = this.getProps();
          this.panSession = new eO(
            t,
            {
              onSessionStart: (t) => {
                let { dragSnapToOrigin: i } = this.getProps();
                i ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor(eV(t, "page").point);
              },
              onStart: (t, e) => {
                let {
                  drag: i,
                  dragPropagation: n,
                  onDragStart: r,
                } = this.getProps();
                if (
                  i &&
                  !n &&
                  (this.openGlobalLock && this.openGlobalLock(),
                  (this.openGlobalLock = eN(i)),
                  !this.openGlobalLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  e9((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (Y.aQ.test(e)) {
                      let { projection: i } = this.visualElement;
                      if (i && i.layout) {
                        let n = i.layout.layoutBox[t];
                        n && (e = eX(n) * (parseFloat(e) / 100));
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  r && M.Wi.postRender(() => r(t, e)),
                  em(this.visualElement, "transform");
                let { animationState: s } = this.visualElement;
                s && s.setActive("whileDrag", !0);
              },
              onMove: (t, e) => {
                let {
                  dragPropagation: i,
                  dragDirectionLock: n,
                  onDirectionLock: r,
                  onDrag: s,
                } = this.getProps();
                if (!i && !this.openGlobalLock) return;
                let { offset: o } = e;
                if (n && null === this.currentDirection) {
                  (this.currentDirection = (function (t, e = 10) {
                    let i = null;
                    return (
                      Math.abs(t.y) > e
                        ? (i = "y")
                        : Math.abs(t.x) > e && (i = "x"),
                      i
                    );
                  })(o)),
                    null !== this.currentDirection &&
                      r &&
                      r(this.currentDirection);
                  return;
                }
                this.updateAxis("x", e.point, o),
                  this.updateAxis("y", e.point, o),
                  this.visualElement.render(),
                  s && s(t, e);
              },
              onSessionEnd: (t, e) => this.stop(t, e),
              resumeAnimation: () =>
                e9((t) => {
                  var e;
                  return (
                    "paused" === this.getAnimationState(t) &&
                    (null === (e = this.getAxisMotionValue(t).animation) ||
                    void 0 === e
                      ? void 0
                      : e.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: n,
              contextWindow: ih(this.visualElement),
            }
          );
        }
        stop(t, e) {
          let i = this.isDragging;
          if ((this.cancel(), !i)) return;
          let { velocity: n } = e;
          this.startAnimation(n);
          let { onDragEnd: r } = this.getProps();
          r && M.Wi.postRender(() => r(t, e));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: i } = this.getProps();
          !i &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, i) {
          let { drag: n } = this.getProps();
          if (!i || !ip(t, n, this.currentDirection)) return;
          let r = this.getAxisMotionValue(t),
            s = this.originPoint[t] + i[t];
          this.constraints &&
            this.constraints[t] &&
            (s = (function (t, { min: e, max: i }, n) {
              return (
                void 0 !== e && t < e
                  ? (t = n ? (0, eH.t)(e, t, n.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = n ? (0, eH.t)(i, t, n.max) : Math.min(t, i)),
                t
              );
            })(s, this.constraints[t], this.elastic[t])),
            r.set(s);
        }
        resolveConstraints() {
          var t;
          let { dragConstraints: e, dragElastic: i } = this.getProps(),
            n =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (t = this.visualElement.projection) || void 0 === t
                ? void 0
                : t.layout,
            r = this.constraints;
          e && ez(e)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : e && n
            ? (this.constraints = (function (
                t,
                { top: e, left: i, bottom: n, right: r }
              ) {
                return { x: eJ(t.x, i, r), y: eJ(t.y, e, n) };
              })(n.layoutBox, e))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: e0(t, "left", "right"), y: e0(t, "top", "bottom") }
              );
            })(i)),
            r !== this.constraints &&
              n &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              e9((t) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(n.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !ez(e)) return !1;
          let n = e.current;
          (0, N.k)(
            null !== n,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: r } = this.visualElement;
          if (!r || !r.layout) return !1;
          let s = (function (t, e, i) {
              let n = iu(t, i),
                { scroll: r } = e;
              return r && (io(n.x, r.offset.x), io(n.y, r.offset.y)), n;
            })(n, r.root, this.visualElement.getTransformPagePoint()),
            o = { x: eQ((t = r.layout.layoutBox).x, s.x), y: eQ(t.y, s.y) };
          if (i) {
            let t = i(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(o)
            );
            (this.hasMutatedConstraints = !!t), t && (o = e6(t));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: n,
              dragTransition: r,
              dragSnapToOrigin: s,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            e9((o) => {
              if (!ip(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              s && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: i ? t[o] : 0,
                bounceStiffness: n ? 200 : 1e6,
                bounceDamping: n ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...r,
                ...l,
              };
              return this.startAxisValueAnimation(o, u);
            })
          ).then(o);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return (
            em(this.visualElement, t),
            i.start(es(t, i, 0, e, this.visualElement, !1))
          );
        }
        stopAnimation() {
          e9((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          e9((t) => {
            var e;
            return null === (e = this.getAxisMotionValue(t).animation) ||
              void 0 === e
              ? void 0
              : e.pause();
          });
        }
        getAnimationState(t) {
          var e;
          return null === (e = this.getAxisMotionValue(t).animation) ||
            void 0 === e
            ? void 0
            : e.state;
        }
        getAxisMotionValue(t) {
          let e = `_drag${t.toUpperCase()}`,
            i = this.visualElement.getProps();
          return (
            i[e] ||
            this.visualElement.getValue(
              t,
              (i.initial ? i.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          e9((e) => {
            let { drag: i } = this.getProps();
            if (!ip(e, i, this.currentDirection)) return;
            let { projection: n } = this.visualElement,
              r = this.getAxisMotionValue(e);
            if (n && n.layout) {
              let { min: i, max: s } = n.layout.layoutBox[e];
              r.set(t[e] - (0, eH.t)(i, s, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!ez(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let n = { x: 0, y: 0 };
          e9((t) => {
            let e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              let i = e.get();
              n[t] = (function (t, e) {
                let i = 0.5,
                  n = eX(t),
                  r = eX(e);
                return (
                  r > n
                    ? (i = (0, t2.Y)(e.min, e.max - n, t.min))
                    : n > r && (i = (0, t2.Y)(t.min, t.max - r, e.min)),
                  (0, tR.u)(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: r } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = r ? r({}, "") : "none"),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            e9((e) => {
              if (!ip(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: r, max: s } = this.constraints[e];
              i.set((0, eH.t)(r, s, n[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          ic.set(this.visualElement, this);
          let t = eR(this.visualElement.current, "pointerdown", (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            e = () => {
              let { dragConstraints: t } = this.getProps();
              ez(t) &&
                t.current &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection: i } = this.visualElement,
            n = i.addEventListener("measure", e);
          i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
            M.Wi.read(e);
          let r = ek(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            s = i.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (e9((e) => {
                    let i = this.getAxisMotionValue(e);
                    i &&
                      ((this.originPoint[e] += t[e].translate),
                      i.set(i.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            r(), t(), n(), s && s();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: n = !1,
              dragConstraints: r = !1,
              dragElastic: s = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: n,
            dragConstraints: r,
            dragElastic: s,
            dragMomentum: o,
          };
        }
      }
      function ip(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      class im extends eT {
        constructor(t) {
          super(t),
            (this.removeGroupControls = V.Z),
            (this.removeListeners = V.Z),
            (this.controls = new id(t));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || V.Z);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let iv = (t) => (e, i) => {
        t && M.Wi.postRender(() => t(e, i));
      };
      class ig extends eT {
        constructor() {
          super(...arguments), (this.removePointerDownListener = V.Z);
        }
        onPointerDown(t) {
          this.session = new eO(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: ih(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: i,
            onPanEnd: n,
          } = this.node.getProps();
          return {
            onSessionStart: iv(t),
            onStart: iv(e),
            onMove: i,
            onEnd: (t, e) => {
              delete this.session, n && M.Wi.postRender(() => n(t, e));
            },
          };
        }
        mount() {
          this.removePointerDownListener = eR(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      var iy = i(1790),
        ix = i(1653),
        ib = i(9340),
        iw = i(4886);
      let iP = (0, ix.createContext)({}),
        iS = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function iT(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let iA = {
          correct: (t, e) => {
            if (!e.target) return t;
            if ("string" == typeof t) {
              if (!Y.px.test(t)) return t;
              t = parseFloat(t);
            }
            let i = iT(t, e.target.x),
              n = iT(t, e.target.y);
            return `${i}% ${n}%`;
          },
        },
        iE = {},
        { schedule: iC, cancel: iM } = (0, i(8511).Z)(queueMicrotask, !1);
      class iV extends ix.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: n,
            } = this.props,
            { projection: r } = t;
          Object.assign(iE, ik),
            r &&
              (e.group && e.group.add(r),
              i && i.register && n && i.register(r),
              r.root.didUpdate(),
              r.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              r.setOptions({
                ...r.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (iS.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: n,
              isPresent: r,
            } = this.props,
            s = i.projection;
          return (
            s &&
              ((s.isPresent = r),
              n || t.layoutDependency !== e || void 0 === e
                ? s.willUpdate()
                : this.safeToRemove(),
              t.isPresent === r ||
                (r
                  ? s.promote()
                  : s.relegate() ||
                    M.Wi.postRender(() => {
                      let t = s.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            iC.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: n } = t;
          n &&
            (n.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(n),
            i && i.deregister && i.deregister(n));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function ij(t) {
        let [e, i] = (function () {
            let t = (0, ix.useContext)(ib.O);
            if (null === t) return [!0, null];
            let { isPresent: e, onExitComplete: i, register: n } = t,
              r = (0, ix.useId)();
            (0, ix.useEffect)(() => n(r), []);
            let s = (0, ix.useCallback)(() => i && i(r), [r, i]);
            return !e && i ? [!1, s] : [!0];
          })(),
          n = (0, ix.useContext)(iw.p);
        return (0, iy.jsx)(iV, {
          ...t,
          layoutGroup: n,
          switchLayoutGroup: (0, ix.useContext)(iP),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let ik = {
        borderRadius: {
          ...iA,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: iA,
        borderTopRightRadius: iA,
        borderBottomLeftRadius: iA,
        borderBottomRightRadius: iA,
        boxShadow: {
          correct: (t, { treeScale: e, projectionDelta: i }) => {
            let n = th.P.parse(t);
            if (n.length > 5) return t;
            let r = th.P.createTransformer(t),
              s = "number" != typeof n[0] ? 1 : 0,
              o = i.x.scale * e.x,
              a = i.y.scale * e.y;
            (n[0 + s] /= o), (n[1 + s] /= a);
            let l = (0, eH.t)(o, a, 0.5);
            return (
              "number" == typeof n[2 + s] && (n[2 + s] /= l),
              "number" == typeof n[3 + s] && (n[3 + s] /= l),
              r(n)
            );
          },
        },
      };
      var iR = i(3120);
      let iD = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        iO = iD.length,
        iL = (t) => ("string" == typeof t ? parseFloat(t) : t),
        iF = (t) => "number" == typeof t || Y.px.test(t);
      function iB(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let iW = i$(0, 0.5, I),
        iI = i$(0.5, 0.95, V.Z);
      function i$(t, e, i) {
        return (n) => (n < t ? 0 : n > e ? 1 : i((0, t2.Y)(t, e, n)));
      }
      function i_(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function iN(t, e) {
        i_(t.x, e.x), i_(t.y, e.y);
      }
      function iU(t, e) {
        (t.translate = e.translate),
          (t.scale = e.scale),
          (t.originPoint = e.originPoint),
          (t.origin = e.origin);
      }
      function iz(t, e, i, n, r) {
        return (
          (t -= e),
          (t = n + (1 / i) * (t - n)),
          void 0 !== r && (t = n + (1 / r) * (t - n)),
          t
        );
      }
      function iH(t, e, [i, n, r], s, o) {
        !(function (t, e = 0, i = 1, n = 0.5, r, s = t, o = t) {
          if (
            (Y.aQ.test(e) &&
              ((e = parseFloat(e)),
              (e = (0, eH.t)(o.min, o.max, e / 100) - o.min)),
            "number" != typeof e)
          )
            return;
          let a = (0, eH.t)(s.min, s.max, n);
          t === s && (a -= e),
            (t.min = iz(t.min, e, i, a, r)),
            (t.max = iz(t.max, e, i, a, r));
        })(t, e[i], e[n], e[r], e.scale, s, o);
      }
      let iX = ["x", "scaleX", "originX"],
        iY = ["y", "scaleY", "originY"];
      function iK(t, e, i, n) {
        iH(t.x, e, iX, i ? i.x : void 0, n ? n.x : void 0),
          iH(t.y, e, iY, i ? i.y : void 0, n ? n.y : void 0);
      }
      function iG(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function iq(t) {
        return iG(t.x) && iG(t.y);
      }
      function iZ(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      function iJ(t, e) {
        return (
          Math.round(t.min) === Math.round(e.min) &&
          Math.round(t.max) === Math.round(e.max)
        );
      }
      function iQ(t, e) {
        return iJ(t.x, e.x) && iJ(t.y, e.y);
      }
      function i0(t) {
        return eX(t.x) / eX(t.y);
      }
      function i1(t, e) {
        return (
          t.translate === e.translate &&
          t.scale === e.scale &&
          t.originPoint === e.originPoint
        );
      }
      class i2 {
        constructor() {
          this.members = [];
        }
        add(t) {
          (0, ed.y4)(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            ((0, ed.cl)(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let i = this.members.findIndex((e) => t === e);
          if (0 === i) return !1;
          for (let t = i; t >= 0; t--) {
            let i = this.members[t];
            if (!1 !== i.isPresent) {
              e = i;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            i.instance && i.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = i),
              e && (t.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues =
                  i.animationValues || i.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: n } = t.options;
            !1 === n && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: i } = t;
            e.onExitComplete && e.onExitComplete(),
              i && i.options.onExitComplete && i.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      let i3 = (t, e) => t.depth - e.depth;
      class i5 {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          (0, ed.y4)(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          (0, ed.cl)(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(i3),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      function i4(t) {
        let e = ef(t) ? t.get() : t;
        return eo(e) ? e.toValue() : e;
      }
      let i9 = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        },
        i6 = "undefined" != typeof window && void 0 !== window.MotionDebug,
        i8 = ["", "X", "Y", "Z"],
        i7 = { visibility: "hidden" },
        nt = 0;
      function ne(t, e, i, n) {
        let { latestValues: r } = e;
        r[t] && ((i[t] = r[t]), e.setStaticValue(t, 0), n && (n[t] = 0));
      }
      function ni({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: n,
        resetTransform: r,
      }) {
        return class {
          constructor(t = {}, i = null == e ? void 0 : e()) {
            (this.id = nt++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  i6 &&
                    (i9.totalNodes =
                      i9.resolvedTargetDeltas =
                      i9.recalculatedProjection =
                        0),
                  this.nodes.forEach(ns),
                  this.nodes.forEach(nd),
                  this.nodes.forEach(np),
                  this.nodes.forEach(no),
                  i6 && window.MotionDebug.record(i9);
              }),
              (this.resolvedRelativeTargetAt = 0),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [...i.path, i] : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new i5());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) ||
                this.eventHandlers.set(t, new iR.L()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            i && i.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, i = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
              (this.instance = e);
            let { layoutId: n, layout: r, visualElement: s } = this.options;
            if (
              (s && !s.current && s.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              i && (r || n) && (this.isLayoutDirty = !0),
              t)
            ) {
              let i;
              let n = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  i && i(),
                  (i = (function (t, e) {
                    let i = tC.X.now(),
                      n = ({ timestamp: e }) => {
                        let r = e - i;
                        r >= 250 && ((0, M.Pn)(n), t(r - 250));
                      };
                    return M.Wi.read(n, !0), () => (0, M.Pn)(n);
                  })(n, 0)),
                  iS.hasAnimatedSinceResize &&
                    ((iS.hasAnimatedSinceResize = !1), this.nodes.forEach(nc));
              });
            }
            n && this.root.registerSharedNode(n, this),
              !1 !== this.options.animate &&
                s &&
                (n || r) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: i,
                    layout: n,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let r =
                        this.options.transition ||
                        s.getDefaultTransition() ||
                        nx,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a,
                      } = s.getProps(),
                      l = !this.targetLayout || !iQ(this.targetLayout, n) || i,
                      u = !e && i;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, u);
                      let e = { ...w(r, "layout"), onPlay: o, onComplete: a };
                      (s.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || nc(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = n;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              (0, M.Pn)(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(nf),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.MotionCancelOptimisedAnimation &&
                !this.hasCheckedOptimisedAppear &&
                (function t(e) {
                  if (((e.hasCheckedOptimisedAppear = !0), e.root === e))
                    return;
                  let { visualElement: i } = e.options;
                  if (!i) return;
                  let n = i.props[eh];
                  if (window.MotionHasOptimisedAnimation(n, "transform")) {
                    let { layout: t, layoutId: i } = e.options;
                    window.MotionCancelOptimisedAnimation(
                      n,
                      "transform",
                      M.Wi,
                      !(t || i)
                    );
                  }
                  let { parent: r } = e;
                  r && !r.hasCheckedOptimisedAppear && t(r);
                })(this),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: i } = this.options;
            if (void 0 === e && !i) return;
            let n = this.getTransformTemplate();
            (this.prevTransformTemplateValue = n
              ? n(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(nl);
              return;
            }
            this.isUpdating || this.nodes.forEach(nu),
              (this.isUpdating = !1),
              this.nodes.forEach(nh),
              this.nodes.forEach(nn),
              this.nodes.forEach(nr),
              this.clearAllSnapshots();
            let t = tC.X.now();
            (M.frameData.delta = (0, tR.u)(
              0,
              1e3 / 60,
              t - M.frameData.timestamp
            )),
              (M.frameData.timestamp = t),
              (M.frameData.isProcessing = !0),
              M.yL.update.process(M.frameData),
              M.yL.preRender.process(M.frameData),
              M.yL.render.process(M.frameData),
              (M.frameData.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), iC.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            this.nodes.forEach(na), this.sharedNodes.forEach(nm);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              M.Wi.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            M.Wi.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = e4()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            if (
              (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === t &&
                (e = !1),
              e)
            ) {
              let e = n(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: t,
                isRoot: e,
                offset: i(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : e,
              };
            }
          }
          resetTransform() {
            if (!r) return;
            let t =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
              e = this.projectionDelta && !iq(this.projectionDelta),
              i = this.getTransformTemplate(),
              n = i ? i(this.latestValues, "") : void 0,
              s = n !== this.prevTransformTemplateValue;
            t &&
              (e || it(this.latestValues) || s) &&
              (r(this.instance, n),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              n = this.removeElementScroll(i);
            return (
              t && (n = this.removeTransform(n)),
              nP((e = n).x),
              nP(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: n,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            var t;
            let { visualElement: e } = this.options;
            if (!e) return e4();
            let i = e.measureViewportBox();
            if (
              !(
                (null === (t = this.scroll) || void 0 === t
                  ? void 0
                  : t.wasRoot) || this.path.some(nT)
              )
            ) {
              let { scroll: t } = this.root;
              t && (io(i.x, t.offset.x), io(i.y, t.offset.y));
            }
            return i;
          }
          removeElementScroll(t) {
            var e;
            let i = e4();
            if (
              (iN(i, t),
              null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot)
            )
              return i;
            for (let e = 0; e < this.path.length; e++) {
              let n = this.path[e],
                { scroll: r, options: s } = n;
              n !== this.root &&
                r &&
                s.layoutScroll &&
                (r.wasRoot && iN(i, t),
                io(i.x, r.offset.x),
                io(i.y, r.offset.y));
            }
            return i;
          }
          applyTransform(t, e = !1) {
            let i = e4();
            iN(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let n = this.path[t];
              !e &&
                n.options.layoutScroll &&
                n.scroll &&
                n !== n.root &&
                il(i, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                it(n.latestValues) && il(i, n.latestValues);
            }
            return it(this.latestValues) && il(i, this.latestValues), i;
          }
          removeTransform(t) {
            let e = e4();
            iN(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !it(i.latestValues)) continue;
              e7(i.latestValues) && i.updateSnapshot();
              let n = e4();
              iN(n, i.measurePageBox()),
                iK(
                  e,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  n
                );
            }
            return it(this.latestValues) && iK(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !==
                M.frameData.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, i, n, r;
            let s = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = s.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = s.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
            let o = !!this.resumingFrom || this !== s;
            if (
              !(
                t ||
                (o && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize
              )
            )
              return;
            let { layout: a, layoutId: l } = this.options;
            if (this.layout && (a || l)) {
              if (
                ((this.resolvedRelativeTargetAt = M.frameData.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = e4()),
                    (this.relativeTargetOrigin = e4()),
                    eZ(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox
                    ),
                    iN(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = e4()), (this.targetWithTransforms = e4())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (i = this.target),
                      (n = this.relativeTarget),
                      (r = this.relativeParent.target),
                      eG(i.x, n.x, r.x),
                      eG(i.y, n.y, r.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : iN(this.target, this.layout.layoutBox),
                      is(this.target, this.targetDelta))
                    : iN(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = e4()),
                      (this.relativeTargetOrigin = e4()),
                      eZ(this.relativeTargetOrigin, this.target, t.target),
                      iN(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                i6 && i9.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              e7(this.parent.latestValues) ||
              ie(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              i = !!this.resumingFrom || this !== e,
              n = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (n = !1),
              i &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (n = !1),
              this.resolvedRelativeTargetAt === M.frameData.timestamp &&
                (n = !1),
              n)
            )
              return;
            let { layout: r, layoutId: s } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(r || s))
            )
              return;
            iN(this.layoutCorrected, this.layout.layoutBox);
            let o = this.treeScale.x,
              a = this.treeScale.y;
            !(function (t, e, i, n = !1) {
              let r, s;
              let o = i.length;
              if (o) {
                e.x = e.y = 1;
                for (let a = 0; a < o; a++) {
                  s = (r = i[a]).projectionDelta;
                  let { visualElement: o } = r.options;
                  (!o ||
                    !o.props.style ||
                    "contents" !== o.props.style.display) &&
                    (n &&
                      r.options.layoutScroll &&
                      r.scroll &&
                      r !== r.root &&
                      il(t, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
                    s && ((e.x *= s.x.scale), (e.y *= s.y.scale), is(t, s)),
                    n && it(r.latestValues) && il(t, r.latestValues));
                }
                e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1),
                  e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1);
              }
            })(this.layoutCorrected, this.treeScale, this.path, i),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((e.target = e.layout.layoutBox),
                (e.targetWithTransforms = e4()));
            let { target: l } = e;
            if (!l) {
              this.prevProjectionDelta &&
                (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            this.projectionDelta && this.prevProjectionDelta
              ? (iU(this.prevProjectionDelta.x, this.projectionDelta.x),
                iU(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              eK(
                this.projectionDelta,
                this.layoutCorrected,
                l,
                this.latestValues
              ),
              (this.treeScale.x === o &&
                this.treeScale.y === a &&
                i1(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                i1(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              i6 && i9.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            var e;
            if (
              (null === (e = this.options.visualElement) ||
                void 0 === e ||
                e.scheduleRender(),
              t)
            ) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          createProjectionDeltas() {
            (this.prevProjectionDelta = e3()),
              (this.projectionDelta = e3()),
              (this.projectionDeltaWithTransform = e3());
          }
          setAnimationOrigin(t, e = !1) {
            let i;
            let n = this.snapshot,
              r = n ? n.latestValues : {},
              s = { ...this.latestValues },
              o = e3();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = e4(),
              l =
                (n ? n.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              h = !u || u.members.length <= 1,
              c = !!(
                l &&
                !h &&
                !0 === this.options.crossfade &&
                !this.path.some(ny)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let n = e / 1e3;
                if (
                  (nv(o.x, t.x, n),
                  nv(o.y, t.y, n),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var u, d, p, f;
                  eZ(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (p = this.relativeTarget),
                    (f = this.relativeTargetOrigin),
                    ng(p.x, f.x, a.x, n),
                    ng(p.y, f.y, a.y, n),
                    i &&
                      ((u = this.relativeTarget),
                      (d = i),
                      iZ(u.x, d.x) && iZ(u.y, d.y)) &&
                      (this.isProjectionDirty = !1),
                    i || (i = e4()),
                    iN(i, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = s),
                  (function (t, e, i, n, r, s) {
                    r
                      ? ((t.opacity = (0, eH.t)(
                          0,
                          void 0 !== i.opacity ? i.opacity : 1,
                          iW(n)
                        )),
                        (t.opacityExit = (0, eH.t)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          0,
                          iI(n)
                        )))
                      : s &&
                        (t.opacity = (0, eH.t)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          void 0 !== i.opacity ? i.opacity : 1,
                          n
                        ));
                    for (let r = 0; r < iO; r++) {
                      let s = `border${iD[r]}Radius`,
                        o = iB(e, s),
                        a = iB(i, s);
                      (void 0 !== o || void 0 !== a) &&
                        (o || (o = 0),
                        a || (a = 0),
                        0 === o || 0 === a || iF(o) === iF(a)
                          ? ((t[s] = Math.max((0, eH.t)(iL(o), iL(a), n), 0)),
                            (Y.aQ.test(a) || Y.aQ.test(o)) && (t[s] += "%"))
                          : (t[s] = a));
                    }
                    (e.rotate || i.rotate) &&
                      (t.rotate = (0, eH.t)(e.rotate || 0, i.rotate || 0, n));
                  })(s, r, this.latestValues, n, c, h)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = n);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                ((0, M.Pn)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = M.Wi.update(() => {
                (iS.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (t, e, i) {
                    let n = ef(0) ? 0 : (0, el.BX)(0);
                    return n.start(es("", n, 1e3, i)), n.animation;
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onComplete: () => {
                      t.onComplete && t.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: i,
                layout: n,
                latestValues: r,
              } = t;
            if (e && i && n) {
              if (
                this !== t &&
                this.layout &&
                n &&
                nS(
                  this.options.animationType,
                  this.layout.layoutBox,
                  n.layoutBox
                )
              ) {
                i = this.target || e4();
                let e = eX(this.layout.layoutBox.x);
                (i.x.min = t.target.x.min), (i.x.max = i.x.min + e);
                let n = eX(this.layout.layoutBox.y);
                (i.y.min = t.target.y.min), (i.y.max = i.y.min + n);
              }
              iN(e, i),
                il(e, r),
                eK(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  r
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new i2()),
              this.sharedNodes.get(t).add(e);
            let i = e.options.initialPromotionConfig;
            e.promote({
              transition: i ? i.transition : void 0,
              preserveFollowOpacity:
                i && i.shouldPreserveFollowOpacity
                  ? i.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: i,
          } = {}) {
            let n = this.getStack();
            n && n.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.z ||
                i.rotate ||
                i.rotateX ||
                i.rotateY ||
                i.rotateZ ||
                i.skewX ||
                i.skewY) &&
                (e = !0),
              !e)
            )
              return;
            let n = {};
            i.z && ne("z", t, n, this.animationValues);
            for (let e = 0; e < i8.length; e++)
              ne(`rotate${i8[e]}`, t, n, this.animationValues),
                ne(`skew${i8[e]}`, t, n, this.animationValues);
            for (let e in (t.render(), n))
              t.setStaticValue(e, n[e]),
                this.animationValues && (this.animationValues[e] = n[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            var e, i;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return i7;
            let n = { visibility: "" },
              r = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (n.opacity = ""),
                (n.pointerEvents =
                  i4(null == t ? void 0 : t.pointerEvents) || ""),
                (n.transform = r ? r(this.latestValues, "") : "none"),
                n
              );
            let s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents =
                    i4(null == t ? void 0 : t.pointerEvents) || "")),
                this.hasProjected &&
                  !it(this.latestValues) &&
                  ((e.transform = r ? r({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let o = s.animationValues || s.latestValues;
            this.applyTransformsToTarget(),
              (n.transform = (function (t, e, i) {
                let n = "",
                  r = t.x.translate / e.x,
                  s = t.y.translate / e.y,
                  o = (null == i ? void 0 : i.z) || 0;
                if (
                  ((r || s || o) &&
                    (n = `translate3d(${r}px, ${s}px, ${o}px) `),
                  (1 !== e.x || 1 !== e.y) &&
                    (n += `scale(${1 / e.x}, ${1 / e.y}) `),
                  i)
                ) {
                  let {
                    transformPerspective: t,
                    rotate: e,
                    rotateX: r,
                    rotateY: s,
                    skewX: o,
                    skewY: a,
                  } = i;
                  t && (n = `perspective(${t}px) ${n}`),
                    e && (n += `rotate(${e}deg) `),
                    r && (n += `rotateX(${r}deg) `),
                    s && (n += `rotateY(${s}deg) `),
                    o && (n += `skewX(${o}deg) `),
                    a && (n += `skewY(${a}deg) `);
                }
                let a = t.x.scale * e.x,
                  l = t.y.scale * e.y;
                return (
                  (1 !== a || 1 !== l) && (n += `scale(${a}, ${l})`),
                  n || "none"
                );
              })(this.projectionDeltaWithTransform, this.treeScale, o)),
              r && (n.transform = r(o, n.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((n.transformOrigin = `${100 * a.origin}% ${
              100 * l.origin
            }% 0`),
            s.animationValues
              ? (n.opacity =
                  s === this
                    ? null !==
                        (i =
                          null !== (e = o.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== i
                      ? i
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : o.opacityExit)
              : (n.opacity =
                  s === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ""
                    : void 0 !== o.opacityExit
                    ? o.opacityExit
                    : 0),
            iE)) {
              if (void 0 === o[t]) continue;
              let { correct: e, applyTo: i } = iE[t],
                r = "none" === n.transform ? o[t] : e(o[t], s);
              if (i) {
                let t = i.length;
                for (let e = 0; e < t; e++) n[i[e]] = r;
              } else n[t] = r;
            }
            return (
              this.options.layoutId &&
                (n.pointerEvents =
                  s === this
                    ? i4(null == t ? void 0 : t.pointerEvents) || ""
                    : "none"),
              n
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(nl),
              this.root.sharedNodes.clear();
          }
        };
      }
      function nn(t) {
        t.updateLayout();
      }
      function nr(t) {
        var e;
        let i =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
          let { layoutBox: e, measuredBox: n } = t.layout,
            { animationType: r } = t.options,
            s = i.source !== t.layout.source;
          "size" === r
            ? e9((t) => {
                let n = s ? i.measuredBox[t] : i.layoutBox[t],
                  r = eX(n);
                (n.min = e[t].min), (n.max = n.min + r);
              })
            : nS(r, i.layoutBox, e) &&
              e9((n) => {
                let r = s ? i.measuredBox[n] : i.layoutBox[n],
                  o = eX(e[n]);
                (r.max = r.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[n].max = t.relativeTarget[n].min + o));
              });
          let o = e3();
          eK(o, e, i.layoutBox);
          let a = e3();
          s
            ? eK(a, t.applyTransform(n, !0), i.measuredBox)
            : eK(a, e, i.layoutBox);
          let l = !iq(o),
            u = !1;
          if (!t.resumeFrom) {
            let n = t.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              let { snapshot: r, layout: s } = n;
              if (r && s) {
                let o = e4();
                eZ(o, i.layoutBox, r.layoutBox);
                let a = e4();
                eZ(a, e, s.layoutBox),
                  iQ(o, a) || (u = !0),
                  n.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = n));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: i,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function ns(t) {
        i6 && i9.totalNodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function no(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function na(t) {
        t.clearSnapshot();
      }
      function nl(t) {
        t.clearMeasurements();
      }
      function nu(t) {
        t.isLayoutDirty = !1;
      }
      function nh(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function nc(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function nd(t) {
        t.resolveTargetDelta();
      }
      function np(t) {
        t.calcProjection();
      }
      function nf(t) {
        t.resetSkewAndRotation();
      }
      function nm(t) {
        t.removeLeadSnapshot();
      }
      function nv(t, e, i) {
        (t.translate = (0, eH.t)(e.translate, 0, i)),
          (t.scale = (0, eH.t)(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function ng(t, e, i, n) {
        (t.min = (0, eH.t)(e.min, i.min, n)),
          (t.max = (0, eH.t)(e.max, i.max, n));
      }
      function ny(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let nx = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        nb = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        nw = nb("applewebkit/") && !nb("chrome/") ? Math.round : V.Z;
      function nP(t) {
        (t.min = nw(t.min)), (t.max = nw(t.max));
      }
      function nS(t, e, i) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !(0.2 >= Math.abs(i0(e) - i0(i))))
        );
      }
      function nT(t) {
        var e;
        return (
          t !== t.root &&
          (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
        );
      }
      let nA = ni({
          attachResizeListener: (t, e) => ek(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        nE = { current: void 0 },
        nC = ni({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!nE.current) {
              let t = new nA({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (nE.current = t);
            }
            return nE.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        });
      function nM(t, e) {
        let i = e ? "onHoverStart" : "onHoverEnd";
        return eR(
          t.current,
          e ? "pointerenter" : "pointerleave",
          (n, r) => {
            if ("touch" === n.pointerType || eU()) return;
            let s = t.getProps();
            t.animationState &&
              s.whileHover &&
              t.animationState.setActive("whileHover", e);
            let o = s[i];
            o && M.Wi.postRender(() => o(n, r));
          },
          { passive: !t.getProps()[i] }
        );
      }
      class nV extends eT {
        mount() {
          this.unmount = (0, tK.z)(nM(this.node, !0), nM(this.node, !1));
        }
        unmount() {}
      }
      class nj extends eT {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = (0, tK.z)(
            ek(this.node.current, "focus", () => this.onFocus()),
            ek(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      let nk = (t, e) => !!e && (t === e || nk(t, e.parentElement));
      function nR(t, e) {
        if (!e) return;
        let i = new PointerEvent("pointer" + t);
        e(i, eV(i));
      }
      class nD extends eT {
        constructor() {
          super(...arguments),
            (this.removeStartListeners = V.Z),
            (this.removeEndListeners = V.Z),
            (this.removeAccessibleListeners = V.Z),
            (this.startPointerPress = (t, e) => {
              if (this.isPressing) return;
              this.removeEndListeners();
              let i = this.node.getProps(),
                n = eR(
                  window,
                  "pointerup",
                  (t, e) => {
                    if (!this.checkPressEnd()) return;
                    let {
                        onTap: i,
                        onTapCancel: n,
                        globalTapTarget: r,
                      } = this.node.getProps(),
                      s = r || nk(this.node.current, t.target) ? i : n;
                    s && M.Wi.update(() => s(t, e));
                  },
                  { passive: !(i.onTap || i.onPointerUp) }
                ),
                r = eR(
                  window,
                  "pointercancel",
                  (t, e) => this.cancelPress(t, e),
                  { passive: !(i.onTapCancel || i.onPointerCancel) }
                );
              (this.removeEndListeners = (0, tK.z)(n, r)),
                this.startPress(t, e);
            }),
            (this.startAccessiblePress = () => {
              let t = ek(this.node.current, "keydown", (t) => {
                  "Enter" !== t.key ||
                    this.isPressing ||
                    (this.removeEndListeners(),
                    (this.removeEndListeners = ek(
                      this.node.current,
                      "keyup",
                      (t) => {
                        "Enter" === t.key &&
                          this.checkPressEnd() &&
                          nR("up", (t, e) => {
                            let { onTap: i } = this.node.getProps();
                            i && M.Wi.postRender(() => i(t, e));
                          });
                      }
                    )),
                    nR("down", (t, e) => {
                      this.startPress(t, e);
                    }));
                }),
                e = ek(this.node.current, "blur", () => {
                  this.isPressing &&
                    nR("cancel", (t, e) => this.cancelPress(t, e));
                });
              this.removeAccessibleListeners = (0, tK.z)(t, e);
            });
        }
        startPress(t, e) {
          this.isPressing = !0;
          let { onTapStart: i, whileTap: n } = this.node.getProps();
          n &&
            this.node.animationState &&
            this.node.animationState.setActive("whileTap", !0),
            i && M.Wi.postRender(() => i(t, e));
        }
        checkPressEnd() {
          return (
            this.removeEndListeners(),
            (this.isPressing = !1),
            this.node.getProps().whileTap &&
              this.node.animationState &&
              this.node.animationState.setActive("whileTap", !1),
            !eU()
          );
        }
        cancelPress(t, e) {
          if (!this.checkPressEnd()) return;
          let { onTapCancel: i } = this.node.getProps();
          i && M.Wi.postRender(() => i(t, e));
        }
        mount() {
          let t = this.node.getProps(),
            e = eR(
              t.globalTapTarget ? window : this.node.current,
              "pointerdown",
              this.startPointerPress,
              { passive: !(t.onTapStart || t.onPointerStart) }
            ),
            i = ek(this.node.current, "focus", this.startAccessiblePress);
          this.removeStartListeners = (0, tK.z)(e, i);
        }
        unmount() {
          this.removeStartListeners(),
            this.removeEndListeners(),
            this.removeAccessibleListeners();
        }
      }
      let nO = new WeakMap(),
        nL = new WeakMap(),
        nF = (t) => {
          let e = nO.get(t.target);
          e && e(t);
        },
        nB = (t) => {
          t.forEach(nF);
        },
        nW = { some: 0, all: 1 };
      class nI extends eT {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: i, amount: n = "some", once: r } = t,
            s = {
              root: e ? e.current : void 0,
              rootMargin: i,
              threshold: "number" == typeof n ? n : nW[n],
            };
          return (function (t, e, i) {
            let n = (function ({ root: t, ...e }) {
              let i = t || document;
              nL.has(i) || nL.set(i, {});
              let n = nL.get(i),
                r = JSON.stringify(e);
              return (
                n[r] ||
                  (n[r] = new IntersectionObserver(nB, { root: t, ...e })),
                n[r]
              );
            })(e);
            return (
              nO.set(t, i),
              n.observe(t),
              () => {
                nO.delete(t), n.unobserve(t);
              }
            );
          })(this.node.current, s, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), r && !e && this.hasEnteredView)
            )
              return;
            e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", e);
            let { onViewportEnter: i, onViewportLeave: n } =
                this.node.getProps(),
              s = e ? i : n;
            s && s(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (i) => t[i] !== e[i];
            })(t, e)
          ) && this.startObserver();
        }
        unmount() {}
      }
      var n$ = i(4909);
      let n_ = (0, ix.createContext)({});
      var nN = i(5138);
      let nU = (0, ix.createContext)({ strict: !1 }),
        nz = !1;
      function nH() {
        window.MotionHandoffIsComplete = !0;
      }
      function nX(t) {
        return n(t.animate) || c.some((e) => o(t[e]));
      }
      function nY(t) {
        return !!(nX(t) || t.variants);
      }
      function nK(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      let nG = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        nq = {};
      for (let t in nG) nq[t] = { isEnabled: (e) => nG[t].some((t) => !!e[t]) };
      var nZ = i(8080);
      let nJ = Symbol.for("motionComponentSymbol"),
        nQ = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "switch",
          "symbol",
          "svg",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function n0(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (nQ.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
      function n1(t, { style: e, vars: i }, n, r) {
        for (let s in (Object.assign(t.style, e, r && r.getProjectionStyles(n)),
        i))
          t.style.setProperty(s, i[s]);
      }
      let n2 = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function n3(t, e, i, n) {
        for (let i in (n1(t, e, void 0, n), e.attrs))
          t.setAttribute(n2.has(i) ? i : eu(i), e.attrs[i]);
      }
      function n5(t, { layout: e, layoutId: i }) {
        return (
          p.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== i) && (!!iE[t] || "opacity" === t))
        );
      }
      function n4(t, e, i) {
        var n;
        let { style: r } = t,
          s = {};
        for (let o in r)
          (ef(r[o]) ||
            (e.style && ef(e.style[o])) ||
            n5(o, t) ||
            (null === (n = null == i ? void 0 : i.getValue(o)) || void 0 === n
              ? void 0
              : n.liveStyle) !== void 0) &&
            (s[o] = r[o]);
        return (
          i && r && "string" == typeof r.willChange && (i.applyWillChange = !1),
          s
        );
      }
      function n9(t, e, i) {
        let n = n4(t, e, i);
        for (let i in t)
          (ef(t[i]) || ef(e[i])) &&
            (n[
              -1 !== d.indexOf(i)
                ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
                : i
            ] = t[i]);
        return n;
      }
      var n6 = i(6161);
      let n8 = (t) => (e, i) => {
        let r = (0, ix.useContext)(n_),
          s = (0, ix.useContext)(ib.O),
          o = () =>
            (function (
              {
                applyWillChange: t = !1,
                scrapeMotionValuesFromProps: e,
                createRenderState: i,
                onMount: r,
              },
              s,
              o,
              a,
              l
            ) {
              let u = {
                latestValues: (function (t, e, i, r, s) {
                  var o;
                  let a = {},
                    l = [],
                    u =
                      r &&
                      (null === (o = t.style) || void 0 === o
                        ? void 0
                        : o.willChange) === void 0,
                    h = s(t, {});
                  for (let t in h) a[t] = i4(h[t]);
                  let { initial: c, animate: d } = t,
                    p = nX(t),
                    f = nY(t);
                  e &&
                    f &&
                    !p &&
                    !1 !== t.inherit &&
                    (void 0 === c && (c = e.initial),
                    void 0 === d && (d = e.animate));
                  let m = !!i && !1 === i.initial,
                    v = (m = m || !1 === c) ? d : c;
                  return (
                    v &&
                      "boolean" != typeof v &&
                      !n(v) &&
                      n7(t, v, (t, e) => {
                        for (let e in t) {
                          let i = t[e];
                          if (Array.isArray(i)) {
                            let t = m ? i.length - 1 : 0;
                            i = i[t];
                          }
                          null !== i && (a[e] = i);
                        }
                        for (let t in e) a[t] = e[t];
                      }),
                    u &&
                      (d &&
                        !1 !== c &&
                        !n(d) &&
                        n7(t, d, (t) => {
                          for (let e in t)
                            !(function (t, e) {
                              let i = ec(e);
                              i && (0, ed.y4)(t, i);
                            })(l, e);
                        }),
                      l.length && (a.willChange = l.join(","))),
                    a
                  );
                })(s, o, a, !l && t, e),
                renderState: i(),
              };
              return r && (u.mount = (t) => r(s, t, u)), u;
            })(t, e, r, s, i);
        return i ? o() : (0, n6.h)(o);
      };
      function n7(t, e, i) {
        let n = Array.isArray(e) ? e : [e];
        for (let e = 0; e < n.length; e++) {
          let r = l(t, n[e]);
          if (r) {
            let { transitionEnd: t, transition: e, ...n } = r;
            i(n, t);
          }
        }
      }
      let rt = () => ({
          style: {},
          transform: {},
          transformOrigin: {},
          vars: {},
        }),
        re = () => ({ ...rt(), attrs: {} }),
        ri = (t, e) => (e && "number" == typeof t ? e.transform(t) : t),
        rn = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        rr = d.length;
      function rs(t, e, i) {
        let { style: n, vars: r, transformOrigin: s } = t,
          o = !1,
          a = !1;
        for (let t in e) {
          let i = e[t];
          if (p.has(t)) {
            o = !0;
            continue;
          }
          if ((0, z.f)(t)) {
            r[t] = i;
            continue;
          }
          {
            let e = ri(i, tb[t]);
            t.startsWith("origin") ? ((a = !0), (s[t] = e)) : (n[t] = e);
          }
        }
        if (
          (!e.transform &&
            (o || i
              ? (n.transform = (function (t, e, i) {
                  let n = "",
                    r = !0;
                  for (let s = 0; s < rr; s++) {
                    let o = d[s],
                      a = t[o];
                    if (void 0 === a) continue;
                    let l = !0;
                    if (
                      !(l =
                        "number" == typeof a
                          ? a === (o.startsWith("scale") ? 1 : 0)
                          : 0 === parseFloat(a)) ||
                      i
                    ) {
                      let t = ri(a, tb[o]);
                      if (!l) {
                        r = !1;
                        let e = rn[o] || o;
                        n += `${e}(${t}) `;
                      }
                      i && (e[o] = t);
                    }
                  }
                  return (
                    (n = n.trim()),
                    i ? (n = i(e, r ? "" : n)) : r && (n = "none"),
                    n
                  );
                })(e, t.transform, i))
              : n.transform && (n.transform = "none")),
          a)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = s;
          n.transformOrigin = `${t} ${e} ${i}`;
        }
      }
      function ro(t, e, i) {
        return "string" == typeof t ? t : Y.px.transform(e + i * t);
      }
      let ra = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        rl = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function ru(
        t,
        {
          attrX: e,
          attrY: i,
          attrScale: n,
          originX: r,
          originY: s,
          pathLength: o,
          pathSpacing: a = 1,
          pathOffset: l = 0,
          ...u
        },
        h,
        c
      ) {
        if ((rs(t, u, c), h)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: d, style: p, dimensions: f } = t;
        d.transform && (f && (p.transform = d.transform), delete d.transform),
          f &&
            (void 0 !== r || void 0 !== s || p.transform) &&
            (p.transformOrigin = (function (t, e, i) {
              let n = ro(e, t.x, t.width),
                r = ro(i, t.y, t.height);
              return `${n} ${r}`;
            })(f, void 0 !== r ? r : 0.5, void 0 !== s ? s : 0.5)),
          void 0 !== e && (d.x = e),
          void 0 !== i && (d.y = i),
          void 0 !== n && (d.scale = n),
          void 0 !== o &&
            (function (t, e, i = 1, n = 0, r = !0) {
              t.pathLength = 1;
              let s = r ? ra : rl;
              t[s.offset] = Y.px.transform(-n);
              let o = Y.px.transform(e),
                a = Y.px.transform(i);
              t[s.array] = `${o} ${a}`;
            })(d, o, a, l, !1);
      }
      let rh = (t) => "string" == typeof t && "svg" === t.toLowerCase(),
        rc = {
          useVisualState: n8({
            scrapeMotionValuesFromProps: n9,
            createRenderState: re,
            onMount: (t, e, { renderState: i, latestValues: n }) => {
              M.Wi.read(() => {
                try {
                  i.dimensions =
                    "function" == typeof e.getBBox
                      ? e.getBBox()
                      : e.getBoundingClientRect();
                } catch (t) {
                  i.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                M.Wi.render(() => {
                  ru(i, n, rh(e.tagName), t.transformTemplate), n3(e, i);
                });
            },
          }),
        },
        rd = {
          useVisualState: n8({
            applyWillChange: !0,
            scrapeMotionValuesFromProps: n4,
            createRenderState: rt,
          }),
        };
      function rp(t, e, i) {
        for (let n in e) ef(e[n]) || n5(n, i) || (t[n] = e[n]);
      }
      let rf = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function rm(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          rf.has(t)
        );
      }
      let rv = (t) => !rm(t);
      try {
        !(function (t) {
          t && (rv = (e) => (e.startsWith("on") ? !rm(e) : t(e)));
        })(require("@emotion/is-prop-valid").default);
      } catch (t) {}
      let rg = { current: null },
        ry = { current: !1 },
        rx = new WeakMap(),
        rb = [...ti, tv.$, th.P],
        rw = (t) => rb.find(te(t)),
        rP = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ];
      class rS {
        scrapeMotionValuesFromProps(t, e, i) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: n,
            blockInitialAnimation: r,
            visualState: s,
          },
          o = {}
        ) {
          (this.applyWillChange = !1),
            (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = tu),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
              let t = tC.X.now();
              this.renderScheduledAt < t &&
                ((this.renderScheduledAt = t),
                M.Wi.render(this.render, !1, !0));
            });
          let { latestValues: a, renderState: l } = s;
          (this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = e.initial ? { ...a } : {}),
            (this.renderState = l),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = n),
            (this.options = o),
            (this.blockInitialAnimation = !!r),
            (this.isControllingVariants = nX(e)),
            (this.isVariantNode = nY(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: u, ...h } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this
          );
          for (let t in h) {
            let e = h[t];
            void 0 !== a[t] && ef(e) && e.set(a[t], !1);
          }
        }
        mount(t) {
          (this.current = t),
            rx.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            ry.current ||
              (function () {
                if (((ry.current = !0), nZ.j)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (rg.current = t.matches);
                    t.addListener(e), e();
                  } else rg.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || rg.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (rx.delete(this.current),
          this.projection && this.projection.unmount(),
          (0, M.Pn)(this.notifyUpdate),
          (0, M.Pn)(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) {
            let e = this.features[t];
            e && (e.unmount(), (e.isMounted = !1));
          }
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let i;
          this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
          let n = p.has(t),
            r = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && M.Wi.preRender(this.notifyUpdate),
                n && this.projection && (this.projection.isTransformDirty = !0);
            }),
            s = e.on("renderRequest", this.scheduleRender);
          window.MotionCheckAppearSync &&
            (i = window.MotionCheckAppearSync(this, t, e)),
            this.valueSubscriptions.set(t, () => {
              r(), s(), i && i(), e.owner && e.stop();
            });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        updateFeatures() {
          let t = "animation";
          for (t in nq) {
            let e = nq[t];
            if (!e) continue;
            let { isEnabled: i, Feature: n } = e;
            if (
              (!this.features[t] &&
                n &&
                i(this.props) &&
                (this.features[t] = new n(this)),
              this.features[t])
            ) {
              let e = this.features[t];
              e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : e4();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < rP.length; e++) {
            let i = rP[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let n = t["on" + i];
            n && (this.propEventSubscriptions[i] = this.on(i, n));
          }
          (this.prevMotionValues = (function (t, e, i) {
            for (let n in e) {
              let r = e[n],
                s = i[n];
              if (ef(r)) t.addValue(n, r);
              else if (ef(s)) t.addValue(n, (0, el.BX)(r, { owner: t }));
              else if (s !== r) {
                if (t.hasValue(n)) {
                  let e = t.getValue(n);
                  !0 === e.liveStyle ? e.jump(r) : e.hasAnimated || e.set(r);
                } else {
                  let e = t.getStaticValue(n);
                  t.addValue(n, (0, el.BX)(void 0 !== e ? e : r, { owner: t }));
                }
              }
            }
            for (let n in i) void 0 === e[n] && t.removeValue(n);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          let i = this.values.get(t);
          e !== i &&
            (i && this.removeValue(t),
            this.bindToMotionValue(t, e),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()));
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = (0, el.BX)(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, i)),
            i
          );
        }
        readValue(t, e) {
          var i;
          let n =
            void 0 === this.latestValues[t] && this.current
              ? null !== (i = this.getBaseTargetFromProps(this.props, t)) &&
                void 0 !== i
                ? i
                : this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          return (
            null != n &&
              ("string" == typeof n && (U(n) || _(n))
                ? (n = parseFloat(n))
                : !rw(n) && th.P.test(e) && (n = tS(t, e)),
              this.setBaseTarget(t, ef(n) ? n.get() : n)),
            ef(n) ? n.get() : n
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let i;
          let { initial: n } = this.props;
          if ("string" == typeof n || "object" == typeof n) {
            let r = l(
              this.props,
              n,
              null === (e = this.presenceContext) || void 0 === e
                ? void 0
                : e.custom
            );
            r && (i = r[t]);
          }
          if (n && void 0 !== i) return i;
          let r = this.getBaseTargetFromProps(this.props, t);
          return void 0 === r || ef(r)
            ? void 0 !== this.initialValues[t] && void 0 === i
              ? void 0
              : this.baseTarget[t]
            : r;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new iR.L()),
            this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      class rT extends rS {
        constructor() {
          super(...arguments), (this.KeyframeResolver = tA);
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: i }) {
          delete e[t], delete i[t];
        }
      }
      class rA extends rT {
        constructor() {
          super(...arguments),
            (this.type = "html"),
            (this.applyWillChange = !0),
            (this.renderInstance = n1);
        }
        readValueFromInstance(t, e) {
          if (p.has(e)) {
            let t = tP(e);
            return (t && t.default) || 0;
          }
          {
            let i = window.getComputedStyle(t),
              n = ((0, z.f)(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof n ? n.trim() : n;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return iu(t, e);
        }
        build(t, e, i) {
          rs(t, e, i.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return n4(t, e, i);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          ef(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
      }
      class rE extends rT {
        constructor() {
          super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = e4);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (p.has(e)) {
            let t = tP(e);
            return (t && t.default) || 0;
          }
          return (e = n2.has(e) ? e : eu(e)), t.getAttribute(e);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return n9(t, e, i);
        }
        build(t, e, i) {
          ru(t, e, this.isSVGTag, i.transformTemplate);
        }
        renderInstance(t, e, i, n) {
          n3(t, e, i, n);
        }
        mount(t) {
          (this.isSVGTag = rh(t.tagName)), super.mount(t);
        }
      }
      let rC = (function (t) {
        if ("undefined" == typeof Proxy) return t;
        let e = new Map();
        return new Proxy((...e) => t(...e), {
          get: (i, n) =>
            "create" === n ? t : (e.has(n) || e.set(n, t(n)), e.get(n)),
        });
      })(
        ((P = {
          animation: { Feature: eA },
          exit: { Feature: eC },
          inView: { Feature: nI },
          tap: { Feature: nD },
          focus: { Feature: nj },
          hover: { Feature: nV },
          pan: { Feature: ig },
          drag: { Feature: im, ProjectionNode: nC, MeasureLayout: ij },
          layout: { ProjectionNode: nC, MeasureLayout: ij },
        }),
        (S = (t, e) =>
          n0(t)
            ? new rE(e)
            : new rA(e, { allowProjection: t !== ix.Fragment })),
        function (t, { forwardMotionProps: e } = { forwardMotionProps: !1 }) {
          return (function (t) {
            let {
              preloadedFeatures: e,
              createVisualElement: i,
              useRender: n,
              useVisualState: r,
              Component: s,
            } = t;
            e &&
              (function (t) {
                for (let e in t) nq[e] = { ...nq[e], ...t[e] };
              })(e);
            let a = (0, ix.forwardRef)(function (t, e) {
              var a;
              let l;
              let u = {
                  ...(0, ix.useContext)(n$._),
                  ...t,
                  layoutId: (function (t) {
                    let { layoutId: e } = t,
                      i = (0, ix.useContext)(iw.p).id;
                    return i && void 0 !== e ? i + "-" + e : e;
                  })(t),
                },
                { isStatic: h } = u,
                c = (function (t) {
                  let { initial: e, animate: i } = (function (t, e) {
                    if (nX(t)) {
                      let { initial: e, animate: i } = t;
                      return {
                        initial: !1 === e || o(e) ? e : void 0,
                        animate: o(i) ? i : void 0,
                      };
                    }
                    return !1 !== t.inherit ? e : {};
                  })(t, (0, ix.useContext)(n_));
                  return (0, ix.useMemo)(
                    () => ({ initial: e, animate: i }),
                    [nK(e), nK(i)]
                  );
                })(t),
                d = r(t, h);
              if (!h && nZ.j) {
                (0, ix.useContext)(nU).strict;
                let t = (function (t) {
                  let { drag: e, layout: i } = nq;
                  if (!e && !i) return {};
                  let n = { ...e, ...i };
                  return {
                    MeasureLayout:
                      (null == e ? void 0 : e.isEnabled(t)) ||
                      (null == i ? void 0 : i.isEnabled(t))
                        ? n.MeasureLayout
                        : void 0,
                    ProjectionNode: n.ProjectionNode,
                  };
                })(u);
                (l = t.MeasureLayout),
                  (c.visualElement = (function (t, e, i, n, r) {
                    var s;
                    let { visualElement: o } = (0, ix.useContext)(n_),
                      a = (0, ix.useContext)(nU),
                      l = (0, ix.useContext)(ib.O),
                      u = (0, ix.useContext)(n$._).reducedMotion,
                      h = (0, ix.useRef)();
                    (n = n || a.renderer),
                      !h.current &&
                        n &&
                        (h.current = n(t, {
                          visualState: e,
                          parent: o,
                          props: i,
                          presenceContext: l,
                          blockInitialAnimation: !!l && !1 === l.initial,
                          reducedMotionConfig: u,
                        }));
                    let c = h.current,
                      d = (0, ix.useContext)(iP);
                    c &&
                      !c.projection &&
                      r &&
                      ("html" === c.type || "svg" === c.type) &&
                      (function (t, e, i, n) {
                        let {
                          layoutId: r,
                          layout: s,
                          drag: o,
                          dragConstraints: a,
                          layoutScroll: l,
                          layoutRoot: u,
                        } = e;
                        (t.projection = new i(
                          t.latestValues,
                          e["data-framer-portal-id"]
                            ? void 0
                            : (function t(e) {
                                if (e)
                                  return !1 !== e.options.allowProjection
                                    ? e.projection
                                    : t(e.parent);
                              })(t.parent)
                        )),
                          t.projection.setOptions({
                            layoutId: r,
                            layout: s,
                            alwaysMeasureLayout: !!o || (a && ez(a)),
                            visualElement: t,
                            animationType: "string" == typeof s ? s : "both",
                            initialPromotionConfig: n,
                            layoutScroll: l,
                            layoutRoot: u,
                          });
                      })(h.current, i, r, d),
                      (0, ix.useInsertionEffect)(() => {
                        c && c.update(i, l);
                      });
                    let p = i[eh],
                      f = (0, ix.useRef)(
                        !!p &&
                          !window.MotionHandoffIsComplete &&
                          (null === (s = window.MotionHasOptimisedAnimation) ||
                          void 0 === s
                            ? void 0
                            : s.call(window, p))
                      );
                    return (
                      (0, nN.L)(() => {
                        c &&
                          (c.updateFeatures(),
                          iC.render(c.render),
                          f.current &&
                            c.animationState &&
                            c.animationState.animateChanges());
                      }),
                      (0, ix.useEffect)(() => {
                        c &&
                          (!f.current &&
                            c.animationState &&
                            c.animationState.animateChanges(),
                          (f.current = !1),
                          nz || ((nz = !0), queueMicrotask(nH)));
                      }),
                      c
                    );
                  })(s, d, u, i, t.ProjectionNode));
              }
              return (0, iy.jsxs)(n_.Provider, {
                value: c,
                children: [
                  l && c.visualElement
                    ? (0, iy.jsx)(l, { visualElement: c.visualElement, ...u })
                    : null,
                  n(
                    s,
                    t,
                    ((a = c.visualElement),
                    (0, ix.useCallback)(
                      (t) => {
                        t && d.mount && d.mount(t),
                          a && (t ? a.mount(t) : a.unmount()),
                          e &&
                            ("function" == typeof e
                              ? e(t)
                              : ez(e) && (e.current = t));
                      },
                      [a]
                    )),
                    d,
                    h,
                    c.visualElement
                  ),
                ],
              });
            });
            return (a[nJ] = s), a;
          })({
            ...(n0(t) ? rc : rd),
            preloadedFeatures: P,
            useRender: (function (t = !1) {
              return (e, i, n, { latestValues: r }, s) => {
                let o = (
                    n0(e)
                      ? function (t, e, i, n) {
                          let r = (0, ix.useMemo)(() => {
                            let i = re();
                            return (
                              ru(i, e, rh(n), t.transformTemplate),
                              { ...i.attrs, style: { ...i.style } }
                            );
                          }, [e]);
                          if (t.style) {
                            let e = {};
                            rp(e, t.style, t), (r.style = { ...e, ...r.style });
                          }
                          return r;
                        }
                      : function (t, e) {
                          let i = {},
                            n = (function (t, e) {
                              let i = t.style || {},
                                n = {};
                              return (
                                rp(n, i, t),
                                Object.assign(
                                  n,
                                  (function ({ transformTemplate: t }, e) {
                                    return (0, ix.useMemo)(() => {
                                      let i = rt();
                                      return (
                                        rs(i, e, t),
                                        Object.assign({}, i.vars, i.style)
                                      );
                                    }, [e]);
                                  })(t, e)
                                ),
                                n
                              );
                            })(t, e);
                          return (
                            t.drag &&
                              !1 !== t.dragListener &&
                              ((i.draggable = !1),
                              (n.userSelect =
                                n.WebkitUserSelect =
                                n.WebkitTouchCallout =
                                  "none"),
                              (n.touchAction =
                                !0 === t.drag
                                  ? "none"
                                  : `pan-${"x" === t.drag ? "y" : "x"}`)),
                            void 0 === t.tabIndex &&
                              (t.onTap || t.onTapStart || t.whileTap) &&
                              (i.tabIndex = 0),
                            (i.style = n),
                            i
                          );
                        }
                  )(i, r, s, e),
                  a = (function (t, e, i) {
                    let n = {};
                    for (let r in t)
                      ("values" !== r || "object" != typeof t.values) &&
                        (rv(r) ||
                          (!0 === i && rm(r)) ||
                          (!e && !rm(r)) ||
                          (t.draggable && r.startsWith("onDrag"))) &&
                        (n[r] = t[r]);
                    return n;
                  })(i, "string" == typeof e, t),
                  l = e !== ix.Fragment ? { ...a, ...o, ref: n } : {},
                  { children: u } = i,
                  h = (0, ix.useMemo)(() => (ef(u) ? u.get() : u), [u]);
                return (0, ix.createElement)(e, { ...l, children: h });
              };
            })(e),
            createVisualElement: S,
            Component: t,
          });
        })
      );
    },
    1728: (t, e, i) => {
      "use strict";
      i.d(e, { t: () => n });
      let n = (0, i(7307).X)(() => void 0 !== window.ScrollTimeline);
    },
    4490: (t, e, i) => {
      "use strict";
      i.d(e, { f: () => r, t: () => o });
      let n = (t) => (e) => "string" == typeof e && e.startsWith(t),
        r = n("--"),
        s = n("var(--"),
        o = (t) => !!s(t) && a.test(t.split("/*")[0].trim()),
        a =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    },
    1498: (t, e, i) => {
      "use strict";
      i.d(e, { c: () => n });
      let n = { skipAnimations: !1, useManualTiming: !1 };
    },
    4922: (t, e, i) => {
      "use strict";
      function n(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function r(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      i.d(e, { cl: () => r, y4: () => n });
    },
    9218: (t, e, i) => {
      "use strict";
      i.d(e, { u: () => n });
      let n = (t, e, i) => (i > e ? e : i < t ? t : i);
    },
    1975: (t, e, i) => {
      "use strict";
      i.d(e, { K: () => r, k: () => s });
      var n = i(925);
      let r = n.Z,
        s = n.Z;
    },
    6509: (t, e, i) => {
      "use strict";
      i.d(e, { s: () => u });
      var n = i(1975),
        r = i(9218),
        s = i(1854),
        o = i(2320),
        a = i(925),
        l = i(4621);
      function u(t, e, { clamp: i = !0, ease: u, mixer: h } = {}) {
        let c = t.length;
        if (
          ((0, n.k)(
            c === e.length,
            "Both input and output ranges must be the same length"
          ),
          1 === c)
        )
          return () => e[0];
        if (2 === c && t[0] === t[1]) return () => e[1];
        t[0] > t[c - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
        let d = (function (t, e, i) {
            let n = [],
              r = i || l.C,
              o = t.length - 1;
            for (let i = 0; i < o; i++) {
              let o = r(t[i], t[i + 1]);
              if (e) {
                let t = Array.isArray(e) ? e[i] || a.Z : e;
                o = (0, s.z)(t, o);
              }
              n.push(o);
            }
            return n;
          })(e, u, h),
          p = d.length,
          f = (e) => {
            let i = 0;
            if (p > 1) for (; i < t.length - 2 && !(e < t[i + 1]); i++);
            let n = (0, o.Y)(t[i], t[i + 1], e);
            return d[i](n);
          };
        return i ? (e) => f((0, r.u)(t[0], t[c - 1], e)) : f;
      }
    },
    8080: (t, e, i) => {
      "use strict";
      i.d(e, { j: () => n });
      let n = "undefined" != typeof window;
    },
    7307: (t, e, i) => {
      "use strict";
      function n(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
      i.d(e, { X: () => n });
    },
    4621: (t, e, i) => {
      "use strict";
      i.d(e, { C: () => A });
      var n = i(4498),
        r = i(1975);
      function s(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
          ? e
          : i < 2 / 3
          ? t + (e - t) * (2 / 3 - i) * 6
          : t;
      }
      var o = i(136),
        a = i(2997),
        l = i(1224);
      function u(t, e) {
        return (i) => (i > 0 ? e : t);
      }
      let h = (t, e, i) => {
          let n = t * t,
            r = i * (e * e - n) + n;
          return r < 0 ? 0 : Math.sqrt(r);
        },
        c = [o.$, a.m, l.J],
        d = (t) => c.find((e) => e.test(t));
      function p(t) {
        let e = d(t);
        if (
          ((0, r.K)(
            !!e,
            `'${t}' is not an animatable color. Use the equivalent color code instead.`
          ),
          !e)
        )
          return !1;
        let i = e.parse(t);
        return (
          e === l.J &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: n }) {
              (t /= 360), (i /= 100);
              let r = 0,
                o = 0,
                a = 0;
              if ((e /= 100)) {
                let n = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  l = 2 * i - n;
                (r = s(l, n, t + 1 / 3)),
                  (o = s(l, n, t)),
                  (a = s(l, n, t - 1 / 3));
              } else r = o = a = i;
              return {
                red: Math.round(255 * r),
                green: Math.round(255 * o),
                blue: Math.round(255 * a),
                alpha: n,
              };
            })(i)),
          i
        );
      }
      let f = (t, e) => {
        let i = p(t),
          r = p(e);
        if (!i || !r) return u(t, e);
        let s = { ...i };
        return (t) => (
          (s.red = h(i.red, r.red, t)),
          (s.green = h(i.green, r.green, t)),
          (s.blue = h(i.blue, r.blue, t)),
          (s.alpha = (0, n.t)(i.alpha, r.alpha, t)),
          a.m.transform(s)
        );
      };
      var m = i(1854),
        v = i(4539),
        g = i(6460),
        y = i(4490);
      let x = new Set(["none", "hidden"]);
      function b(t, e) {
        return (i) => (0, n.t)(t, e, i);
      }
      function w(t) {
        return "number" == typeof t
          ? b
          : "string" == typeof t
          ? (0, y.t)(t)
            ? u
            : v.$.test(t)
            ? f
            : T
          : Array.isArray(t)
          ? P
          : "object" == typeof t
          ? v.$.test(t)
            ? f
            : S
          : u;
      }
      function P(t, e) {
        let i = [...t],
          n = i.length,
          r = t.map((t, i) => w(t)(t, e[i]));
        return (t) => {
          for (let e = 0; e < n; e++) i[e] = r[e](t);
          return i;
        };
      }
      function S(t, e) {
        let i = { ...t, ...e },
          n = {};
        for (let r in i)
          void 0 !== t[r] && void 0 !== e[r] && (n[r] = w(t[r])(t[r], e[r]));
        return (t) => {
          for (let e in n) i[e] = n[e](t);
          return i;
        };
      }
      let T = (t, e) => {
        let i = g.P.createTransformer(e),
          n = (0, g.V)(t),
          s = (0, g.V)(e);
        return n.indexes.var.length === s.indexes.var.length &&
          n.indexes.color.length === s.indexes.color.length &&
          n.indexes.number.length >= s.indexes.number.length
          ? (x.has(t) && !s.values.length) || (x.has(e) && !n.values.length)
            ? (function (t, e) {
                return x.has(t)
                  ? (i) => (i <= 0 ? t : e)
                  : (i) => (i >= 1 ? e : t);
              })(t, e)
            : (0, m.z)(
                P(
                  (function (t, e) {
                    var i;
                    let n = [],
                      r = { color: 0, var: 0, number: 0 };
                    for (let s = 0; s < e.values.length; s++) {
                      let o = e.types[s],
                        a = t.indexes[o][r[o]],
                        l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                      (n[s] = l), r[o]++;
                    }
                    return n;
                  })(n, s),
                  s.values
                ),
                i
              )
          : ((0, r.K)(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            u(t, e));
      };
      function A(t, e, i) {
        return "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof i
          ? (0, n.t)(t, e, i)
          : w(t)(t, e);
      }
    },
    4498: (t, e, i) => {
      "use strict";
      i.d(e, { t: () => n });
      let n = (t, e, i) => t + (e - t) * i;
    },
    925: (t, e, i) => {
      "use strict";
      i.d(e, { Z: () => n });
      let n = (t) => t;
    },
    9988: (t, e, i) => {
      "use strict";
      i.d(e, { Y: () => s });
      var n = i(4498),
        r = i(2320);
      function s(t) {
        let e = [0];
        return (
          !(function (t, e) {
            let i = t[t.length - 1];
            for (let s = 1; s <= e; s++) {
              let o = (0, r.Y)(0, e, s);
              t.push((0, n.t)(i, 1, o));
            }
          })(e, t.length - 1),
          e
        );
      }
    },
    1854: (t, e, i) => {
      "use strict";
      i.d(e, { z: () => r });
      let n = (t, e) => (i) => e(t(i)),
        r = (...t) => t.reduce(n);
    },
    2320: (t, e, i) => {
      "use strict";
      i.d(e, { Y: () => n });
      let n = (t, e, i) => {
        let n = e - t;
        return 0 === n ? 1 : (i - t) / n;
      };
    },
    3120: (t, e, i) => {
      "use strict";
      i.d(e, { L: () => r });
      var n = i(4922);
      class r {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return (
            (0, n.y4)(this.subscriptions, t),
            () => (0, n.cl)(this.subscriptions, t)
          );
        }
        notify(t, e, i) {
          let n = this.subscriptions.length;
          if (n) {
            if (1 === n) this.subscriptions[0](t, e, i);
            else
              for (let r = 0; r < n; r++) {
                let n = this.subscriptions[r];
                n && n(t, e, i);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
    },
    6161: (t, e, i) => {
      "use strict";
      i.d(e, { h: () => r });
      var n = i(1653);
      function r(t) {
        let e = (0, n.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    5138: (t, e, i) => {
      "use strict";
      i.d(e, { L: () => r });
      var n = i(1653);
      let r = i(8080).j ? n.useLayoutEffect : n.useEffect;
    },
    3212: (t, e, i) => {
      "use strict";
      function n(t, e) {
        return e ? (1e3 / e) * t : 0;
      }
      i.d(e, { R: () => n });
    },
    3955: (t, e, i) => {
      "use strict";
      i.d(e, { BX: () => h, Hg: () => u, S1: () => l });
      var n = i(3120),
        r = i(3212),
        s = i(4862),
        o = i(4822);
      let a = (t) => !isNaN(parseFloat(t)),
        l = { current: void 0 };
      class u {
        constructor(t, e = {}) {
          (this.version = "11.9.0"),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              let i = s.X.now();
              this.updatedAt !== i && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.owner = e.owner);
        }
        setCurrent(t) {
          (this.current = t),
            (this.updatedAt = s.X.now()),
            null === this.canTrackVelocity &&
              void 0 !== t &&
              (this.canTrackVelocity = a(this.current));
        }
        setPrevFrameValue(t = this.current) {
          (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new n.L());
          let i = this.events[t].add(e);
          return "change" === t
            ? () => {
                i(),
                  o.Wi.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : i;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, i) {
          this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - i);
        }
        jump(t, e = !0) {
          this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return l.current && l.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          let t = s.X.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            t - this.updatedAt > 30
          )
            return 0;
          let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (0, r.R)(
            parseFloat(this.current) - parseFloat(this.prevFrameValue),
            e
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function h(t, e) {
        return new u(t, e);
      }
    },
    136: (t, e, i) => {
      "use strict";
      i.d(e, { $: () => r });
      var n = i(2997);
      let r = {
        test: (0, i(7697).i)("#"),
        parse: function (t) {
          let e = "",
            i = "",
            n = "",
            r = "";
          return (
            t.length > 5
              ? ((e = t.substring(1, 3)),
                (i = t.substring(3, 5)),
                (n = t.substring(5, 7)),
                (r = t.substring(7, 9)))
              : ((e = t.substring(1, 2)),
                (i = t.substring(2, 3)),
                (n = t.substring(3, 4)),
                (r = t.substring(4, 5)),
                (e += e),
                (i += i),
                (n += n),
                (r += r)),
            {
              red: parseInt(e, 16),
              green: parseInt(i, 16),
              blue: parseInt(n, 16),
              alpha: r ? parseInt(r, 16) / 255 : 1,
            }
          );
        },
        transform: n.m.transform,
      };
    },
    1224: (t, e, i) => {
      "use strict";
      i.d(e, { J: () => a });
      var n = i(8332),
        r = i(7670),
        s = i(7236),
        o = i(7697);
      let a = {
        test: (0, o.i)("hsl", "hue"),
        parse: (0, o.d)("hue", "saturation", "lightness"),
        transform: ({ hue: t, saturation: e, lightness: i, alpha: o = 1 }) =>
          "hsla(" +
          Math.round(t) +
          ", " +
          r.aQ.transform((0, s.N)(e)) +
          ", " +
          r.aQ.transform((0, s.N)(i)) +
          ", " +
          (0, s.N)(n.Fq.transform(o)) +
          ")",
      };
    },
    4539: (t, e, i) => {
      "use strict";
      i.d(e, { $: () => o });
      var n = i(136),
        r = i(1224),
        s = i(2997);
      let o = {
        test: (t) => s.m.test(t) || n.$.test(t) || r.J.test(t),
        parse: (t) =>
          s.m.test(t)
            ? s.m.parse(t)
            : r.J.test(t)
            ? r.J.parse(t)
            : n.$.parse(t),
        transform: (t) =>
          "string" == typeof t
            ? t
            : t.hasOwnProperty("red")
            ? s.m.transform(t)
            : r.J.transform(t),
      };
    },
    2997: (t, e, i) => {
      "use strict";
      i.d(e, { m: () => u });
      var n = i(9218),
        r = i(8332),
        s = i(7236),
        o = i(7697);
      let a = (t) => (0, n.u)(0, 255, t),
        l = { ...r.Rx, transform: (t) => Math.round(a(t)) },
        u = {
          test: (0, o.i)("rgb", "red"),
          parse: (0, o.d)("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: i, alpha: n = 1 }) =>
            "rgba(" +
            l.transform(t) +
            ", " +
            l.transform(e) +
            ", " +
            l.transform(i) +
            ", " +
            (0, s.N)(r.Fq.transform(n)) +
            ")",
        };
    },
    7697: (t, e, i) => {
      "use strict";
      i.d(e, { i: () => s, d: () => o });
      var n = i(3619);
      let r =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        s = (t, e) => (i) =>
          !!(
            ("string" == typeof i && r.test(i) && i.startsWith(t)) ||
            (e && null != i && Object.prototype.hasOwnProperty.call(i, e))
          ),
        o = (t, e, i) => (r) => {
          if ("string" != typeof r) return r;
          let [s, o, a, l] = r.match(n.K);
          return {
            [t]: parseFloat(s),
            [e]: parseFloat(o),
            [i]: parseFloat(a),
            alpha: void 0 !== l ? parseFloat(l) : 1,
          };
        };
    },
    6460: (t, e, i) => {
      "use strict";
      i.d(e, { V: () => h, P: () => f });
      var n = i(4539);
      let r =
        /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
      var s = i(3619),
        o = i(7236);
      let a = "number",
        l = "color",
        u =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function h(t) {
        let e = t.toString(),
          i = [],
          r = { color: [], number: [], var: [] },
          s = [],
          o = 0,
          h = e
            .replace(
              u,
              (t) => (
                n.$.test(t)
                  ? (r.color.push(o), s.push(l), i.push(n.$.parse(t)))
                  : t.startsWith("var(")
                  ? (r.var.push(o), s.push("var"), i.push(t))
                  : (r.number.push(o), s.push(a), i.push(parseFloat(t))),
                ++o,
                "${}"
              )
            )
            .split("${}");
        return { values: i, split: h, indexes: r, types: s };
      }
      function c(t) {
        return h(t).values;
      }
      function d(t) {
        let { split: e, types: i } = h(t),
          r = e.length;
        return (t) => {
          let s = "";
          for (let u = 0; u < r; u++)
            if (((s += e[u]), void 0 !== t[u])) {
              let e = i[u];
              e === a
                ? (s += (0, o.N)(t[u]))
                : e === l
                ? (s += n.$.transform(t[u]))
                : (s += t[u]);
            }
          return s;
        };
      }
      let p = (t) => ("number" == typeof t ? 0 : t),
        f = {
          test: function (t) {
            var e, i;
            return (
              isNaN(t) &&
              "string" == typeof t &&
              ((null === (e = t.match(s.K)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (i = t.match(r)) || void 0 === i
                  ? void 0
                  : i.length) || 0) >
                0
            );
          },
          parse: c,
          createTransformer: d,
          getAnimatableNone: function (t) {
            let e = c(t);
            return d(t)(e.map(p));
          },
        };
    },
    8332: (t, e, i) => {
      "use strict";
      i.d(e, { Fq: () => s, Rx: () => r, bA: () => o });
      var n = i(9218);
      let r = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        s = { ...r, transform: (t) => (0, n.u)(0, 1, t) },
        o = { ...r, default: 1 };
    },
    7670: (t, e, i) => {
      "use strict";
      i.d(e, {
        $C: () => u,
        RW: () => r,
        aQ: () => s,
        px: () => o,
        vh: () => a,
        vw: () => l,
      });
      let n = (t) => ({
          test: (e) =>
            "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        r = n("deg"),
        s = n("%"),
        o = n("px"),
        a = n("vh"),
        l = n("vw"),
        u = {
          ...s,
          parse: (t) => s.parse(t) / 100,
          transform: (t) => s.transform(100 * t),
        };
    },
    3619: (t, e, i) => {
      "use strict";
      i.d(e, { K: () => n });
      let n = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
    },
    7236: (t, e, i) => {
      "use strict";
      i.d(e, { N: () => n });
      let n = (t) => Math.round(1e5 * t) / 1e5;
    },
    9329: (t, e, i) => {
      "use strict";
      let n, r;
      i.d(e, { v: () => $ });
      var s = i(3955),
        o = i(6161),
        a = i(1653),
        l = i(1975);
      let u = new WeakMap();
      function h({ target: t, contentRect: e, borderBoxSize: i }) {
        var n;
        null === (n = u.get(t)) ||
          void 0 === n ||
          n.forEach((n) => {
            n({
              target: t,
              contentSize: e,
              get size() {
                return (function (t, e) {
                  if (e) {
                    let { inlineSize: t, blockSize: i } = e[0];
                    return { width: t, height: i };
                  }
                  return t instanceof SVGElement && "getBBox" in t
                    ? t.getBBox()
                    : { width: t.offsetWidth, height: t.offsetHeight };
                })(t, i);
              },
            });
          });
      }
      function c(t) {
        t.forEach(h);
      }
      let d = new Set();
      var p = i(2320),
        f = i(3212);
      let m = () => ({
          current: 0,
          offset: [],
          progress: 0,
          scrollLength: 0,
          targetOffset: 0,
          targetLength: 0,
          containerLength: 0,
          velocity: 0,
        }),
        v = () => ({ time: 0, x: m(), y: m() }),
        g = {
          x: { length: "Width", position: "Left" },
          y: { length: "Height", position: "Top" },
        };
      function y(t, e, i, n) {
        let r = i[e],
          { length: s, position: o } = g[e],
          a = r.current,
          l = i.time;
        (r.current = t[`scroll${o}`]),
          (r.scrollLength = t[`scroll${s}`] - t[`client${s}`]),
          (r.offset.length = 0),
          (r.offset[0] = 0),
          (r.offset[1] = r.scrollLength),
          (r.progress = (0, p.Y)(0, r.scrollLength, r.current));
        let u = n - l;
        r.velocity = u > 50 ? 0 : (0, f.R)(r.current - a, u);
      }
      let x = {
          All: [
            [0, 0],
            [1, 1],
          ],
        },
        b = { start: 0, center: 0.5, end: 1 };
      function w(t, e, i = 0) {
        let n = 0;
        if ((t in b && (t = b[t]), "string" == typeof t)) {
          let e = parseFloat(t);
          t.endsWith("px")
            ? (n = e)
            : t.endsWith("%")
            ? (t = e / 100)
            : t.endsWith("vw")
            ? (n = (e / 100) * document.documentElement.clientWidth)
            : t.endsWith("vh")
            ? (n = (e / 100) * document.documentElement.clientHeight)
            : (t = e);
        }
        return "number" == typeof t && (n = e * t), i + n;
      }
      let P = [0, 0];
      var S = i(6509),
        T = i(9988);
      let A = { x: 0, y: 0 };
      var E = i(4822);
      let C = new WeakMap(),
        M = new WeakMap(),
        V = new WeakMap(),
        j = (t) => (t === document.documentElement ? window : t);
      function k(t, { container: e = document.documentElement, ...i } = {}) {
        let s = V.get(e);
        s || ((s = new Set()), V.set(e, s));
        let o = (function (t, e, i, n = {}) {
          return {
            measure: () =>
              (function (t, e = t, i) {
                if (((i.x.targetOffset = 0), (i.y.targetOffset = 0), e !== t)) {
                  let n = e;
                  for (; n && n !== t; )
                    (i.x.targetOffset += n.offsetLeft),
                      (i.y.targetOffset += n.offsetTop),
                      (n = n.offsetParent);
                }
                (i.x.targetLength = e === t ? e.scrollWidth : e.clientWidth),
                  (i.y.targetLength =
                    e === t ? e.scrollHeight : e.clientHeight),
                  (i.x.containerLength = t.clientWidth),
                  (i.y.containerLength = t.clientHeight);
              })(t, n.target, i),
            update: (e) => {
              y(t, "x", i, e),
                y(t, "y", i, e),
                (i.time = e),
                (n.offset || n.target) &&
                  (function (t, e, i) {
                    let { offset: n = x.All } = i,
                      { target: r = t, axis: s = "y" } = i,
                      o = "y" === s ? "height" : "width",
                      a =
                        r !== t
                          ? (function (t, e) {
                              let i = { x: 0, y: 0 },
                                n = t;
                              for (; n && n !== e; )
                                if (n instanceof HTMLElement)
                                  (i.x += n.offsetLeft),
                                    (i.y += n.offsetTop),
                                    (n = n.offsetParent);
                                else if ("svg" === n.tagName) {
                                  let t = n.getBoundingClientRect(),
                                    e = (n =
                                      n.parentElement).getBoundingClientRect();
                                  (i.x += t.left - e.left),
                                    (i.y += t.top - e.top);
                                } else if (n instanceof SVGGraphicsElement) {
                                  let { x: t, y: e } = n.getBBox();
                                  (i.x += t), (i.y += e);
                                  let r = null,
                                    s = n.parentNode;
                                  for (; !r; )
                                    "svg" === s.tagName && (r = s),
                                      (s = n.parentNode);
                                  n = r;
                                } else break;
                              return i;
                            })(r, t)
                          : A,
                      l =
                        r === t
                          ? { width: t.scrollWidth, height: t.scrollHeight }
                          : "getBBox" in r && "svg" !== r.tagName
                          ? r.getBBox()
                          : { width: r.clientWidth, height: r.clientHeight },
                      u = { width: t.clientWidth, height: t.clientHeight };
                    e[s].offset.length = 0;
                    let h = !e[s].interpolate,
                      c = n.length;
                    for (let t = 0; t < c; t++) {
                      let i = (function (t, e, i, n) {
                        let r = Array.isArray(t) ? t : P,
                          s = 0;
                        return (
                          "number" == typeof t
                            ? (r = [t, t])
                            : "string" == typeof t &&
                              (r = (t = t.trim()).includes(" ")
                                ? t.split(" ")
                                : [t, b[t] ? t : "0"]),
                          w(r[0], i, n) - w(r[1], e)
                        );
                      })(n[t], u[o], l[o], a[s]);
                      h || i === e[s].interpolatorOffsets[t] || (h = !0),
                        (e[s].offset[t] = i);
                    }
                    h &&
                      ((e[s].interpolate = (0, S.s)(e[s].offset, (0, T.Y)(n))),
                      (e[s].interpolatorOffsets = [...e[s].offset])),
                      (e[s].progress = e[s].interpolate(e[s].current));
                  })(t, i, n);
            },
            notify: () => e(i),
          };
        })(e, t, v(), i);
        if ((s.add(o), !C.has(e))) {
          let t = () => {
              for (let t of s) t.measure();
            },
            i = () => {
              for (let t of s) t.update(E.frameData.timestamp);
            },
            o = () => {
              for (let t of s) t.notify();
            },
            a = () => {
              E.Wi.read(t, !1, !0),
                E.Wi.read(i, !1, !0),
                E.Wi.update(o, !1, !0);
            };
          C.set(e, a);
          let l = j(e);
          window.addEventListener("resize", a, { passive: !0 }),
            e !== document.documentElement &&
              M.set(
                e,
                "function" == typeof e
                  ? (d.add(e),
                    r ||
                      ((r = () => {
                        let t = {
                            width: window.innerWidth,
                            height: window.innerHeight,
                          },
                          e = { target: window, size: t, contentSize: t };
                        d.forEach((t) => t(e));
                      }),
                      window.addEventListener("resize", r)),
                    () => {
                      d.delete(e), !d.size && r && (r = void 0);
                    })
                  : (function (t, e) {
                      var i;
                      n ||
                        "undefined" == typeof ResizeObserver ||
                        (n = new ResizeObserver(c));
                      let r =
                        ("string" == typeof (i = t)
                          ? (i = document.querySelectorAll(i))
                          : i instanceof Element && (i = [i]),
                        Array.from(i || []));
                      return (
                        r.forEach((t) => {
                          let i = u.get(t);
                          i || ((i = new Set()), u.set(t, i)),
                            i.add(e),
                            null == n || n.observe(t);
                        }),
                        () => {
                          r.forEach((t) => {
                            let i = u.get(t);
                            null == i || i.delete(e),
                              (null == i ? void 0 : i.size) ||
                                null == n ||
                                n.unobserve(t);
                          });
                        }
                      );
                    })(e, a)
              ),
            l.addEventListener("scroll", a, { passive: !0 });
        }
        let a = C.get(e);
        return (
          E.Wi.read(a, !1, !0),
          () => {
            var t;
            (0, E.Pn)(a);
            let i = V.get(e);
            if (!i || (i.delete(o), i.size)) return;
            let n = C.get(e);
            C.delete(e),
              n &&
                (j(e).removeEventListener("scroll", n),
                null === (t = M.get(e)) || void 0 === t || t(),
                window.removeEventListener("resize", n));
          }
        );
      }
      function R(t, e) {
        let i;
        let n = () => {
          let { currentTime: n } = e,
            r = (null === n ? 0 : n.value) / 100;
          i !== r && t(r), (i = r);
        };
        return E.Wi.update(n, !0), () => (0, E.Pn)(n);
      }
      var D = i(1728);
      let O = new Map();
      function L({
        source: t,
        container: e = document.documentElement,
        axis: i = "y",
      } = {}) {
        t && (e = t), O.has(e) || O.set(e, {});
        let n = O.get(e);
        return (
          n[i] ||
            (n[i] = (0, D.t)()
              ? new ScrollTimeline({ source: e, axis: i })
              : (function ({ source: t, container: e, axis: i = "y" }) {
                  t && (e = t);
                  let n = { value: 0 },
                    r = k(
                      (t) => {
                        n.value = 100 * t[i].progress;
                      },
                      { container: e, axis: i }
                    );
                  return { currentTime: n, cancel: r };
                })({ source: e, axis: i })),
          n[i]
        );
      }
      function F(t) {
        return t && (t.target || t.offset);
      }
      var B = i(5138);
      function W(t, e) {
        (0, l.K)(
          !!(!e || e.current),
          `You have defined a ${t} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`
        );
      }
      let I = () => ({
        scrollX: (0, s.BX)(0),
        scrollY: (0, s.BX)(0),
        scrollXProgress: (0, s.BX)(0),
        scrollYProgress: (0, s.BX)(0),
      });
      function $({ container: t, target: e, layoutEffect: i = !0, ...n } = {}) {
        let r = (0, o.h)(I);
        return (
          (i ? B.L : a.useEffect)(
            () => (
              W("target", e),
              W("container", t),
              (function (t, { axis: e = "y", ...i } = {}) {
                let n = { axis: e, ...i };
                return "function" == typeof t
                  ? 2 === t.length || F(n)
                    ? k((e) => {
                        t(e[n.axis].progress, e);
                      }, n)
                    : R(t, L(n))
                  : (function (t, e) {
                      if (F(e))
                        return (
                          t.pause(),
                          k((i) => {
                            t.time = t.duration * i[e.axis].progress;
                          }, e)
                        );
                      {
                        let i = L(e);
                        return t.attachTimeline(
                          i,
                          (t) => (
                            t.pause(),
                            R((e) => {
                              t.time = t.duration * e;
                            }, i)
                          )
                        );
                      }
                    })(t, n);
              })(
                (t, { x: e, y: i }) => {
                  r.scrollX.set(e.current),
                    r.scrollXProgress.set(e.progress),
                    r.scrollY.set(i.current),
                    r.scrollYProgress.set(i.progress);
                },
                {
                  ...n,
                  container: (null == t ? void 0 : t.current) || void 0,
                  target: (null == e ? void 0 : e.current) || void 0,
                }
              )
            ),
            [t, e, JSON.stringify(n.offset)]
          ),
          r
        );
      }
    },
    4231: (t, e, i) => {
      "use strict";
      i.d(e, { H: () => p });
      var n = i(6509);
      let r = (t) => t && "object" == typeof t && t.mix,
        s = (t) => (r(t) ? t.mix : void 0);
      var o = i(1653),
        a = i(3955),
        l = i(4909),
        u = i(6161),
        h = i(5138),
        c = i(4822);
      function d(t, e) {
        let i = (function (t) {
            let e = (0, u.h)(() => (0, a.BX)(t)),
              { isStatic: i } = (0, o.useContext)(l._);
            if (i) {
              let [, i] = (0, o.useState)(t);
              (0, o.useEffect)(() => e.on("change", i), []);
            }
            return e;
          })(e()),
          n = () => i.set(e());
        return (
          n(),
          (0, h.L)(() => {
            let e = () => c.Wi.preRender(n, !1, !0),
              i = t.map((t) => t.on("change", e));
            return () => {
              i.forEach((t) => t()), (0, c.Pn)(n);
            };
          }),
          i
        );
      }
      function p(t, e, i, r) {
        if ("function" == typeof t)
          return (function (t) {
            (a.S1.current = []), t();
            let e = d(a.S1.current, t);
            return (a.S1.current = void 0), e;
          })(t);
        let o =
          "function" == typeof e
            ? e
            : (function (...t) {
                let e = !Array.isArray(t[0]),
                  i = e ? 0 : -1,
                  r = t[0 + i],
                  o = t[1 + i],
                  a = t[2 + i],
                  l = t[3 + i],
                  u = (0, n.s)(o, a, { mixer: s(a[0]), ...l });
                return e ? u(r) : u;
              })(e, i, r);
        return Array.isArray(t) ? f(t, o) : f([t], ([t]) => o(t));
      }
      function f(t, e) {
        let i = (0, u.h)(() => []);
        return d(t, () => {
          i.length = 0;
          let n = t.length;
          for (let e = 0; e < n; e++) i[e] = t[e].get();
          return e(i);
        });
      }
    },
    5: (t, e, i) => {
      "use strict";
      i.d(e, { zz: () => a });
      let n = 1 / 3,
        r = 1 / 6,
        s = (t) => 0 | Math.floor(t),
        o = new Float64Array([
          1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1,
          -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1,
        ]);
      function a(t = Math.random) {
        let e = (function (t) {
            let e = new Uint8Array(512);
            for (let t = 0; t < 256; t++) e[t] = t;
            for (let i = 0; i < 255; i++) {
              let n = i + ~~(t() * (256 - i)),
                r = e[i];
              (e[i] = e[n]), (e[n] = r);
            }
            for (let t = 256; t < 512; t++) e[t] = e[t - 256];
            return e;
          })(t),
          i = new Float64Array(e).map((t) => o[(t % 12) * 3]),
          a = new Float64Array(e).map((t) => o[(t % 12) * 3 + 1]),
          l = new Float64Array(e).map((t) => o[(t % 12) * 3 + 2]);
        return function (t, o, u) {
          let h, c, d, p, f, m, v, g, y, x;
          let b = (t + o + u) * n,
            w = s(t + b),
            P = s(o + b),
            S = s(u + b),
            T = (w + P + S) * r,
            A = t - (w - T),
            E = o - (P - T),
            C = u - (S - T);
          A >= E
            ? E >= C
              ? ((f = 1), (m = 0), (v = 0), (g = 1), (y = 1), (x = 0))
              : (A >= C
                  ? ((f = 1), (m = 0), (v = 0))
                  : ((f = 0), (m = 0), (v = 1)),
                (g = 1),
                (y = 0),
                (x = 1))
            : E < C
            ? ((f = 0), (m = 0), (v = 1), (g = 0), (y = 1), (x = 1))
            : A < C
            ? ((f = 0), (m = 1), (v = 0), (g = 0), (y = 1), (x = 1))
            : ((f = 0), (m = 1), (v = 0), (g = 1), (y = 1), (x = 0));
          let M = A - f + r,
            V = E - m + r,
            j = C - v + r,
            k = A - g + 2 * r,
            R = E - y + 2 * r,
            D = C - x + 2 * r,
            O = A - 1 + 3 * r,
            L = E - 1 + 3 * r,
            F = C - 1 + 3 * r,
            B = 255 & w,
            W = 255 & P,
            I = 255 & S,
            $ = 0.6 - A * A - E * E - C * C;
          if ($ < 0) h = 0;
          else {
            let t = B + e[W + e[I]];
            ($ *= $), (h = $ * $ * (i[t] * A + a[t] * E + l[t] * C));
          }
          let _ = 0.6 - M * M - V * V - j * j;
          if (_ < 0) c = 0;
          else {
            let t = B + f + e[W + m + e[I + v]];
            (_ *= _), (c = _ * _ * (i[t] * M + a[t] * V + l[t] * j));
          }
          let N = 0.6 - k * k - R * R - D * D;
          if (N < 0) d = 0;
          else {
            let t = B + g + e[W + y + e[I + x]];
            (N *= N), (d = N * N * (i[t] * k + a[t] * R + l[t] * D));
          }
          let U = 0.6 - O * O - L * L - F * F;
          if (U < 0) p = 0;
          else {
            let t = B + 1 + e[W + 1 + e[I + 1]];
            (U *= U), (p = U * U * (i[t] * O + a[t] * L + l[t] * F));
          }
          return 32 * (h + c + d + p);
        };
      }
    },
  },
]);
