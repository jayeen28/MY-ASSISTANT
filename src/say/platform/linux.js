const SayPlatformBase = require('./base.js')

const BASE_SPEED = 100
const COMMAND = 'espeak'

class SayPlatformLinux extends SayPlatformBase {
  constructor() {
    super()
    this.baseSpeed = BASE_SPEED
  }

  buildSpeakCommand({ text, voice, speed }) {
    let pipedData = text || '';
    return { command: COMMAND, pipedData }
  }

  buildExportCommand({ text, voice, speed, filename }) {
    throw new Error(`say.export(): does not support platform ${this.platform}`)
  }

  runStopCommand() {
    // TODO: Need to ensure the following is true for all users, not just me. Danger Zone!
    // On my machine, original childD.pid process is completely gone. Instead there is now a
    // childD.pid + 1 sh process. Kill it and nothing happens. There's also a childD.pid + 2
    // aplay process. Kill that and the audio actually stops.
    process.kill(this.child.pid + 2)
  }

  getVoices() {
    throw new Error(`say.export(): does not support platform ${this.platform}`)
  }
}

module.exports = SayPlatformLinux
