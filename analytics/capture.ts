export enum TYPES {
  CLICK = 'click',
  DWELL = 'dwell',
}

const typeStyles = [
  'color: #000',
  'background-color: #1da7cd',
  'padding: 2px 4px',
  'border-radius: 2px',
  'font-weight: bold',
].join(';')

const capture = (type: TYPES, payload: Record<string, string>) => {
  console.info('Capture: ' + `%c${type}`, typeStyles, payload)
}

const milliSecondsToSeconds = (millis: number) => (millis / 1000).toFixed(2)

export const captureDwellTime =
  (payload: Record<string, string>) => (time: number) =>
    capture(TYPES.DWELL, {
      time: `${milliSecondsToSeconds(time)}s`,
      ...payload,
    })

export default capture
