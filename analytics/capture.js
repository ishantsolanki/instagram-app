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

export const TYPES = {
  CLICK: 'click',
}

export default capture
