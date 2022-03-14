<template>
  <v-app id="messages">
    <div class="main">
      <h1><font-awesome-icon :icon="['fas', 'envelope']" /> All Messages</h1>

      <div>
        <v-data-table
          :headers="headers"
          :items="messages"
          :items-per-page="5"
          :search="search"
          class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Messages</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
              <v-dialog v-model="dialog" max-width="500px">
                <v-card>
                  <v-card-title>
                    <span class="text-h5">{{ formTitle }}</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.title"
                            label="Title"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.text"
                            label="Text"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.email"
                            label="email"
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
      { text: "title", value: "title" },
      { text: "text", value: "text" },
      { text: "email", value: "email" },
      { text: "Actions", value: "actions", sortable: false },
    ],

    editedIndex: -1,
    editedItem: {
      _id: "",
      title: "",
      text: "",
      email: "",
    },
    defaultItem: {
      _id: "",
      title: "",
      text: "",
      email: "",
    },
  }),

  computed: {
    ...mapGetters(["messages"]),
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
    this.getMessages();
  },

  methods: {
    ...mapActions(["getAllMessages", "deleteMessage"]),
    async getMessages() {
      try {
        await this.getAllMessages();
      } catch (error) {
        console.log(error);
      }
    },

    deleteItem(item) {
      this.editedIndex = this.messages.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.deleteMessage(this.editedItem._id);
      this.closeDelete();
      setTimeout(() => {
        this.getAllMessages();
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
        this.getMessages();
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
