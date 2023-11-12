webpackJsonp([0], {
  '+ptz': function (t, e, i) {
    'use strict'
    var s = function () {
      var t = this,
        e = t.$createElement,
        i = t._self._c || e
      return i(
        'my-wow-js',
        { tag: 'div' },
        [
          i('main', { attrs: { id: 'main' } }, [
            i(
              'section',
              { staticClass: 'visual-section' },
              [
                i('rotation', {
                  attrs: { currentLayer: t.$store.state.currentLayer },
                }),
                i('div', { staticClass: 'container' }, [
                  i('div', { staticClass: 'col-holder' }, [
                    i(
                      'div',
                      { staticClass: 'col' },
                      [
                        t._m(0),
                        i(
                          'a',
                          { staticClass: 'btn', attrs: { href: '/contact' } },
                          [t._v('Contact Us')]
                        ),
                      ],
                      1
                    ),
                    i('div', { staticClass: 'col d-flex align-center' }, [
                      i('div', { staticClass: 'headings' }, [
                        0 === t.$store.state.currentLayer ||
                        0 === t.$store.state.leavingLayer
                          ? i(
                              'div',
                              {
                                staticClass: 'layer',
                                class: {
                                  leaving: 0 === t.$store.state.leavingLayer,
                                },
                              },
                              [t._m(1)]
                            )
                          : t._e(),
                        1 === t.$store.state.currentLayer ||
                        1 === t.$store.state.leavingLayer
                          ? i(
                              'div',
                              {
                                staticClass: 'layer',
                                class: {
                                  leaving: 1 === t.$store.state.leavingLayer,
                                },
                              },
                              [t._m(2)]
                            )
                          : t._e(),
                        2 === t.$store.state.currentLayer ||
                        2 === t.$store.state.leavingLayer
                          ? i(
                              'div',
                              {
                                staticClass: 'layer',
                                class: {
                                  leaving: 2 === t.$store.state.leavingLayer,
                                },
                              },
                              [t._m(3)]
                            )
                          : t._e(),
                      ]),
                      i(
                        'div',
                        { staticClass: 'particles' },
                        [
                          i('particles', {
                            attrs: {
                              hue: t.hueArr[t.$store.state.currentLayer],
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                  ]),
                  t._m(4),
                ]),
                i('div', { staticClass: 'left-bg-el' }),
              ],
              1
            ),
            i('section', { staticClass: 'experience-section' }, [
              t._m(5),
              i(
                'div',
                {
                  staticClass: 'experience-holder',
                  attrs: { id: 'experience' },
                },
                [
                  i(
                    'div',
                    { staticClass: 'container' },
                    [
                      t._m(6),
                      i(
                        'a',
                        { staticClass: 'btn', attrs: { href: '/expertise' } },
                        [t._v('Learn more')]
                      ),
                    ],
                    1
                  ),
                  i('div', { staticClass: 'left-white' }),
                  i('div', { staticClass: 'right-white' }),
                ]
              ),
            ]),
            i(
              'section',
              { staticClass: 'benefits-section', attrs: { id: 'benefits' } },
              [
                i('div', { staticClass: 'container' }, [
                  t._m(7),
                  i('div', { staticClass: 'col-holder' }, [
                    i('div', { staticClass: 'col' }, [
                      i('div', { staticClass: 'img-holder' }, [
                        i('canvas', { ref: 'waves1', staticClass: 'waves1' }),
                        i('img', {
                          attrs: {
                            src: '/wp-content/themes/avice/assets/img/qyras1.svg',
                            alt: 'img',
                          },
                        }),
                        i('div', { staticClass: 'rectangle1' }),
                        i('div', { staticClass: 'rectangle2' }),
                        i('div', { staticClass: 'rectangle3' }),
                        i('div', { staticClass: 'rectangle4' }),
                        i('div', { staticClass: 'rectangle5' }),
                        i('div', { staticClass: 'rectangle6' }),
                        i('div', { staticClass: 'rectangle7' }),
                      ]),
                      t._m(8),
                    ]),
                    i('div', { staticClass: 'col' }, [
                      i('div', { staticClass: 'img-holder' }, [
                        i('canvas', { ref: 'waves2', staticClass: 'waves2' }),
                        i('img', {
                          attrs: {
                            src: '/wp-content/themes/avice/assets/img/qyras3.svg',
                            alt: 'img',
                          },
                        }),
                        i('div', { staticClass: 'rectangle1' }),
                        i('div', { staticClass: 'rectangle2' }),
                        i('div', { staticClass: 'rectangle3' }),
                        i('div', { staticClass: 'rectangle4' }),
                        i('div', { staticClass: 'rectangle5' }),
                        i('div', { staticClass: 'rectangle6' }),
                        i('div', { staticClass: 'rectangle7' }),
                      ]),
                      t._m(9),
                    ]),
                    i('div', { staticClass: 'col' }, [
                      i('div', { staticClass: 'img-holder' }, [
                        i('canvas', { ref: 'waves3', staticClass: 'waves3' }),
                        i('img', {
                          attrs: {
                            src: '/wp-content/themes/avice/assets/img/qyras2.svg',
                            alt: 'img',
                          },
                        }),
                        i('div', { staticClass: 'rectangle1' }),
                        i('div', { staticClass: 'rectangle2' }),
                        i('div', { staticClass: 'rectangle3' }),
                        i('div', { staticClass: 'rectangle4' }),
                        i('div', { staticClass: 'rectangle5' }),
                        i('div', { staticClass: 'rectangle6' }),
                        i('div', { staticClass: 'rectangle7' }),
                      ]),
                      t._m(10),
                    ]),
                    i('div', { staticClass: 'col' }, [
                      i('div', { staticClass: 'img-holder' }, [
                        i('canvas', { ref: 'waves4', staticClass: 'waves4' }),
                        i('img', {
                          attrs: {
                            src: '/wp-content/themes/avice/assets/img/qyras4.svg',
                            alt: 'img',
                          },
                        }),
                        i('div', { staticClass: 'rectangle1' }),
                        i('div', { staticClass: 'rectangle2' }),
                        i('div', { staticClass: 'rectangle3' }),
                        i('div', { staticClass: 'rectangle4' }),
                        i('div', { staticClass: 'rectangle5' }),
                        i('div', { staticClass: 'rectangle6' }),
                        i('div', { staticClass: 'rectangle7' }),
                      ]),
                      t._m(11),
                    ]),
                  ]),
                ]),
              ]
            ),
            i(
              'section',
              {
                ref: 'worksSection',
                staticClass: 'works-section',
                attrs: { id: 'works' },
              },
              [
                i('div', { staticClass: 'container' }, [
                  t._m(12),
                  i('div', { staticClass: 'col-holder' }, [
                    i('div', { staticClass: 'col' }, [
                      t._m(13),
                      i(
                        'div',
                        {
                          staticClass: 'slide',
                          class: {
                            active: 0 === t.worksCurrentSlide,
                            fadeOut: 0 === t.worksFadingSlide,
                          },
                        },
                        [t._m(14)]
                      ),
                      i(
                        'div',
                        {
                          staticClass: 'slide',
                          class: {
                            active: 1 === t.worksCurrentSlide,
                            fadeOut: 1 === t.worksFadingSlide,
                          },
                        },
                        [t._m(15)]
                      ),
                      i(
                        'div',
                        {
                          staticClass: 'slide',
                          class: {
                            active: 2 === t.worksCurrentSlide,
                            fadeOut: 2 === t.worksFadingSlide,
                          },
                        },
                        [t._m(16)]
                      ),
                      t._m(17),
                    ]),
                    i(
                      'div',
                      { staticClass: 'col' },
                      [
                        i(
                          'div',
                          {
                            staticClass: 'slider-btn show',
                            on: { click: t.setNextWorksSlide },
                          },
                          [
                            i(
                              'svg',
                              {
                                staticClass: 'progress',
                                class: { active: t.worksBtnAnimating },
                                attrs: { viewBox: '0 0 120 120' },
                              },
                              [
                                i('circle', {
                                  style: {
                                    transitionDuration: t.worksBtnAnimating
                                      ? t.worksSlideDuration + 'ms'
                                      : '0ms',
                                  },
                                  attrs: { cx: '60', cy: '60', r: '54' },
                                }),
                              ]
                            ),
                            i('img', {
                              staticClass: 'arrow',
                              attrs: {
                                src: '/wp-content/themes/avice/assets/img/arrow-1.svg',
                                alt: 'img',
                              },
                            }),
                          ]
                        ),
                        i('div', { staticClass: 'col-text' }, [
                          i('div', { staticClass: 'headings' }, [
                            0 === t.worksCurrentSlide ||
                            0 === t.worksFadingSlide
                              ? i(
                                  'div',
                                  {
                                    staticClass: 'layer',
                                    class: {
                                      leaving: 0 === t.worksFadingSlide,
                                    },
                                  },
                                  [t._m(18)]
                                )
                              : t._e(),
                            1 === t.worksCurrentSlide ||
                            1 === t.worksFadingSlide
                              ? i(
                                  'div',
                                  {
                                    staticClass: 'layer',
                                    class: {
                                      leaving: 1 === t.worksFadingSlide,
                                    },
                                  },
                                  [t._m(19)]
                                )
                              : t._e(),
                            2 === t.worksCurrentSlide ||
                            2 === t.worksFadingSlide
                              ? i(
                                  'div',
                                  {
                                    staticClass: 'layer',
                                    class: {
                                      leaving: 2 === t.worksFadingSlide,
                                    },
                                  },
                                  [t._m(20)]
                                )
                              : t._e(),
                          ]),
                        ]),
                        i(
                          'a',
                          {
                            staticClass: 'btn',
                            attrs: { href: t.getWorksLink() },
                          },
                          [t._v('View more')]
                        ),
                      ],
                      1
                    ),
                  ]),
                  t._m(21),
                ]),
                i('div', { staticClass: 'grad-line1' }),
                i('div', { staticClass: 'grad-line2' }),
                i('div', { staticClass: 'grad-line3' }),
              ]
            ),
            i('section', { staticClass: 'contact-section' }, [
              i('div', { staticClass: 'container' }, [
                t._m(22),
                i('div', { staticClass: 'col-holder' }, [
                  i('div', { staticClass: 'col' }, [
                    i('form', { staticClass: 'form', on: { submit: t.sub } }, [
                      i(
                        'label',
                        {
                          class: {
                            'has-errors':
                              null !== t.form.name && !t.form.name.length,
                          },
                        },
                        [
                          i('input', {
                            directives: [
                              {
                                name: 'model',
                                rawName: 'v-model',
                                value: t.form.name,
                                expression: 'form.name',
                              },
                            ],
                            attrs: { type: 'text', placeholder: 'Name' },
                            domProps: { value: t.form.name },
                            on: {
                              input: function (e) {
                                e.target.composing ||
                                  t.$set(t.form, 'name', e.target.value)
                              },
                            },
                          }),
                          i('span', { staticClass: 'error-msg' }, [
                            t._v(t._s(t.errorMsg)),
                          ]),
                        ]
                      ),
                      i(
                        'label',
                        {
                          class: {
                            'has-errors':
                              null !== t.form.email && !t.validateEmail(),
                          },
                        },
                        [
                          i('input', {
                            directives: [
                              {
                                name: 'model',
                                rawName: 'v-model',
                                value: t.form.email,
                                expression: 'form.email',
                              },
                            ],
                            attrs: { type: 'email', placeholder: 'E-mail' },
                            domProps: { value: t.form.email },
                            on: {
                              input: function (e) {
                                e.target.composing ||
                                  t.$set(t.form, 'email', e.target.value)
                              },
                            },
                          }),
                          i('span', { staticClass: 'error-msg' }, [
                            t._v(t._s(t.emailErrorMsg)),
                          ]),
                        ]
                      ),
                      i(
                        'label',
                        {
                          class: {
                            'has-errors':
                              null !== t.form.message && !t.form.message.length,
                          },
                        },
                        [
                          i('textarea-autosize', {
                            attrs: {
                              'min-height': 45,
                              'max-height': 180,
                              placeholder: 'Message',
                            },
                            model: {
                              value: t.form.message,
                              callback: function (e) {
                                t.$set(t.form, 'message', e)
                              },
                              expression: 'form.message',
                            },
                          }),
                          i('span', { staticClass: 'error-msg' }, [
                            t._v(t._s(t.errorMsg)),
                          ]),
                        ],
                        1
                      ),
                      i(
                        'button',
                        {
                          staticClass: 'btn',
                          attrs: { type: 'submit' },
                          on: {
                            click: function (e) {
                              return (
                                e.preventDefault(), t.sub.apply(null, arguments)
                              )
                            },
                          },
                        },
                        [t._v('Send')]
                      ),
                    ]),
                  ]),
                  t._m(23),
                ]),
              ]),
              i('div', { staticClass: 'left-white' }),
              i('div', { staticClass: 'right-white' }),
            ]),
          ]),
          i('popup-component', {
            attrs: { active: t.popup },
            on: {
              close: function (e) {
                t.popup = !1
              },
            },
          }),
          i('footer', { attrs: { id: 'footer' } }, [
            t._m(24),
            i('div', { staticClass: 'wave' }, [
              i(
                'svg',
                { attrs: { viewBox: '0 0 1440 120', 'aria-hidden': 'true' } },
                [
                  i('path', {
                    attrs: {
                      d: 'M1440,21.2101911 L1440,120 L0,120 L0,21.2101911 C120,35.0700637 240,42 360,42 C480,42 600,35.0700637 720,21.2101911 C808.32779,12.416393 874.573633,6.87702029 918.737528,4.59207306 C972.491685,1.8109458 1026.24584,0.420382166 1080,0.420382166 C1200,0.420382166 1320,7.35031847 1440,21.2101911 Z',
                    },
                  }),
                ]
              ),
            ]),
            t._m(25),
          ]),
        ],
        1
      )
    }
    s._withStripped = !0
    var a = {
      render: s,
      staticRenderFns: [
        function () {
          var t = this.$createElement,
            e = this._self._c || t
          return e('div', { staticClass: 'visual-text' }, [
            e('h4', [
              this._v('Create and Grow'),
              e('br'),
              this._v('Digital products and services.'),
            ]),
            e('div', { staticClass: 'img-holder' }, [
              e('img', {
                attrs: {
                  src: '/wp-content/themes/avice/assets/img/Avice.svg',
                  alt: 'img',
                },
              }),
            ]),
          ])
        },
        function () {
          var t = this.$createElement,
            e = this._self._c || t
          return e('h1', [
            e('span', [
              this._v('We deliver innovations '),
              e('br'),
              this._v('to your business'),
            ]),
          ])
        },
        function () {
          var t = this.$createElement,
            e = this._self._c || t
          return e('h1', [
            e('span', [
              this._v('Experiences that '),
              e('br'),
              this._v('bring you profit'),
            ]),
          ])
        },
        function () {
          var t = this.$createElement,
            e = this._self._c || t
          return e('h1', [
            e('span', [
              this._v('Ukraine-based company with'),
              e('br'),
              this._v(' clients all over the globe'),
            ]),
          ])
        },
        function () {
          var t = this.$createElement,
            e = this._self._c || t
          return e('div', { staticClass: 'mob-social' }, [
            e('ul', { staticClass: 'social-icon' }, [
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
            ]),
          ])
        },
        function () {
          var t = this.$createElement,
            e = this._self._c || t
          return e('div', { staticClass: 'container' }, [
            e('div', { staticClass: 'caption-holder' }, [
              e('h2', { staticClass: 'word' }, [
                this._v('We create experiences'),
              ]),
              e('h2', { staticClass: 'word' }, [
                this._v('We build trust-worthy relations'),
              ]),
              e('p', [
                this._v(
                  'That improve your customer’s satisfaction and grow your business'
                ),
              ]),
            ]),
          ])
        },
        function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e
          return i('div', { staticClass: 'col-holder' }, [
            i('div', { staticClass: 'col' }, [
              i('div', { staticClass: 'img-holder show-in fadeInUp' }, [
                i('img', {
                  staticClass: 'show-in pulse',
                  attrs: {
                    src: '/wp-content/themes/avice/assets/img/q1-1.jpg',
                    alt: 'img',
                  },
                }),
              ]),
              i('div', { staticClass: 'col-text show-in fadeInUp' }, [
                i('h3', [t._v('Web Development')]),
                i('p', [
                  t._v(
                    'Engaging, reliable, and efficient solutions helping you achieve your business\n                                      goals'
                  ),
                ]),
              ]),
            ]),
            i('div', { staticClass: 'col' }, [
              i(
                'div',
                { staticClass: 'img-holder show-in fadeInUp delay500' },
                [
                  i('img', {
                    staticClass: 'show-in pulse delay1000',
                    attrs: {
                      src: '/wp-content/themes/avice/assets/img/q1-2.jpg',
                      alt: 'img',
                    },
                  }),
                ]
              ),
              i('div', { staticClass: 'col-text show-in fadeInUp delay500' }, [
                i('h3', [t._v('E-commerce Production')]),
                i('p', [
                  t._v(
                    'Traditional web platforms in combination with the newest tools for the prosper of\n                                      your company'
                  ),
                ]),
              ]),
            ]),
            i('div', { staticClass: 'col' }, [
              i('div', { staticClass: 'img-holder show-in fadeInUp' }, [
                i('img', {
                  staticClass: 'show-in pulse',
                  attrs: {
                    src: '/wp-content/themes/avice/assets/img/q1-3.jpg',
                    alt: 'img',
                  },
                }),
              ]),
              i('div', { staticClass: 'col-text show-in fadeInUp' }, [
                i('h3', [t._v('CRM & ERP Systems')]),
                i('p', [
                  t._v(
                    'Custom software development optimizing all business processes within several\n                                      clicks'
                  ),
                ]),
              ]),
            ]),
            i('div', { staticClass: 'col' }, [
              i(
                'div',
                { staticClass: 'img-holder show-in fadeInUp delay500' },
                [
                  i('img', {
                    staticClass: 'show-in pulse delay1000',
                    attrs: {
                      src: '/wp-content/themes/avice/assets/img/q1-4.jpg',
                      alt: 'img',
                    },
                  }),
                ]
              ),
              i('div', { staticClass: 'col-text show-in fadeInUp delay500' }, [
                i('h3', [t._v('Mobile Development')]),
                i('p', [
                  t._v(
                    'Intuitive applications broadening your target audience and bringing you\n                                      profit'
                  ),
                ]),
              ]),
            ]),
          ])
        },
        function () {
          var t = this.$createElement,
            e = this._self._c || t
          return e('div', { staticClass: 'caption-holder' }, [
            e('h2', { staticClass: 'word' }, [this._v('Work with us')]),
            e('h2', { staticClass: 'word' }, [
              this._v('Only top-skilled engineers'),
            ]),
            e('p', [
              this._v(
                'We’re a passionate team of professionals delivering only the best results'
              ),
            ]),
          ])
        },
        function () {
          var t = this.$createElement,
            e = this._self._c || t
          return e('div', { staticClass: 'col-text' }, [
            e('h3', [this._v('Innovative'), e('br'), this._v(' approach')]),
            e('p', { staticClass: 'show-in fadeInDown' }, [
              this._v(
                'Our team follows the latest innovations in order to bring unique impressions to your\n                                  customers. We’re\n                                  not afraid of challenges – we love overcoming them.'
              ),
            ]),
          ])
        },
        function () {
          var t = this.$createElement,
            e = this._self._c || t
          return e('div', { staticClass: 'col-text' }, [
            e('h3', [this._v('Experienced engineers')]),
            e('p', { staticClass: 'show-in fadeInDown delay500' }, [
              this._v(
                'Each member of our company has a great package of knowledge and experience to share.\n                                  As team members,\n                                  we work for perfect results together.'
              ),
            ]),
          ])
        },
        function () {
          var t = this.$createElement,
            e = this._self._c || t
          return e('div', { staticClass: 'col-text' }, [
            e('h3', [this._v('Long-term partnerships')]),
            e('p', { staticClass: 'show-in fadeInDown' }, [
              this._v(
                'We create web platforms and improve them along the way. Some of our projects are\n                                  several years old,\n                                  and they’re built on a complete trust between us and our clients.'
              ),
            ]),
          ])
        },
        function () {
          var t = this.$createElement,
            e = this._self._c || t
          return e('div', { staticClass: 'col-text' }, [
            e('h3', [this._v('Business-driven development')]),
            e('p', { staticClass: 'show-in fadeInDown delay500' }, [
              this._v(
                'Lines of our code contain the value of your business, that’s why we create products\n                                  with users in\n                                  mind. Your initial idea and our skill make a perfect match achieving your business\n                                  goals.'
              ),
            ]),
          ])
        },
        function () {
          var t = this.$createElement,
            e = this._self._c || t
          return e('div', { staticClass: 'caption-holder' }, [
            e('h2', { staticClass: 'word' }, [this._v('Latest works')]),
            e('h2', { staticClass: 'word' }, [this._v("We're proud to share")]),
            e('p', [
              this._v(
                'Our works are based on trust and confidence, that’s why they are so beautiful.'
              ),
            ]),
          ])
        },
        function () {
          var t = this.$createElement,
            e = this._self._c || t
          return e('div', { staticClass: 'rectangular-holder1' }, [
            e('div', { staticClass: 'rectangle1' }),
            e('div', { staticClass: 'rectangle2' }),
            e('div', { staticClass: 'rectangle3' }),
            e('div', { staticClass: 'rectangle4' }),
            e('div', { staticClass: 'rectangle5' }),
            e('div', { staticClass: 'rectangle6' }),
            e('div', { staticClass: 'rectangle7' }),
          ])
        },
        function () {
          var t = this.$createElement,
            e = this._self._c || t
          return e('div', { staticClass: 'prev-works' }, [
            e('span', { staticClass: 'dots' }),
            e('div', { staticClass: 'img-holder' }, [
              e('img', {
                attrs: {
                  src: '/wp-content/themes/avice/assets/img/works1-1.jpg',
                  alt: 'img',
                },
              }),
            ]),
          ])
        },
        function () {
          var t = this.$createElement,
            e = this._self._c || t
          return e('div', { staticClass: 'prev-works' }, [
            e('span', { staticClass: 'dots' }),
            e('div', { staticClass: 'img-holder' }, [
              e('img', {
                attrs: {
                  src: '/wp-content/themes/avice/assets/img/works1-2.jpg',
                  alt: 'img',
                },
              }),
            ]),
          ])
        },
        function () {
          var t = this.$createElement,
            e = this._self._c || t
          return e('div', { staticClass: 'prev-works' }, [
            e('span', { staticClass: 'dots' }),
            e('div', { staticClass: 'img-holder' }, [
              e('img', {
                attrs: {
                  src: '/wp-content/themes/avice/assets/img/works1-3.jpg',
                  alt: 'img',
                },
              }),
            ]),
          ])
        },
        function () {
          var t = this.$createElement,
            e = this._self._c || t
          return e('div', { staticClass: 'rectangular-holder2' }, [
            e('div', { staticClass: 'rectangle1' }),
            e('div', { staticClass: 'rectangle2' }),
            e('div', { staticClass: 'rectangle3' }),
            e('div', { staticClass: 'rectangle4' }),
            e('div', { staticClass: 'rectangle5' }),
            e('div', { staticClass: 'rectangle6' }),
            e('div', { staticClass: 'rectangle7' }),
          ])
        },
        function () {
          var t = this.$createElement,
            e = this._self._c || t
          return e('h2', [
            e('span', { staticClass: 'caption-slide' }, [this._v('DIRETTO')]),
            e('span', { staticClass: 'caption-text' }, [
              this._v('Revolutionary job platform for the Swedish audience'),
            ]),
          ])
        },
        function () {
          var t = this.$createElement,
            e = this._self._c || t
          return e('h2', [
            e('span', { staticClass: 'caption-slide' }, [this._v('HUMMEL')]),
            e('span', { staticClass: 'caption-text' }, [
              this._v(
                'E-commerce solution for one of the largest EU sportswear brands'
              ),
            ]),
          ])
        },
        function () {
          var t = this.$createElement,
            e = this._self._c || t
          return e('h2', [
            e('span', { staticClass: 'caption-slide' }, [this._v('GROVE')]),
            e('span', { staticClass: 'caption-text' }, [
              this._v('Blockchain-based solution for enterprises'),
            ]),
          ])
        },
        function () {
          var t = this.$createElement,
            e = this._self._c || t
          return e('ul', { staticClass: 'brend' }, [
            e('li', [
              e('img', {
                attrs: {
                  src: '/wp-content/themes/avice/assets/img/google.svg',
                  alt: 'img',
                },
              }),
            ]),
            e('li', [
              e('img', {
                attrs: {
                  src: '/wp-content/themes/avice/assets/img/grove.svg',
                  alt: 'img',
                },
              }),
            ]),
            e('li', [
              e('img', {
                attrs: {
                  src: '/wp-content/themes/avice/assets/img/liva.svg',
                  alt: 'img',
                },
              }),
            ]),
            e('li', [
              e('img', {
                attrs: {
                  src: '/wp-content/themes/avice/assets/img/hummel.svg',
                  alt: 'img',
                },
              }),
            ]),
            e('li', [
              e('img', {
                attrs: {
                  src: '/wp-content/themes/avice/assets/img/diretto.svg',
                  alt: 'img',
                },
              }),
            ]),
            e('li', [
              e('img', {
                attrs: {
                  src: '/wp-content/themes/avice/assets/img/sony.svg',
                  alt: 'img',
                },
              }),
            ]),
            e('li', [
              e('img', {
                attrs: {
                  src: '/wp-content/themes/avice/assets/img/telkom.svg',
                  alt: 'img',
                },
              }),
            ]),
          ])
        },
        function () {
          var t = this.$createElement,
            e = this._self._c || t
          return e('div', { staticClass: 'caption-holder' }, [
            e('h2', { staticClass: 'word' }, [this._v('Got an app idea?')]),
            e('h2', { staticClass: 'word' }, [
              this._v('We know what to do next'),
            ]),
            e('p', [this._v("Let's talk about getting it to market.")]),
          ])
        },
        function () {
          var t = this.$createElement,
            e = this._self._c || t
          return e('div', { staticClass: 'col' }, [
            e('div', { staticClass: 'img-holder' }, [
              e('img', {
                attrs: {
                  src: '/wp-content/themes/avice/assets/img/img-form.png',
                  alt: 'img',
                },
              }),
            ]),
          ])
        },
        function () {
          var t = this.$createElement,
            e = this._self._c || t
          return e('div', { staticClass: 'footer-wave' }, [
            e('div', { staticClass: 'imperfect-circle' }),
            e('div', { staticClass: 'imperfect-circle' }),
            e('div', { staticClass: 'imperfect-circle' }),
          ])
        },
        function () {
          var t = this.$createElement,
            e = this._self._c || t
          return e('div', { staticClass: 'container' }, [
            e('div', { staticClass: 'footer-holder' }, [
              e('strong', { staticClass: 'logo-footer' }, [
                e('img', {
                  attrs: {
                    src: '/wp-content/themes/avice/assets/img/Avice.svg',
                    alt: 'img',
                  },
                }),
              ]),
              e('div', { staticClass: 'copyright' }, [
                this._v('©2023 AVICE GLOBAL. All Rights Reserved'),
              ]),
            ]),
          ])
        },
      ],
    }
    e.a = a
  },
  '/TYz': function (t, e, i) {
    'use strict'
    Object.defineProperty(e, '__esModule', { value: !0 })
    var s = i('Iw40'),
      a = i('+ptz'),
      r = i('VU/8')(s.a, a.a, !1, null, null, null)
    ;(r.options.__file = 'pages/index.vue'), (e.default = r.exports)
  },
  '3fkM': function (t, e, i) {
    'use strict'
    var s = function () {
      var t = this.$createElement,
        e = this._self._c || t
      return e('div', { staticClass: 'rotation-holder' }, [
        e('div', { staticClass: 'rotation' }, [
          e('div', {
            style: {
              transform: 'rotate(' + (150 + 60 * this.rotationStep) + 'deg)',
            },
          }),
        ]),
      ])
    }
    s._withStripped = !0
    var a = { render: s, staticRenderFns: [] }
    e.a = a
  },
  D2ze: function (t, e, i) {
    'use strict'
    var s = i('vvqp'),
      a = i('Uo/M'),
      r = i('VU/8')(s.a, a.a, !1, null, null, null)
    ;(r.options.__file = 'components/my-wow-js.vue'), (e.a = r.exports)
  },
  Em8J: function (t, e, i) {
    'use strict'
    var s = function () {
      var t = this.$createElement
      return (this._self._c || t)(
        'div',
        {
          staticClass: 'contact-popup',
          class: { sendPopUp: this.active, closePopUp: this.popupClose },
          on: { click: this.close },
        },
        [this._m(0)]
      )
    }
    s._withStripped = !0
    var a = {
      render: s,
      staticRenderFns: [
        function () {
          var t = this.$createElement,
            e = this._self._c || t
          return e('div', { staticClass: 'popup-text' }, [
            e('div', { staticClass: 'anim-holder' }, [
              e('img', {
                attrs: {
                  src: '/wp-content/themes/avice/assets/img/Avice.svg',
                  alt: 'img',
                },
              }),
            ]),
            e('div', { staticClass: 'anim-holder' }, [
              e('h4', [this._v("We're here for you! ")]),
            ]),
            e('div', { staticClass: 'anim-holder' }, [
              e('p', [
                this._v(
                  "You're already one step closer\n                to the launch of your product!"
                ),
              ]),
            ]),
          ])
        },
      ],
    }
    e.a = a
  },
  EzLX: function (t, e, i) {
    'use strict'
    var s = function () {
      var t = this,
        e = t.$createElement
      return (t._self._c || e)('textarea', {
        directives: [
          {
            name: 'model',
            rawName: 'v-model',
            value: t.val,
            expression: 'val',
          },
        ],
        style: t.computedStyles,
        attrs: { rows: '1' },
        domProps: { value: t.val },
        on: {
          focus: t.resize,
          input: function (e) {
            e.target.composing || (t.val = e.target.value)
          },
        },
      })
    }
    s._withStripped = !0
    var a = { render: s, staticRenderFns: [] }
    e.a = a
  },
  HZWW: function (t, e, i) {
    'use strict'
    e.a = {
      name: 'TextareaAutosize',
      created: function () {
        this.updateVal()
      },
      mounted: function () {
        this.resize()
      },
      props: {
        value: { type: [String, Number], default: '' },
        autosize: { type: Boolean, default: !0 },
        minHeight: { type: [Number], default: null },
        maxHeight: { type: [Number], default: null },
        important: { type: [Boolean, Array], default: !1 },
      },
      data: function () {
        return { val: null, maxHeightScroll: !1 }
      },
      computed: {
        computedStyles: function () {
          var t = {}
          return (
            this.autosize &&
              ((t.resize = this.isResizeImportant ? 'none !important' : 'none'),
              this.maxHeightScroll ||
                (t.overflow = this.isOverflowImportant
                  ? 'hidden !important'
                  : 'hidden')),
            t
          )
        },
        isResizeImportant: function () {
          var t = this.important
          return !0 === t || (Array.isArray(t) && t.includes('resize'))
        },
        isOverflowImportant: function () {
          var t = this.important
          return !0 === t || (Array.isArray(t) && t.includes('overflow'))
        },
        isHeightImportant: function () {
          var t = this.important
          return !0 === t || (Array.isArray(t) && t.includes('height'))
        },
      },
      methods: {
        updateVal: function () {
          this.val = this.value
        },
        resize: function () {
          var t = this.isHeightImportant ? 'important' : ''
          this.$el.style.setProperty('height', 'auto', t)
          var e = this.$el.scrollHeight + 1
          this.minHeight && (e = e < this.minHeight ? this.minHeight : e),
            this.maxHeight &&
              (e > this.maxHeight
                ? ((e = this.maxHeight), (this.maxHeightScroll = !0))
                : (this.maxHeightScroll = !1))
          var i = e + 'px'
          return this.$el.style.setProperty('height', i, t), this
        },
      },
      watch: {
        value: function () {
          this.updateVal()
        },
        val: function (t) {
          this.$nextTick(this.resize), this.$emit('input', t)
        },
      },
    }
  },
  'Ia+L': function (t, e, i) {
    'use strict'
    var s = i('HZWW'),
      a = i('EzLX'),
      r = i('VU/8')(s.a, a.a, !1, null, null, null)
    ;(r.options.__file = 'components/TextareaAutosize.vue'), (e.a = r.exports)
  },
  Iw40: function (t, e, i) {
    'use strict'
    var s = i('woOf'),
      a = i.n(s),
      r = i('mvHQ'),
      n = i.n(r),
      o = i('//Fk'),
      l = i.n(o),
      c = i('NPYj'),
      u = i('bX0i'),
      h = i('D2ze'),
      d = i('Ia+L'),
      v = i('MTAQ')
    e.a = {
      components: {
        Particles: c.a,
        Rotation: u.a,
        MyWowJs: h.a,
        TextareaAutosize: d.a,
        PopupComponent: v.a,
      },
      data: function () {
        return {
          hueArr: [218, 300, 255],
          worksBtnAnimating: !1,
          worksSlideDuration: 1e4,
          worksCurrentSlide: -1,
          worksFadingSlide: null,
          worksSliderInterval: null,
          worksLinks: [
            '/portfolio/diretto',
            '/portfolio/hummel',
            '/portfolio/grove',
          ],
          errorMsg: 'This field is required',
          emailErrorMsg: 'Enter valid email',
          popup: !1,
          form: { name: null, email: null, message: null },
        }
      },
      mounted: function () {
        this.$store.commit('setState', { sideHeader: !1 }),
          document.addEventListener('scroll', this.initWorksSlider),
          document.addEventListener('scroll', this.initWaves),
          this.initWorksSlider(),
          this.initWaves
        for (
          var t = document.getElementsByClassName('caption-holder'), e = 0;
          e < t.length;
          e++
        )
          this.animateText(t[e])
      },
      methods: {
        getWorksLink: function () {
          return -1 !== this.worksCurrentSlide
            ? this.worksLinks[this.worksCurrentSlide]
            : '/portfolio'
        },
        initWorksSlider: function () {
          ;(window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop) >
            this.$refs.worksSection.offsetTop -
              window.innerHeight +
              0.15 * this.$refs.worksSection.offsetHeight &&
            (this.startBtnAnimation(),
            this.setNextWorksSlide(),
            document.removeEventListener('scroll', this.initWorksSlider))
        },
        initWaves: function () {
          if (
            !(
              (window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop) < window.innerHeight
            )
          ) {
            document.removeEventListener('scroll', this.initWaves)
            var t = window.innerWidth >= 768 ? 'large' : 'small'
            new SineWaves({
              el: this.$refs.waves1,
              speed: 4,
              width: 500,
              height: 200,
              ease: 'SineInOut',
              wavesWidth: '70%',
              waves: {
                small: [
                  {
                    timeModifier: 4,
                    lineWidth: 2,
                    amplitude: -90,
                    wavelength: 80,
                  },
                  {
                    timeModifier: 2,
                    lineWidth: 2,
                    amplitude: -90,
                    wavelength: 100,
                  },
                ],
                large: [
                  {
                    timeModifier: 4,
                    lineWidth: 1,
                    amplitude: -40,
                    wavelength: 25,
                  },
                  {
                    timeModifier: 2,
                    lineWidth: 2,
                    amplitude: -25,
                    wavelength: 50,
                  },
                ],
              }[t],
              initialize: function () {
                var t = this.ctx.createLinearGradient(0, 0, this.width, 0)
                t.addColorStop(0, 'rgba(51, 204, 255, 0)'),
                  t.addColorStop(0.5, 'rgba(51, 204, 255, 0.5)'),
                  t.addColorStop(1, 'rgba(51, 204, 255, 1)')
                for (var e = -1, i = this.waves.length; ++e < i; )
                  this.waves[e].strokeStyle = t
                ;(e = void 0), (i = void 0), (t = void 0)
              },
            }),
              new SineWaves({
                el: this.$refs.waves2,
                speed: 2,
                width: 500,
                height: 200,
                ease: 'SineInOut',
                wavesWidth: '70%',
                waves: {
                  small: [
                    {
                      timeModifier: 4,
                      lineWidth: 2,
                      amplitude: -90,
                      wavelength: 80,
                    },
                    {
                      timeModifier: 2,
                      lineWidth: 2,
                      amplitude: -90,
                      wavelength: 100,
                    },
                  ],
                  large: [
                    {
                      timeModifier: 4,
                      lineWidth: 1,
                      amplitude: -40,
                      wavelength: 25,
                    },
                    {
                      timeModifier: 2,
                      lineWidth: 2,
                      amplitude: -25,
                      wavelength: 50,
                    },
                  ],
                }[t],
                initialize: function () {
                  var t = this.ctx.createLinearGradient(0, 0, this.width, 0)
                  t.addColorStop(0, 'rgba(51, 204, 255, 0)'),
                    t.addColorStop(0.5, 'rgba(51, 204, 255, 0.5)'),
                    t.addColorStop(1, 'rgba(51, 204, 255, 1)')
                  for (var e = -1, i = this.waves.length; ++e < i; )
                    this.waves[e].strokeStyle = t
                  ;(e = void 0), (i = void 0), (t = void 0)
                },
              }),
              new SineWaves({
                el: this.$refs.waves3,
                speed: 3,
                width: 500,
                height: 200,
                ease: 'SineInOut',
                wavesWidth: '70%',
                waves: {
                  small: [
                    {
                      timeModifier: 4,
                      lineWidth: 2,
                      amplitude: -90,
                      wavelength: 80,
                    },
                    {
                      timeModifier: 2,
                      lineWidth: 2,
                      amplitude: -90,
                      wavelength: 100,
                    },
                  ],
                  large: [
                    {
                      timeModifier: 4,
                      lineWidth: 1,
                      amplitude: -30,
                      wavelength: 25,
                    },
                    {
                      timeModifier: 2,
                      lineWidth: 2,
                      amplitude: -25,
                      wavelength: 50,
                    },
                  ],
                }[t],
                initialize: function () {
                  var t = this.ctx.createLinearGradient(0, 0, this.width, 0)
                  t.addColorStop(0, 'rgba(51, 204, 255, 0)'),
                    t.addColorStop(0.5, 'rgba(51, 204, 255, 0.5)'),
                    t.addColorStop(1, 'rgba(51, 204, 255, 1)')
                  for (var e = -1, i = this.waves.length; ++e < i; )
                    this.waves[e].strokeStyle = t
                  ;(e = void 0), (i = void 0), (t = void 0)
                },
              }),
              new SineWaves({
                el: this.$refs.waves4,
                speed: 2,
                width: 500,
                height: 200,
                ease: 'SineInOut',
                wavesWidth: '70%',
                waves: {
                  small: [
                    {
                      timeModifier: 4,
                      lineWidth: 2,
                      amplitude: -90,
                      wavelength: 80,
                    },
                    {
                      timeModifier: 2,
                      lineWidth: 2,
                      amplitude: -90,
                      wavelength: 100,
                    },
                  ],
                  large: [
                    {
                      timeModifier: 4,
                      lineWidth: 1,
                      amplitude: -30,
                      wavelength: 25,
                    },
                    {
                      timeModifier: 2,
                      lineWidth: 2,
                      amplitude: -25,
                      wavelength: 50,
                    },
                  ],
                }[t],
                initialize: function () {
                  var t = this.ctx.createLinearGradient(0, 0, this.width, 0)
                  t.addColorStop(0, 'rgba(51, 204, 255, 0)'),
                    t.addColorStop(0.5, 'rgba(51, 204, 255, 0.5)'),
                    t.addColorStop(1, 'rgba(51, 204, 255, 1)')
                  for (var e = -1, i = this.waves.length; ++e < i; )
                    this.waves[e].strokeStyle = t
                  ;(e = void 0), (i = void 0), (t = void 0)
                },
              })
          }
        },
        setNextWorksSlide: function () {
          var t = this
          clearInterval(this.worksSliderInterval),
            (this.worksSliderInterval = setInterval(function () {
              t.setNextWorksSlide()
            }, this.worksSlideDuration + 500)),
            (this.worksFadingSlide = this.worksCurrentSlide),
            (this.worksBtnAnimating = !1),
            clearTimeout(this.worksSlidertmieout),
            (this.worksSlidertmieout = setTimeout(function () {
              t.worksCurrentSlide >= 2
                ? (t.worksCurrentSlide = 0)
                : t.worksCurrentSlide++,
                t.startBtnAnimation()
            }, 500))
        },
        startBtnAnimation: function () {
          var t = this
          ;(this.worksBtnAnimating = !1),
            setTimeout(function () {
              t.worksBtnAnimating = !0
            }, 100)
        },
        animateText: function (t) {
          function e(t, e) {
            setTimeout(function () {
              t[e].className = 'letter out'
            }, 15 * e)
          }
          function i(t, e) {
            setTimeout(function () {
              t[e].className = 'letter in'
            }, 340 + 15 * e)
          }
          function s(t) {
            var e = t.innerHTML
            t.innerHTML = ''
            for (var i = [], s = 0; s < e.length; s++) {
              var a = document.createElement('span')
              ;(a.className = 'letter'),
                (a.innerHTML = e.charAt(s)),
                ' ' === a.innerHTML && (a.innerHTML = '&nbsp;'),
                t.appendChild(a),
                i.push(a)
            }
            n.push(i)
          }
          var a = t || document
          console.log(a)
          var r = a.querySelectorAll('.word'),
            n = [],
            o = 0
          if (r.length) {
            r[o].style.opacity = 1
            for (var l = 0; l < r.length; l++) s(r[l])
            setTimeout(function t() {
              var s = n[o]
              for (
                var a = o == r.length - 1 ? n[0] : n[o + 1], l = 0;
                l < s.length;
                l++
              )
                e(s, l)
              for (l = 0; l < a.length; l++)
                (a[l].className = 'letter behind'),
                  (a[0].parentElement.style.opacity = 1),
                  i(a, l)
              ;(o = o == n.length - 1 ? 0 : o + 1), setTimeout(t, 5e3)
            }, 5e3)
          }
        },
        validateEmail: function () {
          return '' === this.form.email
            ? ((this.emailErrorMsg = this.errorMsg), !1)
            : !!(function (t) {
                return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                  t
                )
              })(this.form.email) ||
                ((this.emailErrorMsg = 'Enter valid email'), !1)
        },
        makeReq: function (t, e, i) {
          return new l.a(function (s, a) {
            var r = new XMLHttpRequest()
            r.open(t, e),
              r.setRequestHeader('Content-Type', 'application/json'),
              (r.onload = function () {
                this.status >= 200 && this.status < 300
                  ? s(r.response)
                  : a({ status: this.status, statusText: r.statusText })
              }),
              (r.onerror = function () {
                a({ status: this.status, statusText: r.statusText })
              }),
              console.log(i),
              r.send(n()(i))
          })
        },
        sub: function () {
          var t = this,
            e = 0
          for (var i in this.form) this.form[i] || ((this.form[i] = ''), e++)
          if ((this.validateEmail() || e++, !e)) {
            var s = a()({}, this.form),
              r = new FormData()
            for (var n in s) r.append(n, s[n])
            this.makeReq('POST', '/api/contact', s).then(function (e) {
              console.log(e),
                (t.popup = !0),
                (t.form.name = null),
                (t.form.email = null),
                (t.form.message = null)
            })
          }
        },
      },
      destroyed: function () {
        document.removeEventListener('scroll', this.initWorksSlider),
          document.removeEventListener('scroll', this.initWaves)
      },
    }
  },
  K6ED: function (t, e, i) {
    t.exports = { default: i('cnlX'), __esModule: !0 }
  },
  KXqY: function (t, e, i) {
    'use strict'
    var s = i('Zrlr'),
      a = i.n(s),
      r = i('wxAW'),
      n = i.n(r),
      o = (function () {
        function t(e) {
          a()(this, t),
            (this.loader = e),
            (this.calc = this.loader.calc),
            (this.ease = this.loader.ease),
            (this.sphereGeometry = new THREE.SphereBufferGeometry(1, 16, 16)),
            (this.boxGeometry = new THREE.BoxBufferGeometry(1, 1, 1)),
            (this.center = new THREE.Vector3()),
            (this.particles = []),
            (this.particleGroup = new THREE.Object3D()),
            this.particleGroup.scale.set(1e-4, 1e-4, 1e-4),
            this.loader.scene.add(this.particleGroup),
            (this.entering = !0),
            (this.enterProgress = 0),
            (this.enterRate = 0.015),
            (this.exiting = !1),
            (this.exitProgress = 0),
            (this.exitRate = 0.01),
            (this.duration = 1 / 0)
        }
        return (
          n()(t, [
            {
              key: 'update',
              value: function () {
                for (var t = this.particles.length; t--; )
                  this.particles[t].update()
                if (this.entering && this.enterProgress < 1) {
                  ;(this.enterProgress +=
                    this.enterRate * this.loader.deltaTimeNormal),
                    this.enterProgress > 1 &&
                      ((this.enterProgress = 1), (this.entering = !1))
                  var e = this.ease.inOutExpo(this.enterProgress, 0, 1, 1)
                  this.particleGroup.scale.set(e, e, e)
                }
              },
            },
          ]),
          t
        )
      })()
    e.a = o
  },
  Kh5d: function (t, e, i) {
    var s = i('sB3e'),
      a = i('PzxK')
    i('uqUo')('getPrototypeOf', function () {
      return function (t) {
        return a(s(t))
      }
    })
  },
  MTAQ: function (t, e, i) {
    'use strict'
    var s = i('ZbFH'),
      a = i('Em8J'),
      r = i('VU/8')(s.a, a.a, !1, null, null, null)
    ;(r.options.__file = 'components/popup.vue'), (e.a = r.exports)
  },
  NPYj: function (t, e, i) {
    'use strict'
    var s = i('YwSx'),
      a = i('OoyJ'),
      r = i('VU/8')(s.a, a.a, !1, null, null, null)
    ;(r.options.__file = 'components/particles.vue'), (e.a = r.exports)
  },
  OoyJ: function (t, e, i) {
    'use strict'
    var s = function () {
      var t = this.$createElement
      return (this._self._c || t)('div', { staticClass: 'loader' })
    }
    s._withStripped = !0
    var a = { render: s, staticRenderFns: [] }
    e.a = a
  },
  OvRC: function (t, e, i) {
    t.exports = { default: i('oM7Q'), __esModule: !0 }
  },
  Pf15: function (t, e, i) {
    'use strict'
    e.__esModule = !0
    var s = n(i('kiBT')),
      a = n(i('OvRC')),
      r = n(i('pFYg'))
    function n(t) {
      return t && t.__esModule ? t : { default: t }
    }
    e.default = function (t, e) {
      if ('function' != typeof e && null !== e)
        throw new TypeError(
          'Super expression must either be null or a function, not ' +
            (void 0 === e ? 'undefined' : (0, r.default)(e))
        )
      ;(t.prototype = (0, a.default)(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        e && (s.default ? (0, s.default)(t, e) : (t.__proto__ = e))
    }
  },
  'Uo/M': function (t, e, i) {
    'use strict'
    var s = function () {
      var t = this.$createElement
      return (this._self._c || t)(
        'div',
        { staticClass: 'wow-cnt' },
        [this._t('default')],
        2
      )
    }
    s._withStripped = !0
    var a = { render: s, staticRenderFns: [] }
    e.a = a
  },
  VwvN: function (t, e, i) {
    'use strict'
    var s = i('Zrlr'),
      a = i.n(s),
      r = i('wxAW'),
      n = i.n(r),
      o = (function () {
        function t() {
          a()(this, t)
        }
        return (
          n()(t, [
            {
              key: 'inQuad',
              value: function (t, e, i, s) {
                return i * (t /= s) * t + e
              },
            },
            {
              key: 'outQuad',
              value: function (t, e, i, s) {
                return -i * (t /= s) * (t - 2) + e
              },
            },
            {
              key: 'inOutQuad',
              value: function (t, e, i, s) {
                return (t /= s / 2) < 1
                  ? (i / 2) * t * t + e
                  : (-i / 2) * (--t * (t - 2) - 1) + e
              },
            },
            {
              key: 'inCubic',
              value: function (t, e, i, s) {
                return i * (t /= s) * t * t + e
              },
            },
            {
              key: 'outCubic',
              value: function (t, e, i, s) {
                return i * ((t = t / s - 1) * t * t + 1) + e
              },
            },
            {
              key: 'inOutCubic',
              value: function (t, e, i, s) {
                return (t /= s / 2) < 1
                  ? (i / 2) * t * t * t + e
                  : (i / 2) * ((t -= 2) * t * t + 2) + e
              },
            },
            {
              key: 'inQuart',
              value: function (t, e, i, s) {
                return i * (t /= s) * t * t * t + e
              },
            },
            {
              key: 'outQuart',
              value: function (t, e, i, s) {
                return -i * ((t = t / s - 1) * t * t * t - 1) + e
              },
            },
            {
              key: 'inOutQuart',
              value: function (t, e, i, s) {
                return (t /= s / 2) < 1
                  ? (i / 2) * t * t * t * t + e
                  : (-i / 2) * ((t -= 2) * t * t * t - 2) + e
              },
            },
            {
              key: 'inQuint',
              value: function (t, e, i, s) {
                return i * (t /= s) * t * t * t * t + e
              },
            },
            {
              key: 'outQuint',
              value: function (t, e, i, s) {
                return i * ((t = t / s - 1) * t * t * t * t + 1) + e
              },
            },
            {
              key: 'inOutQuint',
              value: function (t, e, i, s) {
                return (t /= s / 2) < 1
                  ? (i / 2) * t * t * t * t * t + e
                  : (i / 2) * ((t -= 2) * t * t * t * t + 2) + e
              },
            },
            {
              key: 'inSine',
              value: function (t, e, i, s) {
                return -i * Math.cos((t / s) * (Math.PI / 2)) + i + e
              },
            },
            {
              key: 'outSine',
              value: function (t, e, i, s) {
                return i * Math.sin((t / s) * (Math.PI / 2)) + e
              },
            },
            {
              key: 'inOutSine',
              value: function (t, e, i, s) {
                return (-i / 2) * (Math.cos((Math.PI * t) / s) - 1) + e
              },
            },
            {
              key: 'inExpo',
              value: function (t, e, i, s) {
                return 0 == t ? e : i * Math.pow(2, 10 * (t / s - 1)) + e
              },
            },
            {
              key: 'outExpo',
              value: function (t, e, i, s) {
                return t == s ? e + i : i * (1 - Math.pow(2, (-10 * t) / s)) + e
              },
            },
            {
              key: 'inOutExpo',
              value: function (t, e, i, s) {
                return 0 == t
                  ? e
                  : t == s
                  ? e + i
                  : (t /= s / 2) < 1
                  ? (i / 2) * Math.pow(2, 10 * (t - 1)) + e
                  : (i / 2) * (2 - Math.pow(2, -10 * --t)) + e
              },
            },
            {
              key: 'inCirc',
              value: function (t, e, i, s) {
                return -i * (Math.sqrt(1 - (t /= s) * t) - 1) + e
              },
            },
            {
              key: 'outCirc',
              value: function (t, e, i, s) {
                return i * Math.sqrt(1 - (t = t / s - 1) * t) + e
              },
            },
            {
              key: 'inOutCirc',
              value: function (t, e, i, s) {
                return (t /= s / 2) < 1
                  ? (-i / 2) * (Math.sqrt(1 - t * t) - 1) + e
                  : (i / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
              },
            },
            {
              key: 'inElastic',
              value: function (t, e, i, s) {
                var a = 1.70158,
                  r = 0,
                  n = i
                if (0 == t) return e
                if (1 == (t /= s)) return e + i
                if ((r || (r = 0.3 * s), n < Math.abs(i))) {
                  n = i
                } else a = (r / (2 * Math.PI)) * Math.asin(i / n)
                return (
                  -n *
                    Math.pow(2, 10 * (t -= 1)) *
                    Math.sin(((t * s - a) * (2 * Math.PI)) / r) +
                  e
                )
              },
            },
            {
              key: 'outElastic',
              value: function (t, e, i, s) {
                var a = 1.70158,
                  r = 0,
                  n = i
                if (0 == t) return e
                if (1 == (t /= s)) return e + i
                if ((r || (r = 0.3 * s), n < Math.abs(i))) {
                  n = i
                } else a = (r / (2 * Math.PI)) * Math.asin(i / n)
                return (
                  n *
                    Math.pow(2, -10 * t) *
                    Math.sin(((t * s - a) * (2 * Math.PI)) / r) +
                  i +
                  e
                )
              },
            },
            {
              key: 'inOutElastic',
              value: function (t, e, i, s) {
                var a = 1.70158,
                  r = 0,
                  n = i
                if (0 == t) return e
                if (2 == (t /= s / 2)) return e + i
                if ((r || (r = s * (0.3 * 1.5)), n < Math.abs(i))) {
                  n = i
                } else a = (r / (2 * Math.PI)) * Math.asin(i / n)
                return t < 1
                  ? n *
                      Math.pow(2, 10 * (t -= 1)) *
                      Math.sin(((t * s - a) * (2 * Math.PI)) / r) *
                      -0.5 +
                      e
                  : n *
                      Math.pow(2, -10 * (t -= 1)) *
                      Math.sin(((t * s - a) * (2 * Math.PI)) / r) *
                      0.5 +
                      i +
                      e
              },
            },
            {
              key: 'inBack',
              value: function (t, e, i, s, a) {
                return (
                  void 0 == a && (a = 1.70158),
                  i * (t /= s) * t * ((a + 1) * t - a) + e
                )
              },
            },
            {
              key: 'outBack',
              value: function (t, e, i, s, a) {
                return (
                  void 0 == a && (a = 1.70158),
                  i * ((t = t / s - 1) * t * ((a + 1) * t + a) + 1) + e
                )
              },
            },
            {
              key: 'inOutBack',
              value: function (t, e, i, s, a) {
                return (
                  void 0 == a && (a = 1.70158),
                  (t /= s / 2) < 1
                    ? (i / 2) * (t * t * ((1 + (a *= 1.525)) * t - a)) + e
                    : (i / 2) *
                        ((t -= 2) * t * ((1 + (a *= 1.525)) * t + a) + 2) +
                      e
                )
              },
            },
          ]),
          t
        )
      })()
    e.a = o
  },
  YwSx: function (t, e, i) {
    'use strict'
    var s = i('iih8'),
      a = i('npfj')
    e.a = {
      props: { hue: { type: Number, default: 218 } },
      data: function () {
        return {}
      },
      mounted: function () {
        var t = document.createElement('canvas'),
          e = t.getContext('webgl') || t.getContext('experimental-webgl')
        e &&
          e instanceof WebGLRenderingContext &&
          (this.loader = new s.a(a.a, this.hue))
      },
      methods: {
        setHue: function (t) {
          this.loader && (this.loader.system.hue = t)
        },
      },
      watch: {
        hue: function () {
          this.setHue(this.hue)
        },
      },
      destroyed: function () {
        this.loader &&
          (this.loader.setupScene(),
          cancelAnimationFrame(this.loader.raf),
          delete this.loader)
      },
    }
  },
  ZaQb: function (t, e, i) {
    var s = i('EqjI'),
      a = i('77Pl'),
      r = function (t, e) {
        if ((a(t), !s(e) && null !== e))
          throw TypeError(e + ": can't set as prototype!")
      }
    t.exports = {
      set:
        Object.setPrototypeOf ||
        ('__proto__' in {}
          ? (function (t, e, s) {
              try {
                ;(s = i('+ZMJ')(
                  Function.call,
                  i('LKZe').f(Object.prototype, '__proto__').set,
                  2
                ))(t, []),
                  (e = !(t instanceof Array))
              } catch (t) {
                e = !0
              }
              return function (t, i) {
                return r(t, i), e ? (t.__proto__ = i) : s(t, i), t
              }
            })({}, !1)
          : void 0),
      check: r,
    }
  },
  ZbFH: function (t, e, i) {
    'use strict'
    e.a = {
      name: 'PopupComponent',
      props: { active: { type: Boolean, default: !1 } },
      data: function () {
        return { popupClose: !1 }
      },
      methods: {
        close: function () {
          this.$emit('close'), (this.popupClose = !0)
        },
      },
    }
  },
  Zrlr: function (t, e, i) {
    'use strict'
    ;(e.__esModule = !0),
      (e.default = function (t, e) {
        if (!(t instanceof e))
          throw new TypeError('Cannot call a class as a function')
      })
  },
  Zx67: function (t, e, i) {
    t.exports = { default: i('fS6E'), __esModule: !0 }
  },
  bX0i: function (t, e, i) {
    'use strict'
    var s = i('eRwN'),
      a = i('3fkM'),
      r = i('VU/8')(s.a, a.a, !1, null, null, null)
    ;(r.options.__file = 'components/rotation.vue'), (e.a = r.exports)
  },
  cnlX: function (t, e, i) {
    i('iInB')
    var s = i('FeBl').Object
    t.exports = function (t, e) {
      return s.getOwnPropertyDescriptor(t, e)
    }
  },
  eRwN: function (t, e, i) {
    'use strict'
    e.a = {
      props: { currentLayer: { type: Number, default: 0 } },
      data: function () {
        return { focused: !0, rotationStep: 0 }
      },
      mounted: function () {
        var t = this
        ;(window.onfocus = function () {
          t.focused = !0
        }),
          (window.onblur = function () {
            t.focused = !1
          })
      },
      watch: {
        currentLayer: function () {
          this.focused &&
            ((this.rotationStep += 1),
            (150 + 60 * this.rotationStep) % 90 == 0 &&
              (this.rotationStep += 1))
        },
      },
    }
  },
  exh5: function (t, e, i) {
    var s = i('kM2E')
    s(s.S, 'Object', { setPrototypeOf: i('ZaQb').set })
  },
  fS6E: function (t, e, i) {
    i('Kh5d'), (t.exports = i('FeBl').Object.getPrototypeOf)
  },
  'i/C/': function (t, e, i) {
    i('exh5'), (t.exports = i('FeBl').Object.setPrototypeOf)
  },
  iInB: function (t, e, i) {
    var s = i('TcQ7'),
      a = i('LKZe').f
    i('uqUo')('getOwnPropertyDescriptor', function () {
      return function (t, e) {
        return a(s(t), e)
      }
    })
  },
  iih8: function (t, e, i) {
    'use strict'
    var s = i('Zrlr'),
      a = i.n(s),
      r = i('wxAW'),
      n = i.n(r),
      o = i('kUXy'),
      l = i('VwvN'),
      c = (function () {
        function t(e, i) {
          a()(this, t),
            (this.calc = new o.a()),
            (this.ease = new l.a()),
            (this.dom = {
              html: document.documentElement,
              container: document.querySelector('.loader'),
            }),
            this.dom.html.classList.add('loading'),
            this.setupTime(),
            this.setupScene(),
            this.setupCamera(),
            this.setupRenderer(),
            this.listen(),
            this.onResize(),
            (this.system = new e(this, i)),
            this.loop()
        }
        return (
          n()(t, [
            {
              key: 'setupTime',
              value: function () {
                ;(this.timescale = 0.9),
                  (this.clock = new THREE.Clock()),
                  (this.deltaTimeSeconds =
                    this.clock.getDelta() * this.timescale),
                  (this.deltaTimeMilliseconds = 1e3 * this.deltaTimeSeconds),
                  (this.deltaTimeNormal =
                    this.deltaTimeMilliseconds / (1e3 / 60)),
                  (this.elapsedMilliseconds = 0)
              },
            },
            {
              key: 'setupScene',
              value: function () {
                this.scene = new THREE.Scene()
              },
            },
            {
              key: 'setupCamera',
              value: function () {
                ;(this.camera = new THREE.PerspectiveCamera(100, 0, 1e-4, 1e4)),
                  (this.cameraBaseX = this.isGrid ? -20 : 0),
                  (this.cameraBaseY = this.isGrid ? 15 : 0),
                  (this.cameraBaseZ = this.isGrid ? 20 : 30),
                  (this.camera.position.x = this.cameraBaseX),
                  (this.camera.position.y = this.cameraBaseY),
                  (this.camera.position.z = this.cameraBaseZ)
              },
            },
            {
              key: 'setupRenderer',
              value: function () {
                ;(this.renderer = new THREE.WebGLRenderer({
                  alpha: !0,
                  antialias: !0,
                })),
                  this.dom.container.appendChild(this.renderer.domElement)
              },
            },
            {
              key: 'update',
              value: function () {
                ;(this.deltaTimeSeconds = this.clock.getDelta()),
                  this.diffTime &&
                    ((this.deltaTimeSeconds -= this.diffTime),
                    (this.diffTime = 0)),
                  (this.deltaTimeSeconds *= this.timescale),
                  (this.deltaTimeMilliseconds = 1e3 * this.deltaTimeSeconds),
                  (this.deltaTimeNormal =
                    this.deltaTimeMilliseconds / (1e3 / 60)),
                  (this.elapsedMilliseconds += this.deltaTimeMilliseconds),
                  this.system.update(),
                  this.isOrbit && this.controls.update()
              },
            },
            {
              key: 'render',
              value: function () {
                this.renderer.render(this.scene, this.camera)
              },
            },
            {
              key: 'listen',
              value: function () {
                var t = this
                window.addEventListener('resize', function (e) {
                  return t.onResize(e)
                }),
                  (this.hidden = null),
                  (this.visibilityChange = null),
                  void 0 !== document.hidden
                    ? ((this.hidden = 'hidden'),
                      (this.visibilityChange = 'visibilitychange'))
                    : void 0 !== document.msHidden
                    ? ((this.hidden = 'msHidden'),
                      (this.visibilityChange = 'msvisibilitychange'))
                    : void 0 !== document.webkitHidden &&
                      ((this.hidden = 'webkitHidden'),
                      (this.visibilityChange = 'webkitvisibilitychange')),
                  void 0 === document.addEventListener ||
                    void 0 === document.hidden ||
                    window.addEventListener(
                      this.visibilityChange,
                      function (e) {
                        return t.onVisibilityChange(e)
                      }
                    )
              },
            },
            {
              key: 'onResize',
              value: function () {
                ;(this.width = window.innerWidth),
                  (this.height = window.innerHeight),
                  (this.dpr = window.devicePixelRatio > 1 ? 2 : 1),
                  (this.camera.aspect = this.width / this.height),
                  this.camera.updateProjectionMatrix(),
                  this.renderer.setPixelRatio(this.dpr),
                  this.renderer.setSize(this.width, this.height)
              },
            },
            {
              key: 'onTimescaleRangeChange',
              value: function (t) {
                ;(this.timescale = parseFloat(this.dom.timescaleRange.value)),
                  (this.dom.timescaleValue.innerHTML =
                    this.timescale.toFixed(1))
              },
            },
            {
              key: 'onVisibilityChange',
              value: function (t) {
                document.hidden
                  ? (this.blurTime = Date.now())
                  : ((this.focusTime = Date.now()),
                    this.blurTime &&
                      (this.diffTime = (this.focusTime - this.blurTime) / 1e3))
              },
            },
            {
              key: 'loop',
              value: function () {
                var t = this
                this.update(),
                  this.render(),
                  (this.raf = window.requestAnimationFrame(function () {
                    return t.loop()
                  }))
              },
            },
          ]),
          t
        )
      })()
    e.a = c
  },
  kUXy: function (t, e, i) {
    'use strict'
    var s = i('Zrlr'),
      a = i.n(s),
      r = i('wxAW'),
      n = i.n(r),
      o = (function () {
        function t() {
          a()(this, t)
        }
        return (
          n()(t, [
            {
              key: 'rand',
              value: function (t, e, i) {
                void 0 === e && ((e = t), (t = 0))
                var s = Math.random()
                return i && (s = i(Math.random(), 0, 1, 1)), s * (e - t) + t
              },
            },
            {
              key: 'randInt',
              value: function (t, e, i) {
                void 0 === e && ((e = t), (t = 0))
                Math.random()
                return (
                  i && i(Math.random(), 0, 1, 1),
                  Math.floor(Math.random() * (e - t + 1)) + t
                )
              },
            },
            {
              key: 'randArr',
              value: function (t) {
                return t[Math.floor(Math.random() * t.length)]
              },
            },
            {
              key: 'map',
              value: function (t, e, i, s, a) {
                return ((t - e) / (i - e)) * (a - s) + s
              },
            },
            {
              key: 'clamp',
              value: function (t, e, i) {
                return Math.max(Math.min(t, i), e)
              },
            },
            {
              key: 'lerp',
              value: function (t, e, i) {
                return t + (e - t) * i
              },
            },
            {
              key: 'roundToUpperInterval',
              value: function (t, e) {
                return t % e == 0 && (t += 1e-4), Math.ceil(t / e) * e
              },
            },
            {
              key: 'roundToLowerInterval',
              value: function (t, e) {
                return t % e == 0 && (t -= 1e-4), Math.floor(t / e) * e
              },
            },
            {
              key: 'roundToNearestInterval',
              value: function (t, e) {
                return Math.round(t / e) * e
              },
            },
            {
              key: 'intersectSphere',
              value: function (t, e) {
                return (
                  Math.sqrt(
                    (t.x - e.x) * (t.x - e.x) +
                      (t.y - e.y) * (t.y - e.y) +
                      (t.z - e.z) * (t.z - e.z)
                  ) <
                  t.radius + e.radius
                )
              },
            },
            {
              key: 'getIndexFromCoords',
              value: function (t, e, i) {
                return t + e * i
              },
            },
            {
              key: 'getCoordsFromIndex',
              value: function (t, e) {
                return { x: t % e, y: Math.floor(t / e) }
              },
            },
            {
              key: 'visibleHeightAtZDepth',
              value: function (t, e) {
                var i = e.position.z
                t < i ? (t -= i) : (t += i)
                var s = (e.fov * Math.PI) / 180
                return 2 * Math.tan(s / 2) * Math.abs(t)
              },
            },
            {
              key: 'visibleWidthAtZDepth',
              value: function (t, e) {
                return this.visibleHeightAtZDepth(t, e) * e.aspect
              },
            },
          ]),
          t
        )
      })()
    e.a = o
  },
  kiBT: function (t, e, i) {
    t.exports = { default: i('i/C/'), __esModule: !0 }
  },
  npfj: function (t, e, i) {
    'use strict'
    var s = i('Zx67'),
      a = i.n(s),
      r = i('Zrlr'),
      n = i.n(r),
      o = i('wxAW'),
      l = i.n(o),
      c = i('zwoO'),
      u = i.n(c),
      h = i('yEsh'),
      d = i.n(h),
      v = i('Pf15'),
      m = i.n(v),
      f = i('KXqY'),
      p = i('rZcW'),
      g = (function (t) {
        function e(t, i) {
          n()(this, e)
          var s = u()(this, (e.__proto__ || a()(e)).call(this, t))
          ;(s.duration = 9300),
            (s.simplex = new FastSimplexNoise()),
            (s.color = new THREE.Color()),
            (s.hue = i),
            (s.texture = s.generateTexture()),
            (s.size = 10),
            (s.scale = 1),
            (s.base = 20),
            (s.count = s.base * s.base * s.base),
            (s.geometry = new THREE.BufferGeometry()),
            (s.parts = []),
            (s.positions = new Float32Array(3 * s.count)),
            (s.colors = new Float32Array(4 * s.count)),
            (s.sizes = new Float32Array(s.count)),
            s.geometry.addAttribute(
              'position',
              new THREE.BufferAttribute(s.positions, 3)
            ),
            s.geometry.addAttribute(
              'color',
              new THREE.BufferAttribute(s.colors, 4)
            ),
            s.geometry.addAttribute(
              'size',
              new THREE.BufferAttribute(s.sizes, 1)
            )
          for (var r = 0; r < s.count; r++) {
            var o = s.calc.rand(0.1, 0.8)
            s.parts.push({
              offset: 0,
              position: new THREE.Vector3(
                s.calc.rand(-s.size / 2, s.size / 2),
                s.calc.rand(-s.size / 2, s.size / 2),
                s.calc.rand(-s.size / 2, s.size / 2)
              ),
              baseSize: o,
              size: o,
              r: 1,
              g: 1,
              b: 1,
              a: 0,
              life: 2,
              decay: s.calc.rand(0.05, 0.15),
              firstRun: !0,
            })
          }
          return (
            (s.material = new THREE.ShaderMaterial({
              uniforms: { texture: { type: 't', value: s.texture } },
              vertexShader:
                '\n\t\t\t\tattribute float size;\n\t\t\t\tattribute vec4 color;\n\t\t\t\tvarying vec4 vColor;\n\t\t\t\tvoid main() {\n\t\t\t\t\tvColor = color;\n\t\t\t\t\tvec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\n\t\t\t\t\tgl_PointSize = size * (300.0 / length(mvPosition.xyz));\n\t\t\t\t\tgl_Position = projectionMatrix * mvPosition;\n\t\t\t\t}\n\t\t\t',
              fragmentShader:
                '\n\t\t\t\tuniform sampler2D texture;\n\t\t\t\tvarying vec4 vColor;\n\t\t\t\tvoid main(void) {\n\t\t\t\t\tgl_FragColor = vColor * texture2D(texture, gl_PointCoord);\n\t\t\t\t}\n\t\t\t',
              blending: THREE.AdditiveBlending,
              depthTest: !1,
              transparent: !0,
            })),
            (s.mesh = new THREE.Points(s.geometry, s.material)),
            s.particleGroup.add(s.mesh),
            s.updateParticleAttributes(!0, !0, !0),
            (s.osc = new p.a(0, 0.015, !0, !1)),
            s.reset(),
            s
          )
        }
        return (
          m()(e, t),
          l()(e, [
            {
              key: 'reset',
              value: function () {
                this.osc.reset()
              },
            },
            {
              key: 'generateTexture',
              value: function () {
                var t = document.createElement('canvas'),
                  e = t.getContext('2d')
                ;(t.width = 128), (t.height = 128)
                var i = e.createRadialGradient(64, 64, 0, 64, 64, 51.2)
                i.addColorStop(0, 'hsla(0, 0%, 100%, 1)'),
                  i.addColorStop(1, 'hsla(0, 0%, 100%, 0)'),
                  e.beginPath(),
                  e.arc(64, 64, 64, 0, 2 * Math.PI),
                  (e.fillStyle = i),
                  e.fill()
                var s = new THREE.Texture(t)
                return (s.needsUpdate = !0), s
              },
            },
            {
              key: 'updateParticleAttributes',
              value: function (t, e, i) {
                for (var s = this.count; s--; ) {
                  var a = this.parts[s]
                  t &&
                    ((this.colors[4 * s + 0] = a.r),
                    (this.colors[4 * s + 1] = a.g),
                    (this.colors[4 * s + 2] = a.b),
                    (this.colors[4 * s + 3] = a.a)),
                    e &&
                      ((this.positions[3 * s + 0] = a.position.x),
                      (this.positions[3 * s + 1] = a.position.y),
                      (this.positions[3 * s + 2] = a.position.z)),
                    i && (this.sizes[s] = a.size)
                }
                t && (this.geometry.attributes.color.needsUpdate = !0),
                  e && (this.geometry.attributes.position.needsUpdate = !0),
                  i && (this.geometry.attributes.size.needsUpdate = !0)
              },
            },
            {
              key: 'replay',
              value: function () {
                d()(
                  e.prototype.__proto__ || a()(e.prototype),
                  'replay',
                  this
                ).call(this),
                  this.reset()
              },
            },
            {
              key: 'update',
              value: function () {
                d()(
                  e.prototype.__proto__ || a()(e.prototype),
                  'update',
                  this
                ).call(this),
                  this.osc.update(this.loader.deltaTimeNormal),
                  (this.oscEased = this.osc.val(this.ease.inOutExpo))
                for (
                  var t = this.count,
                    i = 8e-4 * this.loader.elapsedMilliseconds,
                    s = this.calc.map(this.oscEased, 0, 1, 0, 1);
                  t--;

                ) {
                  var r = this.parts[t],
                    n = 0.1 * r.position.x,
                    o = 0.1 * r.position.y,
                    l = 0.1 * r.position.z,
                    c = 0.5 * this.simplex.getRaw4DNoise(n, o, l, i) + 0.5,
                    u =
                      0.5 *
                        this.simplex.getRaw4DNoise(
                          n + 100,
                          o + 100,
                          l + 100,
                          50 + i
                        ) +
                      0.5,
                    h =
                      0.5 *
                        this.simplex.getRaw4DNoise(
                          n + 200,
                          o + 200,
                          l + 200,
                          100 + i
                        ) +
                      0.5
                  if (
                    ((r.position.x +=
                      Math.sin(c * Math.PI * 2) *
                      s *
                      this.loader.deltaTimeNormal),
                    (r.position.y +=
                      Math.sin(u * Math.PI * 2) *
                      s *
                      this.loader.deltaTimeNormal),
                    (r.position.z +=
                      Math.sin(h * Math.PI * 2) *
                      s *
                      this.loader.deltaTimeNormal),
                    r.life > 0 &&
                      (r.life -=
                        r.decay * this.oscEased * this.loader.deltaTimeNormal),
                    r.life <= 0 || r.firstRun)
                  ) {
                    ;(r.life = 2),
                      (r.position.x = this.calc.rand(
                        -this.size / 2,
                        this.size / 2
                      )),
                      (r.position.y = this.calc.rand(
                        -this.size / 2,
                        this.size / 2
                      )),
                      (r.position.z = this.calc.rand(
                        -this.size / 2,
                        this.size / 2
                      ))
                    var v = Math.round(this.calc.rand(10, 50))
                    this.color.set('hsl(' + this.hue + ', 85%, ' + v + '%)'),
                      (r.r = this.color.r),
                      (r.g = this.color.g),
                      (r.b = this.color.b),
                      (r.firstRun = !1)
                  }
                  ;(r.a = r.life > 1 ? 2 - r.life : r.life),
                    (r.size = this.calc.map(
                      this.oscEased,
                      0,
                      1,
                      4 * r.baseSize,
                      1 * r.baseSize
                    ))
                }
                this.updateParticleAttributes(!0, !0, !0),
                  (this.particleGroup.rotation.y +=
                    (0.0075 + 0.04 * this.oscEased) *
                    this.loader.deltaTimeNormal),
                  (this.particleGroup.position.z = 5 - 15 * this.oscEased),
                  !this.exiting ||
                    this.loader.isOrbit ||
                    this.loader.isGrid ||
                    (this.loader.camera.position.z =
                      this.loader.cameraBaseZ -
                      this.ease.inExpo(this.exitProgress, 0, 1, 1) *
                        this.loader.cameraBaseZ)
              },
            },
          ]),
          e
        )
      })(f.a)
    e.a = g
  },
  oM7Q: function (t, e, i) {
    i('sF+V')
    var s = i('FeBl').Object
    t.exports = function (t, e) {
      return s.create(t, e)
    }
  },
  rZcW: function (t, e, i) {
    'use strict'
    var s = i('Zrlr'),
      a = i.n(s),
      r = i('wxAW'),
      n = i.n(r),
      o = (function () {
        function t(e, i) {
          var s =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
          a()(this, t),
            (this._val = e),
            (this._rate = i),
            (this._dir = s),
            (this._flip = r),
            (this._valBase = e),
            (this._rateBase = i),
            (this._dirBase = s),
            (this._flipBase = r),
            (this.trigger = !1),
            (this.triggerTop = !1),
            (this.triggerBot = !1)
        }
        return (
          n()(t, [
            {
              key: 'reset',
              value: function () {
                ;(this._val = this._valBase),
                  (this._rate = this._rateBase),
                  (this._dir = this._dirBase),
                  (this._flip = this._flipBase),
                  (this.trigger = !1),
                  (this.triggerTop = !1),
                  (this.triggerBot = !1)
              },
            },
            {
              key: 'update',
              value: function (t) {
                ;(this.trigger = !1),
                  (this.triggerTop = !1),
                  (this.triggerBot = !1),
                  this._dir
                    ? this._val < 1
                      ? (this._val += this._rate * t)
                      : ((this.trigger = !0),
                        (this.triggerTop = !0),
                        this._flip
                          ? (this._val = this._val - 1)
                          : ((this._val = 1 - (this._val - 1)),
                            (this._dir = !this._dir)))
                    : this._val > 0
                    ? (this._val -= this._rate * t)
                    : ((this.trigger = !0),
                      (this.triggerBot = !0),
                      this._flip
                        ? (this._val = 1 + this._val)
                        : ((this._val = -this._val), (this._dir = !this._dir)))
              },
            },
            {
              key: 'val',
              value: function (t) {
                return t ? t(this._val, 0, 1, 1) : this._val
              },
            },
          ]),
          t
        )
      })()
    e.a = o
  },
  'sF+V': function (t, e, i) {
    var s = i('kM2E')
    s(s.S, 'Object', { create: i('Yobk') })
  },
  vvqp: function (t, e, i) {
    'use strict'
    e.a = {
      data: function () {
        return { elements: [] }
      },
      props: {},
      mounted: function () {
        var t = this
        t.elements = this.$el.getElementsByClassName('show-in')
        var e = this.$el.querySelectorAll('.wow-words')
        t.wrapWords(e),
          setTimeout(function () {
            t.showInScrollHandler()
          }, 500),
          t.showInScrollHandler(),
          window.addEventListener('scroll', t.showInScrollHandler, !1)
      },
      methods: {
        showInScrollHandler: function () {
          var t = 100
          window.innerWidth < 768 && (t = 0)
          for (var e = 0; e < this.elements.length; e++) {
            var i = this.elements[e],
              s = void 0
            ;(s = i.hasAttribute('data-offset')
              ? i.getAttribute('data-offset')
              : t),
              i.getBoundingClientRect().top < window.innerHeight - s &&
                (i.hasAttribute('now') || i.setAttribute('now', 'now'))
          }
        },
        wrapWords: function (t) {
          for (var e = 0; e < t.length; e++) {
            for (
              var i = t[e].innerHTML.split(' '), s = [], a = 0;
              a < i.length;
              a++
            )
              i[a].length &&
                s.push("<span class='show-in wow-word'>" + i[a] + '</span>')
            t[e].innerHTML = s.join(' ')
          }
        },
      },
      destroyed: function () {
        window.removeEventListener('scroll', this.showInScrollHandler, !1)
      },
    }
  },
  wxAW: function (t, e, i) {
    'use strict'
    e.__esModule = !0
    var s = (function (t) {
      return t && t.__esModule ? t : { default: t }
    })(i('C4MV'))
    e.default = (function () {
      function t(t, e) {
        for (var i = 0; i < e.length; i++) {
          var a = e[i]
          ;(a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            'value' in a && (a.writable = !0),
            (0, s.default)(t, a.key, a)
        }
      }
      return function (e, i, s) {
        return i && t(e.prototype, i), s && t(e, s), e
      }
    })()
  },
  yEsh: function (t, e, i) {
    'use strict'
    e.__esModule = !0
    var s = r(i('Zx67')),
      a = r(i('K6ED'))
    function r(t) {
      return t && t.__esModule ? t : { default: t }
    }
    e.default = function t(e, i, r) {
      null === e && (e = Function.prototype)
      var n = (0, a.default)(e, i)
      if (void 0 === n) {
        var o = (0, s.default)(e)
        return null === o ? void 0 : t(o, i, r)
      }
      if ('value' in n) return n.value
      var l = n.get
      return void 0 !== l ? l.call(r) : void 0
    }
  },
  zwoO: function (t, e, i) {
    'use strict'
    e.__esModule = !0
    var s = (function (t) {
      return t && t.__esModule ? t : { default: t }
    })(i('pFYg'))
    e.default = function (t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        )
      return !e ||
        ('object' !== (void 0 === e ? 'undefined' : (0, s.default)(e)) &&
          'function' != typeof e)
        ? t
        : e
    }
  },
})
