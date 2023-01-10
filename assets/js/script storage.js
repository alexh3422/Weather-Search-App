   
            function saveSearch() {
            
                let searchHistory = citySearch.value;
                // Add the new search to the search history
                searchHistory.push(citySearch);
                // Save the updated search history to local storage
                localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  
                displaySearchHistory();
              }
              
              function displaySearchHistory() {
                let searchHistory = JSON.parse(localStorage.getItem('searchHistory') || '[]');
                let container = document.getElementById('history-list');
                // Clear the container element
                container.innerHTML = '';
                // Create a button for each search in the search history
                for (let i = 0; i < searchHistory.length; i++) {
                  let search = searchHistory[i];
                  let button = document.createElement('button');
                  button.textContent = search;
                  container.appendChild(button);
                }
              }
  
  
             saveSearch() 
              
            }
          );