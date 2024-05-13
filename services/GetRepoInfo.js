function convertToApiUrl(url) {
  // Replace "github.com" with "api.github.com/repos"
  return url.replace('github.com', 'api.github.com/repos')
}

const getRepoInfo = async (url) => {
  try {
    const newUrl = convertToApiUrl(url)
    // Fetch repository information
    console.log('newUrl')
    console.log(newUrl)
    const response = await fetch(newUrl)
    const data = await response.json()

    // Extract name and description
    const { name, description } = data

    // Return name and description
    return { name, description }
  } catch (error) {
    console.error('Error fetching repository information:', error)
    return null
  }
}

const myUrl = 'https://github.com/tusharnagar17/React-Native-Job-app'
getRepositoryInfo(myUrl).then((data) => {
  console.log(data)
})

export default getRepoInfo
