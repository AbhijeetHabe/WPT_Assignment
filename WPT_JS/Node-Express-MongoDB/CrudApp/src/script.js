document.addEventListener('DOMContentLoaded', () => {
    const userList = document.getElementById('user-list');
    const addUserForm = document.getElementById('add-user-form');
    const responseContainer = document.getElementById('response-container');
    const backButton = document.getElementById('back-button');

    // Function to fetch user data from the server
    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:4000/');
            const data = await response.json();

            // Clear existing user list
            userList.innerHTML = '';

            // Populate user list
            data.forEach(user => {
                const row = document.createElement('tr');

                // Create name cell
                const nameCell = document.createElement('td');
                nameCell.textContent = user.name;

                // Create email cell
                const emailCell = document.createElement('td');
                emailCell.textContent = user.email;

                // Create action cell
                const actionCell = document.createElement('td');

                // Create delete button
                const deleteButton = document.createElement('button');
                deleteButton.classList.add('delete-button');
                deleteButton.textContent = 'Delete';
                deleteButton.addEventListener('click', () => deleteUser(user._id.toString()));

                // Create edit button
                const editButton = document.createElement('button');
                editButton.classList.add('edit-button');
                editButton.textContent = 'Edit';
                editButton.addEventListener('click', () => (user._id, user.name, user.email));

                // Append delete and edit buttons to action cell
                actionCell.appendChild(deleteButton);
                actionCell.appendChild(editButton);

                // Append cells to the row
                row.appendChild(nameCell);
                row.appendChild(emailCell);
                row.appendChild(actionCell);

                // Append row to the user list
                userList.appendChild(row);
            });
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

  // Function to delete a user
const deleteUser = async (userId) => {
    try {
        const response = await fetch(`http://localhost:4000/deleteuser/${userId}`, {
            method: 'DELETE'
        });

        const data = await response.json();
        console.log(data.message);

        // Fetch updated user list
        fetchUsers();
    } catch (error) {
        console.error('Error deleting user:', error);
    }
};

// Function to edit a user
const editUser = (userId, name, email) => {
    // Implement the edit functionality as per your requirements
    console.log(`Editing user with ID: ${userId}, Name: ${name}, Email: ${email}`);
};

    // Function to add a new user
    const addUser = async (name, email) => {
        try {
            const response = await fetch('http://localhost:4000/adduser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email })
            });

            const data = await response.json();
            console.log(data.message);

            // Display response message
            responseContainer.textContent = data.message;

            // Clear response after 3 seconds
            setTimeout(() => {
                responseContainer.textContent = '';
            }, 3000);

            // Fetch updated user list
            fetchUsers();
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    // Fetch initial user data on page load
    fetchUsers();

    // Handle form submission
    addUserForm.addEventListener('submit', event => {
        event.preventDefault();

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');

        const name = nameInput.value;
        const email = emailInput.value;

        // Add the new user
        addUser(name, email);

        // Clear input fields
        nameInput.value = '';
        emailInput.value = '';
    });

    // Event listener for back button click
    backButton.addEventListener('click', () => {
        window.location.href = 'index.html'; // Navigate to the list of users page
    });
});
