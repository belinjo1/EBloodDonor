<template>
  <v-app id="users">
    <div class="main">
      <h1><font-awesome-icon :icon="['fas', 'users']" /> All Users</h1>

      <div>
        <h3 v-if="!users">Loading...</h3>

        <v-data-table
          v-else
          :headers="headers"
          :items="users.users"
          :items-per-page="5"
          :search="search"
          class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Users</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
              <v-dialog v-model="dialog" max-width="500px">
                <template v-slot:activator="{ on, attrs }">
                </template>
                <v-card>
                  <v-card-title>
                    <span class="text-h5">{{ formTitle }}</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field
                            v-model="editedItem.name"
                            label="Full Name"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field
                            v-model="editedItem.email"
                            label="Email"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" sm="6" md="4">
                           <v-select
                            :items="cities"
                            v-model="editedItem.city"
                            label="City"
                          ></v-select>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-select
                            :items="bloodtypes"
                            v-model="editedItem.bloodtype"
                            label="Blood Type"
                          ></v-select>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-select
                            :items="roles"
                            v-model="editedItem.role"
                            label="Role"
                          ></v-select>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="close">
                      Cancel
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="save">
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog v-model="dialogDelete" max-width="500px">
                <v-card>
                  <v-card-title class="text-h5"
                    >Are you sure you want to delete this item?</v-card-title
                  >
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="closeDelete"
                      >Cancel</v-btn
                    >
                    <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                      >OK</v-btn
                    >
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
            <v-container>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-container>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
          </template>
          <!-- <template v-slot:no-data>
                    <v-btn
                        color="primary"
                        @click="initialize"
                    >
                        Reset
                    </v-btn>
                    </template> -->
        </v-data-table>
      </div>
    </div>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    search: "",
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "ID",
        align: "start",
        sortable: false,
        value: "_id",
      },
      { text: "Name", value: "name" },
      { text: "Email", value: "email" },
      { text: "Bloodtype", value: "bloodtype" },
      { text: "Role", value: "role" },
      { text: "City", value: "city" },
      { text: "Actions", value: "actions", sortable: false },
    ],

    editedIndex: -1,
    editedItem: {
      _id: "",
      name: "",
      email: "",
      bloodtype: "",
      role: "",
      city: "",
    },
    defaultItem: {
      _id: "",
      name: "",
      email: "",
      bloodtype: "",
      role: "",
      city: "",
    },
  }),

  computed: {
    ...mapGetters(["users", "roles", "cities", "bloodtypes"]),
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.getAllUsers();
    this.userRoles = this.roles;
    this.userCities = this.cities;
  },

  methods: {
    ...mapActions(["getAllUsers", "editUser", "deleteUser"]),
    //   initialize () {
    //     // this.users = [
    //     //   {
    // 	// 		role: "admin",
    // 	// 		bloodtype: "B+",
    // 	// 		_id: "6206e44c23a2263794d1470a",
    // 	// 		name: "Rilind Tasholli",
    // 	// 		email: "rilindtasholli@gmail.com",
    // 	// 		passwordChangedAt: null,
    // 	// 	},
    // 	// 	{
    // 	// 		role: "user",
    // 	// 		bloodtype: "AB-",
    // 	// 		_id: "6207c2ec068fb807a8bbf990",
    // 	// 		name: "Filan Fisteku",
    // 	// 		email: "filan@gmail.com",
    // 	// 		passwordChangedAt: null,
    // 	// 	}
    //     // ]
    //     this.getAllUsers()
    //   },

    editItem(item) {
      this.editedIndex = this.users.users.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.users.users.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      // this.users.splice(this.editedIndex, 1)
      let id = this.users.users[this.editedIndex]._id;
      console.log(id);
      this.deleteUser(id);
      this.closeDelete();
      setTimeout(() => {
        // console.log('timeout!! getUsers')
        this.getUsers();
      }, 1000);
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    async save() {
      if (this.editedIndex > -1) {
        //edit user block code
        //Object.assign(this.users[this.editedIndex], this.editedItem)
        try {
          await this.editUser(this.editedItem);
        } catch (error) {
          console.log(error);
        }
      } else {
        //add new user block code
        this.users.push(this.editedItem);
      }
      this.close();
      setTimeout(() => {
        // console.log('timeout!! getUsers')
        this.getUsers();
      }, 1000);
    },

    async getUsers() {
      try {
        await this.getAllUsers();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.main {
  /* min-height: 90vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: dashed 2px red; */
  margin: 100px 0;
}
</style>
