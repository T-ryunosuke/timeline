module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: ['Noto Sans JP', 'sans-serif'],
      },
      minWidth: {
        'screen': '100vw',
      },
      boxShadow: {
        'custom-shadow': '4px 5px #3e3e3e',
        'custom-wide-shadow': '18px 20px rgba(62, 62, 62, 0.5)',
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
        rgbGlitch: {
          '0%': { transform: 'translate(0)', opacity: '1' },
          '20%': { transform: 'translate(-2px)', opacity: '0.7', filter: 'none' },
          '30%': { transform: 'translate(2px)', opacity: '0.5', filter: 'hue-rotate(45deg)' },
          '40%': { transform: 'translate(-2px)', opacity: '0.7', filter: 'hue-rotate(-45deg)' },
          '60%': { transform: 'translate(2px)', opacity: '1', filter: 'hue-rotate(90deg)' },
          '100%': { transform: 'translate(0)', opacity: '1', filter: 'none' },
        },
      },
      animation: {
        flash: "flashFade 4.0s forwards",
        quake: 'quake 0.6s linear',
        pulsate_fwd: "pulsate_fwd 5s ease infinite both",
        rgb_glitch: 'rgbGlitch 0.3s ease-in-out forwards',
      },
    },
  },
}
