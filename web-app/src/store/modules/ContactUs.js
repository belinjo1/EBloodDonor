import ContactUsService from '@/services/ContactUsService'

const state = {
    messages: null,
};

const getters = {
    messages: (state) => state.messages
};

const actions = {
    async getAllMessages({ commit }) {
        console.log('hi')
        var allMessages = null

        await ContactUsService.getAllMessages()
            .then((response) => {
                allMessages = response.data.message.messages;
                console.log(allMessages + '11111');
                console.log('here');
            });

        await commit("setMessages", allMessages);
    },
    createMessage({ }, message) {

        try {
            console.log(message);
            ContactUsService.createMessage(message)
        } catch (err) {
            console.log(err)
        }

    }
};

const mutations = {
    setMessages(state, allMessages) {
        state.messages = allMessages;
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
};