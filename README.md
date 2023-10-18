# Assumptions

- Currently, we are searching for repositories within a specific user that fit the criteria to get an exact search.
- To do a search for repositories in public and private, we can use the following URL:
  `https://api.github.com/search/repositories?q={owner_name/repo_name}&is:exact=true`
- This URL searches for all public and private repositories in GitHub. For each match, we have to use the owner name with the repository name to get the array of objects. We can then use the zeroth index as our match.

# Environment Setup

- Replace ACCESS_TOKEN_GOES_HERE and OWNER_NAME_GOES_HERE with your own github varaibles in main.js(Line 12,13)
- The build files have already been generated.
- To run the application, open terminal and run following npm run run-server
    - application will be up and running http://127.0.0.1:8080/

# Improvements

- The design can be improved significantly.
- When working with client-side JavaScript applications, it's crucial to handle access tokens securely to prevent unauthorized access or exposure of sensitive information. We can introduce the config file method to secure the token and seperate it from JS file and manage it from the config

- Display of errors we can use swal alertbox and also show error messages using a alert bar above the search bar
- Error messages can be improved more

# How to Use the Application

To use the application, simply enter the name of the repository you are looking for in the search bar and click the "Search" button. The application will then return a list of all repositories that match your search criteria.

# Known Limitations

The application currently only searches for repositories within a specific user. We plan to add support for searching for repositories across all users in the future.
