<template>
  <v-app id="appointments">
    <div class="main">
      <h1>
        <font-awesome-icon :icon="['fas', 'calendar']" /> All Appointments
      </h1>

      <div>
        <h3 v-if="!appointments">Loading...</h3>

        <v-data-table
          v-else
          :headers="headers"
          :items="appointments"
          :items-per-page="5"
          :search="search"
          class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Appointments</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
              <v-dialog v-model="dialog" max-width="500px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="primary"
                    dark
                    class="mb-2"
                    v-bind="attrs"
                    v-on="on"
                  >
                    New Item
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="text-h5">{{ formTitle }}</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.date"
                            label="Appointment date"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.status"
                            label="Status"
                          ></v-text-field>
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
            <button style="color: green; margin-left: 12px">Approve?</button>
            <!-- <a class="btn btn-primary ml-2">Approve?</a> -->
          </template>
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

      { text: "date", value: "date" },
      { text: "status", value: "status" },
      { text: "user", value: "user" },
      { text: "Actions", value: "actions", sortable: false },
    ],

    editedIndex: -1,
    editedItem: {
      _id: "",
      date: "",
      status: "",
    },
    defaultItem: {
      _id: "",
      date: "",
      status: "",
      user: "",
    },

    editedStatus: {
      _id: "",
      status: "approved",
    },
  }),

  computed: {
    ...mapGetters(["appointments"]),
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
    this.getAllAppointments();
  },

  methods: {
    ...mapActions([
      "getAppointments",
      "createAppointment",
      "editAppointment",
      "deleteAppointment",
    ]),
    async getAllAppointments() {
      try {
        await this.getAppointments();
      } catch (error) {
        console.log(error);
      }
    },

    editItem(item) {
      this.editedIndex = this.appointments.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.appointments.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      let id = this.appointments[this.editedIndex]._id;
      console.log(id);
      this.deleteAppointment(id);
      this.closeDelete();
      setTimeout(() => {
        this.getAppointments();
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
      this.close();
      setTimeout(() => {
        this.getAllAppointments();
      }, 1000);
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
