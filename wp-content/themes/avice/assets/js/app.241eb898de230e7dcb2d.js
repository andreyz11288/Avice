webpackJsonp(
  [14],
  {
    '0F0d': function (t, e, n) {
      'use strict'
      e.a = {
        name: 'no-ssr',
        props: ['placeholder'],
        data: function () {
          return { canRender: !1 }
        },
        mounted: function () {
          this.canRender = !0
        },
        render: function (t) {
          return this.canRender
            ? this.$slots.default && this.$slots.default[0]
            : t(
                'div',
                { class: ['no-ssr-placeholder'] },
                this.$slots.placeholder || this.placeholder
              )
        },
      }
    },
    '3/Jy': function (t, e, n) {
      'use strict'
      e.a = {
        name: 'nuxt-error',
        props: ['error'],
        head: function () {
          return {
            title: this.message,
            meta: [
              {
                name: 'viewport',
                content:
                  'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
              },
            ],
          }
        },
        computed: {
          statusCode: function () {
            return (this.error && this.error.statusCode) || 500
          },
          message: function () {
            return this.error.message || 'Error'
          },
        },
      }
    },
    '4Atj': function (t, e) {
      function n(t) {
        throw new Error("Cannot find module '" + t + "'.")
      }
      ;(n.keys = function () {
        return []
      }),
        (n.resolve = n),
        (t.exports = n),
        (n.id = '4Atj')
    },
    'HBB+': function (t, e, n) {
      'use strict'
      e.a = {
        name: 'nuxt-child',
        functional: !0,
        props: ['keepAlive'],
        render: function (t, e) {
          var n = e.parent,
            a = e.data,
            i = e.props
          a.nuxtChild = !0
          for (
            var u = n,
              s = n.$nuxt.nuxt.transitions,
              c = n.$nuxt.nuxt.defaultTransition,
              p = 0;
            n;

          )
            n.$vnode && n.$vnode.data.nuxtChild && p++, (n = n.$parent)
          a.nuxtChildDepth = p
          var f = s[p] || c,
            l = {}
          r.forEach(function (t) {
            void 0 !== f[t] && (l[t] = f[t])
          })
          var d = {}
          o.forEach(function (t) {
            'function' == typeof f[t] && (d[t] = f[t].bind(u))
          })
          var h = d.beforeEnter
          d.beforeEnter = function (t) {
            if ((window.$nuxt.$emit('triggerScroll'), h)) return h.call(u, t)
          }
          var x = [t('router-view', a)]
          return (
            void 0 !== i.keepAlive && (x = [t('keep-alive', x)]),
            t('transition', { props: l, on: d }, x)
          )
        },
      }
      var r = [
          'name',
          'mode',
          'appear',
          'css',
          'type',
          'duration',
          'enterClass',
          'leaveClass',
          'appearClass',
          'enterActiveClass',
          'enterActiveClass',
          'leaveActiveClass',
          'appearActiveClass',
          'enterToClass',
          'leaveToClass',
          'appearToClass',
        ],
        o = [
          'beforeEnter',
          'enter',
          'afterEnter',
          'enterCancelled',
          'beforeLeave',
          'leave',
          'afterLeave',
          'leaveCancelled',
          'beforeAppear',
          'appear',
          'afterAppear',
          'appearCancelled',
        ]
    },
    'Hot+': function (t, e, n) {
      'use strict'
      var r = n('/5sW'),
        o = n('HBB+'),
        a = n('ct3O'),
        i = n('YLfZ')
      e.a = {
        name: 'nuxt',
        props: ['nuxtChildKey', 'keepAlive'],
        render: function (t) {
          return this.nuxt.err
            ? t('nuxt-error', { props: { error: this.nuxt.err } })
            : t('nuxt-child', { key: this.routerViewKey, props: this.$props })
        },
        beforeCreate: function () {
          r.default.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt)
        },
        computed: {
          routerViewKey: function () {
            if (void 0 !== this.nuxtChildKey || this.$route.matched.length > 1)
              return (
                this.nuxtChildKey ||
                Object(i.b)(this.$route.matched[0].path)(this.$route.params)
              )
            var t =
              this.$route.matched[0] &&
              this.$route.matched[0].components.default
            return t && t.options && t.options.key
              ? 'function' == typeof t.options.key
                ? t.options.key(this.$route)
                : t.options.key
              : this.$route.path
          },
        },
        components: { NuxtChild: o.a, NuxtError: a.a },
      }
    },
    J2Ti: function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return w
      })
      var r = n('woOf'),
        o = n.n(r),
        a = n('BO1k'),
        i = n.n(a),
        u = n('/5sW'),
        s = n('NYxO')
      u.default.use(s.default)
      var c = n('QA5y'),
        p = c.keys(),
        f = {},
        l = void 0
      if (
        (p.forEach(function (t) {
          ;-1 !== t.indexOf('./index.') && (l = t)
        }),
        l && (f = _(l)),
        'function' != typeof f)
      ) {
        f.modules || (f.modules = {})
        var d = !0,
          h = !1,
          x = void 0
        try {
          for (var m, v = i()(p); !(d = (m = v.next()).done); d = !0) {
            var y = m.value,
              g = y.replace(/^\.\//, '').replace(/\.(js)$/, '')
            if ('index' !== g) {
              var b = g.split(/\//)
              ;((t = C(f, b))[(g = b.pop())] = _(y)), (t[g].namespaced = !0)
            }
          }
        } catch (t) {
          ;(h = !0), (x = t)
        } finally {
          try {
            !d && v.return && v.return()
          } finally {
            if (h) throw x
          }
        }
      }
      var w =
        f instanceof Function
          ? f
          : function () {
              return new s.default.Store(
                o()({ strict: !1 }, f, {
                  state: f.state instanceof Function ? f.state() : {},
                })
              )
            }
      function _(t) {
        var e = c(t),
          n = e.default || e
        if (n.commit)
          throw new Error(
            '[nuxt] store/' +
              t.replace('./', '') +
              ' should export a method which returns a Vuex instance.'
          )
        if (n.state && 'function' != typeof n.state)
          throw new Error(
            '[nuxt] state should be a function in store/' + t.replace('./', '')
          )
        return n
      }
      function C(t, e) {
        if (1 === e.length) return t.modules
        var n = e.shift()
        return (
          (t.modules[n] = t.modules[n] || {}),
          (t.modules[n].namespaced = !0),
          (t.modules[n].modules = t.modules[n].modules || {}),
          C(t.modules[n], e)
        )
      }
    },
    QA5y: function (t, e, n) {
      var r = { './index.js': 'vdRI' }
      function o(t) {
        return n(a(t))
      }
      function a(t) {
        var e = r[t]
        if (!(e + 1)) throw new Error("Cannot find module '" + t + "'.")
        return e
      }
      ;(o.keys = function () {
        return Object.keys(r)
      }),
        (o.resolve = a),
        (t.exports = o),
        (o.id = 'QA5y')
    },
    QhKw: function (t, e, n) {
      'use strict'
      var r = function () {
        var t = this.$createElement,
          e = this._self._c || t
        return e('div', { staticClass: '__nuxt-error-page' }, [
          e('div', { staticClass: 'error' }, [
            e(
              'svg',
              {
                attrs: {
                  xmlns: 'http://www.w3.org/2000/svg',
                  width: '90',
                  height: '90',
                  fill: '#DBE1EC',
                  viewBox: '0 0 48 48',
                },
              },
              [
                e('path', {
                  attrs: {
                    d: 'M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z',
                  },
                }),
              ]
            ),
            e('div', { staticClass: 'title' }, [
              this._v(this._s(this.message)),
            ]),
            404 === this.statusCode
              ? e(
                  'p',
                  { staticClass: 'description' },
                  [
                    e(
                      'nuxt-link',
                      { staticClass: 'error-link', attrs: { to: '/' } },
                      [this._v('Back to the home page')]
                    ),
                  ],
                  1
                )
              : this._e(),
            this._m(0),
          ]),
        ])
      }
      r._withStripped = !0
      var o = {
        render: r,
        staticRenderFns: [
          function () {
            var t = this.$createElement,
              e = this._self._c || t
            return e('div', { staticClass: 'logo' }, [
              e(
                'a',
                {
                  attrs: {
                    href: 'https://nuxtjs.org',
                    target: '_blank',
                    rel: 'noopener',
                  },
                },
                [this._v('Nuxt.js')]
              ),
            ])
          },
        ],
      }
      e.a = o
    },
    T23V: function (t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var r = n('pFYg'),
        o = n.n(r),
        a = n('//Fk'),
        i = n.n(a),
        u = n('Xxa5'),
        s = n.n(u),
        c = n('mvHQ'),
        p = n.n(c),
        f = n('exGp'),
        l = n.n(f),
        d = n('fZjL'),
        h = n.n(d),
        x = n('woOf'),
        m = n.n(x),
        v = n('/5sW'),
        y = n('unZF'),
        g = n('qcny'),
        b = n('YLfZ'),
        w = (function () {
          var t = l()(
            s.a.mark(function t(e, n, r) {
              var o
              return s.a.wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (this._pathChanged =
                            !!j.nuxt.err || n.path !== e.path),
                          (this._queryChanged = p()(e.query) !== p()(n.query)),
                          (this._diffQuery = this._queryChanged
                            ? Object(b.g)(e.query, n.query)
                            : []),
                          (t.prev = 3),
                          (t.next = 6),
                          Object(b.k)(e)
                        )
                      case 6:
                        t.sent, r(), (t.next = 17)
                        break
                      case 10:
                        ;(t.prev = 10),
                          (t.t0 = t.catch(3)),
                          (t.t0 = t.t0 || {}),
                          (o =
                            t.t0.statusCode ||
                            t.t0.status ||
                            (t.t0.response && t.t0.response.status) ||
                            500),
                          this.error({ statusCode: o, message: t.t0.message }),
                          this.$nuxt.$emit('routeChanged', e, n, t.t0),
                          r(!1)
                      case 17:
                      case 'end':
                        return t.stop()
                    }
                },
                t,
                this,
                [[3, 10]]
              )
            })
          )
          return function (e, n, r) {
            return t.apply(this, arguments)
          }
        })(),
        _ = (function () {
          var t = l()(
            s.a.mark(function t(e, n, r) {
              var o,
                a,
                u,
                c,
                p,
                f,
                l,
                d,
                h = this
              return s.a.wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          !1 !== this._pathChanged ||
                          !1 !== this._queryChanged
                        ) {
                          t.next = 2
                          break
                        }
                        return t.abrupt('return', r())
                      case 2:
                        return (
                          (o = !1),
                          (a = function (t) {
                            if (!o) {
                              o = !0
                              var e = []
                              ;(k = Object(b.e)(n, e).map(function (t, r) {
                                return Object(b.b)(n.matched[e[r]].path)(
                                  n.params
                                )
                              })),
                                r(t)
                            }
                          }),
                          (t.next = 6),
                          Object(b.m)(j, {
                            route: e,
                            from: n,
                            next: a.bind(this),
                          })
                        )
                      case 6:
                        if (
                          ((this._dateLastError = j.nuxt.dateErr),
                          (this._hadError = !!j.nuxt.err),
                          (u = []),
                          (c = Object(b.e)(e, u)).length)
                        ) {
                          t.next = 24
                          break
                        }
                        return (t.next = 13), L.call(this, c, j.context)
                      case 13:
                        if (!o) {
                          t.next = 15
                          break
                        }
                        return t.abrupt('return')
                      case 15:
                        return (
                          (t.next = 17),
                          this.loadLayout(
                            'function' == typeof g.a.layout
                              ? g.a.layout(j.context)
                              : g.a.layout
                          )
                        )
                      case 17:
                        return (
                          (p = t.sent),
                          (t.next = 20),
                          L.call(this, c, j.context, p)
                        )
                      case 20:
                        if (!o) {
                          t.next = 22
                          break
                        }
                        return t.abrupt('return')
                      case 22:
                        return (
                          j.context.error({
                            statusCode: 404,
                            message: 'This page could not be found',
                          }),
                          t.abrupt('return', r())
                        )
                      case 24:
                        return (
                          c.forEach(function (t) {
                            t._Ctor &&
                              t._Ctor.options &&
                              ((t.options.asyncData =
                                t._Ctor.options.asyncData),
                              (t.options.fetch = t._Ctor.options.fetch))
                          }),
                          this.setTransitions(R(c, e, n)),
                          (t.prev = 26),
                          (t.next = 29),
                          L.call(this, c, j.context)
                        )
                      case 29:
                        if (!o) {
                          t.next = 31
                          break
                        }
                        return t.abrupt('return')
                      case 31:
                        if (!j.context._errored) {
                          t.next = 33
                          break
                        }
                        return t.abrupt('return', r())
                      case 33:
                        return (
                          'function' == typeof (f = c[0].options.layout) &&
                            (f = f(j.context)),
                          (t.next = 37),
                          this.loadLayout(f)
                        )
                      case 37:
                        return (
                          (f = t.sent),
                          (t.next = 40),
                          L.call(this, c, j.context, f)
                        )
                      case 40:
                        if (!o) {
                          t.next = 42
                          break
                        }
                        return t.abrupt('return')
                      case 42:
                        if (!j.context._errored) {
                          t.next = 44
                          break
                        }
                        return t.abrupt('return', r())
                      case 44:
                        if (
                          ((l = !0),
                          c.forEach(function (t) {
                            l &&
                              'function' == typeof t.options.validate &&
                              (l = t.options.validate({
                                params: e.params || {},
                                query: e.query || {},
                                store: O,
                              }))
                          }),
                          l)
                        ) {
                          t.next = 49
                          break
                        }
                        return (
                          this.error({
                            statusCode: 404,
                            message: 'This page could not be found',
                          }),
                          t.abrupt('return', r())
                        )
                      case 49:
                        return (
                          (t.next = 51),
                          i.a.all(
                            c.map(function (t, n) {
                              if (
                                ((t._path = Object(b.b)(e.matched[u[n]].path)(
                                  e.params
                                )),
                                (t._dataRefresh = !1),
                                h._pathChanged && t._path !== k[n])
                              )
                                t._dataRefresh = !0
                              else if (!h._pathChanged && h._queryChanged) {
                                var r = t.options.watchQuery
                                !0 === r
                                  ? (t._dataRefresh = !0)
                                  : Array.isArray(r) &&
                                    (t._dataRefresh = r.some(function (t) {
                                      return h._diffQuery[t]
                                    }))
                              }
                              if (
                                !h._hadError &&
                                h._isMounted &&
                                !t._dataRefresh
                              )
                                return i.a.resolve()
                              var o = [],
                                a =
                                  t.options.asyncData &&
                                  'function' == typeof t.options.asyncData,
                                s = !!t.options.fetch
                              if (a) {
                                var c = Object(b.j)(
                                  t.options.asyncData,
                                  j.context
                                ).then(function (e) {
                                  Object(b.a)(t, e)
                                })
                                o.push(c)
                              }
                              if (s) {
                                var p = t.options.fetch(j.context)
                                ;(p &&
                                  (p instanceof i.a ||
                                    'function' == typeof p.then)) ||
                                  (p = i.a.resolve(p)),
                                  p.then(function (t) {}),
                                  o.push(p)
                              }
                              return i.a.all(o)
                            })
                          )
                        )
                      case 51:
                        o ||
                          ((k = c.map(function (t, n) {
                            return Object(b.b)(e.matched[u[n]].path)(e.params)
                          })),
                          r()),
                          (t.next = 66)
                        break
                      case 54:
                        return (
                          (t.prev = 54),
                          (t.t0 = t.catch(26)),
                          t.t0 || (t.t0 = {}),
                          (k = []),
                          (t.t0.statusCode =
                            t.t0.statusCode ||
                            t.t0.status ||
                            (t.t0.response && t.t0.response.status) ||
                            500),
                          'function' == typeof (d = g.a.layout) &&
                            (d = d(j.context)),
                          (t.next = 63),
                          this.loadLayout(d)
                        )
                      case 63:
                        this.error(t.t0),
                          this.$nuxt.$emit('routeChanged', e, n, t.t0),
                          r(!1)
                      case 66:
                      case 'end':
                        return t.stop()
                    }
                },
                t,
                this,
                [[26, 54]]
              )
            })
          )
          return function (e, n, r) {
            return t.apply(this, arguments)
          }
        })(),
        C = (function () {
          var t = l()(
            s.a.mark(function t(e) {
              var n, r, o, a
              return s.a.wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (j = e.app),
                          (E = e.router),
                          (O = e.store),
                          (t.next = 5),
                          i.a.all(T(E))
                        )
                      case 5:
                        return (
                          (n = t.sent),
                          (r = new v.default(j)),
                          (o = $.layout || 'default'),
                          (t.next = 10),
                          r.loadLayout(o)
                        )
                      case 10:
                        if (
                          (r.setLayout(o),
                          (a = function () {
                            r.$mount('#__nuxt'),
                              v.default.nextTick(function () {
                                N(r)
                              })
                          }),
                          (r.setTransitions =
                            r.$options.nuxt.setTransitions.bind(r)),
                          n.length &&
                            (r.setTransitions(R(n, E.currentRoute)),
                            (k = E.currentRoute.matched.map(function (t) {
                              return Object(b.b)(t.path)(E.currentRoute.params)
                            }))),
                          (r.$loading = {}),
                          $.error && r.error($.error),
                          E.beforeEach(w.bind(r)),
                          E.beforeEach(_.bind(r)),
                          E.afterEach(q),
                          E.afterEach(B.bind(r)),
                          !$.serverRendered)
                        ) {
                          t.next = 23
                          break
                        }
                        return a(), t.abrupt('return')
                      case 23:
                        _.call(r, E.currentRoute, E.currentRoute, function (t) {
                          if (!t)
                            return (
                              q(E.currentRoute, E.currentRoute),
                              z.call(r, E.currentRoute),
                              void a()
                            )
                          E.push(
                            t,
                            function () {
                              return a()
                            },
                            function (t) {
                              if (!t) return a()
                              console.error(t)
                            }
                          )
                        })
                      case 24:
                      case 'end':
                        return t.stop()
                    }
                },
                t,
                this
              )
            })
          )
          return function (e) {
            return t.apply(this, arguments)
          }
        })(),
        k = [],
        j = void 0,
        E = void 0,
        O = void 0,
        $ = window.__NUXT__ || {}
      function R(t, e, n) {
        var r = function (t) {
          var r =
            (function (t, e) {
              if (!t || !t.options || !t.options[e]) return {}
              var n = t.options[e]
              if ('function' == typeof n) {
                for (
                  var r = arguments.length, o = Array(r > 2 ? r - 2 : 0), a = 2;
                  a < r;
                  a++
                )
                  o[a - 2] = arguments[a]
                return n.apply(void 0, o)
              }
              return n
            })(t, 'transition', e, n) || {}
          return 'string' == typeof r ? { name: r } : r
        }
        return t.map(function (t) {
          var e = m()({}, r(t))
          if (n && n.matched.length && n.matched[0].components.default) {
            var o = r(n.matched[0].components.default)
            h()(o)
              .filter(function (t) {
                return o[t] && -1 !== t.toLowerCase().indexOf('leave')
              })
              .forEach(function (t) {
                e[t] = o[t]
              })
          }
          return e
        })
      }
      function A(t, e) {
        return $.serverRendered && e && Object(b.a)(t, e), (t._Ctor = t), t
      }
      function T(t) {
        var e = this,
          n = Object(b.d)(t.options.base, t.options.mode)
        return Object(b.c)(
          t.match(n),
          (function () {
            var t = l()(
              s.a.mark(function t(n, r, o, a, i) {
                var u
                return s.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if ('function' != typeof n || n.options) {
                            t.next = 4
                            break
                          }
                          return (t.next = 3), n()
                        case 3:
                          n = t.sent
                        case 4:
                          return (
                            (u = A(Object(b.l)(n), $.data ? $.data[i] : null)),
                            (o.components[a] = u),
                            t.abrupt('return', u)
                          )
                        case 7:
                        case 'end':
                          return t.stop()
                      }
                  },
                  t,
                  e
                )
              })
            )
            return function (e, n, r, o, a) {
              return t.apply(this, arguments)
            }
          })()
        )
      }
      function L(t, e, n) {
        var r = this,
          o = [],
          a = !1
        if (
          (void 0 !== n &&
            ((o = []),
            n.middleware && (o = o.concat(n.middleware)),
            t.forEach(function (t) {
              t.options.middleware && (o = o.concat(t.options.middleware))
            })),
          (o = o.map(function (t) {
            return 'function' == typeof t
              ? t
              : ('function' != typeof y.a[t] &&
                  ((a = !0),
                  r.error({
                    statusCode: 500,
                    message: 'Unknown middleware ' + t,
                  })),
                y.a[t])
          })),
          !a)
        )
          return Object(b.i)(o, e)
      }
      function q(t, e) {
        Object(b.c)(t, function (t, e, n, r) {
          return (
            'object' !== (void 0 === t ? 'undefined' : o()(t)) ||
              t.options ||
              (((t = v.default.extend(t))._Ctor = t), (n.components[r] = t)),
            t
          )
        })
      }
      function z(t) {
        this._hadError &&
          this._dateLastError === this.$options.nuxt.dateErr &&
          this.error()
        var e = this.$options.nuxt.err
          ? g.a.layout
          : t.matched[0].components.default.options.layout
        'function' == typeof e && (e = e(j.context)), this.setLayout(e)
      }
      function B(t, e) {
        var n = this
        ;(!1 === this._pathChanged && !1 === this._queryChanged) ||
          v.default.nextTick(function () {
            Object(b.f)(t, []).forEach(function (t, e) {
              if (
                t &&
                t.constructor._dataRefresh &&
                k[e] === t.constructor._path &&
                'function' == typeof t.constructor.options.data
              ) {
                var n = t.constructor.options.data.call(t)
                for (var r in n) v.default.set(t.$data, r, n[r])
              }
            }),
              z.call(n, t)
          })
      }
      function N(t) {
        window._nuxtReadyCbs.forEach(function (e) {
          'function' == typeof e && e(t)
        }),
          'function' == typeof window._onNuxtLoaded && window._onNuxtLoaded(t),
          E.afterEach(function (e, n) {
            v.default.nextTick(function () {
              return t.$nuxt.$emit('routeChanged', e, n)
            })
          })
      }
      Object(g.b)()
        .then(C)
        .catch(function (t) {
          'ERR_REDIRECT' !== t.message &&
            console.error('[nuxt] Error while initializing app', t)
        })
    },
    TuIM: function (t, e, n) {
      'use strict'
      e.a = function (t) {
        var e = t.app
        ;(function (t, e, n, r, o, a, i) {
          ;(t.GoogleAnalyticsObject = o),
            (t.ga =
              t.ga ||
              function () {
                ;(t.ga.q = t.ga.q || []).push(arguments)
              }),
            (t.ga.l = 1 * new Date()),
            (a = e.createElement(n)),
            (i = e.getElementsByTagName(n)[0]),
            (a.async = 1),
            (a.src = 'https://www.google-analytics.com/analytics.js'),
            i.parentNode.insertBefore(a, i)
        })(window, document, 'script', 0, 'ga'),
          ga('create', 'UA-124216502-1', 'auto'),
          e.router.afterEach(function (t, e) {
            ga('set', 'page', t.fullPath), ga('send', 'pageview')
          })
      }
    },
    UHOx: function (t, e, n) {
      ;(t.exports = n('FZ+f')(!1)).push([
        t.i,
        '.__nuxt-error-page{padding:16px;padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:24px;font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}',
        '',
      ])
    },
    WRRc: function (t, e, n) {
      'use strict'
      e.a = {
        name: 'nuxt-link',
        functional: !0,
        render: function (t, e) {
          return t('router-link', e.data, e.children)
        },
      }
    },
    YLfZ: function (t, e, n) {
      'use strict'
      ;(e.a = function (t, e) {
        var n = t.options.data || y
        if (!e && t.options.hasAsyncData) return
        ;(t.options.hasAsyncData = !0),
          (t.options.data = function () {
            var r = n.call(this)
            return (
              this.$ssrContext && (e = this.$ssrContext.asyncData[t.cid]),
              m()({}, r, e)
            )
          }),
          t._Ctor && t._Ctor.options && (t._Ctor.options.data = t.options.data)
      }),
        (e.l = g),
        (e.e = b),
        (e.f = function (t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
          return [].concat.apply(
            [],
            t.matched.map(function (t, n) {
              return h()(t.instances).map(function (r) {
                return e && e.push(n), t.instances[r]
              })
            })
          )
        }),
        (e.c = w),
        (e.k = _),
        n.d(e, 'h', function () {
          return C
        }),
        n.d(e, 'm', function () {
          return k
        }),
        (e.i = function t(e, n) {
          if (!e.length || n._redirected || n._errored) return l.a.resolve()
          return j(e[0], n).then(function () {
            return t(e.slice(1), n)
          })
        }),
        (e.j = j),
        (e.d = function (t, e) {
          var n = window.location.pathname
          if ('hash' === e) return window.location.hash.replace(/^#\//, '')
          t && 0 === n.indexOf(t) && (n = n.slice(t.length))
          return (n || '/') + window.location.search + window.location.hash
        }),
        (e.b = function (t, e) {
          return (function (t) {
            for (var e = new Array(t.length), n = 0; n < t.length; n++)
              'object' === i()(t[n]) &&
                (e[n] = new RegExp('^(?:' + t[n].pattern + ')$'))
            return function (n, r) {
              for (
                var a = '',
                  i = n || {},
                  u = r || {},
                  s = u.pretty ? O : encodeURIComponent,
                  c = 0;
                c < t.length;
                c++
              ) {
                var p = t[c]
                if ('string' != typeof p) {
                  var f,
                    l = i[p.name || 'pathMatch']
                  if (null == l) {
                    if (p.optional) {
                      p.partial && (a += p.prefix)
                      continue
                    }
                    throw new TypeError(
                      'Expected "' + p.name + '" to be defined'
                    )
                  }
                  if (Array.isArray(l)) {
                    if (!p.repeat)
                      throw new TypeError(
                        'Expected "' +
                          p.name +
                          '" to not repeat, but received `' +
                          o()(l) +
                          '`'
                      )
                    if (0 === l.length) {
                      if (p.optional) continue
                      throw new TypeError(
                        'Expected "' + p.name + '" to not be empty'
                      )
                    }
                    for (var d = 0; d < l.length; d++) {
                      if (((f = s(l[d])), !e[c].test(f)))
                        throw new TypeError(
                          'Expected all "' +
                            p.name +
                            '" to match "' +
                            p.pattern +
                            '", but received `' +
                            o()(f) +
                            '`'
                        )
                      a += (0 === d ? p.prefix : p.delimiter) + f
                    }
                  } else {
                    if (((f = p.asterisk ? $(l) : s(l)), !e[c].test(f)))
                      throw new TypeError(
                        'Expected "' +
                          p.name +
                          '" to match "' +
                          p.pattern +
                          '", but received "' +
                          f +
                          '"'
                      )
                    a += p.prefix + f
                  }
                } else a += p
              }
              return a
            }
          })(
            (function (t, e) {
              var n,
                r = [],
                o = 0,
                a = 0,
                i = '',
                u = (e && e.delimiter) || '/'
              for (; null != (n = E.exec(t)); ) {
                var s = n[0],
                  c = n[1],
                  p = n.index
                if (((i += t.slice(a, p)), (a = p + s.length), c)) i += c[1]
                else {
                  var f = t[a],
                    l = n[2],
                    d = n[3],
                    h = n[4],
                    x = n[5],
                    m = n[6],
                    v = n[7]
                  i && (r.push(i), (i = ''))
                  var y = null != l && null != f && f !== l,
                    g = '+' === m || '*' === m,
                    b = '?' === m || '*' === m,
                    w = n[2] || u,
                    _ = h || x
                  r.push({
                    name: d || o++,
                    prefix: l || '',
                    delimiter: w,
                    optional: b,
                    repeat: g,
                    partial: y,
                    asterisk: !!v,
                    pattern: _ ? A(_) : v ? '.*' : '[^' + R(w) + ']+?',
                  })
                }
              }
              a < t.length && (i += t.substr(a))
              i && r.push(i)
              return r
            })(t, e)
          )
        }),
        (e.g = function (t, e) {
          var n = {},
            r = m()({}, t, e)
          for (var o in r) String(t[o]) !== String(e[o]) && (n[o] = !0)
          return n
        })
      var r = n('mvHQ'),
        o = n.n(r),
        a = n('pFYg'),
        i = n.n(a),
        u = n('Xxa5'),
        s = n.n(u),
        c = n('exGp'),
        p = n.n(c),
        f = n('//Fk'),
        l = n.n(f),
        d = n('fZjL'),
        h = n.n(d),
        x = n('Dd8w'),
        m = n.n(x),
        v = n('/5sW'),
        y = function () {
          return {}
        }
      function g(t) {
        return t.options && t._Ctor === t
          ? t
          : (t.options
              ? ((t._Ctor = t), (t.extendOptions = t.options))
              : ((t = v.default.extend(t))._Ctor = t),
            !t.options.name &&
              t.options.__file &&
              (t.options.name = t.options.__file),
            t)
      }
      function b(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
        return [].concat.apply(
          [],
          t.matched.map(function (t, n) {
            return h()(t.components).map(function (r) {
              return e && e.push(n), t.components[r]
            })
          })
        )
      }
      function w(t, e) {
        return Array.prototype.concat.apply(
          [],
          t.matched.map(function (t, n) {
            return h()(t.components).map(function (r) {
              return e(t.components[r], t.instances[r], t, r, n)
            })
          })
        )
      }
      function _(t) {
        var e = this
        return l.a.all(
          w(
            t,
            (function () {
              var t = p()(
                s.a.mark(function t(n, r, o, a) {
                  return s.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if ('function' != typeof n || n.options) {
                              t.next = 4
                              break
                            }
                            return (t.next = 3), n()
                          case 3:
                            n = t.sent
                          case 4:
                            return t.abrupt('return', (o.components[a] = g(n)))
                          case 5:
                          case 'end':
                            return t.stop()
                        }
                    },
                    t,
                    e
                  )
                })
              )
              return function (e, n, r, o) {
                return t.apply(this, arguments)
              }
            })()
          )
        )
      }
      ;(window._nuxtReadyCbs = []),
        (window.onNuxtReady = function (t) {
          window._nuxtReadyCbs.push(t)
        })
      var C = (function () {
          var t = p()(
            s.a.mark(function t(e) {
              return s.a.wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), _(e)
                      case 2:
                        return t.abrupt(
                          'return',
                          m()({}, e, {
                            meta: b(e).map(function (t) {
                              return t.options.meta || {}
                            }),
                          })
                        )
                      case 3:
                      case 'end':
                        return t.stop()
                    }
                },
                t,
                this
              )
            })
          )
          return function (e) {
            return t.apply(this, arguments)
          }
        })(),
        k = (function () {
          var t = p()(
            s.a.mark(function t(e, n) {
              return s.a.wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if ((n.to ? n.to : n.route, e.context)) {
                          t.next = 14
                          break
                        }
                        ;(t.t0 = !0),
                          (t.t1 = e),
                          (t.t2 = e.store),
                          (t.t3 = n.payload),
                          (t.t4 = n.error),
                          (t.t5 = {}),
                          (e.context = {
                            get isServer() {
                              return (
                                console.warn(
                                  'context.isServer has been deprecated, please use process.server instead.'
                                ),
                                !1
                              )
                            },
                            get isClient() {
                              return (
                                console.warn(
                                  'context.isClient has been deprecated, please use process.client instead.'
                                ),
                                !0
                              )
                            },
                            isStatic: t.t0,
                            isDev: !1,
                            isHMR: !1,
                            app: t.t1,
                            store: t.t2,
                            payload: t.t3,
                            error: t.t4,
                            base: '/',
                            env: t.t5,
                          }),
                          n.req && (e.context.req = n.req),
                          n.res && (e.context.res = n.res),
                          (e.context.redirect = function (t, n, r) {
                            if (t) {
                              e.context._redirected = !0
                              var o = void 0 === n ? 'undefined' : i()(n)
                              if (
                                ('number' == typeof t ||
                                  ('undefined' !== o && 'object' !== o) ||
                                  ((r = n || {}),
                                  (o =
                                    void 0 === (n = t) ? 'undefined' : i()(n)),
                                  (t = 302)),
                                'object' === o &&
                                  (n = e.router.resolve(n).href),
                                !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))
                              )
                                throw (
                                  ((n = T(n, r)),
                                  window.location.replace(n),
                                  new Error('ERR_REDIRECT'))
                                )
                              e.context.next({ path: n, query: r, status: t })
                            }
                          }),
                          (e.context.nuxtState = window.__NUXT__)
                      case 14:
                        if (
                          ((e.context.next = n.next),
                          (e.context._redirected = !1),
                          (e.context._errored = !1),
                          (e.context.isHMR = !!n.isHMR),
                          !n.route)
                        ) {
                          t.next = 22
                          break
                        }
                        return (t.next = 21), C(n.route)
                      case 21:
                        e.context.route = t.sent
                      case 22:
                        if (
                          ((e.context.params = e.context.route.params || {}),
                          (e.context.query = e.context.route.query || {}),
                          !n.from)
                        ) {
                          t.next = 28
                          break
                        }
                        return (t.next = 27), C(n.from)
                      case 27:
                        e.context.from = t.sent
                      case 28:
                      case 'end':
                        return t.stop()
                    }
                },
                t,
                this
              )
            })
          )
          return function (e, n) {
            return t.apply(this, arguments)
          }
        })()
      function j(t, e) {
        var n = void 0
        return (
          ((n =
            2 === t.length
              ? new l.a(function (n) {
                  t(e, function (t, r) {
                    t && e.error(t), n((r = r || {}))
                  })
                })
              : t(e)) &&
            (n instanceof l.a || 'function' == typeof n.then)) ||
            (n = l.a.resolve(n)),
          n
        )
      }
      var E = new RegExp(
        [
          '(\\\\.)',
          '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))',
        ].join('|'),
        'g'
      )
      function O(t) {
        return encodeURI(t).replace(/[\/?#]/g, function (t) {
          return '%' + t.charCodeAt(0).toString(16).toUpperCase()
        })
      }
      function $(t) {
        return encodeURI(t).replace(/[?#]/g, function (t) {
          return '%' + t.charCodeAt(0).toString(16).toUpperCase()
        })
      }
      function R(t) {
        return t.replace(/([.+*?=^!:()[\]|\/\\])/g, '\\$1')
      }
      function A(t) {
        return t.replace(/([=!:$\/()])/g, '\\$1')
      }
      function T(t, e) {
        var n = void 0,
          r = t.indexOf('://')
        ;-1 !== r
          ? ((n = t.substring(0, r)), (t = t.substring(r + 3)))
          : 0 === t.indexOf('//') && (t = t.substring(2))
        var a = t.split('/'),
          i = (n ? n + '://' : '//') + a.shift(),
          u = a.filter(Boolean).join('/'),
          s = void 0
        return (
          2 === (a = u.split('#')).length && ((u = a[0]), (s = a[1])),
          (i += u ? '/' + u : ''),
          e &&
            '{}' !== o()(e) &&
            (i +=
              (2 === t.split('?').length ? '&' : '?') +
              (function (t) {
                return h()(t)
                  .sort()
                  .map(function (e) {
                    var n = t[e]
                    return null == n
                      ? ''
                      : Array.isArray(n)
                      ? n
                          .slice()
                          .map(function (t) {
                            return [e, '=', t].join('')
                          })
                          .join('&')
                      : e + '=' + n
                  })
                  .filter(Boolean)
                  .join('&')
              })(e)),
          (i += s ? '#' + s : '')
        )
      }
    },
    ct3O: function (t, e, n) {
      'use strict'
      var r = n('3/Jy'),
        o = n('QhKw'),
        a = !1
      var i = function (t) {
          a || n('iHKy')
        },
        u = n('VU/8')(r.a, o.a, !1, i, null, null)
      ;(u.options.__file = '.nuxt/components/nuxt-error.vue'), (e.a = u.exports)
    },
    iHKy: function (t, e, n) {
      var r = n('UHOx')
      'string' == typeof r && (r = [[t.i, r, '']]),
        r.locals && (t.exports = r.locals)
      n('rjj0')('ef316932', r, !1, { sourceMap: !1 })
    },
    mtxM: function (t, e, n) {
      'use strict'
      e.a = function () {
        return new o.default({
          mode: 'history',
          base: '/',
          linkActiveClass: 'nuxt-link-active',
          linkExactActiveClass: 'nuxt-link-exact-active',
          scrollBehavior: v,
          routes: [
            { path: '/contact', component: a, name: 'contact' },
            { path: '/effect', component: i, name: 'effect' },
            { path: '/expertise', component: u, name: 'expertise' },
            { path: '/portfolio', component: s, name: 'portfolio' },
            { path: '/team', component: c, name: 'team' },
            {
              path: '/portfolio/diretto',
              component: p,
              name: 'portfolio-diretto',
            },
            {
              path: '/portfolio/everme',
              component: f,
              name: 'portfolio-everme',
            },
            { path: '/portfolio/fsvc', component: l, name: 'portfolio-fsvc' },
            { path: '/portfolio/grove', component: d, name: 'portfolio-grove' },
            {
              path: '/portfolio/hummel',
              component: h,
              name: 'portfolio-hummel',
            },
            {
              path: '/portfolio/prescription',
              component: x,
              name: 'portfolio-prescription',
            },
            { path: '/', component: m, name: 'index' },
          ],
          fallback: !1,
        })
      }
      var r = n('/5sW'),
        o = n('/ocq')
      r.default.use(o.default)
      var a = function () {
          return n
            .e(2)
            .then(n.bind(null, 'AZfq'))
            .then(function (t) {
              return t.default || t
            })
        },
        i = function () {
          return n
            .e(1)
            .then(n.bind(null, 'GbvU'))
            .then(function (t) {
              return t.default || t
            })
        },
        u = function () {
          return n
            .e(12)
            .then(n.bind(null, 'UXcv'))
            .then(function (t) {
              return t.default || t
            })
        },
        s = function () {
          return n
            .e(11)
            .then(n.bind(null, 'DBSi'))
            .then(function (t) {
              return t.default || t
            })
        },
        c = function () {
          return n
            .e(3)
            .then(n.bind(null, 'Z17O'))
            .then(function (t) {
              return t.default || t
            })
        },
        p = function () {
          return n
            .e(9)
            .then(n.bind(null, 'X63h'))
            .then(function (t) {
              return t.default || t
            })
        },
        f = function () {
          return n
            .e(8)
            .then(n.bind(null, 'F9dN'))
            .then(function (t) {
              return t.default || t
            })
        },
        l = function () {
          return n
            .e(7)
            .then(n.bind(null, 'soK5'))
            .then(function (t) {
              return t.default || t
            })
        },
        d = function () {
          return n
            .e(6)
            .then(n.bind(null, 'bVPI'))
            .then(function (t) {
              return t.default || t
            })
        },
        h = function () {
          return n
            .e(5)
            .then(n.bind(null, 'VsQB'))
            .then(function (t) {
              return t.default || t
            })
        },
        x = function () {
          return n
            .e(4)
            .then(n.bind(null, 'DYcB'))
            .then(function (t) {
              return t.default || t
            })
        },
        m = function () {
          return n
            .e(0)
            .then(n.bind(null, '/TYz'))
            .then(function (t) {
              return t.default || t
            })
        },
        v = function (t, e, n) {
          return n || { x: 0, y: 0 }
        }
    },
    qcny: function (t, e, n) {
      'use strict'
      n.d(e, 'b', function () {
        return $
      })
      var r = n('Xxa5'),
        o = n.n(r),
        a = n('//Fk'),
        i = (n.n(a), n('C4MV')),
        u = n.n(i),
        s = n('woOf'),
        c = n.n(s),
        p = n('Dd8w'),
        f = n.n(p),
        l = n('exGp'),
        d = n.n(l),
        h = n('MU8w'),
        x = (n.n(h), n('/5sW')),
        m = n('p3jY'),
        v = n.n(m),
        y = n('mtxM'),
        g = n('0F0d'),
        b = n('HBB+'),
        w = n('WRRc'),
        _ = n('ct3O'),
        C = n('Hot+'),
        k = n('yTq1'),
        j = n('YLfZ'),
        E = n('J2Ti'),
        O = n('TuIM')
      n.d(e, 'a', function () {
        return _.a
      })
      var $ = (function () {
        var t = d()(
          o.a.mark(function t(e) {
            var n, r, a, i, s, p, l
            return o.a.wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (n = Object(y.a)(e)),
                        ((r = Object(E.a)(e)).$router = n),
                        (a = f()(
                          {
                            router: n,
                            store: r,
                            nuxt: {
                              defaultTransition: R,
                              transitions: [R],
                              setTransitions: function (t) {
                                return (
                                  Array.isArray(t) || (t = [t]),
                                  (t = t.map(function (t) {
                                    return (t = t
                                      ? 'string' == typeof t
                                        ? c()({}, R, { name: t })
                                        : c()({}, R, t)
                                      : R)
                                  })),
                                  (this.$options.nuxt.transitions = t),
                                  t
                                )
                              },
                              err: null,
                              dateErr: null,
                              error: function (t) {
                                ;(t = t || null),
                                  (a.context._errored = !!t),
                                  'string' == typeof t &&
                                    (t = { statusCode: 500, message: t })
                                var n = this.nuxt || this.$options.nuxt
                                return (
                                  (n.dateErr = Date.now()),
                                  (n.err = t),
                                  e && (e.nuxt.error = t),
                                  t
                                )
                              },
                            },
                          },
                          k.a
                        )),
                        (r.app = a),
                        (i = e
                          ? e.next
                          : function (t) {
                              return a.router.push(t)
                            }),
                        (s = void 0),
                        e
                          ? (s = n.resolve(e.url).route)
                          : ((p = Object(j.d)(n.options.base)),
                            (s = n.resolve(p).route)),
                        (t.next = 10),
                        Object(j.m)(a, {
                          route: s,
                          next: i,
                          error: a.nuxt.error.bind(a),
                          store: r,
                          payload: e ? e.payload : void 0,
                          req: e ? e.req : void 0,
                          res: e ? e.res : void 0,
                          beforeRenderFns: e ? e.beforeRenderFns : void 0,
                        })
                      )
                    case 10:
                      if (
                        ((l = function (t, e) {
                          if (!t)
                            throw new Error(
                              'inject(key, value) has no key provided'
                            )
                          if (!e)
                            throw new Error(
                              'inject(key, value) has no value provided'
                            )
                          ;(a[(t = '$' + t)] = e), (r[t] = a[t])
                          var n = '__nuxt_' + t + '_installed__'
                          x.default[n] ||
                            ((x.default[n] = !0),
                            x.default.use(function () {
                              x.default.prototype.hasOwnProperty(t) ||
                                u()(x.default.prototype, t, {
                                  get: function () {
                                    return this.$root.$options[t]
                                  },
                                })
                            }))
                        }),
                        window.__NUXT__ &&
                          window.__NUXT__.state &&
                          r.replaceState(window.__NUXT__.state),
                        'function' != typeof O.a)
                      ) {
                        t.next = 16
                        break
                      }
                      return (t.next = 16), Object(O.a)(a.context, l)
                    case 16:
                      t.next = 19
                      break
                    case 19:
                      return t.abrupt('return', { app: a, router: n, store: r })
                    case 20:
                    case 'end':
                      return t.stop()
                  }
              },
              t,
              this
            )
          })
        )
        return function (e) {
          return t.apply(this, arguments)
        }
      })()
      x.default.component(g.a.name, g.a),
        x.default.component(b.a.name, b.a),
        x.default.component(w.a.name, w.a),
        x.default.component(C.a.name, C.a),
        x.default.use(v.a, {
          keyName: 'head',
          attribute: 'data-n-head',
          ssrAttribute: 'data-n-head-ssr',
          tagIDKeyName: 'hid',
        })
      var R = {
        name: 'page',
        mode: 'out-in',
        appear: !1,
        appearClass: 'appear',
        appearActiveClass: 'appear-active',
        appearToClass: 'appear-to',
      }
    },
    unZF: function (t, e, n) {
      'use strict'
      var r = n('BO1k'),
        o = n.n(r),
        a = n('4Atj'),
        i = a.keys()
      function u(t) {
        var e = a(t)
        return e.default ? e.default : e
      }
      var s = {},
        c = !0,
        p = !1,
        f = void 0
      try {
        for (var l, d = o()(i); !(c = (l = d.next()).done); c = !0) {
          var h = l.value
          s[h.replace(/^\.\//, '').replace(/\.(js)$/, '')] = u(h)
        }
      } catch (t) {
        ;(p = !0), (f = t)
      } finally {
        try {
          !c && d.return && d.return()
        } finally {
          if (p) throw f
        }
      }
      e.a = s
    },
    vdRI: function (t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var r = n('NYxO')
      e.default = function () {
        return new r.default.Store({
          state: { currentLayer: 0, leavingLayer: 5 },
          mutations: {
            setState: function (t, e) {
              for (var n in e) t[n] = e[n]
            },
          },
        })
      }
    },
    yTq1: function (t, e, n) {
      'use strict'
      var r = n('//Fk'),
        o = n.n(r),
        a = n('/5sW'),
        i = {
          _default: function () {
            return n
              .e(10)
              .then(n.bind(null, 'Ma2J'))
              .then(function (t) {
                return t.default || t
              })
          },
        },
        u = {}
      e.a = {
        head: {
          title: 'AVICE GLOBAL',
          meta: [
            { charset: 'utf-8' },
            {
              name: 'viewport',
              content:
                'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
            },
            {
              hid: 'description',
              name: 'description',
              content: 'AVICE GLOBAL',
            },
            { name: 'theme-color', content: '#003366' },
            { name: 'msapplication-TileColor', content: '#003366' },
            {
              name: 'msapplication-TileImage',
              content: '/ms-icon-144x144.png',
            },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: 'https://www.avice.us/' },
            {
              property: 'og:title',
              content: 'AVICE GLOBAL — Success by design',
            },
            {
              property: 'og:image',
              content: 'https://www.avice.us/images/og-image.jpg',
            },
            { property: 'og:site_name', content: 'AVICE GLOBAL' },
            {
              property: 'og:description',
              content: 'Ukraine-based company with clients all over the globe.',
            },
          ],
          script: [
            {
              type: 'text/javascript',
              src: '/wp-content/themes/avice/assets/js/sine-waves.min.js',
            },
            {
              type: 'text/javascript',
              src: '/wp-content/themes/avice/assets/js/fast-simplex-noise.js',
            },
            {
              type: 'text/javascript',
              src: '/wp-content/themes/avice/assets/js/three.min.js',
            },
          ],
          link: [
            {
              rel: 'stylesheet',
              href: '/wp-content/themes/avice/assets/css/main.css?v=1',
            },
            {
              rel: 'apple-touch-icon',
              sizes: '57x57',
              href: '/apple-icon-57x57.png',
            },
            {
              rel: 'apple-touch-icon',
              sizes: '60x60',
              href: '/apple-icon-60x60.png',
            },
            {
              rel: 'apple-touch-icon',
              sizes: '72x72',
              href: '/apple-icon-72x72.png',
            },
            {
              rel: 'apple-touch-icon',
              sizes: '76x76',
              href: '/apple-icon-76x76.png',
            },
            {
              rel: 'apple-touch-icon',
              sizes: '114x114',
              href: '/apple-icon-114x114.png',
            },
            {
              rel: 'apple-touch-icon',
              sizes: '120x120',
              href: '/apple-icon-120x120.png',
            },
            {
              rel: 'apple-touch-icon',
              sizes: '144x144',
              href: '/apple-icon-144x144.png',
            },
            {
              rel: 'apple-touch-icon',
              sizes: '152x152',
              href: '/apple-icon-152x152.png',
            },
            {
              rel: 'apple-touch-icon',
              sizes: '180x180',
              href: '/apple-icon-180x180.png',
            },
            {
              rel: 'icon',
              type: 'image/png',
              sizes: '192x192',
              href: '/android-icon-192x192.png',
            },
            {
              rel: 'icon',
              type: 'image/png',
              sizes: '32x32',
              href: '/favicon-32x32.png',
            },
            {
              rel: 'icon',
              type: 'image/png',
              sizes: '96x96',
              href: '/favicon-96x96.png',
            },
            {
              rel: 'icon',
              type: 'image/png',
              sizes: '16x16',
              href: '/favicon-16x16.png',
            },
            { rel: 'manifest', href: '/manifest.json' },
          ],
          style: [],
        },
        render: function (t, e) {
          var n = t(this.layout || 'nuxt')
          return t('div', { domProps: { id: '__nuxt' } }, [
            t('transition', { props: { name: 'layout', mode: 'out-in' } }, [
              t('div', { domProps: { id: '__layout' }, key: this.layoutName }, [
                n,
              ]),
            ]),
          ])
        },
        data: function () {
          return { layout: null, layoutName: '' }
        },
        beforeCreate: function () {
          a.default.util.defineReactive(this, 'nuxt', this.$options.nuxt)
        },
        created: function () {
          ;(a.default.prototype.$nuxt = this),
            'undefined' != typeof window && (window.$nuxt = this),
            (this.error = this.nuxt.error)
        },
        methods: {
          setLayout: function (t) {
            ;(t && u['_' + t]) || (t = 'default'), (this.layoutName = t)
            var e = '_' + t
            return (this.layout = u[e]), this.layout
          },
          loadLayout: function (t) {
            var e = this
            ;(t && (i['_' + t] || u['_' + t])) || (t = 'default')
            var n = '_' + t
            return u[n]
              ? o.a.resolve(u[n])
              : i[n]()
                  .then(function (t) {
                    return (u[n] = t), delete i[n], u[n]
                  })
                  .catch(function (t) {
                    if (e.$nuxt)
                      return e.$nuxt.error({
                        statusCode: 500,
                        message: t.message,
                      })
                  })
          },
        },
        components: {},
      }
    },
  },
  ['T23V']
)
