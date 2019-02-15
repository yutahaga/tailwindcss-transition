const defaultPrefix = 'transition-'
const defaultDurations = {
  faster: 100,
  fast: 200,
  normal: 300,
  slow: 400,
  slower: 500
}
const defaultEasings = {
  linear: 'linear',
  acceleration: 'cubic-bezier(0.4, 0, 1, 1)',
  'acceleration-wild': 'cubic-bezier(0.6, 0, 1, 1)',
  deceleration: 'cubic-bezier(0, 0, 0.2, 1)',
  'deceleration-calm': 'cubic-bezier(0, 0, 0.4, 1)',
  standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
}

module.exports = function({ durations, easings, prefix, variants }) {
  durations = durations || defaultDurations
  easings = easings || defaultEasings
  prefix = prefix || defaultPrefix
  variants = variants || []

  return function({ addUtilities, e }) {
    const utilities = {}
    Object.keys(durations).forEach(durationName => {
      const durationValue = durations[durationName]
      const name = e(`${prefix}${durationName}`)
      utilities[`.${name}`] = {
        'transition-duration': `${durationValue / 1000}s`
      }
    })
    Object.keys(easings).forEach(easingName => {
      const easingValue = easings[easingName]
      const name = e(`${prefix}${easingName}`)
      utilities[`.${name}`] = {
        'transition-timing-function': easingValue
      }
    })
    addUtilities(utilities, variants)
  }
}
