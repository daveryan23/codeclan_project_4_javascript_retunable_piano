import detectBrowser from '../browser/detect_browser'

const setupImportantParameters = (state) => {

  // Some important state object structure
  state.browser = {}
  state.comma = {}
  state.controller = {}
  state.context = {}
  state.demo = {}
  state.key = {}
  state.map = {}
  state.pageElt = {}
  state.param = {}
  state.slider = {}
  state.text = {}
  const stateKey = state.key
  const stateParam = state.param

  // Get browser info
  detectBrowser(state)

  // // DOESN'T YET WORK - VARYING KEYMAP BASED ON LOCALE ETC...
  // // JS file in JSON format.
  // // Maps from key presses to screen position and function
  // stateKey.file = "./keymaps/en-gb_macbook_chrome.js"
  // // There should be different maps for different locales, computers and browsers
  // // Note this is NOT YET IMPLEMENTED
  // // since the file name is hard coded in the setup instrument keys...
  // // ... some problems with importing JSON on WebPack.

  // Speed (currently only of demos)
  stateParam.startBPM = 160

  // Max and min frequencies
  stateParam.baseFrequencyHz = 256
  stateParam.maxMaxHz = 6000          // Slider max
  stateParam.currentMaxHz = 4096      // Slider value
  stateParam.currentMinHz = 5         // Slider value
  stateParam.minMinHz = 3             // Slider min

  // Every N loops (var = N) do the following:
  stateParam.loopsToRedrawCanvas = 2         // Redraw frame
  stateParam.loopsToRecalcNeighbours = 47    // Recalculate which neighbours are buttons
  stateParam.loopsToUpdateHtmlText = 13      // Update HTML Text
  stateParam.loopsToUpdateTopText = 61 * 59  // Update top text once a minute, e.g. tips and help

  // Parameters related to timeout
  stateParam.secondsToTimeout = 600
  stateParam.approxBrowserFrameRateHz = 50

  // Some of the other initialisation parameters could go here?

  console.log("Setup some important parameters first. Here's the state object:")
  console.dir(state)

}

export default setupImportantParameters
