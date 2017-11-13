import setupInput from './setup_input'
import setupFrequencies from './setup_frequencies'
import setupWaveform from './setup_waveform'
import setupAmplitudes from './setup_amplitudes'
import setupAudioContext from './setup_audio_context'

const initialiseState = (state) => {
  // state starts as an empty object
  // IMPROVE: remove all the properties from state here
  // Don't reassign state to {} since this changes the reference

  setupInput(state)
  setupFrequencies(state)
  setupWaveform(state)
  setupAmplitudes(state)
  setupAudioContext(state)

  console.log("State initialisation complete:")
  console.dir(state)
}

export default initialiseState
