import CardsService from '../../../API/CardsService';

export function setControls({ commit }) {
    try {
        new Promise((resolve, reject) => {
            CardsService.getAllClasses()
                .then(response => {
                    console.log(response);
                    // commit("UPDATE_CONTROLS");
                    resolve(response)
                })
                .catch(reject)
        })
    } catch (error) {
        console.log(error);
    }
}

export function selectObject({ commit }, payload) {
    try {
        console.log(payload);
        // new Promise((resolve, reject) => {
        //     CardsService.selectObject(payload.id, payload.id_class)
        //         .then(response => {
        //             console.log(response);
        //             // commit("UPDATE_CONTROLS");
        //             resolve(response)
        //         })
        //         .catch(reject)
        // })
    } catch (error) {
        console.log(error + "");
    }
}

export function selectTrash({ commit }, payload) {
    try {
        new Promise((resolve, reject) => {
            CardsService.selectObject(payload, 0)
                .then(response => {
                    console.log(response);
                    // commit("UPDATE_CONTROLS");
                    resolve(response)
                })
                .catch(reject)
        })
    } catch (error) {
        console.log(error);
    }
}

export function setImageUrl({ commit }, payload) {
    try {
        new Promise((resolve, reject) => {
            CardsService.getImageCard(payload)
                .then(response => {
                    console.log(response);
                    // commit("UPDATE_CARD_IMAGE");
                    resolve(response)
                })
                .catch(reject)
        })
    } catch (error) {
        console.log(error);
    }
}






// export function fetchModelList({commit}) {
//   try {
//     new Promise((resolve, reject) => {
//       ProjectService.fetchModelList()
//         .then(response => {
//           console.log(response.data);
//           commit("UPDATE_MODEL_LIST", response.data.models);
//           resolve(response)
//         })
//         .catch(error => {
//           console.log("fetchModelList: " + error);
//           reject(error)
//         })
//     })
//   } catch (error) {
//     console.log(error);
//   }
// }


// // export function setPositionX({ commit }, valueX) {
// //   commit("UPDATE_POSITIONX", valueX);
// // }
// // export function setPositionY({ commit }, valueY) {
// //   commit("UPDATE_POSITIONX", valueY);
// // }
// // export function setPositionZ({ commit }, valueZ) {
// //   commit("UPDATE_POSITIONX", valueZ);
// // }



// export function fetchModelFromServer({commit}, payload) {
//   try {
//     new Promise((resolve, reject) => {
//       ProjectService.fetchModelWithAliase(payload)
//         .then(response => {
//           console.log(response);
//           commit("UPDATE_LOADING_STATUS", false);

//           FileWorkerService.saveFileInBrowser(response.data)

//           resolve(response)
//         })
//         .catch(error => {
//           console.log("fetchModelFromServer: " + error);
//           reject(error)
//         })
//     })
//   } catch (error) {
//     console.log(error);
//   }
// }


// export function setSizeSlider({commit}, payload) {
//   WorkerWebGl.setResize(payload)
//   commit("UPDATE_SIZE_SLIDER", payload)
// }


// export function setCameraPosition({commit}, payload) {
//   let cameraPosition
//   switch(payload) {
//     case 1: 
//         cameraPosition = {
//             left: true,
//             right: false, 
//             top: false,
//             free: false
//         }
//         break;
//     case 2: 
//         cameraPosition = {
//           left: false,
//           right: true, 
//           top: false,
//           free: false
//         } 
//         break;
//     case 3: 
//         cameraPosition = {
//           left: false,
//           right: false, 
//           top: true,
//           free: false
//         } 
//         break;
//     case 4: 
//         cameraPosition = {
//           left: false,
//           right: false, 
//           top: false,
//           free: true
//         } 
//         break;
//     default: break
//   }
//   WorkerWebGl.setCameraPosition(payload)
//   commit("UPDATE_CAMERA_POSITION", cameraPosition)
// }