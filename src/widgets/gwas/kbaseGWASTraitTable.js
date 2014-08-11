(function( $, undefined ) {
    $.KBWidget({
        name: "KBaseGWASTraitTable",
        parent: "kbaseWidget",
        version: "1.0.0",
        options: {
            type: "KBaseGwasData.GwasPopulationTrait",
            width: window.innerWidth - 60,
            height: (window.innerHeight - 160)/2
        },

        workspaceURL: "https://kbase.us/services/ws/",

        init: function(options) {
            this._super(options);

            var self = this;
            this.workspaceClient = new Workspace(this.workspaceURL);

            var success = function(data) {                    
                self.collection = data[0];
                var id = self.collection.data.GwasPopulation_obj_id;

                var innerMethod = function(data2){
                    var collection = data2[0];
                    var domainTable = $("<table/>").addClass("table table-bordered table-striped").attr('id', 'popTable');                        

                    if (collection.data.hasOwnProperty("ecotype_details")) {
                        var ecotypeDetails = collection.data.ecotype_details;
                        var innerHTML = '<thead><tr><th>Country</th><th>Ecotype Id</th><th>Native Name</th><th>Region</th><th>Site</th><th>Stock Parent</th></tr></thead><tbody>';
                    
                        for (var i = ecotypeDetails.length - 1; i > -1; i--) {
                            innerHTML += "<tr>" +
                                             "<td>" + ecotypeDetails[i].country + "</td>" +
                                             "<td>" + ecotypeDetails[i].ecotype_id + "</td>" + 
                                             "<td>" + ecotypeDetails[i].nativename + "</td>" + 
                                             "<td>" + ecotypeDetails[i].region + "</td>" + 
                                             "<td>" + ecotypeDetails[i].site + "</td>" + 
                                             "<td>" + ecotypeDetails[i].stockparent + "</td>" +
                                         "</tr>";
                        }
                        innerHTML += "</tbody>";

                        //make the table contents what we just created as a string
                        domainTable.html(innerHTML);
                    }
                    else if (collection.data.hasOwnProperty("observation_unit_details")) {
                        var details = collection.data.observation_unit_details;
                        var innerHTML = '<thead><tr><th>Country</th><th>observation Unit Id</th><th>Native Names</th><th>Region</th><th>Source Id</th></tr></thead><tbody>';
                        
                        for (var i = details.length - 1; i > -1; i--) {
                            innerHTML += "<tr>" +
                                             "<td>" + details[i].country + "</td>" +
                                             "<td>" + details[i].kbase_obs_unit_id + "</td>" + 
                                             "<td>" + details[i].nativenames + "</td>" + 
                                             "<td>" + details[i].region + "</td>" + 
                                             "<td>" + details[i].source_id + "</td>" +
                                         "</tr>";
                        }
                        innerHTML += "</tbody>";

                        //make the table contents what we just created as a string
                        domainTable.html(innerHTML);
                    }
                    
                    self.$elem.append(domainTable);

                    $("#popTable").dataTable({"iDisplayLength": 4, "bLengthChange": false})
                    $("#popTable_wrapper").css("overflow-x","hidden");
                };

                if (id.indexOf("/") > -1) {
                    self.workspaceClient.get_objects([{ref: id}]).then(innerMethod, self.rpcError);
                }
                else {
                    self.workspaceClient.get_objects([{name: id, workspace: self.options.ws}]).then(innerMethod, self.rpcError);                
                }
            };

            if (this.options.id.indexOf("/") > -1) {
                this.workspaceClient.get_objects([{ref : this.options.id}]).then(success, self.rpcError);
            }
            else {
                this.workspaceClient.get_objects([{name : this.options.id, workspace: this.options.ws}]).then(success, self.rpcError);                
            }

            return this;
        },
        getData: function() {
            return {
                type:this.options.type,
                id: this.options.id,
                workspace: this.options.ws,
                title: "GWAS Population Trait Distribution"
            };
        }
    });
})( jQuery )
