
    module.exports.decorateConfig = config => {
      return Object.assign({}, config, {
        cursorColor: 'rgba(127, 140, 255, 0.5)',
        cursorAccentColor: '#1c2036',
        foregroundColor: '#9ddfe2',
        backgroundColor: '#1c2036',
        selectionColor: 'rgba(14, 130, 255, 0.09999999999999998)',
        borderColor: '#ee9393',
        colors: {
          black: '#1c2036',
          red: '#ff2400',
          green: '#ffffaa',
          yellow: '#ff0f4b',
          blue: '#0e82ff',
          magenta: '#ffc0cd',
          cyan: '#ee9393',
          white: '#9ddfe2',
          lightBlack: '#314053',
          lightRed: '#aac6cf',
          lightGreen: '#ffffaa',
          lightYellow: '#ff0f4b',
          lightBlue: '#0e82ff',
          lightMagenta: '#ffc0cd',
          lightCyan: '#ee9393',
          lightWhite: '#b2ffff',
        },
      });
    };
  