# Genius SW-HF5.1 3000 - Remote Control
[![](https://img.shields.io/badge/author-@dnswart-blue.svg?style=flat-square)](https://twitter.com/dnswart)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/dickswart/genius-swhf51-3000?style=flat-square)

``genius-swhf51-3000`` is a [NodeJS](http://nodejs.org) app that creates a web interface & RESTful API for the [LIRC](http://lirc.org) project. It uses [lirc_node](https://github.com/alexbain/lirc_node) to handle communication between [LIRC](http://lirc.org) and [NodeJS](http://nodejs.org).
This project allows you to control the [Genius SW-HF5.1 3000 speaker system](https://github.com/DickSwart/genius-swhf51-3000/wiki/Genius-SW-HF5.1-3000-SPECS) from any web browser. The RESTful API allows you to integrate the remote control functionality into home automation hubs like [Home Assistant](https://www.home-assistant.io).

## Install
Clone the application and install dependancies.
```bash
$ git clone git@github.com:DickSwart/genius-swhf51-3000.git
$ cd genius-swhf51-3000
$ npm install
```

Run the application.
```bash
# Run application production
$ npm start

# Run application development
$ npm run start-dev
```

## Helpful resources
- [Linux Infrared Remote Control (LIRC)](http://lirc.org/)
- [lirc_node](https://github.com/alexbain/lirc_node)
- [Open Source Universal Remote](http://opensourceuniversalremote.com/)

## License
MIT License

Copyright (c) 2019 Dick Swart <dick@swart.ninja>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
