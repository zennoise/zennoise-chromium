/*

https://zennoise.github.io

*/

document.getElementById("storm").addEventListener("click", function () {
  chrome.runtime.sendMessage({
    audiofile: "mp3/storm.mp3",
    status: "off"
  })
}, false);

document.getElementById("birds").addEventListener("click", function () {
  chrome.runtime.sendMessage({
    audiofile: "mp3/birds.mp3",
    status: "off"
  })
}, false);

document.getElementById("cafe").addEventListener("click", function () {
  chrome.runtime.sendMessage({
    audiofile: "mp3/cafe.mp3",
    status: "off"
  })
}, false);

document.getElementById("stop").addEventListener("click", function () {
  chrome.runtime.sendMessage({
    status: "on"
  })
}, false);

document.getElementById("info").addEventListener("click", function () {
  chrome.tabs.create({
    url: chrome.extension.getURL("https://zennoise.github.io")
  })
}, false);
