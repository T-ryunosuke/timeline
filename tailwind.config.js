module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ],
  theme: {
    extend: {
      minWidth: {
        'screen': '100vw',
      },
      keyframes: {
        flashFade: {
          "0%": { transform: "translateY(0px)", opacity: 1 },
          "70%": { transform: "translateY(0)", opacity: 1 },
          "90%": { transform: "translateY(-8px)", opacity: 0 },
          "100%": { transform: "translateY(-30px)", opacity: 0 }
        },
        quake: {
          '10%, 50%, 90%': {
            transform: 'translate3d(-1px, 0, 0)',
          },
          '30%, 70%': {
            transform: 'translate3d(3px, 0, 0)',
          },
        },
        pulsate_fwd: {
          "0%,to": {
              transform: "scale(1)"
          },
          "70%": {
              transform: "scale(1.1)"
          },
        },
      },
      animation: {
        flash: "flashFade 4.0s forwards",
        quake: 'quake 0.6s linear',
        pulsate_fwd: "pulsate_fwd 5s ease infinite both",
      },
    },
  },
}
