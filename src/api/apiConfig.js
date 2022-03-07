const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '75b9f04bb9ba776a3e2318bbe7838f21',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;