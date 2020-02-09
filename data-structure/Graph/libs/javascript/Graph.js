const Queue = require('./Queue');
// create a graph class
class Graph {
    // defining vertex array and
    // adjacent list
    constructor(noOfVertices)
    {
        this.noOfVertices = noOfVertices;
        this.adjList = new Map();
    }

    /**
     * Add vertex to graph
     * @param v
     */
    addVertex(v)
    {
        // initialize the adjacent list with a
        // null array
        this.adjList.set(v, []);
    }

    // add edge to the graph
    addEdge(v, w)
    {
        // get the list for vertex v and put the
        // vertex w denoting edge between v and w
        this.adjList.get(v).push(w);

        // Since graph is undirected,
        // add an edge from w to v also
        this.adjList.get(w).push(v);
    }

    // Prints the vertex and adjacency list
    printGraph()
    {
        // get all the vertices
        const get_keys = this.adjList.keys();

        // iterate over the vertices
        for (let i of get_keys)
        {
            // great the corresponding adjacency list
            // for the vertex
            const get_values = this.adjList.get(i);
            let conc = "";

            // iterate over the adjacency list
            // concatenate the values into a string
            for (let j of get_values)
                conc += j + " ";

            // print the vertex and its adjacency list
            console.log(i + " -> " + conc);
        }
    }

    // function to performs BFS
    bfs(startingNode)
    {

        // create a visited array
        const visited = [];
        for (let i = 0; i < this.noOfVertices; i++)
            visited[i] = false;

        // Create an object for queue
        const q = new Queue();

        // add the starting node to the queue
        visited[startingNode] = true;
        q.enqueue(startingNode);

        // loop until queue is element
        while (!q.isEmpty()) {
            // get the element from the queue
            const getQueueElement = q.dequeue();

            // passing the current vertex to callback funtion
            console.log(getQueueElement);

            // get the adjacent list for current vertex
            const get_List = this.adjList.get(getQueueElement);

            // loop through the list and add the element to the
            // queue if it is not processed yet
            for (let i in get_List) {
                const neigh = get_List[i];

                if (!visited[neigh]) {
                    visited[neigh] = true;
                    q.enqueue(neigh);
                }
            }
        }
    }
    // dfs(v)
}

module.exports = Graph;
