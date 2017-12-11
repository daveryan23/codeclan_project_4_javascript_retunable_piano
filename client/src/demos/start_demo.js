import findClosestKeyToFraction from '../calculations/find_closest_key_to_fraction'

const startDemo = (state, key) => {

  // Get demo info
  const stateDemo = state.demo
  stateDemo.playing = true

  const index = stateDemo.index
  const file = stateDemo.list[index]
  const name = file.name
  const notes = file.demo

  // Setup name, notes and note keys of demo to start
  const current = stateDemo.current
  current.name = name
  for (const note of notes) {
    current.notesLeft.push(note)
    // Do we need a copy of the note?
    // Or is the original OK?
    // Not planning to alter note in any way, so it might be OK?
    // Need to map from relative frequencies to note codes here...
    const num = note.freqRel.num
    const denom = note.freqRel.denom
    if (num && denom) {
      const fraction = num / denom
      note.key = findClosestKeyToFraction(state, fraction)
      // This alters the original object too!
    }
  }

  // Start the first note immediately
  current.nextTime = state.control.timing.timeTotalS

  console.log(`Demo started`)
}

export default startDemo
