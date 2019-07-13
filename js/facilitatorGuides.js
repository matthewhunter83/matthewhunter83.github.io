const main = document.getElementById('main')
const daysDiv = document.createElement('div')
const modulesDiv = document.createElement('div')
const postsDiv = document.createElement('div')

const handleShowDays = () => {
  facilitatorGuideItems.days.map(day => {
    const img = document.createElement('img')
    img.src = day.image
    img.classList.add('img-fluid', 'rounded', 'btn', 'btn-light', 'mb-3', 'shadow-sm', 'p-0')
    img.text = day.name
    img.addEventListener('click', () => handleShowModules(img.text))
    daysDiv.append(img)
  })
  main.append(daysDiv)
}

const handleShowModules = day => {
  main.removeChild(daysDiv)
  facilitatorGuideItems.days
    .find(targetDay => targetDay.name === day)
    .modules.map(module => {
      const img = document.createElement('img')
      img.src = module.image
      img.classList.add('img-fluid', 'rounded', 'btn', 'btn-light', 'mb-3', 'shadow-sm', 'p-0')
      img.text = module.name
      img.addEventListener('click', () => handleShowPosts(day, img.text))
      modulesDiv.append(img)
    })
  main.append(modulesDiv)
}

const handleShowPosts = (day, module) => {
  main.removeChild(modulesDiv)
  facilitatorGuideItems.days
    .find(targetDay => targetDay.name === day)
    .modules.find(targetModule => targetModule.name === module)
    .posts.map(post => {
      const img = document.createElement('img')
      img.src = post.image
      img.classList.add('img-fluid', 'rounded', 'btn', 'btn-light', 'mb-3', 'shadow-sm', 'p-0')
      img.text = post.name
      img.addEventListener('click', () => {
        console.log(img.text)
      })
      postsDiv.append(img)
    })
  main.append(postsDiv)
}

handleShowDays()
