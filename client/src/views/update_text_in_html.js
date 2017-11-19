let drawnVersionNumber = false;

const updateTextInHtml = (state) => {
  // Only update this every 10 frames
  const pageElts = state.pageElts
  if (state.control.loopCount % 17 === 0) {
    const stateTiming = state.control.timing
    pageElts.totalTimeS.innerText = Math.round(stateTiming.totalTimeS*10)/10
    pageElts.renderTimeMinMS.innerText = Math.round(stateTiming.renderTimeMinMS*10)/10
    pageElts.renderTimeMaxMS.innerText = Math.round(stateTiming.renderTimeMaxMS*10)/10
    stateTiming.renderTimeMinMS = 10000
    stateTiming.renderTimeMaxMS = 0
  }
  if (!drawnVersionNumber) {
    pageElts.versionNumber.innerText = state.versionNumber
    drawnVersionNumber = true
  }
}

export default updateTextInHtml
