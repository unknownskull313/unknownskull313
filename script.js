const client = new Appwrite.Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1') 
    .setProject('672900e40025bbfbc904'); 

const account = new Appwrite.Account(client);
const databases = new Appwrite.Databases(client);

const databaseId = '672902e8001b4e07ecd2';
const collectionId = '67290406001f638ee25b';

document.getElementById('login-form').addEventListener('submit', async function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const session = await account.createSession(username, password);
        document.getElementById('message').innerText = 'Login successful!';

        const userData = {
            username: username,
        };

        await databases.createDocument(databaseId, collectionId, 'unique()', userData);
        console.log('User data saved to the database:', userData);
    } catch (error) {
        document.getElementById('message').innerText = 'Error: ' + error.message;
        console.error('Error during login or saving user data:', error);
    }
});
