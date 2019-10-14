import Vue from 'vue';
import Vuex from 'vuex';
import trackService from '@/services/track.service';

Vue.use(Vuex);

const store = new Vuex.Store({
    
    state: {
        track: null,
        isVisiblePlayer: false
    },
    mutations: {
        selectTrack (state, track) {
            state.track = track;
            state.isVisiblePlayer = true;
        },
        showPlayer (state) {
            state.isVisiblePlayer = true;
        },
        hidePlayer (state) {
            state.isVisiblePlayer = false;
        } 
    },
    actions: {
        getTrackById (context, payload) {
            return trackService.searchById(payload.id)
                .then((response) => {
                    console.log(response);
                    context.commit('selectTrack', response)
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }

});

export default store;
