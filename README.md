# Genius SW-HF5.1 3000 - Remote Control
<p align="center">
    <img src="/public/images/SwartNinjaLogoV2.svg" alt="SwartNinja logo" height="150">
</p>

[![](https://img.shields.io/badge/author-@dnswart-blue.svg?style=flat-square)](https://twitter.com/dnswart)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/dickswart/genius-swhf51-3000?style=flat-square)
![Coveralls github branch](https://img.shields.io/coveralls/github/DickSwart/genius-swhf51-3000/master?style=flat-square)
![Travis (.org) branch](https://img.shields.io/travis/DickSwart/genius-swhf51-3000/master?style=flat-square)

``genius-swhf51-3000`` is a [NodeJS](http://nodejs.org) app that creates a web interface & RESTful API for the [LIRC](http://lirc.org) project. It uses [lirc_node](https://github.com/alexbain/lirc_node) to handle communication between [LIRC](http://lirc.org) and [NodeJS](http://nodejs.org).

___This project is very much a simplified version of [lirc_web](https://github.com/alexbain/lirc_web).___

This project allows you to control the [Genius SW-HF5.1 3000 speaker system](https://github.com/DickSwart/genius-swhf51-3000/wiki/Genius-SW-HF5.1-3000-SPECS) from any web browser. The RESTful API allows you to integrate the remote control functionality into home automation hubs like [Home Assistant](https://www.home-assistant.io).

## Table of Contents
- [Background](#background)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Background
I installed an old Genius SW-HF5.1 3000 speaker system in my _"Man Cave"_. Thought it would be nice to have a bit better sound when playing Xbox or watching a movie. It ended up never being used because I lost the remote (yes I'm lazy, lol). I had a Raspberry Pi laying around so I decided to install [Volumio](https://volumio.org/) and turn my old Genius SW-HF5.1 3000 into a "Smart" speaker, allowing integration into [Home Assistant](https://www.home-assistant.io) and a stand-alone remote control UI for guests.

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
```bash
# Run application production
$ npm start

# Run application development
$ npm run start-dev
```
### Viewing

Accessing the remote web-ui, open a browser and navigate to ``http://SERVER:8080/``, to access the Swagger (api documentation) navigate to ``http://SERVER:8080/api/docs``.

### Home Assistant

![Home Assistant Buttons](/extras/images/screenshot-hass-ui-lovelace.png)

Add a rest command to the configuration.yaml and then in lovelace use ["Button Card"](https://github.com/custom-cards/button-card#manual-installation) for the buttons.

Full examples can be found in the extras folder of this repo.
- [rest_command.yaml](/extras/hass/rest_command.yaml)
- [ui-lovelace.yaml](/extras/hass/ui-lovelace.yaml)

```yaml
# file: /extras/hass/rest_command.yaml
rest_command:
  genius_swhf51_3000_command:
    url: http://xxx.xxx.xxx.xxx:8080/api/v1/remote/{{command}}
    method: POST
```

```yaml
# file: /extras/hass/ui-lovelace.yaml
type: "custom:button-card"
name: "Power"
icon: mdi:power
show_icon: true
show_name: false
tap_action:
  action: call-service
  service: rest_command.genius_swhf51_3000_command
  service_data:
    command: POWER
```


## Credits
- [lirc_web](https://github.com/alexbain/lirc_web)
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
