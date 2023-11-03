<template>
    <div class="view_body pa-2" style="
                                      clear: right;
                                      /* border: solid 1px black; */
                                      margin: auto;

                                      width: 95%;
                                      height: 98%;
                                    ">
        <h1 style="float: left">Manage Doctor</h1>
        <div style="clear: both" elevation="2">
            <div style="width: 100%; height: 50px; padding: 10px">
                <b>list of doctors</b>
            </div>
            <hr style="width: 98%; margin: auto" />
            <div class="pa-4">
                <table style="border-collapse: collapse; width: 100%" border="1">
                    <tr>
                        <th style="width: 5%">ID</th>
                        <th style="width: 20%">Title</th>
                        <th style="width: 20%">Author</th>
                        <th style="width: 20%">Date</th>
                        <th style="width: 10%">Actions</th>
                    </tr>
                    <tr v-for="(e, i) in data" :key="i">
                        <td>{{ e.ID }}</td>
                        <td>{{ e.Title }}</td>
                        <td>{{ e.Author }}</td>
                        <td>{{ e.Date }}</td>
                        <td style="text-align: center">
                            <v-icon class="mr-4">mdi-pencil</v-icon>



                            <v-icon>mdi-trash-can</v-icon>
                        </td>
                    </tr>
                </table>
                <br />
                <span>
                    <v-btn elevation="2"> &lt; </v-btn>

                    <v-btn elevation="2"> &gt; </v-btn>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ManagerDoctoc",
    components: {},

    setup() {
        const data = [
            {
                ID: "1",
                Title: "1",
                Author: "1",
                Date: "1",
                Actions: "1",
            },
        ];
        return {
            // headers,
            // desserts,
            // itemsPerPage

            data,
        };
    },
};
</script>

<style scoped>
td {
    padding: 10px;
}

th {
    text-align: left;
    padding: 10px;
    font-weight: bold;
}
</style>
