webpackJsonp([10], {
  '6B1y': function (t, e, i) {
    'use strict'
    var n = i('qDsb'),
      a = i('IDz/'),
      s = i('VU/8')(n.a, a.a, !1, null, null, null)
    ;(s.options.__file = 'components/smoothScroll.vue'), (e.a = s.exports)
  },
  '8h99': function (t, e, i) {
    'use strict'
    e.a = {
      props: { currentLayer: { type: Number, default: 0 } },
      data: function () {
        return {}
      },
      mounted: function () {},
      methods: {},
      watch: {},
    }
  },
  DLCH: function (t, e, i) {
    'use strict'
    var n = function () {
      var t = this,
        e = t.$createElement,
        i = t._self._c || e
      return i(
        'div',
        [
          'effect' !== t.$route.name
            ? i(
                'header',
                {
                  class: {
                    'fixed-position': t.fixedHeader,
                    'nav-active': t.mobileMenu,
                  },
                  attrs: { id: 'header' },
                },
                [
                  i(
                    'strong',
                    { staticClass: 'logo' },
                    [
                      i(
                        'nuxt-link',
                        {
                          attrs: { to: '/' },
                          nativeOn: {
                            click: function (e) {
                              t.mobileMenu = !1
                            },
                          },
                        },
                        [
                          i('img', {
                            attrs: {
                              src: '/wp-content/themes/avice/assets/img/avice-s.svg',
                              alt: '',
                            },
                          }),
                        ]
                      ),
                    ],
                    1
                  ),
                  i('div', { staticClass: 'header-holder' }, [
                    i('div', { staticClass: 'line-menu1' }),
                    i('div', { staticClass: 'nav-drop' }, [
                      i('ul', { staticClass: 'menu' }, [
                        i(
                          'li',
                          [
                            i('nuxt-link', { attrs: { to: '/team' } }, [
                              t._v('Team.'),
                            ]),
                          ],
                          1
                        ),
                        i(
                          'li',
                          [
                            i('nuxt-link', { attrs: { to: '/portfolio' } }, [
                              t._v('Works.'),
                            ]),
                          ],
                          1
                        ),
                        i(
                          'li',
                          [
                            i('nuxt-link', { attrs: { to: '/expertise' } }, [
                              t._v('Expertise.'),
                            ]),
                          ],
                          1
                        ),
                      ]),
                    ]),
                    i('div', { staticClass: 'line-menu1 line-menu2' }),
                    t._m(0),
                  ]),
                  i('div', { staticClass: 'header-holder2' }, [
                    i(
                      'div',
                      {
                        staticClass: 'nav-opener',
                        on: {
                          click: function (e) {
                            t.mobileMenu = !t.mobileMenu
                          },
                        },
                      },
                      [i('span')]
                    ),
                    i('div', { staticClass: 'nav-drop' }, [
                      i('div', { staticClass: 'line-menu1' }),
                      'portfolio-coobo' === this.$route.name ||
                      'portfolio-grove' === this.$route.name ||
                      'portfolio-diretto' === this.$route.name ||
                      'portfolio-hummel' === this.$route.name ||
                      'portfolio-prescription' === this.$route.name ||
                      'portfolio-everme' === this.$route.name ||
                      'portfolio-cvp' === this.$route.name ||
                      'portfolio-fsvc' === this.$route.name
                        ? i('ul', { staticClass: 'menu' }, [
                            i(
                              'li',
                              [
                                i(
                                  'nuxt-link',
                                  {
                                    attrs: { to: '/portfolio' },
                                    nativeOn: {
                                      click: function (e) {
                                        t.mobileMenu = !t.mobileMenu
                                      },
                                    },
                                  },
                                  [t._v('Works.')]
                                ),
                              ],
                              1
                            ),
                            i(
                              'li',
                              { staticClass: 'block-log-menu' },
                              [
                                i(
                                  'nuxt-link',
                                  {
                                    attrs: { to: '/portfolio/grove' },
                                    nativeOn: {
                                      click: function (e) {
                                        t.mobileMenu = !t.mobileMenu
                                      },
                                    },
                                  },
                                  [
                                    i('div', { staticClass: 'img-brend' }, [
                                      i('img', {
                                        attrs: {
                                          src: '/wp-content/themes/avice/assets/img/grove.svg',
                                          alt: '',
                                        },
                                      }),
                                    ]),
                                  ]
                                ),
                                i(
                                  'nuxt-link',
                                  {
                                    attrs: { to: '/portfolio/diretto' },
                                    nativeOn: {
                                      click: function (e) {
                                        t.mobileMenu = !t.mobileMenu
                                      },
                                    },
                                  },
                                  [
                                    i('div', { staticClass: 'img-brend' }, [
                                      i('img', {
                                        attrs: {
                                          src: '/wp-content/themes/avice/assets/img/diretto.svg',
                                          alt: '',
                                        },
                                      }),
                                    ]),
                                  ]
                                ),
                                i(
                                  'nuxt-link',
                                  {
                                    attrs: { to: '/portfolio/hummel' },
                                    nativeOn: {
                                      click: function (e) {
                                        t.mobileMenu = !t.mobileMenu
                                      },
                                    },
                                  },
                                  [
                                    i('div', { staticClass: 'img-brend' }, [
                                      i('img', {
                                        attrs: {
                                          src: '/wp-content/themes/avice/assets/img/hummel.svg',
                                          alt: '',
                                        },
                                      }),
                                    ]),
                                  ]
                                ),
                                i(
                                  'nuxt-link',
                                  {
                                    attrs: { to: '/portfolio/prescription' },
                                    nativeOn: {
                                      click: function (e) {
                                        t.mobileMenu = !t.mobileMenu
                                      },
                                    },
                                  },
                                  [
                                    i('div', { staticClass: 'img-brend' }, [
                                      i('img', {
                                        attrs: {
                                          src: '/wp-content/themes/avice/assets/img/pd.svg',
                                          alt: '',
                                        },
                                      }),
                                    ]),
                                  ]
                                ),
                                i(
                                  'nuxt-link',
                                  {
                                    attrs: { to: '/portfolio/everme' },
                                    nativeOn: {
                                      click: function (e) {
                                        t.mobileMenu = !t.mobileMenu
                                      },
                                    },
                                  },
                                  [
                                    i('div', { staticClass: 'img-brend' }, [
                                      i('img', {
                                        attrs: {
                                          src: '/wp-content/themes/avice/assets/img/everme.svg',
                                          alt: '',
                                        },
                                      }),
                                    ]),
                                  ]
                                ),
                                i(
                                  'nuxt-link',
                                  {
                                    attrs: { to: '/portfolio/cvp' },
                                    nativeOn: {
                                      click: function (e) {
                                        t.mobileMenu = !t.mobileMenu
                                      },
                                    },
                                  },
                                  [
                                    i('div', { staticClass: 'img-brend' }, [
                                      i('img', {
                                        attrs: {
                                          src: '/wp-content/themes/avice/assets/img/liva.svg',
                                          alt: '',
                                        },
                                      }),
                                    ]),
                                  ]
                                ),
                                i(
                                  'nuxt-link',
                                  {
                                    attrs: { to: '/portfolio/coobo' },
                                    nativeOn: {
                                      click: function (e) {
                                        t.mobileMenu = !t.mobileMenu
                                      },
                                    },
                                  },
                                  [
                                    i('div', { staticClass: 'img-brend' }, [
                                      i('img', {
                                        attrs: {
                                          src: '/wp-content/themes/avice/assets/img/coobo.svg',
                                          alt: '',
                                        },
                                      }),
                                    ]),
                                  ]
                                ),
                                i(
                                  'nuxt-link',
                                  {
                                    attrs: { to: '/portfolio/fsvc' },
                                    nativeOn: {
                                      click: function (e) {
                                        t.mobileMenu = !t.mobileMenu
                                      },
                                    },
                                  },
                                  [
                                    i('div', { staticClass: 'img-brend' }, [
                                      i('img', {
                                        attrs: {
                                          src: '/wp-content/themes/avice/assets/img/fsvc.svg',
                                          alt: '',
                                        },
                                      }),
                                    ]),
                                  ]
                                ),
                              ],
                              1
                            ),
                            i(
                              'li',
                              [
                                i(
                                  'nuxt-link',
                                  {
                                    attrs: { to: '/' },
                                    nativeOn: {
                                      click: function (e) {
                                        t.mobileMenu = !t.mobileMenu
                                      },
                                    },
                                  },
                                  [t._v('Home.')]
                                ),
                              ],
                              1
                            ),
                            i(
                              'li',
                              [
                                t.mobileMenu
                                  ? i(
                                      'nuxt-link',
                                      {
                                        attrs: { to: '/contact' },
                                        nativeOn: {
                                          click: function (e) {
                                            t.mobileMenu = !t.mobileMenu
                                          },
                                        },
                                      },
                                      [t._v('Contact Us\n            ')]
                                    )
                                  : t._e(),
                              ],
                              1
                            ),
                          ])
                        : i('ul', { staticClass: 'menu' }, [
                            i(
                              'li',
                              [
                                i(
                                  'nuxt-link',
                                  {
                                    attrs: { to: '/expertise' },
                                    nativeOn: {
                                      click: function (e) {
                                        t.mobileMenu = !t.mobileMenu
                                      },
                                    },
                                  },
                                  [t._v('Expertise.')]
                                ),
                              ],
                              1
                            ),
                            i(
                              'li',
                              [
                                i(
                                  'nuxt-link',
                                  {
                                    attrs: { to: '/portfolio' },
                                    nativeOn: {
                                      click: function (e) {
                                        t.mobileMenu = !t.mobileMenu
                                      },
                                    },
                                  },
                                  [t._v('Works.')]
                                ),
                              ],
                              1
                            ),
                            i(
                              'li',
                              [
                                i(
                                  'nuxt-link',
                                  {
                                    attrs: { to: '/team' },
                                    nativeOn: {
                                      click: function (e) {
                                        t.mobileMenu = !t.mobileMenu
                                      },
                                    },
                                  },
                                  [t._v('Team.')]
                                ),
                              ],
                              1
                            ),
                            i(
                              'li',
                              { staticClass: 'st-proj-mob' },
                              [
                                i(
                                  'nuxt-link',
                                  {
                                    attrs: { to: '/contact' },
                                    nativeOn: {
                                      click: function (e) {
                                        t.mobileMenu = !t.mobileMenu
                                      },
                                    },
                                  },
                                  [t._v('Contact Us')]
                                ),
                              ],
                              1
                            ),
                          ]),
                      i('div', { staticClass: 'line-menu1 line-menu2' }),
                    ]),
                    i(
                      'div',
                      { staticClass: 'right-block' },
                      [
                        t._m(1),
                        i(
                          'nuxt-link',
                          { staticClass: 'btn', attrs: { to: '/contact' } },
                          [t._v('Contact Us')]
                        ),
                      ],
                      1
                    ),
                  ]),
                ]
              )
            : t._e(),
          i(
            'div',
            {
              class: { blackBg: 'effect' === t.$route.name },
              attrs: { id: 'wrapper' },
            },
            [
              'effect' !== t.$route.name
                ? i('backgrounds', {
                    attrs: { currentLayer: t.$store.state.currentLayer },
                  })
                : t._e(),
              i('nuxt'),
            ],
            1
          ),
          i(
            'smoothscroll',
            {
              staticClass: 'scroll-up',
              class: { 'scrollUp-show': t.scrollUp },
              attrs: { duration: 500 },
            },
            [i('div', { staticClass: 'scroll-arrow' })]
          ),
        ],
        1
      )
    }
    n._withStripped = !0
    var a = {
      render: n,
      staticRenderFns: [
        function () {
          var t = this.$createElement,
            e = this._self._c || t
          return e('ul', { staticClass: 'social-icon' }, [
            e('li', [
              e(
                'a',
                {
                  attrs: {
                    href: 'https://www.facebook.com/aviceglobal/',
                    target: '_blank',
                  },
                },
                [
                  e('img', {
                    attrs: {
                      src: '/wp-content/themes/avice/assets/img/face.svg',
                      alt: 'img',
                    },
                  }),
                ]
              ),
            ]),
            e('li', [
              e(
                'a',
                {
                  attrs: {
                    href: 'https://www.linkedin.com/company/aviceinc/?viewAsMember=true',
                    target: '_blank',
                  },
                },
                [
                  e('img', {
                    attrs: {
                      src: '/wp-content/themes/avice/assets/img/linkin.svg',
                      alt: 'img',
                    },
                  }),
                ]
              ),
            ]),
            e('li', [
              e(
                'a',
                {
                  attrs: {
                    href: 'https://twitter.com/AviceGlobal',
                    target: '_blank',
                  },
                },
                [
                  e('img', {
                    attrs: {
                      src: '/wp-content/themes/avice/assets/img/twitter.svg',
                      alt: 'img',
                    },
                  }),
                ]
              ),
            ]),
            e('li', [
              e(
                'a',
                {
                  attrs: {
                    href: 'https://www.instagram.com/avice_global/',
                    target: '_blank',
                  },
                },
                [
                  e('img', {
                    attrs: {
                      src: '/wp-content/themes/avice/assets/img/inst.svg',
                      alt: 'img',
                    },
                  }),
                ]
              ),
            ]),
          ])
        },
        function () {
          var t = this.$createElement,
            e = this._self._c || t
          return e('ul', { staticClass: 'social-icon' }, [
            e('li', [
              e(
                'a',
                {
                  attrs: {
                    href: 'https://www.facebook.com/aviceglobal/',
                    target: '_blank',
                  },
                },
                [
                  e('img', {
                    attrs: {
                      src: '/wp-content/themes/avice/assets/img/face.svg',
                      alt: 'img',
                    },
                  }),
                ]
              ),
            ]),
            e('li', [
              e(
                'a',
                {
                  attrs: {
                    href: 'https://www.linkedin.com/company/aviceinc/?viewAsMember=true',
                    target: '_blank',
                  },
                },
                [
                  e('img', {
                    attrs: {
                      src: '/wp-content/themes/avice/assets/img/linkin.svg',
                      alt: 'img',
                    },
                  }),
                ]
              ),
            ]),
            e('li', [
              e(
                'a',
                {
                  attrs: {
                    href: 'https://twitter.com/AviceGlobal',
                    target: '_blank',
                  },
                },
                [
                  e('img', {
                    attrs: {
                      src: '/wp-content/themes/avice/assets/img/twitter.svg',
                      alt: 'img',
                    },
                  }),
                ]
              ),
            ]),
            e('li', [
              e(
                'a',
                {
                  attrs: {
                    href: 'https://www.instagram.com/avice_global/',
                    target: '_blank',
                  },
                },
                [
                  e('img', {
                    attrs: {
                      src: '/wp-content/themes/avice/assets/img/inst.svg',
                      alt: 'img',
                    },
                  }),
                ]
              ),
            ]),
          ])
        },
      ],
    }
    e.a = a
  },
  'E+oc': function (t, e, i) {
    'use strict'
    var n = i('8h99'),
      a = i('OGQp'),
      s = i('VU/8')(n.a, a.a, !1, null, null, null)
    ;(s.options.__file = 'components/backgrounds.vue'), (e.a = s.exports)
  },
  'IDz/': function (t, e, i) {
    'use strict'
    var n = function () {
      var t = this,
        e = t.$createElement
      return (t._self._c || e)(
        'div',
        {
          on: {
            click: function (e) {
              return t.smoothScroll(t.duration, t.targetId, t.delay)
            },
          },
        },
        [t._t('default')],
        2
      )
    }
    n._withStripped = !0
    var a = { render: n, staticRenderFns: [] }
    e.a = a
  },
  Ma2J: function (t, e, i) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 })
    var n = i('StkT'),
      a = i('DLCH'),
      s = i('VU/8')(n.a, a.a, !1, null, null, null)
    ;(s.options.__file = 'layouts/default.vue'), (e.default = s.exports)
  },
  OGQp: function (t, e, i) {
    'use strict'
    var n = function () {
      var t = this.$createElement,
        e = this._self._c || t
      return e('div', { attrs: { id: 'backgrounds' } }, [
        e('div', {
          staticClass: 'back back0',
          class: { active: 0 === this.currentLayer },
        }),
        e('div', {
          staticClass: 'back back1',
          class: { active: 1 === this.currentLayer },
        }),
        e('div', {
          staticClass: 'back back2',
          class: { active: 2 === this.currentLayer },
        }),
      ])
    }
    n._withStripped = !0
    var a = { render: n, staticRenderFns: [] }
    e.a = a
  },
  StkT: function (t, e, i) {
    'use strict'
    var n = i('E+oc'),
      a = i('6B1y')
    e.a = {
      components: { Backgrounds: n.a, Smoothscroll: a.a },
      data: function () {
        return { fixedHeader: !1, mobileMenu: !1, scrollUp: !1, delay: 10500 }
      },
      mounted: function () {
        var t = this
        ;-1 != navigator.userAgent.indexOf('Safari') &&
          -1 == navigator.userAgent.indexOf('Chrome') &&
          document.body.classList.add('is-safari'),
          document.addEventListener('scroll', this.onScroll),
          this.onScroll(),
          setInterval(function () {
            t.$store.commit('setState', {
              leavingLayer: t.$store.state.currentLayer,
            }),
              t.$store.commit('setState', {
                currentLayer: t.$store.state.currentLayer + 1,
              }),
              t.$store.state.currentLayer > 2 &&
                t.$store.commit('setState', { currentLayer: 0 }),
              setTimeout(
                function () {
                  this.$store.commit('setState', { leavingLayer: null })
                }.bind(t),
                3e3
              )
          }, this.delay)
      },
      methods: {
        onScroll: function () {
          var t =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop
          t > 100 && !this.$store.state.sideHeader
            ? (this.fixedHeader = !0)
            : (this.fixedHeader = !1),
            t > window.innerHeight ? (this.scrollUp = !0) : (this.scrollUp = !1)
        },
      },
    }
  },
  qDsb: function (t, e, i) {
    'use strict'
    e.a = {
      data: function () {
        return {}
      },
      props: {
        offset: { type: Number, default: 0 },
        trigger: { type: Boolean, default: !1 },
        duration: { type: Number, default: 700 },
        delay: { type: Number, default: 0 },
        targetId: { type: String, default: null },
        desktopOnly: { type: Boolean, default: !1 },
      },
      watch: {
        trigger: function () {
          this.trigger &&
            this.smoothScroll(this.duration, this.targetId, this.delay)
        },
      },
      methods: {
        smoothScroll: function (t, e, i, n) {
          ;(this.desktopOnly && window.innerWidth < 768) ||
            setTimeout(function () {
              var i = e ? document.getElementById(e) : document.body,
                a = window.scrollTop || window.pageYOffset,
                s = (function (t, e) {
                  return 'HTML' === t.nodeName
                    ? -e
                    : t.getBoundingClientRect().top + e
                })(i, a),
                o = Date.now(),
                r =
                  window.requestAnimationFrame ||
                  window.mozRequestAnimationFrame ||
                  window.webkitRequestAnimationFrame ||
                  function (t) {
                    window.setTimeout(t, 15)
                  }
              !(function e() {
                var i = Date.now() - o
                window.scroll(
                  0,
                  (function (t, e, i, n) {
                    return i > n
                      ? e
                      : t +
                          (e - t) *
                            (function (t) {
                              return t < 0.5
                                ? 4 * t * t * t
                                : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
                            })(i / n)
                  })(a, s, i, t)
                ),
                  i > t ? 'function' == typeof n && n() : r(e)
              })()
            }, i)
        },
      },
    }
  },
})
