// document.addEventListener('DOMContentLoaded', function () {

//   const tabSelect = document.querySelectorAll('.navTab');
//   const tabSwitch = document.querySelectorAll(".tabSelector");

//   tabSelect.forEach(function (item) {
//     item.addEventListener('click', function () {

//       // Remove 'active' class from all tabs
//       tabSwitch.forEach(disable => disable.classList.remove('active'));

//       // Identify the clicked tab and activate it
//       const clickedTabId = item.id;
//       const clickedTab = document.querySelector(`#${clickedTabId}`);
//       tabActivate(clickedTab);

//       function tabActivate(tabId) {
//         tabId.classList.add('active');
//         console.log('It works');
//       }

//     });
//   });

// });


document.addEventListener('DOMContentLoaded', function () {

  const tabSelect = document.querySelectorAll('.navTab');
  const tabSwitch = document.querySelectorAll('.tabSelector');

  tabSelect.forEach(function (item) {
    item.addEventListener('click', function () {

      // Remove 'active' class from all tabs
      tabSwitch.forEach(disable => disable.classList.remove('active'));

      // Identify the clicked tab and activate it
      const clickedTabId = item.id;
      const clickedTab = document.querySelector(`#${clickedTabId}`);
      tabActivate(clickedTab);

      function tabActivate(tabId) {
        tabId.classList.add('active');
        console.log('It works');

        // Additional actions on elements inside the clicked tab
        const innerElements = tabId.querySelectorAll('.innerElement');
        console.log('Inner elements:', innerElements);

        innerElements.forEach(innerElement => {
          console.log('Adding class to:', innerElement);
          innerElement.classList.add('activeIn');
          innerElement.classList.remove('active'); // Remove any existing 'active' class
        });
      }

    });
  });

});

