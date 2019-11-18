# Genius SW-HF5.1 3000 - Remote Control
<p align="center">
    <img src="/public/images/SwartNinjaLogoV2.svg" alt="SwartNinja logo" height="150">
</p>

[![](https://img.shields.io/badge/author-@dnswart-blue.svg?style=flat-square)](https://twitter.com/dnswart)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/dickswart/genius-swhf51-3000?style=flat-square)

``genius-swhf51-3000`` is a [NodeJS](http://nodejs.org) app that creates a web interface & RESTful API for the [LIRC](http://lirc.org) project. It uses [lirc_node](https://github.com/alexbain/lirc_node) to handle communication between [LIRC](http://lirc.org) and [NodeJS](http://nodejs.org).
This project allows you to control the [Genius SW-HF5.1 3000 speaker system](https://github.com/DickSwart/genius-swhf51-3000/wiki/Genius-SW-HF5.1-3000-SPECS) from any web browser. The RESTful API allows you to integrate the remote control functionality into home automation hubs like [Home Assistant](https://www.home-assistant.io).

## Background
I installed an old Genius SW-HF5.1 3000 speaker system in my _"Man Cave"_. Thought it would be nice to have a bit better sound when playing Xbox or watching a movie. It ended up never being used because I lost the remote (yes I'm lazy, lol). I had a Raspberry Pi laying around so I decided to install [Volumio](https://volumio.org/) and turn my old Genius SW-HF5.1 3000 into a "Smart" speaker, allowing integration into [Home Assistant](https://www.home-assistant.io) and a stand-alone remote control UI for guests.

## Table of Contents
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Screenshots
<p align="center">
  <img src="/extras/images/screenshots.jpg">
</p>

## Installation
Clone the application and install dependancies.
```bash
$ git clone git@github.com:DickSwart/genius-swhf51-3000.git
$ cd genius-swhf51-3000
$ npm install
```
## Usage
Run the application.
```bash
# Run application production
$ npm start

# Run application development
$ npm run start-dev
```
## Credits
- [lirc_web](https://github.com/DickSwart/lirc_web)
- [lirc_node](https://github.com/alexbain/lirc_node)
- [Open Source Universal Remote](http://opensourceuniversalremote.com/)
- [Linux Infrared Remote Control (LIRC)](http://lirc.org/)

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
