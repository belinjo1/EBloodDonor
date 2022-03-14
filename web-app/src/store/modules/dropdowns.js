
const state = {
  roles: ['admin', 'user'],
  bloodtypes: ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"],
  cities: ["Prishtinë", "Mitrovicë", "Pejë", "Prizren", "Ferizaj", "Gjilan", "Gjakovë"]
};

const getters = {
  roles: (state) => state.roles,
  bloodtypes: (state) => state.bloodtypes,
  cities: (state) => state.cities
}

export default {
  state,
  getters
};