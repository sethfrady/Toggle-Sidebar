// selectors
const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

// event listeners
toggleBtn.addEventListener('click', function() {
    // if (sidebar.classList.contains('show-sidebar')) { // when clicking off 
    //     sidebar.classList.remove('show-sidebar');
    // } else {
    //     sidebar.classList.add('show-sidebar'); // when clicking on
    // }
    sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', function() {
    sidebar.classList.remove("show-sidebar");
})