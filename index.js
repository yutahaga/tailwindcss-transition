const defaultPrefixes = {
  transition: 'transition-',
  animation: 'animation-'
}
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

module.exports = function({ durations, easings, prefixes, variants }) {
  durations = durations || defaultDurations
  easings = easings || defaultEasings
  prefixes = Object.assign({}, defaultPrefixes, prefixes || {})
  variants = variants || []

  return function({ addUtilities, e }) {
    const utilities = {}
    Object.keys(durations).forEach(durationName => {
      const durationValue = durations[durationName]
      Object.keys(prefixes).forEach(key => {
        const prefix = prefixes[key]
        const name = e(`${prefix}${durationName}`)
        utilities[`.${name}`] = {
          [`${key}-duration`]: `${durationValue / 1000}s`
        }
      }
    })
    Object.keys(easings).forEach(easingName => {
      const easingValue = easings[easingName]
      Object.keys(prefixes).forEach(key => {
        const prefix = prefixes[key]
        const name = e(`${prefix}${easingName}`)
        utilities[`.${name}`] = {
          [`${key}-timing-function`]: easingValue
        }
      }
    })
    addUtilities(utilities, variants)
  }
}
