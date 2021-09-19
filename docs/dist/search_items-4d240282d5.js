searchNodes=[{"doc":"This module provides functions to work with collections, documents and graphs. It is a main API for this library.","ref":"earangodb.html","title":"earangodb","type":"module"},{"doc":"The same as collection_create(Name, document) function","ref":"earangodb.html#collection_create/1","title":"earangodb.collection_create/1","type":"function"},{"doc":"Creates a new collection with a given name and type.","ref":"earangodb.html#collection_create/2","title":"earangodb.collection_create/2","type":"function"},{"doc":"Drops the collection identified by collection-name.","ref":"earangodb.html#collection_delete/1","title":"earangodb.collection_delete/1","type":"function"},{"doc":"Returns an object with an attribute result containing an array of all collection descriptions.","ref":"earangodb.html#collections_list/0","title":"earangodb.collections_list/0","type":"function"},{"doc":"Creates a new document from the document given in the body, unless there is already a document with the _key given.","ref":"earangodb.html#document_create/2","title":"earangodb.document_create/2","type":"function"},{"doc":"Deletes the specified document with a given key.","ref":"earangodb.html#document_delete/2","title":"earangodb.document_delete/2","type":"function"},{"doc":"Returns the document identified by document-id. The returned document contains three special attribute _key containing key which uniquely identifies a document in a given collection.","ref":"earangodb.html#document_read/2","title":"earangodb.document_read/2","type":"function"},{"doc":"Replaces the specified document with the one in the body, provided there is such a document .","ref":"earangodb.html#document_replace/3","title":"earangodb.document_replace/3","type":"function"},{"doc":"Partially updates the document identified by document-id. The body of the request must contain a JSON document with the attributes to patch (the patch document). All attributes from the patch document will be added to the existing document if they do not yet exist, and overwritten in the existing document if they do exist there.","ref":"earangodb.html#document_update/3","title":"earangodb.document_update/3","type":"function"},{"doc":"Creates a new edge in the collection.","ref":"earangodb.html#graph_edge_create/5","title":"earangodb.graph_edge_create/5","type":"function"},{"doc":"Removes an edge from the collection.","ref":"earangodb.html#graph_edge_delete/3","title":"earangodb.graph_edge_delete/3","type":"function"},{"doc":"Gets an edge from the given collection.","ref":"earangodb.html#graph_edge_get/3","title":"earangodb.graph_edge_get/3","type":"function"},{"doc":"Updates an edge from the given collection.","ref":"earangodb.html#graph_edge_update/4","title":"earangodb.graph_edge_update/4","type":"function"},{"doc":"Adds a vertex to the given collection.","ref":"earangodb.html#graph_vertex_create/3","title":"earangodb.graph_vertex_create/3","type":"function"},{"doc":"Removes a vertex from the collection.","ref":"earangodb.html#graph_vertex_delete/3","title":"earangodb.graph_vertex_delete/3","type":"function"},{"doc":"Gets a vertex from the collection with a given key.","ref":"earangodb.html#graph_vertex_get/3","title":"earangodb.graph_vertex_get/3","type":"function"},{"doc":"Replaces the data of the specific vertex in the collection.","ref":"earangodb.html#graph_vertex_replace/4","title":"earangodb.graph_vertex_replace/4","type":"function"},{"doc":"Updates the data of the specific vertex in the collection.","ref":"earangodb.html#graph_vertex_update/4","title":"earangodb.graph_vertex_update/4","type":"function"},{"doc":"The creation of a graph requires the name of the graph and a definition of its edges.","ref":"earangodb.html#graphs_create/4","title":"earangodb.graphs_create/4","type":"function"},{"doc":"Drops an existing graph object by name.","ref":"earangodb.html#graphs_delete/1","title":"earangodb.graphs_delete/1","type":"function"},{"doc":"Selects information for a given graph. Will return the edge definitions as well as the orphan collections. Or returns a 404 if the graph does not exist.","ref":"earangodb.html#graphs_get/1","title":"earangodb.graphs_get/1","type":"function"},{"doc":"Lists all graphs stored in this database.","ref":"earangodb.html#graphs_list/0","title":"earangodb.graphs_list/0","type":"function"},{"doc":"","ref":"earangodb.html#t:ok_response_or_error_reason/0","title":"earangodb.ok_response_or_error_reason/0","type":"type"}]