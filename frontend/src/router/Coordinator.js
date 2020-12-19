export const goToSignUp = (history) => {
  history.push('/')
};

export const goToLogin = (history) => {
  history.push('/login')
};

export const goToFeed = (history) => {
  history.push('/feed')
};

export const goToAdd = (history) => {
  history.push('/add')
};

export const goBack = (history) => {
  history.goBack()
};