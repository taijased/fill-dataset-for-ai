import Api from './Api.js'



const CardsService = {
  getNonSelectedObject () {
    return Api.get('/objects')
  },
  // getImageCard (id) {
  //   return Api.get('images/' + id)
  // },
  selectObject(id, class_id) {
    return Api.put('objects/' + id + '/' + class_id)
  },
  getAllClasses() {
    return Api.get('/classes')
  }
}

export default CardsService