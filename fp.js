// ------------------ TO-DO LIST WITH LOCAL STORAGE ------------------
    function loadTasks() {
      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      const taskList = document.getElementById("taskList");
      taskList.innerHTML = "";
      tasks.forEach((task, index) => {
        const div = document.createElement("div");
        div.className = "task-item";
        div.innerHTML = `${task} <button class='remove-btn' onclick='removeTask(${index})'>Remove</button>`;
        taskList.appendChild(div);
      });
    }

    function addTask() {
      const input = document.getElementById("taskInput");
      const task = input.value.trim();
      if (task) {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        input.value = "";
        loadTasks();
      }
    }

    function removeTask(index) {
      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      loadTasks();
    }

    // ------------------ PRODUCT FILTER & SORT ------------------
    const products = [
      { name: "Smartphone", category: "electronics", price: 400, image: "https://picsum.photos/id/1010/300/200" },
      { name: "Headphones", category: "electronics", price: 100, image: "https://picsum.photos/id/1013/300/200" },
      { name: "Sneakers", category: "fashion", price: 80, image: "https://picsum.photos/id/1020/300/200" },
      { name: "Watch", category: "fashion", price: 150, image: "https://picsum.photos/id/1021/300/200" },
    ];

    function displayProducts(items) {
      const grid = document.getElementById("productGrid");
      grid.innerHTML = "";
      items.forEach(p => {
        grid.innerHTML += `
          <div class="shop-item">
            <img src="${p.image}" alt="${p.name}">
            <h4>${p.name}</h4>
            <p>Category: ${p.category}</p>
            <p>Price: $${p.price}</p>
          </div>`;
      });
    }

    function filterProducts() {
      const category = document.getElementById("categoryFilter").value;
      let filtered = category === "all" ? products : products.filter(p => p.category === category);
      displayProducts(filtered);
    }

    function sortProducts() {
      const sort = document.getElementById("priceSort").value;
      let sorted = [...products];
      if (sort === "low") sorted.sort((a, b) => a.price - b.price);
      if (sort === "high") sorted.sort((a, b) => b.price - a.price);
      displayProducts(sorted);
    }

    // ------------------ INIT ------------------
    window.onload = () => {
      loadTasks();
      displayProducts(products);
    };