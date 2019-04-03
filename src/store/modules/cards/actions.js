import CardsService from '../../../API/CardsService';

export function setControls({ commit }) {
    try {
        new Promise((resolve, reject) => {
            CardsService.getAllClasses()
                .then(response => {
                    commit("UPDATE_CONTROLS", response.data);
                    resolve(response)
                })
                .catch(reject)
        })
    } catch (error) {
        console.log(error);
    }
}

export function selectObject({ dispatch, state}, payload) {
    try {
        new Promise((resolve, reject) => {
            CardsService.selectObject(state.id, payload)
                .then(response => {
                    console.log(response);
                    dispatch('setObject')
                    resolve(response)
                })
                .catch(reject)
        })
    } catch (error) {
        console.log(error + " | selectObject");

    }
}

export function selectTrash({ commit, state, dispatch}) {
    try {
        new Promise((resolve, reject) => {
            CardsService.selectObject(state.id, 0)
                .then(response => {
                    console.log(response);
                    dispatch('setObject')
                    resolve(response)
                })
                .catch(reject)
        })
    } catch (error) {
        console.log(error + " | selectTrash");
    }
}

export function setObject({ commit, state , dispatch}) {
    try {
        console.log(state.objects);
        if (state.objects.length > 0) {
            let id = state.objects.pop()
            commit("UPDATE_ID", id)
            const imageUrl = "http://api.mmwro.revealyan.info/images/" + id
            commit("UPDATE_CARD_IMAGE", imageUrl)
        } else {
            commit("UPDATE_CARD_IMAGE", null)
            console.log("no object");
        }
    } catch (error) {
        console.log(error + " | setObject");
    }
}

export function fetchObjectList({commit, dispatch}) {
  try {
    new Promise((resolve, reject) => {
        CardsService.getNonSelectedObject()
            .then(response => {
                commit("UPDATE_OBJECT_LIST", response.data);
                dispatch("setObject")
                resolve(response)
            })
            .catch(reject)
    })
  } catch (error) {
    console.log(error + " | fetchObjectList");
  }
}
