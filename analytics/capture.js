export const TYPES = {
  CLICK: 'click',
  DWELL: 'dwell',
}

const typeStyles = [
  'color: #000',
  'background-color: #1da7cd',
  'padding: 2px 4px',
  'border-radius: 2px',
  'font-weight: bold',
].join(';')

const capture = (type, payload) => {
  console.info('Capture: ' + `%c${type}`, typeStyles, payload)
}

const milliSecondsToSeconds = (millis) => (millis / 1000).toFixed(2)

export const captureDwellTime = (payload) => (time) =>
  capture(TYPES.DWELL, {
    time: `${milliSecondsToSeconds(time)}s`,
    ...payload,
  })

export default capture
