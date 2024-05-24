let goToView = (id) => {
    let element = document.getElementsByClassName(id)
    element[0].scrollIntoView({behavior: 'smooth'})
}