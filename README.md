# `themer`

Your theme's unique URL:

https://themer.dev/?colors.dark.shade0=%231c2036&colors.dark.shade7=%23b2ffff&colors.dark.accent0=%23ff2400&colors.dark.accent1=%23aac6cf&colors.dark.accent2=%23ff0f4b&colors.dark.accent3=%23ffffaa&colors.dark.accent4=%23ee9393&colors.dark.accent5=%230e82ff&colors.dark.accent6=%237f8cff&colors.dark.accent7=%23ffc0cd&activeColorSet=dark

If you find `themer` useful, here are some ways to support the project:

* Star [`themer` on GitHub](https://github.com/mjswensen/themer)
* Follow [@themerdev](https://twitter.com/themerdev) on Twitter
* [Send a tip through the Brave Browser](https://brave.com/the537), either on [the repository page](https://github.com/mjswensen/themer) or [the Web UI](https://themer.dev)
* Pay what you want when downloading your theme from [themer.dev](https://themer.dev)

# Installation instructions

## Hyper

First, copy (or symlink) the outputted package directory to the Hyper local plugins directory:

    cp -R 'Hyper/themer-hyper-dark' ~/.hyper_plugins/local/

Then edit `~/.hyper.js` and add the package to the `localPlugins` array:

    ...
    localPlugins: [
      'themer-hyper-dark'
    ],
    ...

## iTerm

1. Launch iTerm
2. Press `command`-`I` to open the iTerm preferences
3. Choose Colors > Color Presets... > Import... and choose the generated theme file (`iTerm/themer-iterm-dark.itermcolors`)

## Vim

Copy or symlink `Vim/ThemerVim.vim` to `~/.vim/colors/`.

Then set the colorscheme in `.vimrc`:

    " The background option must be set before running this command.
    colo ThemerVim