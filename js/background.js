/*

https://zennoise.github.io

*/

var audio = document.createElement('audio')

function player(audiofile, status) {
  /*
  audiofile - path to mp3
  status - "on", or "off"
   */

  audio.setAttribute('src', audiofile)
  audio.setAttribute('loop', 'true')
  switch (status) {
    case 'off':
      audio.play()
      // 100% volume
      audio.volume = 1
      status = 'on'
      break
    case 'on':
      audio.pause()
      status = 'off'
      break
  }
  chrome.browserAction.setIcon({
    path: {
      "19": "images/" + status + ".png",
      "38": "images/" + status + ".png"
    }
  })

}

chrome.runtime.onMessage.addListener(function (request) {
  player(request.audiofile, request.status)
})