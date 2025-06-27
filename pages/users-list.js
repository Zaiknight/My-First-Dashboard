function addUserstoTable(){
   const tableBody = document.getElementById('userElement');
   const userList = JSON.parse(localStorage.getItem("all_users")) || [];

   const userName = [];
   const userRole = [];
   const userDate = [];
   const userDescription = [];
   userRole[0] = 'Admin';
   userDescription[0] = 'SuperUser'

    for(let i = 0; i < userList.length; i++){

        userName[i] = userList[i].name;

        if(userRole[i] == null){
            userRole[i] = "Standard";
        }

        if(userDate[i] == null){
            userDate[i] = "24/6/2025";
        }

        if(userDescription[i] == null){
            userDescription[i] = 'User';
        }

        const html = `<tr class="text-gray-700 dark:text-gray-400 align-left">
                      <td class="px-4 py-3">
                          <div>
                            <p class="font-semibold dark:text-white" id="userName">${userName[i]}</p>
                            <p class="text-xs text-gray-600 dark:text-gray-400" id="userDis">
                              ${userDescription[i]}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-4 py-3 text-xs">
                        <span
                          class="px-2 py-1 font-semibold leading-tight text-green-700 dark:text-white"
                          id="role"
                        >
                          ${userRole[i]}
                        </span>
                      </td>
                      <td class="px-4 py-3 text-sm" id="date">
                        ${userDate[i]}
                      </td>
                      <td class="px-2 py-3">
                        <div class="flex items-center space-x-4 text-sm">
                          <button
                            class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                            aria-label="Edit"
                            id="edit"
                          >
                            <svg
                              class="w-5 h-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                              ></path>
                            </svg>
                          </button>
                          <button
                            class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                            aria-label="Delete"
                            id="delete"
                          >
                            <svg
                              class="w-5 h-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>`;

                tableBody.insertAdjacentHTML('beforeend',html);
    }


    console.log(users_list);
} 

addUserstoTable();
