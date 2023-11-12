/*! For license information please see LICENSES */
webpackJsonp([2], {
  '0bjD': function (t, e, s) {
    ;(t.exports = s('FZ+f')(!1)).push([
      t.i,
      '.range-slider{display:inline-block;padding:0 10px;height:20px;width:130px}.range-slider.disabled{opacity:.5}.range-slider-inner{display:inline-block;position:relative;height:100%;width:100%}.range-slider-fill,.range-slider-rail{display:block;position:absolute;top:50%;left:0;height:4px;border-radius:2px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.range-slider-rail{width:100%;background-color:#e2e2e2}.range-slider-fill{background-color:#21fb92}.range-slider-knob{display:block;position:absolute;top:50%;left:0;-webkit-box-sizing:border-box;box-sizing:border-box;height:20px;width:20px;border:1px solid #f5f5f5;border-radius:50%;background-color:#fff;-webkit-box-shadow:1px 1px rgba(0,0,0,.2);box-shadow:1px 1px rgba(0,0,0,.2);-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);cursor:pointer}.range-slider-hidden{display:none}',
      '',
    ])
  },
  AZfq: function (t, e, s) {
    'use strict'
    Object.defineProperty(e, '__esModule', {
      value: !0,
    })
    var i = s('x61w'),
      a = s('VYS1'),
      n = s('VU/8')(i.a, a.a, !1, null, null, null)
    ;(n.options.__file = 'pages/contact/index.vue'), (e.default = n.exports)
  },
  D2ze: function (t, e, s) {
    'use strict'
    var i = s('vvqp'),
      a = s('Uo/M'),
      n = s('VU/8')(i.a, a.a, !1, null, null, null)
    ;(n.options.__file = 'components/my-wow-js.vue'), (e.a = n.exports)
  },
  Em8J: function (t, e, s) {
    'use strict'
    var i = function () {
      var t = this.$createElement
      return (this._self._c || t)(
        'div',
        {
          staticClass: 'contact-popup',
          class: {
            sendPopUp: this.active,
            closePopUp: this.popupClose,
          },
          on: {
            click: this.close,
          },
        },
        [this._m(0)]
      )
    }
    i._withStripped = !0
    var a = {
      render: i,
      staticRenderFns: [
        function () {
          var t = this.$createElement,
            e = this._self._c || t
          return e(
            'div',
            {
              staticClass: 'popup-text',
            },
            [
              e(
                'div',
                {
                  staticClass: 'anim-holder',
                },
                [
                  e('img', {
                    attrs: {
                      src: '/images/Avice.svg',
                      alt: 'img',
                    },
                  }),
                ]
              ),
              e(
                'div',
                {
                  staticClass: 'anim-holder',
                },
                [e('h4', [this._v("We're here for you! ")])]
              ),
              e(
                'div',
                {
                  staticClass: 'anim-holder',
                },
                [
                  e('p', [
                    this._v(
                      "You're already one step closer\n                to the launch of your product!"
                    ),
                  ]),
                ]
              ),
            ]
          )
        },
      ],
    }
    e.a = a
  },
  EzLX: function (t, e, s) {
    'use strict'
    var i = function () {
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
        attrs: {
          rows: '1',
        },
        domProps: {
          value: t.val,
        },
        on: {
          focus: t.resize,
          input: function (e) {
            e.target.composing || (t.val = e.target.value)
          },
        },
      })
    }
    i._withStripped = !0
    var a = {
      render: i,
      staticRenderFns: [],
    }
    e.a = a
  },
  G4W2: function (t, e, s) {
    'use strict'
    var i = {
        created: function () {
          'undefined' != typeof document &&
            n(this, function (t, e) {
              !(function (t, e, s) {
                var i = a
                  ? {
                      passive: !1,
                    }
                  : void 0
                t.addEventListener(e, s, i)
              })(document, t, e)
            })
        },
        beforeDestroy: function () {
          'undefined' != typeof document &&
            n(this, function (t, e) {
              !(function (t, e, s) {
                var i = a
                  ? {
                      passive: !1,
                    }
                  : void 0
                t.removeEventListener(e, s, i)
              })(document, t, e)
            })
        },
      },
      a =
        'undefined' != typeof window &&
        (function () {
          var t = !1
          try {
            var e = {
                get: function () {
                  t = !0
                },
              },
              s = Object.defineProperty({}, 'passive', e)
            window.addEventListener('test', null, s),
              window.removeEventListener('test', null, s)
          } catch (e) {
            t = !1
          }
          return t
        })()
    function n(t, e) {
      var s = t.$options.events
      Object.keys(s).forEach(function (i) {
        e(i, function (e) {
          return s[i].call(t, e)
        })
      })
    }
    function r(t, e) {
      var s = e.getBoundingClientRect()
      return {
        left: t.clientX - s.left,
        top: t.clientY - s.top,
      }
    }
    var o = {
        mixins: [i],
        props: {
          disabled: Boolean,
        },
        data: function () {
          return {
            isDrag: !1,
          }
        },
        events: {
          mousedown: function (t) {
            return this.dragStart(t, this.offsetByMouse)
          },
          mousemove: function (t) {
            return this.dragMove(t, this.offsetByMouse)
          },
          mouseup: function (t) {
            return this.dragEnd(t, this.offsetByMouse)
          },
          touchstart: function (t) {
            return this.dragStart(t, this.offsetByTouch)
          },
          touchmove: function (t) {
            return this.dragMove(t, this.offsetByTouch)
          },
          touchend: function (t) {
            return this.dragEnd(t, this.offsetByTouch)
          },
          touchcancel: function (t) {
            return this.dragEnd(t, this.offsetByTouch)
          },
        },
        methods: {
          isInTarget: function (t) {
            return !!t && (t === this.$el || this.isInTarget(t.parentElement))
          },
          offsetByMouse: function (t) {
            return r(t, this.$el)
          },
          offsetByTouch: function (t) {
            return r(
              0 === t.touches.length ? t.changedTouches[0] : t.touches[0],
              this.$el
            )
          },
          dragStart: function (t, e) {
            this.disabled ||
              (void 0 !== t.button && 0 !== t.button) ||
              !this.isInTarget(t.target) ||
              (t.preventDefault(),
              (this.isDrag = !0),
              this.$emit('dragstart', t, e(t), this.$el))
          },
          dragMove: function (t, e) {
            this.isDrag &&
              (t.preventDefault(), this.$emit('drag', t, e(t), this.$el))
          },
          dragEnd: function (t, e) {
            this.isDrag &&
              (t.preventDefault(),
              (this.isDrag = !1),
              this.$emit('dragend', t, e(t), this.$el))
          },
        },
        render: function () {
          return this.$slots.default && this.$slots.default[0]
        },
      },
      l = {
        render: function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e
          return s(
            'span',
            {
              staticClass: 'range-slider',
              class: {
                disabled: t.disabled,
              },
            },
            [
              s(
                'drag-helper',
                {
                  attrs: {
                    disabled: t.disabled,
                  },
                  on: {
                    dragstart: t.dragStart,
                    drag: t.drag,
                    dragend: t.dragEnd,
                  },
                },
                [
                  s(
                    'span',
                    {
                      ref: 'inner',
                      staticClass: 'range-slider-inner',
                    },
                    [
                      s('input', {
                        staticClass: 'range-slider-hidden',
                        attrs: {
                          type: 'text',
                          name: t.name,
                          disabled: t.disabled,
                        },
                        domProps: {
                          value: t.actualValue,
                        },
                      }),
                      t._v(' '),
                      s('span', {
                        staticClass: 'range-slider-rail',
                      }),
                      t._v(' '),
                      s('span', {
                        staticClass: 'range-slider-fill',
                        style: {
                          width: t.valuePercent + '%',
                        },
                      }),
                      t._v(' '),
                      s(
                        'span',
                        {
                          ref: 'knob',
                          staticClass: 'range-slider-knob',
                          style: {
                            left: t.valuePercent + '%',
                          },
                        },
                        [t._t('knob')],
                        2
                      ),
                    ]
                  ),
                ]
              ),
            ],
            1
          )
        },
        staticRenderFns: [],
        props: {
          name: String,
          value: [String, Number],
          disabled: {
            type: Boolean,
            default: !1,
          },
          min: {
            type: [String, Number],
            default: 0,
          },
          max: {
            type: [String, Number],
            default: 100,
          },
          step: {
            type: [String, Number],
            default: 1,
          },
        },
        data: function () {
          return {
            actualValue: null,
            dragStartValue: null,
          }
        },
        created: function () {
          var t = this._min,
            e = this._max,
            s = Number(this.value)
          ;(null == this.value || isNaN(s)) && (s = t > e ? t : (t + e) / 2),
            (this.actualValue = this.round(s))
        },
        computed: {
          _min: function () {
            return Number(this.min)
          },
          _max: function () {
            return Number(this.max)
          },
          _step: function () {
            return Number(this.step)
          },
          valuePercent: function () {
            return (
              ((this.actualValue - this._min) / (this._max - this._min)) * 100
            )
          },
        },
        watch: {
          value: function (t) {
            var e = Number(t)
            null == t || isNaN(e) || (this.actualValue = this.round(e))
          },
          min: function () {
            this.actualValue = this.round(this.actualValue)
          },
          max: function () {
            this.actualValue = this.round(this.actualValue)
          },
        },
        methods: {
          dragStart: function (t, e) {
            ;(this.dragStartValue = this.actualValue),
              t.target !== this.$refs.knob && this.drag(t, e)
          },
          drag: function (t, e) {
            var s = this.$refs.inner.offsetWidth
            ;(this.actualValue = this.round(this.valueFromBounds(e.left, s))),
              this.emitInput(this.actualValue)
          },
          dragEnd: function (t, e) {
            var s = this.$refs.inner.offsetWidth
            ;(this.actualValue = this.round(this.valueFromBounds(e.left, s))),
              this.dragStartValue !== this.actualValue &&
                this.emitChange(this.actualValue)
          },
          emitInput: function (t) {
            this.$emit('input', t)
          },
          emitChange: function (t) {
            this.$emit('change', t)
          },
          valueFromBounds: function (t, e) {
            return (t / e) * (this._max - this._min) + this._min
          },
          round: function (t) {
            return (function (t, e, s, i) {
              if (t <= e) return e
              var a = Math.floor((s - e) / i) * i + e
              if (t >= a) return a
              var n = (t - e) / i,
                r = Math.floor(n),
                o = n - r
              return 0 === o ? t : o < 0.5 ? i * r + e : i * (r + 1) + e
            })(t, this._min, this._max, this._step)
          },
        },
        components: {
          DragHelper: o,
        },
      }
    t.exports = l
  },
  HZWW: function (t, e, s) {
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
        value: {
          type: [String, Number],
          default: '',
        },
        autosize: {
          type: Boolean,
          default: !0,
        },
        minHeight: {
          type: [Number],
          default: null,
        },
        maxHeight: {
          type: [Number],
          default: null,
        },
        important: {
          type: [Boolean, Array],
          default: !1,
        },
      },
      data: function () {
        return {
          val: null,
          maxHeightScroll: !1,
        }
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
          var s = e + 'px'
          return this.$el.style.setProperty('height', s, t), this
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
  'Ia+L': function (t, e, s) {
    'use strict'
    var i = s('HZWW'),
      a = s('EzLX'),
      n = s('VU/8')(i.a, a.a, !1, null, null, null)
    ;(n.options.__file = 'components/TextareaAutosize.vue'), (e.a = n.exports)
  },
  MTAQ: function (t, e, s) {
    'use strict'
    var i = s('ZbFH'),
      a = s('Em8J'),
      n = s('VU/8')(i.a, a.a, !1, null, null, null)
    ;(n.options.__file = 'components/popup.vue'), (e.a = n.exports)
  },
  'Uo/M': function (t, e, s) {
    'use strict'
    var i = function () {
      var t = this.$createElement
      return (this._self._c || t)(
        'div',
        {
          staticClass: 'wow-cnt',
        },
        [this._t('default')],
        2
      )
    }
    i._withStripped = !0
    var a = {
      render: i,
      staticRenderFns: [],
    }
    e.a = a
  },
  VYS1: function (t, e, s) {
    'use strict'
    var i = function () {
      var t = this,
        e = t.$createElement,
        s = t._self._c || e
      return s('div', [
        s(
          'main',
          {
            attrs: {
              id: 'main',
            },
          },
          [
            s(
              'section',
              {
                staticClass: 'contact-page',
              },
              [
                s(
                  'div',
                  {
                    staticClass: 'container',
                  },
                  [
                    s(
                      'div',
                      {
                        staticClass: 'contact-wrapper',
                      },
                      [
                        t._m(0),
                        s(
                          'form',
                          {
                            staticClass: 'col-holder',
                            attrs: {
                              autocomplete: 'off',
                            },
                            on: {
                              submit: t.sub,
                            },
                          },
                          [
                            s('input', {
                              staticStyle: {
                                display: 'none',
                              },
                              attrs: {
                                autocomplete: 'false',
                                name: 'hidden',
                                type: 'text',
                              },
                            }),
                            s(
                              'div',
                              {
                                staticClass: 'col',
                              },
                              [
                                s(
                                  'div',
                                  {
                                    staticClass: 'left-form',
                                  },
                                  [
                                    s(
                                      'label',
                                      {
                                        class: {
                                          'has-errors':
                                            null !== t.form.name &&
                                            !t.form.name.length,
                                        },
                                      },
                                      [
                                        s(
                                          'div',
                                          {
                                            staticClass: 'input-holder',
                                          },
                                          [
                                            s('input', {
                                              directives: [
                                                {
                                                  name: 'model',
                                                  rawName: 'v-model',
                                                  value: t.form.name,
                                                  expression: 'form.name',
                                                },
                                              ],
                                              attrs: {
                                                type: 'text',
                                                name: 'name',
                                              },
                                              domProps: {
                                                value: t.form.name,
                                              },
                                              on: {
                                                input: function (e) {
                                                  e.target.composing ||
                                                    t.$set(
                                                      t.form,
                                                      'name',
                                                      e.target.value
                                                    )
                                                },
                                              },
                                            }),
                                          ]
                                        ),
                                        s(
                                          'span',
                                          {
                                            staticClass: 'placeholder',
                                          },
                                          [t._v('Name')]
                                        ),
                                        s(
                                          'span',
                                          {
                                            staticClass: 'error-msg',
                                          },
                                          [t._v(t._s(t.errorMsg))]
                                        ),
                                      ]
                                    ),
                                    s(
                                      'label',
                                      {
                                        class: {
                                          'has-errors':
                                            null !== t.form.email &&
                                            !t.validateEmail(),
                                        },
                                      },
                                      [
                                        s(
                                          'div',
                                          {
                                            staticClass: 'input-holder',
                                          },
                                          [
                                            s('input', {
                                              directives: [
                                                {
                                                  name: 'model',
                                                  rawName: 'v-model',
                                                  value: t.form.email,
                                                  expression: 'form.email',
                                                },
                                              ],
                                              attrs: {
                                                type: 'email',
                                                name: 'email',
                                              },
                                              domProps: {
                                                value: t.form.email,
                                              },
                                              on: {
                                                input: function (e) {
                                                  e.target.composing ||
                                                    t.$set(
                                                      t.form,
                                                      'email',
                                                      e.target.value
                                                    )
                                                },
                                              },
                                            }),
                                          ]
                                        ),
                                        s(
                                          'span',
                                          {
                                            staticClass: 'placeholder',
                                          },
                                          [t._v('Email')]
                                        ),
                                        s(
                                          'span',
                                          {
                                            staticClass: 'error-msg',
                                          },
                                          [t._v(t._s(t.emailErrorMsg))]
                                        ),
                                      ]
                                    ),
                                    s(
                                      'label',
                                      {
                                        class: {
                                          'has-errors':
                                            null !== t.form.phone &&
                                            !t.validatePhone(),
                                        },
                                      },
                                      [
                                        s(
                                          'div',
                                          {
                                            staticClass: 'input-holder',
                                          },
                                          [
                                            s('input', {
                                              directives: [
                                                {
                                                  name: 'model',
                                                  rawName: 'v-model',
                                                  value: t.form.phone,
                                                  expression: 'form.phone',
                                                },
                                              ],
                                              attrs: {
                                                type: 'phone',
                                                name: 'phone',
                                              },
                                              domProps: {
                                                value: t.form.phone,
                                              },
                                              on: {
                                                input: function (e) {
                                                  e.target.composing ||
                                                    t.$set(
                                                      t.form,
                                                      'phone',
                                                      e.target.value
                                                    )
                                                },
                                              },
                                            }),
                                          ]
                                        ),
                                        s(
                                          'span',
                                          {
                                            staticClass: 'placeholder',
                                          },
                                          [t._v('Phone')]
                                        ),
                                        s(
                                          'span',
                                          {
                                            staticClass: 'error-msg',
                                          },
                                          [t._v(t._s(t.phoneErrorMsg))]
                                        ),
                                      ]
                                    ),
                                    s(
                                      'label',
                                      {
                                        staticClass: 'hide-message',
                                        class: {
                                          'has-errors':
                                            null !== t.form.message &&
                                            !t.form.message.length,
                                        },
                                      },
                                      [
                                        s(
                                          'div',
                                          {
                                            staticClass: 'input-holder',
                                          },
                                          [
                                            s('textarea-autosize', {
                                              attrs: {
                                                'min-height': 45,
                                                'max-height': 180,
                                              },
                                              model: {
                                                value: t.form.message,
                                                callback: function (e) {
                                                  t.$set(t.form, 'message', e)
                                                },
                                                expression: 'form.message',
                                              },
                                            }),
                                          ],
                                          1
                                        ),
                                        s(
                                          'span',
                                          {
                                            staticClass: 'placeholder',
                                          },
                                          [t._v('Message')]
                                        ),
                                        s(
                                          'span',
                                          {
                                            staticClass: 'error-msg',
                                          },
                                          [t._v(t._s(t.errorMsg))]
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                              ]
                            ),
                            s(
                              'div',
                              {
                                staticClass: 'col',
                              },
                              [
                                s(
                                  'div',
                                  {
                                    staticClass: 'right-form',
                                  },
                                  [
                                    s(
                                      'label',
                                      {
                                        class: {
                                          'has-errors':
                                            null !== t.form.message &&
                                            !t.form.message.length,
                                        },
                                      },
                                      [
                                        s(
                                          'div',
                                          {
                                            staticClass: 'input-holder',
                                          },
                                          [
                                            s('textarea-autosize', {
                                              attrs: {
                                                'min-height': 45,
                                                'max-height': 180,
                                              },
                                              model: {
                                                value: t.form.message,
                                                callback: function (e) {
                                                  t.$set(t.form, 'message', e)
                                                },
                                                expression: 'form.message',
                                              },
                                            }),
                                          ],
                                          1
                                        ),
                                        s(
                                          'span',
                                          {
                                            staticClass: 'placeholder',
                                          },
                                          [t._v('Message')]
                                        ),
                                        s(
                                          'span',
                                          {
                                            staticClass: 'error-msg',
                                          },
                                          [t._v(t._s(t.errorMsg))]
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ]
                        ),
                        s(
                          'div',
                          {
                            staticClass: 'col-holder',
                          },
                          [
                            s(
                              'div',
                              {
                                staticClass: 'col btn-holder',
                              },
                              [
                                s(
                                  'div',
                                  {
                                    staticClass: 'img-holder',
                                  },
                                  [
                                    s('canvas', {
                                      ref: 'waves1',
                                      staticClass: 'waves1',
                                    }),
                                    s('img', {
                                      attrs: {
                                        src: '/images/icon1.png',
                                        alt: 'img',
                                      },
                                    }),
                                    s('div', {
                                      staticClass: 'rectangle1',
                                    }),
                                    s('div', {
                                      staticClass: 'rectangle2',
                                    }),
                                    s('div', {
                                      staticClass: 'rectangle3',
                                    }),
                                    s('div', {
                                      staticClass: 'rectangle4',
                                    }),
                                    s('div', {
                                      staticClass: 'rectangle5',
                                    }),
                                    s('div', {
                                      staticClass: 'rectangle6',
                                    }),
                                    s('div', {
                                      staticClass: 'rectangle7',
                                    }),
                                  ]
                                ),
                                s(
                                  'button',
                                  {
                                    staticClass: 'btn',
                                    attrs: {
                                      type: 'submit',
                                    },
                                    on: {
                                      click: t.sub,
                                    },
                                  },
                                  [t._v('Send')]
                                ),
                              ]
                            ),
                          ]
                        ),
                        s('popup-component', {
                          attrs: {
                            active: t.popup,
                          },
                          on: {
                            close: function (e) {
                              t.popup = !1
                            },
                          },
                        }),
                      ],
                      1
                    ),
                  ]
                ),
              ]
            ),
          ]
        ),
      ])
    }
    i._withStripped = !0
    var a = {
      render: i,
      staticRenderFns: [
        function () {
          var t = this.$createElement,
            e = this._self._c || t
          return e(
            'div',
            {
              staticClass: 'contact-caption',
            },
            [
              e(
                'div',
                {
                  staticClass: 'contact-caption-holder',
                },
                [
                  e('h1', [this._v('Contact Us')]),
                  e('img', {
                    staticClass: 'logo-contact',
                    attrs: {
                      src: '/images/Avice.svg',
                      alt: 'img',
                    },
                  }),
                ]
              ),
              e('p', [
                this._v(
                  "Give us just a few details on your project here, and we'll shortly continue discussion in person."
                ),
              ]),
            ]
          )
        },
      ],
    }
    e.a = a
  },
  Z7gM: function (t, e, s) {
    var i = s('0bjD')
    'string' == typeof i && (i = [[t.i, i, '']]),
      i.locals && (t.exports = i.locals)
    s('rjj0')('5be0a009', i, !1, {
      sourceMap: !1,
    })
  },
  ZbFH: function (t, e, s) {
    'use strict'
    e.a = {
      name: 'PopupComponent',
      props: {
        active: {
          type: Boolean,
          default: !1,
        },
      },
      data: function () {
        return {
          popupClose: !1,
        }
      },
      methods: {
        close: function () {
          this.$emit('close'), (this.popupClose = !0)
        },
      },
    }
  },
  vvqp: function (t, e, s) {
    'use strict'
    e.a = {
      data: function () {
        return {
          elements: [],
        }
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
            var s = this.elements[e],
              i = void 0
            ;(i = s.hasAttribute('data-offset')
              ? s.getAttribute('data-offset')
              : t),
              s.getBoundingClientRect().top < window.innerHeight - i &&
                (s.hasAttribute('now') || s.setAttribute('now', 'now'))
          }
        },
        wrapWords: function (t) {
          for (var e = 0; e < t.length; e++) {
            for (
              var s = t[e].innerHTML.split(' '), i = [], a = 0;
              a < s.length;
              a++
            )
              s[a].length &&
                i.push("<span class='show-in wow-word'>" + s[a] + '</span>')
            t[e].innerHTML = i.join(' ')
          }
        },
      },
      destroyed: function () {
        window.removeEventListener('scroll', this.showInScrollHandler, !1)
      },
    }
  },
  x61w: function (t, e, s) {
    'use strict'
    var i = s('woOf'),
      a = s.n(i),
      n = s('mvHQ'),
      r = s.n(n),
      o = s('//Fk'),
      l = s.n(o),
      u = s('D2ze'),
      c = s('G4W2'),
      d = s.n(c),
      h = s('MTAQ'),
      m = s('Ia+L'),
      p = s('Z7gM')
    s.n(p)
    e.a = {
      components: {
        MyWowJs: u.a,
        RangeSlider: d.a,
        PopupComponent: h.a,
        TextareaAutosize: m.a,
      },
      data: function () {
        return {
          hue: 200,
          isLoaded: !1,
          hueArr: [],
          loaded: !1,
          popup: !1,
          sliderValue: 5,
          form: {
            name: null,
            email: null,
            message: null,
            phone: null,
            budget: 0,
            type: 'Web',
          },
          errorMsg: 'This field is required',
          emailErrorMsg: 'Enter valid email',
          phoneErrorMsg: 'Enter valid phone',
        }
      },
      mounted: function () {
        this.$store.commit('setState', {
          sideHeader: !1,
        }),
          setTimeout(
            function () {
              ;(this.loaded = !0),
                (this.isLoaded = !0),
                (this.form.budget = 5e3)
            }.bind(this),
            100
          ),
          this.initWaves()
      },
      methods: {
        initWaves: function () {
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
                  lineWidth: 1,
                  amplitude: -80,
                  wavelength: 80,
                },
                {
                  timeModifier: 2,
                  lineWidth: 2,
                  amplitude: -70,
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
              for (var e = -1, s = this.waves.length; ++e < s; )
                this.waves[e].strokeStyle = t
              ;(e = void 0), (s = void 0), (t = void 0)
            },
          })
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
        validatePhone: function () {
          return '' === this.form.phone
            ? ((this.phoneErrorMsg = this.errorMsg), !1)
            : !!(function (t) {
                return /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?/.test(
                  t
                )
              })(this.form.phone) ||
                ((this.phoneErrorMsg = 'Enter valid phone'), !1)
        },
        makeReq: function (t, e, s) {
          return new l.a(function (i, a) {
            var n = new XMLHttpRequest()
            n.open(t, e),
              n.setRequestHeader('Content-Type', 'application/json'),
              (n.onload = function () {
                this.status >= 200 && this.status < 300
                  ? i(n.response)
                  : a({
                      status: this.status,
                      statusText: n.statusText,
                    })
              }),
              (n.onerror = function () {
                a({
                  status: this.status,
                  statusText: n.statusText,
                })
              }),
              console.log(s),
              n.send(r()(s))
          })
        },
        sub: function () {
          var t = this,
            e = 0
          for (var s in this.form) this.form[s] || ((this.form[s] = ''), e++)
          if ((this.validateEmail() || e++, !e)) {
            var i = a()({}, this.form),
              n = new FormData()
            for (var r in i) n.append(r, i[r])
            this.makeReq('POST', '/api/contact', i).then(function (e) {
              console.log(e),
                (t.popup = !0),
                (t.form.name = null),
                (t.form.email = null),
                (t.form.message = null),
                (t.form.phone = null)
            })
          }
        },
      },
    }
  },
})
