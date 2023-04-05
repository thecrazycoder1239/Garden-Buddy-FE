export default function getPreviousSessionUser() : User | null {
  let previousSessionUsername = '';

  if ('serviceWorker' in navigator) {
    previousSessionUsername = localStorage.getItem('previousSessionUsername') || ''
  }

  if (previousSessionUsername) {
    return {
      username: previousSessionUsername,
      password: '',
      first_name: 'unavailable',
      last_name: 'unavailable'
    }
  }
  return null
}