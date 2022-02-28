<template>
    <v-app id="announcements">
        <div class="main">
            
            <h1><font-awesome-icon :icon="['fas', 'bullhorn']"/> All Announcements</h1>
    
            <div>
                <h3 v-if="!announcements">Loading...</h3>

                <v-data-table
                    v-else
                    :headers="headers"
                    :items="announcements"
                    :items-per-page="5"
                    :search="search"
                    class="elevation-1 table"
                >
                    <template v-slot:top>
                    <v-toolbar
                        flat
                    >
                        <v-toolbar-title>Announcements</v-toolbar-title>
                        <v-divider
                        class="mx-4"
                        inset
                        vertical
                        ></v-divider>
                        <v-spacer></v-spacer>
                        <v-dialog
                        v-model="dialog"
                        max-width="500px"
                        >
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
                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                >
                                    <v-text-field
                                    v-model="editedItem.title"
                                    label="Title"
                                    ></v-text-field>
                                </v-col>
                             
                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                >
                                    <v-text-field
                                    v-model="editedItem.bloodtype"
                                    label="Blood Type"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                >
                                    <v-text-field
                                    v-model="editedItem.city"
                                    label="City"
                                    ></v-text-field>
                                </v-col>
                                </v-row>
                                <v-row>
                                     <v-col
                                   
                                >
                                    <v-textarea
                                    v-model="editedItem.text"
                                    label="Description"
                                    ></v-textarea>
                                </v-col>
                                </v-row>
                            </v-container>
                            </v-card-text>

                            <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="blue darken-1"
                                text
                                @click="close"
                            >
                                Cancel
                            </v-btn>
                            <v-btn
                                color="blue darken-1"
                                text
                                @click="save"
                            >
                                Save
                            </v-btn>
                            </v-card-actions>
                        </v-card>
                        </v-dialog>
                        <v-dialog v-model="dialogDelete" max-width="500px">
                        <v-card>
                            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
                            <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                            <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
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
                    <v-icon
                        small
                        class="mr-2"
                        @click="editItem(item)"
                    >
                        mdi-pencil
                    </v-icon>
                    <v-icon
                        small
                        @click="deleteItem(item)"
                    >
                        mdi-delete
                    </v-icon>
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
import { mapGetters, mapActions } from 'vuex'

  export default {
    data: () => ({
      search: '',
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'ID',
          align: 'start',
          sortable: false,
          value: '_id',
        },
        { text: 'Title', value: 'title' },
        { text: 'Description', value: 'text' },
        { text: 'Bloodtype', value: 'bloodtype' },
        { text: 'City', value: 'city' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      
      editedIndex: -1,
      editedItem: {
        _id: '',
        title: '',
        text: '',
        bloodtype: '',
        city: ''
      },
      defaultItem: {
         _id: '',
        title: '',
        text: '',
        bloodtype: '',
        city: ''
      },
    }),

    computed: {
        ...mapGetters(['announcements']),        
        formTitle () {
            return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
        },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.getAllAnnouncements()
    },
    
    methods: {
        ...mapActions(["getAnnouncements", "createAnnouncement", "editAnnouncement","deleteAnnouncement"]),

      editItem (item) {
        this.editedIndex = this.announcements.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.announcements.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        let id = this.announcements[this.editedIndex]._id
        console.log(id)
        this.deleteAnnouncement(id)
        this.closeDelete()
        setTimeout(()=>{
          this.getAnnouncements()
        }, 1000)
        
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      async save () {
        if (this.editedIndex > -1) {
            //edit user block code
            //Object.assign(this.users[this.editedIndex], this.editedItem)
             try {
                await this.editAnnouncement(this.editedItem);
            } catch (error) {
                console.log(error)
            }
        } else {
            //add new user block code
             try {
                await this.createAnnouncement(this.editedItem);
            } catch (error) {
                console.log(error)
            }
        }
        this.close()
        setTimeout(()=>{
          // console.log('timeout!! getUsers')
          this.getAnnouncements()
        }, 1000)
       
      },

      async getAllAnnouncements() {
        try {
            await this.getAnnouncements();
        } catch (error) {
            console.log(error)
        }
        }
    }
  }
</script>

<style scoped>
.main{
    /* min-height: 90vh; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: dashed 2px red; */
    margin: 100px 0;
}

.table{
  max-width: 900px;
}

</style>
