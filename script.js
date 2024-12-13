function mincost(arr) { 
    // Min-Heap using sorting approach
    const heapify = (arr) => {
        arr.sort((a, b) => a - b);
    };

    let totalCost = 0;

    // Convert the array into a min-heap
    heapify(arr);

    // Continue until there's only one rope left
    while (arr.length > 1) {
        // Remove the two smallest ropes (first two elements)
        const first = arr.shift();
        const second = arr.shift();

        // Cost to connect them
        const cost = first + second;
        totalCost += cost;

        // Add the new rope length back to the heap
        arr.push(cost);
        heapify(arr); // Re-heapify the array
    }

    return totalCost; // Return the total cost
}

module.exports = mincost;
