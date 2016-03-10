"use strict";

var $ = require("jquery"),
    plugin = Object.create(require("../modules/Plugin"));

plugin.init("di", "Digitally Imported");

plugin.scrape = function () {
    var timecode = $('.timecode').text().split(' / '),
        track = $('.track-name .artist-name');

    return {
        artist: track.text().replace(/\s+-\s+$/, ''),
        title: $.trim(track[0].nextSibling.nodeValue),
        elapsed: timecode[0],
        duration: timecode[1],
        stopped: $('.ico.icon-pause').length
    };
};

module.exports = plugin;
