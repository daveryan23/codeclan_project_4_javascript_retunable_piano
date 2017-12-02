const updateSliderModelFromView = (model, view) => {
  model.setCurrent(parseFloat(view.value))
}


const volumeSliderHandler = (state, event) => {
  updateSliderModelFromView(
    state.dB,
    state.pageElts.sliders.volume.slider
  )
}

const spacingSliderHandler = (state, event) => {
  updateSliderModelFromView(
    state.keySpacing,
    state.pageElts.sliders.spacing.slider
  )
}

const contrastSliderHandler = (state, event) => {
  updateSliderModelFromView(
    state.keyColourContrast,
    state.pageElts.sliders.contrast.slider
  )
}


export {volumeSliderHandler, spacingSliderHandler, contrastSliderHandler}